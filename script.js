const GRIDHEIGHT = 16;
const GRIDLENGTH = 16;

function createGrid(){
    let container = document.createElement("div");
    container.id = "container";
    document.body.appendChild(container);
    for (let i = 0; i < GRIDHEIGHT*GRIDLENGTH; i++){
        let div = document.createElement("div");
        div.id = i;
        div.className = "grid";
        container.appendChild(div);
    }
    
}

createGrid();