(function () {
  if (window.fcWalineLoginInstalled) return
  window.fcWalineLoginInstalled = true
  let dialog, host, opener, request
  function close() {
    request?.abort()
    dialog.close()
    dialog.querySelector('[name=password]').value = ''
    dialog.querySelector('[name=code]').value = ''
    if (opener?.isConnected) opener.focus()
  }
  function create() {
    dialog = document.createElement('dialog')
    dialog.className = 'fc-login-dialog'
    dialog.setAttribute('aria-labelledby', 'fc-login-title')
    dialog.innerHTML = `<form class="fc-login-form">
      <button class="fc-login-close" type="button" aria-label="关闭登录">×</button>
      <p class="fc-login-eyebrow">FLYINGCAT / 账号</p>
      <h2 id="fc-login-title">登录后，继续记录。</h2>
      <p class="fc-login-description">使用现有 Waline 账号，登录后留在当前页面。</p>
      <label for="fc-login-email">邮箱</label>
      <input id="fc-login-email" name="email" type="email" autocomplete="username" required>
      <label for="fc-login-password">密码</label>
      <input id="fc-login-password" name="password" type="password" autocomplete="current-password" required>
      <details><summary>我开启了两步验证</summary>
        <label for="fc-login-code">动态验证码</label>
        <input id="fc-login-code" name="code" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]{6}" maxlength="6">
      </details>
      <p class="fc-login-status" role="status" aria-live="polite"></p>
      <button class="fc-login-submit" type="submit">登录并继续</button>
      <p class="fc-login-footnote">密码不会保存。可在评论区退出登录。</p>
    </form>`
    document.body.append(dialog)
    dialog.querySelector('.fc-login-close').addEventListener('click', close)
    dialog.addEventListener('cancel', event => { event.preventDefault(); close() })
    dialog.addEventListener('click', event => { if (event.target === dialog) close() })
    dialog.querySelector('form').addEventListener('submit', submit)
  }
  async function submit(event) {
    event.preventDefault()
    const form = event.currentTarget, status = form.querySelector('.fc-login-status'), button = form.querySelector('[type=submit]')
    if (button.disabled || !form.reportValidity()) return
    let server
    try {
      server = new URL(host.dataset.fcServer)
      if (server.protocol !== 'https:' && !['127.0.0.1', 'localhost'].includes(server.hostname)) throw new Error()
    } catch { status.textContent = '登录服务尚未就绪，请稍后重试。'; return }
    request = new AbortController()
    const pendingRequest = request
    const timeout = setTimeout(() => pendingRequest.abort(), 20000)
    button.disabled = true
    status.textContent = '正在登录…'
    try {
      const response = await fetch(server.href.replace(/\/$/, '') + '/api/token?lang=zh-CN', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'omit',
        body: JSON.stringify({ email: form.elements.email.value.trim(), password: form.elements.password.value, code: form.elements.code.value.trim() }),
        signal: request.signal,
      })
      const result = await response.json()
      if (!dialog.open || request.signal.aborted) return
      if (!response.ok || result.errno !== 0 || typeof result.data?.token !== 'string' || !result.data.token) {
        status.textContent = '登录未成功，请检查邮箱、密码或动态验证码后重试。'
        return
      }
      if (host.classList.contains('fc-plan-comments') && result.data.type !== 'administrator') {
        status.textContent = '日计划需要使用博主的管理员账号登录。'
        return
      }
      const user = Object.fromEntries(['objectId', 'display_name', 'email', 'url', 'avatar', 'type', 'label', 'token'].filter(key => result.data[key] !== undefined).map(key => [key, result.data[key]]))
      const newValue = JSON.stringify(user)
      localStorage.setItem('WALINE_USER', newValue)
      sessionStorage.removeItem('WALINE_USER')
      sessionStorage.setItem('FC_WALINE_LOGIN_RETURN', JSON.stringify({ path: location.pathname, writing: host.classList.contains('is-writing'), draft: host.querySelector('.wl-editor')?.value || '' }))
      close()
      location.reload()
    } catch (error) {
      if (dialog.open) status.textContent = error.name === 'SecurityError' || error.name === 'QuotaExceededError' ? '浏览器未允许保存登录状态，请允许此站点使用本地存储后重试。' : '暂时无法连接登录服务，请检查网络后重试。'
    } finally { clearTimeout(timeout); button.disabled = false }
  }
  document.addEventListener('click', event => {
    if (event.target instanceof Element && event.target.closest('#waline-wrap .wl-logout-btn')) {
      const hint = document.getElementById('fc-plan-hint')
      if (hint) hint.textContent = '已退出登录，未发布的草稿会保留。'
      return
    }
    const target = event.target instanceof Element && event.target.closest('#waline-wrap .wl-info > button.wl-btn[type="button"]')
    if (!target) return
    event.preventDefault()
    event.stopImmediatePropagation()
    opener = target
    host = target.closest('#waline-wrap')
    if (!dialog) create()
    dialog.querySelector('.fc-login-status').textContent = ''
    dialog.showModal()
    dialog.querySelector('[name=email]').focus()
  }, true)
  function resume() {
    let saved
    try { saved = JSON.parse(sessionStorage.getItem('FC_WALINE_LOGIN_RETURN')) } catch { return }
    if (!saved || saved.path !== location.pathname) return
    let timer
    const restore = () => {
      const surface = document.getElementById('waline-wrap'), editor = surface?.querySelector('.wl-editor')
      if (!surface?.dataset.fcReady || !surface.querySelector('.wl-login-info') || !editor) return false
      sessionStorage.removeItem('FC_WALINE_LOGIN_RETURN')
      if (saved.writing) {
        surface.classList.add('is-writing')
        document.getElementById('fc-plan-compose')?.setAttribute('aria-expanded', 'true')
      }
      if (!editor.value && saved.draft) {
        Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value').set.call(editor, saved.draft)
        editor.dispatchEvent(new Event('input', { bubbles: true }))
      }
      const hint = document.getElementById('fc-plan-hint')
      if (hint) hint.textContent = '已登录，可以继续记录今天的计划。'
      editor.focus({ preventScroll: true })
      surface.scrollIntoView({ block: 'start' })
      return true
    }
    if (restore()) return
    const observer = new MutationObserver(() => { if (restore()) { observer.disconnect(); clearTimeout(timer) } })
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-fc-ready'] })
    timer = setTimeout(() => observer.disconnect(), 15000)
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', resume, { once: true }); else resume()
  document.addEventListener('pjax:send', () => { if (dialog?.open) close() })
})()
