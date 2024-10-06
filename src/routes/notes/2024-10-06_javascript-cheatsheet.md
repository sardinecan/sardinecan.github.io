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
