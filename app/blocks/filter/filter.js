app.filter = {
  name: 'Главный фильтр',
  init() {
    // range
    const range = document.getElementById('range');

    if (range === null) return;

    noUiSlider.create(range, {
      start: [100, 600],
      connect: true,
      snap: true,
      range: {
        min: 0,
        '10%': 20,
        '20%': 100,
        '30%': 200,
        '40%': 300,
        '50%': 400,
        '60%': 500,
        '70%': 600,
        '80%': 700,
        max: 800,
      },
      format: {
        to(value) {
          return `${value} BYN`;
        },

        from(value) {
          return Number(value);
        },
      },
    });

    const rangeValues = [
      document.getElementById('range-value-lower'),
      document.getElementById('range-value-upper'),
    ];

    range.noUiSlider.on('update', (values, handle) => {
      rangeValues[handle].innerHTML = values[handle];
    });

    // reset
    const resetBtn = document.querySelector('.resetBtn');

    if (resetBtn === null) return;

    resetBtn.addEventListener('click', (e) => {
      e.preventDefault();

      document.querySelector('.form-filter').reset();

      const activeAccItems = document.querySelectorAll('.accItem.is-active');

      activeAccItems.forEach((activeAccItem) => {
        activeAccItem.classList.remove('is-active');

        const lastAccItem = activeAccItem.lastElementChild;

        lastAccItem.style.maxHeight = '';
      });

      range.noUiSlider.reset();
    });

    // show/hide filter
    const filterBtn = document.querySelector('.filterBtn');

    if (filterBtn === null) return;

    filterBtn.addEventListener('click', () => {
      const categoryFilter = document.querySelector('.categoryFilter');

      categoryFilter.classList.add('is-active');
      document.body.classList.add('no-scroll');
    });

    const filterCloseBtn = document.querySelector('.filterCloseBtn');

    filterCloseBtn.addEventListener('click', (e) => {
      e.preventDefault();

      document.querySelector('.categoryFilter.is-active').classList.remove('is-active');
      document.body.classList.remove('no-scroll');
    });
  },
};
