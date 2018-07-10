var inquirer = require('inquirer');
var input = process.argv[2];

//Letter constructor that word.js will call upon
function Letter(character) {
    this.character = character.toUpperCase();
    this.isGuessed = true;
    //this function checks whether to display true character or blank space
    this.showLetter = function () {
        if (this.isGuessed == true) {
            console.log(this.character)
        }
        else console.log("_")
    }

       // this function checks whether character input is correct
        this.isCorrect = function () {
            if (this.input === character) {
                this.isGuessed = true
            }
        }
}



var lettertest = new Letter(input);
lettertest.showLetter();

// Export for Letter constructor
module.exports = Letter;