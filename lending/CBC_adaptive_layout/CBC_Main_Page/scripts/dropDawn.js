document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementsByClassName('searchField')[0];
    const openDropDown = document.getElementById('oneDropDawn');
    const options = document.querySelectorAll('.optionDropDawn');
    const noResultsMessage = document.getElementsByClassName('noResultsMessage')[0];
    const searchButton = document.getElementById('searchButton');

    inputField.addEventListener('click', (event) => {
        event.stopPropagation();
        openDropDown.style.display = 'inline';
    });

    options.forEach(option => {
        option.addEventListener('click', function () {
            inputField.value = option.textContent;
            openDropDown.style.display = 'none';
            inputField.dispatchEvent(new Event('input'));
        })
    });

    inputField.addEventListener('input', function () {
        const searchText = inputField.value.toLowerCase();
        let hasMatchingOptions = false;

        options.forEach(option => {
            const optionText = option.textContent.toLowerCase();

            if (optionText.includes(searchText)) {
                option.style.display = 'flex';
                hasMatchingOptions = true;
            } else {
                option.style.display = 'none';
            }
        });

        searchButton.addEventListener('click', () => {
            if (searchText !== '') {
                searchButton.addEventListener('click', () => {
                    window.location.href = '../../CBC_404/CBC_404.html';
                })
            } else {
                window.location.href = '';
            }
        });

        if (searchText === '') {
            noResultsMessage.style.display = 'none';
        } else if (hasMatchingOptions) {
            noResultsMessage.style.display = 'none';
        } else {
            noResultsMessage.style.display = 'flex';
        }
    });

    //Разбор каждой строки кода подробно:
    //
    // 1. `inputField.addEventListener('input', function () {`: Эта строка добавляет слушатель события `input` на элемент ввода `inputField`. Это означает, что функция будет выполняться каждый раз, когда пользователь что-то вводит в поле ввода.
    //
    // 2. `const searchText = inputField.value.toLowerCase();`: В этой строке мы получаем текст из поля ввода и приводим его к нижнему регистру с помощью метода `toLowerCase()`. Это поможет нам сравнивать текст без учета регистра.
    //
    // 3. `let hasMatchingOptions = false;`: Здесь мы создаем переменную `hasMatchingOptions` и инициализиуем её значением `false`, чтобы отслеживать, найдены ли совпадающие опции с текстом из поля ввода.
    //
    // 4. `options.forEach(option => {`: Этот блок начинает цикл `forEach` по массиву опций. Для каждой опции выполняется следующий код до `});`.
    //
    // 5. `const optionText = option.textContent.toLowerCase();`: Здесь мы получаем текст из текущей опции и приводим его к нижнему регистру.
    //
    // 6. `if (optionText.includes(searchText)) {`: Этот блок проверяет, содержит ли текст текущей опции текст из поля ввода. Если да, то выполняется следующий блок кода до `} else {`.
    //
    // 7. `option.style.display = 'flex';`: Если текст опции содержит текст из поля ввода, то текущая опция отображается на странице (стиль `display` становится `flex`).
    //
    // 8. `hasMatchingOptions = true;`: Мы устанавливаем флаг `hasMatchingOptions` в `true`, чтобы отметить, что было найдено совпадение.
    //
    // 9. `} else {`: В случае, если текст опции не содержит текст из поля ввода, выполняется код до `}`.
    //
    // 10. `option.style.display = 'none';`: Если текст опции не содержит текст из поля ввода, текущая опция скрывается на странице (стиль `display` становится `none`).
    //
    // 11. `if (searchText === '') {`: Здесь начинается проверка на пустое поле ввода.
    //
    // 12. `noResultsMessage.style.display = 'none';`: Если поле ввода пустое, скрываем сообщение "noResultsMessage", устанавливая стиль `display` в `none`.
    //
    // 13. `} else if (hasMatchingOptions) {`: Если поле ввода не пустое и были найдены совпадающие опции, выполняется следующий блок кода до `} else {`.
    //
    // 14. `noResultsMessage.style.display = 'none';`: Если найдены совпадающие опции, скрываем сообщение "noResultsMessage", устанавливая стиль `display` в `none`.
    //
    // 15. `} else {`: Если не было найдено совпадающих опций, выполняется следующий блок кода до `}`.
    //
    // 16. `noResultsMessage.style.display = 'flex';`: Если не было найдено совпадающих опций, отображаем сообщение "noResultsMessage", устанавливая стиль `display` в `flex`.
    //
    // Этот код поможет вам создать интерактивный поиск ваших опций и правильно управлять отображением сообщения "noResultsMessage" в зависимости от результатов поиска.

    window.onclick = function (event) {
        if (!event.target.closest('#oneDropDawn')) {
            openDropDown.style.display = 'none';
        }
    };
});
