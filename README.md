# Script de Développement Personnel et Financier

- évaluer et estimer votre vie en vous comparant aux autres
- dix indicateurs clés (en cherchant sur internet) accompagnés de leurs calculs et des icônes correspondantes
- Utiliser jQuery pour : Afficher le modal pour Créer le personnage (formulaire avec tous les input pour les calculs sur la page), puis acceder à l'UI. Il y a un bouton avec une icone de profil pour faire apparaitre le modal de personnage afin de modifier des informations si necessaire.
- améliore l'UI et l'UX pour une expérience immersive de jeu vidéo

## 🏗 What's next?

- JavaScript : En trois parties (Chargement et Sauvegarde avec localStorage) (Fonction pour calculer les résultats) (Affichage des résultats avec output).
- icones, output, gras, couleur pour mettre en valeur les résultats.

---
<input> : Pour entrer les données
- Nom, Prénom
- Date de Naissance

- Niveau d'Activité Phyique (range)

- Revenus
- Épargne % (range)
- Dépenses

<output> : Pour afficher les résultats
- IMC
- Poids Idéal (Devine et Lorentz)
- DEJ (les 3 formules)
- MBR
- Revenus - Épargne - Dépenses
---

## 🎨 Where to find everything
## CDN JS | Librairies

### CSS :
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

### JavaScript : 
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.6.0"></script>

---

# Guide pas à pas pour créer une page HTML "Formule Secrète" avec un style personnalisé

Ce guide vous explique comment créer une page HTML pour afficher une "formule secrète" en utilisant les éléments HTML, CSS, et Bootstrap. Voici le code complet :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formule Secrète</title>
    <link href="https://fonts.googleapis.com/css2?family=Bangers&family=VT323&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #f8f9fa;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .formule-secrete {
            text-align: center;
            font-family: 'VT323', monospace;
            padding: 20px;
        }
        .titre-secret {
            font-family: 'Bangers', cursive;
            font-size: 3rem;
            margin-bottom: 0;
        }
        .sous-titre {
            font-size: 1.5rem;
            margin-bottom: 2rem;
        }
        .ligne-formule {
            font-size: 1.5rem;
        }
    </style>
</head>
<body>

<div class="formule-secrete">
    <h1 class="titre-secret">FORMULE SECRÈTE</h1>
    <p class="sous-titre">pour Pâtés de Crabe</p>
    <div class="container">
        <div class="row ligne-formule">
            <div class="col-6 text-end">
                <p>xwogfjeil</p>
                <p>gdSgehSg</p>
                <p>shFhgh</p>
                <p>Bgtyfjei</p>
                <p>idquifle</p>
                <p>sjyiled</p>
            </div>
            <div class="col-6 text-start">
                <p>1 c. à thé</p>
                <p>4 tasses</p>
                <p>haché</p>
                <p>2 c. à soupe</p>
                <p>en dés</p>
                <p>1 tasse</p>
                <p>1/2 tasse</p>
            </div>
        </div>
    </div>
</div>

</body>
</html>
```

## Explications du code

### En-tête HTML (`<head>`)
1. **Encodage UTF-8** : `<meta charset="UTF-8">` permet de gérer correctement les caractères spéciaux.
2. **Viewport** : `<meta name="viewport" content="width=device-width, initial-scale=1.0">` adapte l’affichage aux appareils mobiles.
3. **Police Google** : Le lien vers Google Fonts importe les polices "Bangers" et "VT323".
4. **Bootstrap** : Le lien vers Bootstrap fournit des classes pour faciliter la mise en page.

### CSS
- **Background et alignement** : Le corps de la page est centré avec une couleur de fond douce (`#f8f9fa`).
- **.formule-secrete** : Classe pour styliser la section centrale et utiliser la police "VT323".
- **.titre-secret** : Police "Bangers" et taille importante pour le titre.
- **.sous-titre** et **.ligne-formule** : Taille de police pour les sous-titres et les éléments de la formule.

### Corps HTML (`<body>`)
1. **Conteneur principal** (`<div class="formule-secrete">`) : Il contient le titre et les sections de la formule.
2. **Titre principal** (`<h1 class="titre-secret">`) : "FORMULE SECRÈTE" en police Bangers.
3. **Sous-titre** : Le sous-titre "pour Pâtés de Crabe" en dessous du titre.
4. **Lignes de la formule** :
   - Deux colonnes Bootstrap (`col-6`), alignées à droite et à gauche pour simuler une liste d’ingrédients et leurs quantités respectives.
   
Vous devriez maintenant avoir une page HTML stylée présentant une formule secrète, centrée et avec une typographie rétro. N'hésitez pas à ajuster les styles ou les éléments selon vos préférences !


[Rédiger le code complet, en un seul bloc de code]