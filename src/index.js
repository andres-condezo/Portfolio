import './css/style.css';
import './components/form.js';
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
<figure><img src="${el.image}" alt="${el.name} project image"></figure>
<div class="works-info">
  <div class="block-u">
    <h3>${el.name}</h3>
    <div class="span-container">
      <span>${el.company}</span>
      <div class="counter"></div>
      <span>${el.role}</span>
      <div class="counter"></div>
      <span>${el.year}</span>
    </div>
    <p>${el.description}</p>
  </div>
  <div class="block-d">
    <ul class="tags-container" id="${el.name}"> </ul>
    <a href="#works-card" class="btn btn-black bg-transition" id="showModal">See Project</a>
  </div>
</div>
`;
}

const myProjects = data.projects.map((el) => {
  const article = document.createElement('article');
  article.className = 'works-card';
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
    <button type="button" class="close-btn" id="close-btn">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <div class="modal-wrap">
      <div class="modal-header">
        <div class="section-a">
          <h3>${el.name}</h3>
          <div class="span-container">
            <span>${el.company}</span>
            <div class="counter"></div>
            <span>${el.role}</span>
            <div class="counter"></div>
            <span>${el.year}</span>
          </div>
        </div>
        <figure class="img-container">
          <img src="${el.image}" alt="${el.name} project image">
        </figure>
      </div>

      <div class="modal-footer">
        <p class="modal-par">${el.descriptionPopup}</p>
        <div class="block-r">
          <ul class="tags-container" id="modal-id"> </ul>
          <div class="modal-buttons">
            <a href="${el.liveVersion}" target="_blank" rel="noopener noreferrer" class="btn btn-black bg-transition">
              See Live
            </a>
            <a href="${el.source}" target="_blank" rel="noopener noreferrer" class="btn btn-black bg-transition">
              See Source
            </a>
          </div>
        </div>
      </div>
    </div>
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

    const closeModalBtn = document.querySelector('#close-btn');
    closeModalBtn.addEventListener('click', closeModal);
  });
});
