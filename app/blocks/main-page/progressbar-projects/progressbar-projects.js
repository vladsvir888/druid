app.progressbarProjectsSlider = {
  name: 'Слайдер-прогрессбар на главной странице',
  init() {
    const progressbarProjectsSlider = document.querySelector('.progressbarProjects');

    if (progressbarProjectsSlider === null) return;

    new Swiper(progressbarProjectsSlider, {
      slidesPerView: 2,
      spaceBetween: 24,
      grabCursor: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
    });
  },
};
