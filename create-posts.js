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

  



const addText = document.getElementById('add-text');
const textInputBox = document.getElementById('textInputBox');
const textInput = document.getElementById('textInput');
const overlayText = document.getElementById('overlayText');

addText.addEventListener('click', () =>{
textInputBox.style.display = "block";
textInput.focus(); 
});

textInput.addEventListener('input',() =>{
  const value = textInput.value.trim();

  if(value.length > 0){
    overlayText.textContent = value;
    overlayText.style.display = "block";  
  }else{
    overlayText.style.display = "none";
  }
});


addText.addEventListener('dbiclick', () =>{
  if (textInput.value.trim() === ""){
    textInputBox.style.display = "none";
  }
})