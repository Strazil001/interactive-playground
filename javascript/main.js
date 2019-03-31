let userScore = 0;
let compScore = 0;
const userScore_span = document.querySelector(".user-score");
const compScore_span = document.querySelector(".comp-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
	const choices = ["r", "p", "s"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

getComputerChoice();

function convertToWord(letter) {
	if (letter === "r") return "rock";
	if (letter === "p") return "paper";
	return "scissor";
}

function win(userChoice, computerChoice) {
	const greenGlow = document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(
		computerChoice
	)}. You win!`;
	greenGlow.classList.add("green-glow");
	setTimeout(() => greenGlow.classList.remove("green-glow"), 700);
}

function lose(userChoice, computerChoice) {
	const redGlow = document.getElementById(userChoice);
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(
		userChoice
	)}. You lose!`;
	redGlow.classList.add("red-glow");
	setTimeout(() => redGlow.classList.remove("red-glow"), 700);
}

function draw(userChoice, computerChoice) {
	const grayGlow = document.getElementById(userChoice);
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = "Its a draw, please try again!";
	grayGlow.classList.add("gray-glow");
	setTimeout(() => grayGlow.classList.remove("gray-glow"), 700);
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	// console.log("User choice => " + userChoice);
	// console.log("Computer choice => " + computerChoice);
	switch (userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sr":
			win(userChoice, computerChoice);
			break;
		case "sr":
		case "rp":
		case "rs":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener("click", () => {
		return game("r");
	});
	paper_div.addEventListener("click", () => {
		return game("p");
	});
	scissor_div.addEventListener("click", () => {
		return game("s");
	});
}

main();
