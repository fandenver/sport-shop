let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');
        }
        if (slider.classList.contains('_gallery')) {
            //     slider.data('lightGallery').destroy(true);
        }
    }
}

function sliders_bild_callback(params) {
}

if (document.querySelector('.mainSlider')) {
    let mainSlider = new Swiper('.mainSlider_body', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        loop: true,
        pagination: {
            el: '.mainSlider_dots',
            clickable: true
        },
        // navigation: {
        //     nextEl: '.about_more .more_item_next',
        //     prevEl: '.about_more .more_item_prev'
        // },
        // on: {
        //     lazyImageReady: function () {
        //         ibg();
        //     }
        // }
    });

    if (document.querySelector('.mainSlider')) {
        let mainSliderImages = document.querySelectorAll('.mainSlider_image');
        let mainSliderDots = document.querySelectorAll('.mainSlider_dots .swiper-pagination-bullet');

        for (let index = 0; index < mainSliderImages.length; index++) {
            const mainSliderImage = mainSliderImages[index].querySelector('img').getAttribute('src');
            mainSliderDots[index].style.backgroundImage = "url('" + mainSliderImage + "')";
            mainSliderDots[index].style.opacity = 1;

            if (index === 1) {
                const imageTwo = mainSliderImages[index];
                const imageTwoText = imageTwo.closest('.mainSlider_slide').querySelector('.content-mainSlider_title');
                if (imageTwoText) {
                    imageTwoText.style.color = '#fff';
                }
            } else if (index === 3) {
                const imageFour = mainSliderImages[index];
                const imageFourText = imageFour.closest('.mainSlider_slide').querySelector('.content-mainSlider_title');
                const imagePriceText = imageFour.closest('.mainSlider_slide').querySelector('.content-mainSlider_price');
                if (imageFourText) {
                    imageFourText.style.color = '#f68038';
                    imagePriceText.style.color = '#000000';
                }
            }
        }
    }
}

if (document.querySelector('.products-slider')) {
    let productsSlider = new Swiper('.products-slider_item', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
        speed: 800,
        loop: true,
        pagination: {
            el: '.products-slider_info',
            type: 'fraction'
        },
        // Arrows
        navigation: {
            nextEl: '.products-slider_arrow_next',
            prevEl: '.products-slider_arrow_prev'
        },
        // on: {
        //     lazyImageReady: function () {
        //         ibg();
        //     }
        // }
    });
}


if (document.querySelector('.brands-slider')) {
    let brandsSlider = new Swiper('.brands-slider_body', {
        observer: true,
        observeParents: true,
        slidesPerView: 5,
        // spaceBetween: 30,
        // autoHeight: true,
        speed: 800,
        loop: true,
        // pagination: {
        //     el: '.products-slider_info',
        //     type: 'fraction'
        // },
        // Arrows
        navigation: {
            nextEl: '.brands-slider_arrow_next',
            prevEl: '.brands-slider_arrow_prev'
        },
        // on: {
        //     lazyImageReady: function () {
        //         ibg();
        //     }
        // }
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 2
            },
            600: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 5
            }
        }
    });
}


if (document.querySelector('.images-product')) {
    let imagesSubSlider = new Swiper('.images-product_subslider', {
        observer: true,
        observeParents: true,
        slidesPerView: 4,
        spaceBetween: 10.5,
        // autoHeight: true,
        speed: 800,
        // loop: true,
    });

    let imagesMainSlider = new Swiper('.images-product_mainslider', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        // autoHeight: true,
        speed: 800,
        thumbs: {
            swiper: imagesSubSlider
        }
        // loop: true,
    });
}





