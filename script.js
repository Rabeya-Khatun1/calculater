function append(value) {
  let display = document.getElementById("display");

  if (display.value === "0" && value !== "." && isNaN(value) === false) {
    display.value = value; 
  } else {
    display.value += value; 
  }
}

function clearDisplay() {
  document.getElementById("display").value = "0";
}
function backspace() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
   if (display.value === "") {
    display.value = "0";
  }
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