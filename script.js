// optional – empty for stability
console.log("Portfolio Loaded");
const texts = [
  "Creative Developerr",
  "Designerr",
  "Entrepreneurr"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

const element = document.getElementById("hero-typing");

function typeEffect() {
  currentText = texts[index];

  if (isDeleting) {
    element.textContent = currentText.substring(0, charIndex--);
  } else {
    element.textContent = currentText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1200); // pause after typing
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % texts.length;
  }

  setTimeout(typeEffect, isDeleting ? 40 : 80);
}

typeEffect();








