
const hamburgerButton = document.querySelector(".hamburgerButton");


hamburgerButton.addEventListener("click", (event) => {
    event.target.classList.toggle("change")

    const display = document.querySelector(".navbar-list");
    display.classList.toggle("collapse")
})


hamburgerButton.classList.toggle("collapse")