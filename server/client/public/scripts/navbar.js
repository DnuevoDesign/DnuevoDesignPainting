
const button = document.querySelector(".hamburgerButton")


button.addEventListener("click", (event) => {
    event.target.classList.toggle("change")

    const display = document.querySelector(".navbar-list");

    display.classList.toggle("collapse");
})


