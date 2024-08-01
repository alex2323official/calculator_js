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
        e.target.id != "calculator__result"
    )
    {
        tempArray.push(e.target.innerText);
        console.log(tempArray);
    } else if(
        e.target.innerText == "+" ||
        e.target.innerText == "-" ||
        e.target.innerText == "x" ||
        e.target.innerText == "÷"
    )
    {
        // Create first number until user setup operator
        console.log("time for operator");
        numberFirst = tempArray.reduce((accumulator, currentValue) => {
            return accumulator =+ currentValue;
        });
        refreshDisplay()
        tempArray = [];
        isNumberFirstSetup = true;


        //  Setup operator
        operator = e.target.innerText;
        refreshDisplay()
        tempArray = [];
        isOperatorSetup = true;
    }
        
    // Operator

        
    // Second Number
  
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



