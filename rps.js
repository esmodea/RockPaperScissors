let computerSelection = computerPlay();
function numberGenerator(n) {
    let number = Math.floor(Math.random() * (n + 1));
    for (; number === 0;) {
        number = Math.floor(Math.random() * (n + 1));
    }
    return number;
}
function computerPlay() {
    /*Generate a number between 1 and 3 with a function*/
    let computerDecision = numberGenerator(3);
    /*Use the generated number to select rock paper or scissors*/
    let result = "Something went seriously wrong";
    if (computerDecision == 1) {
        result = "Rock";
    } else if (computerDecision == 2) {
        result = "Paper";
    } else if (computerDecision == 3) {
        result = "Scissors";
    }
    /*Return with rock paper or scissors*/
    return result;
    console.log(computerDecision + " " + result);
}
function playRound(playerSelection, computerSelection) {
    /*Take playerSelection and convert it to "Rock, Paper, or Scissors"*/
    let playerDecision = playerSelection.toLowerCase();
    let tie = "Nobody Wins. It's a Tie!"
    let loss = "You lose!"
    let win = "You Win!"
    let finalWinner = tie;
    /*Create Boolean to decide if player wins or computer wins using if statements*/
    if (playerDecision == "paper" && computerSelection == "Scissors" || playerDecision == "rock" && computerSelection == "Paper" || playerDecision == "scissors" && computerSelection == "Rock") {
        finalWinner = loss;
    } else if (playerDecision == "paper" && computerSelection == "Rock" || playerDecision == "rock" && computerSelection == "Scissors" || playerDecision == "scissors" && computerSelection == "Paper") {
        finalWinner = win;
    }
    function checkWinner(playerSelection, computerSelection) {
        if (finalWinner != tie) {
            let result = (finalWinner == win) => "You Win! " + playerSelection + " beats " + computerSelection + "." : "You Lose! " + computerSelection + " beats " + playerSelection;
        }
    }
    /*Create string that uses Boolean to apply text that explains the victor and why*/
    console.log(playerDecision);
    console.log(finalWinner);
}
