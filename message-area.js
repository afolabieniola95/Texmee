   const all = document.querySelector('.all');
   const online = document.querySelector('.online');
   const unread = document.querySelector('.unread');
   const group = document.querySelector('.group');
   const privacy = document.querySelector('.privacy');

  all.style.color = 'white';
   all.style.background = 'black';
   all.style.border = '2px solid black';
   all.style.boxShadow = '1px 1px 2px black';
   all.style.fontWeight = 'bold';
   all.style.fontSize = '11px';
   

 all.addEventListener('click',()=>{
  all.style.color = 'white';
   all.style.background = 'black';
   all.style.border = '1px solid black';
   all.style.boxShadow = '1px 1px 2px black';
   all.style.fontWeight = 'bold';
   all.style.fontSize = '11px';
   
   online.style.color = 'black';
   online.style.background = 'white';
   online.style.border = '1px solid grey';
   online.style.fontWeight = 'normal';
   online.style.boxShadow = 'none';
   online.style.padding = '2px';
   online.style.fontSize = '12px';
   
   unread.style.color = 'black';
   unread.style.background = 'white';
   unread.style.border = '1px solid grey';
   unread.style.fontWeight = 'normal';
   unread.style.boxShadow = 'none';
   unread.style.padding = '2px';
   unread.style.fontSize = '12px';

   privacy.style.color = 'black';
   privacy.style.background = 'white';
   privacy.style.border = '1px solid grey';
   privacy.style.fontWeight = 'normal';
   privacy.style.boxShadow = 'none';
   privacy.style.padding = '2px';
   privacy.style.fontSize = '12px';

   group.style.color = 'black';
   group.style.background = 'white';
   group.style.border = '1px solid grey';
   group.style.fontWeight = 'normal';
   group.style.boxShadow = 'none';
   group.style.padding = '2px';
   group.style.fontSize = '12px';

   chatContainer.style.display = 'block';
   onlineContainer.style.display  = 'none';
   unreadContainer.style.display = 'none';
   privacyContainer.style.display = 'none';
   groupContainer.style.display = 'none';
 });
 
 online.addEventListener('click',()=>{
   online.style.color = 'white';
   online.style.background = 'black';
   online.style.border = '1px solid black';
   online.style.fontWeight = 'bold';
   online.style.boxShadow = '1px 1px 2px black';
   online.style.fontSize = '11px';
   
   all.style.color = 'black';
   all.style.background = 'white';
   all.style.border = '1px solid grey';
   all.style.fontWeight = 'normal';
   all.style.boxShadow = 'none';
   all.style.padding = '2px';
   all.style.fontSize = '12px';
   
   unread.style.color = 'black';
   unread.style.background = 'white';
   unread.style.border = '1px solid grey';
   unread.style.fontWeight = 'normal';
   unread.style.boxShadow = 'none';
   unread.style.padding = '2px';
   unread.style.fontSize = '12px';

   privacy.style.color = 'black';
   privacy.style.background = 'white';
   privacy.style.border = '1px solid grey';
   privacy.style.fontWeight = 'normal';
   privacy.style.boxShadow = 'none';
   privacy.style.padding = '2px';
   privacy.style.fontSize = '12px';

   group.style.color = 'black';
   group.style.background = 'white';
   group.style.border = '1px solid grey';
   group.style.fontWeight = 'normal';
   group.style.boxShadow = 'none';
   group.style.padding = '2px';
   group.style.fontSize = '12px';

   chatContainer.style.display = 'none';
   onlineContainer.style.display  = 'block';
   unreadContainer.style.display = 'none';
   privacyContainer.style.display = 'none';
   groupContainer.style.display = 'none';
 });

 unread.addEventListener('click',()=>{
   unread.style.color = 'white';
   unread.style.background = 'black';
   unread.style.border = '1px solid black';
   unread.style.fontWeight = 'bold';
   unread.style.boxShadow = '1px 1px 2px black';
   unread.style.fontSize = '11px';
   
   all.style.color = 'black';
   all.style.background = 'white';
   all.style.border = '1px solid grey';
   all.style.fontWeight = 'normal';
   all.style.boxShadow = 'none';
   all.style.padding = '2px';
   all.style.fontSize = '12px';

   online.style.color = 'black';
   online.style.background = 'white';
   online.style.border = '1px solid grey';
   online.style.fontWeight = 'normal';
   online.style.boxShadow = 'none';
   online.style.padding = '2px';
   online.style.fontSize = '12px';

   privacy.style.color = 'black';
   privacy.style.background = 'white';
   privacy.style.border = '1px solid grey';
   privacy.style.fontWeight = 'normal';
   privacy.style.boxShadow = 'none';
   privacy.style.padding = '2px';
   privacy.style.fontSize = '12px';

   group.style.color = 'black';
   group.style.background = 'white';
   group.style.border = '1px solid grey';
   group.style.fontWeight = 'normal';
   group.style.boxShadow = 'none';
   group.style.padding = '2px';
   group.style.fontSize = '12px';

   chatContainer.style.display = 'none';
   onlineContainer.style.display  = 'none';
   unreadContainer.style.display = 'block';
   privacyContainer.style.display = 'none';
   groupContainer.style.display = 'none';
 });
 
  privacy.addEventListener('click',()=>{
   privacy.style.color = 'white';
   privacy.style.background = 'black';
   privacy.style.border = '1px solid black';
   privacy.style.fontWeight = 'bold';
   privacy.style.boxShadow = '1px 1px 2px black';
   privacy.style.fontSize = '11px';
   
  all.style.color = 'black';
   all.style.background = 'white';
   all.style.border = '1px solid grey';
   all.style.fontWeight = 'normal';
   all.style.boxShadow = 'none';
   all.style.padding = '2px';
   all.style.fontSize = '12px';

   online.style.color = 'black';
   online.style.background = 'white';
   online.style.border = '1px solid grey';
   online.style.fontWeight = 'normal';
   online.style.boxShadow = 'none';
   online.style.padding = '2px';
   online.style.fontSize = '12px';

   unread.style.color = 'black';
   unread.style.background = 'white';
   unread.style.border = '1px solid grey';
   unread.style.fontWeight = 'normal';
   unread.style.boxShadow = 'none';
   unread.style.padding = '2px';
   unread.style.fontSize = '12px';

   group.style.color = 'black';
   group.style.background = 'white';
   group.style.border = '1px solid grey';
   group.style.fontWeight = 'normal';
   group.style.boxShadow = 'none';
   group.style.padding = '2px';
   group.style.fontSize = '12px';

   chatContainer.style.display = 'none';
   onlineContainer.style.display  = 'none';
   unreadContainer.style.display = 'none';
   privacyContainer.style.display = 'block';
   groupContainer.style.display = 'none';
 });

 group.addEventListener('click',()=>{
   group.style.color = 'white';
   group.style.background = 'black';
   group.style.border = '1px solid black';
   group.style.fontWeight = 'bold';
   group.style.boxShadow = '1px 1px 2px black';
   group.style.fontSize = '11px';
   
   all.style.color = 'black';
   all.style.background = 'white';
   all.style.border = '1px solid grey';
   all.style.fontWeight = 'normal';
   all.style.boxShadow = 'none';
   all.style.padding = '2px';
   all.style.fontSize = '12px';

   online.style.color = 'black';
   online.style.background = 'white';
   online.style.border = '1px solid grey';
   online.style.fontWeight = 'normal';
   online.style.boxShadow = 'none';
   online.style.padding = '2px';
   online.style.fontSize = '12px';

   unread.style.color = 'black';
   unread.style.background = 'white';
   unread.style.border = '1px solid grey';
   unread.style.fontWeight = 'normal';
   unread.style.boxShadow = 'none';
   unread.style.padding = '2px';
   unread.style.fontSize = '12px';

   privacy.style.color = 'black';
   privacy.style.background = 'white';
   privacy.style.border = '1px solid grey';
   privacy.style.fontWeight = 'normal';
   privacy.style.boxShadow = 'none';
   privacy.style.padding = '2px';
   privacy.style.fontSize = '12px';


   chatContainer.style.display = 'none';
   onlineContainer.style.display  = 'none';
   unreadContainer.style.display = 'none';
   privacyContainer.style.display = 'none';
   groupContainer.style.display = 'block';
 });
   
 const chatContainer = document.getElementById('chats-container');
 const onlineContainer = document.getElementById('online-container');
 const unreadContainer = document.getElementById('unread-container');
 const privacyContainer = document.getElementById('privacy-container');
 const groupContainer = document.getElementById('group-container');
