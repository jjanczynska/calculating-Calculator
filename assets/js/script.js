// declaring variables for easier operations
let result = document.getElementById("result");
let buttons = document.getElementsByClassName("buttons")[0];

// adding "click" event listeners to clicked buttons
buttons.addEventListener("click", (function(e) {
    let target = e.target;

// function that inputs pressed number button into the calculator screen
    if(target.classList.contains("number")) {
        result.value += target.value;
    }

// function that inputs pressed operator button into the calculator screen
if(target.classList.contains("operator")) {
    result.value += "" + target.value;
}
// function deleting the calculator screen with C button
if(target.classList.contains("clear")) {
    result.value = "";
}
// function inputting equal button into calculator
if(target.classList.contains("equal")) {
    result.value = calculate(result.value);
}
// function inputting equal button into calculator
if(target.classList.contains("equal")) {
    result.value = calculate(result.value);
}
    }
));

// declearing function to calculate my inputs by making buttons into a string
function calculate(str) {
    let arr = str.split(" ");
    let total = 0;
    let operator = null;

// If a button in my array is a + then operator is a + and so on through all the operators("-", "/", "x") 
    for (let i = 0; i < arr.lenght; i++) {
        if (arr[i] ==="+") {
            operator = "+";
        } else if (arr[i] ==="-") { 
            operator = "-";
        } else if (arr[i] ==="x") {
            operator = "*";
        } else if (arr[i] ==="&divide") {
            operator = "/";
        } else {
            let num = parseInt(arr[i]);

  // Performing calculations and returning the result
            if (!isNaN(num)) {
                if (operator === "+") {
                    total += num;
                } else if (operator === "-") {
                    total += num;
                } else if (operator === "*") {
                    total *= num;
                } else if (operator === "/") {
                    total /= num;
                } else {
                    total = num;
                }
            }
        }
    }
    return total;
}

/**
 * 8 js hint warnings of:
 * Eight warnings
19	'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).- should I ignore?
 */