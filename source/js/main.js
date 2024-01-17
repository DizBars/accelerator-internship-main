import './utils/scroll-lock';
import './utils/focus-lock';
import {initAccordions} from './modules/init-accordion';
import {initSliderHero} from './modules/init-slider';

window.addEventListener('DOMContentLoaded', () => {
  initSliderHero();
  window.addEventListener('load', () => {
    initAccordions();
  });
});

