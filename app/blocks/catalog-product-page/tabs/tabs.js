app.productTabs = {
  name: 'Табы на странице с товаром',
  init() {
    const productNavs = document.querySelectorAll('.productNav');

    if (productNavs.length === 0) return;

    productNavs.forEach((productNav) => {
      productNav.addEventListener('click', (e) => {
        const { target } = e;

        if (target.tagName !== 'BUTTON') return;

        productNav.querySelector('.product-tabs__btn.is-active').classList.remove('is-active');

        target.classList.add('is-active');

        const productItems = document.querySelectorAll('.productItem');

        productItems.forEach((productItem) => {
          if (target.dataset.tab === productItem.dataset.tabContent) {
            productItem.classList.add('show');
          } else {
            productItem.classList.remove('show');
          }
        });
      });
    });
  },
};
