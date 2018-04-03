var vraag = [];
var goedantwoord = [];
var score = 0;

vraag[0] = " 8 X 4 = ? ";
vraag[1] = " 8 / 4 = ? ";
vraag[2] = " 16 X 4 = ? ";
vraag [3] = "2 + 2 = ?";
vraag [4] = "17 + 12 = ?";
vraag [5] = "100 - 19 = ?";
vraag [6] = " 38 + 1700= ?";

goedantwoord [0] = "32";
goedantwoord [1] = "2";
goedantwoord [2] = "64";
goedantwoord [3] = "4";
goedantwoord [4] = "29";
goedantwoord [5] = "81";
goedantwoord [6] = "1738";

function toets() {
    var x;
    var antwoord = [];
    for (x = 0; x < vraag.length; x++) {
        antwoord[x] = prompt(vraag[x]);
        if (antwoord[x] === goedantwoord[x]) {
            alert("Dit is correct!");
            score++;
        }
        else {
            alert("Dit is fout!");
        }
    }
}

toets();
document.writeln("Jouw score is: " + score);