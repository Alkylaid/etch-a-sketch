const container = document.querySelector('.container');
const grid = document.querySelector('.grid');
const slider = document.querySelector('.slider');
const output = document.getElementById('pixel');
const resetButton = document.querySelector('.reset');

output.innerHTML = slider.value + "  x " + slider.value;

createGrid(slider.value);
hover();

function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (i = 0; i < (size * size); i++) {
        let square = document.createElement('div');
        grid.appendChild(square).className = "square";
    };
}

function clearGrid() {
    while (grid.lastChild) {
    grid.removeChild(grid.lastChild);
    }
}

function hover() {
    const squareHover = document.querySelectorAll('.square');

    squareHover.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = generateRandomColor();
        })
    })
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

slider.oninput = function() {
    output.innerHTML = this.value + "  x " + this.value;
    clearGrid();
    createGrid(this.value);
    hover();
}

resetButton.addEventListener("click", function() {
    reset();
})