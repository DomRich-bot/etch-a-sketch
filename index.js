const container = document.querySelector('#container');
const square = document.querySelector('.square');
const change = document.querySelector('.select');
document.addEventListener('DOMContentLoaded',function(){
    makeGrid(16,16);
    colorBlack();
})

function getSize(){
    let input = prompt('Choose a board size');
    if(input == ""){
        alert('Choose a NUMBER');
    } else if(input < 0 || input > 100){
        alert('Numbers between 1 and 100 only')
    } else {
        let rows = input;
        let cols = input;
        makeGrid(rows,cols)
    }
}
 
function makeGrid(rows,cols) {
    container.style.setProperty('--grid-rows',rows);
    container.style.setProperty('--grid-cols',cols);
    for (c=0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'square';
    };
}

function colorBlack(){
    container.addEventListener('mouseover', function(e){
     if(e.target.classList.contains('square')){
             e.target.style.cssText = 'background-color: black' 
      }; 
    });
}

function randomColor(){
    container.addEventListener('mouseover', function(e){
        if(e.target.classList.contains('square')){
                e.target.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)` 
         }; 
       });
}

function clearBoard(){
    container.innerHTML = "";
    makeGrid(16,16);
}

change.addEventListener('click', () => {
    container.innerHTML = "";
    getSize();
});
