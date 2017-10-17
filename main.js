// var letter = require('letter');
var word = require('./word.js');
var letter = require('./letter');



var hangmanGame = function(callback) {

	var wordtoguess;
	var playAgain = false;
	var newGame = true;

	if(newGame) {
		callback (
				pickWord();
			)
	}

	else{
		callback(

			)
	}

	
	
	

	pickWord();
	



}

hangmanGame();

var pickWord = function(callback) {
		wordtoguess = new word("harry");
		wordtoguess.blanks();
		wordtoguess.printToScreen();
		callback(
			guessALetter();

			)
	}
var guessALetter = function (callback) {
		console.log("GuessALetter");
		var letterGuessed = new letter(wordtoguess, process.argv[2]);
		if(letterGuessed.validInput) {
			letterGuessed.compare();
			wordtoguess.printToScreen();
		 }
		 if(wordtoguess.guessesLeft>0 && wordtoguess.spaces.indexOf("_") != -1) {
		callback(
			guessALetter();
			)
		 }

	 else{
	 	
	 	console.log("Would you like to play again?");
	 	if(process.argv[2]==="yes") {
	 		callback(
	 			pickWord();
	 		)

	 	};


		 }
	}