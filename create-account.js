
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


//Dynamic Day Logic
const daySelect = document.getElementById("day");
const monthSelect =document.getElementById("month");
const yearSelect = document.getElementById("year");
const ageDisplay = document.getElementById('age-display');

//Generate Months
for(let m = 1; m <= 12; m ++){
  monthSelect.add(new Option(m,m));
}

//Generate Years
const currentYear = new Date().getFullYear();
for(let y = currentYear; y >= 1900; y--){
  yearSelect.add(new Option(y,y));
}


//Update Days
function updateDays(){
  const month = Number(monthSelect.value);
  const year = Number(yearSelect.value);
  
  //clear days
  daySelect.innerHTML = `<option value="">Days</option>`;


  if(!isNaN(month)){
    daySelect.disabled = false;
    const daysInMonth = new Date(year,month,0).getDate();
for(let d = 1; d <= daysInMonth; d++){
    let option = new Option(d,d);
    daySelect.add(option);
}
}else{
  daySelect.disabled = true;
}
}

monthSelect.addEventListener('change',updateDays);

//Update months
function updateMonths(){
  const year = parseInt(yearSelect.value);
  
  //clear days
  monthSelect.innerHTML = `<option value="">Months</option>`;

if(!isNaN(year)){
    monthSelect.disabled = false;

for(let m = 1; m <= 12; m++){
    let option = new Option(m,m);
    monthSelect.add(option);
}
}else{
  monthSelect.disabled = true;
}
}

yearSelect.addEventListener('change',updateMonths);


//Calculate Age

let currentAge = null;

function updateAgeDisplay(){
  console.log(daySelect.value, monthSelect.value, yearSelect.value);
  
  const day = parseInt(daySelect.value);
  const month = parseInt(monthSelect.value);
  const year = parseInt(yearSelect.value);

  if(isNaN(day) || isNaN(month) || isNaN(year)){
    currentAge = null;
    ageDisplay.textContent = "";
    return;
  }

  const today = new Date();
  const birthDate = new Date(year,month - 1, day);

  if(birthDate > today){
    currentAge = null;
    ageDisplay.textContent = "";
    return;
  }

  let age = today.getFullYear() - year;

  if(today.getMonth() < month - 1 || 
    (today.getMonth()  === month - 1 && today.getDate() < day)){
    age--;
  }

  currentAge =  age; //store it
   ageDisplay.textContent = `Age: ${age} year old`;
  }


daySelect.addEventListener('change', updateAgeDisplay);
monthSelect.addEventListener('change', updateAgeDisplay);
yearSelect.addEventListener('change', updateAgeDisplay);


//Validate Helpers
 function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isStrongPassword(password) {
  return /^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(password);
}


function validateDOBSequential(){
  const day = parseInt(daySelect.value);
  const month = parseInt(monthSelect.value);
  const year = parseInt(yearSelect.value); 
  

  if(isNaN(year)){
    shakeInput(yearSelect, 'Please select year.');
    return false;
  }

  if(isNaN(month)){
    shakeInput(monthSelect, 'Please select month.');
    return false;
  }

  if(isNaN(day)){
    shakeInput(daySelect, 'Please select year.');
    return false;
  }

  if(currentAge === null){
    shakeInput(yearSelect, 'Please select your full date of birth');
    return false;
  }

  if(currentAge < 13){
    shakeInput(yearSelect, ' You must be at least 13years old');
    ageDisplay.style.display = 'none';
    return false;
  }

  return true;  
}

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


function clearErrorText(input){
  const wrapper = input.closest('.input-wrapper');
 const errorText = wrapper?.querySelector('.error-text');
    if (errorText) errorText.textContent = '';
}

yearSelect.addEventListener('change', () =>{
  yearSelect.classList.remove('input-error');
  clearErrorText(yearSelect);

  const month = parseInt(monthSelect.value);

  if(isNaN(month)){
    shakeInput(monthSelect, 'Please select month');
  }
});


monthSelect.addEventListener('change', () =>{
  monthSelect.classList.remove('input-error');
  clearErrorText(monthSelect);

  const day = parseInt(daySelect.value);

  if(isNaN(day)){
    shakeInput(daySelect, 'Please select day');
  }
});


daySelect.addEventListener('change', () =>{
  daySelect.classList.remove('input-error');
  clearErrorText(daySelect);

});

//Next Button
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
  const isValid = validateDOBSequential();
 if(!isValid){
   console.log("Validation failed. Stop");
  return;
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
    const emailInput = document.getElementById('email');


   if (!isValidEmail(email.value.trim())) {
  shakeInput(email, 'Please enter your email.');
  email.focus();
  return;
}


if (emailInput) {
  emailInput.addEventListener('input', () => {
    const value = emailInput.value.trim();

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

   
    if(!phone.value.trim()){
      shakeInput(phone, 'Please enter your mobile number.');
      phone.focus();
      return; //stop here
    }
   }


   if(currentStep === 5){
    const password = document.getElementById('password');
    const passwordInput = document.getElementById('password');

  if (!isStrongPassword(password.value)) {
    shakeInput(password, 'Please create strong password.');
    password.focus();
    return;
  }
  
if (passwordInput) {
  passwordInput.addEventListener('input', () => {
    if (isStrongPassword(passwordInput.value)) {
      passwordInput.classList.remove('input-error');
    }
  });
}
}
  

 if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }

  });
});
  
//Back Button
backBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });
});


// Preview profile and cover
const profilePic = document.getElementById('profilePic');
const profilePreview = document.getElementById('profilePreview');

profilePic.addEventListener('change', () => {
  const file = profilePic.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = e => {
      profilePreview.style.backgroundImage = `url(${e.target.result})`;
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
