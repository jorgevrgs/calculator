"use stric";
const total = document.getElementById("total");
const operations = document.getElementById("operations");
const validDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const validOperators = ["+", "-", "/", "*", "%", "÷", "×", "C", "±", "%"];
const validEquals = ["Enter", "="];
let capturing = "first";
let firstValue = 0;
let secondValue = 0;

total.innerText = 0;

// ░█▄─░█ ░█─░█ ░█▀▄▀█ ░█▀▀█ ░█▀▀▀ ░█▀▀█ ░█▀▀▀█
// ░█░█░█ ░█─░█ ░█░█░█ ░█▀▀▄ ░█▀▀▀ ░█▄▄▀ ─▀▀▀▄▄
// ░█──▀█ ─▀▄▄▀ ░█──░█ ░█▄▄█ ░█▄▄▄ ░█─░█ ░█▄▄▄█
(() => {
  const numbers = document.getElementById("numbers");
  let numberDiv = "";
  for (let i = 9; i >= 0; i--) {
    numberDiv += `<div class="number" style="grid-area:${String.fromCharCode(
      97 + i
    )}" data-value="${i}">${i}</div>`;
  }

  numberDiv += `<div class="number" data-value=".">.</div>`;

  numbers.innerHTML = numberDiv;
})();

// ░█▀▀▀ ▀▄░▄▀ ▀▀█▀▀ ░█▀▀█ ─█▀▀█ ░█▀▀▀█
// ░█▀▀▀ ─░█── ─░█── ░█▄▄▀ ░█▄▄█ ─▀▀▀▄▄
// ░█▄▄▄ ▄▀░▀▄ ─░█── ░█─░█ ░█─░█ ░█▄▄▄█
(() => {
  const extras = document.getElementById("extras");
  const options = ["C", "±", "%"];
  let extraDiv = "";
  options.forEach(
    (option) =>
      (extraDiv += `<div class="extra" data-value="${option}">${option}</div>`)
  );
  extras.innerHTML = extraDiv;
})();

// ░█▀▀▀█ ░█▀▀█ ░█▀▀▀ ░█▀▀█ ▀▀█▀▀ ░█▀▀▀█ ░█▀▀█ ░█▀▀▀█
// ░█──░█ ░█▄▄█ ░█▀▀▀ ░█▄▄▀ ─░█── ░█──░█ ░█▄▄▀ ─▀▀▀▄▄
// ░█▄▄▄█ ░█─── ░█▄▄▄ ░█─░█ ─░█── ░█▄▄▄█ ░█─░█ ░█▄▄▄█
(() => {
  const operators = document.getElementById("operators");
  const options = ["÷", "×", "-", "+", "="];
  let operatorDiv = "";
  options.forEach(
    (option) =>
      (operatorDiv += `<div class="operator" data-value="${option}">${option}</div>`)
  );
  operators.innerHTML = operatorDiv;
})();

// ░█▀▀█ ░█▀▀▀ ░█▀▀▀█ ░█─░█ ░█─── ▀▀█▀▀ ░█▀▀▀█
// ░█▄▄▀ ░█▀▀▀ ─▀▀▀▄▄ ░█─░█ ░█─── ─░█── ─▀▀▀▄▄
// ░█─░█ ░█▄▄▄ ░█▄▄▄█ ─▀▄▄▀ ░█▄▄█ ─░█── ░█▄▄▄█
function generateResults() {
  console.log("results");
}

function generateOperations(text) {
  if (0 == total.innerText && key !== 0) {
    total.innerText = "";
  }

  total.innerText += text;
}

// ░█▀▀▀ ░█─░█ ░█▄─░█ ░█▀▀█ ▀▀█▀▀ ▀█▀ ░█▀▀▀█ ░█▄─░█ ░█▀▀▀█
// ░█▀▀▀ ░█─░█ ░█░█░█ ░█─── ─░█── ░█─ ░█──░█ ░█░█░█ ─▀▀▀▄▄
// ░█─── ─▀▄▄▀ ░█──▀█ ░█▄▄█ ─░█── ▄█▄ ░█▄▄▄█ ░█──▀█ ░█▄▄▄█

function handleDigit(digit) {
  key = digit;
  if (typeof validDigits.find((val) => val == key) !== "undefined") {
    generateOperations(key);
  } else if (typeof validOperators.find((val) => val == key) !== "undefined") {
    console.log("Operator", key);
  }
}

function calculate(first, operation, second = 0) {
  switch (operation) {
    case "addition":
    case "+":
      return (first * 10 + second * 10) / 10;
    case "subtraction":
    case "-":
      return (first * 10 - second * 10) / 10;
    case "multiplication":
    case "*":
    case "×":
      return first * second;
    case "division":
    case "%":
    case "/":
      return first / second;
    case "negative":
    case "±":
      return (-10 * first) / 10;
    case "percentage":
    case "%":
      return first / 100;
    default:
      return 0;
  }
}

// ░█▀▀▀ ░█──░█ ░█▀▀▀ ░█▄─░█ ▀▀█▀▀ ░█▀▀▀█
// ░█▀▀▀ ─░█░█─ ░█▀▀▀ ░█░█░█ ─░█── ─▀▀▀▄▄
// ░█▄▄▄ ──▀▄▀─ ░█▄▄▄ ░█──▀█ ─░█── ░█▄▄▄█
const actions = document.querySelectorAll("#calculator");
actions.forEach((action) => {
  action.addEventListener("click", (e) => {
    console.log(`Click on ${e.target.dataset.value}`);
    const key = e.target.dataset.value;

    handleDigit(key);
  });
});

document.addEventListener("keyup", (e) => {
  if (e.isTrusted) {
    console.log(`Keyup on ${e.key}`);
    const key = e.key;

    handleDigit(key);
  }
});
