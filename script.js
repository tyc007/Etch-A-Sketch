let gridRows = 16;
let gridCols = 16;
const container = document.getElementById('container');
const controls = document.getElementById('controls');


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

function createSizeSlider(){
    let sliderValue = document.createElement("div");
    sliderValue.textContent = gridRows;

    let slider = document.createElement("input");
    slider.id = "sizeSlider";
    slider.type = "range";
    slider.min = "1";
    slider.max = "100";
    slider.value = gridRows;

    slider.addEventListener("input", () => sliderValue.textContent = slider.value );

    controls.appendChild(sliderValue);
    controls.appendChild(slider);
}

createGrid(gridRows, gridCols);
createSizeSlider();
