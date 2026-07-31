let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")
const results = document.querySelector(".results")

rockButton.addEventListener("click", () => {
    playGame("rock");
});

paperButton.addEventListener("click", () => {
    playGame("paper");
});

scissorsButton.addEventListener("click", () => {
    playGame("scissors");
});
function getComputerChoice () {
    let words = ["rock", "paper", "scissors"]
    let choice = Math.floor(Math.random() * words.length);
    return words[choice];
}

function playRound(humanChoice, computerChoice) {
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

function playGame(humanSelection){
    let computerSelection = getComputerChoice();
    let winner = playRound(humanSelection, computerSelection);
    function finalWinner(fWinner){
        const textWinner = document.createElement("p");
        if (fWinner === "human"){
            textWinner.textContent = "YOU WIN!";
        } else if (fWinner === "computer"){
            textWinner.textContent ="COMPUTER WIN!";
        }
        results.appendChild(textWinner);
    }

    function textWinner(roundWinner){
        const p = document.createElement("p");
        p.style.fontSize = "18px"
        if (roundWinner === "computer"){
            computerScore++;
            p.textContent = "COMPUTER WIN! Human Score: " + humanScore + " | Computer Score: " + computerScore;   
        } else if (roundWinner === "human"){
            humanScore++;
            p.textContent = "YOU WIN! Human Score: " + humanScore + " | Computer Score: " + computerScore; 
        } else {
            p.textContent = "It's a draw... Human Score: " + humanScore + " | Computer Score: " + computerScore; 
        }
        results.appendChild(p);
    }

    if (winner === "human"){
        textWinner("human");
    } else if (winner === "computer"){
        textWinner("computer");
    } else {
        textWinner("draw");
    }
    
    if (humanScore === 5) {
        finalWinner("human");
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        finalWinner("computer");
        humanScore = 0;
        computerScore = 0;
    }
}