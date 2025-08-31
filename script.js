//fetching all the importent reference of elements
let your_score = document.querySelector(".your_score");
let computer_score = document.querySelector(".computer_score");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const start_btn = document.querySelector(".start_btn");
const y_choice = document.querySelector(".y_choice");
const c_choice = document.querySelector(".c_choice");
const instruction = document.querySelector(".instruction div");
const choices = document.querySelector("#choices");
const div_choice = document.querySelector(".div_choice");
const start_id = document.querySelector("#start");


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

//getting human choices event delegation baby

choices.addEventListener("click" ,(event)=>{
    const target = event.target;

    if(target.classList.contains('rock')){
        y_choice.textContent = "Rock";
        human_choice = "rock";
        play(human_choice,getComputerChoices());
    }

    else if(target.classList.contains('paper')){
         y_choice.textContent = "Paper";
        human_choice = 'paper';
        play(human_choice,getComputerChoices());
    }

    else{    
        y_choice.textContent = "Scissors";
        human_choice = 'scissors';
        play(human_choice,getComputerChoices());
    }

});



//playground functon 

function play(human,computer){

    console.log(human);

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

    /* each round logic*/
    if(ComputerScore > playerScore){
        instruction.textContent = `Computer is ahead`;
    }

    else if(playerScore > ComputerScore){
        instruction.textContent = `You are ahead`;
    }

    else{
        instruction.textContent = `Tie Now`;
    }

    /*declaring winner*/
    if(playerScore == 5 || ComputerScore == 5){

        if(playerScore > ComputerScore){
            instruction.textContent = "You Won! Congratulation";
        }

        else if(playerScore < ComputerScore){
            instruction.textContent = "You Loss!";
        }

        else{
            instruction.textContent = "Tie!";
        }


        /*after five rounds the button will disapear*/
        choices.classList.add("hidden");

        //Play Again button append as soon as winner declared
        const restart = document.createElement("button");
        restart.textContent = "Play Again";
        restart.style.background ="rgb(236,236,239)";
        restart.style.color ="rgb(10, 211, 16)";
        restart.style.padding = "15px 40px";
        restart.style.borderRadius = "20px";
        restart.classList.add("restart");

        start_id.append(restart);
    

        /*Play_Again*/
        //hovering effect
        restart.addEventListener("mouseover",()=>{
            restart.style.background = "rgb(10, 211, 16)";
            restart.style.color = "rgb(236,236,239)";
        });

        restart.addEventListener("mouseout",()=>{
            restart.style.color = "rgb(10, 211, 16)";
            restart.style.background = "rgb(236,236,239)";
        });

    /*reset everything*/
    restart.addEventListener("click",()=>{
     playerScore = 0;
     ComputerScore = 0;
     restart.remove(); //remove it so it dosent pile up in memeory
     restart.style.display = "none";
     start_btn.style.display = "block";
     your_score.textContent = 0;
     computer_score.textContent = 0;
     instruction.textContent = "Play again Champ!";
    
});
    }



    your_score.textContent =playerScore;
 
    computer_score.textContent = ComputerScore;

}



/*start button : starting the game*/
   //toggeling classes

   start_btn.addEventListener("click",()=>{
       start_btn.style.display = "none";
      choices.classList.remove("hidden");
      instruction.textContent = "Now ! make your move Champ!"
   });








 













