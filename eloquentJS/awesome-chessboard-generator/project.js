// Link the constants to be fetched in the form
const formChessboardGen = document.querySelector('.chessboard-generator');
const formOddOrEven = document.querySelector('.odd-or-even');

// Select my grid so I can dynamically change the template columns defined according to the valued input in genX
const gridChessboard = document.querySelector('.grid');

// Link to results, will be used by the odd or even function
let resultsOddOrEven = document.getElementById('resultsOutput');

// Define the odd or even function
function oddOrEven(tileX, tileY) {
    // Needs a check if the input values are above 0
    if ((tileX % 2 === 1 || tileY % 2 === 1) && (tileX % 2 === 0 || tileY % 2 === 0)) {
        return `black!`;
    } else {
        return `white!`;
    }
}

// This function accepts the input genY, which controls the rows added to the board, and alternates between starting
// with black and white!
function addChessRowOdd(genX, genY) {
    // Set tile colors to iterate and build the chessboard
    let colorArray = ['black', 'white'];
    let cells = genX * genY;
    let k = 0; // Declares and resets K
    console.log('cells...', cells);
    // Clears the .grid element in case the algorithm gets re-run without reloading the browser
    gridChessboard.innerHTML = '';
        do {
            const newDiv = document.createElement('div');
            newDiv.classList.add('block');
            // As opposed to appendChild(), prepend maintains compatibility with the oddOrEven function
            gridChessboard.prepend(newDiv);
            // If k reaches the end of the 'chessboard line' and genX is pair we will swap the two values present in the
            // array, ad infinitum
            if (k % genX === 0 && genX % 2 === 0)
                [colorArray[0], colorArray[1]] = [colorArray[1], colorArray[0]];
            newDiv.classList.add(colorArray[k%2]);
            k++;
        } while (k < cells); // Solves any issues if genY = 1... or something like that!
    }

// Chessboard generator submit event handler
formChessboardGen.addEventListener('submit', function(event) {
    event.preventDefault();
        const genX = Number(document.getElementById('chess-generatorX').value);
        const genY = Number(document.getElementById('chess-generatorY').value);
    if (isNaN(genX) || isNaN(genY)) {
        resultsOddOrEven.innerHTML = 'Please input only numbers!';
        return;
    }
            gridChessboard.style.gridTemplateColumns = `repeat(${genX}, 1fr)`;
            addChessRowOdd(genX, genY);
    }
);

// Odd or even submit event handler
formOddOrEven.addEventListener('submit', function(event) {
    event.preventDefault();
        const tileX = Number(document.getElementById('odd-evenX').value);
        const tileY = Number(document.getElementById('odd-evenY').value);
    if (isNaN(tileX) || isNaN(tileY)) {
        resultsOddOrEven.innerHTML = 'Please input only numbers!';
        return;
    }
            resultsOddOrEven.innerHTML = `The tile is ${oddOrEven(tileX, tileY)}`;
    }
);