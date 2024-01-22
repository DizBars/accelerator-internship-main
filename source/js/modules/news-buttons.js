const buttons = document.querySelectorAll('.news__nav-button');

function newsToggle() {
  if (buttons) {
    buttons.forEach((button) => {
      button.addEventListener('click', (evt) => {
        evt.preventDefault();
        const id = evt.target.getAttribute('data-index-news');

        buttons.forEach((card) => {
          card.classList.remove('is-active');
        });

        button.classList.add('is-active');
        document.getElementById(id).classList.add('is-active');
      });
    });
  }
}

export {newsToggle};
