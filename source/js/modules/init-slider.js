import Swiper from 'swiper/bundle';

const heroSlider = document.querySelector('.hero__swiper');
const programsSlider = document.querySelector('.programs__swiper');
const newsSlider = document.querySelector('.news__swiper');
const reviewsSlider = document.querySelector('.reviews__swiper');
const newsNav = document.querySelector('.news__nav');
let setSliderNewsNav;

const setSliderHero = () => new Swiper(heroSlider, {
  pagination: {
    el: '.hero__swiper-pagination',
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 300000,
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
    320: {
      slidesPerView: '1',
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
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

const initSliderNewsNav = () => {
  if (newsNav && window.innerWidth < 767) {
    setSliderNewsNav = new Swiper(newsNav, {
      loop: false,
      spaceBetween: 0,
      slidesPerView: 'auto',
    });
  }
};

const destroyNewsNavSwiper = () => {
  if (window.innerWidth > 767 && setSliderNewsNav) {
    setSliderNewsNav.destroy();
    document.querySelector('.news__nav').style.display = 'block';
  } else if (setSliderNewsNav && !setSliderNewsNav.initialized) {
    initSliderNewsNav();
  }
};

const handleResize = () => {
  destroyNewsNavSwiper();
};

window.addEventListener('resize', handleResize);

const setSliderNews = () => new Swiper(newsSlider, {
  pagination: {
    el: '.news__swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${ className }">${ index + 1 }</span>`;
    },
  },
  loop: false,
  spaceBetween: 32,
  breakpoints: {
    320: {
      slidesPerView: '1',
      spaceBetween: 20,
      grid: {
        rows: 2,
      },
    },
    768: {
      grid: {
        rows: 2,
      },
      slidesPerView: '2',
      spaceBetween: 30,
    },
    1440: {
      allowTouchMove: false,
      slidesPerView: 'auto',
    },
  },
  navigation: {
    nextEl: '.news__button--next',
    prevEl: '.news__button--prev',
  },
});

const initSliderNews = () => {
  if (document.body.contains(newsSlider)) {
    setSliderNews();
  }
};

const setSliderReviews = () => new Swiper(reviewsSlider, {
  pagination: {
    direction: 'horizontal',
    el: '.reviews__swiper-pagination',
    clickable: true,
  },
  loop: false,
  slidesPerGroup: 1,
  spaceBetween: 32,
  breakpoints: {
    320: {
      slidesPerView: '1',
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    1440: {
      allowTouchMove: false,
      slidesPerView: '2',
    },
  },
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
  scrollbar: {
    el: '.reviews__scrollbar',
    draggable: true,
  },
});

const initSliderReviews = () => {
  if (document.body.contains(reviewsSlider)) {
    setSliderReviews();
  }
};

export {initSliderHero, initSliderPrograms, initSliderNews, initSliderReviews, handleResize, initSliderNewsNav};
