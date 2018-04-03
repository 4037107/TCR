var dagArray = ["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag" ];
var maandArray = ["january","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"];

function showArray1()
{
    document.writeln("<br /> Deze array heeft 7 elementen <br/> ");

    var i;


    for (i = 0; i<dagArray.length; i++){
        document.writeln(dagArray[i] + "<br>");
    }
}

showArray1();



function showArray2()
{
    document.writeln("<br />Deze array heeft 12 elementen <br/>");

    var i = 0;

    for (i; i<maandArray.length; i++){
        document.writeln(maandArray[i] + "<br>");
    }
}

showArray2();




