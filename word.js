//calls upon the letter.js file
var Letter = require("./letter.js");

//defines arrays, underscores
function Word(word) {
    this.word = word;
    this.letters = [];
    this.underscoreArray = [];
    this.letterArray = [];
    this.strArray = [];
    this.wordSplitter = function () {
        for (var i = 0; i<this.word.length; i++) {
            this.letterArray[i] = "_";
        }
    }

    this.showTheLetters = function(){
        var strArray = this.word.split();  
        console.log(strArray)
        for (var i = 0; i<this.strArray.length; i++)
        {
            this.letters.push( new Letter(strArray[i]) );
        }
    
    }
   

    // this.showTheLetters = function() {
	// 	for (var j = 0; j < this.letterArray.length; j++){
	// 		this.letterArray[j] = new Letter (this.letterArray[j]);
	// 		this.letterArray[j].toString();
	// 	}
	// }
}


//need function to display word{,
//loop thru this.letters
//for each:
//call the letter's display();
//add to display string

//return display string
//}

//function: make a guess(letter){
    //return true or false, change remaining guesses if false
//}

// var wordTest = new Word("punch");
// // console.log(wordTest.word)
// // letterArray.isCorrect();
// console.log(wordTest.letterArray)
// wordTest.wordSplitter();
// console.log(wordTest.letterArray)
// wordTest.showTheLetters();

// Export for Word constructor
module.exports = Word;