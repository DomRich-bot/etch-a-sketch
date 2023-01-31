const container = document.querySelector('#container');

function makeGrid(rows,cols) {
    container.style.setProperty('--grid-rows',rows);
    container.style.setProperty('--grid-cols',cols);
    for (c=0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = "square"; 
    };
}

makeGrid(16,16)