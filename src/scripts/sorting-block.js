// Переключение иконок отображения grid и list
const gridBtn = document.querySelector('.grid-catalog');
const listBtn = document.querySelector('.list-catalog');


if (gridBtn || listBtn) {
    gridBtn.addEventListener('click', function () {
        if (!gridBtn.classList.contains('_active')) {
            gridBtn.classList.add('_active');
            listBtn.classList.remove('_active');
        }
    });

    listBtn.addEventListener('click', function () {
        if (!listBtn.classList.contains('_active')) {
            listBtn.classList.add('_active');
            gridBtn.classList.remove('_active');
        }
    });
}
//=======================================================================================
// Дроп даун сортировки
const selectCatalog = document.querySelector('.select-catalog')
const inputSelect = document.querySelector('.order-catalog_select');
const inputForm = document.querySelector('.select-catalog_form');
const selectOptions = document.querySelectorAll('.select-catalog_option');

if (selectCatalog) {
    inputSelect.addEventListener('click', function () {
        inputForm.classList.toggle('_active');

        if (inputForm.classList.contains('_active')) {
            selectCatalog.classList.add('_active');
        } else {
            selectCatalog.classList.remove('_active');
        }

        selectOptions.forEach(option => {
            if (option.textContent === inputSelect.querySelector('span').textContent) {
                option.style.display = 'none';
            } else {
                option.style.display = 'block';
            }
        });
    });

    selectOptions.forEach(option => {
        option.addEventListener('click', function () {
            if (option.textContent !== inputSelect.querySelector('span').textContent) {
                inputSelect.querySelector('span').textContent = option.textContent;
            }
            inputForm.style.display = 'none';
        });
    });

    document.addEventListener('click', function (event) {
        const isClickInside = inputSelect.contains(event.target) || inputForm.contains(event.target);

        if (!isClickInside) {
            inputForm.classList.remove('_active');
            selectCatalog.classList.remove('_active');
        }
    });
}

// todo: внизу много кода который дублирует код выше
//=======================================================================================
// Дроп даун пагинации
const inputSelectPagination = document.querySelectorAll('.navi-catalog_show');
const selectOptionsPagination = document.querySelectorAll('.select-show_option');

if (inputSelectPagination || selectOptionsPagination) {
    inputSelectPagination.forEach(item => {
        item.addEventListener('click', function () {
            const inputFormPagination = this.querySelector('.select-show_form');
            const selectPagination = this.querySelector('.select-show');

            inputFormPagination.classList.toggle('_active');

            if (inputFormPagination.classList.contains('_active')) {
                selectPagination.classList.add('_active');
            } else {
                selectPagination.classList.remove('_active');
            }

            const selectOptionsPagination = this.querySelectorAll('.select-show_option');
            selectOptionsPagination.forEach(selectOption => {
                if (selectOption.textContent === this.querySelector('span').textContent) {
                    selectOption.style.display = 'none';
                } else {
                    selectOption.style.display = 'block';
                }
            });
        });
    });

    selectOptionsPagination.forEach(item => {
        item.addEventListener('click', function () {
            if (this.textContent !== this.closest('.navi-catalog_show').querySelector('span').textContent) {
                this.closest('.navi-catalog_show').querySelector('span').textContent = this.textContent;
            }
            this.closest('.select-show_form').style.display = 'none';
        });
    });

    document.addEventListener('click', function (event) {
        inputSelectPagination.forEach(item => {
            const isClickInside = item.contains(event.target) || item.querySelector('.select-show_form').contains(event.target);

            if (!isClickInside) {
                item.querySelector('.select-show_form').classList.remove('_active');
                item.querySelector('.select-show').classList.remove('_active');
            }
        });
    });
}

// Для одного дропдауна
// const selectPagination = document.querySelectorAll('.select-show')
// const inputSelectPagination = document.querySelectorAll('.navi-catalog_show');
// const inputFormPagination = document.querySelectorAll('.select-show_form');
// const selectOptionsPagination = document.querySelectorAll('.select-show_option');
//
// inputSelectPagination.forEach(option => {
//     option.addEventListener('click', function () {
//         inputFormPagination.classList.toggle('_active');
//
//         if (inputFormPagination.classList.contains('_active')) {
//             selectPagination.classList.add('_active');
//         } else {
//             selectPagination.classList.remove('_active');
//         }
//
//         selectOptionsPagination.forEach(selectOption => {
//             if (selectOption.textContent === inputSelectPagination.querySelector('span').textContent) {
//                 selectOption.style.display = 'none';
//             } else {
//                 selectOption.style.display = 'block';
//             }
//         });
//     });
// });
//
// selectOptionsPagination.forEach(option => {
//     option.addEventListener('click', function () {
//         if (option.textContent !== inputSelectPagination.querySelector('span').textContent) {
//             inputSelectPagination.querySelector('span').textContent = option.textContent;
//         }
//         inputFormPagination.style.display = 'none';
//     });
// });
//
// document.addEventListener('click', function (event) {
//     const isClickInside = inputSelectPagination.contains(event.target) || inputFormPagination.contains(event.target);
//
//     if (!isClickInside) {
//         inputFormPagination.classList.remove('_active');
//         selectPagination.classList.remove('_active');
//     }
// });

