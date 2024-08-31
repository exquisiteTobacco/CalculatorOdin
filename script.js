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
    if (b === 0) {
        return "Error"; // Handle division by zero
    }
    return a / b;
}

let data = [null, null, null];
let clikedEquals = 0;
let divideZero = 0;

function operate(a, b, operand) {
    if (operand === "+") {
        return add(a, b);
    } else if (operand === "-") {
        return subtract(a, b);
    } else if (operand === "*") {
        return multiply(a, b);
    } else if (operand === "/") {
        return divide(a, b);
    }
}

function clickNumber(num) {
    const screen = document.querySelector(".screen");
    if (clikedEquals === 1 || divideZero === 1) {
        screen.innerHTML = "";
        clikedEquals = 0;
        divideZero = 0;
    }
    screen.innerHTML += num;
}

function clickPlus() {
    const screen = document.querySelector(".screen");
    const btn = document.querySelector("#plus");
    btn.addEventListener("click", () => {
        processOperator("+");
    });
}

function clickMinus() {
    const screen = document.querySelector(".screen");
    const btn = document.querySelector("#minus");
    btn.addEventListener("click", () => {
        processOperator("-");
    });
}

function clickMultiply() {
    const screen = document.querySelector(".screen");
    const btn = document.querySelector("#multiply");
    btn.addEventListener("click", () => {
        processOperator("*");
    });
}

function clickDivide() {
    const screen = document.querySelector(".screen");
    const btn = document.querySelector("#divide");
    btn.addEventListener("click", () => {
        processOperator("/");
    });
}

function processOperator(operator) {
    const screen = document.querySelector(".screen");
    if (screen.innerHTML.trim() === "") {
        return; // Do nothing if the screen is empty
    }
    if (data[0] != null) {
        let answer = operate(data[0], parseFloat(screen.innerHTML), data[1]);
        if (answer === "Error") {
            screen.innerHTML = "Error"; // Display error message
            divideZero = 1;
        } else {
            screen.innerHTML = Number.isInteger(answer) ? answer : answer.toFixed(8);
            data[0] = answer;
        }
    } else {
        data[0] = parseFloat(screen.innerHTML);
    }
    data[1] = operator;
    screen.innerHTML = "";
}

function clickEquals() {
    const screen = document.querySelector(".screen");
    const btn = document.querySelector("#equals");
    btn.addEventListener("click", () => {
        if (screen.innerHTML === "" || data[0] == null) {
            return;
        }
        data[2] = parseFloat(screen.innerHTML);
        let answer = operate(data[0], data[2], data[1]);
        if (answer === "Error") {
            screen.innerHTML = "Nice try my dude"; // Display error message
            divideZero = 1;
        } else {
            screen.innerHTML = Number.isInteger(answer) ? answer : answer.toFixed(8);
            data = [null, null, null];
            clikedEquals = 1;
        }
    });
}

function clickSeperator() {
    const screen = document.querySelector(".screen");
    const btn = document.querySelector("#dot");
    btn.addEventListener("click", () => {
        if (!screen.innerHTML.includes(".")) {
            screen.innerHTML += ".";
        }
    });
}

function clickBack() {
    const screen = document.querySelector(".screen");
    const btn = document.querySelector("#back");
    btn.addEventListener("click", () => {
        // Convert innerHTML to a number
        const currentNumber = parseFloat(screen.innerHTML);
        
        if (Number.isInteger(currentNumber)) {
            // If the number is an integer, perform backspace
            screen.innerHTML = screen.innerHTML.slice(0, -1);
        } else {
            // If the number is not an integer, clear the screen
            screen.innerHTML = "";
            divideZero = 1;
        }
    });
}


function clear() {
    const screen = document.querySelector(".screen");
    const btn = document.querySelector("#clear");
    btn.addEventListener("click", () => {
        screen.innerHTML = "";
        data = [null, null, null];
        clikedEquals = 0;
        divideZero = 0;
    });
}

function init() {
    document.querySelector("#one").addEventListener("click", () => clickNumber("1"));
    document.querySelector("#two").addEventListener("click", () => clickNumber("2"));
    document.querySelector("#three").addEventListener("click", () => clickNumber("3"));
    document.querySelector("#four").addEventListener("click", () => clickNumber("4"));
    document.querySelector("#five").addEventListener("click", () => clickNumber("5"));
    document.querySelector("#six").addEventListener("click", () => clickNumber("6"));
    document.querySelector("#seven").addEventListener("click", () => clickNumber("7"));
    document.querySelector("#eight").addEventListener("click", () => clickNumber("8"));
    document.querySelector("#nine").addEventListener("click", () => clickNumber("9"));
    document.querySelector("#zero").addEventListener("click", () => clickNumber("0"));

    clickPlus();
    clickMinus();
    clickMultiply();
    clickDivide();
    clickEquals();
    clickSeperator();
    clickBack();
    clear();
}

init();
