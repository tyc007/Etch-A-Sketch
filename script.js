let gridRows = 16;
let gridCols = 16;
let color = '#080808';
const container = document.getElementById('container');
const settings = document.getElementById('settings');



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

function updateGrid(size){
    deleteGrid();
    createGrid(size,size);
}

function deleteGrid(){
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function paint(e){
    e.target.style.backgroundColor = color;
}

function createSizeSlider(){
    let sliderContainer = document.createElement("div");

    let sliderDisplay = document.createElement("div");
    sliderDisplay.textContent = gridRows;

    let slider = document.createElement("input");
    slider.id = "sizeSlider";
    slider.type = "range";
    slider.min = "1";
    slider.max = "100";
    slider.value = gridRows;

    slider.addEventListener("input", function(){
        sliderDisplay.textContent = slider.value; 
        updateGrid(slider.value);
    });

    sliderContainer.appendChild(sliderDisplay);
    sliderContainer.appendChild(slider);
    settings.appendChild(sliderContainer);
}

function createRainbowOption(){
    const rainbowButton = document.createElement("button");
    rainbowButton.id = "rainbow";
    rainbowButton.textContent = "Rainbow";

    settings.appendChild(rainbowButton);
}

function createColorOption(){
    const colorButton = document.createElement("button");
    colorButton.id = "color";
    colorButton.textContent = "Color";

    settings.appendChild(colorButton);
}



createGrid(gridRows, gridCols);
createSizeSlider();
createRainbowOption();
createColorOption();
