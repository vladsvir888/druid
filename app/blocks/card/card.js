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

    galleryBottom.scrollbar.updateSize();

    const galleryTop = new Swiper('.galleryTop', {
      loop: true,
      spaceBetween: 15,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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

    const progressbar = document.querySelector('.swiper-pagination-progressbar');

    window.addEventListener('resize', () => {
      if (window.matchMedia('(min-width: 1025px)').matches) {
        progressbar.classList.add('swiper-pagination-horizontal');
        progressbar.classList.remove('swiper-pagination-vertical');
      }

      if (window.matchMedia('(max-width: 1024px)').matches) {
        progressbar.classList.remove('swiper-pagination-horizontal');
        progressbar.classList.add('swiper-pagination-vertical');
      }

      if (window.matchMedia('(max-width: 767px)').matches) {
        progressbar.classList.add('swiper-pagination-horizontal');
        progressbar.classList.remove('swiper-pagination-vertical');
      }
    });
  },
};
