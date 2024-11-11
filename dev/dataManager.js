// dataManager.js

// Fonction pour sauvegarder les données dans le stockage local
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Fonction pour charger les données du stockage local
function loadData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Fonction pour récolter les données des formulaires
function gatherData(formId) {
    const form = document.getElementById(formId);
    const formData = new FormData(form);
    let dataObject = {};
    formData.forEach((value, key) => {
        dataObject[key] = value;
    });
    return dataObject;
}

// Fonction pour gérer les données de l'utilisateur pour chaque section
function saveUserData() {
    const genetiqueData = gatherData("Genetique");
    const environnementData = gatherData("Environnement");
    const argentData = gatherData("Argent");

    saveData("genetique", genetiqueData);
    saveData("environnement", environnementData);
    saveData("argent", argentData);
}

// Fonction pour charger et afficher les données de l'utilisateur
function loadUserData() {
    const genetiqueData = loadData("genetique");
    const environnementData = loadData("environnement");
    const argentData = loadData("argent");

    if (genetiqueData) {
        document.getElementById("nom").value = genetiqueData.nom || "";
        document.getElementById("prenom").value = genetiqueData.prenom || "";
        document.getElementById("date_naissance").value = genetiqueData.date_naissance || "";
        document.getElementById("taille").value = genetiqueData.taille || 170;
        document.querySelector(`input[name="sexe"][value="${genetiqueData.sexe}"]`).checked = true;
    }

    if (environnementData) {
        document.getElementById("niveau_activite").value = environnementData.niveau_activite || 1;
        document.getElementById("poids").value = environnementData.poids || 70;
    }

    if (argentData) {
        document.getElementById("revenus").value = argentData.revenus || "";
        document.getElementById("depenses").value = argentData.depenses || "";
        document.getElementById("epargne").value = argentData.epargne || 0;
    }
}

// Charger les données au démarrage de la page
window.onload = loadUserData;
