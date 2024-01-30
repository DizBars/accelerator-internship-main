const navToggle = document.querySelector('.header__nav-toggle');
const navHeader = document.querySelector('.header__nav');
const openToggle = document.querySelector('[data-toggle="is-opened"]');
const closeToggle = document.querySelector('[data-toggle="is-closed"]');
const navList = document.querySelector('.header__nav-list');
const buttonWrapper = document.querySelector('.js-toggle-button__wrapper');


navToggle.addEventListener('click', () => {
  if (navHeader.classList.contains('header__nav--closed')) {
    navHeader.classList.remove('header__nav--closed');
    navHeader.classList.add('header__nav--opened');
    closeToggle.style.display = 'none';
    openToggle.style.display = 'block';
    navList.style.display = 'flex';
    buttonWrapper.style.backgroundColor = '#ffffff';
    navToggle.style.backgroundColor = '#316dc2';
    navToggle.style.color = '#ffffff';
    if(window.innerWidth < 767) {
      navToggle.style.width = '290px';
    } else {
      navToggle.style.width = '286px';
    }
  } else {
    navHeader.classList.add('header__nav--closed');
    navHeader.classList.remove('header__nav--opened');
    openToggle.style.display = 'none';
    closeToggle.style.display = 'block';
    navList.style.display = 'none';
    buttonWrapper.style.backgroundColor = '#316dc2';
    navToggle.style.backgroundColor = '#ffffff';
    navToggle.style.color = '#316dc2';
    navToggle.style.width = '134px';
  }
});
