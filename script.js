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
let divideZero = 0;
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
   
    num.addEventListener("click", () => { 
        if(clikedEquals == 1 || divideZero == 1)
            {
                screen.innerHTML = "";
                clikedEquals = 0;
                divideZero = 0;
            }
        screen.innerHTML += "1"; });
}

function clickTwo() {
    const screen = document.querySelector(".screen");
    const num = document.querySelector("#two");
    num.addEventListener("click", () => { 
        if(clikedEquals == 1 || divideZero == 1)
            {
                screen.innerHTML = "";
                clikedEquals = 0;
                divideZero = 0;
            }
        screen.innerHTML += "2"; });
}

function clickThree() {
    const screen = document.querySelector(".screen");
    const num = document.querySelector("#three");
    num.addEventListener("click", () => { 
        if(clikedEquals == 1 || divideZero == 1)
            {
                screen.innerHTML = "";
                clikedEquals = 0;
                divideZero = 0;
            }
        screen.innerHTML += "3"; });
}

function clickFour() {
    const screen = document.querySelector(".screen");
    const num = document.querySelector("#four");
    num.addEventListener("click", () => { 
        if(clikedEquals == 1 || divideZero == 1)
            {
                screen.innerHTML = "";
                clikedEquals = 0;
                divideZero = 0;
            }
        screen.innerHTML += "4"; });
}

function clickFive() {
    const screen = document.querySelector(".screen");
    const num = document.querySelector("#five");
    num.addEventListener("click", () => { 
        if(clikedEquals == 1 || divideZero == 1)
            {
                screen.innerHTML = "";
                clikedEquals = 0;
                divideZero = 0;
            }
        screen.innerHTML += "5"; });
}

function clickSix() {
    const screen = document.querySelector(".screen");
    const num = document.querySelector("#six");
    num.addEventListener("click", () => { 
        if(clikedEquals == 1 || divideZero == 1)
            {
                screen.innerHTML = "";
                clikedEquals = 0;
                divideZero = 0;
            }
        screen.innerHTML += "6"; });
}

function clickSeven() {
    const screen = document.querySelector(".screen");
    const num = document.querySelector("#seven");
    num.addEventListener("click", () => { 
        if(clikedEquals == 1 || divideZero == 1)
            {
                screen.innerHTML = "";
                clikedEquals = 0;
                divideZero = 0;
            }
        screen.innerHTML += "7"; });
}

function clickEight() {
    const screen = document.querySelector(".screen");
    const num = document.querySelector("#eight");
    num.addEventListener("click", () => { 
        if(clikedEquals == 1 || divideZero == 1)
            {
                screen.innerHTML = "";
                clikedEquals = 0;
                divideZero = 0;
            }
        screen.innerHTML += "8"; });
}

function clickNine() {
    const screen = document.querySelector(".screen");
    const num = document.querySelector("#nine");
    num.addEventListener("click", () => { 
        if(clikedEquals == 1 || divideZero == 1)
            {
                screen.innerHTML = "";
                clikedEquals = 0;
                divideZero = 0;
            }
        screen.innerHTML += "9"; });
}
function clickZero() {
    const screen = document.querySelector(".screen");
    const num = document.querySelector("#zero");
    num.addEventListener("click", () => { 
        if(clikedEquals == 1 || divideZero == 1)
            {
                screen.innerHTML = "";
                clikedEquals = 0;
                divideZero = 0;
            }
        screen.innerHTML += "0"; });
}


