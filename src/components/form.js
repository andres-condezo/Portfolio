//* **************
// form section
//* **************

const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msgInput = document.querySelector('#msg');
const errorMsgContainer = document.querySelector('#errorMsg');
const errorMsg = '* Please enter a valid email.';
const regex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/;

//* **************
// form validation
//* **************

function isValidEmail(emailValue) {
  return regex.test(emailValue);
}

function showError() {
  errorMsgContainer.classList.add('showError');
  errorMsgContainer.textContent = errorMsg;
}

function deleteErrorMessage() {
  errorMsgContainer.classList.remove('showError');
  errorMsgContainer.innerHTML = '';
}

form.addEventListener('submit', (event) => {
  const emailValue = emailInput.value;

  if (!isValidEmail(emailValue)) {
    event.preventDefault();
    showError();
  } else {
    deleteErrorMessage();
  }
});

//* *****************
// form local storage
//* *****************

const saveData = () => {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    msg: msgInput.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
};

nameInput.addEventListener('input', saveData);
emailInput.addEventListener('input', saveData);
msgInput.addEventListener('input', saveData);

window.addEventListener('load', () => {
  const formData = JSON.parse(localStorage.getItem('formData'));
  nameInput.value = formData.name;
  emailInput.value = formData.email;
  msgInput.value = formData.msg;
});
