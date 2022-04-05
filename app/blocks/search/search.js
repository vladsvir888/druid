app.search = {
  name: 'Поиск',
  init() {
    const searchBtn = document.querySelector('.btn-search');
    const searchCloseBtn = document.querySelector('.search__btn-close');

    if (searchBtn === null) return;

    searchBtn.addEventListener('click', () => {
      document.querySelector('.search-overlay').classList.add('is-active');
      document.body.classList.add('no-scroll');
    });

    searchCloseBtn.addEventListener('click', () => {
      document.querySelector('.search-overlay').classList.remove('is-active');
      document.body.classList.remove('no-scroll');
    });
  },
};
