import Swiper from "swiper"
import 'swiper/css';
import {Navigation, Pagination} from "swiper/modules";

if (document.querySelector('.mainSlider')) {
let mainSlider = new Swiper ('.mainSlider_body', {
    observer: true,
    observeParents: true,
    slidePerView: 1,
    spaceBetween: 0,
    speed: 800,
    // loop: true,

    pagination: {
        el: '.MainSlider_dotts',
        clickable: true,
    },

    on: {
        lazyImageReady: function () {
            ibg();
        },
    }
});
let mainSliderImages = document.querySelectorAll('.mainSlider_image');
let mainSliderDots = document.querySelectorAll('.mainSlider_dots .swiper-pagination-bullet');

for (let index = 0; index < mainSliderImages.length; index++) {
    const mainSliderImage = mainSliderImages[index].querySelector('img').getAttribute('src');
    mainSliderDots[index].style.backgroundImage = "url('" + mainSliderImage + "')";
    }
}