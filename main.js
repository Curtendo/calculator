let firstDigit = [];
let secondDigit = [];
let operator = null;

function calculate(a, op, b) {
    total = 0;
    switch(op) {
        case "/":
            if (b === 0) {
                total = "ERR"
            } else {
                total = a / b;
            }1
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

const buttonContainer = document.querySelector(".button-container");
buttonContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("number-button")) {
        if (!operator) {
            let userNumber = event.target.textContent;
            firstDigit.push(userNumber);
            console.log(firstDigit);
        }
    }
})

buttonContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("operator-button")) {
        if (firstDigit) {
            operator = event.target.textContent;
            console.log(operator);
        }
    }
})

calculate(firstDigit, operator, secondDigit);