
//OPERATIONS
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
    const division = a / b; 
    if(a % b != 0) {
        return division.toFixed(3);
    }
    return division;
}

function operation(inputOne, operator, inputTwo) {
    if(operator == '+') {
        return add(inputOne, inputTwo);
    }
    else if(operator == '-') {
        return subtract(inputOne, inputTwo);
    }
    else if(operator == '*') {
        return multiply(inputOne, inputTwo);
    }
    else if(operator == '/') {
        return divide(inputOne, inputTwo);
    }
    else {
        return;
    }
}

//DOM elements
const resultText = document.querySelector('.resultText');
const numBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');
const equalsBtn = document.querySelector('.equals');

//values
let currentInput = '';
let inputOne = '';
let operator = '';
let inputTwo = '';

//result display
function displayVal(value) {
    resultText.textContent = value;
}

//number input
numBtns.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.textContent;
        displayVal(currentInput);
    });
});

//operator input
operatorBtns.forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput === '') {
            return;
        } 
        if (inputOne !== '' && operator !== '') {
            inputTwo = currentInput;
            let result = operation(parseFloat(inputOne), operator, parseFloat(inputTwo));
            inputOne = result.toString();
            displayVal(result);
        }
        else {
            inputOne = currentInput;
        }
        operator = button.textContent;
        currentInput = '';
    });
});

equalsBtn.addEventListener('click', () => {
    if(inputOne === '' || currentInput == '') {
        return;
    } 
    inputTwo = currentInput;
    let result = operation(parseFloat(inputOne), operator, parseFloat(inputTwo));
    displayVal(result);
    currentInput = result.toString();
    inputOne = '';
    operator = '';
    inputTwo ='';
});

clearBtn.addEventListener('click', () => {
    currentInput = '';
    inputOne = '';
    operator = '';
    inputTwo ='';
    displayVal('0');
})

deleteBtn.addEventListener('click', () => {
    currentInput = currentInput.slice(0, -1);   //start at beginning and remove last value
    if(currentInput == '') {
        displayVal('0');
    }
    else if(currentInput != ('0')) {
        displayVal(currentInput);
    }
});

