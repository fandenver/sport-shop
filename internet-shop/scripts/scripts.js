let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android()
            || isMobile.BlackBerry()
            || isMobile.iOS()
            || isMobile.Opera()
            || isMobile.Windows()
        );
    }
};

if (isMobile.any()) {
} else {
}

if (isMobile.any()) {
    document.querySelector('body').classList.add('_touch');
}

let _slideUp = (target, duration = 500) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
    }, duration)
}

let _slideDown = (target, duration = 500) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none')
        display = 'block';

    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
    }, duration)
}


let _slideToggle = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
        target.classList.add('_slide');
        if (window.getComputedStyle(target).display === 'none') {
            return _slideDown(target, duration);
        } else {
            return _slideUp(target, duration);
        }
    }
}

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
    // menuPageBody.classList.toggle('_active');
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
