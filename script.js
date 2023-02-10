const GRID_ROWS = 16;
const GRID_COLS = 16;
const container = document.getElementById('container');


function createGrid(rows,cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
}

function createHoverEffect(){
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'lightblue';
        });
    });
}

createGrid(GRID_ROWS, GRID_COLS);
createHoverEffect();
