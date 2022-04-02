app.sliderEarlier = {
  name: 'Слайдер',
  init() {
    const sliderEarlier = document.querySelector('.sliderEarlier');

    if (sliderEarlier === null) return;

    new Swiper(sliderEarlier, {
      spaceBetween: 24,
      loop: true,
      slidesPerView: 6,
      breakpoints: {
        320: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1025: {
          slidesPerView: 6,
        },
      },
      grabCursor: true,
    });
  },
};
