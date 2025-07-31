
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





