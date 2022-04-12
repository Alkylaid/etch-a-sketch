const container = document.querySelector('.container');

createMenu();
createGrid();
hover();

function hover(){
const squareHover = document.querySelectorAll('.square');

squareHover.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor= 'black';
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



