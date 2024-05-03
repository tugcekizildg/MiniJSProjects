
const body = document.getElementsByTagName("body")[0]; // it takes the first element of the body tag which is color-container.

function setColor(name) {
    body.style.backgroundColor = name;
    const header = document.querySelector('.header');
    header.style.color= "white";
}

function randomColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

   

    const color = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = color;

    const randomBtn = document.querySelector('.random');
    randomBtn.style.backgroundColor = color;
}
