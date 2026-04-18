// 1. Updated Data with correct image paths from your index.html
const cars = [
    { id: 0, brand: "Audi", model: "R8", year: 2022, price: 197000, mileage: "1,200", img: "images/audir8.avif" },
    { id: 1, brand: "Lamborghini", model: "Huracan", year: 2021, price: 289000, mileage: "3,400", img: "images/lambo Revuelto.jpg" },
    { id: 2, brand: "Ferrari", model: "LaFerrari", year: 2015, price: 3500000, mileage: "500", img: "images/laferrari.jpg" },
    { id: 3, brand: "Porsche", model: "911", year: 2023, price: 245000, mileage: "800", img: "images/911.webp" },
    { id: 4, brand: "Audi", model: "RS7", year: 2025, price: 100000, mileage: "200", img: "images/Audi Rs7.jpg" },
    { id: 5, brand: "Lamborghini", model: "STO", year: 2023, price: 2000000, mileage: "800", img: "images/lambo STO.jpeg" },
    { id: 6, brand: "Ferrari", model: "SF90", year: 2023, price: 450000, mileage: "800", img: "images/Ferrari SF90.jpg" },
    { id: 7, brand: "Porsche", model: "Panamera GTS", year: 2018, price: 45000, mileage: "800", img: "images/Porsche Panamera GTS.jpg.webp" },
    { id: 8, brand: "Bugatti", model: "Chiron SuperSport 300+", year: 2023, price: 4500000, mileage: "800", img: "images/Bugatti Chiron SuperSport 300+.jpg" },
    { id: 9, brand: "Chevrolet", model: "Corvette Stingray", year: 2026, price: 78000, mileage: "800", img: "images/Chevrolet Corvette Stingray.avif" },
    { id: 10, brand: "Bugatti", model: "Chiron Sport", year: 2023, price: 2450000, mileage: "800", img: "images/Bugatti Chiron Sport.avif" },
];

function displayCars(carArray) {
    const container = document.getElementById('car-container');
    container.innerHTML = ""; 

    carArray.forEach((car) => {
        const carCard = `
            <article class="car-card">
                <img src="${car.img}" alt="${car.brand} ${car.model}">
                <div class="car-info">
                    <h3>${car.year} ${car.brand} ${car.model}</h3>
                    <p>Mileage: ${car.mileage} miles</p>
                    <span class="car-price">$${car.price.toLocaleString()}</span>
                    <br>
                    <a href="car-details.html?id=${car.id}" class="view-btn">View Full Specs</a>
                </div>
            </article>
        `;
        container.innerHTML += carCard;
    });
}

// Initial Display
displayCars(cars);

// --- Filtering Logic ---

// Sort by Price
document.getElementById('sortPrice').addEventListener('change', filterAndSort);

// Filter by Brand
document.getElementById('filterBrand').addEventListener('change', filterAndSort);

function filterAndSort() {
    const priceVal = document.getElementById('sortPrice').value;
    const brandVal = document.getElementById('filterBrand').value;

    // 1. Filter by Brand first
    let filteredCars = cars.filter(car => {
        return brandVal === "all" || car.brand === brandVal;
    });

    // 2. Then Sort
    if (priceVal === "low-high") {
        filteredCars.sort((a, b) => a.price - b.price);
    } else if (priceVal === "high-low") {
        filteredCars.sort((a, b) => b.price - a.price);
    }

    displayCars(filteredCars);
}