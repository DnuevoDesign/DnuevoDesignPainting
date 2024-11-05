import { REVIEWS } from "/data/reviews.js"


let reviewContainer = document.getElementById('reviews');
reviewContainer = reviewContainer.querySelector('main');

let google, yelp, angi;
google = "/public/images/logo/google-icon-2.png";
yelp = "/public/images/logo/yelp-icon.png";
angi = "/public/images/logo/angie-list-icon.png"



REVIEWS.forEach(element => {
    let review = document.createElement('ni-review-container');

    switch(element.site) {
        case "google" : element.site = google;
            break;
        case "yelp" : element.site = yelp;
            break;
        case "angie" : element.site = angi;
            break;
        default: element.site = google;
            break;
    }

    review.setAttribute('first-name', element.firstName);
    review.setAttribute('last-name', element.lastName);
    review.setAttribute('profile-image', element.profileImage);
    review.setAttribute('site-logo', element.site) // change this
    review.setAttribute('review-text', element.comment)
    review.setAttribute('rating', element.rating)

    reviewContainer.appendChild(review)

});



let leftArrowButton = document.getElementById("leftButton");
let rightArrowBUtton = document.getElementById("rightButton");

leftArrowButton.addEventListener("click", () => {
    reviewContainer.scrollLeft -= 400;
});
rightArrowBUtton.addEventListener("click", () => {
    reviewContainer.scrollLeft += 440;
});