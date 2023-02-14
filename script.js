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
        gridSize = slider.value;
        updateGrid(slider.value);
    });

    sliderContainer.appendChild(sliderDisplay);
    sliderContainer.appendChild(slider);
    settings.appendChild(sliderContainer);
}

function createOptions(){
    const rainbowButton = document.createElement("button");
    rainbowButton.id = "rainbow";
    rainbowButton.textContent = "Rainbow";

    const colorButton = document.createElement("button");
    colorButton.id = "color";
    colorButton.textContent = "Color";
    colorButton.classList.toggle("active");

    rainbowButton.addEventListener("click", function(){
        paintMode = 'rainbow';
        rainbowButton.classList.toggle("active");
        if (colorButton.classList.contains("active")){
            colorButton.classList.toggle("active");
        }
    });

    colorButton.addEventListener("click", function(){
        paintMode = 'color';
        colorButton.classList.toggle("active");
        if (rainbowButton.classList.contains("active")){
            rainbowButton.classList.toggle("active");
        }
    });

    settings.appendChild(colorButton);
    settings.appendChild(rainbowButton);
}

function createErase(){
    const eraseButton = document.createElement("button");
    eraseButton.id = "erase";
    eraseButton.textContent = "Erase";

    eraseButton.addEventListener("click", function(){
        updateGrid(gridSize);
    });

    settings.appendChild(eraseButton);
}

createGrid(gridSize, gridSize);
createSizeSlider();
createOptions();
createErase();
