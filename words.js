const text1 = "Need To Transfer?";
const text2 = "Build Your Ed Plan!";
const typingSpeed = 50; // in milliseconds per character

let textElement = document.getElementById("typing-text");
let currentText = text1;
let currentIndex = 0;
let intervalId = null;

function startTyping() {
  intervalId = setInterval(typeLetter, typingSpeed);
}

function typeLetter() {
  textElement.textContent = currentText.slice(0, currentIndex + 1);
  currentIndex++;
  if (currentIndex >= currentText.length) {
    clearInterval(intervalId);
    setTimeout(changeText, 6000);
  }
}

function changeText() {
  currentIndex = 0;
  currentText = currentText === text1 ? text2 : text1;
  startTyping();
}

startTyping();


