var creditcardgegevens = prompt("Jouw creditcard?");
var leenbedrag = prompt("Leenbedrag?");


switch (creditcardgegevens){
    case "Visa":
        if (leenbedrag > 800){
            alert("Leenbedrag over krediet van Visa: 800!!!")
        }else {
            alert("U heeft " + leenbedrag + " euro's geleend!!!")
        }
        console.log("Visa");
        break;
    case "Mastercard":
        if (leenbedrag > 1000){
            alert("Leenbedrag over krediet van Mastercard: 1000!!!")
        }else {
            alert("U heeft " + leenbedrag + " euro's geleend!!!")
        }
        console.log("Mastercard");
        break;
    case "ING":
        if (leenbedrag > 1500){
            alert("Leenbedrag over krediet van ING: 1500!!!")
        }else {
            alert("U heeft " + leenbedrag + " euro's geleend!!!")
        }
        console.log("ING");
        break;
    default:
        alert("Uw creditcard word niet geaccepteerd");
        console.log("Default");
        break;
}
