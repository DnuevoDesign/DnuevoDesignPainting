let scrollContainer = document.getElementById("imageHolderContainer");
let leftButton = document.getElementById("arrowPointerLeft");
let rightButton = document.getElementById("arrowPointerRight");

leftButton.addEventListener("click", () => {
   scrollContainer.scrollBy(-100,0);
});
rightButton.addEventListener("click", () => {
   scrollContainer.scrollBy(100,0);
});




