// Add HTML content
const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = 'black';
    });
    container.appendChild(box);
}


