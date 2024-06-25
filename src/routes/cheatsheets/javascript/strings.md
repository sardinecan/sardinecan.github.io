---
title: 'Les chaînes de caractères'
date: '2024-06-25'
author: 'Josselin Morvan'
language: 'javascript'
keywords: ''
---

Cheatsheet sur les Chaînes de Caractères en JavaScript
1. Création et Déclaration

    Déclaration littérale:

    javascript

let texte = "Bonjour";

Utilisation du constructeur String:

javascript

let texte = new String("Bonjour");

Chaînes multi-lignes:

javascript

    let multiLignes = `Première ligne
    Deuxième ligne`;

2. Accès aux Caractères

    Accès par index:

    javascript

let lettre = texte[0]; // "B"
let lettre = texte.charAt(1); // "o"

Code Unicode:

javascript

    let code = texte.charCodeAt(0); // 66 pour "B"
    let code = texte.codePointAt(0); // 66 pour "B"

3. Modification des Chaînes

    Concatenation:

    javascript

let salut = "Bonjour";
let monde = "Monde";
let phrase = salut + " " + monde; // "Bonjour Monde"
let phrase = `${salut} ${monde}`; // "Bonjour Monde"

Substitution (replace):

javascript

    let nouvellePhrase = phrase.replace("Monde", "Tout le monde"); // "Bonjour Tout le monde"

4. Méthodes de Recherche

    Recherche (indexOf et lastIndexOf):

    javascript

let position = phrase.indexOf("Monde"); // 8
let dernierePosition = phrase.lastIndexOf("o"); // 9

Correspondance (match et matchAll):

javascript

let correspondances = phrase.match(/o/g); // ["o", "o"]
let toutesLesCorrespondances = [...phrase.matchAll(/o/g)];

Recherche (search):

javascript

let position = phrase.search("Monde"); // 8

Commence par (startsWith):

javascript

let commence = phrase.startsWith("Bonjour"); // true

Termine par (endsWith):

javascript

let termine = phrase.endsWith("Monde"); // true

Comprend (includes):

javascript

    let inclus = phrase.includes("Monde"); // true

5. Extraction et Subdivision

    Extraction (slice, substring, substr):

    javascript

let sousChaine = phrase.slice(0, 7); // "Bonjour"
let sousChaine = phrase.substring(0, 7); // "Bonjour"
let sousChaine = phrase.substr(0, 7); // "Bonjour"

Subdivision (split):

javascript

    let mots = phrase.split(" "); // ["Bonjour", "Monde"]

6. Transformations

    Majuscules et minuscules:

    javascript

let majuscules = phrase.toUpperCase(); // "BONJOUR MONDE"
let minuscules = phrase.toLowerCase(); // "bonjour monde"

Trim (suppression des espaces):

javascript

    let avecEspaces = "  Bonjour  ";
    let sansEspaces = avecEspaces.trim(); // "Bonjour"
    let sansEspacesDebut = avecEspaces.trimStart(); // "Bonjour  "
    let sansEspacesFin = avecEspaces.trimEnd(); // "  Bonjour"

7. Comparaison

    Comparaison (localeCompare):

    javascript

    let comparaison = "a".localeCompare("b"); // -1 (a est avant b)

8. Utilitaires Avancés

    Remplacement avancé (replaceAll):

    javascript

let texte = "Bonjour tout le monde, tout va bien.";
let nouveauTexte = texte.replaceAll("tout", "chaque"); // "Bonjour chaque le monde, chaque va bien."

Extraction de code Unicode:

javascript

    let codeUnicode = "𠮷".codePointAt(0); // 134071

9. Interpolation de Chaînes

    Utilisation des backticks (`):

    javascript

    let nom = "Alice";
    let age = 25;
    let message = `Bonjour, je suis ${nom} et j'ai ${age} ans.`;

10. Spécificités de l'Unicode

    Gestion des caractères Unicode:

    javascript

    let texte = "𠮷";
    texte.length; // 2 (en raison de la représentation UTF-16)
    [...texte].length; // 1 (en raison de la décomposition en caractères)

11. Échappement et Séquences d'Échappement

    Échappement:

    javascript

let citation = "Elle a dit : \"Bonjour\"";
let retourChariot = "Première ligne\nDeuxième ligne";

Caractères spéciaux:

javascript

    let tabulation = "Bonjour\tMonde"; // "Bonjour    Monde"
    let backslash = "Un \\ backslash";

12. Conversion et Casting

    Conversion en chaîne:

    javascript

let nombre = 42;
let texteNombre = nombre.toString(); // "42"
let texteNombre = String(nombre); // "42"

Conversion en nombre:

javascript

    let texte = "42";
    let nombre = Number(texte); // 42
    let nombreEntier = parseInt(texte); // 42
    let nombreFlottant = parseFloat(texte); // 42.0

13. Modèles et Expression Régulière

    Modèles simples:

    javascript

let regex = /mot/;
let texte = "Un mot dans une phrase.";
let trouve = regex.test(texte); // true

Modèles complexes:

javascript

    let regex = /\b\w+\b/g; // Correspond à chaque mot
    let mots = texte.match(regex); // ["Un", "mot", "dans", "une", "phrase"]

14. String vs Template Literal

    Template Literal:

    javascript

let nom = "Alice";
let salutation = `Bonjour ${nom}, comment vas-tu ?`;

String:

javascript

    let salutation = "Bonjour " + nom + ", comment vas-tu ?";

15. Propriétés et Méthodes Utiles

    Longueur de la chaîne (length):

    javascript

let taille = texte.length; // 7 pour "Bonjour"

Construction avec .fromCharCode et .fromCodePoint:

javascript

let lettre = String.fromCharCode(65); // "A"
let unicode = String.fromCodePoint(0x1F600); // "😀"