import bot from "./assets/bot.svg";
import user from "./assets/user.svg";

const form = document.querySelector("form");
const chatContainer = document.querySelector("#chat_container");

let loadInterval;

function loader(element) {
  element.textContent = ""; //to ensure that loaded is empty at the start

  loadInterval = setInterval(() => {
    element.textContent += "."; // this will generate 3 dots one by one with 300ml sec interval

    if (element.textContent === "....") {
      element.textContent = "";
    }
  }, 300);
}

function typeText(element, text) {
  let index = 0;

  let interval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20);
}

function generateUnqieId() {
  const timeStamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id=${timeStamp}-${hexadecimalString}`;
}
