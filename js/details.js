// 1. Get the ID from the URL (e.g., ?id=0)
const urlParams = new URLSearchParams(window.location.search);
const carId = urlParams.get('id');

// 2. Reference the same car data as in compare.js 
const cars = [
    { brand: "Audi", model: "R8", hp: 562, engine: "5.2L V10", price: 197000, img: "images/audir8.avif" },
    { brand: "Lamborghini", model: "Huracan", hp: 631, engine: "5.2L V10", price: 289000, img: "images/lambo Revuelto.jpg" },
    { brand: "Ferrari", model: "LaFerrari", hp: 949, engine: "6.3L V12 Hybrid", price: 3500000, img: "images/laferrari.jpg" },
    { brand: "Porsche", model: "911", hp: 640, engine: "3.7L Flat-6", price: 245000, img: "images/911.webp" }
];

// 3. Find the specific car
const selectedCar = cars[carId];

// 4. Inject the data into the HTML
if (selectedCar) {
    document.getElementById('car-name').innerText = `${selectedCar.brand} ${selectedCar.model}`;
    document.getElementById('car-hp').innerText = selectedCar.hp + " hp";
    document.getElementById('car-engine').innerText = selectedCar.engine;
    document.getElementById('car-image').src = selectedCar.img;
}
