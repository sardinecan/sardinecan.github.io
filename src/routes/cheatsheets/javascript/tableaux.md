---
title: 'Les tableaux'
date: '2024-06-25'
author: 'Josselin Morvan'
language: 'javascript'
keywords: ''
---

# Cheatsheet sur les Tableaux en JavaScript

## Création et Déclaration de Tableaux

Déclaration de tableau:

```javascript
let fruits = ["Pomme", "Banane", "Cerise"];
let nombres = [1, 2, 3, 4, 5];
let mixte = ["Texte", 42, true, null];
```

Utilisation du constructeur Array:

```javascript
let tableau = new Array(); // Tableau vide
let tableauAvecTaille = new Array(10); // Tableau avec taille définie
let tableauAvecValeurs = new Array("A", "B", "C");
```

## Accès et Modification des Éléments

Accès aux éléments:

```javascript
let premier = fruits[0]; // "Pomme"
let dernier = fruits[fruits.length - 1]; // "Cerise"
```

Modification des éléments:

```javascript
fruits[1] = "Kiwi"; // Change "Banane" en "Kiwi"
```

## Méthodes de Base des Tableaux
Ajout et suppression d'éléments:

```javascript
fruits.push("Orange"); // Ajoute "Orange" à la fin
let dernierElement = fruits.pop(); // Supprime et retourne le dernier élément

fruits.unshift("Raisin"); // Ajoute "Raisin" au début
let premierElement = fruits.shift(); // Supprime et retourne le premier élément
```

Concaténation:

```javascript
let plusDeFruits = fruits.concat(["Ananas", "Mangue"]);
```

Tranchage (slice):

```javascript
let quelquesFruits = fruits.slice(1, 3); // Du deuxième au troisième élément
```

Splice (modification, ajout ou suppression d’éléments):

```javascript
fruits.splice(2, 1, "Pêche"); // Remplace "Cerise" par "Pêche" à l'index 2
fruits.splice(1, 2); // Supprime deux éléments à partir de l'index 1
```

## Méthodes de Recherches et Parcours

Recherche:

```javascript
let indexBanane = fruits.indexOf("Banane"); // Trouve l'index de "Banane"
let dernierIndexCerise = fruits.lastIndexOf("Cerise"); // Dernier index de "Cerise"
let existePomme = fruits.includes("Pomme"); // Vérifie si "Pomme" est présent
```

Parcours:

```javascript
fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});

for (let fruit of fruits) {
    console.log(fruit);
}
```

## Transformation et Filtrage

Transformation (map):

```javascript
let fruitsEnMajuscules = fruits.map(fruit => fruit.toUpperCase());

Filtrage (filter):

javascript
let fruitsAvecA = fruits.filter(fruit => fruit.includes("a"));
```

## Réduction

Réduction (reduce):

```javascript
let somme = nombres.reduce((total, nombre) => total + nombre, 0);
```

Réduction vers un objet:

```javascript
let fruitsObjet = fruits.reduce((obj, fruit) => {
    obj[fruit] = true;
    return obj;
}, {});
```

## Tri et Inversion

Tri (sort):

```javascript
fruits.sort(); // Trie par ordre alphabétique
nombres.sort((a, b) => a - b); // Trie par ordre croissant
```

Inversion (reverse):

```javascript
fruits.reverse(); // Inverse l'ordre des éléments
```

## Fusion et Division

Fusion (join):

```javascript
let chaineFruits = fruits.join(", "); // "Pomme, Kiwi, Cerise"
```

Division (split):

```javascript
let tableauNoms = "Alice, Bob, Carol".split(", "); // ["Alice", "Bob", "Carol"]
```

## Remplissage et Copie

Remplissage (fill):

```javascript
let tableauRempli = new Array(5).fill("A"); // ["A", "A", "A", "A", "A"]
```

Copie (copyWithin):

```javascript
let fruitsCopie = ["Pomme", "Banane", "Cerise", "Kiwi"];
fruitsCopie.copyWithin(1, 2, 3); // ["Pomme", "Cerise", "Cerise", "Kiwi"]
```

## Autres Méthodes Utiles

Platification (flat):

```javascript
let tableau2D = [1, [2, 3], [4, [5]]];
let tableauPlat = tableau2D.flat(); // [1, 2, 3, 4, [5]]
let tableauPlatProfondeur = tableau2D.flat(2); // [1, 2, 3, 4, 5]
```

Mapping avec platification (flatMap):

```javascript
let phrases = ["Bonjour à tous", "Comment ça va"];
let mots = phrases.flatMap(phrase => phrase.split(" ")); // ["Bonjour", "à", "tous", "Comment", "ça", "va"]
```

Trouver (find et findIndex):

```javascript
let premierFruitAvecI = fruits.find(fruit => fruit.includes("i"));
let indexPremierFruitAvecI = fruits.findIndex(fruit => fruit.includes("i"));
```

Tester (some et every):

```javascript
let auMoinsUnFruitAvecA = fruits.some(fruit => fruit.includes("a"));
let tousLesFruitsAvecA = fruits.every(fruit => fruit.includes("a"));
```

## Itération Avancée

entries, keys, values:

```javascript
let entrees = fruits.entries();
for (let [index, fruit] of entrees) {
  console.log(index, fruit);
}

let indices = fruits.keys();
for (let index of indices) {
  console.log(index);
}

let valeurs = fruits.values();
for (let valeur of valeurs) {
  console.log(valeur);
}
```

## Spécificités

Tableaux à trous (Sparse Arrays):

```javascript
let tableauTroue = [1, , 3]; // Le deuxième élément est "troué"
console.log(tableauTroue.length); // 3
console.log(tableauTroue[1]); // undefined
```

Tableaux typés:

```javascript
let tableauEntiers = new Int32Array([1, 2, 3, 4]);
```