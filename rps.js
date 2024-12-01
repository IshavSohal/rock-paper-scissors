const NUM_ROUNDS = 5;
const OPTIONS = ["rock", "paper", "scissors"];
let computerWins = 0;
let playerWins = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const restartButton = document.querySelector("#playAgain");

const computerScore = document.querySelector("#computerScore");
const playerScore = document.querySelector("#playerScore");
const computerMove = document.querySelector("#computerMove");
const result = document.querySelector("#result");
const draws = document.querySelector("#draws");

const buttons = document.querySelectorAll(".choice");
buttons.forEach((button) => {
    button.addEventListener("click", () => playRound(button.id));
});

restartButton.addEventListener("click", () => {
    // Q; can we bind the variable values to the text content of these elements?
    computerWins = 0;
    playerWins = 0;
    computerScore.innerText = 0;
    playerScore.innerText = 0;
    draws.innerText = 0;
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    restartButton.hidden = true;
    computerMove.innerHTML = "Do your worst &#128520;";
    result.innerText = "";
});

function getComputerMove() {
    const randIndex = Math.floor(Math.random() * OPTIONS.length);
    const move = OPTIONS[randIndex];
    computerMove.innerHTML = `<img src="./images/${move.at(0).toUpperCase() + move.slice(1)}.png"/>`;
    return move;
}

function gameResult(computer, player) {
    if (computer === player) {
        return "draw";
    }
    if (computer === "rock") {
        return player === "scissors" ? "computer" : "player";
    }
    if (computer === "paper") {
        return player === "rock" ? "computer" : "player";
    }
    if (computer === "scissors") {
        return player === "paper" ? "computer" : "player";
    }
}

function playRound(playerMove, computerMove = getComputerMove()) {
    const winner = gameResult(computerMove, playerMove);

    if (winner === "computer") {
        computerWins += 1;
        computerScore.innerText = computerWins;
        result.innerText = `You Lost :(\n${computerMove} beats ${playerMove}`;
        if (computerWins === 5) gameOver();
    } else if (winner === "player") {
        playerWins += 1;
        playerScore.innerText = playerWins;
        result.innerText = `You Won! \n${playerMove} beats ${computerMove}`;
        if (playerWins === 5) gameOver();
    } else {
        result.innerText = "Draw???!?!??!";
        draws.innerText = +draws.innerText + 1;
    }
}

function gameOver() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    restartButton.removeAttribute("hidden");
    const winner = computerWins === playerWins ? "draw" : computerWins > playerWins ? "computer" : "you";
    result.innerText = `The winner is: ${winner.toUpperCase()}!!!`;

    // disable all buttons
    // declare winner
    // display button allowing user to start again
}
