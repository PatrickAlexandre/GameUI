// calculations.js

// Calcul de l'âge en années et jours
function calculerAge(dateNaissance) {
    const birthDate = new Date(dateNaissance);
    const today = new Date();
    const ageInMilliseconds = today - birthDate;
    const ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
    let ageInYears = today.getFullYear() - birthDate.getFullYear();

    // Correction de l'âge en années si l'anniversaire de l'année en cours n'est pas encore passé
    if (
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
    ) {
        ageInYears--;
    }

    return { years: ageInYears, days: ageInDays };
}

// Calcul du métabolisme de base (MB)
function calculerMB() {
    const poids = parseFloat(document.getElementById("poids").value) || 70;
    const taille = parseFloat(document.getElementById("taille").value) || 170;
    const dateNaissance = document.getElementById("date_naissance").value;
    const ageData = calculerAge(dateNaissance);
    const sexeElement = document.querySelector('input[name="sexe"]:checked');

    if (!sexeElement) {
        alert("Veuillez sélectionner le sexe.");
        return;
    }

    const sexe = sexeElement.value;
    let MB;

    if (sexe === "male") {
        MB = 88.362 + (13.397 * poids) + (4.799 * taille) - (5.677 * ageData.years);
    } else {
        MB = 447.593 + (9.247 * poids) + (3.098 * taille) - (4.330 * ageData.years);
    }

    document.getElementById("sante").innerText = MB.toFixed(2);
    return MB;
}

// Calcul du Métabolisme Basal en fonction du niveau d'activité
function calculerMBR() {
    const niveauActivite = parseFloat(document.getElementById("niveau_activite").value) || 1;
    const MB = calculerMB();
    
    if (isNaN(MB)) {
        return;
    }

    const BMR = MB * niveauActivite;
    document.getElementById("sante").innerText = BMR.toFixed(2);
    return BMR;
}

// Calcul des finances
function calculerFinance() {
    const revenus = parseFloat(document.getElementById("revenus").value) || 0;
    const depenses = parseFloat(document.getElementById("depenses").value) || 0;
    const epargnePourcentage = parseFloat(document.getElementById("epargne").value) || 0;

    const epargneMontant = (revenus * epargnePourcentage) / 100;
    const solde = revenus - depenses - epargneMontant;

    document.getElementById("argent").innerText = solde.toFixed(2);
    return { solde, epargneMontant };
}

// Appels automatiques des fonctions de calcul pour chaque entrée modifiée
document.getElementById("poids").oninput = calculerMB;
document.getElementById("taille").oninput = calculerMB;
document.getElementById("date_naissance").oninput = calculerMB;
document.getElementById("niveau_activite").oninput = calculerMBR;
document.getElementById("revenus").oninput = calculerFinance;
document.getElementById("depenses").oninput = calculerFinance;
document.getElementById("epargne").oninput = calculerFinance;
