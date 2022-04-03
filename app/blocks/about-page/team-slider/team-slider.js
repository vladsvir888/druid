app.progressbarTeam = {
  name: 'Слайдер-прогрессбар на странице о нас',
  init() {
    const progressbarTeamSlider = document.querySelector('.progressbarTeam');

    if (progressbarTeamSlider === null) return;

    new Swiper(progressbarTeamSlider, {
      slidesPerView: 3,
      spaceBetween: 24,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        1025: {
          slidesPerView: 3,
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