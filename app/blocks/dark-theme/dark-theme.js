app.darkTheme = {
  name: 'Темная тема',
  init() {
    const toggleThemeBtn = document.querySelector('.toggleThemeBtn');

    if (toggleThemeBtn === null) return;

    toggleThemeBtn.addEventListener('click', () => {
      const useEl = toggleThemeBtn.querySelector('use');
      const attr = useEl.getAttribute('xlink:href');

      if (attr === './assets/images/sprite.svg#moon') {
        document.body.classList.add('dark-theme');
        useEl.setAttribute('xlink:href', './assets/images/sprite.svg#sun');
      } else {
        document.body.classList.remove('dark-theme');
        useEl.setAttribute('xlink:href', './assets/images/sprite.svg#moon');
      }
    });
  },
};
