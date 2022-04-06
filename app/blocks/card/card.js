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
      direction: 'horizontal',
      breakpoints: {
        768: {
          direction: 'vertical', // 768-1024 меняем направление
        },
        1025: {
          direction: 'horizontal',
        },
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
      direction: 'horizontal',
      breakpoints: {
        768: {
          direction: 'vertical',
        },
        1025: {
          direction: 'horizontal',
        },
      },
      thumbs: {
        swiper: galleryBottom,
      },
    });
  },
};
