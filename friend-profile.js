
  const profileUser = {name: "Edwin", isFriend: false};
  const friendBtn = document.querySelector('.friendBtn');
  

  if(profileUser.isFriend){
    friendBtn.textContent = "Messages";
    friendBtn.style.backgroundColor = "white";
    friendBtn.style.color = "black";
    
  }else{
    friendBtn.textContent = "Add";
    friendBtn.style.backgroundColor = "black";
    friendBtn.style.color = "white";
  }

  friendBtn.onclick = function(){
   if(profileUser.isFriend){ 
    profileUser.isFriend = false;
    friendBtn.textContent = "Add";
    friendBtn.style.backgroundColor = "black";
    friendBtn.style.color = "white";
    friendBtn.style.border = "none";
    friendBtn.style.border = "1px solid black";
    
   }else{
    profileUser.isFriend = true;
    friendBtn.textContent = "Messages";
    friendBtn.style.backgroundColor = "white";
    friendBtn.style.color = "black";
    friendBtn.style.border = "1px solid grey";
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