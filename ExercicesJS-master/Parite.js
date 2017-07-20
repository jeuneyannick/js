// for (var i = 1; i <= 10; i++) {
//     ://if (i % 2 === 0) {
//         console.log(i + " est pair");
//     }else (console.log (i + "est impair"));
// }


var nbUtilisateur = parseInt(prompt('Saissisez un nombre '));
var nbMax = nbUtilisateur + 10;
for (var i = nbUtilisateur ; i<nbMax; i++) {
    if (i % 2 === 0) {
        console.log(i + " est pair");
    }
    else {
        console.log (i + "est impair");
    }
}
