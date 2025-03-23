// Link the constants to be fetched in the form
const formGenX = document.querySelector('chess-generatorX');
const formGenY = document.querySelector('chess-generatorY');

const formTileX = document.querySelector('odd-evenX');
const formTileY = document.querySelector('odd-evenY');

const formChessboardGen = document.querySelector('.chessboard-generator');
const formOddOrEven = document.querySelector('.odd-or-even');

// Link to results, will be used by the odd or even function
let resultsOutput = '';
let resultsOddOrEven = document.getElementById('resultsOutput');

resultsOutput.innerHTML = `Hi`;
// Define the odd or even function
function oddOrEven(tileX, tileY) {
    // Needs a check if the input values are above 0
    if (tileX === tileY) {
        console.log('White!');
        /*resultsOutput.innerHTML = `The tile is white!`;*/
    } else if ((tileX % 2 === 0 || tileY % 2 === 0) && (tileX % 2 === 1 || tileY % 2 === 1)) {
        console.log('Black');
        /*resultsOutput.innerHTML = `The tile is black!`;*/
    } else {
        console.log('White');
        /*resultsOutput.innerHTML = `The tile is white!`;*/
    }
}

// Chessboard generator submit event handler
formChessboardGen.addEventListener('submit', function(event) {
    event.preventDefault();
        const genX = Number(document.getElementById('chess-generatorX').value);
        const genY = Number(document.getElementById('chess-generatorY').value);
    if (isNaN(genX) || isNaN(genY)) {
        resultsOutput.innerHTML = 'Please input only numbers!';
        console.log('Please input only numbers!');
        return;
    }
            console.log(genX);
            console.log(genY);

    }
);

// Odd or even submit event handler
formOddOrEven.addEventListener('submit', function(event) {
    event.preventDefault();
        const tileX = Number(document.getElementById('odd-evenX').value);
        const tileY = Number(document.getElementById('odd-evenY').value);
    if (isNaN(tileX) || isNaN(tileY)) {
        resultsOutput.innerHTML = 'Please input only numbers!';
        return;
    }
            console.log(tileX);
            console.log(tileY);
    resultsOutput.innerHTML = `The tile is ${oddOrEven(tileX, tileY)}`;
    }
);

// Console logs
console.log(formTileX);
console.log(formTileY);


// Run oddOrEven

// HTML Outputs


