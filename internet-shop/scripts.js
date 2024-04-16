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