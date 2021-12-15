function main () {
  const menu = document.querySelector('#menu-container');
  const closeButton = document.querySelector('.close-button');
  const hamburguer = document.querySelector('#hamburguer-button');
  const body = document.querySelector('body');
  const anchors = document.querySelectorAll('.mobile-menu-ul li');

  // mobile menu

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
}

// html elements

const data = [
  {
    name: 'Project title 1',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './img/Snapshoot-Portfolio.png',
    technologies: ['html', 'css', 'javaScript'],
    liveVersion: 'https://andres-condezo.github.io/Portfolio/',
    source: 'https://github.com/andres-condezo/Portfolio'
  },
  {
    name: 'Project title 2',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './img/Snapshoot-Portfolio.png',
    technologies: ['html', 'css', 'javaScript'],
    liveVersion: 'https://andres-condezo.github.io/Portfolio/',
    source: 'https://github.com/andres-condezo/Portfolio'
  },
  {
    name: 'Project title 3',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './img/Snapshoot-Portfolio.png',
    technologies: ['html', 'css', 'javaScript'],
    liveVersion: 'https://andres-condezo.github.io/Portfolio/',
    source: 'https://github.com/andres-condezo/Portfolio'
  }
];

//

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
const modalBtn = document.querySelector('#showModal');
const modal = document.querySelector('#modal-container');

function openModal () {
  modal.classList.add('show-modal');
  body.classList.add('overflow-hidden');
}

function closeModal () {
  modal.classList.remove('show-modal');
  body.classList.remove('overflow-hidden');
}

modalBtn.addEventListener('click', openModal);
closeButton2.addEventListener('click', closeModal);

// cards
/*
			<article class="works__card">
				<figure class="snapshoot">
					<img src="./img/Snapshoot-Portfolio.png" alt="">
				</figure>
				<section class="works__left-block">
					<div class="works__primary-text">
						<h3 class="works__project-title">Tonic</h3>
						<div class="frame-2">
							<span class="client">CANOPY</span>
							<div class="counter"></div>
							<span class="role">Back End Dev</span>
							<div class="counter"></div>
							<span class="year">2015</span>
						</div>
					</div>
					<p class="works__primary-par">
						A daily selection of privately personalized reads; no accounts or sign-ups required.
					</p>
					<ul class="works__tags">
						<li>html</li>
						<li>css</li>
						<li>javaScript</li>
					</ul>
					<a href="#works__card2" class="btn works__action">See Project</a>
				</section>
			</article>

			<article class="works__card card2">
				<figure class="snapshoot">
					<img src="./img/Snapshoot-Portfolio2.png" alt="">
				</figure>
				<section class="works__left-block block2">
					<div class="works__primary-text">
						<h3 class="works__project-title">Multi-Post Stories</h3>
						<div class="frame-2">
							<span class="client">FACEBOOK</span>
							<div class="counter"></div>
							<span class="role">Full Stack Dev</span>
							<div class="counter"></div>
							<span class="year">2015</span>
						</div>
					</div>
					<p class="works__primary-par">
						Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.
					</p>
					<ul class="works__tags">
						<li>html</li>
						<li>Ruby on rails</li>
						<li>css</li>
						<li>javaScript</li>
					</ul>
					<a href="#works__card" class="btn works__action">See Project</a>
				</section>
			</article>

			<article class="works__card">
				<figure class="snapshoot">
					<img src="./img/Snapshoot-Portfolio3.png" alt="">
				</figure>
				<section class="works__left-block">
					<div class="works__primary-text">
						<h3 class="works__project-title">Facebook 360</h3>
						<div class="frame-2">
							<span class="client">FACEBOOK</span>
							<div class="counter"></div>
							<span class="role">Full Stack Dev</span>
							<div class="counter"></div>
							<span class="year">2015</span>
						</div>
					</div>
					<p class="works__primary-par">
						Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.
					</p>
					<ul class="works__tags">
						<li>html</li>
						<li>Ruby on rails</li>
						<li>css</li>
						<li>javaScript</li>
					</ul>
					<a href="#works__card2" class="btn works__action">See Project</a>
				</section>
			</article>

			<article class="works__card card2">
				<figure class="snapshoot">
					<img src="./img/Snapshoot-Portfolio4.png" alt="">
				</figure>
				<section class="works__left-block block2">
					<div class="works__primary-text">
						<h3 class="works__project-title">Uber Navigation</h3>
						<div class="frame-2">
							<span class="client">UBER</span>
							<div class="counter"></div>
							<span class="role">Lead Developer</span>
							<div class="counter"></div>
							<span class="year">2018</span>
						</div>
					</div>
					<p class="works__primary-par">
						A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.
					</p>
					<ul class="works__tags">
						<li>html</li>
						<li>css</li>
						<li>javaScript</li>
					</ul>
					<a href="#works__card" class="btn works__action">See Project</a>
				</section>
			</article>
      */

main();
