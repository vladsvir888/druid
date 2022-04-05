app.form = {
  name: 'Форма',
  init() {
    const inputs = document.querySelectorAll('.input');

    inputs.forEach((input) => {
      input.addEventListener('focus', () => {
        input.closest('.form__item').classList.add('is-active');
      });

      input.addEventListener('blur', () => {
        if (input.value.length !== 0) return;
        input.closest('.form__item').classList.remove('is-active');
      });
    });
  },
};
