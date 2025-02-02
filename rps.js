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