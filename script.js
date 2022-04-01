const ratings = document.querySelectorAll("p");
const answer = document.getElementById("answer");
const button = document.getElementById("btn");
const secondCard = document.getElementById("thanks");
const firstCard = document.getElementById("card");
changeClass = (e) => {
	for (let i = 0; i < ratings.length; i++) {
		ratings[i].classList.remove("active");
	}
	e.target.classList.add("active");
	answer.textContent = e.target.textContent;
};
for (let i = 0; i < ratings.length; i++) {
	ratings[i].addEventListener("click", changeClass);
}
button.addEventListener("click", function change() {
	firstCard.style.display = "none";
	secondCard.style.display = "flex";
});
