const nameErrorIcon = document.querySelector('#name-error-icon');
const nameErrorMsg = document.querySelector('#name-error-message');
const lastNameErrorIcon = document.querySelector('#last-name-error-icon');
const lastNameErrorMsg = document.querySelector('#last-name-error-message');
const emailErrorIcon = document.querySelector('#email-error-icon');
const emailErrorMsg = document.querySelector('#email-error-message');
const passwordErrorIcon = document.querySelector('#password-error-icon');
const passwordErrorMsg = document.querySelector('#password-error-message');
const btn = document.querySelector('#btn');

const hideErrorAlerts = () => {
  nameErrorIcon.classList.add('hidden');
  nameErrorMsg.classList.add('hidden');
  lastNameErrorIcon.classList.add('hidden');
  lastNameErrorMsg.classList.add('hidden');
  emailErrorIcon.classList.add('hidden');
  emailErrorMsg.classList.add('hidden');
  passwordErrorIcon.classList.add('hidden');
  passwordErrorMsg.classList.add('hidden');
}

const handleClick = (e) => {
  e.preventDefault();
  hideErrorAlerts();

  const nameInput = document.querySelector('#name-input');
  const lastNameInput = document.querySelector('#last-name-input');
  const emailInput = document.querySelector('#email-input');
  const passwordInput = document.querySelector('#password-input');
  
  if (!nameInput.value) {
    nameErrorIcon.classList.remove('hidden');
    nameErrorMsg.classList.remove('hidden');
    nameInput.placeholder = '';
  }

  if (!lastNameInput.value) {
    lastNameErrorIcon.classList.remove('hidden');
    lastNameErrorMsg.classList.remove('hidden');
    lastNameInput.placeholder = '';
  }

  if (!emailInput.value) {
    emailErrorIcon.classList.remove('hidden');
    emailErrorMsg.classList.remove('hidden');
    emailInput.placeholder = '';
  }

  if (!passwordInput.value) {
    passwordErrorIcon.classList.remove('hidden');
    passwordErrorMsg.classList.remove('hidden');
    passwordInput.placeholder = '';
  }
}

btn.addEventListener('click', handleClick);

document.querySelector('#name-input').addEventListener('keydown', () => {
  nameErrorIcon.classList.add('hidden');
  nameErrorMsg.classList.add('hidden');
});

document.querySelector('#last-name-input').addEventListener('keydown', () => {
  lastNameErrorIcon.classList.add('hidden');
  lastNameErrorMsg.classList.add('hidden');
});

document.querySelector('#email-input').addEventListener('keydown', () => {
  emailErrorIcon.classList.add('hidden');
  emailErrorMsg.classList.add('hidden');
});

document.querySelector('#password-input').addEventListener('keydown', () => {
  passwordErrorIcon.classList.add('hidden');
  passwordErrorMsg.classList.add('hidden');
});