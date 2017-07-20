var choix = parseInt(prompt('Saississez un chiffre'))
for(var i = 1; i<=10; i++) {
    var res = choix * i;
    document.write(choix + "x" + i + "=" + res + "<br />");
}

var choix = prompt ("Choisis un nombre :");
if ((choix >= 2) && (choix <=9)) {
     for(var i = 1; i<=10 ; i++){
         var res = choix*1;
         document.write(choix +"x" + i + "="+ res + "<br />");
     }
 } else {
     document.write("<h4>Le chiffre doit être entre 2 et 9 ! </h4>")
 }
