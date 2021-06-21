const speedEl = document.getElementById("speed");
const textEl = document.getElementById("text");

let idx = 1;
let speed = 300 / speedEl.value;
const text = "I Love Web Development...";

autoText();

function autoText() {
  textEl.innerHTML = text.slice(0, idx);
  idx++;
  if (idx > text.length) {
    idx = 1;
  }
  setTimeout(autoText, speed);
}

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
