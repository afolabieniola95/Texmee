const steps = document.querySelectorAll('.form-step');
const stepIndicators = document.querySelectorAll('.step');

document.querySelectorAll('.next-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    
    if (currentStep < steps.length - 1) {
      steps[currentStep].classList.remove('active');
      currentStep++;
      steps[currentStep].classList.add('active');
      updateProgressBar();
    }
  });

  
});

document.querySelectorAll('.back-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep > 0) {
      steps[currentStep].classList.remove('active');
      currentStep--;
      steps[currentStep].classList.add('active');
      updateProgressBar();
    }
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
