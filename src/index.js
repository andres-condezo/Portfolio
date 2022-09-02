// ***************
// mobile menu
// ***************

import './css/style.css';
const pImage = require('./img/snapshot-Portfolio_mobile.png');
const githubIcon = require('./img/github_icon.svg');
const liveIcon = require('./img/like_icon.svg');

const menu = document.querySelector('#menu-container');
const closeButton = document.querySelector('.close-button');
const hamburguer = document.querySelector('#hamburguer-button');
const body = document.querySelector('body');
const anchors = document.querySelectorAll('.mobile-menu-ul li');

function openMenu() {
  menu.classList.add('visible');
  body.classList.add('overflow-hidden');
}

function closeMenu() {
  menu.classList.remove('visible');
  body.classList.remove('overflow-hidden');
}

hamburguer.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
anchors.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

//* **************
// sticky menu
//* **************

const header = document.getElementById('header');
const sticky = header.offsetTop;

function stickMenu() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

window.onscroll = () => { stickMenu(); };

// ***************
// works-section
// ***************

const dataProjects = [
  {
    name: 'Stock Performance',
    description: 'Stock performance is a web application to check out performance by company to see which one performs the best, based on an external API provided by Financial Modeling Prep. Built with Ract, Redux, and SCSS.',
    descriptionPopup: 'Stock performance is a web application to check out performance by company to see which one performs the best, based on an external API provided by Financial Modeling Prep. Built with Ract, Redux, and SCSS.',
    image: 'https://raw.githubusercontent.com/andres-condezo/stock-performance/development/src/assets/screenshot-desktop.png',
    year: '2022',
    role: 'Front End',
    technologies: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'React', 'Redux'],
    liveVersion: 'https://andres-condezo.github.io/stock-performance/',
    source: 'https://github.com/andres-condezo/stock-performance',
  },
  {
    name: 'Multi-Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    descriptionPopup: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quod nesciunt doloremque eveniet, recusandae esse voluptatibus sapiente optio totam! Aliquam deleniti necessitatibus debitis alias magnam mollitia culpa beatae totam qui?',
    image: pImage,
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    liveVersion: '#',
    source: '#',
  },
];

function createCard(el) {
  return `
<figure class="snapshot">
  <img src="${el.image}" alt="${el.name} project image">
</figure>
<section class="works__left-block">
  <div class="works__primary-text">
    <h3 class="works__project-title">${el.name}</h3>
    <div class="frame-2">
      <div class="counter"></div>
      <span class="role">${el.role}</span>
      <div class="counter"></div>
      <span class="year">${el.year}</span>
    </div>
  </div>
  <p class="works__primary-par">${el.description}</p>
  <ul class="works__tags">
    <li>${el.technologies[0]}</li>
    <li>${el.technologies[1]}</li>
    <li>${el.technologies[2]}</li>
  </ul>
  <a href="#works__card2" class="btn-transition works__action" id="showModal">See Project</a>
</section>
`;
}

const myProjects = dataProjects.map((el, index) => {
  const article = document.createElement('article');
  article.className = 'works__card';
  if (index % 2 === 1) {
    article.classList.add('card2');
  }
  article.innerHTML = createCard(el);
  return article;
});

const worksSection = document.getElementById('works');

for (let i = 0; i < myProjects.length; i += 1) {
  worksSection.appendChild(myProjects[i]);
}

// ***************
// modal section
// ***************

function createModal(el) {
  return `
    <button class="close-button-2" id="close-button-2">x</button>
    <section class="works__left-block modal__left-block">
      <div class="works__primary-text">
        <h3 class="modal__project-title">${el.name}</h3>
        <div class="frame-2">
          <div class="counter"></div>
          <span class="role">${el.role}</span>
          <div class="counter"></div>
          <span class="year">${el.year}</span>
        </div>
      </div>
      <figure class="snapshot-modal">
        <img class="img-modal" src="${el.image}" alt="${el.name} project image">
      </figure>
      <div class="modal__description">
        <p class="modal__primary-par">${el.descriptionPopup}</p>
        <div class="block-r">
          <ul class="works__tags modal__tags">
            <li>${el.technologies[0]}</li>
            <li>${el.technologies[1]}</li>
            <li>${el.technologies[2]}</li>
          </ul>
          <div class="modal-buttons">
            <a href="${el.liveVersion}" class="btn-transition works__action modal-btn">
              See Live
              <img class="modal-icon" src=${liveIcon} alt="live demo icon"/>
            </a>
            <a href="${el.source}" class="btn-transition works__action modal-btn">
              See Source
              <img class="modal-icon git-modal" src=${githubIcon} alt="github icon"/>
            </a>
          </div>
        </div>
      </div>
    </section>
`;
}

const modalBtn = document.querySelectorAll('#showModal');
const modalSection = document.getElementById('modal-container');

function openModal() {
  modalSection.classList.add('show-modal');
  body.classList.add('overflow-hidden');
}

function closeModal() {
  modalSection.classList.remove('show-modal');
  body.classList.remove('overflow-hidden');
  modalSection.innerHTML = '';
}

modalBtn.forEach((el, index) => {
  el.addEventListener('click', () => {
    openModal();
    const modalArticle = document.createElement('article');
    modalArticle.className = 'modal-card';
    modalArticle.innerHTML = createModal(dataProjects[index]);
    modalSection.appendChild(modalArticle);
    const closeModalBtn = document.querySelector('#close-button-2');
    closeModalBtn.addEventListener('click', closeModal);
  });
});
