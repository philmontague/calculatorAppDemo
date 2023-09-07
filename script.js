

// Display element 
const display = document.querySelector('.display'); 
// Number buttons 
const numberBtns = document.querySelectorAll('.number'); 
// Operator buttons  
const operatorBtns = document.querySelectorAll('.operator'); 
// Decimal button 
const decimalBtn = document.querySelector('.decimal'); 
// Evaluate button  
const equalsBtn = document.querySelector('.evaluate'); 
// Clear button 
const clearBtn = document.querySelector('.clear'); 

// Declaring other useful variables to store current number and previous number along with the operator 
let currentNumber = ''; 
let previousNumber = ''; 
let operator = null; 


// Add event listeners to number buttons 
numberBtns.forEach((button) => {
    button.addEventListener('click', () => {
        appendNumber(button.textContent); 
    }); 
}); 

// Add event listeners to operator buttons 


// Add event listener to decimal button 


// Add event listener to equals button 


// Add event listener for display 


// Add event listener for clear button 
clearBtn.addEventListener('click', () => {
    clearDisplay(); 
})

// Helper Function appendNumber(number)
function appendNumber(number) { 
    // Append the clicked number to the currentNumber string 
    currentNumber += number; 
    // Updare display with current number 
    updateDisplay(); 
}

// Helper function appendDecimal() 


// Helper function setOperator(op) 


// Helper function clearDisplay() 
function clearDisplay() { 
    currentNumber = ''; 
    previousNumber = ''; 
    operator = null; 
    display.textContent = '0'
}

// Helper function updateDisplay() 
function updateDisplay() { 
    display.textContent = currentNumber; 
}

