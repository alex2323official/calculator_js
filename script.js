//  Setup basic variables
let calculator = document.querySelector(".calculator");
let result = document.querySelector("#calculator__result");

let numberFirst = "";
let numberSecond = "";
let operator = "";
let numberThird = "";
let display = `${numberFirst} ${operator} ${numberSecond}`;
result.innerText = display;

// Refresh display
function refreshDisplay() {
    display = `${numberFirst} ${operator} ${numberSecond}`;
    result.innerText = display;
}

// Setup 1 number + operator + 2 number
let isNumberFirstSetup = false;
let isNumberSecondSetup = false;
let isOperatorSetup = false;
let isResultSetup = false;
let tempArray = [];


calculator.addEventListener("click", (e) => {

    // setup old numer
    if(numberThird != "") {
        numberFirst = numberThird;
        numberSecond = "";
        operator = "";
        numberThird = "";
        isNumberFirstSetup = true;
        isOperatorSetup = false;
        isNumberSecondSetup = false;
        isResultSetup = false;
        tempArray = [];
        refreshDisplay()
    }


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
        // Tell JS that firstNumber is setup and do cleanup
        tempArray = [];

        isNumberFirstSetup = true;

        //  Setup operator
        operator = e.target.innerText;
        refreshDisplay()
        tempArray = [];
        isOperatorSetup = true;

        // Setup 2 number if 1number and operator is setup
    } else if(isNumberFirstSetup == true && isOperatorSetup == true && isNumberSecondSetup == false && e.target.innerText != "=")
    {
        // Second number
        tempArray.push(e.target.innerText);
        numberSecond = tempArray.reduce((accumulator, currentValue) => {
            return accumulator += currentValue;
        });
        refreshDisplay()
    }

    // Result!
    if(e.target.innerText == "=" && isResultSetup == false) {
        // Tell JS that secondNumber is setup and do cleanup
        tempArray = [];
        isNumberSecondSetup = true;

        // Parse numbers
        numberFirst = Number(numberFirst);
        numberSecond = Number(numberSecond);

        // OPERATIONS
       if(operator == "+") {
            numberThird = numberFirst + numberSecond;
            display = numberFirst + numberSecond;
            result.innerText = display;
            isResultSetup = true;
       }

       if(operator == "-") {
            numberThird = numberFirst - numberSecond;
            display = numberFirst - numberSecond;
            result.innerText = display;
            isResultSetup = true;
        }

        if(operator == "x") {
            numberThird = numberFirst * numberSecond;
            display = numberFirst * numberSecond;
            result.innerText = display;
            isResultSetup = true;
        }

        if(operator == "÷") {
            numberThird = numberFirst / numberSecond;
            display = numberFirst / numberSecond;
            result.innerText = display;
            isResultSetup = true;
        }
    }

    // Result of new itteration
    if(e.target.innerText == "=" && isResultSetup == true) {
        // Tell JS that secondNumber is setup and do cleanup
        tempArray = [];
        numberFirst = numberThird;
        isNumberFirstSetup = true;
    }
        
  
    // Clear
    if(e.target.innerText == "CLEAR") {
        numberFirst = "";
        numberSecond = "";
        operator = "";
        tempArray = [];
        refreshDisplay();
        isNumberFirstSetup = false;
        isNumberSecondSetup = false;
        isOperatorSetup = false;
    }

   
    
})



