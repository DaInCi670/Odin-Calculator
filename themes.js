const themeSelect = document.querySelector("#mode");
const light = document.querySelector(".light");


selector();

function selector() {
  if (themeSelect.classList[1]) {
    themeSelect.textContent = "";
    themeSelect.appendChild(light);
  } else {
    themeSelect.textContent = "";
    themeSelect.textContent = "🌙";
  }
}

themeSelect.addEventListener("click", () => {
  calcContainer.classList.toggle("dark-theme-calc-container");
  calcBtn.classList.toggle("dark-theme-btn");
  caldBtns.forEach((element) => {
    element.classList.toggle("calc-btns");
  });
  calcScreen.classList.toggle("calc-display-box");
  themeSelect.classList.toggle("theme");
  selector();
});