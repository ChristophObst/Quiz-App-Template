// phew… not a lot going on here. Please add some code!

const bookmarkButton = document.querySelector(".bookmark");

bookmarkButton.addEventListener("click", () => {
  console.log("hello");
  bookmarkButton.classList.toggle("card__button-answer");
});