function getComputerChoice() {
    let pc_choice = Math.random();
    if (pc_choice > 0 && pc_choice <= 0.333)
    {
        return "rock"
    }
    else if (pc_choice > 0.333 && pc_choice <= 0.666)
    {
        return "paper"
    }
    else return "scissors"
}

console.log(getComputerChoice());

function getHumanChoice() {
    let human_choice = prompt("Choose Rock, Paper or Scissors: ");
    human_choice = human_choice.toLowerCase();
    return human_choice;
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") 
    {
        if (computerChoice === "scissors") 
        {
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        }
        else if (computerChoice === "paper")
        {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        }
        else
        {
            console.log("It's a tie.")
        }
    }
    else if (humanChoice === "paper")
    {
        if (computerChoice === "rock")
        {
            console.log("You win! Paper beats Rock.");
            humanScore++;
        }
        else if (computerChoice === "scissors")
        {
            console.log("You lose! Scissors beat Paper.");
            computerScore++;
        }
        else
        {
            console.log("It's a tie.")
        }
    }
    else
    {
        if (computerChoice === "paper")
        {
            console.log("You win! Scissors beat Paper.")
            humanScore++;
        }
        else if (computerChoice === "rock")
        {
            console.log("You lose! Rock beats Scissors.")
            computerScore++;
        }
        else
        {
            console.log("It's a tie.")
        }
    }
}