var Word = require("./Word.js");
var inquirer = require("inquirer");

var mysteryArr = ["phone", "cup", "mouse", "computer", "table"];
var currentWord;
var gameState = ["playing", "won", "lost"];
var currentState = 0;

function topMenu(){
    inquirer.prompt([
        {
            type: "confirm",
            name: "topMenu",
            message: "Would you like to play a game?"
        }
    ]).then(function(answers) {
        if (answers.topMenu){
            playGame();
        }
    });
}

function playGame(){
    var randInd = Math.floor(Math.random()*Math.floor(mysteryArr.length));
    currentWord = new Word(mysteryArr[randInd]);

    printGame();
}

function printGame(){
    if (gameState[currentState] === "playing"){
        console.log("|---------------------------|");
        console.log("|-- Word: " + currentWord.printWord() + " --|")

        inquirer.prompt([
            {
                type: 'input',
                name: 'user_guess',
                message: "What is your guess?"
            }
        ]).then(function(answers) {
            currentWord.guessLetter(answers.user_guess);
            if (currentWord.checkDone()){
                currentState = 1;
            } else {
                currentState = 0;
            }
            printGame();
        });
    } else if (gameState[currentState] === "won") {
        console.log("|---------------------------|");
        console.log("|-- You Win! --|")
        reset();
    }
}

function reset(){
    currentWord = "";
    currentState = 0;
    topMenu();
}

topMenu();