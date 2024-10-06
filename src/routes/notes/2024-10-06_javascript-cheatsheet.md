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

### Fonctions
Les fonctions sont des blocs de code réutilisables. Ils associents généralement 0, une ou plusieurs valeurs d'entrée à une valeur de sortie.

Pour déclarer une fonction on utilise le mot-clé `function` :
```javascript
function somme(a, b) {
    return a + b;
}

let result = somme(5, 3); // 8
```

Il est aussi possible de rédiger des `fonctions fléchées` (ES6+). La syntaxe est plus concise et ces fonctions ne lient pas leur propre contexte `this`.
```javascript
const addition = (a, b) =&gt; a + b;
```
Chaque argument peut disposer d'une valeur par défaut;
```javascript
function greet(name = "World") {
    return `Hello ${name}!`;
}

console.log(greet()); // "Hello World!"
```

### Conditions
Les structures conditionnelles permettent d'exécuter du code spécifique si un situation particulière est rencontrée.
```javascript
let age = 18;

if (age &gt;= 18) {
    console.log("Vous êtes majeur.");
} else {
    console.log("Vous êtes mineur.");
}
```
Pour les évaluations simple JavaScript dispose d'une autre syntaxe reposant sur l'utilisation de l'opérateur ternaire `?`
```javascript
let message = (age &gt;= 18) ? "Majeur" : "Mineur";
```

### Boucles
Les boucles permettent de répéter un bloc de code pour chaque élément d'une liste, ou jusqu'à ce qu'une condition soit remplie.

#### Boucle `for`
```javascript
for (let i = 0; i &lt; 5; i++) {
    console.log(i); // Affiche 0, 1, 2, 3, 4
}
```

#### Boucle `while`
```javascript
let count = 0;
while (count &lt; 5) {
    console.log(count);
    count++;
}
```

#### Boucle `for...of`
Cette boucle est utilisée pour parcourir les éléments d'un tableau.

```javascript
let fruits = ["Pomme", "Banane", "Orange"];
for (let fruit of fruits) {
    console.log(fruit);
}
```

### Types Simples

`String` : Les chaînes sont des séquences de caractères. Elles peuvent être entourées de guillemets simples ou doubles.
```javascript
let str = "Hello, World!";
```

`Number` : JavaScript ne fait pas de distinction entre les entiers et les nombres à virgule flottante, tout est traité comme `Number`.
```javascript
let num = 42;
let pi = 3.1415;
```

`Boolean` : Les valeurs booléennes sont soit `true` soit `false`.
```javascript
let isTrue = true;
let isFalse = false;
```

### Structures de Données
#### Objets (Dictionnaires)
Les `objets` sont des collections de paires clé-valeur. Les clés sont des chaînes ou des symboles, et les valeurs peuvent être de n'importe quel type.
On peut intégrer des fonctions dans un objet JavaScript

```javascript
let personne = {
    nom: "Sara",
    age: 35,
    greet: function() {
        console.log(`Hello, je m'appelle ${this.nom}`);
    }
};

personne.greet(); // "Bonjour, je m'appelle Sara"
```

#### Tableaux (Arrays)
Les tableaux sont des listes ordonnées d'éléments. Les éléments sont accessibles par leur index (qui commence à 0).
```javascript
let nombres = [1, 2, 3, 4, 5];
console.log(nombres[0]); // 1
```
On peut ajouter des éléments à un tableau avec `push()` :
```javascript
nombres.push(6); // Ajoute un élément à la fin du tableau
```

#### Tuples
JavaScript ne dispose pas des tuples, mais dans la mesure ou ces derniers correspondent à une collections immuable et ordonnées d'éléments, on peut procéder de la manière suivante, en ayant recours à un tableau (dont la longueur est connue).
```javascript
const tuple = [1, "apple", true];
```

### Interagir avec le DOM

Le `DOM` (*Document Object Model*) représente la structure HTML de la page. JavaScript peut interagir avec le DOM pour modifier dynamiquement l'apparence et le contenu d'une page.

#### Sélectionner des Éléments
3 fonctions permettent de sélectionner des éléments :
- `document.getElementById()` : sélectionne un élément par son `@id`.
```javascript
let element = document.getElementById("monID");
```

- `document.querySelector()` : sélectionne le **premier élément** correspondant à un sélecteur CSS.
```javascript
let element = document.querySelector(".maClasse");
```

- `document.querySelectorAll()` : Sélectionne **tous les éléments** correspondant à un sélecteur CSS.
```javascript
let elements = document.querySelectorAll("p"); // Tous les paragraphes
```

#### Modifier le Contenu

La fonction `element.innerHTML` permet de modifier ou récupérer le contenu HTML d'un élément.
```javascript
element.innerHTML = "&lt;p&gt;Nouveau contenu&lt;/p&gt;";
```

`element.textContent` modifie ou récupère uniquement le texte.
```javascript
element.textContent = "Nouveau texte";
```

#### Modifier les Attributs
`element.setAttribute()` permet de modifier ou d'ajouter un attribut à un élément, alors que `element.getAttribute()` permet de écupérer la valeur d'un attribut.
```javascript
element.setAttribute("class", "nouvelleClasse");

