app.splide = {
  name: 'Бегущая строка',
  init() {
    const splide = new Splide('.splide', {
      arrows: false,
      pagination: false,
      type: 'loop',
      drag: 'free',
      focus: 'center',
      perPage: 3,
      autoWidth: true,
      autoScroll: {
        speed: 2,
      },
    });

    splide.mount(window.splide.Extensions);
  },
};
