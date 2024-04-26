new Swiper('.image-slider', {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        // type: 'fraction',
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>'
        }
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },

    simulateTouch: true,
    grabCursor: true,
    slideToClickedSlide: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },

    mousewheel: {
        sensitivity: 1,
        eventsTarget: '.image-slider'
    },

    autoHeight: true,

    slidesPerView: 1,
    watchOverflow: true,

    spaceBetween: 30,
    centeredSlides: true,
    initialSlide: 0,
    loop: false,
    freeMode: true,

    // autoplay: {
    //     delay: 1000,
    //     stopOnLastSlide: true,
    //     disableOnInteraction: false
    // },

    speed: 300,
    // direction: 'vertical'

    effect: 'slide',

    fadeEffect: {
        crossFade: true
    },

    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //     },
    //     480: {
    //         slidesPerView: 2,
    //     },
    //     992: {
    //         slidesPerView: 3
    //     }
    // },

    zoom: {
        maxRatio: 3,
        minRatio: 1
    }
});