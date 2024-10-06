---
title: 'R - Cheatsheet'
date: '2024-06-25'
author: 'Josselin Morvan'
language: 'r'
keywords: 'cheatsheet ; r'
---

# 📝 Les fondamentaux du langage R

## 📚 Introduction à R

R est un langage de programmation et un environnement logiciel pour le calcul statistique et la création de graphiques.

## 📌 Table des matières

- Installation
- Environnement de base
- Variables
- Types de données
- Opérateurs
- Fonctions de base
- Contrôle de flux
- Gestion des données
- Graphiques de base
- Ressources

## 🚀 Installation

```bash
# Pour installer R sur Linux
sudo apt-get install r-base

# Pour installer R sur Mac
brew install r

# Pour installer R sur Windows
Téléchargez le programme d'installation depuis https://cran.r-project.org/
```

## 🖥️ Environnement de base

```r
# Ouvrir l'interface graphique
R
# Ou avec RStudio pour une interface plus conviviale
```

## 🔤 Variables

```r
# Affectation de variable
x <- 10
y = 20 # Peut aussi être utilisé mais <- est préféré
```

## 🧬 Types de données

| Type | Exemple |
|:------|:------|
|Numérique |	`x <- 10.5`|
|Entier |	`x <- as.integer(5)`|
|Logique |	`x <- TRUE`|
|Caractère |	`x <- "Bonjour"`|
|Facteur |	`x <- factor("Homme")`|

## ➗ Opérateurs
|  |  |
|:-----|:-----|
|Arithmétiques | `+`, `-`, `*`, `/`, `^`, `%%`, `%/%` |
|Comparaison | `==`, `!=`, `<`, `>`, `<=`, `>=` |
|Logiques | `&`, `&#124;`, `!` |
|Affectation | `<-`, `=` |

## 🛠️ Fonctions de base

```r
# Création d'une séquence
seq(1, 10, by = 2)

# Répétition d'éléments
rep(1:3, times = 3)

# Somme, moyenne, etc.
sum(c(1, 2, 3))
mean(c(1, 2, 3))

# Structure d'un objet
str(object)
```

## 🔄 Contrôle de flux

```r
# Conditionnel
if (x > 10) {
  print("x est grand")
} else {
  print("x est petit")
}

# Boucles
for (i in 1:5) {
  print(i)
}

while (x < 20) {
  x <- x + 1
  print(x)
}
```

## 📊 Gestion des données

```r
# Data frames
df <- data.frame(nom = c("Jean", "Marie"), age = c(30, 22))

# Accès aux données
df$nom       # Accès à une colonne
df[1,]       # Accès à une ligne
df[1, "nom"] # Accès à une cellule

# Importation de données
data <- read.csv("chemin/fichier.csv")

# Exportation de données
write.csv(df, "chemin/sortie.csv", row.names = FALSE)
```

## 📈 Graphiques de base

```r
# Graphique simple
plot(x, y)

# Histogramme
hist(data$colonne)

# Boîte à moustaches
boxplot(data$colonne)

# Diagramme de dispersion
plot(data$x, data$y)
```@
