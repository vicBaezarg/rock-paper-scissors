console.log("Hello world");

let humanScore = 0;

let computerScore = 0;

function getComputerChoice () {
    let words = ["rock", "paper", "scissors"]
    let choice = Math.floor(Math.random() * words.length);
    return words[choice];
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

function getHumanChoice () {
    return prompt("Rock, Paper or Scissors?");
}

console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock"){
        if (computerChoice == "paper"){
            computerScore++;
            return "Paper beats Rock. YOU LOSE!";
        } else if (computerChoice == "scissors"){
            humanScore++;
            return "Rock beats Scissors. YOU WIN!"
        }
    }
}