// function: maakCookie
// parameters: naam, waarde, dagen
// return:
// doel: een cookie maken

function maakCookie (naam, waarde, dagen) {
    if (dagen) {
        var datum = new Date();
        datum.setTime(datum.getTime() + (dagen * 24 * 60 * 60 * 1000));
        var verloopdatum = "; expires=" + datum.toGMTString();
    }
    else {
        var verloopdatum = "";
    }
    document.cookie = naam + "=" + waarde + verloopdatum + ";path=/";
}

// function: leesCookie
// parameters: naam
// return: waarde van de cookie
// doel: de waarde an een cookie retourneren
function leesCookie(naam)
{
    var naamCookie = naam + "=";
    var cookieArray = document.cookie.split(';');
    for(var i=0; i < cookieArray.length; i++)
    {
        var dezeCookie = cookieArray[i];
        while (dezeCookie.charAt(0)==' ')
        {
            dezeCookie = dezeCookie.substring(1,dezeCookie.length);
        }
        if (dezeCookie.indexOf(naamCookie) == 0)
        {
            return dezeCookie.substring(naamCookie.length,dezeCookie.length);
        }
    }
    return null;
}

// function: verwijderCookie
// parameters: naam
// return:
// doel: cookie verwijderen
function verwijderCookie(naam) {
    maakCookie(naam,"",-1);
}

