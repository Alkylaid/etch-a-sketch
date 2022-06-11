const container = document.querySelector('.container');
const grid = document.querySelector('.grid');
const slider = document.querySelector('.slider');
const output = document.getElementById('pixel');
const resetButton = document.querySelector('.resetButton');
const eraserButton = document.querySelector('.eraserButton');
const randomButton = document.querySelector('.randomButton');
const colorButton = document.querySelector('.colorButton');
let mode;
changeMode(`color`);

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
            
            if (mode == 'color'){
                square.style.backgroundColor = document.getElementById('colorPicker').value;
            } else if (mode == 'random'){
            square.style.backgroundColor = generateRandomColor();}
            else if (mode == 'eraser') {
                square.style.backgroundColor = '#ffffff';
            }
        })
    })
}


function reset() {
    const squareReset = document.querySelectorAll('.square');
    squareReset.forEach((square) => {
        square.removeAttribute('style');
    })
    document.getElementById('colorPicker').value = "#000000";
    slider.value = 16;
    clearGrid();
    createGrid(slider.value);
    hover();
    output.innerHTML = slider.value + "  x " + slider.value;
    
    
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

resetButton.onclick = () => reset();
colorButton.onclick = () => {
    changeMode('color');
}

randomButton.onclick = () => {
    changeMode('random');
}

eraserButton.onclick = () => {
    changeMode('eraser');
}

function changeMode(newMode) {
    mode = newMode;
    document.querySelectorAll('.button-active').forEach((button) => {
        button.classList.remove('button-active');
    })
    if (mode == 'color') {
        colorButton.classList.add('button-active');
    } else if (mode == 'random') {
        randomButton.classList.add('button-active');
    } else if (mode == 'eraser') {
        eraserButton.classList.add('button-active');
    }

}
