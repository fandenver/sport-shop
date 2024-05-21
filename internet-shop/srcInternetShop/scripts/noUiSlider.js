import noUiSlider from 'nouislider';
// Or the namespace:
// import * as noUiSlider from 'nouislider';
// import 'nouislider/dist/nouislider.css';

const priceSlider = document.querySelector('.price-filter_slider');
noUiSlider.create(priceSlider, {
    start: [0, 100000],
    connect: true,
    tooltips: [wNumb({decimals: 0}), wNumb({decimals: 0})],
    range: {
        'min': [0],
        'max': [200000]
    }
});