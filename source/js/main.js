import './utils/scroll-lock';
import './utils/focus-lock';
import {initAccordions} from './modules/init-accordion';
import {initSliderHero, initSliderPrograms, initSliderNews, initSliderReviews} from './modules/init-slider';
import './modules/burger-menu';
import {newsToggle} from './modules/news-buttons';

window.addEventListener('DOMContentLoaded', () => {
  initSliderHero();
  window.addEventListener('load', () => {
    newsToggle();
    initAccordions();
    initSliderPrograms();
    initSliderNews();
    initSliderReviews();
  });
});

