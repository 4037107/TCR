var getal = parseInt(prompt("Voer een getal in tussen 0 en 10 in"));
var geschreven = ["een", "twee", "drie", "vier", "vijf", "zes", "zeven", "acht", "negen", "tien"];


function antwoord() {
    document.writeln("Uw " + getal + " is vertaald naar " + geschreven[getal-1]);
}


switch (getal){
    case 0:
        antwoord();
        break;
    case 1:
        antwoord();
        break;
    case 2:
        antwoord();
        break;
    case 3:
        antwoord();
        break;
    case 4:
        antwoord();
        break;
    case 5:
        antwoord();
        break;
    case 6:
        antwoord();
        break;
    case 7:
        antwoord();
        break;
    case 8:
        antwoord();
        break;
    case 9:
        antwoord();
        break;
    case 10:
        antwoord();
        break;
    default:
        document.writeln("Uw getal is niet tussen 1 en de 10");
        break;

}