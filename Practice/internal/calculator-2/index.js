let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function calculate() {
  const result = eval(displayValue);
  displayValue = String(result);
  updateDisplay();
}

updateDisplay();
