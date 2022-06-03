let container = document.getElementsByClassName('container')[0];
let clearButton = document.getElementById('clear-button');
let cells = document.getElementsByClassName('squares');

function createSquares(rows, columns) {
    for (let i = 0; i < rows; i++) {
        for (let k = 0; k < columns; k++) {
            let squares = document.createElement('div');
            container.append(squares);
            squares.className = 'squares';
            hover(squares);
        }
    }
}

createSquares(16, 16);

function hover(cells) {
    cells.addEventListener('mouseover', function (e) {
        e.target.style.backgroundColor = 'black';        
    })
} 

clearButton.onclick = function removeColor() {

    for (const element of cells) {
        element.setAttribute('style', 'backgroundColor=antiquewhite');
    }
}
