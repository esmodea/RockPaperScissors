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
    console.log(result);
    return result;
}
function playRound(playerSelection, computerSelection) {
    /*Take playerSelection and convert it to "Rock, Paper, or Scissors"*/
    let playerDecision = playerSelection.toLowerCase();
    console.log(playerDecision);
    let tie = "Nobody Wins. It's a Tie!"
    let loss = "You lose!"
    let win = "You Win!"
    let finalWinner = tie;
    /*Create Boolean to decide if player wins or computer wins using if statements*/
    computerSelection = computerPlay();
    if (playerDecision == "paper" && computerSelection == "Scissors" || playerDecision == "rock" && computerSelection == "Paper" || playerDecision == "scissors" && computerSelection == "Rock") {
        finalWinner = loss;
        return checkWinner(finalWinner);
    } else if (playerDecision == "paper" && computerSelection == "Rock" || playerDecision == "rock" && computerSelection == "Scissors" || playerDecision == "scissors" && computerSelection == "Paper") {
        finalWinner = win;
        return checkWinner(finalWinner);
    } else {
        return checkWinner(finalWinner);
    }
    /*Create string that uses Boolean to apply text that explains the victor and why*/
    function checkWinner(check) {
        let result = tie;
        if (check != tie) {
            result = (check == win) ? "You Win! " + playerSelection + " beats " + computerSelection + "." : "You Lose! " + computerSelection + " beats " + playerSelection;
        }
        console.log(check);
        return result;
    }
}
/*Make a for loop that repeats only 5 times */
function game(choice) {
    let playerWinCount = 0;
    let computerWinCount = 0;
    for (let i = 1; i < 5 && playerWinCount < 3 && computerWinCount < 3; i++) {
        let choice = prompt("Rock, Paper, Or Scissors?");
        let currentGame = playRound(choice);
        if (currentGame == null) currentGame = prompt("try again to answer?")
        if (currentGame.substr(0, 7) == "Nobody ") {
            playerWinCount++;
            computerWinCount++;
            console.log(playerWinCount);
            console.log(computerWinCount);
        } else if (currentGame.substr(0, 7) == "You Win") {
            playerWinCount++;
            console.log(playerWinCount);
            console.log(computerWinCount);
        } else if (currentGame.substr(0, 8) == "You Lose") {
            computerWinCount++;
            console.log(playerWinCount);
            console.log(computerWinCount);
        }
        
    }
/*Name a winner*/
    if (playerWinCount > computerWinCount) {
        let tryAgain = confirm("You win the set! Try again?")
        if (tryAgain == true) {
            game(choice);
        } 
    } else if (playerWinCount < computerWinCount) {
        let tryAgain = confirm("You dun F**ked up buddy. Try again?")
        if (tryAgain == true) {
            game(choice);
        }
    } else {
        let tryAgain = confirm("Good job, you're certainly not.. dumber than a random number generator. Try again?")
        if (tryAgain == true) {
            game(choice);
        } else return "Death does not define us, only what we leave behind.";
    }
}
function countUp(a, b, c, d) {
    if (a != null) {
        let resultA = ++a;
        console.log(resultA)
    }
    if (b != null) {
        let resultB = ++b;
        console.log(resultB)
    }
    if (c != null) {
        let resultC = ++c;
        console.log(resultC)
    }
    if (d != null) {
        let resultD = ++d;
        console.log(resultD)
    }
}