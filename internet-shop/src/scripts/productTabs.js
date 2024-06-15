const itemsInfoTab = document.querySelectorAll('.info-product_item');
const itemsInfoTabText = document.querySelectorAll('.info-product_block');

for (let index = 0; index < itemsInfoTab.length; index++) {
    const itemTab = itemsInfoTab[index];

    itemTab.addEventListener('click', function () {
        const itemInfoTabActive = document.querySelector('.info-product_item._active');
        const itemsInfoTabTextActive = document.querySelector('.info-product_block._active');

        const itemInfoTabText = itemsInfoTabText[index];

        if (!itemTab.classList.contains('_active')) {
            itemInfoTabActive.classList.remove('_active');
            itemTab.classList.add('_active');
            itemInfoTabText.classList.add('_active');

            if (itemsInfoTabTextActive) {
                itemsInfoTabTextActive.classList.remove('_active');
            }
        }
    });
}
// //======================================================================================================================