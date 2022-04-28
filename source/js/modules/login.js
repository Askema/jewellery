const login = document.querySelector('.login');
const loginCloseBtn = document.querySelector('.login button');
const loginOpenBtn = document.querySelector('.nav__user a');

const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

const closeLogin = function () {
  if (login.classList.contains('login--open')) {
    login.classList.remove('login--open');
    overlay.classList.remove('overlay--active');
    body.classList.remove('body--overlay');
  }
};

const openLogin = function () {
  if (!login.classList.contains('login--open')) {
    login.classList.add('login--open');
    overlay.classList.add('overlay--active');
    body.classList.add('body--overlay');
  }
};


if (loginOpenBtn) {
  loginOpenBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    openLogin();
  }, false);
}

if (loginCloseBtn) {
  loginCloseBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    closeLogin();
  });
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    closeLogin();
  }
});

if (overlay) {
  overlay.addEventListener('click', closeLogin);
}
