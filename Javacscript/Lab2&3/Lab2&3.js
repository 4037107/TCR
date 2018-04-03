var weekdag = [];
weekdag[0] = "zondag";
weekdag[1] = "maandag";
weekdag[2] = "dinsdag";
weekdag[3] = "woensdag";
weekdag[4] = "donderdag";
weekdag[5] = "vrijdag";
weekdag[6] = "zaterdag";


var team = [];
var uitslag = [];
team[0] = 'Arsenal';
team[1] = 'Feyenoord';
team[2] = 'FC barcelona';
team[3] = 'Ajax';

team[0] = [];
team[0][0] = 1;
team[0][1] = 2;
team[0][2] = 3;
team[0][3] = 4;
team[0][4] = 3;

uitslag[0] = (team[0][0] + team[0][1] + team[0][2] + team[0][3] + team[0][4]) / 5;
console.log(uitslag[0]);


console.log(uitslag[0]);

document.writeln("<table border=2>"+ "<tr>" + "<td>" + "scoren team 0:"+ "</td>" + "</tr>" + "<td>" + team[0][0] + "</td>" + "<td>" +team[0][1] +"</td>" + "<td>" +team[0][2] + " </td> " + "<td>" +team[0][3] + "</td>" + "<td>" + team[0][4]+ "</td>" + "<td>" + "gemiddeldescore is:" + "</td>" + "<td>" + uitslag[0] +"</td>" + "</tr>" + "</table>");
team[1] = [];
team[1][0] = 4;
team[1][1] = 5;
team[1][2] = 6;
team[1][3] = 7;
team[1][4] = 2;
uitslag[1] = (team[1][0] + team[1][1] + team[1][2] + team[1][3] + team[1][4]) / 5;
document.writeln("<table border=2>"+ "<tr>" + "<td>" + "scoren team 1:"+ "</td>" + "</tr>" + "<td>" + team[1][0] + "</td>" + "<td>" +team[1][1] +"</td>" + "<td>" +team[1][2] + " </td> " + "<td>" +team[1][3] + "</td>" + "<td>" + team[1][4]+ "</td>" + "<td>" + "gemiddeldescore is:" + "</td>" + "<td>" + uitslag[1] +"</td>" + "</tr>" + "</table>");
team[2] = [];
team[2][0] = 7;
team[2][1] = 6;
team[2][2] = 5;
team[2][3] = 4;
team[2][4] = 1;
uitslag[2] = (team[2][0] + team[2][1] + team[2][2] + team[2][3] + team[2][4]) / 5;
document.writeln("<table border=2>"+ "<tr>" + "<td>" + "scoren team 2:"+ "</td>" + "</tr>" + "<td>" + team[2][0] + "</td>" + "<td>" +team[2][1] +"</td>" + "<td>" +team[2][2] + " </td> " + "<td>" +team[2][3] + "</td>" + "<td>" + team[2][4]+ "</td>" + "<td>" + "gemiddeldescore is:" + "</td>" + "<td>" + uitslag[2] +"</td>" + "</tr>" + "</table>");




