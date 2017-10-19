var letter = require('./letter')

module.exports = word = function(guessWord) {
	this.guessWord = guessWord;

	this.spaces =[];
	this.progressWord = "";
	this.guessesLeft = 10;


	this.blanks = function() {
		for(i=0;i<this.guessWord.length; i++) {
			this.spaces.push("_");
		}

		this.progressWord = this.spaces.join(" ");

	}

	this.printToScreen = function() {
		console.log(this.progressWord);
		
		}
}

