// Declare bird names to be used
var birdName = "american robin";

// Get number of letters in birdName
var letterNum = 0;
for (var n = 0; n < birdName.length; n++) {
    if (birdName.charAt(n) !== " ") {
        letterNum++;
    }
}

// Declare number of guesses as 5 more than number of letters
var guessNum = letterNum + 5;

// Declare the hint string
var hintText = "The appearance of this common yard bird is often said to signal the arrival of spring"

// Get bottom two boxes and hide them on the Welcome screen
var hideBtm = document.getElementById("btm-row");
hideBtm.style.display = "none";

// Get Instructions box and hide it on the Welcome screen
var hideInstruct = document.getElementById("instructions-text");
hideInstruct.style.display = "none";

// Hide Welcome box, switch to Instructions screen, when any key pressed
document.onkeyup = function () {
    var hideWelcome = document.getElementById("welcome-text");
    hideWelcome.style.display = "none";
    var showInstruct = document.getElementById("instructions-text");
    // *.display must be set to empty string for the layout to be correct
    showInstruct.style.display = "";

    // Change to the Game screen on the second keyup event
    document.onkeyup = function () {
        var hideInstruct = document.getElementById("instructions-text");
        hideInstruct.style.display = "none";

        // Declare string of underscores corresponding to birdName
        var strUnderscores = "";
        for (i in birdName) {
            if (birdName.charAt(i) !== " ") {
                strUnderscores = strUnderscores + "_";
            } else {
                strUnderscores = strUnderscores + " ";
            }
        }

        // Add underscores to main box
        var addUnders = document.getElementById("game-text");
        addUnders.innerHTML = strUnderscores;

        // Show bottom row boxes
        var showBtm = document.getElementById("btm-row");
        showBtm.style.display = "";

        // Hide hint and image in bottom left box
        var hideHint = document.getElementById("hint");
        hideHint.style.display = "none";
        var hideImg = document.getElementById("quiz-bird");
        hideImg.style.display = "none";

        // Display how many guesses remaining
        var guessesLeft = document.getElementById("guesses-left");
        guessesLeft.innerHTML = "You have " + guessNum + " guesses remaining!";

        // Play bird song


        // Declare a letters guessed string
        var lettersGuessed = "";

        // Declare score variables
        var numPlayed = 0;
        var numCorrect = 0;

        // Start the actual game!
        document.onkeyup = function (event) {
            // If user presses spacebar show hint
            if (event.key === " ") {
                hideHintPrompt = document.getElementById("hint-prompt");
                hideHintPrompt.style.display = "none";
                showHint = document.getElementById("hint");
                showHint.style.display = "";
                insertHint = document.getElementById("hint-txt");
                insertHint.innerHTML = hintText;
            }

            // Checks if letter pressed is in birdName
            else if (birdName.indexOf(event.key) > -1) {
                // If letter pressed is in birdName add letter to strUnderscores
                for (i in birdName) {
                    if (birdName.charAt(i) === event.key) {
                        strUnderscores = strUnderscores.replace(strUnderscores.charAt(i), event.key);
                    }
                }

                // Update HTML
                var addLetter = document.getElementById("game-text");
                addLetter.innerHTML = strUnderscores;

                // Update guesses remaining
                guessNum--;
                var guessesLeft = document.getElementById("guesses-left");
                guessesLeft.innerHTML = "You have " + guessNum + " guesses remaining!";

                // Update letters guessed
                lettersGuessed = lettersGuessed.concat(event.key);
                var updateGuessed = document.getElementById("letters-guessed");
                updateGuessed.innerHTML = lettersGuessed;
            }

            // If letter is not in birdName
            else {
                // Update guesses remaining
                guessNum--;
                var guessesLeft = document.getElementById("guesses-left");
                guessesLeft.innerHTML = "You have " + guessNum + " guesses remaining!";

                // Update letters guessed
                lettersGuessed = lettersGuessed.concat(event.key);
                var updateGuessed = document.getElementById("letters-guessed");
                updateGuessed.innerHTML = lettersGuessed;
            }


            // If the user guesses correctly end the game
            if (strUnderscores === birdName) {
                var showCongrats = document.getElementById("game-text");
                showCongrats.innerHTML = "Congratulations!!! You're right!";

                // Hide hint

                // Show image

                // Hide number of guesses
                var hideGuesses = document.getElementById("guesses-left");
                hideGuesses.style.display = "none";

                // Update score
                numCorrect++;
                numPlayed++;
                var showScore = document.getElementById("score");
                showScore.innerHTML = "You've identified " + numCorrect + " out of " + numPlayed + " birds correctly";
            }

            // If user runs out of guesses AND they haven't gotten it right on the last guess
            if (guessNum === 0 && strUnderscores !== birdName) {
                var showFailure = document.getElementById("game-text");
                showFailure.innerHTML = "Sorry, you're out of guesses";

                // Hide number of guesses
                var hideGuesses = document.getElementById("guesses-left");
                hideGuesses.style.display = "none";

                // Update score
                numPlayed++;
                var showScore = document.getElementById("score");
                showScore.innerHTML = "You've identified " + numCorrect + " out of " + numPlayed + " birds correctly";
            }
        }

    }
}

