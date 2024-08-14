const priceSlider = document.querySelector('.price-filter_slider');

if (priceSlider) {
    noUiSlider.create(priceSlider, {
        start: [0, 100000],
        connect: true,
        tooltips: [wNumb({decimals: 0}), wNumb({decimals: 0})],
        range: {
            'min': [0],
            'max': [200000]
        }
    });

    const priceStart = document.getElementById('price-start');
    const priceEnd = document.getElementById('price-end');

    priceStart.addEventListener('change', function () {
        priceSlider.noUiSlider.set([priceStart.value, null]);
    });

    priceEnd.addEventListener('change', function () {
        priceSlider.noUiSlider.set([null, priceEnd.value]);
    });
}