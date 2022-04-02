app.tabs = {
  name: 'Табы на главной странице',
  init() {
    const navMenu = document.querySelector('.catalogTabsNav');
    const tabItems = document.querySelectorAll('.catalog-tabs__item-img');
    const tabWrap = document.querySelector('.catalog-tabs__content');

    if (navMenu === null) return;

    function removeChildren(wrap) {
      while (wrap.firstChild) {
        wrap.firstChild.remove();
      }
    }

    function updateChildren(wrap, children) {
      removeChildren(wrap);

      children.forEach((child) => {
        wrap.append(child);
      });
    }

    navMenu.addEventListener('click', (e) => {
      const { target } = e;

      if (target.tagName !== 'BUTTON') return;

      navMenu.querySelector('.catalog-tabs__btn.is-active').classList.remove('is-active');

      target.classList.add('is-active');

      const filterValue = target.dataset.filter;

      if (filterValue === 'all') {
        updateChildren(tabWrap, tabItems);
        return;
      }

      const filtredItems = [];

      tabItems.forEach((tabItem) => {
        const arr = tabItem.dataset.category.split(', ');

        if (arr.includes(filterValue)) {
          filtredItems.push(tabItem);
        }
      });

      updateChildren(tabWrap, filtredItems);
    });
  },
};
