//alert("reveille toi")


/*
L'operateur ET : && OU AND
*/
//-- Si je veux cumuler deux conditions :
//=> prenom === prenomlogin
//=> monAge === ageLogin
// pour que les deux correspondent pour être validés il faut les associer
if ( (prenomLogin === prenom) && (ageLogin=== monAge)) {
    /*...code...*/
    /*je ne rentre ici que si les 2 conditions sont vraies*/
}
if((A)&& (B)){...}
==> si A est FAUX et B est VRAI => FAUX
==> si A est VRAI et B est FAUX =>FAUX
==> si A est FAUX et B est FAUX =>FAUX
==> si A est VRAI et B est VRAI=> VRAI

/*l'opérateur OU : // ou OR (/ pipe=> alt gr + 6)
*/
if ((C)) || (D) {...}
=> si C est FAUX et D est FAUX =>FAUX
=> si C est FAUX et D est VRAI=>VRAI
=> si C est VRAI et D est FAUX=>VRAI
=> si C est VRAI et D est VRAI=>VRAI

/*
L'operateur "!" signifie : le contraire de
*/

var utilisateurLog = true;
if(!utilisateurLog){
    // on teste si l'utilisateur n'est pas loggué.
}
// ce qui revient à écrire :
if (utilisateurLog == false) {

}
