---
title: 'Python - Cheatsheet'
date: '2024-06-25'
author: 'Josselin Morvan'
language: 'Python'
keywords: 'cheatsheet ; python'
---

# 🐍 les fondamentaux du langage Python

## Syntaxe de Base

Commentaires

```python
# Ceci est un commentaire
"""
Ceci est un commentaire
multi-lignes
"""
```

Affectation

```python
x = 5
y = 10
```
Impression

```python
print(x)
print(f"La valeur de x est {x}")
```

## Types de Données
Numérique

```python
num = 42       # Entier
flot = 3.14    # Flottant
```

Chaîne de caractères

```python
chaine = "Bonjour"
```

Booléen

```python
boolean = True
```

Liste

```python
liste = [1, 2, 3, 4]
```

Tuple

```python
tuple_ex = (1, 2, 3)
```

Dictionnaire

```python
dictionnaire = {"nom": "Alice", "age": 25}
```

Ensemble

```python
ensemble = {1, 2, 3}
```
## Structures de Contrôle
Conditionnelle

```python
if x > y:
    print("x est plus grand que y")
elif x == y:
    print("x est égal à y")
else:
    print("x est plus petit que y")
```

Boucle For

```python
for i in range(5):
    print(i)
```

Boucle While

```python
i = 1
while i <= 5:
    print(i)
    i += 1
```

Fonction

```python
def ma_fonction(a, b):
    return a + b
```

## Manipulation de Données
Indexation de Listes

```python
liste[0]          # Premier élément
liste[1:3]        # Du deuxième au troisième élément
liste[-1]         # Dernier élément
```

Manipulation de Dictionnaires

```python
dictionnaire["nom"]        # Accéder à la valeur pour la clé 'nom'
dictionnaire["age"] = 30   # Modifier la valeur pour la clé 'age'
```

Ajout à une Liste

```python
liste.append(5)
```

## Fonctions Utiles
Longueur

```python
len(liste)
```

Type

```python
type(liste)
```

Conversion

```python
int("123")      # Conversion en entier
str(123)        # Conversion en chaîne de caractères
```

## Manipulation de Chaînes
Concaténation

```python
s1 = "Bonjour"
s2 = "Monde"
s3 = s1 + " " + s2
```

Formattage

```python
age = 25
f"J'ai {age} ans"
```

Méthodes de Chaînes

```python
chaine.lower()   # Minuscule
chaine.upper()   # Majuscule
chaine.split()   # Diviser en liste de mots
```

## Fichiers
Lire un Fichier

```python
with open("chemin/fichier.txt", "r") as fichier:
    contenu = fichier.read()
```

Écrire dans un Fichier

```python
with open("chemin/fichier.txt", "w") as fichier:
    fichier.write("Bonjour Monde")
```
## Importation et Exportation de Données avec Pandas
Lire un CSV

```python
import pandas as pd
df = pd.read_csv("chemin/fichier.csv")
```

Écrire un CSV

```python
df.to_csv("chemin/fichier_sortie.csv", index=False)
```
## Visualisation avec Matplotlib
Graphiques de Base

```python
import matplotlib.pyplot as plt
plt.plot([1, 2, 3], [4, 5, 6])
plt.show()
```

Histogramme

```python
plt.hist([1, 2, 3, 4, 5])
plt.show()
```

## Modules et Packages
Installation

```bash
pip install nom_du_package
```

Importation

```python
import nom_du_package
```

Importation Partielle

```python
from nom_du_package import nom_de_la_fonction
```

## Conseils Divers
Compréhensions de Listes

```python
[x**2 for x in range(10) if x % 2 == 0]
```

Fonctions Lambda

```python
f = lambda x: x + 2
```

Gestion des Erreurs

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Erreur: Division par zéro")
```
Expressions Régulières

```python
import re
pattern = r'\d+'
re.findall(pattern, '123 abc 456')
```
