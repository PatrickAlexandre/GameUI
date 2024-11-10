// Valeurs initiales pour la santé, santé maximale, mana, et mana maximale
let sante = 763;
const santeMaximale = 914;
let mana = 200;
const manaMaximale = 200;

// Fonction pour mettre à jour les barres de santé et de mana dynamiquement
function mettreAJourBarres() {
    const pourcentageSante = (sante / santeMaximale) * 100;
    const pourcentageMana = (mana / manaMaximale) * 100;

    document.querySelector(".remplissage-sante").style.width = `${pourcentageSante}%`;
    document.querySelector(".remplissage-mana").style.width = `${pourcentageMana}%`;

    document.getElementById("valeur-sante").textContent = `${sante} / ${santeMaximale}`;
    document.getElementById("valeur-mana").textContent = `${mana} / ${manaMaximale}`;
}

// Appel initial pour définir les valeurs
mettreAJourBarres();
