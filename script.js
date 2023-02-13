const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#696969';

let gridSize = DEFAULT_SIZE;
let color = DEFAULT_COLOR;
let paintMode = 'color';
const container = document.getElementById('container');
const settings = document.getElementById('settings');



function createGrid(rows,cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let gridItem = document.createElement("div");
        gridItem.addEventListener('mouseover', paint);
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
    if (paintMode == 'color') {
        paintColor(e);
    }
    if (paintMode == 'rainbow') {
        paintRainbow(e);
    }
    
}

function paintColor(e){
    e.target.style.backgroundColor = color;
}

function paintRainbow(e){
    e.target.style.backgroundColor = rgb(randomRGBInt(),randomRGBInt(),randomRGBInt());
}

function randomRGBInt(){
    return Math.floor(Math.random() * 256);
}

function rgb(r,g,b){
    return `rgb(${r}, ${g}, ${b})`;
}

function createSizeSlider(){
    let sliderContainer = document.createElement("div");

    let sliderDisplay = document.createElement("div");
    sliderDisplay.textContent = gridSize;

    let slider = document.createElement("input");
    slider.id = "sizeSlider";
    slider.type = "range";
    slider.min = "1";
    slider.max = "100";
    slider.value = gridSize;

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

    rainbowButton.addEventListener("click", function(){
        paintMode = 'rainbow';
    });

    settings.appendChild(rainbowButton);
}

function createColorOption(){
    const colorButton = document.createElement("button");
    colorButton.id = "color";
    colorButton.textContent = "Color";

    colorButton.addEventListener("click", function(){
        colorButton = 'color';
    });

    settings.appendChild(colorButton);
}



createGrid(gridSize, gridSize);
createSizeSlider();
createRainbowOption();
createColorOption();
