const NUM_ROUNDS = 5;
const OPTIONS = ["rock", "paper", "scissors"];
let computerWins = 0;
let playerWins = 0;

function getComputerChoice() {
    const randIndex = Math.floor(Math.random() * OPTIONS.length);
    return OPTIONS[randIndex];
}

function getPlayerChoice() {
    let playerInput;
    do {
        playerInput = prompt("Choose 'rock', 'paper' or 'scissors': ");

        if (!playerInput) {
            return null;
        }
    } while (!OPTIONS.includes(playerInput.toLowerCase()));

    //todo: end the game if the user clicks cancel
    return playerInput.toLowerCase();
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

function playRound() {
    console.log(" ");
    console.log("---------");
    console.log("New Round");
    console.log("---------");
    console.log("Game score:");
    console.table({ Computer: computerWins, You: playerWins });
    const computerMove = getComputerChoice();
    const playerMove = getPlayerChoice();
    if (!playerMove) {
        return null;
    }
    const result = gameResult(computerMove, playerMove);

    if (result === "computer") {
        computerWins += 1;
        console.log("You Lost :(");
        console.log(`${computerMove} beats ${playerMove}`);
        return "computer";
    } else if (result === "player") {
        playerWins += 1;
        console.log("You Won!");
        console.log(`${playerMove} beats ${computerMove}`);
        return "player";
    } else {
        console.log("Draw!");
        return "draw";
    }
}

function playGame() {
    console.log("==============================");
    console.log("Welcome to Rock Paper Scissors");
    console.log("Rules of game: ");
    console.log("1. Rock beats scissors");
    console.log("2. Paper beats rock");
    console.log("3. Scissors beats paper");
    console.log("Good luck!");
    console.log("==============================");
    let res;
    for (let i = 0; i < NUM_ROUNDS; i++) {
        res = playRound();
        if (!res) {
            break;
        }
    }
    console.log(" ");
    console.log("Final game score:");
    console.table({ Computer: computerWins, You: playerWins });
    console.log("The Winner is:");
    const winner = computerWins === playerWins ? "draw" : computerWins > playerWins ? "computer" : "you";

    if (winner === "draw") {
        console.log("NO ONE!!!");
    } else {
        console.log(`${winner.toUpperCase()}!!!`);
    }

    if (confirm("Play Again?")) {
        computerWins = 0;
        playerWins = 0;
        playGame();
    } else {
        console.log("Have a nice day!");
    }
}

playGame();
