console.log("Hello Bozo")

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