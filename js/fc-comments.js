(function () {
  function init() {
    const host=document.getElementById('waline-wrap')
    if(!host || host.dataset.fcReady)return
    host.dataset.fcReady='true'
    const plans=document.querySelector('[data-fc-plans]')
    host.classList.add('fc-comment-surface')
    if(plans){
      document.getElementById('page')?.classList.add('fc-plan-document')
      host.classList.add('fc-plan-comments')
      const heading=document.querySelector('#post-comment .comment-headline span')
      if(heading)heading.textContent=' 计划记录'
      const today=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Shanghai',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date())
      document.getElementById('fc-plan-date').textContent=new Intl.DateTimeFormat('zh-CN',{timeZone:'Asia/Shanghai',dateStyle:'full'}).format(new Date())
      const template=`## ${today}\n\n### 今天最重要的一件事\n- [ ] \n\n### 给自己留的三件事\n- [ ] \n- [ ] \n- [ ] \n\n### 晚间回看\n今天做到了什么？有什么可以放到明天？\n`
      const status=document.getElementById('fc-plan-hint')
      document.getElementById('fc-plan-compose').addEventListener('click',()=>{
        host.classList.toggle('is-writing')
        const open=host.classList.contains('is-writing')
        document.getElementById('fc-plan-compose').setAttribute('aria-expanded',String(open))
        status.textContent=open?'请使用博主账号登录后记录；访客可以阅读已有计划。':'每天留一点余地，也留下完成的痕迹。'
        if(open)host.scrollIntoView({behavior:'smooth',block:'start'})
      })
      document.getElementById('fc-plan-template').addEventListener('click',async()=>{
        try{await navigator.clipboard.writeText(template);status.textContent='每日模板已复制，登录后粘贴到计划框即可。'}
        catch{status.textContent='请复制下方展开的模板。';document.getElementById('fc-plan-template-text').hidden=false}
      })
      document.getElementById('fc-plan-template-text').textContent=template
    }else{
      const note=document.createElement('p');note.className='fc-comment-note'
      note.textContent='昵称即可留言。邮箱选填，用于回复提醒；不填邮箱也会有自己的昵称图案。登录后可以使用固定身份。'
      host.before(note)
    }
    const observer=new MutationObserver(()=>{
      const mail=host.querySelector('#wl-mail')
      if(mail && mail.placeholder!=='选填，用于回复提醒')mail.placeholder='选填，用于回复提醒'
      const nick=host.querySelector('#wl-nick')
      if(nick && nick.placeholder!=='怎么称呼你？')nick.placeholder='怎么称呼你？'
    })
    observer.observe(host,{childList:true,subtree:true})
  }
  window.fcCustomizeComments=init
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init()
  document.addEventListener('pjax:complete',init)
})()
