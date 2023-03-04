const hamburger = document.querySelector('.hamburger'),
    nav = document.querySelector('.nav__list');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        nav.classList.toggle('nav__list_active');
    });