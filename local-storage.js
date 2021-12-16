const formStorage = document.querySelector('#form');
const name = formStorage.querySelector('#name');
const email = formStorage.querySelector('#email');
const msg = formStorage.querySelector('#msg');

const saveData = () => {
  const formData = {
    name: name.value,
    email: email.value,
    msg: msg.value
  };
  localStorage.setItem('formData', JSON.stringify(formData));
};

name.addEventListener('change', saveData);
email.addEventListener('change', saveData);
msg.addEventListener('change', saveData);

});
