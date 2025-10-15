let display = document.getElementById('display');
let currentInput = '0';
let operator = '';
let previousInput = '';
let shouldResetDisplay = false;

function appendToDisplay(value) {
    if (shouldResetDisplay) {
        currentInput = '0';
        shouldResetDisplay = false;
    }

    if (value === '.' && currentInput.includes('.')) {
        return;
    }

    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }

    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operator = '';
    display.textContent = currentInput;
}

function calculate() {
    if (!operator || !previousInput) return;

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero!");
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    display.textContent = currentInput;
    previousInput = '';
    operator = '';
    shouldResetDisplay = true;
}

function appendToDisplay(value) {
    if (['+', '-', '*', '/'].includes(value)) {
        if (currentInput && previousInput && operator) {
            calculate();
        }
        operator = value;
        previousInput = currentInput;
        shouldResetDisplay = true;
    } else {
        if (shouldResetDisplay) {
            currentInput = '0';
            shouldResetDisplay = false;
        }

        if (value === '.' && currentInput.includes('.')) {
            return;
        }

        if (currentInput === '0' && value !== '.') {
            currentInput = value;
        } else {
            currentInput += value;
        }

        display.textContent = currentInput;
    }
}