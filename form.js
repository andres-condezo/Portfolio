//* **************
// form section
//* **************

const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msgInput = document.querySelector('#errorMsg');
const errorMsg = '* The content of the email field has to be in lower case.';
const regex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/;

//* **************
// form validation
//* **************

function isValidEmail (emailValue) {
  return regex.test(emailValue);
}

function showError () {
  msg.classList.add('showError');
  msg.textContent = errorMsg;
}

function deleteErrorMessage () {
  msg.classList.remove('showError');
  msg.innerHTML = '';
}

form.addEventListener('submit', (event) => {
  const emailValue = email.value;

  if (!isvalid(emailValue)) {
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
    msg: msgInput.value
  };
  localStorage.setItem('formData', JSON.stringify(formData));
};

nameInput.addEventListener('change', saveData);
emailInput.addEventListener('change', saveData);
msgInput.addEventListener('change', saveData);

window.addEventListener('load', () => {
  const formData = JSON.parse(localStorage.getItem('formData'));
  nameInput.value = formData.name;
  emailInput.value = formData.email;
  msgInput.value = formData.msg;
});
