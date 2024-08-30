//basic math functions for calculator.
function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
 return a / b;
}
// basic input for the calc
let numA = 0;
let numB = 0;
let operator = "";

// function for calling the math functions on certain numbers
function operate(a , b, operand){
    if(operand === "+")
    {
        return add(a,b)
    }
    else if (operand === "-")
    {
        return subtract(a,b)
    }
    else if (operand === "*")
    {
        return multiply(a,b)
    }
    else
    {
        return divide(a,b)
    }
}

function clickOne() {
    const screen = document.querySelector(".screen");
    const num = document.querySelector("#one");
    num.addEventListener("click", () => { screen.innerHTML += "1"; });
}

function clickTwo() {
    const screen = document.querySelector(".screen");
    const num = document.querySelector("#two");
    num.addEventListener("click", () => { screen.innerHTML += "2"; });
}

function clickThree() {
    const screen = document.querySelector(".screen");
    const num = document.querySelector("#three");
    num.addEventListener("click", () => { screen.innerHTML += "3"; });
}

function clickFour() {
    const screen = document.querySelector(".screen");
    const num = document.querySelector("#four");
    num.addEventListener("click", () => { screen.innerHTML += "4"; });
}

function clickFive() {
    const screen = document.querySelector(".screen");
    const num = document.querySelector("#five");
    num.addEventListener("click", () => { screen.innerHTML += "5"; });
}

function clickSix() {
    const screen = document.querySelector(".screen");
    const num = document.querySelector("#six");
    num.addEventListener("click", () => { screen.innerHTML += "6"; });
}

function clickSeven() {
    const screen = document.querySelector(".screen");
    const num = document.querySelector("#seven");
    num.addEventListener("click", () => { screen.innerHTML += "7"; });
}

function clickEight() {
    const screen = document.querySelector(".screen");
    const num = document.querySelector("#eight");
    num.addEventListener("click", () => { screen.innerHTML += "8"; });
}

function clickNine() {
    const screen = document.querySelector(".screen");
    const num = document.querySelector("#nine");
    num.addEventListener("click", () => { screen.innerHTML += "9"; });
}
clickOne();
clickTwo();
clickThree();
clickFour();
clickFive();
clickSix();
clickSeven();
clickEight();
clickNine();