//Author: Sean Lee

const carSelect = document.getElementById('car-select');
const priceInput = document.getElementById('vehicle-price');
const downPaymentInput = document.getElementById('down-payment');
const resultDisplay = document.getElementById('monthly-payment');
const errorDisplay = document.getElementById('error-message');

const interestRate = 0.08; //8% fixed interest rate
const loanTermInMonths = 60; //5 year standard loan term

//populating the dropdown from your existing car array data which i loaded from linking car-details.js in the html page
function populateCars() {
    cars.forEach(car => {
        const option = document.createElement('option');
        option.value = car.id;
        option.textContent = `${car.brand} ${car.model} ($${car.price.toLocaleString()})`;
        //this is where js adds in this option into the dropdown menu
        carSelect.appendChild(option);
    });
}

//main calculation logic
function calculateFinancing() {
    const selectedCar = cars.find(c => c.id == carSelect.value);
    const downPayment = parseFloat(downPaymentInput.value) || 0;
    
    //reset any old messages or totals
    errorDisplay.textContent = "";
    resultDisplay.textContent = "$0.00";

    if (!selectedCar) return;

    //validation check
    if (downPayment < 0) {
        errorDisplay.textContent = "Error: Down payment cannot be negative.";
        return;
    }
    if (downPayment >= selectedCar.price) {
        errorDisplay.textContent = "Error: Down payment cannot exceed or equal vehicle price.";
        return;
    }

    //autofill price
    priceInput.value = selectedCar.price.toLocaleString();

    //I searched online for this math formula
    const principal = selectedCar.price - downPayment;
    const monthlyRate = interestRate / 12;
    
    const x = Math.pow(1 + monthlyRate, loanTermInMonths);
    const monthly = (principal * x * monthlyRate) / (x - 1);

    //undefined is to tell the browser to use the user's local language settings
    resultDisplay.textContent = `$${monthly.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
}


carSelect.addEventListener('change', calculateFinancing);
downPaymentInput.addEventListener('input', calculateFinancing);


document.addEventListener('DOMContentLoaded', populateCars);