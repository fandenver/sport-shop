document.addEventListener('DOMContentLoaded', function () {
    const buttonNavBar = document.querySelectorAll('.alignSpan > div');
    const toolTipOne = document.querySelectorAll('.alignSpan > div > div');
    const buttonsArray = Array.from(buttonNavBar);

    buttonsArray.forEach((button, index) => {
        button.addEventListener('mouseover', () => {
            toolTipOne[index].style.display = ('flex');
        })

        button.addEventListener('mouseout', () => {
            toolTipOne[index].style.display = ('none');
        });
    });
})