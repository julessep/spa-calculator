// 1. Create an HTML file that has two input fields to accept the two numbers to perform operations on.
// 2. Create 4 buttons to perform each of the basic mathematical functions (add, subtract, multiply, divide).
// 3. In your JavaScript, put an event listener on each of the buttons.
// 4. Copy the code below an implement a basic calculator.
// 5. When the user performs one of the operations, output the result to another DOM element of your choice.
let number1 = document.getElementById("firstNum");
let number2 = document.getElementById("secondNum");

let multButton = document.getElementById("multiply");
let addButton = document.getElementById("add")
let subButton = document.getElementById("subtract")
let divButton = document.getElementById("divide")

multButton.addEventListener("click", function(){
  var num1 = parseInt(number1.value);
  var num2 = parseInt(number2.value);
  doMath(toMultiplication, num1, num2)
})

addButton.addEventListener("click", function(){
  var num1 = parseInt(number1.value);
  var num2 = parseInt(number2.value);
  doMath(toAddition, num1, num2)
})

subButton.addEventListener("click", function(){
  var num1 = parseInt(number1.value);
  var num2 = parseInt(number2.value);
  doMath(toSubtraction, num1, num2)
})

divButton.addEventListener("click", function(){
  var num1 = parseInt(number1.value);
  var num2 = parseInt(number2.value);
  doMath(toDivision, num1, num2)
})


/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function toMultiplication(num1, num2){
  let product = num1 * num2;
  output(product)
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function toAddition(num1, num2){
  let sum = num1 + num2
  output(sum)
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function toSubtraction(num1, num2){
 let difference = num1 - num2
 output(difference)
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function toDivision(num1, num2){
  let quotient = num1 / num2
  output(quotient)
}

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

 function doMath(aFunction, num1, num2){
  aFunction(num1, num2)
 };

function output (value) {
 document.getElementById("result").value = value
}






