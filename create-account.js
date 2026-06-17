
document.addEventListener('DOMContentLoaded', ()=>{
const steps = document.querySelectorAll('.form-step');
const nextBtn = document.querySelectorAll('.next-btn');
const backBtn = document.querySelectorAll('.back-btn');

  const form = document.getElementById('accountForm'); 
const profilePic = document.getElementById('profilePic');
const profilePreview = document.getElementById('profilePreview');
  
let  currentStep = 0;

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }


function isStrongPassword(password) {
  return /^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(password);
}
  
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
     shakeInput(firstName, 'Please enter your first name.');
     firstName.focus();
      return; //stop here
    }

    if(!lastName.value.trim()){
     shakeInput(lastName, 'Please enter your last name.');
     lastName.focus();
      return; //stop here
    }
   }


//step 2 validation

if(currentStep === 1){
  const dob = document.getElementById('dob');
  

    if(!dob.value.trim()){
     shakeInput(dob, 'Please enter your date of birth.');
     dob.focus();
      return; //stop here
    }

  
   }

   //step 3 validation
   if(currentStep === 2){
    const gender = document.getElementById('gender');

    if(!gender.value){
      shakeInput(gender, 'Please select gender.');
     gender.focus();
      return; //stop here
    }
   }

   //step 4 validation

   if(currentStep === 3){
    const location = document.getElementById('location');

    if(!location.value){
      shakeInput(location, 'Please input your location.');
     location.focus();
      return; //stop here
    }
   }
 
   //step 5 validation
   if(currentStep === 4){
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    
   if (!isValidEmail(email.value.trim())) {
  shakeInput(email, 'Please enter your email.');
  email.focus();
  return;
}


    
    if(!phone.value.trim()){
      shakeInput(phone, 'Please enter your mobile number.');
      phone.focus();
      return; //stop here
    }
   }


   if(currentStep === 5){
    const password = document.getElementById('password');
    
     if (!isStrongPassword(password.value)) {
    shakeInput(password, 'Please create strong password.');
    password.focus();
    return;
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

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

  
  if (emailInput) {
  emailInput.addEventListener('input', () => {
    const value = emailInput.value.trim().toLowerCase();

    if (!value) {
      emailInput.classList.remove('input-error');
      return;
    }

    if (isValidEmail(value)) {
      emailInput.classList.remove('input-error');
    } else {
      emailInput.classList.add('input-error');
    }
  });
    
}


  if (passwordInput) {
  passwordInput.addEventListener('input', () => {
    if (isStrongPassword(passwordInput.value)) {
      passwordInput.classList.remove('input-error');
    }
  });
}

  
form?.addEventListener('submit', function(e) {
  e.preventDefault();



  console.log('FORM SUBMITTED');


  const accountData = {
    id: Date.now(),
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    dob: document.getElementById('dob').value,
    gender: document.getElementById('gender').value,
    location: document.getElementById('location').value,
    email: document.getElementById('email').value.trim().toLowerCase(),
    phone: document.getElementById('phone').value,
    password: document.getElementById('password').value,
    profilePhoto: profilePreview.src || "",
    createdAt: new Date().toISOString()
  };

 
  if (!profilePic.files.length) {
  alert('Please select a profile photo');
  return;
  }
  
  let accounts = JSON.parse(localStorage.getItem('accounts')) || [];

  // Prevent duplicate email
  const existingUser = accounts.find(
    account => account.email.toLowerCase() === accountData.email.toLowerCase()
  );

  if (existingUser) {
    alert('Email already exists');
    return;
  }

  accounts.push(accountData);

  localStorage.setItem('accounts', JSON.stringify(accounts));

  // Automatically log in the new user
  localStorage.setItem('currentUser', JSON.stringify(accountData));

  alert('Account successfully');
  
  window.location.href = 'home.html';
});
  
 
function shakeInput(input, message = 'This field is required') {
  input.classList.remove('input-error'); // reset
  void input.offsetWidth; // force reflow
  input.classList.add('input-error');

  const wrapper = input.closest('.input-wrapper');
  if (!wrapper) return;
  const errorText = wrapper.querySelector('.error-text');
  if (errorText) errorText.textContent = message;
}

document.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', () => {
    input.classList.remove('input-error');
    const wrapper = input.closest('.input-wrapper');
    const errorText = wrapper?.querySelector('.error-text');
    if (errorText) errorText.textContent = '';
  });
});

// Preview profile and cover

profilePic?.addEventListener('change', () => {
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
  const toggle = document.querySelector('.toggle');

  if(input.type === 'password'){
    input.type = 'text';
    toggle.textContent = 'Hide';
  } else {
    input.type = 'password';
    toggle.textContent = 'Show';
  }
}