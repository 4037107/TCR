// //Dit is opdracht 1
// var auto=document.getElementById('auto');//object auto gekoppeld aan plaatje
// auto.style.position='absolute';
// auto.style.left='650px';
// auto.style.top='800px';
//
// function starten() {
//     auto.style.top=parseInt(auto.style.top)-5+'px';
//     setTimeout(starten,10);
// }
//
// function opnieuw() {
//     auto.style.top='800px';
// }

//Dit is opdracht 2
var rijden;                 //animatie heet 'rijden'
var auto2 = document.getElementById('auto2'); //object auto gekoppeld aan het plaatje
auto2.style.position='absolute';
auto2.style.left='650px';
auto2.style.top='800px';

function starten2() {
    auto2.style.top=parseInt(auto2.style.top)-5+'px';
    rijden=setTimeout(starten2,10);//om de 10 msec starten() aanroepen
}

function stop() {
    clearTimeout(rijden);
}

function opnieuw2() {
    clearTimeout(rijden);
    auto2.style.top='800px'
}
