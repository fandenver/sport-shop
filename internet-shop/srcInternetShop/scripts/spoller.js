import {_slideToggle} from "./slider.js";

// Слайдер фильтра "Производитель"
// ==============================================================================================
const arrowBtn = document.getElementById('manufacturerTitle');
const checkboxBlock = document.getElementById('manufacturer');

arrowBtn.addEventListener('click', () => {
    arrowBtn.classList.toggle('_active');
    _slideToggle(checkboxBlock);
});

const arrowBtnEngine = document.getElementById('engineTitle');
const checkboxBlockEngine = document.getElementById('engine');

arrowBtnEngine.addEventListener('click', () => {
    arrowBtnEngine.classList.toggle('_active');
    _slideToggle(checkboxBlockEngine);
});
// ==============================================================================================



