let displayValue = '0';

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

  function squared() {
    displayValue += '**2'; // Appending '**2' to raise the number to the power of 2
    updateDisplay();
  }

  function appendToDisplay(value) {
    if (displayValue === '0' || displayValue === 'Error') {
      displayValue = value;
    } else {
      displayValue += value;
    }
    updateDisplay();
  }
  
  function calculate() {
    try {
      // Replace 'x' with '*' for multiplication and '%' with '/100' for percentage
      displayValue = displayValue.replace(/x/g, '*').replace(/%/g, '/100');
      // Check if there is a percentage operation
      if (displayValue.includes('%')) {
        let percentageIndex = displayValue.indexOf('%');
        let numberBeforePercentage = '';
        // Extract the number before the percentage sign
        for (let i = percentageIndex - 1; i >= 0; i--) {
          if (!isNaN(parseFloat(displayValue[i])) || displayValue[i] === '.') {
            numberBeforePercentage = displayValue[i] + numberBeforePercentage;
          } else {
            break;
          }
        }
        // Calculate the percentage
        let percentageValue = (parseFloat(numberBeforePercentage) * 0.01).toString();
        // Replace the percentage operation with the calculated value
        displayValue = displayValue.replace(numberBeforePercentage + '%', percentageValue);
      }
      // Evaluate the expression
      displayValue = eval(displayValue).toString();
      updateDisplay();
    } catch (error) {
      displayValue = 'Error';
      updateDisplay();
    }
  }
  
  function clearDisplay() {
    displayValue = '0';
    updateDisplay();
  }
  
  function deleteLastEntry() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
  }
  
  function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
  }
  
  
updateDisplay();

  