


//global variable to keep track of scores of human and computer
 

let humanScore = 0;
let computerScore = 0;




//get Computer Choice 
function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);

    if(num == 0) 
        {
            return "rock";
        }

    else if(num == 1) 
        {
        return "paper";
        }   

    else if(num == 2)
        {
            return "scissors";
        }

        //checked 
}


//get human Choices

function getHumanChoice(){
    let choice = prompt("Enter a choice between\n1. rock\n2. paper\n3. scissors\n","");
    return choice;

    //checked
    
}


//game logic for only one round for now



function playGround(Computer,human){
    //converting user input to lowercase
    const Human = human.toLowerCase();

    if(Computer == Human){
        humanScore++;
        computerScore++;
        console.log(`Your ${Human} tied with Computers ${Computer}!\nTry Again`);
    }

    else if((Computer == "rock" && Human == "paper" )||
            (Computer == "paper" && Human == "scissors")||
            (Computer == "scissors" && Human == "rock")
    )
    
    {
        humanScore++;
        console.log(`You win your ${Human} beat Computers ${Computer}`);
    }

    else{
        computerScore++;
        console.log(`You loose your ${Human} looses to Computers ${Computer}`);
    
    }

    console.log(`The Scores are\nHuman Score - ${humanScore}\nComputer Score - ${computerScore}`);

}


function playGame(){

    for(let i = 1;i<5;i++){
        const Computer = getComputerChoice();
        const human = getHumanChoice();

        playGround(Computer,human);
    }

    if(computerScore > humanScore){
        console.log("Computer's Win");
    }

    else if(computerScore == humanScore){
        console.log("Tie");
    }

    else{
        console.log("You wins by")
    }
   
}


playGame();

