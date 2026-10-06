
(()=>{
  const btn=document.querySelector('.menu-btn'), nav=document.querySelector('.mobile-nav');
  if(btn&&nav){btn.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',open?'true':'false')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');btn.setAttribute('aria-expanded','false')}));}
  const rail=document.querySelector('.contact-rail'), toggle=document.querySelector('.rail-toggle');
  if(rail&&toggle){toggle.addEventListener('click',()=>rail.classList.toggle('collapsed'));}
  const form=document.querySelector('[data-contact-form]');
  if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const msg=encodeURIComponent(`Website enquiry

Name: ${d.get('name')||''}
Phone: ${d.get('phone')||''}
Email: ${d.get('email')||''}
Matter: ${d.get('matter')||'Legal matter'}

${d.get('message')||''}`);window.open(`https://wa.me/254722358565?text=${msg}`,'_blank','noopener');});}
})();
