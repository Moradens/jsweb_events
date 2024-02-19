// 3.)
const colorBox = document.getElementById('color-box');

function zmnena(key) {
    switch (key) {
        case 'b':
            colorBox.style.backgroundColor = 'blue';
            break;
        case 'r':
            colorBox.style.backgroundColor = 'red';
            break;
        case 'g':
            colorBox.style.backgroundColor = 'green';
            break;

        default:

            break;
    }
}

document.addEventListener('keydown', function(event) {
    const  klavesnice = event.key.toLowerCase();
    zmnena(klavesnice);
});