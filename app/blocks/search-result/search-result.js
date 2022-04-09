app.select = {
  name: 'Селект на странице поиска',
  init() {
    const select = document.querySelector('.searchSelect');

    if (select === null) return;

    select.addEventListener('click', (e) => {
      const { target } = e;

      const parent = target.closest('.search-result__select');

      parent.classList.add('is-active');
    });

    const selectDropdown = document.querySelector('.search-result__select-dropdown');

    selectDropdown.addEventListener('click', (e) => {
      const { target } = e;

      if (!target.classList.contains('search-result__select-option')) return;

      const attr = target.dataset.type;

      const closestEl = target.closest('.search-result__select');

      closestEl.firstElementChild.setAttribute('data-type', attr);

      closestEl.firstElementChild.firstElementChild.textContent = attr;

      closestEl.classList.remove('is-active');
    });
  },
};
