// let mainSliderImages = document.querySelectorAll('.mainSlider_image');
// // let mainSliderDots = document.querySelectorAll('.mainSlider_dots .swiper-pagination-bullet');
//
// if (document.querySelector('.mainSlider')) {
//     // let mainSlider = new Swiper('.', {});
//     let mainSlider = new Swiper('.mainSlider .image-slider ._swiper', {});
//
//     let mainSliderImages = document.querySelectorAll('.mainSlider_image');
//     let mainSliderDots = document.querySelectorAll('.mainSlider_dots .swiper-pagination-bullet');
//     for (let index = 0; index < mainSliderImages.length; index++) {
//         const mainSliderImage = mainSliderImages[index].querySelector('img').getAttribute('src');
//         mainSliderDots[index].style.backgroundImage = "url('" + mainSliderImage + "')";
//     }
// }

// new Swiper('.mainSlider_body');

document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.mainSlider')) {
        let mainSlider = new Swiper('.mainSlider_body', {
            pagination: {
                el: '.mainSlider_dots',
                clickable: true,
            },
        });
    }
});