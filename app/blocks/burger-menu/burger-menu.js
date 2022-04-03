app.burgerMenu = {
  name: 'Бургер-меню',
  init() {
    const burgerBtns = document.querySelectorAll('.burger');
    const burgerMenu = document.querySelector('.overlay');
    const closeBtn = burgerMenu.querySelector('.burger-menu__close-btn');

    burgerBtns.forEach((burgerBtn) => {
      burgerBtn.addEventListener('click', () => {
        burgerMenu.classList.toggle('is-active');
        document.body.classList.toggle('no-scroll');

        if (burgerBtn.classList.contains('header-burger')) {
          burgerBtn.classList.toggle('is-active');
        }
      });
    });

    closeBtn.addEventListener('click', () => {
      burgerMenu.classList.remove('is-active');
      document.body.classList.remove('no-scroll');
    });
  },
};
