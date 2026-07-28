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
    return prompt("¿Piedra, papel o tijera?");
}

console.log(getHumanChoice());