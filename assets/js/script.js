//declaring display and button id as variables for easier number and operations manipulation

//screen display
let display = document.getElementById("display");

//operator buttons
const clear = document.getElementById("clear");
const delOne = document.getElementById("delOne");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const minus = document.getElementById("minus");
const plus = document.getElementById("add");
const equals = document.getElementById("equal");

// number buttons
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

//declaring variables for functions used forward
let lastNum = 0;
let operator = " ";

/* adding event listeners with 'click'
setting a maximun limit of 9 on number input in the display screen*/
one.addEventListener("click", () => {
    if (display.innerText.length < 9) {
        if (display.innerText === "0") {
            display.innerText = 1;
        } else {
            display.innerText += 1;
        }
    }
});

two.addEventListener("click", () => {
    if (display.innerText.length < 9) {
        if (display.innerText === "0") {
            display.innerText = 2;
        } else {
            display.innerText += 2;
        }
    }
});

three.addEventListener("click", () => {
    if (display.innerText.length < 9) {
        if (display.innerText === "0") {
            display.innerText = 3;
        } else {
            display.innerText += 3;
        }
    }
});

four.addEventListener("click", () => {
    if (display.innerText.length < 9) {
        if (display.innerText === "0") {
            display.innerText = 4;
        } else {
            display.innerText += 4;
        }
    }
});

five.addEventListener("click", () => {
    if (display.innerText.length < 9) {
        if (display.innerText === "0") {
            display.innerText = 5;
        } else {
            display.innerText += 5;
        }
    }
});

six.addEventListener("click", () => {
    if (display.innerText.length < 9) {
        if (display.innerText === "0") {
            display.innerText = 6;
        } else {
            display.innerText += 6;
        }
    }
});

seven.addEventListener("click", () => {
    if (display.innerText.length < 9) {
        if (display.innerText === "0") {
            display.innerText = 7;
        } else {
            display.innerText += 7;
        }
    }
});

eight.addEventListener("click", () => {
    if (display.innerText.length < 9) {
        if (display.innerText === "0") {
            display.innerText = 8;
        } else {
            display.innerText += 8;
        }
    }
});

nine.addEventListener("click", () => {
    if (display.innerText.length < 9) {
        if (display.innerText === "0") {
            display.innerText = 9;
        } else {
            display.innerText += 9;
        }
    }
});

zero.addEventListener("click", () => {
    if (display.innerText.length < 9) {
        if (display.innerText === "0") {
            display.innerText = 0;
        } else {
            display.innerText += 0;
        }
    }
});

//Event listeners for clear and delete
clear.addEventListener("click", () => {
    display.innerText = 0;
});

delOne.addEventListener("click", () => {
    let str = display.innerText;
    display.innerText = str.substring(0, str.length - 1);
    if (display.innerText == "") {
        display.innerText = 0;
    }
});

//adding event listeners to operator buttons( +, -, /, x)
divide.addEventListener("click", () => {
    lastNum = display.innerText;
    display.innerText = 0;
    operator = "divide";
});

multiply.addEventListener("click", () => {
    lastNum = display.innerText;
    display.innerText = 0;
    operator = "multiply";
});

minus.addEventListener("click", () => {
    lastNum = display.innerText;
    display.innerText = 0;
    operator = "minus";
});

plus.addEventListener("click", () => {
    lastNum = display.innerText;
    display.innerText = 0;
    operator = "plus";
});
/* Finall function setting four cases for four operators
for multiplication- setting limit of numbers being displayed in the calculator 
for division- setting a limit on numbers displayed as a fraction to 2 after a '.' 
*/
equals.addEventListener("click", () => {
    let result = 0;
    switch (operator) {
        case "plus":
            result = parseInt(lastNum) + parseInt(display.innerText);
            break;
        case "minus":
            result = parseInt(lastNum) - parseInt(display.innerText);
            break;
        case "multiply":
            result = parseInt(lastNum) * parseInt(display.innerText);
            if (result.toString().length > 10) {
                result = "Error too big";
            }
            break;
        case "divide":
            result = parseInt(lastNum) / parseInt(display.innerText);
            if (result.toString().length > 10) {
                result = result.toFixed(2);
            }
            break;
    }
    display.innerText = result;
});