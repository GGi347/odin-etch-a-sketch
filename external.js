/*
    objective: draw a square of xXx. x is provided by user

    styling and layout in the css

    creating div in js

    
 */

const container = document.querySelector('.container');


let row = 100
for (let i=0; i < (row*row); i++) {
    //create a new cell
    container.style.setProperty('--grid-rows', row);
    container.style.setProperty('--grid-cols', row);
    let cell = document.createElement("div");
    
    container.appendChild(cell).className = 'grid-item';
    //append it
}

const cells = document.querySelectorAll(".grid-item")

// cells.forEach((cell) => {
//     () => cell.addEventListener("mouseout", cell.style.backgroundColor = "beige")
// });

cells.forEach((cell) => {
    cell.addEventListener("mouseout", () => cell.style.backgroundColor = "beige")
  });