var lessen = [];
lessen ["maandag"] = [": Les 1", "Les 2", "Les 3"];
lessen ["dinsdag"] = [": Les 4", "Les 5", "Les 6"];
lessen ["woensdag"] = [": Les 7", "Les 8", "Les 9"];
lessen ["donderdag"] = [": Les 10", "Les 11", "Les 12"];
lessen ["vrijdag"] = [": Les 13", "Les 14", "Les 15"];


function dagkeuze(dag) {
    document.getElementById("hier").innerHTML = dag + lessen [dag];
}
