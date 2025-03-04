
humanScore = 0;
computerScore = 0;


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
