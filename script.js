document.addEventListener("keydown", function(event){
  const display = document.getElementById("display");
  const key = event.key;

  if(key >= '0' && key <= '9'){
    display.value += key;
  }

  // Operators
  else if(key === '+' || key === '-' || key === '*' || key === '/'){
    display.value += key;
  }

  // Decimal point
  else if(key === '.'){
    display.value += key;
  }

  // Enter key = calculate
  else if(key === 'Enter'){
    calculate();
  }

  // Backspace key
  else if(key === 'Backspace'){
    display.value = display.value.slice(0,-1);
  }

  // Clear (Escape)
  else if(key === 'Escape'){
    display.value = '';
  }

  // Prevent default behaviour for certain keys
  else {
    event.preventDefault();
  }
});

let newInput = false;

function append(value){
  const display = document.getElementById("display");

  if(newInput || display.value === "0"){
    display.value = "";
    newInput = false;
  }

  display.value += value;
}

function calculate(){
  const display = document.getElementById("display");

  let result = eval(display.value);
  display.value = result;

  newInput = true;
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



function square(){
  let display = document.getElementById("display");
  let value = parseFloat(display.value);

  if(shiftMode){
    display.value = Math.sqrt(value);
  }else{
    display.value = value * value;
  }
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
function factorial() {
  let display = document.getElementById("display");
  let num = parseInt(display.value);
  if (num < 0) {
    display.value = "Error";
    return;
  }
  let fact = 1;
  for(let i=1;i<=num;i++){
    fact *= i;
  }
  display.value = fact;
}
function ln() {
  let display = document.getElementById("display");
  display.value = Math.log(display.value); 
}

function exp() {
  let display = document.getElementById("display");
  display.value = Math.exp(display.value);
}

function tan() {
  let display = document.getElementById("display");
  display.value = Math.tan(display.value);
}

function cos() {
  let display = document.getElementById("display");
  display.value = Math.cos(display.value);
}

function toDegree() {
  let display = document.getElementById("display");
  let rad = parseFloat(display.value);
  display.value = rad * (180 / Math.PI);
}

function toRadian() {
  let display = document.getElementById("display");
  let deg = parseFloat(display.value);
  display.value = deg * (Math.PI / 180);
}

let isDegree = true; 

// Toggle button
function toggleDegRad() {
  isDegree = !isDegree;
  const toggleBtn = document.getElementById("degRadBtn");
  toggleBtn.innerText = isDegree ? "Deg" : "Rad";
}

function sin(){
  let display = document.getElementById("display");
  let value = parseFloat(display.value);

  if(shiftMode){
    display.value = Math.asin(value);
  }else{
    display.value = Math.sin(value);
  }
}

function cos() {
  let display = document.getElementById("display");
  let value = parseFloat(display.value);
  
  if (isDegree) value = value * (Math.PI / 180);
  display.value = Math.cos(value);
}

function tan() {
  let display = document.getElementById("display");
  let value = parseFloat(display.value);
  
  if (isDegree) value = value * (Math.PI / 180);
  display.value = Math.tan(value);
}

let memory = 0;

// M+ : add current display value to memory
function memoryAdd() {
  let display = parseFloat(document.getElementById("display").value) || 0;
  memory += display;
}

// M- : subtract current display value from memory
function memorySubtract() {
  let display = parseFloat(document.getElementById("display").value) || 0;
  memory -= display;
}

// MR : recall memory to display
function memoryRecall() {
  document.getElementById("display").value = memory;
}

// MC : clear memory
function memoryClear() {
  memory = 0;
}

function cube() {
  let display = document.getElementById("display");
  let value = parseFloat(display.value);
  display.value = Math.pow(value, 3);
}

function percent() {
  let display = document.getElementById("display");
  let value = parseFloat(display.value);
  display.value = value / 100;
}

function inverse() {
  let display = document.getElementById("display");
  let value = parseFloat(display.value);
  if(value === 0){
    display.value = "Error";  // divide by zero
    return;
  }
  display.value = 1 / value;
}

// Array to store history
let historyList = [];

// Call this after every calculation
function addToHistory(expression, result){
  if(historyList.length >= 10){
    historyList.shift(); // oldest remove
  }
  historyList.push({expression, result});
  updateHistoryUI();
}

function updateHistoryUI(){
  const historyDiv = document.getElementById("history");
  historyDiv.innerHTML = "";
  historyList.slice().reverse().forEach(item => {
    let div = document.createElement("div");
    div.innerText = `${item.expression} = ${item.result}`;
    div.onclick = () => {
      document.getElementById("display").value = item.result;
    };
    historyDiv.appendChild(div);
  });
}

// Modify calculate() to include history
function calculate() {
  let display = document.getElementById("display");
  let expression = display.value;

  try{
    let result = eval(expression);
    addToHistory(expression, result);
    display.value = result;
  } catch(e){
    display.value = "Error";
  }
}

function copyResult() {
  const display = document.getElementById("display");
  const btn = document.getElementById("copyBtn");

  navigator.clipboard.writeText(display.value);

  btn.innerText = "Copied!";
  
  setTimeout(() => {
    btn.innerText = "Copy";
  }, 1500);
}

function toggleTheme(){
  const body = document.body;
  const btn = document.getElementById("themeToggle");

  body.classList.toggle("light");

  if(body.classList.contains("light")){
    btn.innerText = "Dark";
  }else{
    btn.innerText = "Light";
  }
}

let shiftMode = false;

function toggleShift(){
  shiftMode = !shiftMode;

  
  const btn = document.getElementById("shiftBtn");
  btn.classList.toggle("active");

  const sinBtn = document.getElementById("sinBtn");
  const logBtn = document.getElementById("logBtn");
  const squareBtn = document.getElementById("squareBtn");

  if(shiftMode){
    sinBtn.innerText = "asin";
    logBtn.innerText = "10^x";
    squareBtn.innerText = "√x";
  }else{
    sinBtn.innerText = "sin";
    logBtn.innerText = "log";
    squareBtn.innerText = "x²";
  }
}

function toggleSign(){
  const display = document.getElementById("display");
  display.value = parseFloat(display.value) * -1;
}