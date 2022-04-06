app.card = {
  name: 'Слайдер-галерея',
  init() {
    const el = document.querySelector('.galleryBottom');

    if (el === null) return;

    const galleryBottom = new Swiper(el, {
      loop: true,
      spaceBetween: 15,
      slidesPerView: 3,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
    });

    const galleryTop = new Swiper('.galleryTop', {
      loop: true,
      spaceBetween: 15,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      thumbs: {
        swiper: galleryBottom,
      },
    });
  },
};
