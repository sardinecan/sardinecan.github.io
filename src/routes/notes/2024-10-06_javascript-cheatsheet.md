---
title: 'JavaScript - cheatsheet'
date: '2024-10-06'
category: 'cheatsheet'
author: 'jmorvan'
keywords: 'cheatsheet ; javascript ; js'
---

# JavaScript
JavaScript est un langage de programmation utilisé pour créer des interactions dynamiques sur les pages web.
## Syntaxe JavaScript
### Variables et Types
JavaScript propose différentes manières de déclarer des variables :

- `var` : déclare une variable avec un portée fonctionnelle (avant ES6).
- `let` : déclare une variable avec une portée bloc (ES6+).
- `const` : déclare une constante avec une portée bloc, sa valeur ne peut pas être réassignée.

```javascript
var x = 10;
let y = 20;
const z = 30;
```
Le point-virgule (`;`) en JavaScript est un caractère de syntaxe essentiel qui marque la fin d'une instruction. Ce caractère est parfois optionnel (mécanisme d'insertion automatique ASI - Automatic Semicolon Insertion), et peut donc être source d'erreur.

Il délimite les instructions. Chaque fois qu'on termine une instruction (comme une déclaration de variable ou un appel de fonction), il faut utiliser le point virgule.

Dans certaines situations, JavaScript insère automatiquement des points-virgules :
```javascript
let x = 10
let y = 20
console.log(x + y) // Affiche 30
```
Dans cet exemple, le code s'exécute sans problème, car JavaScript insère des points-virgules là où c'est nécessaire.

Mais lorsque le code est mal structuré cela peut devenir problématique
```javascript
return
{
    message: "Hello"
}
```

Ici, JavaScript interprète la ligne `return` comme une instruction complète et insère un point-virgule après celle-ci. Le bloc suivant n'est donc pas associé au `return`, ce qui renvoie `undefined`. Il faudrait écrire le code comme suit :
```javascript
return {
    message: "Hello"
};
```

Dans certains cas, le point-virgule est obligatoire, c'est le cas avec les fonctions exécutées immédiatement (IIFE). Elles nécessitent un point-virgule avant leur déclaration pour éviter des erreurs de syntaxe.
```javascript
;(function() {
    console.log("IIFE exécutée !");
})();
```
idem lorsque plusieurs instructions sont sur la même ligne
```javascript
let x = 5; let y = 10; console.log(x + y); // Affiche 15
```

Il peut être omis sans provoquer d'erreurs avec les blocs conditionnels, les boucless, et les déclarations de fonctions
```javascript
if (true) {
    console.log("Condition vraie");
}

function hello() {
    console.log("Bonjour !");
}
```
Une bonne pratique est de l'utiliser systématiquement et d'être cohérent si on ne l'utilise pas partout.

Types de données JavaScript :
- `Number` : entiers ou nombres à virgule flottante (42, 3.14)
- `String` : chaîne de caractères ("Hello World")
- `Boolean` : `true` ou `false`
- `Array` : tableau ([1, 2, 3])
- `Object` : objet clé-valeur ({name: "John", age: 30})
- `Undefined` : valeur d'une variable non définie
- `Null` : valeur nulle explicitement assignée
- `Symbol` : unique et immuable (ES6)
- `BigInt` : entiers plus grands que `Number.MAX_SAFE_INTEGER` (ES2020)

### Opérateurs Booléens et Opérations Mathématiques
Opérateurs arithmétiques permettent d'effectuer les opérations mathématiques de base.
- `+` : addition
- `-` : soustraction
- `*` : multiplication
- `/` : division
- `%` : modulo
```javascript
let a = 5 + 2; // 7
let b = 5 % 2; // 1
```

Opérateurs de comparaison :
- `==` : Égalité en valeur
- `===` : Égalité stricte (en valeur et en type)
- `!=` : Différent en valeur
- `!==` : Différent strict (en valeur et en type)
- `>` , `<` : Supérieur, inférieur
- `>=` , `<=` : Supérieur ou égal, inférieur ou égal

```javascript
console.log(5 == "5");  // true (égalité en valeur)
console.log(5 === "5"); // false (égalité stricte)
```

Opérateurs logiques :
- `&&` : ET logique
- `||` : OU logique
- `!` : Négation
```javascript
let result = (5 &gt; 3) && (10 &lt; 20); // true
```

