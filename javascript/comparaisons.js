//alert("Hello")

//L'opérateur de comparaisons == signifie 'égal à '

//il permet de vérifier que les VALEURS de 2 variables sont identiques

var nb1 = 123;
var nb2 = "123"
console.log(nb1 == nb2);// retourne TRUE


//l'opérateur de comparaison === signifie 'strictement égal à'
// il permet de vérifier la VALEUR et le type
console.log(nb1 === nb2);//retourne FALSE



//- L'opérateur  != signifie  'different' de...en VALEUR'
console.log(nb1 != nb2);// retourne FALSE

// -- L'operateur !== signifie 'strictement différent de...'en VALEUR et en TYPE'
console.log(nb1 !== nb2);//retourne TRUE





//FIN

/*-------------------------------------------------------------------
EXERCICE :
J'arrive sur un Espace Sécurisé au moyen du prénom et de l'âge.
Je dois saisir mon prénom et mon age pour être authentifié sur le site (les infos sont en BDD, ici dans mes variables prenom et age).
En cas d'échec une alerte m'informe du problème.
Si tout se passe bien, un message de bienvenue m'accueille.
-------------------------------- */
var prenom = "Staline";
var monAge= 48;
var prenomLogin = prompt("quel est votre prénom?");

// 1 -- Demander son prénom à l'utilisateur avec un prompt


// 2 -- Je vérifie si le prénom saisi (prenomLogin) correspond à celui en base de donnée (prenom)
if (prenomLogin === prenom){
    var ageLogin = parseInt(prompt("Indiquez votre âge"));
    if (ageLogin === monAge){
        var mdpLogin = prompt("Le mot de passe ?");
        if (mdpLogin===mdp){ alert("Bienvenue" + prenomLogin);
    } else {
        alert("Pb mot de passe !");
    }
    else {
        alert("Erreur d'age");
    }
} else {
    alert("Attention,prenom non reconnu");
}


// 2a. Si tout est ok, je continue la vérification avec l'âge

// 2a1. Demande a mon utilisateur son l'âge via un PROMPT

// 2a2. Si les AGEs ne correspondent pas, je lance une ALERT.

// 2b. Sinon, les prénoms ne correspondent pas, je lance une ALERT.
