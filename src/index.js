import './css/style.css';
import './components/form.js';
import './components/mobile-menu.js';
import data from './data/project-data.json';

// ***************
// tech-tags
// ***************

const createTags = (container, i) => {
  data.projects[i].technologies.forEach((_el, index) => {
    const liItem = document.createElement('li');
    liItem.innerHTML = data.projects[i].technologies[index];
    container.appendChild(liItem);
  });
};

// ***************
// works-section
// ***************

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
  <ul class="works__tags" id="${el.name}"> </ul>
  <a href="#works__card2" class="btn-transition works__action" id="showModal">See Project</a>
</section>
`;
}

const myProjects = data.projects.map((el, index) => {
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
  const ulTags = document.getElementById(data.projects[i].name);
  createTags(ulTags, i);
}

// ***************
// modal section
// ***************

function createModal(el) {
  return `
    <button type="button" class="close-button-2" id="close-button-2">x</button>
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
          <ul class="works__tags modal__tags" id="modal-id"> </ul>
          <div class="modal-buttons">
            <a href="${el.liveVersion}" target="_blank" rel="noopener noreferrer" class="btn-transition works__action modal-btn">
              See Live
            </a>
            <a href="${el.source}" target="_blank" rel="noopener noreferrer" class="btn-transition works__action modal-btn">
              See Source
            </a>
          </div>
        </div>
      </div>
    </section>
`;
}

const modalBtn = document.querySelectorAll('#showModal');
const modalSection = document.getElementById('modal-container');
const body = document.querySelector('body');

function openModal() {
  modalSection.classList.add('show-modal');
  body.classList.add('overflow-hidden');
}

function closeModal() {
  modalSection.classList.remove('show-modal');
  body.classList.remove('overflow-hidden');
  modalSection.innerHTML = '';
}

modalBtn.forEach((el, i) => {
  el.addEventListener('click', () => {
    openModal();
    const modalArticle = document.createElement('article');
    modalArticle.className = 'modal-card';
    modalArticle.innerHTML = createModal(data.projects[i]);
    modalSection.appendChild(modalArticle);

    const modalTags = document.getElementById('modal-id');
    createTags(modalTags, i);

    const closeModalBtn = document.querySelector('#close-button-2');
    closeModalBtn.addEventListener('click', closeModal);
  });
});
