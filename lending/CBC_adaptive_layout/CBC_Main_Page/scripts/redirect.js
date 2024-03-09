document.addEventListener('DOMContentLoaded', function () {
    const redirectErrorPage = document.querySelectorAll('div > button');

    redirectErrorPage.forEach(button => {
        if (button.id !== 'requestCall' && button.id !== 'sendRequest') {
            button.addEventListener('click', () => {
                // window.location.href = '../../CBC_404/CBC_404.html';
                window.location.href = './CBC_adaptive_layout/CBC_404/CBC_404.html';
            })
        }
    })
})
