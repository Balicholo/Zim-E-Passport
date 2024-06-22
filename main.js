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

// TEXT CHANGING ANIMATION
let textIndex = 0;
const texts = ["200%","150%", "100%", "0%"];

let textIndex1 = 0;
const texts1 = ["1M+", "15K", "10K", "0"] //for rates-1

setInterval(() => {
    const ratesElement = document.querySelector(".rates");
    ratesElement.textContent = texts[textIndex];

    const ratesElement1 = document.querySelector(".rates-1");
    ratesElement1.textContent = texts1[textIndex1];  //for rates-1

    textIndex = (textIndex + 1) % texts.length;
    textIndex1 = (textIndex1 + 1) % texts1.length;
}, 2000); // 200ms = 2s

// CARD SLIDER
const cardContainer = document.querySelector('.card-container');
const cardWidth = cardContainer.offsetWidth / 11; // 11cards in total
let currentCard = 0;

//show the first card initially
cardContainer.scrollTo({
    left: currentCard * cardWidth,
    behavior: 'smooth'
})

document.querySelector('.arrow-right').addEventListener('click', () =>
    {
      currentCard = (currentCard - 1 + 11) % 11;
      cardContainer.scrollTo({
        left: currentCard * cardWidth, behavior: 'smooth'
      });
    });

    document.querySelector('.arrow-left').addEventListener('click', () =>
        {
          currentCard = (currentCard + 1) % 11;
          cardContainer.scrollTo({
            left: currentCard * cardWidth, behavior: 'smooth'
          });
        });

    // SEARCH ICON
    const searchInput = document.getElementById('search-bar');
    searchInput.placeholder = 'Search for a document';
    searchInput.addEventListener('focus', () =>
        {
            searchInput.placeholder = '';
        });

        searchInput.addEventListener('blur', () =>
            {
              if (! searchInput.value) {
                searchInput.placeholder = 'Search for a document';
              }
        });

// ANOTHER SLIDER
const cardContainer2 = document.querySelector('.card-container2');
const cardWidth2 = cardContainer2.offsetWidth / 11; // 11cards in total
let currentCard2 = 0;

//show the first card initially
cardContainer2.scrollTo({
    left: currentCard2 * cardWidth2,
    behavior: 'smooth'
})

document.querySelector('.arrow-right2').addEventListener('click', () =>
    {
      currentCard2 = (currentCard2 - 1 + 11) % 11;
      cardContainer2.scrollTo({
        left: currentCard2 * cardWidth2, behavior: 'smooth'
      });
    });

    document.querySelector('.arrow-left2').addEventListener('click', () =>
        {
          currentCard2 = (currentCard2 + 1) % 11;
          cardContainer2.scrollTo({
            left: currentCard2 * cardWidth2, behavior: 'smooth'
          });
        });