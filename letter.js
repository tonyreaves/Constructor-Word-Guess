var inquirer = require('inquirer');
var input = process.argv[2];

//Letter constructor that word.js will call upon
function Letter(char) {
    console.log(char)
    this.character = char;
    this.isGuessed = false;
    //this function checks whether to display true character or blank space
    this.toString = function () {
        if (this.isGuessed == true) {
            //response
            console.log(this.character)
        }

        //response
        else console.log("_")
    }

       // this function checks whether character input is correct
        this.isCorrect = function () {
            if (this.input === this.character) {
                //check this line too
                this.isGuessed = true
            }
        }
}


//a test on showLetter
var lettertest = new Letter(input);
lettertest.toString();

// Export for Letter constructor
module.exports = Letter;