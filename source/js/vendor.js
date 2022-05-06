// Swiper 7.4.1
import Swiper from './vendor/swiper';

// eslint-disable-next-line no-new
new Swiper('.swiper', {

  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: (index, className) => {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'fraction',
        renderFraction: (currentClass, totalClass, index, total) => {
          return '<span class="' + currentClass + '"> ' + index + ' </span>' +
            '<span class="swiper-pagination-of"> ' + 'of' + ' </span>' +
            '<span class="' + totalClass + '"> ' + total + ' </span>';
        },
      },
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        renderBullet: (index, className) => {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    },

    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 4,
      loopFillGroupWithBlank: true,
      allowTouchMove: false,
    },
  },


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
