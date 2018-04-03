// Globale variabelen

var mediaArray = ["TheMazeRunner.jpg", "the-maze-runner-logo.png", "TheScorchTrials.jpg", "maze-runner-death-cure.jpg","TheDeathCure2.jpg", "W.C.K.D.jpg"];
var max = mediaArray.length;
var randomIndex = 0;

function showMedia()
{
    randomIndex         = Math.floor((Math.random() * max));
    document.getElementById("mediaimage").src = mediaArray[randomIndex];
    setTimeout("showMedia()",1000);
}