function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorButton = document.querySelector("button.change-color");

const background = document.querySelector("body");

const colorSpan = document.querySelector("span.color");

colorButton.addEventListener("click", (e) => {
  let color = getRandomHexColor();
  background.style.backgroundColor = color;
  colorSpan.textContent = color;
})