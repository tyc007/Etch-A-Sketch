const GRID_ROWS = 16;
const GRID_COLS = 16;
const container = document.getElementById('container');


function createGrid(rows,cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let gridItem = document.createElement("div");
        gridItem.addEventListener('mouseover', paint);
        gridItem.addEventListener('mousedown', paint);
        container.appendChild(gridItem).className = "grid-item";
    };
}

function paint(e){
    e.target.style.backgroundColor = 'lightblue';
}

createGrid(GRID_ROWS, GRID_COLS);
//createHoverEffect();
