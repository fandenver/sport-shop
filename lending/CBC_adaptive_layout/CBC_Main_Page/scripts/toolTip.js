document.addEventListener('DOMContentLoaded', function () {
    const buttonNavBar = document.querySelectorAll('.alignSpan > div');
    const toolTipMainBar = document.querySelectorAll('.alignSpan > div > div');
    const buttonsArray = Array.from(buttonNavBar);
    const spanToolTipNavBar = document.querySelectorAll('.navBar > div > span');
    const toolTipNavBar = document.querySelectorAll('.navBar > div > div');
    const spanArray = Array.from(spanToolTipNavBar);

    buttonsArray.forEach((button, index) => {
        button.addEventListener('mouseover', () => {
            toolTipMainBar[index].style.display = 'flex';
        });

        button.addEventListener('mouseout', () => {
            toolTipMainBar[index].style.display = 'none';
        });
    });

    spanArray.forEach((button, index) => {
        button.addEventListener('mouseover', () => {
            toolTipNavBar[index].style.display = 'flex';
        });

        button.addEventListener('mouseout', () => {
            toolTipNavBar[index].style.display = 'none';
        });
    });
})