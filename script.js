function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) return "rock";
    if (randomNumber === 1) return "paper";
    return "scissors";
}

function getHumanChoice() {
    const choice = prompt("Enter rock, paper, or scissors:");
    return choice.toLowerCase();
}

let humanScore = 0
let computerScore = 0


function playRound(humanChoice, computerChoice){
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
}
