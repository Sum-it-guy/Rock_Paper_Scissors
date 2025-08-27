//fetching all the importent reference of elements
let your_score = document.querySelector(".your_score");
let computer_score = document.querySelector(".computer_score");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const start_btn = document.querySelector(".start_btn");
const y_choice = document.querySelector(".y_choice");
const c_choice = document.querySelector(".c_choice");

//logic of getting computer choices

function getComputerChoices(){
    let value = Math.floor(Math.random()*3);
    console.log(value);

    if(value == 0){
        c_choice.textContent ="Rock";
    }

    else if(value == 1){
        c_choice.textContent ="Paper";
    }

    else{
        c_choice.textContent="Scissors";
    }
}

start_btn.addEventListener("click",getComputerChoices);



