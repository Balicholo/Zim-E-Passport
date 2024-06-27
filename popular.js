/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// PAGINATION EFFECT
const grid = document.querySelector('.passport-grid');
const leftArrow = document.querySelector('.right-arrow');
const rightArrow = document.querySelector('.left-arrow');
const pageIndicator = document.querySelector('.page-number');

let currentPage = 1;
let totalPages = 4; // four pages

leftArrow.addEventListener('click', () =>
{
    if (currentPage > 1) {
        currentPage--;
        grid.classList.add('flip-prev');
        setTimeout(() => {
            grid.classList.remove('flip-prev');
        }, 500); pageIndicator.innerText = `Page ${currentPage}`;
    }
});

rightArrow.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        grid.classList.add('flip-next');
        setTimeout(() => {
            grid.classList.remove('flip-next');
        }, 500); pageIndicator.innerText = `Page ${currentPage}`;
    }
});

pageIndicator.innerText = `Page ${currentPage}`;

// PASSPORT SLIDER
const cardContainer3 = document.querySelector('.card-container3');
const cards = cardContainer3.children;
let currentCard = 0;
let cardWidth = cards[0].offsetWidth;
let cardContainerWidth = cardContainer3.offsetWidth;

cardContainer3.style.transform = `translateX(0px)`;

document.querySelector('.arrow-right3').addEventListener('click', () => {
  currentCard += 1;
  cardContainer3.style.transform = `translateX(${-currentCard * cardWidth}px)`;
});

document.querySelector('.arrow-left3').addEventListener('click', () => {
  currentCard -= 1;
  cardContainer3.style.transform = `translateX(${-currentCard * cardWidth}px)`;
});


// DROP DOWN