const messages = chatContainer.querySelectorAll('[message-id]');

if (messages.length === 0) {
  chatContainer.textContent = 'No chat messages.';
  chatContainer.style.textAlign = 'center';
  chatContainer.style.padding = '10px';
  chatContainer.style.color = 'grey';
  chatContainer.style.fontFamily = 'sans-serif';
  chatContainer.style.fontSize = '15px';
}

 
 onlineContainer.style.display = 'none';
 onlineContainer.style.padding = '10px';
 onlineContainer.style.textAlign = 'center';
 onlineContainer.style.color = 'grey';
 onlineContainer.style.fontFamily = 'sans-serif';
 onlineContainer.style.fontSize = '15px';
 onlineContainer.textContent = 'No online friends.';

 unreadContainer.style.display = 'none';
 unreadContainer.style.padding = '10px';
 unreadContainer.style.textAlign = 'center';
 unreadContainer.style.color = 'grey';
 unreadContainer.style.fontFamily = 'sans-serif';
 unreadContainer.style.fontSize = '15px';
 unreadContainer.textContent = 'No unread messages.';

 privacyContainer.style.display = 'none';
 privacyContainer.style.padding = '10px';
 privacyContainer.style.textAlign = 'center';
 privacyContainer.style.color = 'grey';
 privacyContainer.style.fontFamily = 'sans-serif';
 privacyContainer.style.fontSize = '15px';
 privacyContainer.textContent = 'Create privacy room';

 groupContainer.style.display = 'none';
 groupContainer.style.padding = '10px';
 groupContainer.style.textAlign = 'center';
 groupContainer.style.color = 'grey';
 groupContainer.style.fontFamily = 'sans-serif';
 groupContainer.style.fontSize = '15px';
 groupContainer.textContent = 'No group available.';



   
      function formatTime(date){
        return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
       document.getElementById("chat-time").textContent = formatTime(new Date());
}

   const dotButton = document.getElementById('dot');
   const dotMenu = document.getElementById('menu');
   const backgroundMenu = document.getElementById('background-menu');
   
   backgroundMenu.style.display = 'none';
   
   dotButton.onclick=function(){
   dotMenu.style.width = '200px';
   backgroundMenu.style.display = 'flex';
   document.body.style.overflow = 'hidden';
   }
   
   backgroundMenu.onclick=function(){
   dotMenu.style.width = '0px';
   backgroundMenu.style.display = 'none';
   document.body.style.overflow = 'visible';
   }



