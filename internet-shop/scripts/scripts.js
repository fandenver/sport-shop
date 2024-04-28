import {_slideToggle} from "./slider.js";
import {isMobile} from "./isMobile.js";

if (isMobile.any()) {
    const menuParents = document.querySelectorAll('.menu-page_parent a');
    for (let index = 0; index < menuParents.length; index++) {
        const menuParent = menuParents[index];
        menuParent.addEventListener('click', function (e) {
            menuParent.parentElement.classList.toggle('_active');
            e.preventDefault();
        });
    }
} else {
    const menuParents = document.querySelectorAll('.menu-page_parent');
    for (let index = 0; index < menuParents.length; index++) {
        const menuParent = menuParents[index];

        menuParent.addEventListener('mouseenter', function () {
            menuParent.classList.add('_active');
        });

        menuParent.addEventListener('mouseleave', function () {
            menuParent.classList.remove('_active');
        });
    }
}

const selectBtnSearch = document.querySelector('.search-page_title');
const searchCategories = document.querySelector('.categories-search');

selectBtnSearch.addEventListener('click', () => {
    selectBtnSearch.classList.toggle('_active');
    _slideToggle(searchCategories);
});

const menuPageBurger = document.querySelector('.menu-page_burger');
const menuPageBody = document.querySelector('.menu-page_body');

menuPageBurger.addEventListener('click', () => {
    _slideToggle(menuPageBody);
});

const checkboxCategories = document.querySelectorAll('.categories-search_checkbox');

for (let index = 0; index < checkboxCategories.length; index++) {
    const checkboxCategory = checkboxCategories[index];
    checkboxCategory.addEventListener('change', () => {

            checkboxCategory.classList.toggle('_active');

            const checkboxActiveCategory = document.querySelectorAll('.categories-search_checkbox._active');

            if (checkboxActiveCategory.length > 0) {
                selectBtnSearch.classList.add('_categories');
                let searchQuantity = selectBtnSearch.querySelector('.search-page_quantity');
                searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + ' ' + checkboxActiveCategory.length;
            } else {
                selectBtnSearch.classList.remove('_categories');
            }
        }
    )
}
