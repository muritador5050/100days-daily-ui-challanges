const btn = document.getElementById('btn');

function validateForm() {
  const username = document.getElementById('user');
  const pass = document.getElementById('pass');
  const user_error = document.getElementById('user-error');
  const pass_error = document.getElementById('pass-error');
  const spinner = document.getElementById('loadingSpinner');
  const modal = document.getElementById('successModal');
  let isValid = true;
  if (!username.value.trim()) {
    user_error.textContent = 'Username required';
    username.classList.add('error-border');
    isValid = false;
  } else {
    user_error.textContent = '';
    username.classList.remove('error-border');
  }
  if (!pass.value.trim()) {
    pass_error.textContent = 'Password required';
    pass.classList.add('error-border');
    isValid = false;
  } else {
    pass_error.textContent = '';
    pass.classList.remove('error-border');
  }
  if (isValid) {
    spinner.style.display = 'block';
    btn.disabled = true;
    username.value = '';
    pass.value = '';
    setTimeout(() => {
      spinner.style.display = 'none';
      btn.disabled = false;
      modal.style.display = 'block';
    }, 3000);
  }
}
btn.addEventListener('click', validateForm);

function closeModal() {
  document.getElementById('successModal').style.display = 'none';
}
