const container = document.querySelector("#container");

createGrid(16);

// Functions
// Create grid
function createGrid(size){
    container.style.gridTemplateColumns = (`repeat(${size}, 1fr`);
    container.style.gridTemplateRows = (`repeat(${size}, 1fr`);
    for (let i = 0; i < size * size; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        });
        container.appendChild(box);
    }
}

// Deletes grid
function deleteGrid(){
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
}
// Resize button
// Changes size of grid
const resize = document.querySelector("#resize");
resize.addEventListener('click', function(){
    deleteGrid();
    let size = prompt('How many sqaures per side? (Max 100)');
    if(size < 0 || size > 100 || isNaN(size)){
        window.alert('Invalid number. Click resize button to try again.');
        return;
    }
    createGrid(size);
});

// Clear button
// Changes all cells to white
const clear = document.querySelector("#clear");
clear.addEventListener('click', function(){
    let cell = container.children;
    for (let i = 0; i < cell.length; i++){
        cell[i].style.backgroundColor = 'white';
    }
});





