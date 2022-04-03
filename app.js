const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("img");

let userChoice = "";
let computerChoice = "";
let result = "";

possibleChoices.forEach((possibleChoice) => {
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice.toUpperCase();

    computerChoice = generateComputerChoice();
    computerChoiceDisplay.innerHTML = computerChoice.toUpperCase();

    resultDisplay.innerHTML = getResult();
  });
});

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  }
  if (randomNumber === 1) {
    return "scissor";
  }
  if (randomNumber === 2) {
    return "paper";
  }
}

function getResult() {
  result = "You Lost!";
  if (computerChoice === userChoice) {
    result = "Its a draw";
  }

  if (computerChoice === "rock" && userChoice === "paper") {
    result = "You win!";
  }
  if (computerChoice === "paper" && userChoice === "scissor") {
    result = "You win!";
  }
  if (computerChoice === "scissor" && userChoice === "rock") {
    result = "You win!";
  }

  return result;
}
