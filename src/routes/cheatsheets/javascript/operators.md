---
title: 'Les opérateurs'
date: '2024-06-25'
author: 'Josselin Morvan'
language: 'javascript'
keywords: ''
---

Cheatsheet sur les Opérateurs en JavaScript
1. Opérateurs Arithmétiques

    Addition (+):

    javascript

let somme = 5 + 3; // 8

Soustraction (-):

javascript

let difference = 5 - 3; // 2

Multiplication (*):

javascript

let produit = 5 * 3; // 15

Division (/):

javascript

let quotient = 10 / 2; // 5

Modulo (%):

javascript

let reste = 10 % 3; // 1

Exponentiation (**):

javascript

let puissance = 2 ** 3; // 8

Négation (-):

javascript

let negation = -5; // -5

Incrémentation (++):

javascript

let a = 1;
a++; // a devient 2

Décrémentation (--):

javascript

    let b = 2;
    b--; // b devient 1

2. Opérateurs d'Assignation

    Assignation (=):

    javascript

let x = 5;

Assignation avec addition (+=):

javascript

x += 3; // x = x + 3

Assignation avec soustraction (-=):

javascript

x -= 2; // x = x - 2

Assignation avec multiplication (*=):

javascript

x *= 4; // x = x * 4

Assignation avec division (/=):

javascript

x /= 2; // x = x / 2

Assignation avec modulo (%=):

javascript

x %= 3; // x = x % 3

Assignation avec exponentiation (**=):

javascript

x **= 2; // x = x ** 2

Assignation avec opérateurs bit à bit:

javascript

    x &= 3; // x = x & 3
    x |= 2; // x = x | 2
    x ^= 1; // x = x ^ 1
    x <<= 1; // x = x << 1
    x >>= 1; // x = x >> 1
    x >>>= 1; // x = x >>> 1

3. Opérateurs de Comparaison

    Égalité (==):

    javascript

let egal = 5 == "5"; // true

Inégalité (!=):

javascript

let different = 5 != "5"; // false

Égalité stricte (===):

javascript

let egalStrict = 5 === 5; // true
let egalStrict = 5 === "5"; // false

Inégalité stricte (!==):

javascript

let differentStrict = 5 !== 5; // false
let differentStrict = 5 !== "5"; // true

Supérieur (>):

javascript

let superieur = 10 > 5; // true

Supérieur ou égal (>=):

javascript

let superieurEgal = 10 >= 5; // true

Inférieur (<):

javascript

let inferieur = 10 < 5; // false

Inférieur ou égal (<=):

javascript

    let inferieurEgal = 10 <= 10; // true

4. Opérateurs Logiques

    ET logique (&&):

    javascript

let et = (5 > 3) && (2 < 4); // true

OU logique (||):

javascript

let ou = (5 < 3) || (2 < 4); // true

NON logique (!):

javascript

    let non = !(5 > 3); // false

5. Opérateurs Bit à Bit

    ET bit à bit (&):

    javascript

let etBit = 5 & 3; // 1 (0101 & 0011 = 0001)

OU bit à bit (|):

javascript

let ouBit = 5 | 3; // 7 (0101 | 0011 = 0111)

OU exclusif bit à bit (^):

javascript

let xorBit = 5 ^ 3; // 6 (0101 ^ 0011 = 0110)

Décalage à gauche (<<):

javascript

let decalerGauche = 5 << 1; // 10 (0101 << 1 = 1010)

Décalage à droite (>>):

javascript

let decalerDroite = 5 >> 1; // 2 (0101 >> 1 = 0010)

Décalage à droite sans signe (>>>):

javascript

    let decalerDroiteSansSigne = -5 >>> 1; // 2147483645

6. Opérateurs de Chaînes

    Concaténation (+):

    javascript

let message = "Bonjour" + " " + "Monde"; // "Bonjour Monde"

Concaténation avec assignation (+=):

javascript

    let salutation = "Bonjour";
    salutation += " Monde"; // "Bonjour Monde"

7. Opérateurs de Type

    Type de (typeof):

    javascript

let type = typeof 42; // "number"
let type = typeof "Hello"; // "string"

Instance de (instanceof):

javascript

    let date = new Date();
    let estDate = date instanceof Date; // true

8. Opérateurs Divers

    Opérateur ternaire (? :):

    javascript

let age = 20;
let majeur = age >= 18 ? "Adulte" : "Mineur"; // "Adulte"

Opérateur de déstructuration (...):

javascript

let numbers = [1, 2, 3];
let copie = [...numbers]; // [1, 2, 3]

let obj = {a: 1, b: 2};
let copieObj = {...obj}; // {a: 1, b: 2}

Opérateur de chaîne d'option (?.):

javascript

let utilisateur = {nom: "Alice"};
let ville = utilisateur.adresse?.ville; // undefined si adresse est undefined

Opérateur de nullish (??):

javascript

let nom = null;
let nomDefaut = nom ?? "Inconnu"; // "Inconnu"

Opérateur de regroupement (()):

javascript

    let resultat = (5 + 3) * 2; // 16

9. Opérateurs de Comparaison des BigInt

    Comparaison stricte pour BigInt (ne peut pas être comparé à d'autres types directement):

    javascript

let grandNombre = 123456789123456789n;
let memeNombre = 123456789123456789n;
let estEgal = grandNombre === memeNombre; // true

Opérations arithmétiques avec BigInt:

javascript

    let addition = grandNombre + 1n; // 123456789123456790n

10. Opérateurs Unaires

    Inversion binaire (~):

    javascript

let inversion = ~5; // -6

Plus (+):

javascript

let plus = +"5"; // 5

Moins (-):

javascript

let moins = -5; // -5

Effet de côté avec pré-incrément (++a) et post-incrément (a++):

javascript

let c = 2;
let pre = ++c; // 3 (pré-incrément)
let post = c++; // 3, mais c devient 4 après

Effet de côté avec pré-décrément (--a) et post-décrément (a--):

javascript

let d = 2;
let preDec = --d; // 1 (pré-décrément)
let postDec = d--; // 1, mais d devient 0 après
