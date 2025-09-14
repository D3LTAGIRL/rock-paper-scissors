
playGame()

function playGame() {

    let humanScore = computerScore = 0;

    while (humanScore !== 3 && computerScore !== 3) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore === 3) {
        console.log("You Win! Man triumphs over machine!");
    } else {
        console.log("You Lost! Oh man... soon computers will be taking our jobs too...");
    }
    
    function getComputerChoice() {

        // generate a random number from 0-2 (3 possibilities)
        result = Math.floor(Math.random() * 3)
        
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

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

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
}

