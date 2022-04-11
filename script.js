function computerPlay() {
    let hand;
    let randomNum;
    randomNum = Math.floor(Math.random() * 3) + 1;
    switch (randomNum) {
        case 1:
            hand = "rock";
            break;
        case 2:
            hand = "paper";
            break;

        case 3:
            hand = "scissors";
            break;

    }
    
    return hand;
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let message;
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    message = "You Tie!";
                    break;
                case "paper":
                    message = "You Lose! Paper beats Rock";
                    computerScore++;
                    break;
                case "scissors":
                    message = "You Win! Rock beats Scissors";
                    humanScore++;
                    break;
            }
            break;
        case "paper":
            
            switch (computerSelection) {
                case "rock":
                    message = "You Win! Paper beats Rock";
                    humanScore++;
                    break;
                case "paper":
                    message = "You Tie!";
                    break;
                case "scissors":
                    message = "You Lose! Scissors beat Paper";
                    computerScore++;
                    break;
            }
            break;
        case "scissors":
            
            switch (computerSelection) {
                case "rock":
                    message = "You Lose! Rock beats Scissors";
                    computerScore++;
                    break;
                case "paper":
                    message = "You Win! Scissors beat Paper";
                    humanScore++;
                    break;
                case "scissors":
                    message = "You Tie";
                    break;

            }
            break;

    }
    
    return message;
}

function game(){
    computerScore = 0;
    humanScore = 0;
    for (let x = 0; x < 5; x++) {
        playerSelection = prompt("Please enter Rock, Paper or Scissors","");
        computerSelection = computerPlay();
        console.log(`The computer has selected ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
        if (computerScore > humanScore) {
            console.log(`You're losing ${computerScore} to ${humanScore}.`);
        }
        else if (humanScore > computerScore){
            console.log(`You're winning ${humanScore} to ${computerScore}.`);
        }
        else{
            console.log(`You're tied ${humanScore} to ${computerScore}.`);
        }
    }
    if (computerScore > humanScore) {
        console.log(`You lost ${computerScore} to ${humanScore}.`);
    }
    else if (humanScore > computerScore){
        console.log(`You won ${humanScore} to ${computerScore}.`);
    }
    else{
        console.log(`You tied ${humanScore} to ${computerScore}.`);
    }
}

let computerScore;
let humanScore;