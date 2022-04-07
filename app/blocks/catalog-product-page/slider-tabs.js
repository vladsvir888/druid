app.sliderTabs = {
  name: 'Слайдер на тач-девайсах',
  init() {
    function tabsSliderInit() {
      const tabsSlider = document.querySelector('.tabsSlider');

      if (tabsSlider === null) return;

      new Swiper(tabsSlider, {
        slidesPerView: 1,
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }

    if (window.matchMedia('(max-width: 1024px)').matches) {
      tabsSliderInit();
    }
  },
};
