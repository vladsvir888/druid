app.sortSelect = {
  name: 'Выпадающий список сортирующего фильтра на тач-девайсах',
  init() {
    const sortSelect = document.querySelector('.sortSelect');

    if (sortSelect === null) return;

    sortSelect.addEventListener('click', (e) => {
      const { target } = e;

      const parent = target.closest('.form-sort__wrap-inner');

      parent.classList.add('is-active');
    });

    const sortSelectDropdown = document.querySelector('.sortSelectDropdown');

    sortSelectDropdown.addEventListener('click', (e) => {
      const { target } = e;

      if (target.tagName !== 'SPAN') return;

      const attr = target.dataset.type;

      const closestEl = target.closest('.form-sort__wrap-inner');

      closestEl.firstElementChild.setAttribute('data-type', attr);

      closestEl.firstElementChild.firstElementChild.textContent = attr;

      closestEl.classList.remove('is-active');
    });
  },
};
