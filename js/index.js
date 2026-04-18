let currentIndex = 0;
const slider = document.getElementById('car-slider');
const totalImages = 4; // Updated to 4

function slideImages() {
    currentIndex++;

    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    // Move by 25% increments (which is 1/4 of the 400% width)
    const percentage = currentIndex * -25;
    
    slider.style.transform = `translateX(${percentage}%)`;
}

// Keep it at 5000ms (5 seconds)
setInterval(slideImages, 5000);