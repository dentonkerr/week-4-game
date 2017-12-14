var wins = 0;
var losses = 0;

//generate random guess number between 19-120
function randomGuess(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

$("#randomGuess").text(randomGuess(19,120));

//generate 4 random values between 1-12 for crystals
var crystalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var randCrystalValue = crystalArray[Math.round(Math.random())];

for (var i = 0; i < crystalArray.length; i++) {
    

//add value of crystal clicked to total score
var counter = 0;

$(".crystalImages").on("click", function() {
    counter += 1;
    console.log (counter);

    if (counter === randomGuess) {
        wins++;
        resetGame();
    }
    else if (counter > randomGuess) {
        losses++;
        resetGame();
    };
});


//if userScore = randomGuess, add 1 to wins, reset game.
//if userScore > randomGuess, add 1 to losses, reset game.

//resetGame() = new randomGuess, userScore = 0, new values for 4 crystals







