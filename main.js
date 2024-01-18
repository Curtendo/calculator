let firstDigit = 10;
let secondDigit = 5;
let operator = "*"

function calculate(a, op, b) {
    total = 0;
    switch(op) {
        case "/":
            total = a / b;
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

console.log(calculate(firstDigit, operator, secondDigit));