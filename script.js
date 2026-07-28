console.log("Hello world");

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
            return "computer";
        } else if (computerChoice === "scissors"){
            return "human"
        } else {
            return "draw"
        }
    } else if (humanChoice === "paper"){
        if (computerChoice === "scissors"){
            return "computer";
        } else if (computerChoice === "rock"){
            return "human";
        } else {
            return "draw"
        }
    } else {
        if (computerChoice === "rock"){
            return "computer";
        } else if (computerChoice === "paper"){
            return "human";
        } else {
            return "draw"
        }
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for (let rounds = 0; rounds < 5; rounds++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        let winner = playRound(humanSelection, computerSelection);
        if (winner === "human"){
            humanScore++;
            console.log(`Computer choice ${computerSelection}. YOU WIN! Human score: ${humanScore} | Computer score: ${computerScore}`)
        } else if (winner === "computer") {
            computerScore++;
            console.log(`Computer choice ${computerSelection}. COMPUTER WINS! Human score: ${humanScore} | Computer score: ${computerScore}`)
        } else {
            console.log(`It's a draw... Human score: ${humanScore} | Computer score: ${computerScore}`)
        }
    }
    if (humanScore > computerScore) {
        console.log(`***YOU WIN!***`);
    } else if (humanScore < computerScore){
        console.log(`***COMPUTER WINS!***`);
    } else {
        console.log(`***IT'S A DRAW***`);
    }
}

playGame();