//required packages
var Word = require("./word.js");
var figlet = require('figlet');
var prompt = require('prompt');
var colors = require('colors');
var inquirer = require('inquirer');
var remaining = 7;

//user's input
var userInput = "";

//randomly chosen word
var theWord = "";

//number of characters guessed, array of those letters
var guessedLetters = [];
var wrongLetters = [];

//array of all the game's words
var allWords = ["PUNCH", "SIDEKICK", "CHOP", "SWEEP", "UPPERCUT", "FRONTKICK", "CRANEKICK", "KNEE", "STOMP", "HOOK", "HEADBUTT"];

//chooses a word from array
function randomWord() {
    theWord = allWords[Math.floor(Math.random() * allWords.length)];
}

//npm colors themes
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

//title screen
function titleScreen() {
    figlet('WordFight!', function (err, data) {
        if (err) {
            console.log('Something went wrong.'.error);
            console.dir(err);
            return;
        }
        console.log(data)
    });

    //the rules
    console.log("Welcome to Word Fight! Guess the computer's moves to block them! \
\nTap any letter key to enter a guess. Get more than 7 wrong and you lose. \n==========================================================================".error)
}



function reset() {
    titleScreen();
    randomWord();
    secretWord = new Word(theWord);
    secretWord.wordSplitter();

    var remaining = 7;
    var guessedLetters = [];
}

function letterPrompt() {
    reset();
    inquirer.prompt([{
        name: "userLetter",
        type: "input",
        message: "Type a letter".prompt,
        validate: function (value) {
            if (Letter.Word.isCorrect(value)) {
                return true;
            } else {
                return false;
            }
        }
    }]).then(function (char) {
        var letterEntered = (char.userInput).toUpperCase();
        //adds to guessedLetters
        var prevGuessed = false;
        for (var i = 0; i < guessedLetters.length; i++) {
            if (letterShown === this.guessedLetters[i]) {
                prevGuessed = true;
            }
        }
        //go through function
        if (prevGuessed === false) {
            guessedLetters.push(letterEntered);

            var found = theWord.isCorrect(letterReturned);
            //wrong guess message
            if (found === 0) {
                console.log('Sorry. Try again'.error);
                remaining--;
                wrongGuesses++;
                console.log('Guesses remaining: '.error + remaining);
                console.log('\n===================');
                console.log(theWord.showTheLetters());
                console.log('\n===================');

                console.log("Letters guessed: " + guessedLetters);
            } else {
                console.log('Correct!'.debug);
                //checks to see if user won
                if (theWord() === true) {
                    console.log(theWord.showTheLetters());
                    console.log('You win!'.info);
                    reset();
                } else {
                    // show # of guesses left
                    console.log('Guesses remaining: ' + remaining);
                    console.log(that.theWord.showTheLetters());
                    console.log('\n================');
                    console.log("Letters guessed: " + guessedLetters);
                }
            }
            if (guessesRemaining > 0 && theWord.wordFound === false) {
                keepPromptingUser();
            } else if (guessesRemaining === 0) {
                console.log('You have been defeated!');
                console.log('The word was: ' + theWord.word);
            }
        } else {
            console.log("You've guessed that letter already. Try again.")
            keepPromptingUser();
        }
    });
}

letterPrompt();