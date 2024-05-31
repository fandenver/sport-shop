// Страница карточки продукта
const descriptionTab = document.querySelector('.descriptionTab');
const characteristicsTab = document.querySelector('.characteristicsTab');
const descriptionTabText = document.querySelector('.descriptionTabText');
const characteristicsTabText = document.querySelector('.characteristicsTabText');

descriptionTab.addEventListener('click', function () {
    if (!descriptionTab.classList.contains('_active')) {
        descriptionTab.classList.add('_active');
        descriptionTabText.classList.add('_active');
        characteristicsTab.classList.remove('_active');
        characteristicsTabText.classList.remove('_active');
    }
});

characteristicsTab.addEventListener('click', function () {
    if (!characteristicsTab.classList.contains('_active')) {
        characteristicsTab.classList.add('_active');
        characteristicsTabText.classList.add('_active');
        descriptionTab.classList.remove('_active');
        descriptionTabText.classList.remove('_active');
    }
});
//======================================================================================================================