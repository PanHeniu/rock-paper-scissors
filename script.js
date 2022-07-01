let roundNo = document.getElementById('round-no');
let roundPlayer = document.getElementById('player-select');
let roundComputer = document.getElementById('computer-select');
let roundResult = document.getElementById('round-result');
let roundScore = document.getElementById('score');
let roundTotalResult = document.getElementById('total-result');

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let playAgain = document.getElementById('reset');

// Variables to keep track of scores and rounds. 
let rounds = 0;
let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click', game);

// The main game function. 
function game (e) {
    const computerSelection = computerPlay();
    const playerSelection = e.target.id; // rock, paper, scissors value comes from the element's id in html
    
    // adds the CSS 'clicked' class
    const item = document.querySelector(`#${playerSelection}`);
    item.classList.add('clicked');

    const round = playRound(playerSelection, computerSelection);
    if (playerScore < 5 && computerScore < 5) {
        roundNo.textContent = `ROUND: ${rounds + 1}`;
        roundPlayer.textContent = 'Player: ' + playerSelection;
        roundComputer.textContent = 'Computer: ' + computerSelection;
        roundResult.textContent = round;
    
        if (round.includes('Win!')) {
            roundScore.textContent = `Player: ${++playerScore} Computer: ${computerScore}`;
            rounds++;
        } else if (round.includes('Lose!')) {
            roundScore.textContent = `Player: ${playerScore} Computer: ${++computerScore}`;
            rounds++;
        } else {
            rounds++;
        }
    }
    totalScore();
}

// Runs when one of the players has scored 5 points i.e. won the game.
function totalScore () {
    if (playerScore === 5 && playerScore > computerScore) {
        roundTotalResult.textContent = `You won! Congrats!`;
    } else if (computerScore === 5 && playerScore < computerScore) {
        roundTotalResult.textContent = `You lost! Better luck next time!`;
    }
}

// Assigns a random value from 0 to 2 and chooses one of the elements based on that.
function computerPlay() {
    let randomSelection = Math.floor(Math.random() * 3);
    if (randomSelection === 0) {
        return 'rock';
    } else if (randomSelection === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Paper beats Rock.';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock beats Scissors.';
    } else if (playerSelection === computerSelection) {
        return `It's a Tie. You both chose ${playerSelection}.`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper beats Rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Scissors beat Paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win! Scissors beat Paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock beats Scissors.';
    }
}

const box = document.querySelectorAll('.box');
box.forEach(box => box.addEventListener('transitionend', removeClicked));

// Removes the CSS 'clicked' class.
function removeClicked(e) {
    if (e.propertyName !== 'transform') {
        return;
    }
    this.classList.remove('clicked');
}

// Resets everything after clicking the 'play again' button.
playAgain.addEventListener('click', function() {
    rounds = 0;
    playerScore = 0;
    computerScore = 0;
    roundNo.textContent = '';
    roundPlayer.textContent = '';
    roundComputer.textContent = '';
    roundResult.textContent = '';
    roundScore.textContent = '';
    roundTotalResult.textContent = '';
})
