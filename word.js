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
		for (var i = 0; i < this.letterArray.length; i++){
			this.letterArray[i] = new Letter (this.letterArray[i]);
			this.letterArray[i].showLetter();
		}
	}
}


var wordTest = new Word ("spaghetti");
wordTest.wordSplitter();
wordTest.showTheLetters();