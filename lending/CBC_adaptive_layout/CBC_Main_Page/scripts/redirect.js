document.addEventListener('DOMContentLoaded', function () {
    const redirectErrorPage = document.querySelectorAll('div > button');

    redirectErrorPage.forEach(button => {
        if (button.id !== 'requestCall' && button.id !== 'sendRequest') {
            button.addEventListener('click', () => {
                window.location.href = '../CBC_404/CBC_404.html';
            })
        }
    })
})

//document.addEventListener('DOMContentLoaded', function () {
//     const redirectErrorPage = document.querySelectorAll('div > button');
//
//     for (let i = 0; i < redirectErrorPage.length; i++) {
//         const button = redirectErrorPage[i];
//         if (button.id !== 'requestCall' && button.id !== 'sendRequest') {
//             button.addEventListener('click', () => {
//                 window.location.href = '../../CBC_404/CBC_404.html';
//             });
//         }
//     }
// });
