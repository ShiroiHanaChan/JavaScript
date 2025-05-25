const display = document.getElementById('display');
// to read or edit an HTML element, in this case the input tag with #display id

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value); /* UNSAFE CODE */
    }
    catch(error) {
        display.value = 'ERR'
    }
    
}

x = () => (console.log('hi'));
x()
var x;

console.log('done')