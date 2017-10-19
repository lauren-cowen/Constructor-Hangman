// var letter = require('letter');
var word = require('./word.js');
var letter = require('./letter');
var inquirer = require('inquirer');

// var hangmanGame = function(callback) {

// 	var wordtoguess;
// 	var playAgain = false;
// 	var newGame = true;

// 	if(newGame) {
// 		callback (
// 				pickWord();
// 			)
// 	}

// 	else{
// 		callback(

// 			)
// 	}

	

// 	pickWord();
	



// }

// hangmanGame();


// var guessALetter = function (callback) {
// 		console.log("GuessALetter");
// 		var letterGuessed = new letter(wordtoguess, process.argv[2]);
// 		if(letterGuessed.validInput) {
// 			letterGuessed.compare();
// 			wordtoguess.printToScreen();
// 		 }
// 		 if(wordtoguess.guessesLeft>0 && wordtoguess.spaces.indexOf("_") != -1) {
// 		callback(
// 			guessALetter();
// 			)
// 		 }

// 	 else{
	 	
// 	 	console.log("Would you like to play again?");
// 	 	if(process.argv[2]==="yes") {
// 	 		callback(
// 	 			pickWord();
// 	 		)

// 	 	};


// 		 }
// 	}

var pickWord = function() {
		wordtoguess = new word("harry");
		wordtoguess.blanks();
		wordtoguess.printToScreen();
		return word;
	}

var guessLetter = function(wordtoguess, letterGuessed) {
	if(letterGuessed.validInput) {
		letterGuessed.compare();
		wordtoguess.printToScreen();
	}
} 


var hangmanGame = function(callback) {
	
	var wordtoguess = callback();
	console.log(JSON.stringify(wordtoguess));
	var playAgain = false;
	
	inquirer.prompt([
		{
			type: "input",
			name: 'userGuess',
			message: 'Guess a letter'
		}

		]).then(function(answers) {

			var newLetter = new letter(wordtoguess, answers.userGuess);
			guessLetter(wordtoguess, newLetter);



	})
}

hangmanGame(pickWord);

