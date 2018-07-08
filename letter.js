//Letter constructor that word.js will call upon
function Letter(character, isGuessed) {
    this.character = character;
    this.isGuessed = isGuessed;
    //this function checks whether to display true character or blank space
    this.showLetter = function () {
        if (this.isGuessed == true) {
            this.character = character
        }
        else (this.character = "_")
    }
    //this function checks whether character input is correct
    this.isCorrect(input) = function () {
        if (input === character) {
            this.isGuessed = true
        }
    }

}

//Export for Letter constructor
module.exports = letter;