let container = document.getElementsByClassName('container')[0];
let clearButton = document.getElementById('clear-button');
let cells = document.getElementsByClassName('squares');
let colourPicker = document.getElementById('colour-picker');
let gridSlider = document.getElementById('gridSlider');
let valueSlider = document.getElementById('valueSlider');
let sizeButton = document.getElementById('size-button');
let defaultsize = 16;

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function setupGrid(size) {
    container.innerHTML = '';
    container.style.gridTemplateColumns = (`repeat(${size}, 1fr`);
    container.style.gridTemplateRows = (`repeat(${size}, 1fr`);

    for (let i = 0; i < size * size; i++) {

        let squares = document.createElement('div');
        container.append(squares);
        squares.className = 'squares';
        hover(squares);
    }
}

function hover(cell) {
    cell.addEventListener('mouseover', function (e) {
        if(!mouseDown) {
            return;
        }
        e.target.style.backgroundColor = colourPicker.value;
    })
}

clearButton.onclick = function removeColor() {
    for (const element of cells) {
        element.setAttribute('style', 'backgroundColor=antiquewhite');
    }
}

gridSlider.onmousemove = function changeValue(e) {
    let slidervalue = e.target.value;
    valueSlider.innerText = `${slidervalue} x ${slidervalue}`;
    defaultsize = slidervalue;
    setupGrid(defaultsize);

}
setupGrid(defaultsize);



