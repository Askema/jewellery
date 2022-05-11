/* eslint-disable */
const body = document.querySelector('.body');

// Проверяем, можно ли использовать Webp формат
function canUseWebp() {
  // Создаем элемент canvas
  let elem = document.createElement('canvas');
  // Приводим элемент к булеву типу
  if (!!(elem.getContext && elem.getContext('2d'))) {
    // Создаем изображение в формате webp, возвращаем индекс искомого элемента и сразу же проверяем его
    if (elem.toDataURL('image/webp').indexOf('data:image/webp') === 0) {
      body.classList.add('has-webp');
    }
  }
  // Иначе Webp не используем
}

canUseWebp();
