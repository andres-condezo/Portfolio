const menu = document.querySelector('#menu-container');
const closeButton = document.querySelector('.close-button');
const hamburguer = document.querySelector('#hamburguer-button');
const body = document.querySelector('body');
const headline = document.querySelector('#headline');

hamburguer.addEventListener('click', () => {
  menu.classList.add('visible');
  body.classList.add('overflow-hidden');
  headline.classList.add('blurry');
});

closeButton.addEventListener('click', () => {
  menu.classList.remove('visible');
  body.classList.remove('overflow-hidden');
  headline.classList.remove('blurry');
});
