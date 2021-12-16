// ***************
// mobile menu
// ***************

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

// ***************
// works-section
// ***************

const projects = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionPopup: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quod nesciunt doloremque eveniet, recusandae esse voluptatibus sapiente optio totam! Aliquam deleniti necessitatibus debitis alias magnam mollitia culpa beatae totam qui?',
    image: './img/Snapshoot-Portfolio1.png',
    technologies: ['html', 'css', 'javaScript'],
    liveVersion: '#',
    source: '#',
  },
  {
    name: 'Multi-Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    descriptionPopup: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quod nesciunt doloremque eveniet, recusandae esse voluptatibus sapiente optio totam! Aliquam deleniti necessitatibus debitis alias magnam mollitia culpa beatae totam qui?',
    image: './img/Snapshoot-Portfolio2.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    liveVersion: '#',
    source: '#',
  },
  {
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    descriptionPopup: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quod nesciunt doloremque eveniet, recusandae esse voluptatibus sapiente optio totam! Aliquam deleniti necessitatibus debitis alias magnam mollitia culpa beatae totam qui?',
    image: './img/Snapshoot-Portfolio3.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    liveVersion: '#',
    source: '#',
  },
  {
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    descriptionPopup: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quod nesciunt doloremque eveniet, recusandae esse voluptatibus sapiente optio totam! Aliquam deleniti necessitatibus debitis alias magnam mollitia culpa beatae totam qui?',
    image: './img/Snapshoot-Portfolio4.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    liveVersion: '#',
    source: '#',
  },
];

function createCard(el) {
  return `
<figure class="snapshoot">
  <img src="${el.image}" alt="${el.name} project image">
</figure>
<section class="works__left-block">
  <div class="works__primary-text">
    <h3 class="works__project-title">${el.name}</h3>
    <div class="frame-2">
      <span class="client">CANOPY</span>
      <div class="counter"></div>
      <span class="role">Back End Dev</span>
      <div class="counter"></div>
      <span class="year">2015</span>
    </div>
  </div>
  <p class="works__primary-par">${el.description}</p>
  <ul class="works__tags">
    <li>${el.technologies[0]}</li>
    <li>${el.technologies[1]}</li>
    <li>${el.technologies[2]}</li>
  </ul>
  <a href="#works__card2" class="btn works__action" id="showModal">See Project</a>
</section>
`;
}

const myProjects = projects.map((el, index) => {
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
          <span class="client">CANOPY</span>
          <div class="counter"></div>
          <span class="role">Back End Dev</span>
          <div class="counter"></div>
          <span class="year">2015</span>
        </div>
      </div>
      <figure class="snapshoot-modal">
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
            <a href="${el.liveVersion}" class="btn works__action modal-btn">
              See Live
              <img class="modal-icon" src="./img/live-Icon.png" alt="live demo icon"/>
            </a>
            <a href="${el.source}" class="btn works__action modal-btn">
              See Source
              <img class="modal-icon git-modal" src="./img/github_icon_blue.svg" alt="github icon"/>
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
    modalArticle.innerHTML = createModal(projects[index]);
    modalSection.appendChild(modalArticle);
    const closeModalBtn = document.querySelector('#close-button-2');
    closeModalBtn.addEventListener('click', closeModal);
  });
});

//* **************
// sticky menu
//* **************

const header = document.getElementById('header');
const sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

window.onscroll = function () { myFunction(); };
