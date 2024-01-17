import Swiper from 'swiper/bundle';

const heroSlider = document.querySelector('.hero__swiper');

const setSliderHero = () => new Swiper(heroSlider, {
  pagination: {
    el: '.hero__swiper-pagination',
    clickable: true,
  },
  loop: true,
  breakpoints: {
    1440: {
      allowTouchMove: false,
    },
  },
});

const initSliderHero = () => {
  if (document.body.contains(heroSlider)) {
    setSliderHero();
  }
};

export {initSliderHero};
