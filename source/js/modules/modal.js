const initModal = () => {
  const targetButtons = document.querySelectorAll('[data-modal="control"]');
  const modal = document.querySelector('#modal');
  const closeModalButton = document.querySelector('[data-modal="close-button"]');

  targetButtons.forEach((button) => {
    button.addEventListener('click', () => {
      modal.showModal();
      document.body.classList.add('scroll-lock');
    });
  });

  modal.addEventListener('click', closeOnBackDropClick);

  function closeOnBackDropClick({ target }) {
    const isClickedOnBackDrop = target === modal;
    if (isClickedOnBackDrop) {
      modal.close();
      document.body.classList.remove('scroll-lock');
    }
  }

  closeModalButton.addEventListener('click', () => {
    modal.close();
    document.body.classList.remove('scroll-lock');
  });

};

export {initModal};