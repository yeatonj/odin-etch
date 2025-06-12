const CONTAINER_HEIGHT_TARGET = 360;
const CONTAINER_WIDTH_TARGET = 480;

function initializeEAS(cellsWide, cellsHigh) {
    let cellWidth = Math.round(CONTAINER_WIDTH_TARGET / cellsWide);
    let cellHeight = Math.round(CONTAINER_HEIGHT_TARGET / cellsHigh);
    const container = document.querySelector("#container");
    
    // Create row
    for (let i = 0; i < cellsHigh; i++) {
        const row = document.createElement("div");
        row.id = "row";
        // create cols
        for (let j = 0; j < cellsWide; j++) {
            const cell = document.createElement("div");
            cell.id = "cell";
            cell.style.height = cellHeight + "px";
            cell.style.width = cellWidth + "px";
            cell.addEventListener("mouseenter", () => adjustColor(cell));
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

function updateGridLayout() {
    let widthIn = prompt("How many columns would you like (1-100)?");
    let width = Number(widthIn);
    if (!Number.isInteger(width) || width < 1 || width > 100) {
        alert(`${widthIn} is not a valid input.`);
        return;
    }
    let heightIn = prompt("How many rows would you like (1-100)?");
    let height = Number(heightIn);
    if (!Number.isInteger(height) || height < 1 || height > 100) {
        alert(`${heightIn} is not a valid input.`);
        return;
    }
    // Delete current board
    deleteBoard();

    initializeEAS(width, height);
}

function deleteBoard() {
    const container = document.querySelector("#container");
    while (container.firstChild) {
        container.firstChild.remove();
    }
}

function adjustColor(element) {
    let curOpacity = Number(element.style.opacity);
    if (curOpacity == 1) {
        return;
    }
    element.style.opacity = String(curOpacity + 0.1);
}







// --------------------------------
initializeEAS(32, 24);

const gridButton = document.querySelector("button");
gridButton.addEventListener("click", updateGridLayout);