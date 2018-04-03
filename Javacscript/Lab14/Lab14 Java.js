function scantext() {
    var text = document.getElementById("commentaar").value;
    toArray = text.split(' ');
    console.log(toArray);
    var i;
    countFraude = 0;
    countSeks = 0;
    countTerrorisme = 0;
    for (i = 0; i < toArray.length; i++){
        if (toArray[i] === 'fraude'){
            countFraude++
        }
        else if (toArray[i] === 'terrorisme'){
            countTerrorisme++
        }
        else if (toArray[i] === 'seks'){
            countSeks++
        }
    }

    document.writeln("fraude " + countFraude + "<br/>");
    document.writeln("terrorisme " + countTerrorisme + "<br/>");
    document.writeln("seks " + countSeks)
}

var toArray = [];
var countFraude;
var countSeks;
var countTerrorisme;