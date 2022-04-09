function computerPlay(){
    let hand;
    let randomNum;
    randomNum = Math.floor(Math.random()*3) + 1; 
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
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    let message;
    switch (playerSelection){
        case "rock":
            switch (computerSelection){
                case "rock":
                    message = "You Tie!";
                case "paper":
                    message = "You Lose! Paper beats Rock";
                case "scissors":
                    message = "You Win! Rock beats Scissors";
            }
        case "paper":
            switch (computerSelection){
                case "rock":
                    message = "You Win! Paper beats Rock";
                case "paper":
                    message = "You Tie!";
                case "scissors":
                    message = "You Lose! Scissors beats Paper";
            }
        case "scissors":
            switch (computerSelection){
                case "rock":
                    message = "You Lose! Rock beats Scissors";
                case "paper":
                    message = "You Win! Scissors beats Paper";
                case "scissors":
                    message = "You Tie";
            }
    }
    return message;
}