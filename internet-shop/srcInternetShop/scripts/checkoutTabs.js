const itemsCheckoutTab = document.querySelectorAll('.content-checkout_item');
const itemsCheckoutTabText = document.querySelectorAll('.content-checkout_block');

itemsCheckoutTab.forEach((itemTab, index) => {
    itemTab.addEventListener('click', function () {
        const currentTabIndex = index;

        itemsCheckoutTab.forEach((item) => {
            item.classList.remove('_active');
        });
        itemsCheckoutTabText.forEach((item) => {
            item.classList.remove('_active');
        });

        itemTab.classList.add('_active');
        itemsCheckoutTabText[currentTabIndex].classList.add('_active');
    });
});
//======================================================================================================================