const gridBtn = document.querySelector('.grid-catalog');
const listBtn =  document.querySelector('.list-catalog');

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

// Дроп даун сортировки
//=======================================================================================
const inputSelect = document.querySelector('.order-catalog_select');
const inputForm = document.querySelector('.select-catalog_form');

inputSelect.addEventListener('click', function () {
    inputForm.classList.toggle('_active');
})

// window.onclick = function (event) {
//     if (!event.target.closest('#inputSelect')) {
//         inputForm.style.display = 'none';
//     }
// };