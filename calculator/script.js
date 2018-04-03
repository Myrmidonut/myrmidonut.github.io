let displayValue = "";
let operator = "";
let operand1;
let operand2;
let lastOperator = "";
let originalOperator;
let divisionZero = false;

let display = document.getElementById("display");
let history = document.getElementById("history");
let addButton = document.getElementById("addButton");
let subtractButton = document.getElementById("subtractButton");
let multiplyButton = document.getElementById("multiplyButton");
let divideButton = document.getElementById("divideButton");
let floatButton = document.getElementById("floatButton");
let equalButton = document.getElementById("equalButton");
let clearButton = document.getElementById("clearButton");
let deleteButton = document.getElementById("deleteButton");
let negativeButton = document.getElementById("negativeButton");

addButton.addEventListener("click", addOperation);
subtractButton.addEventListener("click", subtractOperation);
multiplyButton.addEventListener("click", multiplyOperation);
divideButton.addEventListener("click", divideOperation);
floatButton.addEventListener("click", floatOperation)
equalButton.addEventListener("click", equalOperation);
clearButton.addEventListener("click", clearOperation);
deleteButton.addEventListener("click", deleteOperation);
negativeButton.addEventListener("click", negativeOperation);

function add(first, second) {
  return first + second;
}

function subtract(first, second) {
  return first - second;
}

function multiply(first, second) {
  return first * second;
}

function divide(first, second) {
  return first/second;
}

function operate(operator, operand1, operand2) {
  if (operator === "add") {
    return add(operand1, operand2);
  }
  if (operator === "subtract") {
    return subtract(operand1, operand2);
  }
  if (operator === "multiply") {
    return multiply(operand1, operand2);
  }
  if (operator === "divide") {
    return divide(operand1, operand2);
  }
}

function storeFirstOperand() {
  operand1 = Number(displayValue);
  displayValue = "";
  result();
}

function addOperation() {
  doubleEqual();
  operator = "add";
  storeFirstOperand();
  originalOperator = " + ";
  if (history.textContent === "") {
    history.textContent += operand1 + " + ";
  } else if (lastOperator === "equal") {
    history.textContent += " | + ";
  }
  else {
    history.textContent += " || " + operand1 + " + ";
  }
  lastOperator = "add";
}

function subtractOperation() {
  doubleEqual();
  operator = "subtract";
  storeFirstOperand();
  originalOperator = " - ";
  if (history.textContent === "") {
    history.textContent += operand1 + " - ";
  } else if (lastOperator === "equal") {
    history.textContent += " | - ";
  }
  else {
    history.textContent += " || " + operand1 + " - ";
  }
  lastOperator = "subtract";
}

function multiplyOperation() {
  doubleEqual();
  operator = "multiply";
  storeFirstOperand();
  originalOperator = " x ";
  if (history.textContent === "") {
    history.textContent += operand1 + " x ";
  } else if (lastOperator === "equal") {
    history.textContent += " | x ";
  }
  else {
    history.textContent += " || " + operand1 + " x ";
  }
  lastOperator = "multiply";
}

function divideOperation() {
  if (displayValue !== "") {
    doubleEqual();
    operator = "divide";
    storeFirstOperand();
    originalOperator = " : ";
    if (history.textContent === "") {
      history.textContent += operand1 + " : ";
    } else if (lastOperator === "equal") {
      history.textContent += " | : ";
    }
    else {
      history.textContent += " || " + operand1 + " : ";
    }
    lastOperator = "divide";
  }
}

function roundToSix() {
  displayValue = (Math.round(1000000*operate(operator, operand1, operand2)))/1000000;
}

function divisionByZero() {
  if (displayValue === Infinity || displayValue === -Infinity || isNaN(displayValue)) {
    divisionZero = true;
    displayValue = "0";
  }
}

function result() {
  display.textContent = displayValue;
}

function doubleEqual() {
  if (lastOperator !== "equal" && lastOperator !== "") {
    operand2 = Number(displayValue);
    roundToSix();
    result();
    history.textContent += operand2 + " = " + displayValue;
  }
}

function equalOperation() {
  if (lastOperator === "") {
  } else if (lastOperator === "equal") {
    operand1 = Number(displayValue);
    roundToSix();
    divisionByZero();
    result();
    history.textContent += originalOperator + " " + operand2 + " = " + displayValue;
    lastOperator = "equal";
  } else {
    operand2 = Number(displayValue);
    roundToSix();
    divisionByZero();
    if (divisionZero === false) {
      result();
      history.textContent += operand2 + " = " + displayValue;
      lastOperator = "equal";
    } else {
      result();
      history.textContent += operand2 + " = division by zero";
      lastOperator = "equal";
      divisionZero = false;
    }
  }
}

function clearOperation() {
  displayValue = "";
  operator = "";
  operand1 = undefined;
  operand2 = undefined;
  lastOperator = "";
  display.textContent = "";
  history.textContent = "";
}

function deleteOperation() {
  displayValue = String(displayValue);
  displayValue = displayValue.slice(0, displayValue.length-1);
  result();
}

function floatOperation() {
  if (displayValue.indexOf("\.") === -1) {
    displayValue += "\.";
    result();
  }
}

function negativeOperation() {
  displayValue = String(displayValue);
  if (displayValue.indexOf("\-") === -1) {
    displayValue = "\-" + displayValue;
  } else {
    displayValue = displayValue.slice(1);
  }
  result();
}

let digitButton = document.getElementsByClassName("digitButton");
for (let counter = 0; counter < digitButton.length; counter++) {
  digitButton[counter].addEventListener("click", function() {
    if (lastOperator === "equal") {
      displayValue = "";
      lastOperator = ""; // xxx
    }
    displayValue += this.textContent;
    result();
  })
}

window.addEventListener("keypress", function(event) {
  let key = event.charCode;
  if (event.keyCode === 13) {
    event.preventDefault();
  }
  switch (key) {
    case 48:
      displayValue += "0";
      result();
      break;
    case 49:
      displayValue += "1";
      result();
      break;
    case 50:
      displayValue += "2";
      result();
      break;
    case 51:
      displayValue += "3";
      result();
      break;
    case 52:
      displayValue += "4";
      result();
      break;
    case 53:
      displayValue += "5";
      result();
      break;
    case 54:
      displayValue += "6";
      result();
      break;
    case 55:
      displayValue += "7";
      result();
      break;
    case 56:
      displayValue += "8";
      result();
      break;
    case 57:
      displayValue += "9";
      result();
      break;
    case 43:
      addOperation();
      break;
    case 45:
      subtractOperation();
      break;
    case 42:
      multiplyOperation();
      break;
    case 47:
      divideOperation();
      break;
    case 13:
      equalOperation();
      break;
    case 100:
      deleteOperation();
      break;
    case 99:
      clearOperation();
      break;
    case 44:
      floatOperation();
      break;
    case 46:
      floatOperation();
      break;
  }
})