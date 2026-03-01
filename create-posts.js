const fileInput = document.getElementById('fileInput');
const addMedia = document.getElementById('media');
const preview = document.getElementById('preview');
const placeholder = document.getElementById('placeholder');
const postBtn = document.getElementById('post-btn');
const btnAlert = document.getElementById('btn-alert');

addMedia.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', (e)=>{
  const file = e.target.files?.[0];
  if(!file) return;

  preview.innerHTML = '';

  const url = URL.createObjectURL(file);

  if(file.type.startsWith('image')){
    const img = document.createElement('img');
    img.src = url;
    preview.appendChild(img);
  } else if(file.type.startsWith('video')){
    const v = document.createElement('video');
    v.src = url;
    v.controls = true;
    preview.appendChild(v);
  }

});


postBtn.addEventListener('click', ()=>{
  const file = fileInput.files?.[0];
  if(!file){
    btnAlert.style.display = 'block';
    setTimeout(()=>{
   btnAlert.style.display = 'none';
  }, 2000);
  }
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


addText.addEventListener('click', () =>{
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

textInput.addEventListener('input',() =>{
    overlayText.textContent = textInput.value.trim(); 
});


closeOverlay.addEventListener('click', () =>{
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

effect.addEventListener('click', ()=>{
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

effectPanelClose.addEventListener('click', ()=>{
effectPanel.style.height = '0px';
effectPanelClose.style.display = 'none';
});


music.addEventListener('click', ()=>{
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
dragHandle.addEventListener('click', ()=>{
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

popular.addEventListener('click', ()=>{
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

trending.addEventListener('click', ()=>{
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

storage.addEventListener('click', ()=>{
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

const ImageData = sessionStorage.getItem('postImage');

if(ImageData){
  document.getElementById('preview').style.backgroundImage = `url(${ImageData})`;
}

const postActions = document.querySelector('.post-actions');
const draftBtn = document.getElementById('draft-btn');
const actionsToggle = document.getElementById('actions-toggle');
if(ImageData){
  setTimeout(()=>{
  postActions.style.width = '100%';
  postActions.style.height = '50px';
  draftBtn.style.display = 'block';
  postBtn.style.display = 'block';
}, 1000);

}

document.body.addEventListener('click', () =>{
  postActions.style.width = '0%';
  postActions.style.height = '0px';
  draftBtn.style.display = 'none';
  postBtn.style.display = 'none';
  actionsToggle.style.top = '2%';
  actionsToggle.style.left = '2%';
  actionsToggle.style.width = '30px';
  actionsToggle.style.height = '30px';
});

actionsToggle.addEventListener('click', () =>{
  postActions.style.width = '100%';
  postActions.style.height = '50px';
  actionsToggle.style.display = 'none';
  draftBtn.style.display = 'block';
  postBtn.style.display = 'block';
}); 