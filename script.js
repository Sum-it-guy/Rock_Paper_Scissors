//fetching all the importent reference of elements
let your_score = document.querySelector(".your_score");
let computer_score = document.querySelector(".computer_score");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const start_btn = document.querySelector(".start_btn");
const y_choice = document.querySelector(".y_choice");
const c_choice = document.querySelector(".c_choice");

//setting up global values 
let playerScore = 0;
let ComputerScore = 0;
let human_choice =null;

//logic of getting computer choices

function getComputerChoices(){
    let value = Math.floor(Math.random()*3);

    if(value == 0){
        c_choice.textContent ="Rock";
        return "rock";
    }

    else if(value == 1){
        c_choice.textContent ="Paper";
        return "paper";
    }

    else{
        c_choice.textContent="Scissors";
        return "scissors";
    }
}

//getting human choices 

function get_human_choices(){
     rock.addEventListener("click",()=>{y_choice.textContent = "Rock";
                                            human_choice  = "rock";
                                        });
     paper.addEventListener("click",()=>{y_choice.textContent = "Paper";
                                        human_choice =  "paper";
     });
     scissors.addEventListener("click",()=>{y_choice.textContent = "Scissors";
                                        human_choice = "scissors";
     });
}


//playground functon 




function play(human,computer){

    

     if(human == "rock" && computer == "paper"){
        ComputerScore++;
    }
    

    else if(human == "paper" && computer == "scissors"){
        ComputerScore++;
    }

    else if(human == "scissors" && computer == "rock"){
        ComputerScore++;
    }

    else if(human == "rock" && computer == "scissors"){
        playerScore++;
    }

    else if(human == "paper" && computer == "rock"){
        playerScore++;
    }

    else if(human == "scissors" && computer == "paper"){
        playerScore++;
    }

    your_score.textContent =playerScore;
    computer_score.textContent = ComputerScore;

}

start_btn.addEventListener("click",()=>{
    let co = getComputerChoices();
    play(human_choice,co);
});





