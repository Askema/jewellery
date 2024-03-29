const filter = document.querySelector('.filter');
const closeButton = document.querySelector('.filter button');
const openButton = document.querySelector('.products button');

const page = document.querySelector('.page');
const overlay = document.querySelector('.overlay');

const closeModal = function () {
  if (filter.classList.contains('filter--open')) {
    filter.classList.remove('filter--open');
    overlay.classList.remove('overlay--active');
    page.classList.remove('page--overlay');
  }
};

const openModal = function () {
  if (!filter.classList.contains('filter--open')) {
    filter.classList.add('filter--open');
    overlay.classList.add('overlay--active');
    page.classList.add('page--overlay');
  }
};


if (openButton) {
  openButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    openModal();
  });
}

if (closeButton) {
  closeButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    closeModal();
  });
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    closeModal();
  }
});

if (overlay) {
  overlay.addEventListener('click', closeModal);
}
