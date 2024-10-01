const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';  // Clears the display
}

function calculate() {
    try {
        display.value = eval(display.value); // Evaluates the expression
    } catch (error) {
        display.value = "Error";  // Displays 'Error' if there's an issue
    }
}

function deleteLast() {
    display.value = display.value.slice(0, -1);  // Deletes the last character
}
