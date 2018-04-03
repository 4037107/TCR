//Dit is auto opdracht 2
var rijden;                 //animatie heet 'rijden'
var auto2 = document.getElementById('auto2'); //object auto gekoppeld aan het plaatje
auto2.style.position='absolute';
auto2.style.left='650px';
auto2.style.top='800px';

function starten2() {
    auto2.style.top=parseInt(auto2.style.top)-5+'px';
    rijden=setTimeout(starten2,10);//om de 10 msec starten() aanroepen

    //Dit is VERKEER OPDRAHT 2
    if(parseInt(auto2.style.top)<-80)   //als de auto van het scherm afrijdt begint hij opnieuw onderop
    {
        auto2.style.top='900px';
    }

    //Dit is VERKEER OPDRACHT 3
    //als het stoplicht rood is (slir_Ir) en je bent er vlak voor stop je
    // if(slir_lr&&y_auto==550)            //550 is vlak voor het stoplicht
    //         {snelheid=0;}
    // else
    //         {snelheid=5;}
    //
    // auto2.style.top=parseInt(auto2.style.top) -snelheid +'px';
    //


}

function stop() {
    clearTimeout(rijden);
}

function opnieuw2() {
    clearTimeout(rijden);
    auto2.style.top='800px'
}



// // Dit is stoplicht opdracht 4
var werken;             //animatie heet 'werken'
var buitenwerking;      //andere animatie heet 'buitenwerking'
var stoplicht4 = document.getElementById('stoplicht4');
stoplicht4.style.position='absolute';
stoplicht4.style.left='715px';
stoplicht4.style.top='510px';

function aanzetten() {
    // clearTimeout(buitenwerking);
    // maakRood3();
    // werken=setTimeout(maakGroen3,4000); // na 4 sec (4000msec) groen maken
    // werken=setTimeout(maakGeel3,8000); // na 8 sec geel maken
    // werken=setTimeout(aanzetten,10000); // en na 10 sec opniew aanzetten

}

function knipperen() {
    clearTimeout(werken);
    maakGeel3();
    buitenwerking= setTimeout(zetUit3,500);         //na 500 msec uitzetten
    buitenwerking= setTimeout(knipperen,1000);      //na 500 msec weer knipperen
}

function uitzetten() {
    //deze funtie zet de animaties van het stoplicht uit
    //dat is anders dan dat de functie zetUit() doet zetUit();
    zetUit3();
    clearTimeout(buitenwerking);
    clearTimeout(werken);
}

function maakRood3() {
    stoplicht4.src= "stoplichtrood.png";
}

function maakGroen3() {
    stoplicht4.src="stoplichtgroen.png";
}

function maakGeel3() {
    stoplicht4.src="stoplichtgeel.png";
}

function zetUit3() {
    //deze functie laat het plaatje met alle lampjes uit zien.
    //niet verwarren met de functie uitzetten()
    stoplicht4.src="stoplichtuit.png";
}


