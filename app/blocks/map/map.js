app.map = {
  name: 'Карта',
  init() {
    if (typeof ymaps === 'undefined') return;

    ymaps.ready(init);

    function init() {
      const map = new ymaps.Map('map', {
        center: [53.891635, 27.570653],
        zoom: 14
      }, {
        searchControlProvider: 'yandex#search'
      });

      const placemark = new ymaps.Placemark(map.getCenter(), {
        balloonContent: `
        <div class="custom-balloon">
          <ul class="custom-balloon__list">
            <li class="contacts-info__list-item">
              <svg class="contacts-info__icon" viewBox="0 0 100 100">
                <use xlink:href="./assets/images/sprite.svg#phone-call"></use>
              </svg>
              <a class="contacts-info__tel" href="tel:+375111111111">+375 (11) 111-11-11</a>
            </li>
            <li class="contacts-info__list-item">
              <svg class="contacts-info__icon" viewBox="0 0 100 100">
                <use xlink:href="./assets/images/sprite.svg#marker"></use>
              </svg>
              <span>Адрес: 220030, г. Минск, ул. Ленина 137</span>
            </li>
            <li class="contacts-info__list-item">
              <svg class="contacts-info__icon" viewBox="0 0 100 100">
                <use xlink:href="./assets/images/sprite.svg#email"></use>
              </svg>
              <a href="mailto:druid@gmail.com">druid@gmail.com</a>
            </li>
          </ul>
          <ul class="socials">
            <li class="socials__social">
              <a href="#" class="socials__social-link">
                <svg class="socials__social-icon" viewBox="0 0 100 100">
                  <use xlink:href="./assets/images/sprite.svg#fb"></use>
                </svg>
              </a>
            </li>
            <li class="socials__social">
              <a href="#" class="socials__social-link">
                <svg class="socials__social-icon" viewBox="0 0 100 100">
                  <use xlink:href="./assets/images/sprite.svg#insta"></use>
                </svg>
              </a>
            </li>
            <li class="socials__social">
              <a href="#" class="socials__social-link">
                <svg class="socials__social-icon" viewBox="0 0 100 100">
                  <use xlink:href="./assets/images/sprite.svg#telegram"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        `,
      }, {
        iconLayout: 'default#image',
        iconImageHref: './assets/images/map-marker.svg',
        iconImageSize: [40, 40],
      });
      // Добавим метку на карту
      map.geoObjects.add(placemark);

      map.behaviors.disable('scrollZoom');
    }
  },
};
