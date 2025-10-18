let currentChoice = null;

const rockImg = "img/rock-icon.svg";
const paperImg = "img/paper-icon.svg";
const scissorsImg = "img/scissors-icon.svg";
const questionImg = "img/question-icon.svg";

const playerChoiceIcon = document.querySelector(".player-choice");
const computerChoiceIcon = document.querySelector(".computer-choice");

let choiceButtons = document.querySelectorAll(".choice-buttons img");
let confirmButton = document.querySelector("#confirm-button");

choiceButtons.forEach((element) => element.addEventListener("click", updateChoice))

function updateChoice(event) {
    let choice = event.target.id.split("-")[0];
    console.log(currentChoice);
    if (choice !== currentChoice) {
        choiceButtons.forEach((choiceButton) => choiceButton.classList.remove("selected"))
        currentChoice = choice;
        event.target.classList.add("selected");
        confirmButton.removeAttribute("disabled");
        return;
    } else {
        currentChoice = null;
        event.target.classList.remove("selected");
        confirmButton.setAttribute("disabled", "disabled");
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    // update choice icons
    playerChoiceIcon.src = "img/" + humanChoice + "-icon.svg";
    computerChoiceIcon.src = "img/" + computerChoice + "-icon.svg";

    // wait a bit
    // increase score if someone won

    if (humanChoice === computerChoice) {
        console.log(`it's a tie! you both picked ${humanChoice}`)
    }

    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
        ) {
        console.log(`you won! ${humanChoice} beats ${computerChoice}`)
        humanScore++;
    }

    if (humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock" ||
        humanChoice === "rock" && computerChoice === "paper"
        ) {
        console.log(`you lost! ${humanChoice} gets beaten by ${computerChoice}`)
        computerScore++;
    }
}

function playGame() {

    let humanScore = computerScore = 0;

    while (humanScore !== 5 && computerScore !== 5) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore === 5) {
        console.log("You Win! Man triumphs over machine!");
    } else {
        console.log("You Lost! Oh man... soon computers will be taking our jobs too...");
    }
    
    function getComputerChoice() {

        // generate a random number from 0-2 (3 possibilities)
        let result = Math.floor(Math.random() * 3)
        
        // choose the option that corresponds to that random number & return it
        switch (result) {
            case 0:
                return "rock";
            case 1:
                return "paper";
            case 2:
                return "scissors";
        }
    }

    function getHumanChoice() {
        // prompt the user for a choice between rock paper or scissors
        return prompt("rock, paper, or scissors?")
    }
}

