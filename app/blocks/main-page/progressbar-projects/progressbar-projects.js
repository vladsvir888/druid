app.progressbarProjectsSlider = {
  name: 'Слайдер-прогрессбар на главной странице',
  init() {
    const progressbarProjectsSlider = document.querySelector('.progressbarProjects');

    if (progressbarProjectsSlider === null) return;

    new Swiper(progressbarProjectsSlider, {
      slidesPerView: 1,
      spaceBetween: 24,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
      grabCursor: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
    });
  },
};
