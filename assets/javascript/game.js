//display 4 crystals, random number box, user guess box, wins and losses counter

//generate random guess number between 19-120
function randomGuess(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log (randomGuess(19,120));

document.getElementById("randomGuess").innerHTML = randomGuess(19,120);

//generate 4 random values between 1-12 for crystals
//add value of crystal clicked to total score

//if userScore = randomGuess, add 1 to wins, reset game.
//if userScore > randomGuess, add 1 to losses, reset game.

//gameReset = new randomGuess, userScore = 0, new values for 4 crystals







