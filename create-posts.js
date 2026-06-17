
let mediaData = '';
const fileInput = document.getElementById('fileInput');
const addMedia = document.getElementById('media');
const preview = document.getElementById('preview');
const placeholder = document.getElementById('placeholder');
const postBtn = document.getElementById('post-btn');
const alertTrigger = document.getElementById('trigger-alert');

addMedia?.addEventListener('click', () => fileInput.click());

fileInput?.addEventListener('change', (e) => {
  const file = e.target.files?.[0];
  if (!file) return;

  preview.innerHTML = '';

  const reader = new FileReader();

  reader.onload = function(event) {

    mediaData = event.target.result;

    if (file.type.startsWith('image')) {

      const img = document.createElement('img');
      img.src = mediaData;
      preview.appendChild(img);

    } else if (file.type.startsWith('video')) {

      const video = document.createElement('video');
      video.src = mediaData;
      video.controls = true;
      preview.appendChild(video);

    }
  };

  reader.readAsDataURL(file);
});


postBtn?.addEventListener('click', () => {

  const file = fileInput.files?.[0];

  if (!file) {
    alertTrigger.classList.add('show');
    alertTrigger.textContent = "No content";
     setTimeout(() => { alertTrigger.classList.remove('show');
    }, 3000);
    return;
  }

  const currentUser =
    JSON.parse(localStorage.getItem('currentUser'));

  let allPosts =
    JSON.parse(localStorage.getItem('allPosts')) || [];

  const newPost = {
    id: Date.now(),

    user: {
      name: `${currentUser.firstName} ${currentUser.lastName}`,
      avatar: currentUser.profilePhoto
    },

    content: {
      text: null,
      image: mediaData,
      caption: overlayText.textContent.trim()
    },

    comments: [],

    stats: {
      likes: 0
    },

    ui: {
      liked: false,
      captionExpanded: false,
      following: false
    },

    createdAt: new Date().toISOString()
  };

  allPosts.unshift(newPost);

  localStorage.setItem(
    'allPosts',
    JSON.stringify(allPosts)
  );
 
  alertTrigger.classList.add('show');
    alertTrigger.textContent = "Post created...";
     setTimeout(() => { 
       alertTrigger.classList.remove('show');
    }, 2000);
    
    setTimeout(() =>{
        window.location.href = 'home.html';
    }, 3000);
});

  

const addText = document.getElementById('text');
const textInput = document.getElementById('text-input');
const overlayText = document.getElementById('overlay-text');
const closeOverlay = document.getElementById('close-overlay');
const effect = document.getElementById('effect');
const effectPanel = document.getElementById('effect-panel');
const effectPanelClose = document.getElementById('effect-panel-close');
const mediaNav = document.getElementById('media-nav');
const music = document.getElementById('music');
const musicPanel = document.getElementById('music-panel');


addText?.addEventListener('click', () =>{
  const file = fileInput.files?.[0];
  if(!file){
    btnAlert.style.display = 'block';
    setTimeout(()=>{
   btnAlert.style.display = 'none';
  }, 2000);
    return;
  }else{
textInput.style.display = "block";
closeOverlay.style.display = "block";
mediaNav.style.display = "none";
textInput.focus(); 
  }
});

textInput?.addEventListener('input',() =>{
    overlayText.textContent = textInput.value.trim(); 
});


closeOverlay?.addEventListener('click', () =>{
  const value = textInput.value.trim();

 textInput.style.display = "none";
 closeOverlay.style.display = "none";
 mediaNav.style.display = "flex";
 
 if(value.length > 0){
  overlayText.style.display = "block";
  overlayText.textContent = value;
  } else {
  overlayText.style.display = "none";
 }
});

effect?.addEventListener('click', ()=>{
const file = fileInput.files?.[0];
  if(!file){
    btnAlert.style.display = 'block';
    setTimeout(()=>{
   btnAlert.style.display = 'none';
  }, 2000);
    return;
  }else{
  effectPanel.style.height = '500px';
  effectPanelClose.style.display = 'block';
  }
});

effectPanelClose?.addEventListener('click', ()=>{
effectPanel.style.height = '0px';
effectPanelClose.style.display = 'none';
});


music?.addEventListener('click', ()=>{
const file = fileInput.files?.[0];
  if(!file){
    btnAlert.style.display = 'block';
    setTimeout(()=>{
   btnAlert.style.display = 'none';
  }, 2000);
    return;
  }else{
  musicPanel.style.height = '100vh';
  }
});

const dragHandle = document.querySelector('.drag-handle');
dragHandle?.addEventListener('click', ()=>{
musicPanel.style.height = '0px';
});

const popular = document.getElementById('popular');
const trending = document.getElementById('trending');
const storage = document.getElementById('storage');
const popularContainer = document.getElementById('popular-container');
const trendingContainer = document.getElementById('trending-container');
const storageContainer = document.getElementById('storage-container');


popular.style.background = 'black';
popular.style.color = 'white';
popular.style.textShadow = '1px 1px white';

popular?.addEventListener('click', ()=>{
  popular.style.background = 'black';
  popular.style.color = 'white';
  popular.style.textShadow = '1px 1px white';

  trending.style.background = 'white';
  trending.style.color = 'black';
  trending.style.textShadow = '1px 1px white';

  storage.style.background = 'white';
  storage.style.color = 'black';
  storage.style.textShadow = '1px 1px white';

  popularContainer.style.display = 'block';
  trendingContainer.style.display = 'none';
  storageContainer.style.display = 'none';

});

trending?.addEventListener('click', ()=>{
  trending.style.background = 'black';
  trending.style.color = 'white';
  trending.style.textShadow = '1px 1px white';

  popular.style.background = 'white';
  popular.style.color = 'black';
  popular.style.textShadow = '1px 1px white';

  storage.style.background = 'white';
  storage.style.color = 'black';
  storage.style.textShadow = '1px 1px white';

  popularContainer.style.display = 'none';
  trendingContainer.style.display = 'block';
  storageContainer.style.display = 'none';

});

storage?.addEventListener('click', ()=>{
  storage.style.background = 'black';
  storage.style.color = 'white';
  storage.style.textShadow = '1px 1px white';

  popular.style.background = 'white';
  popular.style.color = 'black';
  popular.style.textShadow = '1px 1px white';

  trending.style.background = 'white';
  trending.style.color = 'black';
  trending.style.textShadow = '1px 1px white';

  popularContainer.style.display = 'none';
  trendingContainer.style.display = 'none';
  storageContainer.style.display = 'block';

});