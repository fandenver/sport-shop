document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('requestCall');
    const modal = document.getElementById('modalGetCall');
    const overModalBtn = document.getElementById('sendRequest');
    const openOverModal = document.getElementById('overModal');
    const closeBtn = document.getElementsByClassName('close');

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

    function disableScroll() {
        document.body.classList.add('noScroll');
    }

    function enableScroll() {
        document.body.classList.remove('noScroll');
    }

    function disableBlock() {
        modal.style.display = 'none';
    }

    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
        disableScroll();
    });

    overModalBtn.addEventListener('click', () => {
        openOverModal.style.display = 'flex';
        disableBlock();
    });

    // Код не влияет ни на что
    // window.addEventListener('click', (event) => {
    //     if (event.target === modal) {
    //         modal.style.display = 'none';
    //         enableScroll();
    //     }
    // });
})