let firstNumber = +prompt("Oya enter your first number");
let operator = prompt("Oya enter one operator (type +, -, / or *):");
let secondNumber = +prompt("Oya enter your second number");

let finalResult = "";

if (firstNumber === "" || secondNumber === "") {
  alert("Refresh the page and input a number");
} else if (operator === "*") {
  finalResult = firstNumber * secondNumber;
} else if (operator === "+") {
  finalResult = firstNumber + secondNumber;
} else if (operator === "/") {
  finalResult = firstNumber / secondNumber;
} else if (operator === "-") {
  finalResult = firstNumber - secondNumber;
} else {
  alert("Oga check watin you day do abeg");
}

let result =
  firstNumber + " " + operator + " " + secondNumber + " = " + finalResult;

alert(result);
