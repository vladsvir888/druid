app.form = {
  name: 'Разные скрипты для форм',
  init() {
    const inputs = document.querySelectorAll('.input');

    // фокус на иппутах
    inputs.forEach((input) => {
      input.addEventListener('focus', () => {
        input.closest('.formItem').classList.add('is-active');
      });

      input.addEventListener('blur', () => {
        if (input.value.length !== 0) return;
        input.closest('.formItem').classList.remove('is-active');
      });
    });

    const phones = document.querySelectorAll('.phone');

    // маска для телефона
    phones.forEach((phone) => {
      IMask(
        phone, {
          mask: '+{375}(00)000-00-00',
        },
      );
    });

    // валидация
    function showSuccess(input) {
      const parent = input.closest('.formItem');

      parent.classList.remove('is-active');
    }

    function showError(input) {
      const parent = input.closest('.formItem');

      parent.classList.add('is-active');
    }

    function checkInputs(e) {
      const phone = e.querySelector('.phone');

      if (phone.value.length === 0 || phone.value.length < 17) {
        showError(phone);
      } else {
        showSuccess(phone);

        e.reset();

        document.querySelectorAll('.formItem.is-active').forEach((item) => item.classList.remove('is-active'));
      }
    }

    const forms = document.querySelectorAll('.form');

    forms.forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        checkInputs(e.target);
      });
    });
  },
};
