function getComputerChoice(){
    num = Math.random();
    if(num < 0.333)
        return "rock";
    else if(num < 0.667)
        return "paper";
    else
        return "scissors";
}

function getHumanChoice(){
    humanChoice = prompt("Pick either rock, paper, or scissors.");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function playRound(humanChoice,computerChoice){
    //computer wins
    if(computerChoice=="rock" && humanChoice=="scissors"){
        console.log("Computer wins!");
        computerScore++;
    }
    else if(computerChoice=="paper" && humanChoice=="rock"){
        console.log("Computer wins!");
        computerScore++;
    }
    else if(computerChoice=="scissors" && humanChoice=="paper"){
        console.log("Computer wins!");
        computerScore++;
    }
    //human wins
    else if(computerChoice=="rock" && humanChoice=="paper"){
        console.log("Human wins!");
        humanScore++;
    }
    else if(computerChoice=="scissors" && humanChoice=="rock"){
        console.log("Human wins!");
        humanScore++;
    }
    else if(computerChoice=="paper" && humanChoice=="scissors"){
        console.log("Human wins!");
        humanScore++;
    }
    //tie
    else if(computerChoice==humanChoice)
        console.log("Tie");

}

function playGame(){
    humanScore = 0;
    computerScore = 0;
    
    for(i=1;i<=5;i++){
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
    }
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    if(humanScore > computerScore)
        console.log("Human wins the game!");
    else if(humanScore < computerScore)
        console.log("Computer wins the game!");
    else
        console.log("It's a tie!");
    console.log("Game Over!");
    
}

playGame();