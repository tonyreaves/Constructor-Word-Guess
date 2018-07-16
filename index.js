var Word = require("./word.js");
var figlet = require('figlet');

var allWords = ["punch", "sidekick", "chop", "sweep", "uppercut", "frontkick", "cranekick", "knee", "stomp", "hook", "headbutt"];


function randomWord() {allWords[Math.floor(Math.random()*allWords.length)];
}
function titleScreen() {
    figlet('WordFight!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });
console.log("Welcome to Word Fight! Guess the computer's moves to block them! \
\nTap any letter key to enter a guess. Get more than 8 wrong and you lose. \n==========================================================================")
}

titleScreen();


function theGame(){
randomWord();
var remaining = 8;

}

// console.log(randomWord)