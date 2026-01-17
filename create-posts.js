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
    return;
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

const popular = document.getElementById('popular');
const trendy = document.getElementById('trendy');
const sound = document.getElementById('sound');
const storage = document.getElementById('storage');
const popularContainer = document.getElementById('popular-container');
const trendyContainer = document.getElementById('trendy-container');
const soundContainer = document.getElementById('sound-container');
const storageContainer = document.getElementById('storage-container');


popular.style.background = 'black';
popular.style.color = 'white';
popular.style.textShadow = '1px 1px white';

popular.addEventListener('click', ()=>{
  popular.style.background = 'black';
  popular.style.color = 'white';
  popular.style.textShadow = '1px 1px white';

  trendy.style.background = 'white';
  trendy.style.color = 'black';
  trendy.style.textShadow = '1px 1px white';

  sound.style.background = 'white';
  sound.style.color = 'black';
  sound.style.textShadow = '1px 1px white';

  storage.style.background = 'white';
  storage.style.color = 'black';
  storage.style.textShadow = '1px 1px white';

  popularContainer.style.display = 'block';
  trendyContainer.style.display = 'none';
  soundContainer.style.display = 'none';
  storageContainer.style.display = 'none';

});

trendy.addEventListener('click', ()=>{
  trendy.style.background = 'black';
  trendy.style.color = 'white';
  trendy.style.textShadow = '1px 1px white';

  popular.style.background = 'white';
  popular.style.color = 'black';
  popular.style.textShadow = '1px 1px white';

  sound.style.background = 'white';
  sound.style.color = 'black';
  sound.style.textShadow = '1px 1px white';

  storage.style.background = 'white';
  storage.style.color = 'black';
  storage.style.textShadow = '1px 1px white';

  popularContainer.style.display = 'none';
  trendyContainer.style.display = 'block';
  soundContainer.style.display = 'none';
  storageContainer.style.display = 'none';

});

sound.addEventListener('click', ()=>{
  sound.style.background = 'black';
  sound.style.color = 'white';
  sound.style.textShadow = '1px 1px white';

  popular.style.background = 'white';
  popular.style.color = 'black';
  popular.style.textShadow = '1px 1px white';

  trendy.style.background = 'white';
  trendy.style.color = 'black';
  trendy.style.textShadow = '1px 1px white';

  storage.style.background = 'white';
  storage.style.color = 'black';
  storage.style.textShadow = '1px 1px white';

  popularContainer.style.display = 'none';
  trendyContainer.style.display = 'none';
  soundContainer.style.display = 'block';
  storageContainer.style.display = 'none';

});

storage.addEventListener('click', ()=>{
  storage.style.background = 'black';
  storage.style.color = 'white';
  storage.style.textShadow = '1px 1px white';

  popular.style.background = 'white';
  popular.style.color = 'black';
  popular.style.textShadow = '1px 1px white';

  trendy.style.background = 'white';
  trendy.style.color = 'black';
  trendy.style.textShadow = '1px 1px white';

  sound.style.background = 'white';
  sound.style.color = 'black';
  sound.style.textShadow = '1px 1px white';

  popularContainer.style.display = 'none';
  trendyContainer.style.display = 'none';
  soundContainer.style.display = 'none';
  storageContainer.style.display = 'block';

});