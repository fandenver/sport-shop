document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('requestCall');
    const modal = document.getElementById('modalGetCall');
    const overModalBtn = document.getElementById('sendRequest');
    const openOverModal = document.getElementById('overModal');
    const closeBtn = document.getElementsByClassName('close');
    const redirectErrorPage = document.getElementById('showOffer');
    const openMenuProducts = document.querySelectorAll('div.commonSpanMainMenu');
    const showProductMenu = document.getElementsByClassName('productMenu')[0];
    const hideSpan = document.getElementsByClassName('mainBanner')[0];
    const hideMainBanner = document.getElementsByClassName('mainBannerImage')[0];

    function disableScroll() {
        document.body.classList.add('noScroll');
    }

    function enableScroll() {
        document.body.classList.remove('noScroll');
    }

    if (closeBtn.length > 0) {
        const firstCloseBtn = closeBtn[0];
        const secondCloseBtn = closeBtn[1];
        const threeCloseBtn = closeBtn[2];

        firstCloseBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            enableScroll();
        });

        secondCloseBtn.addEventListener('click', () => {
            openOverModal.style.display = 'none';
            enableScroll();
        });

        threeCloseBtn.addEventListener('click', () => {
            openOverModal.style.display = 'none';
            enableScroll();
        });
    }

    function disableBlock() {
        modal.style.display = 'none';
    }

    openMenuProducts.forEach(element => {
        element.addEventListener('click', () => {
            showProductMenu.style.display = 'flex';
            hideSpan.style.display = 'none';
            hideMainBanner.style.display = 'none';
        })
    });

    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
        disableScroll();
    });

    overModalBtn.addEventListener('click', () => {
        openOverModal.style.display = 'flex';
        disableBlock();
    });

    redirectErrorPage.addEventListener('click', () => {
        window.location.href = 'http://localhost:63342/repos-UI/lending/CBC_adaptive_layout/CBC_404/CBC_404.html';
    })
})