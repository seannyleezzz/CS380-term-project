// 1. Data: Array of Review Objects
const customerReviews = [
    { name: "John Doe", rating: 5, text: "The Audi R8 is a masterpiece. The buying process was seamless!", img: "images/audir8.avif" },
    { name: "Jane Smith", rating: 4, text: "Amazing inventory. Found my dream Porsche here. Highly recommended.", img: "images/911.webp" },
    { name: "Mike Ross", rating: 5, text: "Elite service for elite cars. The team knows their stuff.", img: "images/laferrari.jpg" }
];

// 2. Function to generate stars based on the rating number
function generateStars(rating) {
    let stars = "";
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '<img src="images/full-star.webp" alt="Full star">';
        } else {
            stars += '<img src="images/empty-star.png" alt="Empty star">';
        }
    }
    return stars;
}

// 3. Display reviews on the page
function displayReviews() {
    const container = document.getElementById('reviews-container');

    customerReviews.forEach(review => {
        const reviewHTML = `
            <div class="review-card">
                <img class="review-photo" src="${review.img}" alt="${review.name}">
                <h3 class="cname">${review.name}</h3>
                <div class="rating">
                    ${generateStars(review.rating)}
                </div>
                <p class="review-text">"${review.text}"</p>
            </div>
        `;
        container.innerHTML += reviewHTML;
    });
}

// Run the function when the page loads
displayReviews();
