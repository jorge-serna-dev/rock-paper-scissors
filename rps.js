function getComputerChoice() {
    let pc_choice = Math.random();
    if (pc_choice <= 0.333)
    {
        return "rock"
    }
    else if (pc_choice <= 0.666)
    {
        return "paper"
    }
    else return "scissors"
}

function getHumanChoice() {
    let human_choice = prompt("Choose Rock, Paper or Scissors: ");

    if (human_choice === null) {
        return null; // User cancelled the prompt
    }

    human_choice = human_choice.toLowerCase();

    // Validate the choice
    if (!["rock", "paper", "scissors"].includes(human_choice)) {
        console.log("Invalid choice! Please choose rock, paper, or scissors.");
        return getHumanChoice(); // Recursively ask again
    }

    return human_choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return;
    }
    
    // Simplified win conditions
    const winConditions = {
        rock: "scissors",
        paper: "rock", 
        scissors: "paper"
    };
    
    if (winConditions[humanChoice] === computerChoice) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
}

// Game loop function
function playGame(rounds = 5) {
    humanScore = 0;
    computerScore = 0;
    
    for (let i = 0; i < rounds; i++) {
        console.log(`\n--- Round ${i + 1} ---`);
        
        const humanChoice = getHumanChoice();
        if (humanChoice === null) {
            console.log("Game cancelled.");
            return;
        }
        
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
    
    // Final results
    console.log("\n=== FINAL RESULTS ===");
    if (humanScore > computerScore) {
        console.log("🎉 You won the game!");
    } else if (computerScore > humanScore) {
        console.log("💻 Computer won the game!");
    } else {
        console.log("🤝 It's a tie game!");
    }
}

// Start the game
playGame();