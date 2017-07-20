
var tour= 1;
while (tour < 10){
    tour ++;
    document.write("C'est le tour de manège n°" + tour + "<br />");

}


document.write("<hr />");

for (var tour = 1; tour <= 10 ; tour++) {
    document.write("c'est le tour de manège n°"+ tour + "<br />");

}

document.write("<hr />");
document.write("<hr />");

var question = parseInt(prompt (" combien de tours ?"));
var compteur = 1;
while (compteur<=question) {
      document.write("c'est le tour n°" + compteur + "<br />");
      compteur ++;
}

document.write("<hr />");

var nbTours = parseInt(prompt("Combien de tours à faire"));
for(var tour= 1; tour <= nbTours; tour++) {
    document.write("c'est le tour n°" + tour + "<br />");

}
