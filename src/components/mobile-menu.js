// ***************
// mobile menu
// ***************

const menu = document.querySelector('#mobile-menu-container');
const closeButton = document.querySelector('.close-button');
const hamburguer = document.querySelector('#hamburguer-button');
const body = document.querySelector('body');
const anchors = document.querySelectorAll('.mobile-menu-ul li');

function toggleMenu() {
  menu.classList.toggle('visible');
  body.classList.toggle('overflow-hidden');
}

hamburguer.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);
anchors.forEach((link) => {
  link.addEventListener('click', toggleMenu);
});
