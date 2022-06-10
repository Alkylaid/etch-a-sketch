const container = document.querySelector('.container');
const grid = document.querySelector('.grid');
//createMenu();
createGrid(16, 16);
hover();

function createGrid(row, column) {
    grid.style.gridTemplateColumns = `repeat(${row}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${column}, 1fr)`;
    for (i = 0; i < (row * column); i++) {
        let square = document.createElement('div');
        grid.appendChild(square).className = "square";
    };
}

function hover() {
    const squareHover = document.querySelectorAll('.square');

    squareHover.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = generateRandomColor();
        })
    })
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
