import './utils/scroll-lock';
import './utils/focus-lock';
import {initAccordions} from './modules/init-accordion';
import {initSliderHero, initSliderPrograms} from './modules/init-slider';
import './modules/burger-menu';

window.addEventListener('DOMContentLoaded', () => {
  initSliderHero();
  window.addEventListener('load', () => {
    initAccordions();
    initSliderPrograms();
  });
});

