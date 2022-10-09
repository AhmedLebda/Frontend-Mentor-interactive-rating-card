/* DOM Variables */
const ratings = document.querySelectorAll(".rates li");
const form = document.querySelector("form");
const frontCard = document.querySelector(".front-wrapper");
const backCard = document.querySelector(".back-wrapper");
const userRate = document.getElementById("rate");
let rating = "";

// Getting the user rate
ratings.forEach((element) => {
    element.addEventListener("click", (e) => {
        rating = e.target.innerHTML;

        // Removing active class from all elements
        ratings.forEach((element) => element.classList.remove("active"));

        e.target.classList.add("active");
    });
});

// Updating DOM after sumitting
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // checking if the user didn't choose a rating
    if (!rating) {
        userRate.innerHTML = `You selected 0 out of 5`;
    } else {
        userRate.innerHTML = `You selected ${rating} out of 5`;
    }

    frontCard.classList.add("disappear");
    frontCard.addEventListener("animationend", () => {
        frontCard.remove();
        backCard.style.display = "block";
        backCard.classList.add("appear");
    });
});
