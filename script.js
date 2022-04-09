function computerPlay(){
    let hand;
    let randomNum;
    randomNum = Math.floor(Math.random()*3) + 1; 
    switch (randomNum) {
        case 1:
            hand = "Rock";
            break;
        case 2:
            hand = "Paper";
            break;
        
        case 3:
            hand = "Scissors";
            break;
    
    }
    return hand;
}