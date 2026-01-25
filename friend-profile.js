
  const profileUser = {name: "Edwin", isFollowing: false};
  const followBtn = document.querySelector('.followBtn');
  const messageBtn = document.querySelector('.messageBtn');

  if(profileUser.isFollowing){
    followBtn.textContent = "Following";
    followBtn.style.backgroundColor = "white";
    followBtn.style.color = "black";
    messageBtn.style.display = 'block';
    
  }else{
    followBtn.textContent = "Follow";
    followBtn.style.backgroundColor = "black";
    followBtn.style.color = "white";
  }

  followBtn.onclick = function(){
   if(profileUser.isFollowing){ 
    profileUser.isFollowing = false;
    followBtn.textContent = "Follow";
    followBtn.style.backgroundColor = "black";
    followBtn.style.color = "white";
    followBtn.style.border = "none";
    followBtn.style.border = "1px solid black";
    messageBtn.style.display = 'none';
    
   }else{
    profileUser.isFollowing = true;
    followBtn.textContent = "Following";
    followBtn.style.backgroundColor = "white";
    followBtn.style.color = "black";
    followBtn.style.border = "1px solid grey";
    followBtn.style.width = "200px";
    messageBtn.style.display = 'block';
   }
  }


 const post =  document.querySelector('.post');
 const statusD = document.querySelector('.status');
 const postSection = document.getElementById('post-section');
 const statusDSection = document.getElementById('status-section');
 
 statusD.onclick = function (){
postSection.style.display = "none";
statusDSection.style.display = "grid";

post.style.borderBottom = "1px solid black";
post.style.fontWeight = "normal";
statusD.style.fontWeight = "bold";
statusD.style.borderBottom = "2px solid black";
 };

 post.onclick = function (){
postSection.style.display = "grid";
statusDSection.style.display = "none";

post.style.borderBottom = "2px solid black";
post.style.fontWeight = "bold";
statusD.style.fontWeight = "normal";
statusD.style.borderBottom = "1px solid whitesmoke";
 };


const verify = document.getElementById('verify');
const verifyAlert = document.querySelector('.verify-alert');

verify.onclick = function (){
verifyAlert.style.display = "block";

setTimeout(function(){
 verifyAlert.style.display = "none";
}, 2000);

};