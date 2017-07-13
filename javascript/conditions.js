//alert("YOOU OUU")

// -- Structure de base IF
if (true) { /* par défaut la condition à verifier le IF vérifie si elle est vraie */
    /*...code...*/
}

var nb1 = 10;
if (nb1 < 50) {
    console.log("nb1 est bien inférieur à 50");
}

if (true) {
   /*...code si VRAI...*/

} else {
      /*...code si FAUX...*/
}

if (nb1 > 50) {
   console.log("nb1 est bien supérieur à 50");
   } else {
   console.log("nb1 n'est pas supérieur à 50");
   }


/* Exercice
On utilise le IF pour verifier l'âge de l'internaute.
=> s'il est majeur je lui souhaite la bienvenue
=>s'il est mineur je lui signale et le renvoie vers un autre souhaite
*/

 // 1 -- déclare la majorité légale
 var MajoriteFR = 18;

 //2 -- demander l'âge en s'assurant que nous avons un NUMBER
 var age = parseInt(prompt("Indiquez votre âge"));


 // 3 -- je verifie si mon interlocuteur est majeur

 if (age >=MajoriteFR) { //bienvenue si vrai

    alert("Bienvenue, vous êtes majeur");
} else {
    // s'il est mineur je lui signale
    alert("Allez voir un autre super site...");

//et ensuite je redirige vers le reportage de Staline
document.location.href = "https://www.youtube.com/watch?v=0B_jbEHV2lc"
}
