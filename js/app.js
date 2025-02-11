document.addEventListener('DOMContentLoaded', () => {
    fetch('data/reviews.json')
        .then(response => response.json())
        .then(data => displayReviews(data))
        .catch(error => console.error('Error fetching reviews:', error));
});

function displayReviews(reviews) {
    const reviewsContainer = document.getElementById('reviews-container');
    reviewsContainer.innerHTML = '';

    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');

        const reviewerName = document.createElement('h3');
        reviewerName.textContent = review.reviewer;
        reviewElement.appendChild(reviewerName);

        const reviewRating = document.createElement('p');
        reviewRating.textContent = `Rating: ${review.rating} stars`;
        reviewElement.appendChild(reviewRating);

        const reviewText = document.createElement('p');
        reviewText.textContent = review.text;
        reviewElement.appendChild(reviewText);

        reviewsContainer.appendChild(reviewElement);
    });
}
