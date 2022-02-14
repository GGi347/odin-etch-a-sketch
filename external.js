const container = document.querySelector('.container');
let colored = true;

let squareLen = askForSize();
createCells();
function createCells() {
    for (let i=0; i < (squareLen * squareLen); i++) {
        container.style.setProperty('--grid-rows', squareLen);
        container.style.setProperty('--grid-cols', squareLen);
        let cell = document.createElement("div");       
        container.appendChild(cell).className = 'grid-item';
    }
    
}


function askForSize() {
    let userAns ;
    do {
        userAns = prompt("What will be the length of your square? (not more than 100)");
        console.log(userAns)
    } while((userAns < 1) || (userAns > 100 ) || isNaN(userAns));
    return userAns;
    
}


let pickColor = () => Math.floor(Math.random() * 16);
function colorThePixel(cell) {
    letters= '0123456789ABCDEF'
    let color = "#";
    for (let i=0; i<6; i++) {
        color += letters[pickColor()];
    }
    cell.style.backgroundColor = color;
}

const cells = document.querySelectorAll(".grid-item")

cells.forEach((cell) => {
    
    cell.addEventListener("mouseenter", () => {
        if(colored) colorThePixel(cell);
        
    })
});

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener('click', () => {
    location.reload();

    //while ( container.firstChild ) container.removeChild( container.firstChild );
    // askForSize();
    // createCells();
    //cells.forEach((cell) => cell.style.backgroundColor = 'white');
});

const gridsBtn = document.querySelector(".show-grids");
gridsBtn.addEventListener('click', () => {
    if (gridsBtn.textContent=="Show Grids") {
        cells.forEach((cell) => cell.style.setProperty('border', '1px solid rgba(0, 0, 0, 0.6)'))
        gridsBtn.textContent= "Hide Grids";
    } else {
        cells.forEach((cell) => cell.style.setProperty('border', '0'))
        gridsBtn.textContent = "Show Grids";
    }
});

