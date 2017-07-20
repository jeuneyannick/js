alert('Hello')


var heure = parseInt(prompt('Entrez le chiffre'))

var minutes = parseInt(prompt('Entrez les minutes'))

var secondes = parseInt(prompt('Entrez les secondes'))

// on teste les cas d'erreur
if ((heure >= 0) && (heure <= 23) && (minute >=0) && (minute <=59) &&  (seconde >=O)&& (seconde <=59)) {
    if (seconde ===60) {// ===
        // On met les secondes à 0 et passe à la minute suivante
        seconde= 0;
        minute++;
        if(minute === 60) {// ===
            // on met les minutes à 0 et passe à l'heure suivante
            minute = 0;
            heure++;
            if (heure=== 24) { //===
                // L'heure suivante est minuit
                heure = 0;
            }

        }

    }
//affichage  de l'heure
document.write("<h3>Dans une seconde il sera" + heure + " H" + minute + " m" + seconde + "s</h3>")
else {
    document.write("<h3> heure incorrecte</h3>")
}
