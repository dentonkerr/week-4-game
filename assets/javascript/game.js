var wins = 0;
var losses = 0;
var counter = 0;

//generate random guess number between 19-120
function randomGuess(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

$("#randomGuess").text(randomGuess(19,120));
$("#wins").text(wins);
$("#losses").text(losses);


//generate 4 random values between 1-12 for crystals
var crystalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var randCrystalVal = crystalArray[Math.floor(Math.random() * crystalArray.length)];
console.log("randCrystalVal: " + randCrystalVal);

//for (var i = 0; i < crystalArray.length; i++) {
    var imageCrystal1 = $("<img>");
    imageCrystal1.addClass("crystal-image");
    imageCrystal1.attr("src", "../week-4-game/assets/images/crystal1.png");
    imageCrystal1.attr("data-crystalvalue", randCrystalVal);
    $("#crystals").append(imageCrystal1);

    var imageCrystal2 = $("<img>");
    imageCrystal2.addClass("crystal-image");
    imageCrystal2.attr("src", "../week-4-game/assets/images/crystal2.jpeg");
    imageCrystal2.attr("data-crystalvalue", randCrystalVal);
    $("#crystals").append(imageCrystal2);

    var imageCrystal3 = $("<img>");
    imageCrystal3.addClass("crystal-image");
    imageCrystal3.attr("src", "../week-4-game/assets/images/crystal3.jpeg");
    imageCrystal3.attr("data-crystalvalue", randCrystalVal);
    $("#crystals").append(imageCrystal3);

    var imageCrystal4 = $("<img>");
    imageCrystal4.addClass("crystal-image");
    imageCrystal4.attr("src", "../week-4-game/assets/images/crystal4.jpeg");
    imageCrystal4.attr("data-crystalvalue", randCrystalVal);
    $("#crystals").append(imageCrystal4);
//};
    
//add value of crystal clicked to total score

$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    
    counter += crystalValue;

    if (counter === randomGuess) {
        wins++;
        resetGame();
    }
    else if (counter > randomGuess) {
        losses++;
        resetGame();
    };
});
$("#counter").text(counter);
console.log ("counter: " + counter);

//if userScore = randomGuess, add 1 to wins, reset game.
//if userScore > randomGuess, add 1 to losses, reset game.

//resetGame() = new randomGuess, userScore = 0, new values for 4 crystals







