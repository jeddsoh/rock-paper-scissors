function game() {
    function playRound() {
        // Ask for player choice
        let playerChoice = function() {
            prompt("Grass, Fire, or Water?", "");
        }
        
        // Ask again if invalid response
        if (playerChoice !== ("grass" || "water" || "fire" || "Grass" || "Water" || "Fire")) {
            alert("You must type Grass, Water, or Fire");
            playerChoice();
        }
    }

    playRound();
}

game();

  