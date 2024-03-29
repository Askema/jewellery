const nav = document.querySelector('.nav__wrapper');
const navUser = nav.querySelector('.nav__user');
const navLogo = nav.querySelector('.nav__logo');
const menuButton = nav.querySelector('button');
const page = document.querySelector('.page');

if (!nav.classList.contains('nav__wrapper--close')) {
  nav.classList.add('nav__wrapper--close');
}

if (!navUser.classList.contains('nav__user--close')) {
  navUser.classList.add('nav__user--close');
}

if (!navLogo.classList.contains('nav__logo--close')) {
  navLogo.classList.add('nav__logo--close');
}

const openMenu = function () {
  nav.classList.toggle('nav__wrapper--close');
  nav.classList.toggle('nav__wrapper--absolute');
  navUser.classList.toggle('nav__user--close');
  navLogo.classList.toggle('nav__logo--close');
  page.classList.toggle('page--overlay');
};

if (menuButton) {
  menuButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    openMenu();
  });
}
