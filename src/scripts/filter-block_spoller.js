import { _slideToggle } from './slider.js';
import { isMobile } from './isMobile.js';

// Слайдер блока фильтров
// ==============================================================================================
const titleFilterButtons = document.querySelectorAll(
  '.section-filter_title._spoller',
);

if (titleFilterButtons) {
  for (let index = 0; index < titleFilterButtons.length; index++) {
    const titleFilterButton = titleFilterButtons[index];

    titleFilterButton.addEventListener('click', function () {
      titleFilterButton.classList.toggle('_active');
      const checkboxBlock = titleFilterButton.nextElementSibling;

      if (
        checkboxBlock &&
        checkboxBlock.classList.contains('section-filter_body')
      ) {
        _slideToggle(checkboxBlock);
      }
    });
  }
}

// ==============================================================================================

// Разворачивание фильтра на мобильных устройствах
const filterTitle = document.querySelector('.filter_title');
const filterContent = document.querySelector('.filter_content');

if (filterTitle) {
  if (isMobile.any()) {
    filterTitle.addEventListener('click', function () {
      filterTitle.classList.toggle('_active');
      _slideToggle(filterContent);
    });
  }
}
