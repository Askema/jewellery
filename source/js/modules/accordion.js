const askContainer = document.querySelectorAll('.ask__container');
const fieldsets = document.querySelectorAll('.filter__fieldset');

askContainer.forEach(function (container) {
  const accordion = container.querySelector('button');
  const accordionPanel = container.querySelector('.ask__panel');
  container.querySelector('button').classList.remove('active');

  accordion.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (accordion.classList.contains('active')) {
      accordion.classList.remove('active');
    } else {
      accordion.classList.add('active');
    }
    if (accordionPanel.classList.contains('ask__panel--open')) {
      accordionPanel.classList.remove('ask__panel--open');
    } else {
      accordionPanel.classList.add('ask__panel--open');
    }
  });
});

fieldsets.forEach(function (fieldset) {
  const accordionButton = fieldset.querySelector('button');

  accordionButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (fieldset.classList.contains('filter__fieldset--active')) {
      fieldset.classList.remove('filter__fieldset--active');
    } else {
      fieldset.classList.add('filter__fieldset--active');
    }
  });
});
