const container = document.querySelector('.container');

createMenu();
createGrid();
hover();


function hover(){
const squareHover = document.querySelectorAll('.square');

squareHover.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = generateRandomColor();
    })
})
}



function createGrid() {
for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

    for (let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
    }
}
}


function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    container.appendChild(menu);
    const resetButton = document.createElement('button');
    resetButton.innerHTML = 'Reset';
    menu.appendChild(resetButton)
    resetButton.addEventListener('click', reset);
}

function reset() {
    const squareReset = document.querySelectorAll('.square');
    squareReset.forEach((square) => {
        square.removeAttribute('style');
    })
}

function generateRandomColor() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const color = "rgb(" + x + "," + y + "," + z + ")";
    return color;

}

