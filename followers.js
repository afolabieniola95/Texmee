

const followAlert = document.querySelector('.follow-alert');
const dotMenu = document.querySelector('.dot-menu');
const dot = document.querySelector('.dots');
const menuClose = document.querySelector('.dot-menu-close');

dot.addEventListener('click', ()=>{
dotMenu.style.top = '5%';
dotMenu.style.right = '2%';
dotMenu.style.width = '100px';
dotMenu.style.height = '80px';

menuClose.style.display = 'block';
});

menuClose.addEventListener('click', ()=>{
dotMenu.style.top = '0%';
dotMenu.style.right = '0%';
dotMenu.style.width = '0px';
dotMenu.style.height = '0px';

menuClose.style.display = 'none';
});

document.addEventListener('click', (e)=>{
  if(e.target.classList.contains('follow-btn')){
    const card = e.target.closest('.follower-card');
    const followBtn = card.querySelector('.follow-btn');
    const dots = card.querySelector('.dots');

    followBtn.style.display = 'none';
    dots.style.display = 'flex';
    followAlert.style.transition = 'opacity 0.1s ease-out';
    followAlert.style.opacity = '1';

    setTimeout(()=>{
    followAlert.style.transition = 'opacity 0.1s ease-in';
    followAlert.style.opacity = '0';
    }, 2000); 

     
  }

});
