
//math functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let inputOne = '3';
let operator = '+';
let inputTwo = '5';

function operation(inputOne, operator, inputTwo) {
    if(operator == '+') {
        add(inputOne, inputTwo);
    }
    else if(operator == '-') {
        subtract(inputOne, inputTwo);
    }
    else if(operator == '*') {
        multiply(inputOne, inputTwo);
    }
    else if(operator == '/') {
        divide(inputOne, inputTwo);
    }
    else {
        return;
    }
}