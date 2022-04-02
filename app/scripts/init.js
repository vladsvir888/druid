document.addEventListener('DOMContentLoaded', () => {
  app.splide.init();
  app.progressbarProjectsSlider.init();
  app.sliderEarlier.init();
  app.tabs.init();
  app.darkTheme.init();

  new WOW().init();

  new LazyLoad();

  const inputs = document.querySelectorAll('.input');

  inputs.forEach((input) => {
    input.addEventListener('focus', () => {
      input.closest('.application__form-item').classList.add('is-active');
    });

    input.addEventListener('blur', () => {
      if (input.value.length !== 0) return;
      input.closest('.application__form-item').classList.remove('is-active');
    });
  });
});
