import './utils/scroll-lock';
import './utils/focus-lock';
import {initAccordions} from './modules/init-accordion';
import {initSliderHero, initSliderPrograms, initSliderNews, initSliderReviews, handleResize, initSliderNewsNav} from './modules/init-slider';
import './modules/burger-menu';
import {newsToggle} from './modules/news-buttons';
import {CustomSelect} from './vendor/select/custom-select';
import {Form} from './vendor/form-validate/form';
import {initModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
  initSliderHero();
  window.addEventListener('load', () => {
    newsToggle();
    initAccordions();
    initSliderPrograms();
    initSliderNews();
    initSliderReviews();
    const select = new CustomSelect();
    select.init();
    const form = new Form();
    window.form = form;
    form.init();
    handleResize();
    initSliderNewsNav();
    initModal();
  });
});

