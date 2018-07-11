var inquirer = require('inquirer');
var input = process.argv[2];

//Letter constructor that word.js will call upon
function Letter(character) {
    this.character = character.toUpperCase();
    this.isGuessed = false;
    //this function checks whether to display true character or blank space
    this.toString = function () {
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


//a test on showLetter
var lettertest = new Letter(input);
lettertest.toString();

// Export for Letter constructor
module.exports = Letter;