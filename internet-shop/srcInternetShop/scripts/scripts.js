import * as disabledA from './disabledA.js';
import * as swiper from './swiper.js'
import * as noUiSlider from './noUiSlider.js'
import * as spoller from './filter-block_spoller.js'
import * as sorting from './sorting-block.js'

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
// ==============================================================================================
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

// Бургер меню
const iconMenu = document.querySelector('.icon-menu');
const pageContent = document.querySelector('.page')

iconMenu.addEventListener('click', () => {
    iconMenu.classList.toggle('_active');
    pageContent.classList.toggle('_active');
});

const mainMenu = document.querySelector('.menu-page_burger');

mainMenu.addEventListener('click', () => {
    mainMenu.classList.toggle('_active');
});

const headerBurgerMenu = document.querySelector('.menu_body');
let infoHeaderCallBack = document.querySelector('.info-header_callback');
let infoHeaderEmail = document.querySelector('.actions-header_email');

iconMenu.addEventListener('click', () => {
    headerBurgerMenu.classList.toggle('_active');
    infoHeaderCallBack.style.display = 'none';
    infoHeaderEmail.style.display = 'none';

    const bottomHeaderColumns = document.querySelectorAll('.bottom-header_column');

    if (window.innerWidth <= 640) {
        for (let index = 0; index < bottomHeaderColumns.length; index++) {
            let bottomHeaderColumn = bottomHeaderColumns[index];
            bottomHeaderColumn.classList.toggle('_active');
        }
    }
});


