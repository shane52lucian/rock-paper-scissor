// accept player choose

let playerChoose = 'rock';

// determine computer choose

let computerChoose = compChoose();

// determine appropriate comparison function

if (playerChoose === 'rock') {
    // run rock function

}

if (playerChoose === 'paper') {
    // run paper function
}

if (playerChoose === 'scissors') {
    // run scissors function
}


// pass computer choose to comparison function
// determine victor
// update score


// FUNCTION DECLARATIONS 

function compChoose() {
    return Math.floor(Math.random() * 3);
}