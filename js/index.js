//Author: Sean Lee

let currentIndex = 0;
const slider = document.getElementById('car-slider');
const totalImages = 4; // I only put 4 images in the slider in the html page

function slideImages() {
    currentIndex++;

    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    // Move by 25% increments (which is 1/4 of the 400% width)
    const percentage = currentIndex * -25;
    
    slider.style.transform = `translateX(${percentage}%)`;
}

//Making each interval 5000ms which is = 5 seconds because the parameter is in miliseconds
setInterval(slideImages, 5000);