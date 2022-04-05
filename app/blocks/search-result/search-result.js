app.select = {
  name: 'Селект на странице поиска',
  init() {
    const select = document.querySelector('.search-result__select');

    if (select === null) return;

    select.addEventListener('click', (e) => {
      if (e.target.classList.contains('search-result__select-dropdown')) return;

      select.classList.toggle('is-active');
    });

    const selectDropdown = document.querySelector('.search-result__select-dropdown');

    selectDropdown.addEventListener('click', (e) => {
      const { target } = e;

      if (!target.classList.contains('search-result__select-option')) return;

      const attr = target.dataset.type;

      const closestEl = target.closest('.search-result__select');

      closestEl.firstElementChild.setAttribute('data-type', attr);

      closestEl.firstElementChild.firstElementChild.textContent = attr;
    });
  },
};
