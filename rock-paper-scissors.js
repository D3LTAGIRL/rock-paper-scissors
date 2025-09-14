console.log("Hello Bozo")

function getComputerChoice() {

    // generate a random number from 0-2 (3 possibilities)
    result = Math.floor(Math.random() * 3)
    
    // choose the option that corresponds to that random number & return it
    switch (result) {
        case 0:
            return "r";
        case 1:
            return "p";
        case 2:
            return "s";
    }
}

function getHumanChoice() {
    // prompt the user for a choice between rock paper or scissors
    return prompt("(R)ock, (P)aper, (S)cissors!")
}