let href = element.getAttribute("href");
```

#### Modifier les Styles
Les styles CSS peuvent être modifiés directement avec JavaScript via la propriété style.
```javascript
element.style.color = "blue";    // Changer la couleur du texte
element.style.display = "none";  // Cacher l'élément
```

#### Ajouter et Supprimer des Classes
`element.classList.add()` et `element.classList.remove()` permettent respectivement d'ajouter  et de supprimer une ou plusieurs classes. `element.classList.toggle()` quant à elle permet d'ajouter une classe si elle n'existe pas, ou de la retirer si elle existe.
```javascript
element.classList.add("visible");

element.classList.remove("invisible");

element.classList.toggle("active");
```

### Exécution du code JavaScript

L'emplacement d'un script dans une page HTML et la manière dont on configure son exécution peuvent avoir des impacts sur les performances et l'interaction avec le DOM.

### Placement des scripts dans la page HTML
le code JavaScript est généralement inclus dans une balise `&lt;script/&gt;` que l'on place soit dans le `&lt;head/&gt;` (exécute immédiatement le code, avant le chargement de la page) soit à la toute fin du `&lt;body/&gt;` (le code est exécuté après que tout le code HTML soit chargé). L'emplacement des éléments `&lt;script/&gt;` a donc une importante, surtout lorsque l'on souhaite intéragir avec le `DOM`.

Lorsque placé dans le `&lt;head&gt;`, et sous réserve d'utiliser l'attribut `@src`, deux attributs peuvent être utilisés pour contrôler quand et comment le script doit s'exécuter. 
- `async` : charge en parallele et exécute le script de façon asynchrone, dés qu'il est disponible, sans suivre d'ordre particulier si plusieurs `&lt;script/&gt;` sont présents ;
- `defer` : diffère l'exécution à la fin du chargement du document, juste avant `DOMContentLoaded`, mais l'ordre d'exécution entre les scripts est maintenu.

L'idée derrière ces deux attributs était d'assouplir la pratique de placer les `&lt;script/&gt;` à la fin du `&lt;body/&gt;`.

Deux évènements permettent également de gérer le chargement et l'exécution des scripts
- `window.onload` : se déclenche après que tout le contenu de la page a été entièrement chargé (ressources externes comprises (images, scripts, CSS)).
- `DOMContentLoaded` : se déclenche dès que le DOM est complètement chargé, mais avant les ressources externes. À utiliser plutôt que `window.onload`.

```html
&lt;html lang="fr"&gt;
    &lt;head&gt;
        &lt;meta charset="UTF-8"&gt;
        &lt;title&gt;Exécuter JavaScript&lt;/title&gt;
        &lt;!-- Le script est chargé dans le head, mais le code ne sera exécuter qu'après que la page soit soit chargé. --&gt;
        &lt;script&gt;
            window.onload = function() {
                function warning(){
                    alert("Survol du titre !")
                };
                const el = document.getElementById("myTitle");
                el.addEventListener("mouseover", warning);
            };
            /* ou
            document.addEventListener('DOMContentLoaded', function() {
                ...
            });*/
        &lt;/script&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;h1 id="myTitle"&gt;Page HTML avec JavaScript&lt;/h1&gt;
    &lt;/body&gt;
&lt;/html&gt;
```

#### Gestion des évènements

`addEventListener` permet d'attacher des fonctions à des événements du `DOM` (comme le clic, le survol, etc.).

```javascript
document.getElementById('myButton').addEventListener('click', function() {
  alert("Bouton cliqué !");
});
```