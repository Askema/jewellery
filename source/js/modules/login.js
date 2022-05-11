const login = document.querySelector('.login');
const loginCloseBtn = document.querySelector('.login button');
const loginOpenBtn = document.querySelector('.nav__user a');
const emailInput = document.querySelector('.login [type="email"]');

const overlay = document.querySelector('.overlay');
const page = document.querySelector('.page');

const closeLogin = function () {
  if (login.classList.contains('login--open')) {
    login.classList.remove('login--open');
    overlay.classList.remove('overlay--active');
    page.classList.remove('page--overlay');
  }
};

const openLogin = function () {
  if (!login.classList.contains('login--open')) {
    login.classList.add('login--open');
    overlay.classList.add('overlay--active');
    page.classList.add('page--overlay');
    emailInput.focus();
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

const focusableEls = login.querySelectorAll('button:not([disabled]), input[type="text"]:not([disabled]), input[type="checkbox"]:not([disabled]), input[type="email"]:not([disabled]), input[type="password"]:not([disabled]), button[type="button"]:not([disabled]), button[type="submit"]:not([disabled]), a:not([disabled])');
const firstFocusableEl = focusableEls[0];
const lastFocusableEl = focusableEls[focusableEls.length - 1];
const KEYCODE_TAB = 9;

login.addEventListener('keydown', function (event) {
  const isTabPressed = (event.key === 'Tab' || event.keyCode === KEYCODE_TAB);

  if (!isTabPressed) {
    return;
  }

  if (event.shiftKey) /* shift + tab */ {
    if (document.activeElement === firstFocusableEl) {
      lastFocusableEl.focus();
      event.preventDefault();
    }
  } else /* tab */ {
    if (document.activeElement === lastFocusableEl) {
      firstFocusableEl.focus();
      event.preventDefault();
    }
  }
});
