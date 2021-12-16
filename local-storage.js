const formStorage = document.querySelector('#form');
const nameInput = formStorage.querySelector('#name');
const emailInput = formStorage.querySelector('#email');
const msgInput = formStorage.querySelector('#msg');

const saveData = () => {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    msg: msgInput.value,
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
