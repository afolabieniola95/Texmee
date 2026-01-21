
const followAlert = document.querySelector('.follow-alert');
const menuClose = document.querySelector('.dot-menu-close');
const menu = document.querySelector('.menu-modal');


menuClose.addEventListener('click', ()=>{
menu.style.top = '0%';
menu.style.right = '0%';
menu.style.width = '0px';
menu.style.height = '0px';

menuClose.style.display = 'none';
});

document.addEventListener('click', (e)=>{
  if(e.target.classList.contains('menu-dot')){
    const card = e.target.closest('.following-card');
    const menuDot = card.querySelector('.menu-dot');
    const menu = document.querySelector('.menu-modal');
    const menuClose = document.querySelector('.dot-menu-close');
   
  
   menu.style.top = '5%';
   menu.style.right = '2%'
   menu.style.width = '100px';
   menu.style.height = '80px';
   menuClose.style.display = 'block';
  }
});

