var note= parseFloat(prompt('Entrez votre note'));
if (note < 10) {
    document.write("Vous " + "n " + "  " +"etes " + "pas " + "admissible ");
} else if (note>10, note<=12) {
    document.write("bravo " + "vous " + "êtes " +"admis");
} else if (note>12) {
    document.write("bravo " + "vous " + "avez " + "obtenu " + "la " + "mention");
} else {
    document.write("demande " + "non" +" comprise");
}
