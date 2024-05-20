import noUiSlider from 'nouislider';
// Or the namespace:
// import * as noUiSlider from 'nouislider';
// import 'nouislider/dist/nouislider.css';

const priceSlider = document.querySelector('.price-filter');

noUiSlider.create(priceSlider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});