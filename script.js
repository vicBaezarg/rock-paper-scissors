console.log("Hello world");

let humanScore = 0;

let computerScore = 0;

function getComputerChoice () {
    let words = ["rock", "paper", "scissors"]
    let choice = Math.floor(Math.random() * words.length);
    return words[choice];
}

function getHumanChoice () {
    return prompt("Rock, Paper or Scissors?").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock"){
        if (computerChoice === "paper"){
            computerScore++;
            return "Paper beats Rock. YOU LOSE!";
        } else if (computerChoice === "scissors"){
            humanScore++;
            return "Rock beats Scissors. YOU WIN!"
        } else {
            return "It's a draw..."
        }
    } else if (humanChoice === "paper"){
        if (computerChoice === "scissors"){
            computerScore++;
            return "Scissors beats Paper. YOU LOSE!";
        } else if (computerChoice === "rock"){
            humanScore++;
            return "Paper beats Rock. YOU WIN!";
        } else {
            return "It's a draw..."
        }
    } else {
        if (computerChoice === "rock"){
            computerScore++;
            return "Rock beats Scissors. YOU LOSE!";
        } else if (computerChoice === "paper"){
            humanScore++;
            return "Scissors beats paper. YOU WIN!";
        } else {
            return "It's a draw..."
        }
    }
}

let computerSelection = getComputerChoice();
let humanSelection = getHumanChoice();

console.log(playRound(humanSelection, computerSelection));