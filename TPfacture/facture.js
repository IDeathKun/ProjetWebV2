//Pierre-Lâm Nguyen

function calculer() {
    var prix1 = document.getElementById('prix1').value ;
    var quantite1 = document.getElementById('quantite1').value ;
    var resultat1 = prix1 * quantite1;
    document.getElementById('resultat1').value = resultat1;

    var prix2 = document.getElementById('prix2').value ;
    var quantite2 = document.getElementById('quantite2').value ;
    var resultat2 = prix2 * quantite2;
    document.getElementById('resultat2').value = resultat2;

    var prix3 = document.getElementById('prix3').value ;
    var quantite3 = document.getElementById('quantite3').value ;
    var resultat3 = prix3 * quantite3;
    document.getElementById('resultat3').value = resultat3;

    var total = resultat1 + resultat2 + resultat3;
    document.getElementById('total').value = total;
}

//Simple efficace ezzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

function reinitialiser() {
    document.getElementById('quantite1').value = '';
    document.getElementById('quantite2').value = '';
    document.getElementById('quantite3').value = '';
    document.getElementById('resultat1').value = '';
    document.getElementById('resultat2').value = '';
    document.getElementById('resultat3').value = '';
    document.getElementById('prix2').value = '';
    document.getElementById('prix3').value = '';
    document.getElementById('total').value = '';
}