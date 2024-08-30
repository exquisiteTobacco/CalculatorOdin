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