if (isMobile.any()) {
    const menuParents = document.querySelectorAll('.menu-page_parent a');
    for (let index = 0; index < menuParents.length; index++) {
        const menuParent = menuParents[index];
        menuParent.addEventListener('click', function (e) {
            menuParent.parentElement.classList.toggle('_active')
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
    if (searchCategories.style.display === 'none') {
        searchCategories.style.display = 'flex';
        selectBtnSearch.classList.toggle('_active');
    } else {
        searchCategories.style.display = 'none';
        selectBtnSearch.classList.remove('_active');
    }
})

const menuPageBurger = document.querySelector('.menu-page_burger');
const menuPageBody = document.querySelector('.menu-page_list');
let isHidden = true;

menuPageBurger.addEventListener('click', () => {

    if (isHidden) {
        menuPageBody.style.display = 'none';
    } else {
        menuPageBody.style.display = 'block';
    }

    isHidden = !isHidden;
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
