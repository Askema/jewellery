const askContainer = document.querySelectorAll('.ask__container');

askContainer.forEach(function (container) {
  const accordion = container.querySelector('button');
  const accordionPanel = container.querySelector('.ask__panel');
  container.querySelector('button').classList.remove('active');

  accordion.addEventListener('click', function () {
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
