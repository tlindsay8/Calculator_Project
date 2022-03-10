let equation = [];

let sum = document.getElementById('sum');

let numbers = document.getElementsByClassName('numbers');

let details = document.getElementsByClassName('grayButton');

let calcInput = document.getElementById('calcInput');

let operators = document.getElementsByClassName('goldButton');

let clear = document.getElementById('clear');

let posOrNeg = document.getElementById('posOrNeg');
let negSwitch = true;

let percentage = document.getElementById('percentage');

let firstNumber = 0,
    secondNumber = 0,
    operation = '',
    finalNumber = 0;

Array.from(numbers).forEach((number) => {
    number.addEventListener('click', (event) => {
        calcInput.value += event.target.value;
    });
});

Array.from(operators).forEach((operator) => {
    operator.addEventListener('click', (event) => {
        if (operation === '' || firstNumber === '') {
            firstNumber = calcInput.value;
            operation = event.target.value;
            calcInput.value = '';
        } else {
            secondNumber = calcInput.value;
        }
    });
});

sum.addEventListener('click', (event) => {
    completeOperation();
    calcInput.value = finalNumber;
    firstNumber = calcInput.value;
    operation = '';
})

clear.addEventListener('click', () => { 
    let counter = 0;
    if (counter < 2) {
        calcInput.value = ''; 
        counter++;
    } else {
        firstNumber = '';
        secondNumber = '';
        operation = '';
        counter = 0;
    }
});

percentage.addEventListener('click', () => {
    calcInput.value = parseFloat(calcInput.value) / 100;
});

posOrNeg.addEventListener('click', () => {
    negSwitch = !negSwitch;
    if (!negSwitch) {
        let value = [...calcInput.value];
        value.unshift('-');
        calcInput.value = value.join("");
    } else {
        let valueNext = [...calcInput.value];
        if (valueNext[0] === '-') {
            valueNext.shift();
            calcInput.value = valueNext.join("");
        } else {
            return;
        }
    }
     
})

function completeOperation() {
    switch (operation) {
        case '+': 
            finalNumber = parseFloat(firstNumber) + parseFloat(secondNumber);
            break;
        case '-':
            finalNumber = parseFloat(firstNumber) - parseFloat(secondNumber);
            break;
        case 'X':
            finalNumber = parseFloat(firstNumber) * parseFloat(secondNumber);
            break;
        case '/':
            finalNumber = parseFloat(firstNumber) - parseFloat(secondNumber);
            break;
    }
}