let navToggle = document.querySelector('.nav__toggle');
let navWrapper = document.querySelector('.nav__wrapper');

function showNav() {
    navWrapper.classList.toggle('active');
}

navToggle.addEventListener('click', showNav);