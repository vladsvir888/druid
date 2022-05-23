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
  app.card.init();
  app.productTabs.init();
  app.sliderTabs.init();
  app.filterAccordion.init();
  app.filter.init();
  app.sortSelect.init();
  app.modals.init();

  new LazyLoad();

  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.main-page__grid-content--1', {
    scrollTrigger: '.main-page__grid-content--1',
    y: 100,
    duration: 1,
    opacity: 0,
    delay: 0.2,
  });

  gsap.from('.main-page__grid-img--1', {
    scrollTrigger: '.main-page__grid-img--1',
    y: 100,
    duration: 1,
    opacity: 0,
    delay: 0.4,
  });

  gsap.from('.main-page__grid-img--2', {
    scrollTrigger: '.main-page__grid-img--2',
    y: 100,
    duration: 1,
    opacity: 0,
    delay: 0.6,
  });

  gsap.from('.main-page__grid-content--2', {
    scrollTrigger: '.main-page__grid-content--2',
    y: 100,
    duration: 1,
    opacity: 0,
    delay: 0.8,
  });

  gsap.from('.blog-article', {
    scrollTrigger: '.blog-article',
    y: 50,
    duration: 1,
    opacity: 0,
    delay: 0.2,
    stagger: 0.2,
  });

  gsap.from('.our-projects-page__projects-item', {
    scrollTrigger: '.our-projects-page__projects-item',
    y: 100,
    duration: 1,
    opacity: 0,
    delay: 0.2,
    stagger: 0.5,
  });

  const showAnim = gsap.from('.header', {
    yPercent: -100,
    paused: true,
    duration: 0.2,
  }).progress(1);

  ScrollTrigger.create({
    start: 'top top',
    end: 99999,
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse()
    },
  });

  const items = document.querySelectorAll('.catalog-page__catalog-item');

  items.forEach((item) => {
    ScrollTrigger.create({
      trigger: item,
      markers: true,
      start: '-40% top',
      toggleClass: 'is-active',
    });
  });
});
