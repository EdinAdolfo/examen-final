let display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';

function appendToDisplay(value) {
    if (currentInput.length < 10) {  // Limita la longitud del input para evitar desbordamiento
        currentInput += value;
        display.innerText = currentInput;
    }
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.innerText = '0';
}

function calculateResult() {
    if (currentInput === '' || previousInput === '' || operator === '') return;

    let result;
    const a = parseFloat(previousInput);
    const b = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        default:
            return;
    }

    display.innerText = result;
    currentInput = result.toString();
    previousInput = '';
    operator = '';
}

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerText.match(/[+\-*/]/)) {
            operator = button.innerText;
            previousInput = currentInput;
            currentInput = '';
        } else if (button.innerText === '=') {
            calculateResult();
        }
    });
});