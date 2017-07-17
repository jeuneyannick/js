//alert("hello")

/*LES BOUCLES
*/


//-- La boucle FOR
//for (/*3 arguments*/) {
    /*...code...*/
//}
/*
1. initialise un compteur à partir de combien je compte (par défaut le compteur est la variable  'i')
2. La condition à vérifier qui doit donc être VRAIE/ TRUE
3. Le 'pas'd'incrémentation (combien j'ajoute à chaque tour, généralement 1 donc i++)

*/
for(var i = 0; i <= 10 ; i++) {
document.write("<p> Instruction exécutée : " + i + "</p>")
}

//--- La boucle WHILE (tant que)
// Très utilisée quand on ne connaity pas le nombre de tours de boucles à l'avance

var j = 1;
while(j<= 10) {
    document.write("<hr /><p>Instruction executée : "+ j + "</p>");
    /*50 lignes de code */
    j++;
}

/*------------------
             EXERCICE


J'ai 1000euros sur mon compte
chaque mois j'ajoute 50euros
combien de temps me faut-il pour avoir 2000 euros sur mon compte ?
----------------------------------------------------------------- */

var monCompte = 1000;
var temps = 0;
while(monCompte < 2000) {
    document.write ("<h3> Sous sur mon compte : " + monCompte + "</h3>");
    monCompte += 50;
    temps++;
}
document.write ("<h3> Sous sur mon compte : " + monCompte + "</h3>");
document.write ("<h3> Jusqu'à 2000€, il me faut : " + temps + " mois </h3>");
document.write ("<h3> Jusqu'à 2000€, il me faut : " + (temps/12) +" années </h3>");



// avec une boucle FOR

var tps= 0
for(var j= 1000; j< 2000; j+=50) {
    document.write ("<p>Sous dans mon compte: " + j +
    " </p>"); tps ++;
}
document.write("<h3>Il aura fallu " + tps + " mois.</h3>");
