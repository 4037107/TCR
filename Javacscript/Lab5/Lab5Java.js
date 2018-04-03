var klantnaam = prompt("Voer je eigen naam in");
var aantal = parseInt(prompt("Aantal boeken te bestellen?"));
var titel ="Javascript";
var prijs = 29.90;
var bedrag = aantal*prijs;
var btw = (bedrag/100)*6;
var totaal = bedrag + btw;
var bezorgkosten = 15;
var woonplaats = prompt("Voer hier je woonplaats in");
var postcode = prompt("Voer hier je postcode in");


document.writeln("Bedankt voor je bestelling: " + klantnaam + "<br />");
document.writeln("Boektitel is: " + titel + "<br />");
document.writeln("Aantal te bestellen: " + aantal + "<br />");
document.writeln("Prijs per boek is....." + prijs.toFixed(2) + "<br />");
document.writeln("Bedrag is: " + bedrag.toFixed(2) + "<br />");
document.writeln("BTW is 6% van bedrag: " +  btw.toFixed(2) + "<br />");


if(woonplaats === "amsterdam" && postcode >= "1000AA" && postcode <= "2000BB") {
    document.writeln("Geen bezorgkosten");
    document.writeln("Totaal is: " + totaal.toFixed(2) + "<br />" );
}else{
    totaal =+ bezorgkosten;
    document.writeln("De bezorgkosten zijn: " + bezorgkosten + "<br>");
    document.writeln("Totaal is: " + totaal.toFixed(2) + "<br />" );
}

var postcodeloterij = (postcode === "1010ST" ? alert("Kans op de nationale postcodeloterij is 90%") : alert("Kans op de nationale postcodeloterij is 0,069%"));