let data = [null, null , null];
function clickPlus() {
    const screen = document.querySelector(".screen");
    const btn = document.querySelector("#plus")
    let answer = 0;
    btn.addEventListener("click",() => {
        if (screen.innerHTML.trim() === "") {
            return; // Do nothing if the screen is empty
        }
        
        if(data[0] != null)
            {
                answer = operate(data[0],parseFloat(screen.innerHTML),"+")
                screen.innerHTML = answer.toFixed(8);
                data[0] = answer;
            }
            else{
                data[0] = parseFloat(screen.innerHTML);
                data[1] = "+"
                screen.innerHTML ="";
            }
    })
   
}
function clickMinus() {
    const screen = document.querySelector(".screen");
    const btn = document.querySelector("#minus");
    let answer = 0;
    btn.addEventListener("click", () => {
        if (screen.innerHTML.trim() === "") {
            return; // Do nothing if the screen is empty
        }

        if (data[0] != null) {
            answer = operate(data[0], parseFloat(screen.innerHTML), "-");
            screen.innerHTML = answer.toFixed(8);
            data[0] = answer;
        } else {
            data[0] = parseFloat(screen.innerHTML);
            data[1] = "-";
            screen.innerHTML = "";
        }
    });
}
function clickMultiply() {
    const screen = document.querySelector(".screen");
    const btn = document.querySelector("#multiply");
    let answer = 0;
    btn.addEventListener("click", () => {
        if (screen.innerHTML.trim() === "") {
            return; // Do nothing if the screen is empty
        }

        if (data[0] != null) {
            answer = operate(data[0], parseFloat(screen.innerHTML), "*");
            screen.innerHTML = answer.toFixed(8);
            data[0] = answer;
        } else {
            data[0] = parseFloat(screen.innerHTML);
            data[1] = "*";
            screen.innerHTML = "";
        }
    });
}
function clickDivide() {
    const screen = document.querySelector(".screen");
    const btn = document.querySelector("#divide");
    let answer = 0;
    btn.addEventListener("click", () => {
        // Step 1: Check if the screen is empty
        if (screen.innerHTML.trim() === "") {
            return; // Do nothing if the screen is empty
        }
    
        // Step 2: Check if there's an existing value in data[0]
        if (data[0] != null) {
            // Convert current screen value to a number
            const currentNumber = parseFloat(screen.innerHTML);
    
            // Step 3: Handle division by zero
            if (currentNumber == 0 ) {
                screen.innerHTML = "nice try"; // Display an error message
                data[0] = null; // Reset stored value
                divideZero = 1;
                return;
            }
    
            // Perform the division operation
            answer = operate(data[0], currentNumber, "/");
            screen.innerHTML = answer.toFixed(8); // Display the result
            data[0] = answer; // Store the result for further operations
        } else {
            // No prior value, so store the current screen value in data[0]
            data[0] = parseFloat(screen.innerHTML);
            data[1] = "/"; // Store the division operator
            screen.innerHTML = ""; // Clear the screen for the next input
        }
    });
    
}

// for clearing the screen after clicking euqals on subsequent number clicks
let clikedEquals = 0;
function clickEquals() {
    const screen = document.querySelector(".screen");
    const btn = document.querySelector("#equals")
    let answer = 0;
    btn.addEventListener("click",() => { 
        if(screen.innerHTML === "")
        {

        }
        else if(data[1] == "+")
        {
            data[2] = parseFloat(screen.innerHTML);
            answer = operate(data[0],data[2],data[1])
                screen.innerHTML = answer.toFixed(8);
                data = [];
        }
        else if(data[1] == "-")
            {
                data[2] = parseFloat(screen.innerHTML);
                
                answer = operate(data[0],data[2],data[1])
                    screen.innerHTML = answer.toFixed(8);
                    data = [];
            }
         else if (data[1] === "*") {
            data[2] = parseFloat(screen.innerHTML);
            answer = operate(data[0], data[2], data[1]);
            screen.innerHTML = answer.toFixed(8);
            data = []; 
        } else if (data[1] === "/") {
            data[2] = parseFloat(screen.innerHTML);
            if (data[2] == 0 ) {
                screen.innerHTML = "nice try"; // Display an error message
                data[0] = null; // Reset stored value
                divideZero = 1;
                return;
            }
            answer = operate(data[0], data[2], data[1]);
            screen.innerHTML = answer.toFixed(8);
            data = []; 
        }
        clikedEquals = 1;
    })
}
function clickSeperator(){
    const screen = document.querySelector(".screen");
    const btn = document.querySelector("#dot")
    btn.addEventListener("click", () =>{
        if (screen.innerHTML.trim() === "") {
            return; // Do nothing if the screen is empty
        }
        screen.innerHTML += "."

    })
}
function clickBack() {
    const screen = document.querySelector(".screen");
    const btn = document.querySelector("#back");
    
    btn.addEventListener("click", () => {
        if (screen.innerHTML.length > 0) {
            // Remove the last character from the screen
            screen.innerHTML = screen.innerHTML.slice(0, -1);
        }
    });
}

function clear(){
    const screen = document.querySelector(".screen");
    const btn = document.querySelector("#clear")
    btn.addEventListener("click",() => {
        screen.innerHTML = " ";
        data = [];
    })
}
clickZero()
clickOne();
clickTwo();
clickThree();
clickFour();
clickFive();
clickSix();
clickSeven();
clickEight();
clickNine();
clickPlus();
clickMinus();
clickMultiply();
clickDivide();
clickEquals();
clickSeperator()
clickBack()
clear();