const menu = document.querySelector('#menu-container');
const closeButton = document.querySelector('.close-button');
const hamburguer = document.querySelector('#hamburguer-button');
const anchor = document.querySelector('.mobile-menu-ul li a');

hamburguer.addEventListener('click', function (event) {
  console.log('The button was clicked!');
  menu.classList.add('visible');
});


closeButton.addEventListener('click',function (event){
  menu.classList.remove('visible');
});


