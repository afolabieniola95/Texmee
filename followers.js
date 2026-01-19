const followersContainer = document.querySelector('.followers-container');

followersContainer.textontent = "No followers yet";
followersContainer.style.textAlign = "center";
followersContainer.style.color = "grey";
followersContainer.style.paddingTop = "50px";
followersContainer.style.fontSize = "17px";

const followBtn = document.querySelector('.follow-btn');
const dots = document.querySelector('.dot');

followBtn.addEventListener('click', ()=>{
  followBtn.style.display = 'none';
  dots.style.display = 'block';
});

const dots = document.createElement('div');
dots.className = 'dot';