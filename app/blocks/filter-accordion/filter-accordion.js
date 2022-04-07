app.filterAccordion = {
  name: 'Аккордеон',
  init() {
    const accWrap = document.querySelector('.accWrap');

    if (accWrap === null) return;

    function toggleAcc(item) {
      const parent = item.closest('.accItem');

      if (parent === null) return;

      parent.classList.toggle('is-active');

      const content = parent.lastElementChild;

      if (content.style.maxHeight === '') {
        content.style.maxHeight = `${content.scrollHeight}px`;
      } else {
        content.style.maxHeight = '';
      }
    }

    accWrap.addEventListener('click', (e) => {
      e.preventDefault();

      const { target } = e;

      if (target.tagName !== 'A') return;

      toggleAcc(target);
    });
  },
};
