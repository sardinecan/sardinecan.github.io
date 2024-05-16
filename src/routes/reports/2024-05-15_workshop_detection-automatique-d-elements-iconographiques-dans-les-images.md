---
title: "Détection automatique d’éléments iconographiques dans les images : principes et mise en œuvre"
date: '2024-05-15'
speaker: 'Christopher Kermorvant ; Marion Charpier'
category: 'workshop'
keyworkds: 'IA ; annotation ; modèle ; détection'
---

# Détection automatique d’éléments iconographiques dans les images : principes et mise en œuvre

3 types de modèle
- détection, c'est le moins fin, il n'est pas nécessaire de créer une ontologie, on cherche des objets, sans avoir besoin de les classifier
- classification : on attribut une étiquette ou une classe à une image ou à une région spécifique de l'image
- segmentation : encore plus fin, on divise une image en segment ou en région en fonction de certaine propriété

En utilisant SAM on peut segmenter une image, récupérer les coordonées et s'en servir pour les classifier.
La robustesse d'un modèle est calculer avec un metric l'*intersection over union* (IOU). Il s'agit du taux de chevauchement entre la boite d'annotation et la vérité de terrain. En dessous de 0.5 (50% de superposition des deux boites) on considère que la prédiction est fausse. Mais attention : 
- vrai positif (TP) : un objet dont la classe et la detection sont bonnes 
- faux positif (FP) : détection d'une classe correcte mais mal positionné 
- faux négatif (FN) : rien n'est bon dans la détection

ces trois indicateurs permettent de calculer le rappel, la précision et le score F1
Un modèle parfait à une score F1 = 1. 

Une autre metric intéressante pour évaluer un modèle est la matrice de confusion.

## Comment choisir un modèle
Prendre en compte précision et performance, complexité et taille du modèle (demande de ressources computationnelles), robustesse aux variations, flexibilité et modularité.

## Détection automatique d'objets dans les images avec YOLO

### Principe de l'apprentissage automatique (Machine learning)
Comment faire exécuter une tâche à un ordinateur
La première solution c'est d'écrire un programme : un expert explique à un développeur la tâche à réaliser. 

La seconde solution c'est de faire apprendre la machine : avec le ML on a toujours un expert qui prend des exemples annotés, un ingénieur ML va nourrir un apprentissage à partir des exemples annotés pour créer un modèle, qui sera capable de rédiger un programme. 

avec la programmation 
le programme est écrit par un dev, l'expert doit pouvoir explicité les règles, il faut un programme par tâche, en cas d'erreur il faut modifier le programme
Avec l'apprentissage automatique, le programme est écrit par la machine, l'expert doit annoter des exemple, un seul programme d'apprentissage pour plusieurs tâche et si on a des erreurs, il suffit de donner de nouveaux exemples.
le pipeline est le suivant :
```
Exemples annotés ->     apprentissage ->     modèle
                                                ↓
                   Exemples à traiter ->     programme ->     exécution ->     prédiction
```
Les exemples définissent le programme : l'annotation est la phse la plus importante.
Comment bien choisir les exemple : il faut constituer un échantillonage aléatoire et représentatif. Il faut également annoter come ce que l'on souhaite obtenir en prédiction. 

L'objectif est d'apprendre à généraliser pour prédire sur des exemples nons vus pendant l'apprentissage. : il faut 3 éléments
- un échantillon pour apprendre (train test)
- un echantillon pour vérifier le modèle généralisé (validation set)
- un échantillon pour évaluer le modèle (test set)
Ces 3 ensembles doivent être repésentatifs, aléatoires et disjoints.

NB : avec YOLO assez peu de données sont nécessaires pour obtenir de bon résultat. 
+NB 2 : possibilité d'augmenter artificiellement les données avec les changements de perspectives par exemple, ou modification des images. mais plus efficace lorsque c'est intégrer dans un script d'apprentissage.

## Entrainement d'un modèle de détection avec Arkindex
- [Documentation Arkindex](https://doc.arkindex.org/tutorial/segmentation-training/)
- [notes Teklia](https://notes.teklia.com/s/P6wnIUYqQ#)

![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/4832afb3-38d8-4ee0-8554-1a00f1b619fd.png)


### 1. Créer des répertoires (folders) dans votre projet

- Naviguer dans votre projet
- Créer 3 répertoires (folders) avec les noms Train, Dev et Test
- Menu Actions->Add folder

![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/caf6c560-0e42-4867-ae8b-f811a3b0c083.png)

#### En vidéo :
youtube S_7N3jYALtc


### 2. Répartir les exemples aléatoirement dans les répertoires train/dev/test

2.1 Utiliser la présentation Random

![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/21161b4f-8ae3-4fd4-a2ad-27d91b0e3d01.png =200x)

2.2 Utiliser la pagination à 100

![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/c4600678-8f4d-45ea-add1-c0eb84c35bf2.png =200x)

2.3 Utiliser la sélection

![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/a2e9731c-8aac-40fd-bb58-73bd32ad2af8.png =200x)


#### En vidéo :
youtube XOP27j-4ee4

### 3. Créer un dataset avec des sous-ensembles Train/Val/Test

- Menu Actions -> Project Information -> Dataset

![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/06924b36-4c38-4cf1-a6d3-ccc116b8beea.png)


#### En vidéo :
youtube wkxgt9NSMXc

#### 4. Générer l'export complet du projet

- Menu Actions -> Manage Export -> Start Export
![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/adf1b4cf-527e-4a3e-8f83-6076d429adbd.png =300x)

:::info
Pourquoi cette étape ?
Arkindex permet l’entrainement distribué (cloud, cluster)
L’export et la génération de l’archive d’entrainement permettent la distribution des données
:::

#### En vidéo :
youtube w082mRvSqEI

### 5. Générer l'archive d'entrainement à partir du projet

- Menu Actions -> Create Dataset process

![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/a2ad2b26-7226-45f1-a05f-97cd95166fc2.png)

- Select « Generic  Training Dataset Extractor »

![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/24cd7a48-3d19-48a2-9df4-9b9818ecd8f4.png)

- Run Process

![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/50b131b8-9bed-46a0-884f-504505173939.png)


#### En vidéo :
youtube GLOY-Q9ekpc

### 6. Créer un modèle

- Menu Personnel -> Models

![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/bce1c379-75e1-44c0-abae-5c5d3540b971.png)

- CREATE MODEL puis renseigner les informations

![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/98471c27-be6c-406c-a396-2c1b0ae067cf.png)


#### En vidéo :
youtube _0B2ARsnbqo

### 7. Lancer l'entrainement du modèle YOLO

7.1 Menu Actions -> Create Dataset process

![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/3b52d35e-166c-41e3-8515-a00802688e2b.png)

7.2. Find the YOLO Training | Detect/Segment worker

![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/f7cf0df5-655f-424f-b7b6-4c1a18c32b55.png)

7.3 Créer une configuration d'entrainement

- Name : votre_nom YOLO illustration
- Class names to predict : illustration
- Model that will receive the new trained version :  nom du modèle créé en 6.
- Number of epochs to train the model : 3
- Type of object to detect using the segmenter : bbox

![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/35a7e5b6-efc6-4a1a-8c93-ac1f68b2dbdd.png)

7.4 Lancer l’entrainement

- Sélectionner GPU
- RUN PROCESS

![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/e0b0c9ef-2ed6-476e-8256-83c8c26f5b26.png)


#### En vidéo :
youtube 9XiL9FxD31M
