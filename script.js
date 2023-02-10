const GRID_ROWS = 16;
const GRID_COLS = 16;
const container = document.getElementById('container');


function createGrid(rows,cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.innerText = (i + 1);
        container.appendChild(cell).className = "grid-item";
    };

}


createGrid(GRID_ROWS, GRID_COLS);