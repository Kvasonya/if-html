import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Pagination, Navigation]);
const reviewSwiper = new Swiper('.reviewSwiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 3,
  spaceBetween: 16,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      // spaceBetween: 8,
    },
    768: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

const hotelsSwiper = new Swiper('.hotelsSwiper', {
  modules: [Navigation],
  slidesPerView: 4,
  spaceBetween: 8,
  breakpoints: {
    1024: {
      slidesPerView: 4,
      // spaceBetween: 8,
    },
    768: {
      slidesPerView: 3,
    },
    480: {
      spaceBetween: 0,
      slidesPerView: 3,
    },
    320: {
      spaceBetween: 0,
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: '.hotels-preferred__slider-round-button-next',
    prevEl: '.swiper-button-prev',
  },
});
