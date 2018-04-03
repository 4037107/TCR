// Auto 1
var auto = document.getElementById('autoob');
auto.style.position = 'absolute';
auto.style.left = '650px';
auto.style.top = '800px';

// Auto 2
var autobb = document.getElementById('autobb');
autobb.style.position = 'absolute';
autobb.style.left = '555px';
autobb.style.top = '-80px';

// Auto 3
var autorl = document.getElementById('autorl');
autorl.style.position = 'absolute';
autorl.style.left = '1400px';
autorl.style.top = '375px';

// Auto 4
var autolr = document.getElementById('autolr');
autolr.style.position = 'absolute';
autolr.style.left = '-200px';
autolr.style.top = '412px';

// Var's
var snelheid = 5;
var snelheid1 = 5;
var snelheid2 = 5;
var snelheid3 = 5;
var rijden;
var werken;
var buitenwerking;
var stop;
var stop2;
// Stoplicht 1
var stoplicht = document.getElementById('stoplicht');
stoplicht.style.position='absolute';
stoplicht.style.left='713px';
stoplicht.style.top='505px';
// Stoplicht.style.transform = 'rotate(180deg)';


// Stoplicht 2
var stoplicht2 = document.getElementById('stoplicht2');
stoplicht2.style.position='absolute';
stoplicht2.style.left='506px';
stoplicht2.style.top='305px';
stoplicht2.style.transform = 'rotate(180deg)';



// Stoplicht 3
var stoplicht3 = document.getElementById('stoplicht3');
stoplicht3.style.position='absolute';
stoplicht3.style.left='728px';
stoplicht3.style.top='320px';
stoplicht3.style.transform = 'rotate(270deg)';

// Stoplicht 4
var stoplicht4 = document.getElementById('stoplicht4');
stoplicht4.style.position='absolute';
stoplicht4.style.left='491px';
stoplicht4.style.top='488px';
stoplicht4.style.transform = 'rotate(90deg)';
// Start function
function starten()
{
    auto.style.top = parseInt(auto.style.top) - snelheid + 'px';
    autobb.style.top = parseInt(autobb.style.top) + snelheid1 + 'px';
    autorl.style.left = parseInt(autorl.style.left) - snelheid2 + 'px';
    autolr.style.left = parseInt(autolr.style.left) + snelheid3 + 'px';
    if(auto.style.top === '-80px'){
        auto.style.top = '800px';
    }
    if(autobb.style.top === '800px'){
        autobb.style.top = '-80px';
    }
    if(autorl.style.left === '-200px'){
        autorl.style.left = '1400px';
    }
    if(autolr.style.left === '1500px'){
        autolr.style.left = '-200px';
    }
    rijden = setTimeout(starten,10);

    if(auto.style.top === '550px' && stop === true){
        // if(auto.style.top === '550px'){
        snelheid = 0;
    }else{
        snelheid = 5;
    }
    if(autobb.style.top === '280px' && stop === true){
        snelheid1 = 0;
    }else{
        snelheid1 = 5;
    }
    if(autolr.style.left === '300px' && stop2 === true){
        snelheid3 = 0;
    }else{
        snelheid3 = 5;
    }
    if(autorl.style.left === '750px' && stop2 === true){
        snelheid2 = 0;
    }else{
        snelheid2 = 5;
    }
}

// Stop function
function stoppen()
{
    clearTimeout(rijden)
}

// Opnieuw function
function opnieuw()
{
    auto.style.top = '800px';
    autobb.style.top = '-80px';
    autorl.style.left = '1400px';
    autolr.style.left = '-200px'
}
// Stoplicht

function aanzetten()
{
    clearTimeout(buitenwerking);
    maakRood();
    maakRood1();
    werken = setTimeout(maakGroen, 2000);
    werken = setTimeout(maakGeel, 6000);
    werken = setTimeout(maakRood, 8000);
    werken = setTimeout(maakGroen1, 10000);
    werken = setTimeout(maakGeel1, 14000);
    werken = setTimeout(aanzetten, 16000);


}

function knipperen() {
    clearTimeout(werken);
    maakGeel();
    buitenwerking = setTimeout(ZetUit, 500);
    buitenwerking = setTimeout(knipperen, 1000);
    buitenwerking = setTimeout(ZetUit, 1500);
    buitenwerking = setTimeout(knipperen, 1000);
}
function uitzetten() {
    ZetUit();
    clearTimeout(buitenwerking);
    clearTimeout(werken);
}



// Stoplicht 0
function maakRood() {
    stoplicht.src="stoplichtrood.png";
    stoplicht2.src="stoplichtrood.png";
    stop = true;

}
function maakGeel() {
    stoplicht.src="stoplichtgeel.png";
    stoplicht2.src="stoplichtgeel.png";
}
function maakGroen() {
    stoplicht.src = "stoplichtgroen.png";
    stoplicht2.src = "stoplichtgroen.png";
    stop = false;
}

// Stoplicht 1
function maakRood1() {
    stoplicht3.src="stoplichtrood.png";
    stoplicht4.src="stoplichtrood.png";
    stop2 = true;

}
function maakGeel1() {
    stoplicht3.src="stoplichtgeel.png";
    stoplicht4.src="stoplichtgeel.png";
}
function maakGroen1() {
    stoplicht3.src="stoplichtgroen.png";
    stoplicht4.src="stoplichtgroen.png";
    stop2 = false;

}

function ZetUit() {
    stoplicht.src="stoplichtuit.png";
    stoplicht2.src="stoplichtuit.png";
    stoplicht3.src="stoplichtuit.png";
    stoplicht4.src="stoplichtuit.png";
}