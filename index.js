// use DOM queries to get access to the DOM elements that you need
let digit = document.querySelectorAll(".digit");
let operations = document.querySelectorAll(".operation");
let equals = document.getElementById("btnEqual");
let display = document.getElementById("display");
let clear = document.getElementById('btnClear');

// link the displayDigit function to the click event of the digit buttons
for (buttonD of digit) {
    buttonD.addEventListener("click", displayDigit);
}
//link the operationClicked function to the click event of the operation buttons
for (buttonO of operations) {
    buttonO.addEventListener("click", operationClicked);
}
equals.addEventListener("click", equalClicked);

// Define the displayDigit function to be added as an event listener to the buttons representing the
// digits so that when the button is clicked the digit it represents would be concatenated
// to the contents of the display label
function displayDigit(event) {
   display.innerHTML += (event.target.innerText);
}
// set the click event of the clear button to an anonymous function that clears the text of the display label

clear.addEventListener("click", function(){
    display.innerHTML="";
});

let firstValue, secondValue, operation;

//Define the operationClicked function to handle the click event of the operation buttons
//The function body should include the following steps:
function operationClicked(event) {
    //Convert the value in the display label into a number and store it in the variable firstValue
    firstValue = Number(display.innerHTML);
    //Store the text of the clicked button in the variable 'operation' for latter reference
    operation = event.target.innerHTML;
    //Clear the display label to allow the user to enter the second value
    display.innerHTML = "";
}


//Define the equalClicked function to handlet the click event of the equal button with the following steps

function equalClicked() {
    //Convert the value in the display label to a number and store it in the variable secondValue
    secondValue = Number(display.innerHTML);
    // based on the value stored in the operation apply the corresponding operator on the first and second values
    // and display the result in the display label.
    if (operation == "+") {
        final = (firstValue + secondValue);
    } if (operation == "-") {
        final = (firstValue - secondValue);
    } if (operation == "*") {
        final = (firstValue * secondValue);
    } if (operation == "/") {
        final = (firstValue / secondValue);
    }
    display.innerHTML = final;
}
