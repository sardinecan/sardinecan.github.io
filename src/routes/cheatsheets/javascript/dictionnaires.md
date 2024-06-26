---
title: 'Les dictionnaires'
date: '2024-06-25'
author: 'Josselin Morvan'
language: 'javascript'
keywords: ''
---

# Cheatsheet sur les Dictionnaires en JavaScript (Objets)
## Création et Déclaration de Dictionnaires

Déclaration littérale:

```javascript
let personne = {
  nom: "Alice",
  age: 30,
  emploi: "Développeuse"
};
```
Utilisation de new Object():
```javascript

    let voiture = new Object();
    voiture.marque = "Toyota";
    voiture.modele = "Corolla";
```
## Accès aux Propriétés

    Accès par notation pointée:

```javascript

let nom = personne.nom; // "Alice"
let age = personne.age; // 30
```

Accès par notation entre crochets:

```javascript
    let emploi = personne["emploi"]; // "Développeuse"
    let propriete = "nom";
    let valeur = personne[propriete]; // "Alice"
```
## Modification des Propriétés

Ajouter ou modifier une propriété:

```javascript
personne.age = 31; // Modifie "age" à 31
personne.adresse = "123 Rue Principale"; // Ajoute "adresse"
```

Supprimer une propriété:

```javascript
delete personne.adresse;
```
## Méthodes et Fonctions dans les Dictionnaires

Déclaration de méthodes:

```javascript
let animal = {
  espece: "Chat",
  parler: function() {
    return "Miaou!";
  }
};

console.log(animal.parler()); // "Miaou!"
```

Méthodes avec syntaxe raccourcie:

```javascript
let animal = {
  espece: "Chat",
  parler() {
    return "Miaou!";
  }
};
```

## Parcours des Propriétés

Boucle for...in:

```javascript
for (let propriete in personne) {
  console.log(propriete, personne[propriete]);
}
```

Object.keys (clés):

```javascript
let cles = Object.keys(personne); // ["nom", "age", "emploi"]
```

Object.values (valeurs):

```javascript
let valeurs = Object.values(personne); // ["Alice", 31, "Développeuse"]
```

Object.entries (paires clé-valeur):

```javascript
let entrees = Object.entries(personne);
// [["nom", "Alice"], ["age", 31], ["emploi", "Développeuse"]]
```

## Copies et Assignation

Assignation avec Object.assign:

```javascript
let copiePersonne = Object.assign({}, personne);
```

Fusion de plusieurs objets:

```javascript
let details = { ville: "Paris", pays: "France" };
let personneComplete = Object.assign({}, personne, details);
```

Copie par décomposition (spread operator):
```javascript
let copiePersonne = { ...personne };
```

## Comparaison et Tests

Comparaison de propriétés:

```javascript
let aComparaison = personne.age === 31; // true
```

Vérification de l'existence d'une propriété:

```javascript
"nom" in personne; // true
personne.hasOwnProperty("emploi"); // true
```

## Méthodes Utiles de Object

Object.freeze (immuabilité):

```javascript
Object.freeze(personne);
personne.age = 32; // Ne changera pas
```

Object.seal (empêche l'ajout/suppression de propriétés):

```javascript
Object.seal(personne);
personne.nom = "Bob"; // Fonctionne
delete personne.nom; // Ne fonctionne pas
```

Object.isFrozen:

```javascript
Object.isFrozen(personne); // true ou false
```

Object.isSealed:

```javascript
Object.isSealed(personne); // true ou false
```

## Manipulation Avancée

Créer des objets avec un prototype:

```javascript
let prototypeVehicule = {
  demarrer() {
    console.log("Véhicule démarré");
  }
};

let voiture = Object.create(prototypeVehicule);
voiture.marque = "Toyota";
voiture.demarrer(); // "Véhicule démarré"
```

Définir des propriétés avec des descripteurs:

```javascript
let utilisateur = {};
Object.defineProperty(utilisateur, "nom", {
  value: "Alice",
  writable: false, // Ne peut pas être modifié
  enumerable: true, // Apparaît dans les boucles
  configurable: false // Ne peut pas être supprimé
});
```

Accesseurs (get et set):

```javascript
let compteur = {
  _valeur: 0,
  get valeur() {
    return this._valeur;
  },
  set valeur(valeur) {
    if (valeur > 0) {
      this._valeur = valeur;
    }
  }
};

compteur.valeur = 5;
console.log(compteur.valeur); // 5
```

## Structures de Données Alternatives

Utilisation de Map:

```javascript
let map = new Map();
map.set("nom", "Alice");
map.set("age", 31);
console.log(map.get("nom")); // "Alice"
```

Utilisation de WeakMap:

```javascript
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "Some value");
```
