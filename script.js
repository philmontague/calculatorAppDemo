

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

let currentNumber = ''; 
let previousNumber = ''; 
let operator = null; 

// Add event listeners to number buttons 
numberBtns.forEach((button) => {
    button.addEventListener('click', () => {
        appendNumber(button.textContent); 
        updateDisplay(); 
    }); 
}); 

// Add event listeners to operator buttons 



// Add event listener to decimal button 


// Add event listener to equals button 

// Add event listener for display 
 

// Add event listener for clear button 


// Helper Function appendNumber(number) 

// Helper function appendDecimal() 

// Helper function setOperator(op) 


// Helper function clear() 


// Helper function updateDisplay() 
