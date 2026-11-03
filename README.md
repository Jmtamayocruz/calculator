# 🧮 Calculatrice Web (Inspirée de Windows 11)

Une application web de calculatrice moderne, locale et interactive, développée en **JavaScript pur (Vanilla JS)**, **HTML5** et **CSS3**. Son design et son ergonomie sont inspirés de la calculatrice standard de Windows 11.

---

## 📌 Présentation du Projet

Ce projet reproduit le comportement d'une calculatrice de bureau complète directement dans le navigateur, sans dépendre d'aucune bibliothèque externe ni de serveur backend. 

Elle prend en charge la saisie double : à la fois à l'aide des clics de souris sur l'interface et directement depuis le clavier physique ou le pavé numérique.

---

## 🚀 Fonctionnalités

- **Double mode d'interaction** :
  - **Interface tactile / Souris** : Grille de boutons réactive avec effets d'appuis.
  - **Clavier mécanique & Pavé numérique** : Prise en charge des touches numériques, des opérateurs, de `Backspace`, `Escape`, `Enter` et des parenthèses.
- **Gestion intelligente de la virgule** : Protection anti-double virgule par analyse de la séquence numérique courante (découpage dynamique des expressions).
- **Opérateurs et remplacement rapide** : Remplacement automatique du dernier opérateur saisi en cas de changement d'avis ou d'erreur.
- **Bouton Parenthèse dynamique `()`** : Calcul automatique des occurrences pour alterner intelligemment entre parenthèse ouvrante `(` et fermante `)`.
- **Historique supérieur (`display-sup`)** : Affichage clair du calcul précédent suivi du signe `=`.
- **Évaluation sécurisée** : Utilisation du bloc `try...catch` pour capturer les expressions mathématiques invalides et afficher une alerte `Error`.

---

## 📁 Structure du Projet

```text
├── index.html   # Structure sémantique HTML5 de la calculatrice
├── styles.css   # Style et mise en page (CSS Grid, Flexbox, design Windows 11)
└── script.js    # Logique métier, fonctions de calcul et écouteurs d'événements
```

---

## 🛠️ Technologies Utilisées

* **HTML5** : Structuration sémantique de l'écran supérieur, de l'écran inférieur et des touches de la calculatrice (`data-attributes` pour les valeurs et actions).
* **CSS3** : Layout moderne avec CSS Grid et Flexbox, typographie épurée et stylisation du cadran.
* **JavaScript (ES6 Vanilla)** : 
  - Manipulation du DOM sans framework.
  - Gestion de l'état local (`currentInput`, `previousInput`).
  - Expressions Régulières (RegEx) pour le traitement des chaînes.
  - Gestionnaires d'événements `click` et `keydown` avec la syntaxe classique `function`.

---

## 🎮 Mode d'Emploi

### Raccourcis Clavier
| Touche Clavier | Action Associée |
| :--- | :--- |
| `0` à `9` | Saisie d'un chiffre |
| `,` ou `.` | Séparateur décimal (converti automatiquement en virgule) |
| `+`, `-`, `*`, `/`, `%` | Opérateurs mathématiques |
| `(` et `)` | Insertion dynamique des parenthèses |
| `Enter` ou `=` | Calcul du résultat final |
| `Backspace` | Effacer le dernier caractère saisi |
| `Escape` ou `Delete` | Réinitialisation complète (`Clear All`) |

---

## 📸 Captures d'Écran

| Démo en direct de calcul, erreur, etc. |
https://github.com/user-attachments/assets/a75fb116-0cb7-4263-a5f6-2786bea4bfe7

---

## 👤 Auteur & Crédits

* **Développé par** : [Joaquin](https://github.com/Jmtamayocruz)
* **Contexte** : Projet d'entraînement personnel réalisé dans le cadre de la préparation à la formation **Web Dev Full Stack**.
