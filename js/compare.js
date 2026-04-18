// 1. Data Object (Should match your inventory.js data)
const carData = [
    { id: 0, brand: "Audi", model: "R8", hp: "562 hp", engine: "5.2L V10", speed: "204 mph", price: "$197,000", img: "images/audir8.avif" },
    { id: 1, brand: "Lamborghini", model: "Huracan", hp: "631 hp", engine: "5.2L V10", speed: "202 mph", price: "$289,000", img: "images/lambo Revuelto.jpg" },
    { id: 2, brand: "Ferrari", model: "LaFerrari", hp: "949 hp", engine: "6.3L V12 Hybrid", speed: "217 mph", price: "$3,500,000", img: "images/laferrari.jpg" },
    { id: 3, brand: "Porsche", model: "911", hp: "640 hp", engine: "3.7L Flat-6", speed: "205 mph", price: "$245,000", img: "images/911.webp" }
];

// 2. Populate the Select dropdowns
const selectors = [document.getElementById('select1'), document.getElementById('select2'), document.getElementById('select3')];

selectors.forEach(selector => {
    carData.forEach((car, index) => {
        let option = document.createElement('option');
        option.value = index;
        option.textContent = `${car.brand} ${car.model}`;
        selector.appendChild(option);
    });

    // 3. Add Event Listener to update table when selection changes
    selector.addEventListener('change', updateTable);
});

function updateTable() {
    selectors.forEach((selector, i) => {
        const carIndex = selector.value;
        const columnNum = i + 1; // 1, 2, or 3

        if (carIndex !== "") {
            const car = carData[carIndex];
            document.getElementById(`name${columnNum}`).innerHTML = `<a class="compare-car-link" href="car-details.html?id=${car.id}"><img src="${car.img}" alt="${car.brand} ${car.model}"><span>${car.brand} ${car.model}</span></a>`;
            document.getElementById(`hp${columnNum}`).textContent = car.hp;
            document.getElementById(`engine${columnNum}`).textContent = car.engine;
            document.getElementById(`speed${columnNum}`).textContent = car.speed;
            document.getElementById(`price${columnNum}`).textContent = car.price;
        } else {
            // Reset column if "Select Car" is chosen
            document.getElementById(`name${columnNum}`).textContent = "-";
            document.getElementById(`hp${columnNum}`).textContent = "-";
            document.getElementById(`engine${columnNum}`).textContent = "-";
            document.getElementById(`speed${columnNum}`).textContent = "-";
            document.getElementById(`price${columnNum}`).textContent = "-";
        }
    });
}
