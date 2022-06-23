function computerPlay() { // this function randomly returns either rock, paper or scissors
    let randomSelection = Math.floor(Math.random() * 3); // Math.random() generates and returns a random float in the range: 0 to < 1 (but not 1!). Math.floor() rounds this number downwards to the closest integer. Times three, so that the random number is in the range: 0 to < 3. So, possible results are: 0, 1 and 2. 
    if (randomSelection === 0) {
        return 'rock';
    } else if (randomSelection === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
    //console.log(randomSelection);
}

function playerPlay() { // the function prompts player to enter rock, paper or scissors 
    while (true) {
        let value = (prompt('Rock, paper, scissors?')).toLowerCase(); // matches the computer's case i.e. lower
        //console.log(value);
        if (value === 'rock' || value === 'paper' || value === 'scissors') {
            return value; // returns only one of these values; otherwise prompts again
        }
    }
}


function playRound(playerSelection, computerSelection) { // function compares different vaues and determines the winner of the round
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Paper beats Rock.';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock beats Scissors.';
    } else if (playerSelection === computerSelection) { // TIE
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

function game() { // plays a 5 round game that keeps score and reports a winner or loser at the end
    let playerScore = 0; // variables to keep score
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = playerPlay(); // keeps the result of the selection function in a variable, so it can be used later (e.g. to show what was chosen)
        const computerSelection = computerPlay();
        
        const round = playRound(playerSelection, computerSelection);
        console.log(`ROUND: ${i + 1}`);
        console.log('Player: ' + playerSelection);
        console.log('Computer: ' + computerSelection);
        console.log(round);

        if (round.includes('Win!')) { // if the string from the playRounf function returns a string that contains 'Win!' increment player score by 1
            playerScore++;
        }
        else if (round.includes('Lose!')) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log(`The total score is ${playerScore}:${computerScore}. You won! Congrats!`);
    } else if (playerScore < computerScore) {
        console.log(`The total score is ${playerScore}:${computerScore}. You lost! Better luck next time!`);
    } else {
        console.log(`The total score is ${playerScore}:${computerScore}. Must be a tie!`);
    }
}

game();