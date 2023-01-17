let burgerMenu = document.querySelector('.burger-menu');
let burgerNavigation = document.querySelector('.header-nav');
const body = document.body;


burgerMenu.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    burgerMenu.classList.toggle('burger-menu__active');
    burgerNavigation.classList.toggle('header-nav__active');
})