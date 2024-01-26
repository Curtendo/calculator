let digitsArray = [];
let firstDigits = null;
let secondDigits = null;
let operator = "";
let isFirstDigits = true;

function calculate(a, op, b) {
    total = 0;
    a = +a;
    b = +b;
    switch(op) {
        case "/":
            if (b === 0) {
                total = "LOL";
            } else {
                total = a / b;
            }
            break;
        case "*":
            total = a * b;
            break;
        case "-":
            total = a - b;
            break;
        case "+":
            total = a + b;
            break;
    }
    return total;
}

// Number button handler
const buttonContainer = document.querySelector(".button-container");
buttonContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("number-button")) {
        
        let userNumber = event.target.textContent;
        
        if (isFirstDigits) {
            digitsArray.push(userNumber);
            firstDigits = digitsArray.join("");
            updateDisplay(firstDigits);
        } else {
            digitsArray.push(userNumber);
            secondDigits = digitsArray.join("");
            updateDisplay(secondDigits);
        }
    }
})

// Operator button handler
buttonContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("operator-button")) {
        if (firstDigits) {
            operator = event.target.textContent;
            updateOperatorDisplay(operator);
            digitsArray = [];
            isFirstDigits = false;
        }
    }
})

// Decimal button handler
buttonContainer.addEventListener("click", function(event) {
    if (event.target.id === "decimal" && !digitsArray.includes(".")) {
        if (digitsArray.length === 0) {
            digitsArray.push(...[0, "."]);
        } else {
            digitsArray.push(".");
        }
        console.log(digitsArray);
        updateDisplay(+digitsArray.join(""));
    }
})

// Clear button handler
buttonContainer.addEventListener("click", function(event) {
    if (event.target.id === "clear") {
        clear();
        updateDisplay(0);
        updateOperatorDisplay("");
    }
})

// Backspace button handler
buttonContainer.addEventListener("click", function(event) {
    if (event.target.id === "backspace") {
        digitsArray.pop();
        updateDisplay(+digitsArray.join(""));
    }
})

// Equals button handler
buttonContainer.addEventListener("click", function(event) {
    if (event.target.id === "equals") {
        if (secondDigits) {
            updateOperatorDisplay("");

            let preRounded = calculate(firstDigits, operator, secondDigits);
            let total;
            
            if (preRounded === "LOL") {
                total = preRounded;
            } else {
                total = parseFloat(preRounded.toFixed(4));
            }
            
            updateDisplay(total);
            clear();
            firstDigits = total;
        }
    }
})

const digitDisplay = document.querySelector("#digit-display");
function updateDisplay(digits) {
    let digitDisplayArray = Array.from(String(digits));

    if (digitDisplayArray.length > 10) {
        digitDisplay.textContent = "ERR";
        total = 0;
    } else {
        digitDisplay.textContent = digits;
    }
}

const operatorDisplay = document.querySelector("#operator-display");
function updateOperatorDisplay(operator) {
    operatorDisplay.textContent = operator;
}

function clear() {
    digitsArray = [];
    firstDigits = null;
    secondDigits = null;
    operator = null;
    isFirstDigits = true;
}

// Keypress listener and logic
document.addEventListener('keydown', function(event) {
    const key = event.key;
    let button = findButtonForKey(key);

    if (button) {
        button.classList.add('button-pressed');
        event.preventDefault();
        
        if (key === 'Enter') {
            button.click();
            return;
        } else if (key === 'Backspace') {
            button.click();
            return;
        } else if (key === 'Escape') {
            button.click();
            return;
        } else {
            button.click();
        }
    }
});

document.addEventListener('keyup', function(event) {
    const key = event.key;
    let button = findButtonForKey(key);
    
    if (button) {
        button.classList.remove('button-pressed');
    }
});

function findButtonForKey(key) {
    return buttonContainer.querySelector(`.button[data-key="${key}"]`);
}
