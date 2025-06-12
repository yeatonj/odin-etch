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
            if (mode === "grey") {
                cell.id = "cell-grey";
            } else {
                cell.id = "cell-rainbow";
            }
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
    if (mode === "grey") {
        let curOpacity = Number(element.style.opacity);
        if (curOpacity == 1) {
            return;
        }
        element.style.opacity = String(curOpacity + 0.1);
    } else {
        // Must be rainbow as of right now
        element.style.backgroundColor = rainbowColors[(Math.round(Math.random() * 100) % rainbowColors.length)];
    }
    
}

function initializeGreyscale() {
    mode = "grey";
    deleteBoard();
    initializeEAS(32, 24);
}

function initializeRainbow() {
    mode = "rainbow";
    deleteBoard();
    initializeEAS(32, 24);
}

// --------------------------------
let mode = "";
initializeGreyscale();

rainbowColors = ["red", "orange", "green", "blue", "pink", "purple"];

const gridButton = document.querySelector(".redraw");
gridButton.addEventListener("click", updateGridLayout);

const greyButton = document.querySelector(".greyscale");
greyButton.addEventListener("click", initializeGreyscale);

const rainbowButton = document.querySelector(".rainbow");
rainbowButton.addEventListener("click", initializeRainbow);