---
title: 'Fondamentaux'
date: '2024-06-25'
author: 'Josselin Morvan'
language: 'javascript'
keywords: ''
---

# 📝 les fondamentaux de JavaScript
## Syntaxe de Base

Variables :

```javascript
var nom = "Alice";     // Variable globale ou locale
let age = 25;          // Variable locale (bloc-scope)
const PI = 3.14159;    // Constante
```

Types de données :

```javascript
let chaine = "Bonjour"; // String
let nombre = 42;        // Number
let estVrai = true;     // Boolean
let indefini;           // Undefined
let nul = null;         // Null
let symbol = Symbol();  // Symbol
let objet = { nom: "Alice", age: 25 }; // Object
```

Opérateurs :

```javascript
// Arithmétiques
+, -, *, /, %

// Comparaison
==, ===, !=, !==, >, <, >=, <=

// Logiques
&&, ||, !

// Affectation
=, +=, -=, *=, /=

// Autres
typeof, instanceof
```

## Structures de Contrôle

Conditions :

```javascript
if (condition) {
  // code
} else if (autreCondition) {
  // code
} else {
  // code
}

// Opérateur ternaire
let result = condition ? valeurSiVrai : valeurSiFaux;
```

Boucles :

```javascript
for (let i = 0; i < 10; i++) {
  // code
}

while (condition) {
  // code
}

do {
  // code
} while (condition);

// Boucle sur les propriétés d'un objet
for (let key in objet) {
  // code
}

// Boucle sur les valeurs d'un tableau
for (let value of tableau) {
  // code
}
```

## Fonctions
Déclaration :

```javascript
function nomFonction(param1, param2) {
  // code
}

// Expression de fonction
let maFonction = function(param1, param2) {
  // code
};

// Fonction fléchée
let maFonction = (param1, param2) => {
  // code
};
```

Fonctions Callback :

```javascript
function operation(a, b, callback) {
  return callback(a, b);
}

operation(5, 3, (x, y) => x + y); // Utilisation de la fonction
```

## Objets et Tableaux
Objets :

```javascript
let personne = {
  nom: "Alice",
  age: 25,
  salut: function() {
    return "Bonjour, je suis " + this.nom;
  }
};

// Accès aux propriétés
personne.nom;          // "Alice"
personne["age"];       // 25

// Accès aux méthodes
personne.salut();      // "Bonjour, je suis Alice"
```

Tableaux :

```javascript
let fruits = ["Pomme", "Banane", "Cerise"];

// Accès aux éléments
fruits[0];             // "Pomme"
fruits.length;         // 3

// Méthodes de tableau
fruits.push("Orange"); // Ajoute un élément à la fin
fruits.pop();          // Retire le dernier élément
fruits.shift();        // Retire le premier élément
fruits.unshift("Kiwi");// Ajoute un élément au début
fruits.sort();         // Trie le tableau
fruits.reverse();      // Inverse l'ordre du tableau
```

## Manipulation du DOM
Sélection d'éléments :

```javascript
let element = document.getElementById("id");
let elements = document.getElementsByClassName("classe");
let elements = document.getElementsByTagName("tag");
let element = document.querySelector(".classe"); // Premier élément correspondant
let elements = document.querySelectorAll(".classe"); // Tous les éléments correspondants
```

Modification d'éléments :

```javascript
element.innerHTML = "Nouveau contenu";  // Modifie le HTML interne
element.style.color = "red";            // Modifie le style

// Gestion des attributs
element.setAttribute("data-test", "valeur");
let valeur = element.getAttribute("data-test");
```

Gestion des événements :

```javascript
element.addEventListener("click", function() {
  // code
});

function maFonction(event) {
  // code
}
element.addEventListener("click", maFonction);
```

## Programmation Asynchrone
Callbacks :

```javascript
function loadData(callback) {
  setTimeout(() => {
    callback("Données chargées");
  }, 1000);
}

loadData((data) => {
  console.log(data); // "Données chargées"
});
```

Promises :

```javascript
let maPromesse = new Promise((resolve, reject) => {
  if (/* condition */) {
    resolve("Succès");
  } else {
    reject("Erreur");
  }
});

maPromesse
  .then((resultat) => console.log(resultat))
  .catch((erreur) => console.log(erreur));
```

Async/Await :

```javascript
async function fetchData() {
  try {
    let data = await fetch("https://api.exemple.com/data");
    let result = await data.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
```

## ES Modules
Exportation :

```javascript
// fichier.js
export const PI = 3.14159;
export function ajouter(a, b) {
  return a + b;
}

// Exportation par défaut
export default class MaClasse {
  // code
}
```

Importation :

```javascript
import { PI, ajouter } from './fichier.js';
import MaClasse from './fichier.js';
```

## Manipulation du JSON
Conversion JSON :

```javascript
let objet = { nom: "Alice", age: 25 };
let jsonString = JSON.stringify(objet); // Objet vers JSON

let nouveauObjet = JSON.parse(jsonString); // JSON vers Objet
```

## Erreurs et Débogage
Gestion des erreurs :

```javascript
try {
  // code
} catch (erreur) {
  console.error(erreur);
} finally {
  // code
}
```

Débogage:
```javascript
console.log("Message de débogage");
console.warn("Avertissement");
console.error("Erreur");
```

## Bonnes Pratiques

- Utilisez let et const au lieu de var.
- Évitez les globaux.
- Utilisez des noms de variables explicites.
- Modularisez le code.
- Gérez les erreurs de manière appropriée.
- Commentez le code là où c'est nécessaire.
