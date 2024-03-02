document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('requestCall');
    const openModalBtnTwo = document.getElementById('showOffer');
    const modal = document.getElementById('modalGetCall');
    const closeBtn = document.getElementsByClassName('close')[0];

    function disableScroll() {
        document.body.classList.add('noScroll');
    }

    function enableScroll() {
        document.body.classList.remove('noScroll');
    }

    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        disableScroll();
    });

    openModalBtnTwo.addEventListener('click', () => {
        modal.style.display = 'block';
        disableScroll();
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        enableScroll();
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            enableScroll();
        }
    });
})