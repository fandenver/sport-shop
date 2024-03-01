document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('requestCall');
    const openModalBtnTwo = document.getElementById('showOffer');
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementsByClassName('close')[0];

    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    openModalBtnTwo.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
})