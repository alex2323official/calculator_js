//  Setup basic variables
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
let tempArray = [];

calculator.addEventListener("click", (e) => {
    // First Number
    if(
        e.target.innerText != "+" &&
        e.target.innerText != "-" &&
        e.target.innerText != "x" &&
        e.target.innerText != "÷" &&
        e.target.innerText != "=" &&
        e.target.innerText != "CLEAR" &&
        e.target.id != "calculator__result" &&
        !isNumberFirstSetup &&
        !isOperatorSetup
    )
    {
        tempArray.push(e.target.innerText);
        numberFirst = tempArray.reduce((accumulator, currentValue) => {
            return accumulator += currentValue;
        });
        refreshDisplay()
    } else if(
        e.target.innerText == "+" ||
        e.target.innerText == "-" ||
        e.target.innerText == "x" ||
        e.target.innerText == "÷"
    )
    {
        // Create first number until user setup operator
        // Tell JS that firstNumber is setup and co cleanup
        console.log("time for operator");
        tempArray = [];
        isNumberFirstSetup = true;

        //  Setup operator
        operator = e.target.innerText;
        refreshDisplay()
        tempArray = [];
        isOperatorSetup = true;

        // Setup 2 number if 1number and operator is setup
    } else if(isNumberFirstSetup && isOperatorSetup)
    {
        tempArray.push(e.target.innerText);
        numberSecond = tempArray.reduce((accumulator, currentValue) => {
            return accumulator += currentValue;
        });
        refreshDisplay()
    } else if(e.target.innerText == "=") {
        
    }
        
  
    // Clear
    if(e.target.innerText == "CLEAR") {
        numberFirst = 0;
        numberSecond = 0;
        operator = "";
        tempArray = [];
        refreshDisplay();
        isNumberFirstSetup = false;
        isNumberSecondSetup = false;
        isOperatorSetup = false;
    }

    // RESULT
    if(e.target.innerText == "=" && isNumberFirstSetup == true && isNumberSecondSetup == true && isOperatorSetup == true) {
        // Parse numbers
        numberFirst = Number(numberFirst);
        numberSecond = Number(numberSecond);

        // OPERATIONS
       if(operator == "+") {
            display = numberFirst + numberSecond;
            result.innerText = display;
       }

       if(operator == "-") {
            display = numberFirst - numberSecond;
            result.innerText = display;
        }

        if(operator == "x") {
            display = numberFirst * numberSecond;
            result.innerText = display;
        }

        if(operator == "÷") {
            display = numberFirst / numberSecond;
            result.innerText = display;
        }
    }
    
})



