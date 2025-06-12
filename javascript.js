const CONTAINER_HEIGHT_TARGET = 240;
const CONTAINER_WIDTH_TARGET = 480;

function initializeEAS(cellsWide, cellsHigh) {
    let actualWidth = Math.round(CONTAINER_WIDTH_TARGET / cellsWide) * cellsWide;
    let actualHeight = Math.round(CONTAINER_HEIGHT_TARGET / cellsHigh) * cellsHigh;
    const container = document.querySelector("#container");
    container.style.height = actualHeight + "px";
    container.style.width = actualWidth + "px";
}







// --------------------------------
initializeEAS(16, 32);