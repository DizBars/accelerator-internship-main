const initModal = () => {
  const targetButtons = document.querySelectorAll('[data-modal="control"]');
  const modal = document.querySelector('#modal');
  const closeModalButton = document.querySelector('[data-modal="close-button"]');

  targetButtons.forEach((button) => {
    button.addEventListener('click', () => {
      modal.showModal();
      window.scrollLock.disableScrolling();
    });
  });

  modal.addEventListener('click', closeOnBackDropClick);

  function closeOnBackDropClick({ target }) {
    const isClickedOnBackDrop = target === modal;
    if (isClickedOnBackDrop) {
      modal.close();
      window.scrollLock.enableScrolling();
    }
  }

  closeModalButton.addEventListener('click', () => {
    modal.close();
    window.scrollLock.enableScrolling();
  });

};

export {initModal};
