//calls upon the letter.js file
var Letter = require("./letter.js");

function Word(word) {
    this.word = word;
    this.letterArray = [];
    this.underscoreArray = [];
    this.wordSplitter = function () {
        for (var i = 0; i<this.word.length; i++) {
            this.letterArray[i] = "_";
        }
    }
    this.showTheLetters = function() {
		for (var j = 0; j < this.letterArray.length; j++){
			this.letterArray[j] = new Letter (this.letterArray[j]);
			this.letterArray[j].toString();
		}
	}
}


var wordTest = new Word ("punch");
// letterArray.isCorrect();
wordTest.wordSplitter();
wordTest.showTheLetters();

// Export for Word constructor
module.exports = Word;