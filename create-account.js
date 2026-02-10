document.addEventListener('DOMContentLoaded', ()=>{
  
const steps = document.querySelectorAll('.form-step');
const nextBtn = document.querySelectorAll('.next-btn');
const backBtn = document.querySelectorAll('.back-btn');

let  currentStep = 0;

function showStep(index){
  steps.forEach((step,i) =>{
    step.classList.toggle('active', i === index);
  });
}
showStep(currentStep);

nextBtn.forEach(btn => {
  btn.addEventListener('click', () => {

   // Step 1 validation

   if(currentStep === 0){
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');

    if(!firstName.value.trim()){
     shakeInput(firstName);
     firstName.focus();
      return; //stop here
    }

    if(!lastName.value.trim()){
     shakeInput(lastName);
     lastName.focus();
      return; //stop here
    }
   }


//step 2 validation

if(currentStep === 1){
  const dob = document.getElementById('dob');

    if(!dob.value.trim()){
     shakeInput(dob);
     dob.focus();
      return; //stop here
    }
   }

   //step 3 validation
   if(currentStep === 2){
    const gender = document.getElementById('gender');

    if(!gender.value){
      shakeInput(gender);
     gender.focus();
      return; //stop here
    }
   }

   //step 4 validation

   if(currentStep === 3){
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');

    if(!email.value.trim()){
      shakeInput(email);
      email.focus();
      return; //stop here
    }
    
    
    
    function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
    if(!phone.value.trim()){
      shakeInput(phone);
      phone.focus();
      return; //stop here
    }
   }

   if(currentStep === 4){
    const password = document.getElementById('password');
    
    if(password.value.length < 6){
      shakeInput(password);
      password.focus();
       return; //stop here
    }
   }

    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });
});
  
backBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });
});

function shakeInput(input){
input.classList.remove('input-error'); //reset
void input.offsetWidth; //force reflow
input.classList.add('input-error');
}

document.querySelectorAll('input').forEach(input =>{
      input.addEventListener('input', ()=>{
        input.classList.remove('input-error');
      });
    });

// Preview profile and cover
const profilePic = document.getElementById('profilePic');
const profilePreview = document.getElementById('profilePreview');
const coverPhoto = document.getElementById('coverPhoto');
const coverPreview = document.getElementById('coverPreview');

profilePic.addEventListener('change', () => {
  const file = profilePic.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = e => {
      profilePreview.src = e.target.result;
      profilePreview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
});
});




 

 //Toggle password visibility
function togglePassword(){
  const input = document.getElementById('password');
  const toggle = document.querySelector('.togglePassword');

  if(input.type === 'password'){
    input.type = 'text';
    toggle.textContent = 'Hide';
  } else {
    input.type = 'password';
    toggle.textContent = 'Show';
  }
}
