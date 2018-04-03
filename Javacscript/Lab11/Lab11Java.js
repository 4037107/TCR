// var getalArray = ["nul","een","twee","drie","vier","vijf","zes","zeven","acht","negen"];
//
// getal[0] = "nul";
// getal[1] = "een";
// getal[2] = "twee";
// getal[3] = "drie";
// getal[4] = "vier";
// getal[5] = "vijf";
// getal[6] = "zes";
// getal[7] = "zeven";
// getal[8] = "acht";
// getal[9] = "negen";

var number = prompt("Typ uw telefoonnummer in");

var getal = [];
getal[0] = "null";
getal[1] = "een";
getal[2] = "twee";
getal[3] = "drie";
getal[4] = "vier";
getal[5] = "vijf";
getal[6] = "zes";
getal[7] = "zeven";
getal[8] = "acht";
getal[9] = "negen";
var x;
var res = [];
var test = [];
for (x=0;x<number.length;x++)
{
    res += number.charAt(x);
    test += getal[res[x]] + ' ';
}
document.writeln(test);