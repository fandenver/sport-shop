import {_slideToggle} from "./slider.js";
import {isMobile} from "./isMobile.js";

// Слайдер блока фильтров
// ==============================================================================================
const titleFilterButtons = document.querySelectorAll('.section-filter_title._spoller');

for (let index = 0; index < titleFilterButtons.length; index++) {
    const titleFilterButton = titleFilterButtons[index];

    titleFilterButton.addEventListener('click', function () {
        titleFilterButton.classList.toggle('_active');
        const checkboxBlock = titleFilterButton.nextElementSibling;

        if (checkboxBlock && checkboxBlock.classList.contains('section-filter_body')) {
            _slideToggle(checkboxBlock);
        }
    });
}

// Сделать последний элемент с классом .section-filter без границ
// const sectionFilters = document.querySelectorAll('.section-filter');
//
// if (sectionFilters.length > 0) {
//     const lastSectionFilter = sectionFilters[sectionFilters.length - 1];
//     lastSectionFilter.style.border = '0';
// }
// ==============================================================================================

// Разворачивание фильтра на мобильных устройствах
if (isMobile.any()) {
    let filterTitle = document.querySelector('.filter_title');
    let filterContent = document.querySelector('.filter_content')

    filterTitle.addEventListener('click', function () {
        filterTitle.classList.toggle('_active');
        _slideToggle(filterContent);
    })
}



