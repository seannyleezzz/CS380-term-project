//Author: Sean Lee
const cars = [
    { 
        id: 0, 
        brand: "Audi", model: "R8", year: 2022, 
        price: 197000, mileage: "1,200", img: "images/audir8.avif",
        hp: 602, torque: "413 lb-ft", zero_sixty: "3.2 seconds",
        top_speed: "205 mph", condition: "Certified Pre-Owned",
        engine: "5.2L V10", cylinders: "10", 
        aspiration: "Naturally Aspirated", drivetrain: "All-Wheel Drive",
        transmission: "7-Speed S Tronic (Dual-Clutch)",
        videoURL: "https://www.youtube.com/watch?v=njTAITHZRxA"
    },
    { 
        id: 1, 
        brand: "Lamborghini", model: "Revuelto", year: 2024, 
        price: 608358, mileage: "100", img: "images/lambo Revuelto.jpg",
        hp: 1001, torque: "1,048 lb-ft (Combined)", zero_sixty: "2.5 seconds",
        top_speed: "217+ mph", condition: "Certified Pre-Owned",
        engine: "6.5L V12 + 3 Electric Motors", cylinders: "12", 
        aspiration: "Naturally Aspirated (Hybrid Power)", drivetrain: "E-4WD",
        transmission: "8-Speed Dual-Clutch (E-Axle)",
        videoURL: "https://www.youtube.com/watch?v=sitXeGjm4Mc"
    },
    { 
        id: 2, 
        brand: "Ferrari", model: "LaFerrari", year: 2015, 
        price: 3500000, mileage: "500", img: "images/laferrari.jpg",
        hp: 950, torque: "664 lb-ft (Combined)", zero_sixty: "<3.0 seconds",
        top_speed: "217+ mph", condition: "Certified Pre-Owned",
        engine: "6.3L V12 + Electric Motor (HY-KERS)", cylinders: "12", 
        aspiration: "Naturally Aspirated (Hybrid)", drivetrain: "Rear-Wheel Drive",
        transmission: "7-Speed F1 Dual-Clutch",
        videoURL: "https://www.youtube.com/watch?v=iRsV6YpLsKA"
    },
    { 
        id: 3, 
        brand: "Porsche", model: "911 GT3 RS", year: 2023, 
        price: 245000, mileage: "800", img: "images/911.webp",
        hp: 640, torque: "590 lb-ft", zero_sixty: "2.6 seconds",
        top_speed: "205 mph", condition: "Certified Pre-Owned",
        engine: "3.7L Twin-Turbo Boxer-6", cylinders: "6", 
        aspiration: "Twin-Turbocharged", drivetrain: "All-Wheel Drive",
        transmission: "8-Speed PDK (Dual-Clutch)",
        videoURL: "https://www.youtube.com/watch?v=KdLMA9nJStg"
    },
    { 
        id: 4, 
        brand: "Audi", model: "RS7", year: 2025, 
        price: 138000, mileage: "200", img: "images/Audi Rs7.jpg",
        hp: 621, torque: "627 lb-ft", zero_sixty: "3.3 seconds",
        top_speed: "200 mph", condition: "Certified Pre-Owned",
        engine: "4.0L Twin-Turbo V8", cylinders: "8", 
        aspiration: "Twin-Turbocharged", drivetrain: "All-Wheel Drive",
        transmission: "8-Speed Tiptronic (Automatic)"
    },
    { 
        id: 5, 
        brand: "Lamborghini", model: "Huracan STO", year: 2023, 
        price: 2000000, mileage: "800", img: "images/lambo STO.jpeg",
        hp: 631, torque: "417 lb-ft", zero_sixty: "3.0 seconds",
        top_speed: "193 mph", condition: "Certified Pre-Owned",
        engine: "5.2L V10", cylinders: "10", 
        aspiration: "Naturally Aspirated", drivetrain: "Rear-Wheel Drive",
        transmission: "7-Speed Dual-Clutch (LDF)",
        videoURL: "https://www.youtube.com/watch?v=HAoYDs65xvA"
    },
    { 
        id: 6, 
        brand: "Ferrari", model: "SF90 Stradale", year: 2023, 
        price: 450000, mileage: "800", img: "images/Ferrari SF90.jpg",
        hp: 986, torque: "590 lb-ft (Engine) / 800+ lb-ft (Combined)", zero_sixty: "2.5 seconds",
        top_speed: "211 mph", condition: "Certified Pre-Owned",
        engine: "4.0L Twin-Turbo V8 + 3 Electric Motors (PHEV)", cylinders: "8", 
        aspiration: "Twin-Turbo (Plug-In Hybrid)", drivetrain: "e-4WD",
        transmission: "8-Speed F1 Dual-Clutch",
        videoURL: "https://www.youtube.com/watch?v=MvVXL-vBQs0"
    },
    { 
        id: 7, 
        brand: "Porsche", model: "Panamera Turbo GTS", year: 2018, 
        price: 115000, mileage: "22,800", img: "images/Porsche Panamera GTS.jpg.webp",
        hp: 677, torque: "626 lb-ft (Combined)", zero_sixty: "3.2 seconds",
        top_speed: "192 mph", condition: "Certified Pre-Owned",
        engine: "4.0L Twin-Turbo V8 + Electric Motor (PHEV)", cylinders: "8", 
        aspiration: "Twin-Turbo (Plug-In Hybrid)", drivetrain: "All-Wheel Drive",
        transmission: "8-Speed PDK (Dual-Clutch)",
        videoURL: "https://www.youtube.com/watch?v=-QfRAwg3gkM"
    },
    { 
        id: 8, 
        brand: "Bugatti", model: "Chiron SuperSport 300+", year: 2023, 
        price: 4500000, mileage: "800", img: "images/Bugatti Chiron SuperSport 300+.jpg",
        hp: 1578, torque: "1,180 lb-ft", zero_sixty: "2.4 seconds",
        top_speed: "304+ mph", condition: "Certified Pre-Owned",
        engine: "8.0L Quad-Turbo W16", cylinders: "16", 
        aspiration: "Quad-Turbocharged", drivetrain: "All-Wheel Drive",
        transmission: "7-Speed Dual-Clutch (DSG)",
        videoURL: "https://www.youtube.com/watch?v=FuS_bXJNync&t=55s"
    },
    { 
        id: 9, 
        brand: "Chevrolet", model: "Corvette Stingray Z51", year: 2026, 
        price: 88000, mileage: "800", img: "images/Chevrolet Corvette Stingray.avif",
        hp: 495, torque: "470 lb-ft", zero_sixty: "2.9 seconds",
        top_speed: "194 mph", condition: "Certified Pre-Owned",
        engine: "6.2L V8", cylinders: "8", 
        aspiration: "Naturally Aspirated", drivetrain: "Rear-Wheel Drive",
        transmission: "8-Speed Dual-Clutch",
        videoURL: "https://www.youtube.com/watch?v=SN3ytYGh2SM"

    },
    { 
        id: 10, 
        brand: "Bugatti", model: "Chiron Sport", year: 2023, 
        price: 3450000, mileage: "800", img: "images/Bugatti Chiron Sport.avif",
        hp: 1479, torque: "1,180 lb-ft", zero_sixty: "2.4 seconds",
        top_speed: "261 mph", condition: "Certified Pre-Owned",
        engine: "8.0L Quad-Turbo W16", cylinders: "16", 
        aspiration: "Quad-Turbocharged", drivetrain: "All-Wheel Drive",
        transmission: "7-Speed Dual-Clutch (DSG)",
        videoURL: "https://www.youtube.com/watch?v=PkkV1vLHUvQ"
    },
];

//Building the page 
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

//Initial Display
displayCars(cars);



// Sort by price when user picks a new option in the dropdown menu then run the filterAndSort Func
document.getElementById('sortPrice').addEventListener('change', filterAndSort);

// Filter by brand when user picks a new option in the dropdown menu then run the filterAndSort Func
document.getElementById('filterBrand').addEventListener('change', filterAndSort);

function filterAndSort() {
    const priceVal = document.getElementById('sortPrice').value;
    const brandVal = document.getElementById('filterBrand').value;

    //Filter by Brand: If the user selected all, it keeps everything. If they selected "Audi," it only keeps cars where the brand matches "Audi"
    let filteredCars = cars.filter(car => {
        return brandVal === "all" || car.brand === brandVal;
    });

    //Then Sort...if the result is negative, it knows a is cheaper than b and puts it first.
    if (priceVal === "low-high") {
        filteredCars.sort((a, b) => a.price - b.price);
    } else if (priceVal === "high-low") {
        filteredCars.sort((a, b) => b.price - a.price);
    }

    displayCars(filteredCars);
}