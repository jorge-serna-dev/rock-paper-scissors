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