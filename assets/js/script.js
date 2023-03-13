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
let operator = "";

// adding event listeners with 'click'
one.addEventListener("click",() => {
    if(display.innerText === "0") {
        display.innerText = 1;
    } else {
        display.innerText += 1;
    }
})

two.addEventListener("click",() => {
    if(display.innerText === "0") {
        display.innerText = 2;
    } else {
        display.innerText += 2;
    }
})

three.addEventListener("click", () => {
    if(display.innerText === "0") {
        display.innerText = 3;
    } else {
        display.innerText += 3;
    }
}) 

four.addEventListener("click", () => {
    if(display.innerText === "0") {
        display.innerText = 4;
    } else {
        display.innerText += 4;
    }
})

five.addEventListener("click", () => {
    if(display.innerText === "0") {
        display.innerText = 5;
    } else {
        display.innerText += 5;
    }
})

six.addEventListener("click", () => {
    if(display.innerText === "0") {
        display.innerText = 6;
    } else {
        display.innerText +=6;
    }
})

seven.addEventListener("click", () => {
    if(display.innerText ==="0") {
        display.innerText = 7;
    } else {
        display.innerText += 7;
    }
})

eight.addEventListener("click", () => {
    if(display.innerText === "0") {
        display.innerText = 8;
    } else {
        display.innerText +=8;
    }
})

nine.addEventListener("click", () => {
    if(display.innerText === "0") {
        display.innerText = 9;
    } else {
        display.innerText +=9;
    }
})

