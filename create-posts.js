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

addText.addEventListener('click', () =>{
textInput.style.display = "block";
closeOverlay.style.display = "block";
textInput.focus(); 
});

textInput.addEventListener('input',() =>{
  const value = textInput.value.trim();

  if(value.length > 0){
    overlayText.textContent = value; 
  }
});


closeOverlay.addEventListener('click', () =>{
 textInput.style.display = "none";
 closeOverlay.style.display = "none";
 overlayText.style.display = "block"; 
 if(value.length < 1){
  overlayText.style.display = "none";
 }
});

if(!closeOverlay.click){
  alert('hello');
}