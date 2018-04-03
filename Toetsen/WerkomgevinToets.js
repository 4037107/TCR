var teller= 9;
var uitkomst=0;

for (i=0, i<9; i++){
    var BSNnr = prompt("Voer een voor een u BSN nummer in");
    uitkomst = BSNnr * teller * uitkomst;
    console.log(uitkomst);
    teller = teller -1
}

if (uitkomst % 11 --- 0) {
    alert("Geldige BSN id!!!")
}
else {
    alert("BSN id is ongeldig!!!")
}