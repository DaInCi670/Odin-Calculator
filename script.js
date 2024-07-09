"use strict";
const calcContainer = document.querySelector(".calc-container");
const currentOperation = document.querySelector(".calc-text");
const calcBtn = document.querySelector(".calc-btn");
const calcScreen = document.querySelector(".calc-screen");
const evaluatedOperation = document.querySelector(".calc-eval");
const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const evalBtn = document.querySelector(".eval");
const decimalBtn = document.querySelector(".decimal");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const experiment = document.querySelector(".experiment");
const allBtns = document.querySelectorAll(".btn");

const keyNums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const keyOperands = ["+", "-", "*", "/"];

let firstNum = "";
let secondNum = "";
let operator = "";
let isDisplayReset = false;
currentOperation.textContent = "0";

function add(a, b) {
  return +a + +b;
}

function subtract(a, b) {
  return +a - +b;
}

function multiply(a, b) {
  return +a * +b;
}

function divide(a, b) {
  return +a / +b;
}

function multiply(a, b) {
  return +a * +b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);

    case "÷":
    case "/":
      return divide(a, b);

    case "×":
    case "*":
      return multiply(a, b);
  }
}

function addNumber(num) {
  if (currentOperation.textContent.length > 16) {
    return alert("Number Too Long");
  }
  if (isDisplayReset || currentOperation.textContent === "0") {
    resetDisplay();
  }
  currentOperation.textContent += num;
}

function resetDisplay() {
  currentOperation.textContent = "";
  isDisplayReset = false;
}

function addOperand(oper) {
  if (operator !== "") evaluate();
  if (secondNum === "0" && operator === "÷") {
    isDisplayReset = true;
    return;
  }
  firstNum = currentOperation.textContent;
  operator = oper;
  evaluatedOperation.textContent = `${firstNum} ${operator}`;
  isDisplayReset = true;
}

function evaluate() {
  if (isDisplayReset || operator === "") return;
  secondNum = currentOperation.textContent;
  if (secondNum === "0" && operator === "÷") {
    return alert(`You cannot divide by zero`);
  }
  currentOperation.textContent = roundNumbers(
    operate(operator, firstNum, secondNum)
  );
  evaluatedOperation.textContent = `${firstNum} ${operator} ${secondNum} =`;
  operator = "";
}

function decimal() {
  if (isDisplayReset || currentOperation.textContent === "") {
    resetDisplay();
    currentOperation.textContent = "0";
  }
  if (currentOperation.textContent.includes(".")) return;
  if (currentOperation.textContent === "0") {
    return (currentOperation.textContent += ".");
  }
  currentOperation.textContent += ".";
}

function roundNumbers(number) {
  return Math.floor(number);
}

function clear() {
  firstNum = "";
  secondNum = "";
  operator = "";
  currentOperation.textContent = "0";
  evaluatedOperation.textContent = "";
}

function deleteNumber() {
  currentOperation.textContent = currentOperation.textContent.slice(0, -1);
}

function roundNumbers(number) {
  return Math.round(number * 1000) / 1000;
}

numberBtns.forEach((number) => {
  number.addEventListener("click", () => {
    addNumber(number.textContent);
  });
});

operatorBtns.forEach((operator) => {
  operator.addEventListener("click", () => {
    addOperand(operator.textContent);
  });
});

evalBtn.addEventListener("click", () => {
  evaluate();
});

decimalBtn.addEventListener("click", () => {
  decimal();
});

clearBtn.addEventListener("click", () => {
  clear();
});

deleteBtn.addEventListener("click", () => {
  deleteNumber();
});

document.addEventListener("keydown", (e) => {
  if (keyNums.includes(e.key)) {
    addNumber(e.key);
  }
  if (keyOperands.includes(e.key)) {
    addOperand(e.key);
  }
  if (e.key === decimalBtn) {
    decimal();
  }
  if (evalBtn === e.key) {
    evaluate();
  }
  if (e.key === "c" || e.key === "C") {
    clear();
  }
  if (e.key === "Backspace") {
    deleteNumber();
  }
});
