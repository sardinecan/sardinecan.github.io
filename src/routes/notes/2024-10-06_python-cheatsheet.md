---
title: 'Python - cheatsheet'
date: '2024-10-06'
category: 'Python'
author: 'jmorvan'
keywords: 'cheatsheet ; python'
---

# Python
## Syntaxe
### Variables et Types
Les variables sont créées en affectant une valeur à l'aide de l'opérateur `=`.
Les noms de variables doivent commencer par une lettre ou un underscore (_), mais jamais par un chiffre.

```python
nom_variable = valeur
```

Il n'est pas nécessaire de déclarer le type d'une variable lors de sa création. Il est détuit par Python au moment de l'affectation. 
```python
entier = 10              # int
flottant = 10.5          # float
chaine_de_caracteres = "Bonjour"  # str
booleen = True           # bool
```
On utilise la fonction `type(nom_variable)` pour connaître le type d'une variable.

Depuis `Python 3.XX`, on peut annoter les variables afin d'indiquer le type attendu, mais ces annotations n'ont aucune valeur obligatoire, elles servent juste à simplifier la lecture du code et ne sont aucunement interprétées.
```python
age: int = 30
```

### Opérateurs Booléens et Opérations Mathématiques

Il existe 3 opérateurs booléens
```python
not a    # Négation
a and b  # ET logique
a or b   # OU logique
```

Les opérateurs arithmétiques en Python sont similaires à celles des autres langages, et permettent d'effectuer les opérations mathématiques de base.
```python
a + b    # Addition
a - b    # Soustraction
a * b    # Multiplication
a / b    # Division (résultat flottant)
a // b   # Division entière
a % b    # Modulo (reste de la division)
a ** b   # Exponentiation (puissance)
```
Les opérateurs de comparaison retournent toujours un booléen (`True` ou `False`).
```python
a == b   # Égal à
a != b   # Différent de
a > b    # Supérieur à
a < b    # Inférieur à
a >= b   # Supérieur ou égal
a <= b   # Inférieur ou égal
```

### Les Fonctions
zLe mot-clé `def` permet de définir une fonction. Une fonction peut prendre zéro, une ou plusieurs variables en entrée et peut, ou non, retourner une valeur.
```python
def somme(a, b):
    """
    Commentaire expliquant la fonction
    """
    result = a + b
    return result

somme(1, 3)
4
```

Il est possible d'attribuer une valeur par défaut aux arguments d'une fonction.
```python
def grettings(name="world"):
    print("Hello ", nom)
```

### Les Conditions
Python utilise `if`, `elif` et `else` afin d'évaluer des expressions et exécuter une portion de code particulière si une conditions est vraie. Python utilise l'indentation pour définir les blocs de code (habituellement 4 espaces).
```python
a = 1
b = 2
if a<b:
    print("a est plus petit que b")
elif a==b:
    print("a est égale à b")
else:
    print("a est plus grand que b")
```
### Les boucles
Les boucles permettent de répéter un bloc de code pour chaque élément d'une liste, ou jusqu'à ce qu'une condition soit remplie.

#### While
Répète tant que la condition est vraie
```python
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

```
#### For
Elle permet de parcourir un séquence (liste, tuple, chaîne de caractères, etc.)

```python
for element in sequence:
    print(element)

for (let i = 0; i < 5; i++) {
    console.log(i);
}

for i in range(5):  # Génère les entiers de 0 à 4
    print(i)
```
Utiliser `break` pour sortir prématurément d'une boucle.

Utiliser `continue` pour passer à l'itération suivante sans exécuter le reste du code dans la boucle.

### Les Types Simples
Les types simples incluent des types numériques (`int`, `float`), des chaînes de caractères (`str`) et des booléens (`bool`).
```python
s = "Hello"
string = '''Texte
sur
plusieurs lignes'''
```

Les chaînes de caractères sont immuables, ce qui signifie qu'elles ne peuvent pas être modifiées après leur création.

### Data Structures
#### Les Dictionnaires
Un `dictionnaire` est une collection d'éléments sous forme de paires clé-valeur.
```python
mon_dictionnaire = {
    "cle1": "valeur1",
    "cle2": "valeur2"
}

# Accéder à une valeur
valeur = mon_dictionnaire["cle1"]

# Ajouter ou modifier une clé-valeur
mon_dictionnaire["cle3"] = "valeur3"

# Supprimer une clé
del mon_dictionnaire["cle2"]

# Méthodes utiles
cles = mon_dictionnaire.keys()   # Retourne toutes les clés
valeurs = mon_dictionnaire.values() # Retourne toutes les valeurs
```
La méthode `get()` renvoie une valeur par défaut si la clé  recherchée n'existe pas (évite une erreur) :

```python
valeur = mon_dictionnaire.get("cle_inexistante", "valeur_par_defaut")
```

#### Les Tuples
Un `tuple` est une séquence ordonnée d'éléments, immuable (c'est-à-dire qu'on ne peut pas le modifier après sa création).

```python
mon_tuple = (1, 2, 3)

# Accès aux éléments (comme une liste)
premier_element = mon_tuple[0]

# Tuple à un seul élément (attention à la virgule)
tuple_unique = (5,)

# Assignation des tuples
a, b, c = mon_tuple
```
Les tuples peuvent être utilisés comme clés dans un dictionnaire (car ils sont immuables).


#### Les Arrays
Les arrays sont des collections ordonnées et modifiables d'éléments. Elles sont très flexibles et peuvent contenir des éléments de différents types.

```python
arr = [1, 2, 3, 4]

# Ajouter un élément
arr.append(5)

# Supprimer un élément
arr.remove(3)

# Accéder à un élément
element = arr[0]

# Slicing (accès partiel)
sub_arr = arr[1:3]

# Méthodes utiles
arr.sort()    # Trier la liste
arr.reverse() # Inverser la liste
```