const navToggle = document.querySelector('[data-nav="toggle"]');
const navHeader = document.querySelector('[data-nav="parent"]');
const openToggle = document.querySelector('[data-toggle="is-opened"]');
const closeToggle = document.querySelector('[data-toggle="is-closed"]');
const navList = document.querySelector('[data-nav="list"]');
const overlay = document.querySelector('[data-nav="overlay"]');

const onNavButtonClick = (evt) => evt.target.matches('[data-nav="button"]') ? closeNavigation() : null;

const onEscKeydown = (evt) => evt.key === 'Escape' ? closeNavigation() : null;

const openNavigation = () => {
  navHeader.classList.remove('header__nav--closed');
  navHeader.classList.add('header__nav--opened');
  closeToggle.style.display = 'none';
  openToggle.style.display = 'block';
  document.addEventListener('keydown', onEscKeydown);
  navList.addEventListener('click', onNavButtonClick);
  overlay.addEventListener('click', closeNavigation);
  window.scrollLock.disableScrolling();
};

function closeNavigation() {
  navHeader.classList.add('header__nav--closed');
  navHeader.classList.remove('header__nav--opened');
  openToggle.style.display = 'none';
  closeToggle.style.display = 'block';
  document.removeEventListener('keydown', onEscKeydown);
  navList.removeEventListener('click', onNavButtonClick);
  overlay.removeEventListener('click', closeNavigation);
  window.scrollLock.enableScrolling();
}

navToggle.addEventListener('click', () => {
  if (navHeader.classList.contains('header__nav--closed')) {
    openNavigation();
  } else {
    closeNavigation();
  }
});
