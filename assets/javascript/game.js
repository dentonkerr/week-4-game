var wins = 0;
var losses = 0;
var counter = 0;

//generate random guess number between 19-120
function randomGuess(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
var secret = randomGuess(19,120);
$("#randomGuess").text(secret);
$("#wins").text(wins);
$("#losses").text(losses);

//generate 4 random values between 1-12 for crystals
var crystalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var crystalOne = crystalArray[Math.floor(Math.random() * crystalArray.length)];
var crystalTwo = crystalArray[Math.floor(Math.random() * crystalArray.length)];
var crystalThree = crystalArray[Math.floor(Math.random() * crystalArray.length)];
var crystalFour = crystalArray[Math.floor(Math.random() * crystalArray.length)];

console.log("crystal 1: " + (crystalOne));
console.log("crystal 2: " + (crystalTwo));
console.log("crystal 3: " + (crystalThree));
console.log("crystal 4: " + (crystalFour));

//define and display total score
$("#counter").text(counter);
console.log ("counter: " + counter);

//assign values to proper crystal images on click
$("#crystalImageOne").on("click", function() {
    counter+=crystalOne;
    console.log("test" + crystalOne);
    $("#counter").text(counter);
    game();
});

$("#crystalImageTwo").on("click", function() {
    counter+=crystalTwo;
    $("#counter").text(counter);
    game();
});

$("#crystalImageThree").on("click", function() {
    counter+=crystalThree;
    $("#counter").text(counter);
    game();
});

$("#crystalImageFour").on("click", function() {
    counter+=crystalFour;
    $("#counter").text(counter);
    game();
});

function game() {
    if (counter === secret) {
        wins++;
        $("#wins").text(wins);
        resetGame();
    }
    else if (counter > secret) {
        losses++;
        $("#losses").text(losses);
        resetGame();
    }
}

//resetGame() = new randomGuess, userScore = 0, new values for 4 crystals
function resetGame() {
    secret = randomGuess(19,120);
    $("#randomGuess").text(secret);
    crystalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    crystalOne = crystalArray[Math.floor(Math.random() * crystalArray.length)];
    crystalTwo = crystalArray[Math.floor(Math.random() * crystalArray.length)];
    crystalThree = crystalArray[Math.floor(Math.random() * crystalArray.length)];
    crystalFour = crystalArray[Math.floor(Math.random() * crystalArray.length)];
    counter = 0
    $("#counter").text(counter);
}
