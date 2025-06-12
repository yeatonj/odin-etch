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
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}







// --------------------------------
initializeEAS(32, 24);