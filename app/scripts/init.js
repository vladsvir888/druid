document.addEventListener('DOMContentLoaded', () => {
  app.splide.init();
  app.progressbarProjectsSlider.init();
  app.sliderEarlier.init();
  app.tabs.init();
  app.darkTheme.init();
  app.burgerMenu.init();
  app.progressbarTeam.init();
  app.form.init();
  app.map.init();
  app.favourite.init();
  app.search.init();
  app.select.init();

  new WOW().init();

  new LazyLoad();
});
