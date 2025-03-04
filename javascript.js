function getComputerChoice(){
    num = Math.random();
    if(num < 0.333)
        return "rock";
    else if(num < 0.667)
        return "paper";
    else
        return "scissors";
}
for(i=0;i<20;i++){
    console.log(getComputerChoice());
}

