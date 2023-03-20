const box = document.getElementById('Box');

const btn = document.getElementById('btn');

btn.addEventListener('click', changeColor);

function changeColor() {
    box.style.backgroundColor = randomColor();
}

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777216).toString(16);
}