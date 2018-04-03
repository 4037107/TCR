// // //Dit is Opdracht 1
// function veranderStoplicht() {
//     var stoplicht = document.getElementById('stoplicht');
//     if(stoplicht.src.match("stoplichtrood")){
//         stoplicht.src = "stoplichtgroen.png";
//     }else {
//         stoplicht.src = "stoplichtrood.png";
//     }
// }
//
//
// //Dit is Opdracht 2
// // var stoplicht2 = document.getElementById('stoplicht2');
// var stoplicht2 = document.getElementById('stoplicht2');
//
// function maakRood() {
//     stoplicht2.src = 'stoplichtrood.png';
// }
//
// function maakGroen() {
//     stoplicht2.src="stoplichtgroen.png";
// }
//
// function maakGeel() {
//     stoplicht2.src="stoplichtgeel.png";
// }
//
// function zetUit() {
//     stoplicht2.src="stoplichtuit.png";
// }


// Dit is opdracht 3
var stoplicht3 = document.getElementById('stoplicht3');
stoplicht3.style.position='absolute';
stoplicht3.style.left='715px';
stoplicht3.style.top='510px';

function maakRood2() {
    stoplicht3.src= "stoplichtrood.png";
}

function maakGroen2() {
    stoplicht3.src="stoplichtgroen.png";
}

function maakGeel2() {
    stoplicht3.src="stoplichtgeel.png"
}

function zetUit2() {
    stoplicht3.src="stoplichtuit.png"
}


// // // Dit is opdracht 4
// var werken;             //animatie heet 'werken'
// var buitenwerking;      //andere animatie heet 'buitenwerking'
// var stoplicht4 = document.getElementById('stoplicht4');
// stoplicht4.style.position='absolute';
// stoplicht4.style.left='715px';
// stoplicht4.style.top='510px';
//
// function aanzetten() {
//     clearTimeout(buitenwerking);
//     maakRood3();
//     werken=setTimeout(maakGroen3,4000); // na 4 sec (4000msec) groen maken
//     werken=setTimeout(maakGeel3,8000); // na 8 sec geel maken
//     werken=setTimeout(aanzetten,10000); // en na 10 sec opniew aanzetten
// }
//
// function knipperen() {
//     clearTimeout(werken);
//     maakGeel3();
//     buitenwerking= setTimeout(zetUit3,500);         //na 500 msec uitzetten
//     buitenwerking= setTimeout(knipperen,1000);      //na 500 msec weer knipperen
// }
//
// function uitzetten() {
//     //deze funtie zet de animaties van het stoplicht uit
//     //dat is anders dan dat de functie zetUit() doet zetUit();
//     zetUit3();
//     clearTimeout(buitenwerking);
//     clearTimeout(werken);
// }
//
// function maakRood3() {
//     stoplicht4.src= "stoplichtrood.png";
// }
//
// function maakGroen3() {
//     stoplicht4.src="stoplichtgroen.png";
// }
//
// function maakGeel3() {
//     stoplicht4.src="stoplichtgeel.png";
// }
//
// function zetUit3() {
//     //deze functie laat het plaatje met alle lampjes uit zien.
//     //niet verwarren met de functie uitzetten()
//     stoplicht4.src="stoplichtuit.png";
// }



