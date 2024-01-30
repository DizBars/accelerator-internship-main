const initModal = () => {
  const targetButton = document.querySelector('[data-modal="control"]');
  const modal = document.querySelector('#modal');
  const invalid = document.querySelectorAll('.is-invalid');

  targetButton.addEventListener('click', () => {
    modal.showModal();
    document.body.classList.add('scroll-lock');
  });

  modal.addEventListener('click', closeOnBackDropClick);

  function closeOnBackDropClick({ target }) {
    const isClickedOnBackDrop = target === modal;
    if (isClickedOnBackDrop) {
      modal.close();
      document.body.classList.remove('scroll-lock');
    }
  }


  document.addEventListener('post', () => {
    return console.log(invalid.length);
  });
};

export {initModal};
