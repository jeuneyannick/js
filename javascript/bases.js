// Syntaxe de base

// commentaire sur une ligne

/*
   Ici, je fais un commentaire
   sur plusieurs lignes
*/

// -- : Déclarer une variable en JS
//var Prenom

//-- 2 : Affecter une valeur à une variable
//Prenom="Mila"


//var Prenom = "Mila"

// -- 3 : une instruction se termine toujours avec un point-virgule, aussi il est possible d'écrire plusieurs instructions sur une seule lignes
// inst_1
// inst_2; inst_3;

// -- 4 : Afficher une boite de dialogue (2façons)
//alert("Super,tu es arrivé sur mon site !");
//window.alert (tu es arrivé sur mon site !)

//-- : Afficher dans la console (ici, la valeur de ma variable Prenom)
//console.log(Prenom)

// -- 6 : Afficher dans la page web
//document.write("A la pause, vous aurez des Haribos Pik")

// -- 7 : Demander à l'utilisateur une valeur (2 façons)
//window.prompt("Question:on est quel jour?","jour de la semaine");
//prompt("Question: on est jour ?","jour de la semaine");

// -- et pour manipuler cette valeur, je n'oublie pas de la stocker
//var jour=prompt("Question: on est quel jour?","jour de la semaine")
//console.log(jour);

// -- 8 : Attention/!\ le JS est sensible à la casse ('case sensitive')
//mavariable=/=maVariable=/=ma_variable
//            camel case    snake case

    //-- 9 : Une variable ne peut pas commencer par un chiffre, ne doit contenir que des caractères alphanumériques, et ne peut pas être un mot réservé (var,for..; des éléments natifs du langage JS)

// -- 10 : Une variable peut être déclarée de façon explicite :
//var fruit = "fraise";
// ou implicite :
//fruit = "fraise";
//haribo="Tagada";

/*-------------------------------------------------------------------------------
/ ~~~~~Les types de variables ~~~~~ /
------------------------------------*/

// -- 1.Chaines de caractères (string)
var vacances="2017";
var destination="Australie";


// -- 2.Un nombre entier (integer ou int)
var annee=2017;
var destination="Australie";

// -- 3. Un nombre décimal(float)
var nombre_a_virgule= -5.32;

// -- 4.Un booléen (boolean=VRAI/FAUX=TRUE/FALSE)
var unBooleen = false; //--true

//-- 5.Les Constantes

// La déclaration const permet de créer une constante accessible uniquement en lecture. Contrairement à une variable sa valeur ne peut plus etre modifiée par réaffectation plus bas dans le code. Une constante ne peut pas etre declaree a nouveau dans le même script.
//

// -- Par convention les constantes sont en majuscules
const PAYS= "France";

//-- 6. typeof permet de connaitre le type de ma variable
console.log(vacances);
console.log(typeof vacances);
console.log(annee);
console.log(typeof annee);
console.log(PAYS);
console.log(typeof PAYS);

// En JS les variables sont auto-typées
// On peut convertir une variable de type NUMBER en STRING et aussi STRING en NUMBER avec les fonctions natives de JS.

// -- la fonction parseInt()renvoie un entier à partir d'une chaine de caractères
var unChiffre="12";
console.log(unChiffre);
console.log(typeof unChiffre);


// STRING => NUMBER
unChiffre = parseInt(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);

//je réaffecte une valeur
unChiffre= "12.22";
console.log(unChiffre);
console.log(typeof unChiffre)

//STRING=>FLOAT
unChiffre=parseFloat(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);

// NUMBER => STRING
var nb_en_lettres=258;
console.log(nb_en_lettres);
console.log(typeof nb_en_lettres);

var nb_en_lettres = nb_en_lettres.toString();
console.log(nb_en_lettres)
console.log(typeof nb_en_lettres);
