// Переключение иконок отображения grid и list
const gridBtn = document.querySelector('.grid-catalog');
const listBtn = document.querySelector('.list-catalog');

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
//=======================================================================================
// Дроп даун сортировки
const selectCatalog = document.querySelector('.select-catalog')
const inputSelect = document.querySelector('.order-catalog_select');
const inputForm = document.querySelector('.select-catalog_form');
const selectOptions = document.querySelectorAll('.select-catalog_option');

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

//=======================================================================================
// Дроп даун пагинации
const selectPagination = document.querySelector('.show-catalog')
const inputSelectPagination = document.querySelector('.navi-catalog_show');
const inputFormPagination = document.querySelector('.show-catalog_form');
const selectOptionsPagination = document.querySelectorAll('.show-catalog_option');

inputSelectPagination.addEventListener('click', function () {
    inputFormPagination.classList.toggle('_active');

    if (inputFormPagination.classList.contains('_active')) {
        selectPagination.classList.add('_active');
    } else {
        selectPagination.classList.remove('_active');
    }

    selectOptionsPagination.forEach(option => {
        if (option.textContent === inputSelectPagination.querySelector('span').textContent) {
            option.style.display = 'none';
        } else {
            option.style.display = 'block';
        }
    });
});

selectOptionsPagination.forEach(option => {
    option.addEventListener('click', function () {
        if (option.textContent !== inputSelectPagination.querySelector('span').textContent) {
            inputSelectPagination.querySelector('span').textContent = option.textContent;
        }
        inputFormPagination.style.display = 'none';
    });
});

document.addEventListener('click', function (event) {
    const isClickInside = inputSelectPagination.contains(event.target) || inputFormPagination.contains(event.target);

    if (!isClickInside) {
        inputFormPagination.classList.remove('_active');
        selectPagination.classList.remove('_active');
    }
});

