$(document).ready(function () {
    // Sons d'ambiance (optionnels, à commenter si non utilisés)
    const soundClick = new Audio('click-sound.mp3'); // Assurez-vous d'avoir un fichier sonore pour le clic
    const soundSuccess = new Audio('success-sound.mp3'); // Son de réussite pour les enregistrements
    const playSound = (sound) => sound.play();

    // Charger les informations personnelles initiales
    const loadInitialInfo = () => {
        const initialInfo = JSON.parse(localStorage.getItem('initialInfo'));
        if (initialInfo) {
            $('#name').val(initialInfo.name);
            $('#firstName').val(initialInfo.firstName);
            $('#birthDate').val(initialInfo.birthDate);
            $('#initialInfoModal').modal('hide');
        } else {
            $('#initialInfoModal').modal('show');
        }
    };

    // Enregistrer les informations personnelles
    const saveInitialInfo = (data) => {
        if (data.name && data.firstName && data.birthDate) {
            localStorage.setItem('initialInfo', JSON.stringify(data));
            playSound(soundSuccess); // Son de succès à l'enregistrement
        } else {
            alert("Veuillez remplir toutes les informations personnelles.");
        }
    };

    // Charger les informations financières variables
    const loadVariableInfo = () => {
        const variableInfo = JSON.parse(localStorage.getItem('variableInfo'));
        if (variableInfo) {
            $('#activityLevel').val(variableInfo.activityLevel);
            $('#income').val(variableInfo.income);
            $('#savingsRate').val(variableInfo.savingsRate);
            $('#expenses').val(variableInfo.expenses);
        }
    };

    // Enregistrer les informations financières variables
    const saveVariableInfo = (data) => {
        if (data.income >= 0 && data.savingsRate >= 0 && data.expenses >= 0 && data.activityLevel) {
            localStorage.setItem('variableInfo', JSON.stringify(data));
            playSound(soundSuccess); // Son de succès à l'enregistrement
        } else {
            alert("Veuillez entrer des valeurs valides pour les informations financières.");
        }
    };

    // Calcul des résultats financiers
    const calculateResults = (data) => {
        try {
            const initialInfo = JSON.parse(localStorage.getItem('initialInfo'));
            const age = new Date().getFullYear() - new Date(initialInfo.birthDate).getFullYear();

            const financialBalance = (data.income - data.expenses).toFixed(2);
            const savingsPotential = ((data.income - data.expenses) * data.savingsRate / 100).toFixed(2);

            return {
                financialBalance,
                savingsPotential
            };
        } catch (error) {
            console.error("Erreur lors du calcul des résultats :", error);
            alert("Impossible de calculer les résultats. Veuillez vérifier vos données.");
            return null;
        }
    };

    // Affichage des résultats financiers avec animation
    const displayResults = (results) => {
        if (results) {
            $('#results').html(`
                <p><strong>Balance Financière :</strong> ${results.financialBalance} €</p>
                <p><strong>Potentiel d'Épargne :</strong> ${results.savingsPotential} €</p>
            `);
            $('#results').fadeIn(500); // Animation d'affichage en fondu
        } else {
            $('#results').html('<p class="text-danger">Erreur dans le calcul des résultats.</p>');
        }
    };

    // Gestion du formulaire d'informations initiales
    $('#initialInfoForm').submit(function (event) {
        event.preventDefault();
        const initialInfo = {
            name: $('#name').val().trim(),
            firstName: $('#firstName').val().trim(),
            birthDate: $('#birthDate').val()
        };
        saveInitialInfo(initialInfo);
        $('#initialInfoModal').modal('hide');
    });

    // Ouverture du modal d'informations variables et chargement des données
    $('#openModalBtn').click(() => {
        playSound(soundClick); // Son de clic pour une expérience immersive
        $('#variableInfoModal').modal('show');
        loadVariableInfo();
    });

    // Gestion du formulaire d'informations variables
    $('#variableInfoForm').submit(function (event) {
        event.preventDefault();
        const variableInfo = {
            activityLevel: $('#activityLevel').val(),
            income: parseFloat($('#income').val()),
            savingsRate: parseFloat($('#savingsRate').val()),
            expenses: parseFloat($('#expenses').val())
        };

        saveVariableInfo(variableInfo);
        const results = calculateResults(variableInfo);
        displayResults(results);
        $('#variableInfoModal').modal('hide');
    });

    // Charger les informations au chargement de la page
    loadInitialInfo();
});
