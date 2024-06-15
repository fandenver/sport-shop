let quantityButtons = document.querySelectorAll('.quantity_button');

if (quantityButtons.length > 0) {
    for (let index = 0; index < quantityButtons.length; index++) {
        const quantityButton = quantityButtons[index];
        quantityButton.addEventListener('click', function (e) {
            let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
            if (quantityButton.classList.contains('quantity_button_plus')) {
                value++;
            } else {
                value = value - 1;
                if (value < 1) {
                    value = 1;
                }
            }
            quantityButton.closest('.quantity').querySelector('input').value = value;
        });
    }
}