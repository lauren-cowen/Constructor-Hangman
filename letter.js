var word = require('./word');

var letter = function(wordtoGuesss, letterGuessed) {
	this.validLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	this.validInput = function() {
		if(this.validLetters.IndexOf(letterGuessed)!=-1) {
			return true;
		}
	}

	this.compare = function() {
		var counter = 0;
    	for (var i = 0; i < wordtoGuesss.guessWord.length; i++) {
        	if (letterGuessed === wordtoGuesss.guessWord.charAt(i)) {
            	wordtoGuesss.spaces[i] = wordtoGuesss.guessWord.charAt(i);
           		counter++;
        	}
    	}
    	wordtoGuesss.progressWord = wordtoGuesss.spaces.join(" ")
    	if (counter === 0) {
        wordtoGuesss.guessesLeft--;

    	}

	}
}

module.exports = letter;