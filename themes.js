const themeSelect = document.querySelector("#mode");
const light = document.querySelector(".light");
const dark = document.querySelector(".dark-mode");
const outerCalcContainer = document.querySelector(".container");
const footerText = document.querySelector("footer");

selector();

function selector() {
  if (themeSelect.classList[1]) {
    themeSelect.textContent = "";
    themeSelect.appendChild(light);
  } else {
    themeSelect.textContent = "";
    themeSelect.appendChild(dark);
  }
}

themeSelect.addEventListener("click", () => {
  outerCalcContainer.classList.toggle("outer-container-dark");
  calcContainer.classList.toggle("dark-theme-calc-container");
  footerText.classList.toggle("footer-dark");
  calcScreen.classList.toggle("calc-screen-dark");
  calcScreen.classList.toggle("dark-theme-btn");
  allBtns.forEach((element) => {
    element.classList.toggle("calc-btns");
  });
  operatorBtns.forEach((element) => {
    element.classList.toggle("operator-btns");
  });
  deleteBtn.classList.toggle("delete-btn");
  clearBtn.classList.toggle("clear-btn");
  decimalBtn.classList.toggle("decimal-btn");
  evalBtn.classList.toggle("eq-btn");
  currentOperation.classList.toggle("calc-display-box");
  themeSelect.classList.toggle("theme");
  selector();
});
