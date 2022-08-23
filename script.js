// Cinstants
let side = 16;

// Create grid
const container = document.querySelector("#container");
for (let i = 0; i < side * side; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = 'black';
    });
    container.appendChild(box);
}

// Resize button
// Changes size of grid
const resize = document.querySelector("#resize");

// Clear button
// Changes all cells to white
const clear = document.querySelector("#clear");
clear.addEventListener('click', function(){
    let cell = container.children;
    for (let i = 0; i < 256; i++){
        cell[i].style.backgroundColor = 'white';
    }
});

function clear(){
    let cell = container.children;
    for (let i = 0; i < 256; i++){
        cell[i].style.backgroundColor = 'white';
    }
}

