

//VARIABLES
//==========================================================================
    
    var options = ["a","b","c","d","e","f","g","h","i","j",
                    "k","l","m","n","o","p","q","r","s","t",
                    "u","v","w","x","y","z"];
    

    //Creates random computer guess
    var computerGuess = options[Math.floor(Math.random() * options.length)]; 
    
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guessedLetters = [];


//FUNCTIONS
//==========================================================================


// //Function to update score
// function updateScore(){
//     document.querySelector("#score").innerHTML = 
//     "<p>Wins: " + wins + "</p>" +
//     "<p>Losses: " + losses + "</p>" +
//     "<p>Guesses left: " + guessesLeft + "</p>";
// };


//Function to update the letters guessed so far
function updateGuessedLetters (){
    document.getElementById("guesses").innerHTML = "Your guesses so far: " + guessedLetters.join(', ')
};


//Function to update the number of guesses the user has left
function updateGuessesLeft() {
    document.getElementById("guessLeft").innerHTML = "Guesses left: " + guessesLeft;
};

//Function to generate a new random guess by the computer
function updateLetterToGuess() {
    this.letterToGuess = this.options[Math.floor(Math.random() * this.options.length)];
};



//Function to restart game
function restartGame (){
    guessesLeft = 10;
    guessedLetters = [];
    updateLetterToGuess();
    console.log("Computer guess: " + letterToGuess);
    updateGuessesLeft();
    updateGuessedLetters();
};

updateLetterToGuess();
console.log("Computer guess: " + letterToGuess);
updateGuessesLeft();


//PROCESS
//================================================================
 

//Game starts when user presses a key
document.onkeyup = function(event) {
    
    
    //variable to record user guess
    var userGuess = event.key.toLowerCase(); 
    //adds userGuess to guessedLetters array
    guessedLetters.push(userGuess);

   //If guesses left are not 0, and the user guesses the correct letter, they win
    if (guessesLeft > 0) {
        if (userGuess === letterToGuess) {
        wins++;
        document.querySelector('#wins').innerHTML = "Wins: " + wins;
        alert("You win!");
        restartGame();
    } //If the user guess is incorrect
    else if (userGuess !== computerGuess) {
        alert("Try again!");
        guessesLeft--;
        updateGuessesLeft();
        updateGuessedLetters();
    }

    } //If there are no more guesses, game over
    else if (guessesLeft === 0) {
        losses++; 
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        alert("Game over loser!");
        restartGame();
    }

}
    
    
