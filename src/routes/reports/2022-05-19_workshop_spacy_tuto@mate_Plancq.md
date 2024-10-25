---
title: 'Tuto@mate - de l’utilisation de spaCy, comment parser un texte avec une bibliothèque Python'
date: '2022-05-19'
speaker: 'Clément Plancq'
category: 'workshop'
keywords: ''
---

# Tuto@mate - de l’utilisation de spaCy, comment parser un texte avec une bibliothèque Python

## Ressources
 - [Notebook du tuto@mate](https://github.com/clement-plancq/tuto-mate) pour tester le code sans installer Python et spaCy (cliquer sur launch binder dans le README.md)
 - [Cours par Ines Montani](https://course.spacy.io/fr/)

## Introduction

SpaCy est un librairie Python pour le TAL, developpée par Matthew Honnibal et Ines Montani. C'est une bibliothèque Python pour le traitement des TAL sous licence libre (MIT 2.0), bien que distribuer par une société privée. En revanche les modèles sont distribués sous divers licences ouvertes (liées aux documents qui ont permis leur élaboration).

SpaCy est destiné à êter utilisé en production : donc traitement rapide, stable, qualité du code (test, documentation, etc.). Mais pas de chois dans le méthode ou l'algorithme utilisé. On sait ce qui est utilisé, c'est documenté, mais on ne peut pas modifier ces paramètres.

Peut faire : 
- tokenisation
- étiquetage POS (verbe, nom, etc.)
- analyse syntaxique
- detection d'entités nommées
- lemmatisation
- catégorisation de texte
- word embedding

SpaCy utilise des modèles statistique (méthode neuronales).

Intérêts : c'est dy Python (wrapper R également), simple à prendre en main, très bien documenté (doc, tuto, etc.), grosse communauté sur github, fournit les méthodes et les moyens d'adapter le traitement et ou le modèle à des besoins particuliers ! Mais ce n'est pas forcément l'outils qui sera le meilleurs pour le français dans toutes les tâches de TAL.

Il existe d'autre frameworks pour le TAL
- NLKT : python, orienté pédagogie, chois des méthodes et algos à utiliser
- CoreNLP : java, framework de Stanford, orienté recherche, chaîne de TAL la plus complète pour l'anglais
- Stanza : python, framework de Stanford également, modèle neuronaux entraînés sur les données d'Universal Dependancies (il y a un module spacy-stanza pour utiliser les modèles de Stanza
- Flair : python, framewok de Zalando (site de e-commerce), peut être le plus performant sur la reconnaissance d'entités nommées

Les modèles de spaCy
SpaCy utilise des modèles statistiques qui permettent de prédire des annotations linguistiques (identifier un verbe, un nom, le sentiment d'une phrase).
21 langues prise en compte. La qualité des résultats dépend beaucoup du corpus sur lequel s'est entraîné le modèle. 
Pour le français, il y a 3 modèles + 1. Il sont tous issus du corpus [Sequoia](http://www.linguist.univ-paris-diderot.fr/~mcandito/Publications/candito-seddah-taln2012.pdf) (wikipedia + presse (Est-républicain) + Agence euro du médicament, Europarl) et WikiNer, sauf le modèle trf, qui est issu de camembert-base (modèle Bert), distribué par Hugginf Face, entraîné sur Oscar.

Le choix du modèle est vraiment primordial pour les traitements.

## Étape de la chaîne de traitement
### Tokenisation
Opération qui consiste à découper un texte ou chaîne de caractères en token. En linguistique il n'y a pas de définition précise de « mot », on parle alors de token. Les signes de ponctuation sont tokénisés.

L'intérêt de spaCy, c'est que sa tokénisation n'est pas destructive. On peut donc, à partir de la tokenisation, reformer le texte (conservation des espaces par exemple).

Il est possible de modifier la tokenisation par défaut. 

Concernant la tokénisation, SpaCy permet aussi de récupérer des groupes nominaux. Il est également possible de récupérer les phrases d'un texte.

### Étiquetage (tagging)
Étape qui permet, pour chaque token de déterminer s'il s'agit d'un verbe, du adjectif, d'un nom, etc.

```python
doc = nlp("Tous mes beaux châteaux d'Équateur s'écroulent.")
for tok in doc:
    print(tok, tok.pos_)
```
    > Tous ADJ
    mes DET
    beaux ADJ
    châteaux NOUN
    d' ADP
    Équateur PROPN
    s' PRON
    écroulent VERB
    . PUNCT

Les annotation portant sur les token sont accessibles via les attributs des objets de type token
- pos_ contient l'étiquette de partie du discours de universal dependancies
- tag_ contient l'étiquette du corpus original, parfois plus détaillée
- lemma_ pour le lemme
- morph pour l'analyse morphologique
```python
for token in doc:
    print(token, token.lemma_, token.pos_, token.morph)
```
    > Tous tout ADJ Gender=Masc|Number=Plur
    mes mon DET Number=Plur|Poss=Yes
    beaux beal ADJ Gender=Masc|Number=Plur
    châteaux château NOUN Gender=Masc|Number=Plur
    d' de ADP
    Équateur Équateur PROPN
    s' se PRON Person=3|Reflex=Yes
    écroulent écrouler VERB Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin
    . . PUNCT

### Détection d'entités nommées (ner)
Pour repérer les noms de personnes, de lieux, d'organisation, miscelannée et parfois même les dates.

Il y a également dans spaCy un visualiseur, qui permet d'avoir une représentation visuel du traitement du texte en html.

Il est possible d'adapter la reconnaissance des entités nommées, voire même d'entrainer d'autres modèles.

### Analyse syntaxique (parsing)
C'est une analyse en dépendance avec spaCy. Dans ce type d'analyse, chaque mot d'une phrase à un gouverneur unique (head), la relation de dépendance entre le mot et son gouverneur est typée (nsubj, obj, etc.) Pour la tête de la phrase on utilise la relation ROOT.

La structure produite par l'analyse syntaxique est un arbre, un graphe acyclique et connexe.
Les tokens sont les nœuds, les arcs sont les dépendances, le type de la relation est l'étiquette de l'arc.

```python
doc = nlp("Il te refile en stéréo la chanson des sirènes.")
for token in doc:
    print(token, token.dep_, token.head)
```
    > Il expl:subj refile
    te iobj refile
    refile ROOT refile
    en case stéréo
    stéréo obl:arg refile
    la det chanson
    chanson obj refile
    des case sirènes
    sirènes nmod chanson
    . punct refile 

Il existe aussi une représentation graphique de la dépendance des tokens entre eux.

Dans l'analyse en dépendance on peut aussi parcourir l'arbre de dépendance. Les attributs de token suivant peuvent être utilisés pour parcourir l'arbre de dépendance :

- `children` les tokens dépendants du token
- `subtree` tous les descendants du token
- `ancestors` tous les parents du token
- `rights` les enfants à droite du token
- `lefts` les enfants à gauche du token

```python
root = [token for token in doc if token.head == token][0]
subjects = [tok for tok in root.lefts if "subj" in tok.dep_]
subject = subjects[0]
objs = [tok for tok in root.rights if tok.dep_ == "obj"]
obj = objs[0]
print(f"sujet : {subject}, prédicat : {root}, objet : {obj}")
```
    > sujet : Il, prédicat : refile, objet : chanson


## Extraction d'information
À partir de tous ces traitements, il est possible d'effectuer d'autres opérations.
Spacy a une classe Matcher qui permet de repérer des tokens ou des séquences de tokens à l'aide de patrons (pattern).
Ces patrons peuvent porter sur la forme des tokens ou leurs attributs (pos, ent, …).
On peut aussi utiliser des catégories comme IS_ALPHA ou IS_NUM, voir la doc
(Il existe une démo avec interface graphique mais pas pour le français 🙁)

```python
from spacy.matcher import Matcher
doc = nlp("Ce modèle est aussi disponible en taille XL ; je vous le conseille.")
matcher = Matcher(nlp.vocab)

pattern = [{"LOWER": "en"}, {"LOWER": "taille"}, {"IS_ALPHA": True, "IS_UPPER": True}]
#pattern : 'en' + 'taille' + lettres en maj

matcher.add("tailles", [pattern])
matches = matcher(doc)
for _, start, end in matches:
    span = doc[start:end]  # The matched span
    print(f"{span.text} ({start}, {end})")
```
    > en taille XL (5, 8)

Ça fonctionne pour les séquences comme « en taille M » ou « en taille XL » mais pas pour « vous l'avez en XL ? »

C'est un patron de repérage de séquences de mots. Il est possible de rechercher aussi des regEx.

Pour les entités nommées, parfois ça fonctionne mal avec le français (prénoms mal étiqueté, comme misc par exemple), il est donc possible de travailler avec des patrons pour correctement étiqueter les entités nommées, à partir d'un liste de noms par exemple.

Depuis la v3 de spaCy, il y a un nouvel outil, Dependency Matcher qui permet de faire de l'extraction de patrons syntaxiques. On peut faire porter les requêtes sur l'arbre syntaxique et non plus seulement sur la séquence des tokens.
Permet aussi de tirer des informations sur un texte, à partir de pattern précis
Par exemple récupérer tous tokens qui sont les lemmes de « acheter » ou « vendre », puis d'analyser les dépendances de ces tokens pour extraite, par exemple, le sujet et l'objet.

Une critique, c'est que spaCy ne prend pas le format sql (pris en charge par txm par exemple).

## Adaptation du modèle

### L’exemple des entités nommées
La taille et la nature du corpus d'entraînement seront déterminantes. Il est possible d'amender un modèle existant avec un jeu de données annotées de taille réduite.
Exemple sur les entités nommées mais la procèdure d'entraînement fonctionne pour d'autres niveaux d'annotations (pos, dépendance)
Voir la [doc](https://spacy.io/usage/training).

SpaCy propose aussi des outils pour évaluer les performance des modèles que l'on a généré, ainsi que des mécanismes d'export et d'import des modèles et des données.

Il ne faut pas avoir peur de faire son propre modèle, pour le traitement d'un corpus spécifique, ce n'est pas forcément très long à faire. 

