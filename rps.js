const options = ['rock', 'paper', 'scissors'];
let computerWins = 0;
let playerWins =  0;


function getComputerChoice() {
    const randIndex = Math.floor(Math.random() * options.length);
    return options[randIndex];

}

function getPlayerChoice() {
    let playerInput = prompt("Choose 'rock', 'paper' or 'scissors': ").toLowerCase();
    while (!options.includes(playerInput)) {
        playerInput = prompt("Invalid input. Choose 'rock', 'paper' or 'scissors': ").toLowerCase();
    }
    return playerInput;

}

function gameResult(computer, player){
    if (computer === player) {
        return 'draw'
    }
    if (computer === 'rock'){
        return player === 'scissors' ? 'computer' : 'player';
    }
    if(computer === 'paper'){
        return player === 'rock' ? 'computer' : 'player';
    }
    if (computer === 'scissors') {
        return player === 'paper' ? 'computer' : 'player';
    }
}

function playRound() {
    console.log(' ');
    console.log('=======');
    console.log('New Round');
    console.log('=======');
    console.log('Game score:');
    console.table({'Computer': computerWins, 'You': playerWins});
    const computerMove = getComputerChoice();
    const playerMove = getPlayerChoice();
    const result = gameResult(computerMove, playerMove);


    if (result === 'computer'){
        computerWins += 1
        console.log('You Lost :(');
        console.log(`${computerMove} beats ${playerMove}`);
    } else if (result === 'player') {
        playerWins += 1;
        console.log('You Won!');
        console.log(`${playerMove} beats ${computerMove}`);
    } else {
        console.log('Draw!');
    }
}


function playGame() {
    for (let i = 0; i < 5; i++){
        playRound();
    }
    console.log(' ');
    console.log('The Winner is:');
    const winner = computerWins === playerWins 
    ? 'draw' : computerWins > playerWins 
    ? 'computer' : 'player';

    if (winner === 'draw') {
        console.log('NO ONE');
    } else{
        console.log(`${winner.toUpperCase()}!!!`);
    }

    if(confirm('Play Again?')){
        computerWins = 0;
        playerWins = 0;
        playGame()
    } else {
        console.log('Have a nice day!');
    }
}


playGame();


