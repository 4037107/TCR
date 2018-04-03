var type = "economie";
var kleur = "blauw";
var deuren = 4;
var radio = true;
var cabriolet = false;
function showauto1()
{
    document.writeln("<br />Deze funcite toont" + "globale plus eigen lokale variabelen van auto 1");
    var type = "middenklasse";
    radio = false;
    document.writeln("<br/>Auto type: " + type +
        "<br/>autokleur: " + kleur +
        "<br/>deuren: " + deuren +
        "<br/>radio " + (radio ? 'JA' : 'NEE') +
        "<br/>cabriolet: " + (cabriolet ? 'JA': 'NEE'));
}

function showauto2()
{
    document.writeln("<br />Deze functie toont " + "globale plus eigen lokale variabelen van auto 2");
    type = "sport";
    cabriolet = true;
    kleur = "rood";
    deuren = 2;
    document.writeln("<br />Auto type: " + type +
        "<br/>autokleur: " + kleur +
        "<br/>deuren: " + deuren +
        "<br/>radio: " + (radio ? 'JA' : 'NEE') +
        "<br/>cabriolet: " + (cabriolet ? 'JA' : 'NEE' ))
}

function showauto3() {
    document.writeln("<br />Deze functie toont " + "globale plus eigen lokale variabelen van auto 3");
    type = "oldschool";
    cabriolet = true;
    kleur = "zwart";
    deuren = 2;
    document.writeln("<br />Auto type: " + type +
        "<br/>autokleur: " + kleur +
        "<br/>deuren: " + deuren +
        "<br/>radio: " + (radio ? 'JA' : 'NEE') +
        "<br/>cabriolet: " + (cabriolet ? 'JA' : 'NEE' ))
}

showauto1();
showauto2();
showauto3();
