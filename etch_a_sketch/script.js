/*

16 x 16 square divs
inside container from html file
set container width and height to 900px

hover effect to change color of divs (white to black)
  1 add new class
  or
  2 change background color

button to clear current grid and ask for new grid number

space stays the same, 700px wide

button
prompt
at least 64 x 64 grid

change to random color
change to +10% black each time

*/

let gridSize = 16;
let gridHeight = 700;
let gridItem;

let container = document.getElementById("container");
container.style.width = gridHeight + "px";
container.style.height = gridHeight + "px";
container.style.border = "2px solid green";
container.style.margin = "auto";

let header = document.createElement("header");
container.parentNode.insertBefore(header, container);

let h1 = document.createElement("h1");
h1.textContent = "Etch-a-Sketch";
h1.style.textAlign = "center";
header.appendChild(h1);

let button = document.createElement("button");
button.textContent = "Reset";
button.style.margin = "auto";
button.style.width = "100px";
button.style.height = "30px";
button.style.margin = "auto";
button.style.marginBottom = "30px";
button.style.display = "block";

button.style.backgroundColor = "green";
button.style.color = "white";
button.style.border = "none";
button.style.fontSize = "1em";
header.appendChild(button);

button.addEventListener("click", function() {
  gridSize = prompt("New grid size?");
  container.innerHTML = "";
  createGrid();
})

let opacity = [];

function createGrid() {
  let gridItemDimension = gridHeight/gridSize + "px";

  for (let counter = 0; counter < (gridSize*gridSize); counter++) {
    gridItem = document.createElement("div");
    gridItem.style.width = gridItemDimension;
    gridItem.style.height = gridItemDimension;
    gridItem.style.boxSizing = "border-box"
    gridItem.style.border = "2px solid white";
    gridItem.style.float = "left";

    gridItem.style.backgroundColor = "green";
    gridItem.style.opacity = 0;

    container.appendChild(gridItem);

    opacity[counter] = 0;

    gridItem.addEventListener("mouseover", function() {
      opacity[counter] += 0.1;
      this.style.opacity = opacity[counter];
    })

  }
}

createGrid();