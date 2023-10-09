const img = document.getElementById('car');
const rightBtn = document.getElementById('estudos-arrow-2');
const leftBtn = document.getElementById('estudos-arrow-1');


let pictures = ['svgs/parkison.svg', 'svgs/gloria.svg', 'svgs/cal.svg', 'svgs/universidade.svg', 'svgs/mihaly.svg', 'svgs/gtd.svg'];

img.src = pictures[0];
let position = 0;



const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);