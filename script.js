// function calculate() {
//   let num1 = parseFloat(document.getElementById("num1").value);
//   let num2 = parseFloat(document.getElementById("num2").value);
//   let operator = document.getElementById("operator").value;
//   let result;

//   if (operator === "+") result = num1 + num2;
//   else if (operator === "-") result = num1 - num2;
//   else if (operator === "*") result = num1 * num2;
//   else if (operator === "/") result = num1 / num2;
//   else result = "Invalid operator";

//   document.getElementById("result").innerText = "Result: " + result;
// }

function append(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}
function backspace() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let expression = document.getElementById("display").value;
  let result = eval(expression);
  document.getElementById("display").value = result;
}

function square() {
  let display = document.getElementById("display");

  display.value = Math.pow(display.value, 2);
}

function sqrt() {
  let display = document.getElementById("display");

  display.value = Math.sqrt(display.value);
}
function sin() {
  let display = document.getElementById("display");

  display.value = Math.sin(display.value);
}
function log() {
  let display = document.getElementById("display");

  display.value = Math.log10(display.value);
}