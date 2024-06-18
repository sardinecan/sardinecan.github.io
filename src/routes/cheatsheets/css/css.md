---
title: 'Fondamentaux'
date: '2024-06-18'
author: 'Josselin Morvan'
language: 'css'
keywords: ''
---

# Cheatsheet CSS
## Sélecteurs CSS
### Sélecteur par élément, Classe et ID
```css
/* Sélectionne tous les paragraphes <p> */
p {
    font-size: 16px;
    line-height: 1.5;
}

/* Sélectionne tous les éléments avec la classe "className" */
.className {
    color: #333;
}

/* Sélectionne l'élément avec l'ID "uniqueID" */
#uniqueID {
    background-color: #f0f0f0;
}
```

### Sélecteur par attribut et relation
```css
/* Sélectionne les éléments <input> avec l'attribut type="text" */
input[type="text"] {
    border: 1px solid #ccc;
}

/* Sélectionne les paragraphes <p> qui sont descendants de <div> */
div p {
    margin-bottom: 10px;
}
```

### Sélecteur universel et pseudo-éléments
```css
/* Applique des styles à tous les éléments */
* {
    box-sizing: border-box;
}

/* Sélectionne la première ligne de chaque élément <p> */
p::first-line {
    font-weight: bold;
}
```

### Sélecteur de pseudo-classes

```css
/* Applique des styles aux liens non visités */
a:link {
    color: blue;
}

/* Applique des styles aux liens visités */
a:visited {
    color: purple;
}

/* Applique des styles aux liens au survol */
a:hover {
    text-decoration: underline;
}

/* Applique des styles aux éléments <input> lorsqu'ils sont activés */
input:active {
    background-color: #f4f4f4;
}
```
## Les combinateurs
### Combinateur de descendant (espace)
Le combinateur de descendant sélectionne tous les éléments descendants d'un élément spécifique.

```css

/* Sélectionne tous les <p> descendants des <div> */
div p {
    /* styles */
}
```

### Combinateur d'enfant direct (>)
Le combinateur d'enfant direct sélectionne uniquement les éléments qui sont des enfants directs d'un autre élément spécifique.

```css
/* Sélectionne les <li> qui sont enfants directs de <ul> */
ul > li {
    /* styles */
}
```

### Combinateur de suiveur immédiat (+)
Le combinateur de suiveur immédiat sélectionne un élément qui suit immédiatement un autre élément spécifique, partageant le même parent.

```css
/* Sélectionne les <p> qui suivent immédiatement les <h2> */
h2 + p {
    /* styles */
}
```

### Combinateur de frère suivant (~)
Le combinateur de frère suivant sélectionne tous les éléments frères qui suivent un élément spécifique, partageant le même parent.

```css

/* Sélectionne tous les <p> qui suivent les <h2> */
h2 ~ p {
    /* styles */
}
```

### Sélecteur universel (*)
Le sélecteur universel sélectionne tous les éléments.

```css
/* Applique des styles à tous les éléments */
* {
    /* styles */
}
```

### Utilisation combinée des combinateurs
Les combinateurs peuvent être combinés pour créer des sélections CSS complexes et spécifiques, permettant un contrôle fin sur les éléments ciblés dans la structure HTML d'une page.

```css
/* Sélectionne les <li> descendants des <ul> qui sont des enfants directs de <div> */
div ul > li {
    /* styles */
}
```

## Propriétés de base
```css
/* Couleur du texte */
color: #333;
color: rgb(100, 150, 200);
color: hsl(210, 50%, 60%);

/* Police de caractères */
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;
font-style: italic;

/* Alignement du texte */
text-align: center;
text-align: left;
text-align: right;
text-align: justify;

/* Décoration du texte */
text-decoration: underline;
text-decoration: line-through;
text-decoration: none;

/* Espacement des caractères */
letter-spacing: 1px;
word-spacing: 2px;

/* Espacement des lignes */
line-height: 1.5;
```

## Box Model
```css
/* Largeur et hauteur */
width: 200px;
height: 100px;

/* Marge */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 10px;
margin-left: 20px;
margin: 10px 20px; /* top/bottom left/right */

/* Rembourrage */
padding-top: 10px;
padding-right: 20px;
padding-bottom: 10px;
padding-left: 20px;
padding: 10px 20px; /* top/bottom left/right */

/* Bordure */
border: 1px solid #ccc;
border-radius: 5px;
```

## Positionnement
```css
/* Position */
position: relative;
position: absolute;
position: fixed;

/* Décalage */
top: 0;
right: 0;
bottom: 0;
left: 0;

/* Alignement */
float: left;
float: right;
clear: both;

/* Affichage */
display: block;
display: inline;
display: inline-block;
display: none;
```

## Flexbox
```css
/* Conteneur flex */
display: flex;
flex-direction: row; /* row (par défaut), row-reverse, column, column-reverse */
flex-wrap: nowrap; /* nowrap (par défaut), wrap, wrap-reverse */
justify-content: flex-start; /* flex-start (par défaut), flex-end, center, space-between, space-around */
align-items: stretch; /* stretch (par défaut), flex-start, flex-end, center, baseline */
align-content: flex-start; /* flex-start (par défaut), flex-end, center, space-between, space-around */

/* Éléments flex */
order: 1;
flex-grow: 1;
flex-shrink: 0;
flex-basis: auto;
align-self: auto;
```

## Grid
```css
/* Conteneur de grille */
display: grid;
grid-template-columns: 100px 200px 100px; /* largeur des colonnes */
grid-template-rows: 50px 100px; /* hauteur des lignes */
grid-gap: 10px; /* espacement entre les cellules */
grid-auto-flow: row; /* row (par défaut), column, dense */

/* Positionnement des éléments dans la grille */
grid-column: 1 / span 2; /* colonne de départ / nombre de colonnes */
grid-row: 2 / 3; /* ligne de départ / ligne de fin */

/* Alignement des éléments dans la grille */
justify-self: center; /* alignement horizontal */
align-self: center; /* alignement vertical */
```

## Media Queries
```css
/* Taille d'écran */
@media screen and (max-width: 768px) {
    /* styles pour les écrans jusqu'à 768px de large */
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
    /* styles pour les écrans entre 768px et 1024px de large */
}
```

## Animation et transitions
```css
/* Animation */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

/* Utilisation de l'animation */
.element {
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
}

/* Transition */
.transition {
    transition-property: opacity, transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
}
```

## Les variables CSS
Les variables CSS sont définies en utilisant la syntaxe `--nom-variable: valeur;`.

```css
/* Définition des variables */
:root {
    --couleur-principale: #3498db;
    --taille-police: 16px;
}
```

- `--couleur-principale` est une variable définie pour stocker une couleur.
- `--taille-police` est une variable définie pour stocker une taille de police.

Les variables définies peuvent être utilisées n'importe où dans la feuille de style en utilisant la fonction `var()`.

```css
/* Utilisation des variables */
body {
    font-size: var(--taille-police);
    color: var(--couleur-principale);
}

.header {
    background-color: var(--couleur-principale);
}

.footer {
    background-color: var(--couleur-principale);
    padding: calc(var(--espacement-interne) * 2);
}
```

Les variables CSS peuvent également être utilisées dans les Media Queries pour des styles responsifs :
```css
@media screen and (max-width: 768px) {
    .header {
        padding: calc(var(--espacement-interne) / 2);
    }
}
```