// phew… not a lot going on here. Please add some code!

const bookmarkButton = document.querySelector(".bookmark");
const answerButton = document.querySelector(".card__button-answer");
const answer = document.querySelector(".card__answer"); 

bookmarkButton.addEventListener("click", () => {  
  bookmarkButton.classList.toggle("bookmark--active");
});

answerButton.addEventListener("click", () => {
answer.classList.toggle("card__answer--active");
});
