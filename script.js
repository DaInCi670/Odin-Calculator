"use strict";
const calcContainer = document.querySelector(".calc-container");
const calcText = document.querySelector(".calc-text");
const calcBtn = document.querySelector(".calc-btn");

const caldBtns = document.querySelectorAll(".btn");
const calcScreen = document.querySelector(".calc-screen");

const evalScreen = document.querySelector(".calc-eval");
const numbers = document.querySelectorAll(".num");

let firstNum = "";
let operand = "";
let secondNum = "";
let origin = 0;
