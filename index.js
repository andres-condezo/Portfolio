// mobile menu

const menu = document.querySelector('#menu-container');
const closeButton = document.querySelector('.close-button');
const hamburguer = document.querySelector('#hamburguer-button');
const body = document.querySelector('body');
const anchors = document.querySelectorAll('.mobile-menu-ul li');

function openMenu () {
  menu.classList.add('visible');
  body.classList.add('overflow-hidden');
}

function closeMenu () {
  menu.classList.remove('visible');
  body.classList.remove('overflow-hidden');
}

hamburguer.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
anchors.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// works-section

const data = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './img/Snapshoot-Portfolio1.png',
    technologies: ['html', 'css', 'javaScript'],
    liveVersion: '#',
    source: '#',
    popup: '0'
  },
  {
    name: 'Multi-Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: './img/Snapshoot-Portfolio2.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    liveVersion: '#',
    source: '#',
    popup: '1'
  },
  {
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    image: './img/Snapshoot-Portfolio3.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    liveVersion: '#',
    source: '#',
    popup: '2'
  },
  {
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    image: './img/Snapshoot-Portfolio4.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    liveVersion: '#',
    source: '#',
    popup: '3'
  }
];

const my_projects = data.map((el, index) => {
  const article = document.createElement('article');
  if (index % 2 === 0) {
    article.className = 'works__card';
  } else {
    article.className = 'works__card card2';
  }
  article.innerHTML = `
				<figure class="snapshoot">
					<img src="${el.image}" alt="">
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
  return article;
});

const worksSection = document.getElementById('works');

for (let i = 0; i < my_projects.length; i += 1) {
  worksSection.appendChild(my_projects[i]);
}

// modal section

const closeButton2 = document.querySelector('#close-button-2');
const modalBtn = document.querySelectorAll('#showModal');
const modal = document.querySelector('#modal-container');

function openModal () {
  modal.classList.add('show-modal');
  body.classList.add('overflow-hidden');
}

function closeModal () {
  modal.classList.remove('show-modal');
  body.classList.remove('overflow-hidden');
}

modalBtn.forEach((link) => {
  link.addEventListener('click', openModal);
});
closeButton2.addEventListener('click', closeModal);

const dataModal = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './img/Snapshoot-Portfolio1.png',
    technologies: ['html', 'css', 'javaScript'],
    liveVersion: '#',
    source: '#',
    popup: '0'
  },
  {
    name: 'Multi-Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: './img/Snapshoot-Portfolio2.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    liveVersion: '#',
    source: '#',
    popup: '1'
  },
  {
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    image: './img/Snapshoot-Portfolio3.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    liveVersion: '#',
    source: '#',
    popup: '2'
  },
  {
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    image: './img/Snapshoot-Portfolio4.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    liveVersion: '#',
    source: '#',
    popup: '3'
  }
];

const myModalProjects = dataModal.map((el, index) => {
  const modalCard = document.createElement('article');
  modalCard.className = 'modal-card';
  modalCard.innerHTML = `
    <button class="close-button-2" id="close-button-2">x</button>
    <section class="works__left-block">
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
        <img src="./img/Snapshoot-Portfolio2.png" alt="">
      </figure>
      <p class="works__primary-par">Description</p>
      <ul class="works__tags">
        <li>html</li>
        <li>css</li>
        <li>JS</li>
      </ul>
      <a href="#works__card2" class="btn works__action">See Project</a>
    </section>
  `;
  return modalCard;
});

const modalSection = document.querySelector('#modal-container');
for (let j = 0; j < myModalProjects.length; j += 1) {
  modalSection.appendChild(myModalProjects[j]);
}

{ /* const myDiv = document.createElement('LI'); */ }
{ /* modalSection.appendChild(myDiv); */ }
