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
    // *.display must be set to empty string for this code to work
    showInstruct.style.display = "";

    // Change to the Game screen on the second keyup event
    document.onkeyup = function () {
        var hideWelcome = document.getElementById("instructions-text");
        hideWelcome.style.display = "none";

        // Add underscore to main box
        var addBlank = document.getElementById("game-text");
        addBlank.innerHTML = "___&nbsp;&nbsp;___";

        // Show bottom row boxes
        var showBtm = document.getElementById("btm-row");
        showBtm.style.display = "";
    }
}

