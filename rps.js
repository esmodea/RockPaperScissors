function numberGenerator(n) {
    let number = Math.floor(Math.random() * (n + 1));
    for (; number === 0;) {
        number = Math.floor(Math.random() * (n + 1));
    }
    return number;
}
let usrWinCount = 0;
let compWinCount = 0;
function compPlay() {
    /*Generate a number between 1 and 3 with a function*/
    let compChoice = numberGenerator(3);
    /*Use the generated number to select rock paper or scissors*/
    let result = "Something went seriously wrong";
    if (compChoice == 1) {
        result = "Rock";
    } else if (compChoice == 2) {
        result = "Paper";
    } else if (compChoice == 3) {
        result = "Scissors";
    };
    /*Return with rock paper or scissors*/
    return result;
};
function playRound(usrPick, compPick) {
    const tie = "Nobody Wins. It's a Tie!";
    const loss = "You lose!";
    const win = "You Win!";
    let finalWinner = tie;
    /*Create Boolean to decide if usr wins or comp wins using if statements*/
    compPick = compPlay();
    if (usrPick == "paper" && compPick == "Scissors" || usrPick == "rock" && compPick == "Paper" || usrPick == "scissors" && compPick == "Rock") {
        finalWinner = loss;
        ++compWinCount;
        return checkWinner(finalWinner);
    } else if (usrPick == "paper" && compPick == "Rock" || usrPick == "rock" && compPick == "Scissors" || usrPick == "scissors" && compPick == "Paper") {
        finalWinner = win;
        ++usrWinCount;
        return checkWinner(finalWinner);
    } else {
        return checkWinner(finalWinner);
    };
    /*Create string that uses Boolean to apply text that explains the victor and why*/
    function checkWinner(check) {
        let result = tie;
        if (check !== tie) {
            result = (check == win) ? "You Win! " + usrPick + " beats " + compPick + "." : "You Lose! " + compPick + " beats " + usrPick;
        } else if (result == tie) {
            ++usrWinCount;
            ++compWinCount;
        };
        const displayResult = document.createElement('div');
        displayResult.classList.add('gameResult');
        displayResult.textContent = String(result);
        rpsResult.appendChild(displayResult);
        const usrScore = document.querySelector('.score > .user');
        usrScore.textContent = usrWinCount;
        const compScore = document.querySelector('.score > .computer');
        compScore.textContent = compWinCount;
        return result;
    };
};
/*Make a for loop that repeats only 5 times */
function game(choice) {
    for (let i = 1; i < 5 && usrWinCount < 3 && compWinCount < 3; i++) {
        let currentGame = playRound(choice);
        if (currentGame == null) currentGame = prompt("try again to answer?")
        if (currentGame.substr(0, 7) == "Nobody ") {
            usrWinCount++;
            compWinCount++;
            console.log(usrWinCount);
            console.log(compWinCount);
        } else if (currentGame.substr(0, 7) == "You Win") {
            usrWinCount++;
            console.log(usrWinCount);
            console.log(compWinCount);
        } else if (currentGame.substr(0, 8) == "You Lose") {
            compWinCount++;
            console.log(usrWinCount);
            console.log(compWinCount);
        };
        
    };
/*Name a winner*/
    if (usrWinCount > compWinCount) {
        let tryAgain = false;
        if (tryAgain == true) {
            game(choice);
        };
    } else if (usrWinCount < compWinCount) {
        let tryAgain = false;
        if (tryAgain == true) {
            game(choice);
        };
    } else {
        let tryAgain = false;
        if (tryAgain == true) {
            game(choice);
        } else return "Death does not define us, only what we leave behind.";
    };
};

const rpsButtons = document.querySelectorAll('.rps-buttons');
rpsButtons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(String(button.id));
    });
});

const rpsResult = document.querySelector('.displayResult');
const scoreboard = function(choice){
    game(choice);
};

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => {
    usrWinCount = 0;
    compWinCount = 0;
    const usrScore = document.querySelector('.score > .user');
    usrScore.textContent = usrWinCount;
    const compScore = document.querySelector('.score > .computer');
    compScore.textContent = compWinCount;
    const removeResult = document.querySelectorAll('.gameResult');
    removeResult.forEach(gameResult => {
        gameResult.remove();
    });
})