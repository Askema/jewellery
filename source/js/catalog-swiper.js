// Swiper 7.4.1
import Swiper from './vendor/swiper';

// eslint-disable-next-line no-new
new Swiper('.swiper', {

  direction: 'horizontal',
  loop: false,

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
      loopFillGroupWithBlank: true,
    },

    1023: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 4,
      loopFillGroupWithBlank: true,
      allowTouchMove: false,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: (index, className) => {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
