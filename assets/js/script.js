// declaring variables for easier operations
let result = document.getElementById("result");
let buttons = document.getElementsByClassName("buttons");

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
if(target.classList.conatins("clear")) {
    result.value = " ";
}
}))