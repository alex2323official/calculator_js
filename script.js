// Your calculator is going to contain functions for all of the basic math operators you typically find on calculators, so start by creating functions for the following items and testing them in your browser’s console.

// 1. Operators
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
  return a / b;
}

// 2. Setup basic variables
let calculator = document.querySelector(".calculator");
let result = document.querySelector("#calculator__result");

let numberFirst = 0;
let numberSecond = 0;
let operator = "";
let display = `${numberFirst} ${operator} ${numberSecond}`;
result.innerText = display;

// Refresh display
function refreshDisplay() {
    display = `${numberFirst} ${operator} ${numberSecond}`;
    result.innerText = display;
}

// Setup 1 number + operator + 2 number
isNumberFirstSetup = false;
isNumberSecondSetup = false;
isOperatorSetup = false;

calculator.addEventListener("click", (e) => {
    // First Number
    if(isNumberFirstSetup == false && isNumberSecondSetup == false && isOperatorSetup == false) {
        if(e.target.innerText != "+" && e.target.innerText != "-" && e.target.innerText != "x" && e.target.innerText != "÷") {
            numberFirst = e.target.innerText;
            refreshDisplay();
            isNumberFirstSetup = true;
        }
    // Operator
    } else if(isNumberFirstSetup == true && isNumberSecondSetup == false && isOperatorSetup == false ) {
        if(e.target.innerText == "+" || e.target.innerText == "-" || e.target.innerText == "x" || e.target.innerText == "÷") {
            operator = e.target.innerText;
            refreshDisplay();
            isOperatorSetup= true;
        }
        
    // Second Number
    } else if(isNumberFirstSetup == true && isNumberSecondSetup == false && isOperatorSetup == true) {
        if(e.target.innerText != "+" && e.target.innerText != "-" && e.target.innerText != "x" && e.target.innerText != "÷") {
            numberSecond = e.target.innerText;
            refreshDisplay();
            isNumberSecondSetup = true;
        }
    }
    // Clear
    if(e.target.innerText == "CLEAR") {
        numberFirst = 0;
        numberSecond = 0;
        operator = "";
        refreshDisplay();
        isNumberFirstSetup = false;
        isNumberSecondSetup = false;
        isOperatorSetup = false;
    }
    
})



