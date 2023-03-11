// declaring variables for easier operations
let result = document.getElementById("result");
let buttons = document.getElementsByClassName("buttons")[0];

// adding "click" event listeners to clicked buttons

buttons.addEventListener("click", (function(e) {
    let target = e.target;
// function that inputs pressed number button into the calculator screen
    if(target.classList.contains(number)) {
        result.value += target.value;
    }
// function that inputs pressed operator button into the calculator screen
if(target.classList.contains(operator)) {
    result.value += " " + target.value;
}
// function deleting the calculator screen with C button
if(target.classList.contains("clear")) {
    result.value = " ";
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