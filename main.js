let computerScore = 0;
let userScore = 0;
let roundNum = 0;

function getPlayerSelection() {
    let input = prompt("Rock, paper, or scissors?");

    while ((input.toLowerCase() !== "rock") && (input.toLowerCase() !== "paper") && (input.toLowerCase() !== "scissors")) {
        alert("Must choose one of the options.");
        input = prompt("Rock, paper, or scissors?");
    }
    return input.toLowerCase();
  }

function getComputerChoice() {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
      }

    let num = getRandomInt(1, 4);

    if (num === 1) {
        return "rock";
    } else if (num === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerChoice) {
    let winner = "";

    if ((playerSelection === "rock" && computerChoice === "scissors") || (playerSelection === "scissors" && computerChoice === "paper") || (playerSelection === "paper" && computerChoice === "rock")) {
        winner = "You won!";
        userScore++;
        roundNum++;
    } else if ((playerSelection === "rock" && computerChoice === "paper") || (playerSelection === "scissors" && computerChoice === "rock") || (playerSelection === "paper" && computerChoice === "scissors")) {
        winner = "The computer won."
        computerScore++;
        roundNum++;
    } else if (playerSelection == computerChoice) {
        winner = "This round was a draw.";
    }

    console.log("Round #" + roundNum);
    console.log(`You chose ${playerSelection}, the computer chose ${computerChoice}. ${winner}`);
    console.log("Your score: " + userScore);
    console.log("Computer score: " + computerScore);
}

function nameWinner() {
    if (userScore >= 3) {
        console.log("You won the game!");
       } else if (computerScore > 3) {
        console.log("Computer won the game");
       } else {
        console.log("Game was a draw!")
       }
}

function playGame() {

    playRound(getPlayerSelection(), getComputerChoice());
    playRound(getPlayerSelection(), getComputerChoice());
    playRound(getPlayerSelection(), getComputerChoice());
    nameWinner();
    playRound(getPlayerSelection(), getComputerChoice());
    nameWinner();
    playRound(getPlayerSelection(), getComputerChoice());
    nameWinner();
} 

console.log(playGame());