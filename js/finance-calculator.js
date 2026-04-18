const carSelect = document.getElementById('car-select');
const priceInput = document.getElementById('vehicle-price');
const downPaymentInput = document.getElementById('down-payment');
const resultDisplay = document.getElementById('monthly-payment');
const errorDisplay = document.getElementById('error-message');

const INTEREST_RATE = 0.08; // 8% fixed
const LOAN_TERM_MONTHS = 60; // 5-year standard

// 1. Populate the dropdown from your existing car data
function populateCars() {
    cars.forEach(car => {
        const option = document.createElement('option');
        option.value = car.id;
        option.textContent = `${car.brand} ${car.model} ($${car.price.toLocaleString()})`;
        carSelect.appendChild(option);
    });
}

// 2. Main calculation logic
function calculateFinancing() {
    const selectedCar = cars.find(c => c.id == carSelect.value);
    const downPayment = parseFloat(downPaymentInput.value) || 0;
    
    // Reset states
    errorDisplay.textContent = "";
    resultDisplay.textContent = "$0.00";

    if (!selectedCar) return;

    // Validation Check
    if (downPayment < 0) {
        errorDisplay.textContent = "Error: Down payment cannot be negative.";
        return;
    }
    if (downPayment >= selectedCar.price) {
        errorDisplay.textContent = "Error: Down payment cannot exceed or equal vehicle price.";
        return;
    }

    // Auto-fill price
    priceInput.value = selectedCar.price.toLocaleString();

    // Math: Standard Amortization Formula
    const principal = selectedCar.price - downPayment;
    const monthlyRate = INTEREST_RATE / 12;
    
    const x = Math.pow(1 + monthlyRate, LOAN_TERM_MONTHS);
    const monthly = (principal * x * monthlyRate) / (x - 1);

    resultDisplay.textContent = `$${monthly.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
}

// Event Listeners
carSelect.addEventListener('change', calculateFinancing);
downPaymentInput.addEventListener('input', calculateFinancing);

// Initialize
document.addEventListener('DOMContentLoaded', populateCars);