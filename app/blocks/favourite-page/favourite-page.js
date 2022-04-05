app.favourite = {
  name: 'Избранное (удаление / добавление)',
  init() {
    const favouriteWrapSecond = document.querySelector('.section-earlier__inner');

    if (favouriteWrapSecond === null) return;

    favouriteWrapSecond.addEventListener('click', (e) => {
      const { target } = e;

      if (target.tagName !== 'BUTTON') return;

      const icon = target.firstElementChild;

      if (icon.style.fill === '') {
        icon.style.fill = '#D81212';
      } else {
        icon.style.fill = '';
      }
    });

    const favouriteWrap = document.querySelector('.favourite-page__inner');

    if (favouriteWrap === null) return;

    favouriteWrap.addEventListener('click', (e) => {
      const { target } = e;

      if (target.tagName !== 'BUTTON') return;

      const closestEl = target.closest('.section-earlier__slide');

      closestEl.remove();
    });
  },
};
