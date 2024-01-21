import Swiper from 'swiper/bundle';

const heroSlider = document.querySelector('.hero__swiper');
const programsSlider = document.querySelector('.programs__swiper');

const setSliderHero = () => new Swiper(heroSlider, {
  pagination: {
    el: '.hero__swiper-pagination',
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
  },
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

const setSliderPrograms = () => new Swiper(programsSlider, {
  pagination: {
    direction: 'horizontal',
    el: '.programs__swiper-pagination',
    clickable: true,
  },
  loop: false,
  slidesPerGroup: 1,
  spaceBetween: 32,
  breakpoints: {
    1440: {
      allowTouchMove: false,
      slidesPerView: '3',
    },
  },
  navigation: {
    nextEl: '.programs__button--next',
    prevEl: '.programs__button--prev',
  },
  scrollbar: {
    el: '.programs__scrollbar',
    draggable: true,
  },
});

const initSliderPrograms = () => {
  if (document.body.contains(programsSlider)) {
    setSliderPrograms();
  }
};

export {initSliderHero, initSliderPrograms};
