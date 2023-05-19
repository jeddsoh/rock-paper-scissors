// USER CLICKS BTN
// • Register their selection
// • Generator random computer selection
// • Identify winner
// • Update score
// • Update alert
// • Add point towards 3/5 games
// • Check for game over (If anyone has won 3 games)

let userScore = 0;
let computerScore = 0;
let winner = "";

const alertWrapper = document.querySelector(".alertWrapper");
const alertText = document.querySelector("#alertText");


const rock = document.querySelector("#rock");
rock.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
});

const paper = document.querySelector("#paper");
paper.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
});

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);

    if (num == 0) {
        num = "rock";
    } else if (num == 1) {
        num = "paper";
    } else if (num == 2) {
        num = "scissors";
    }

    return num;
}

function updateScore() {
    const userCount = document.querySelector("#userCount");
    const computerCount = document.querySelector("#computerCount");

    userCount.textContent = `${userScore}`;
    computerCount.textContent = `${computerScore}`;
}

function checkGameEnd() {
    if (userScore == 3) {
        winner = "You";
    } else if (computerScore == 3) {
        winner = "The computer";
    }

    if ((userScore == 3) || (computerScore == 3)) {
        const buttons = document.querySelector(".buttons");
        const instructions = document.querySelector(".instructions")
        buttons.style.display = "none";
        alertWrapper.style.display = "none";

        if (winner == "You") {
            instructions.style.fontWeight = "bold";
            instructions.style.color = "#22c55e";
            instructions.style.fontSize = "2rem"
            instructions.textContent = `${winner} won the game!`;
        } else if (winner == "The computer") {
            instructions.style.fontWeight = "bold";
            instructions.style.color = "#ef4444";
            instructions.style.fontSize = "2rem"
            instructions.textContent = `${winner} won the game...`;
        }
    }
}

function playRound(userChoice, computerChoice) {
    if (((userChoice == "rock") && (computerChoice == "scissors")) || ((userChoice == "scissors") && (computerChoice == "paper")) || ((userChoice == "paper") && (computerChoice == "rock"))) {
        alertWrapper.style.display = "flex";
        alertWrapper.style.border = "solid 2px #22c55e";
        alertText.style.color = "#22c55e";
        alertText.textContent = "You won this round!"
        userScore++;
    } else if (((userChoice == "rock") && (computerChoice == "paper")) || ((userChoice == "scissors") && (computerChoice == "rock")) || ((userChoice == "paper") && (computerChoice == "scissors"))) {
        alertWrapper.style.display = "flex";
        alertWrapper.style.border = "solid 2px #ef4444";
        alertText.style.color = "#ef4444";
        alertText.textContent = "The computer won this round!"
        computerScore++;
    } else {
        alertWrapper.style.display = "flex";
        alertWrapper.style.border = "solid 2px #f59e0b"
        alertText.style.color = "#f59e0b"
        alertText.textContent = "Draw! Nobody gained a point."
    }

    updateScore();
    checkGameEnd();

    console.log(`userChoice = ${userChoice}. computerChoice = ${computerChoice}.`);

    console.log(`userScore: ${userScore}. computerScore: ${computerScore}`);
    
    if (winner != "") {
       console.log(`${winner} won the game!`);
    }
}