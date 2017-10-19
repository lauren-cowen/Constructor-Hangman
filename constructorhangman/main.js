var word = require('./word.js');
var letter = require('./letter');
var inquirer = require('inquirer');
var storage = ["harry", "ron", "hermione", "hedwig", "hagrid", "snape", "voldemort", "dumbledore", "malfoy", "mcgonagall"];

function getRandomItem(list) {
    return list[Math.floor(Math.random() * list.length)];
}

var hangmanGame = function() {
    pickWord();
    if (wordtoguess.guessesLeft > 0 && wordtoguess.spaces.indexOf("_") != -1) {
        LetterGuessCallback();
    }
}

var pickWord = function() {
    wordtoguess = new word(getRandomItem(storage));
    wordtoguess.blanks();
    wordtoguess.printToScreen();

}

var guessLetter = function(wordtoguess, letterGuessed) {
    if (letterGuessed.validInput) {
        letterGuessed.compare();
        wordtoguess.printToScreen();
        console.log("Guesses Remaining: " + wordtoguess.guessesLeft)
    } else {
        console.log("invalid input");
    }
}

var LetterGuessCallback = function(answers) {
    if (wordtoguess.guessesLeft > 0 && wordtoguess.spaces.indexOf("_") != -1) {
        inquirer.prompt([{
                type: "input",
                name: 'userGuess',
                message: 'Guess a letter'

            }

        ]).then(function(answers, callback) {

            var newLetter = new letter(wordtoguess, answers.userGuess);
            guessLetter(wordtoguess, newLetter);
            LetterGuessCallback();

        })
    } else {
        inquirer.prompt([{
                type: 'input',
                name: 'playAgain',
                message: 'Would you like to play again?'
            }

        ]).then(function(answers) {
            if (answers.playAgain === "yes") {
                hangmanGame(pickWord);
            }
        })
    }



}

hangmanGame();