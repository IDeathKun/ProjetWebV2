// Fonction d'addition
function addition() {
    let t1 = parseFloat(document.getElementById("t1").value);
    let t2 = parseFloat(document.getElementById("t2").value);
    document.getElementsByName("t3")[0].value = t1 + t2;
}

// Fonction de soustraction
function soustraction() {
    let t1 = parseFloat(document.getElementById("t1").value);
    let t2 = parseFloat(document.getElementById("t2").value);
    document.getElementsByName("t3")[0].value = t1 - t2;
}

// Fonction de division
function division() {
    let t1 = parseFloat(document.getElementById("t1").value);
    let t2 = parseFloat(document.getElementById("t2").value);
    document.getElementsByName("t3")[0].value = t2 !== 0 ? (t1 / t2).toFixed(2) : "Erreur : division par zéro";
}

// Fonction de multiplication
function multipication() {
    let t1 = parseFloat(document.getElementById("t1").value);
    let t2 = parseFloat(document.getElementById("t2").value);
    document.getElementsByName("t3")[0].value = t1 * t2;
}

// Fonction pour vérifier la parité du premier chiffre
function parite() {
    let t1 = parseFloat(document.getElementById("t1").value);
    document.getElementsByName("t4")[0].value = (t1 % 2 === 0) ? "Pair" : "Impair";
}

// Fonction pour permuter les valeurs des deux champs d'entrée
function permute() {
    let t1 = document.getElementById("t1").value;
    let t2 = document.getElementById("t2").value;
    document.getElementById("t1").value = t2;
    document.getElementById("t2").value = t1;
}
