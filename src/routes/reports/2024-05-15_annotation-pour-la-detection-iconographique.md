
---
title: "Annotation d'images pour la détection iconographique"
date: '2024-05-15'
speaker: 'Pauline Laurent, Christopher Kermorvant ; Marion Charpier'
category: 'workshop'
keyworkds: 'IA ; annotation ; modèle'
---

# Annotation d'images pour la détection d'annotation

Les outils d'annotation en Computer visionpermettent d'ajouter des informtions visuelles à des données telles que des images ou des vidéos.
Ces annotations comprennent des étiquettes de classe, des boîtes de délimitation, des contours, des masques sémantiques.
Elles sont essentielles pour entraîner et avaluer des modèles d'apprentissage automatique.

## Comment choisir son outils
- interface (facilité et précision)
- flux 
	- flexibilité (propose d'autres fonctionnalité pour différents types d'annotation et prendre en charge différents formats de données)
	- scalabilité
	- intégration dans le pipeline de traitement
- coût
	- open-source
	- cout de la personnalisation et de la formation
	- souveraineté des données (certaines données sont protégées et ne peuvent pas être utilisées pour être mise a disposition)

## Panorama

### Label studio

[https://labelstud.io/](https://labelstud.io/)

Open-source, facile d'utilisation, précision, flexible, mais nécessite une installation locale, import IIIF imparfait, coordonnées à convertire pour une utilisation avec YOLO par exemple. Il n'y a pas de hiérarchie entre les annotateurs (tout le monde à accès à tout). On reste maître des données produites.

### Roboflow
[https://roboflow.com/](https://roboflow.com/)

facile d'utilisation, open source, flexible, etc. Mais sourtout les jeux de données sont ouverts (il faut avoir tous les droits sur données donc !)
Surtout pour les 

### IIIF Annotation
Facilité d'utilisation, interface claire, mais API peu déployée. Peu de documentation, pas de formation, mais la communauté IIIF est très active. Il n'y a pas d'intégration dans un flux automatisés possible, mais nécessite une connaissance de la structure des manifestes IIIF.

### Callico
(atelier)

## Annotations de documents avec Arkindex et Callico (atelier)
[https://notes.teklia.com/s/U0ZkcuQnC#](https://notes.teklia.com/s/U0ZkcuQnC#)

### Objectif

L'objectif de cet atelier est l'annotation d'un corpus de documents numérisés en utilisant les plateformes open-source Arkindex et Callico.


### 1. Choix d'un corpus :

#### Ouvrage : Les animaux vivants du monde

https://cloud.teklia.com/index.php/s/58k5m5HG4rezGsm

Ce corpus est consitué d'un échantillon de pages de l'ouvrage [Les animaux vivants du monde : histoire naturelle illustrée d'après la photographie directe] (https://gallica.bnf.fr/ark:/12148/bpt6k64383119) dispinible sur Gallica. Il est disponible sous forme d'un manifest IIIF.

Les tâches d'annotation possibles sur ce corpus sont :
- délimiter les illustrations


#### Livre d'heures

https://cloud.teklia.com/index.php/s/peA9aakzGezHLP8

Ce corpus est consituté d'un échantillon de pages issues de livres d'heures médiévaux. L'archive ZIP contient des images jpeg téléchargées à partir des sites web IIIF des différentes institutions.

Les tâches d'annotation possibles sur ce corpus sont :
- délimiter la page du manuscrit en excluant la fond (suport de numérisation)
- délimiter les zones de texte en excluant les zones blanches, décorées ou les illustrations
- délimiter les minitatures ou les initiales

#### Presse : Le Petit Dauphinois illustré

https://cloud.teklia.com/index.php/s/gTK77sEAiwJPSwg

Ce corpus est consituté de 10 numéros du Petit Dauphinois illustré en PDF téléchargés à partir de Gallica.

Les tâches d'annotation possibles sur ce corpus sont :
- délimiter les illustrations


### Documentation
 Pour plus de renseignements, veuillez consulter les documentations accessibles en ligne ici :
- Arkindex : https://doc.arkindex.org/
- Callico : https://doc.callico.eu/


### 2. Création d'un compte sur https://demo.arkindex.org/ et import des images.

Le lien pour créer un compte ici : https://demo.arkindex.org/user/register?next=/user/login. La création de ce compte entrainera la réception d'un mail, afin de valider son compte.
Création d'un nouveau projet (bouton new project en haut à droite de l'écran)
Le nommage du projet permet de le retrouver facilement, la description n'est pas facultative, on peut cependant mettre la même dénomination que dans le titre.
Pour ajouter des images, il faut aller chercher le bouton action dans le coin en haut à droite, et choisir *import files*
![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/9059c3b9-4e06-4cfb-bb4d-4a24aea6d28d.png)

#### Les modes d'import d'images :
Ici, nous allons essayer trois méthodes différentes d'imports, en fonction du corpus choisi:
- L'import d'images
- L'import de pdf
- L'import de manifest iiif

Ce corpus étant composé d'un nombre raisonnable d'images, on peut les importer directement, néanmoins, pour des corpus plus conséquents, il y a aussi la possibilité d'importer depuis un serveur S3.

Une fois les fichiers sélectionnés sur l'ordinateur, on se retrouve face à cette page, où on peut vérifier les images avec le lien iiif, et les supprimer de la sélection avec la poubelle.
![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/212d5049-3c26-40a0-80da-f161a1ee66c7.png)
Une fois cette vérification effectuée, cliquer sur *import*.

La page suivante s'ouvre, qui permet de suivre le processus d'import des images. Il est conseillé de nommer le process, afin de le retrouver en cas d'erreur.  ![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/b3d733ce-cadd-4691-83d5-38031f4ff0a6.png)

Le process pouvant être long, Arkindex envoie automatiquement un courriel lorsque l'opération est terminée, ou lorsqu'elle a échouée.

Lorsque l'import est terminé, nous pouvons revenir au projet en cliquant sur le lien attaché au "project" .
Lors de l'annotation des images, il faudra être en mesure de délimiter des illustrations. Pour ce faire, il faut retourner dans l'onglet "actions", puis sélectionner "Project information".
![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/bf67fbca-872a-4597-8ea1-75444c115a0d.png =250x)

Puis dans les types, ajouter une catégorie "Illustration", et valider.
![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/003f4320-9481-4dc0-a77b-0629c970378b.png)


### Le traitement des images
Afin de pouvoir entrainer un modèle pour la détection des illustrations sur une page, il faut lui apporter une part de données d'entrainement, annotées par une personne, pour montrer ce qu'il devra ensuite détecter seul.

Il est possible d'essayer d'utiliser un modèle standard, néanmoins les résultats ne seront pas précis, voire faux.


## 3. Utilisation de Callico
Pour ce faire, nous allons utiliser la plateforme d'annotation collaborative callico (https://demo.callico.eu/projects/). Il faut alors créer un compte sur https://demo.callico.eu/users/signup/.La création de ce compte entrainera la réception d'un mail, afin de valider son compte.

Attention /!\ Sur Callico, un utilisateur peut être soit Adminitrateur de campagne soit Contributeur (annotateur) dans le cadre d’un projet. Un projet correspond à un ensemble d’images, pour lesquelles il est possible de créer plusieurs campagnes d’annotation.
Pour réaliser les tâches de ce tutoriel, il vous faudra donc deux comptes: un compte administrateur, pour créer le projet et la campagne d’annotation, inserer les , et un second qui servira uniquement à l'annotation.
Vous pouvez donc d'ores et déjà créer ces deux comptes.

**Connexion au compte administrateur**

Il faut alors se connecter à callico, et ajouter un nouveau projet (le bouton en haut à droite de l'écran). S'ouvre alors une page de création de projet
![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/eb65ac32-2339-4a58-812e-9eaa94e6cf25.png)


Ici le nom du projet est obligatoire. Afin d'être sûrs de ne pas se mélanger avec les process, nous pouvons nommer le projet Initiales - Demo PictorIA

Les deux derniers champs sont importants : ils permettent de lier les projets arkindex et callico et de créer un pont d'interopérabilité.
Pour le fournisseur, il s'agit de la version démo d'Arkindex. Pour trouver l'identifiant de l'objet, il convient de revenir sur Arkindex.

### Trouver l'identifiant de l'objet sur Arkindex
Sur Arkindex, il est possible de retrouver les informations du projet en cliquant sur "Actions" dans le coin droite de l'écran.
![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/27c0ba3f-374d-496e-b0ae-927aec35c633.png)

En cliquant sur project information, nous allons pouvoir retrouver l'identifiant sous le titre du projet. Il suffit de cliquer sur cet *id* pour qu'il se retrouve dans le presse-papier.

![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/839d0aae-7718-4971-896d-e35714f71e71.png)

Il est alors possible de le coller dans callico et de valider.

Le projet est alors créé sur Callico. On se retrouve devant cette page
![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/3fc5cb4c-67d2-4132-9b54-17e4b2158053.png)

Le bouton Editer permet de revenir au formulaire précédent.

Le bouton "gérer les membres" permet d'ajouter des personnes au projet, que ce soit des contributeurs (pour l'annotation), des modérateurs pour contrôler les annotations ou d'autres administrateurs de campagne. Pour assigner quelqu'un sur un projet, il faut qu'il aie au préalable un compte sur callico.

C'est à cette étape que vous pouvez ajouter l'adresse de votre second compte annotateur.
![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/d3d2281e-1bf3-4886-ba5e-f23551e17480.png)
Sur la page "gérer les membres de ce projet", cliquez sur "ajouter un nouveau membre". De là on renseigne l'adresse mail du second compte déjà créé et on désigne le membre comme contributeur.
![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/41b13134-f0cb-4b8f-9231-e04a922d613a.png)

La fonction "inviter des utilisateurs" permet de générer un lien pour partager la campagne à des contributeurs.

## 4. Importer des images dans Callico
- Il n'y a pour l'instant pas d'images à annoter présentes sur Callico, il convient donc d'aller les chercher, en les important depuis Arkindex en cliquant sur la case "importer depuis Arkindex".
![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/94f440fd-e44f-43ec-8585-ce48219fbd3f.png)


- Il faut  renseigner un nom de processus, qui permet de retrouver le process dans une liste. Ce nom n'est pas obligé d'être exhaustif. On peut par exemple ici renseigner "import images test".
- Nous allons ensuite devoir renseigner l'*id* de l'élément à importer, si l'on parle d'un dossier d'images, ou un dataset.
Ici, nous n'aborderons pas l'utilité des *datasets* sur Arkindex et Callico. Aussi, vous pouvez consulter la documentation [](https://https://doc.arkindex.org/training/datasets/) pour plus de renseignements.

**Retrouver le nom du folder dans Arkindex**
Les images étant dans un dossier, il faut retrouver l'ID du dossier, pour ne pas importer l'intégralité des images. L'*id* se trouve sous le nom du folder dans Arkindex.
![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/3bc95ff6-7dd8-44d9-b00e-80bdf48ec6b1.png)

**Retour à Callico**
![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/78433c0d-7bdc-453b-b937-fa5f48ab1681.png)
Ici, les éléments qui nous interessent pour l'annotation sont des pages, donc on le sélectionne dans la liste déroulante.
Les autres champs ne sont pas interessants ici, ils concernent des projets plus complexes, lorsque les images ont déjà été annotées ou traités par un modèle. Le corpus ne contient pas non plus de métadonnées.
Nous pouvons alors commencer l'import.
Une page de Processus s'ouvre alors, et au bout de quelques secondes, il est possible de rafraichir la page pour voir si l'import est terminé.
Une fois l'import terminé, nous pouvons revenir à la page "Projet" pour créer une campagne d'annotation.

## 5. Création et configuration de la campagne
Le nom de la campagne permet de la distinguer parmi d'autres. Il est alors important de lui donner un nom correspondant à sa finalité. Ici, elle est nommée délimitation des illustrations.
On va ensuite sélectionner "Eléments".
![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/8d4b3436-990d-4e6d-911c-b1647238c0fb.png)
La description est facultative.

De nouveaux champs apparaissent par la suite :
* Le nombre de tâches à assigner par volontaires permet de donner un nombre de tâches déterminé à chaque annotateur. Il est par défaut à 50 tâches par annotateur. Il peut être utile de fragmenter les corpus dans le cas de grosses campagnes d'annotation. Il peut aussi être utile de fragmenter pour que des personnes ne prennent pas de grands nombres d'annotations si ils ne terminent pas leurs tâches assignées.  Néanmoins, si l'on indique 0 (zéro) tâches attribuées, les tâches ne sont pas automatiquement attribuées. Ici, on veut annoter quelques images, donc dans ce champs, on renseignera 20 images à assigner par annotateurs.

![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/672ee92f-8de2-4898-8db3-0d5770408a4c.png)
Le type d'éléments à utiliser pour annoter sont ici "illustration"
On valide ensuite en cliquant sur configurer.

De là il faut créer des tâches pour la campagne.
![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/9848b345-5e19-42ee-ba58-cbf75ac809ba.png)

Le type d'élément à annoter est variable selon les campagnes, il s'agit de l'image totale qui va s'afficher et sur laquelle seront faite les délimitations des zones (illustrations et textes). Ici, on coche la page.
![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/7edec08f-4d61-420a-bee2-b087fdb765ef.png)

L'algorithme d'attribution permet de choisir l'ordre des images, que ce soit séquentiel (les images se suivent) ou aléatoire (les images sont prises au hasard dans le corpus). Le choix dépend des finalités des besoins de la campagne et de la disparité des fonds.
Pour la fonction "éléments à utiliser" permet, dans le cas où des images ont déjà été annotés avec les éléments que l'on souhaite retrouver. Le curseur est réglé par défaut sur tous les éléments.

Il est possible d'attribuer les tâches de la campagne à des utilisateurs. Ici, on peut cocher le compte de l'annotateur.

il est enfin possible de vérifier si les critères sont corrects et que la campagne répond aux besoins en prévisualisant une tâche unique. Si tous les paramétrages sont bons, on peut créer les tâches, sinon on continue le paramétrage.

Lorsque l'on a validé on peut voir que la campagne est prête et que les tâches ont été créées. ![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/7c4dbc6e-8d5a-4f5a-9161-003c0be3f43a.png)


## 6. L'annotation
Il est temps d'annoter les images.

**Connexion au compte annotateurs**
Il faut changer de compte pour se connecter à l'annotateur. De là, on sélectionne le projet, on clique sur "mes tâches" et on accède aux tâches à annoter.

L'interface de Callico est simple d'utilisation. On sélectionne le type d'élément à annoter, ici il n'y en a qu'un "Illustration". Néanmoins on peut créer autant de zones que necessaire.

Les zones à délimiter peuvent se superposer.
![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/99f95f95-78a2-4a52-9b7e-c192fc186573.png)
Sur cette image,on retrouve deux zones d'illustrations


En ce qui concerne l’outil de délimitation, il existe sur Callico deux outils :
- Si la page est bien numérisée à plat, il est possible d’utiliser l’outil de sélection rectangle.
- Si la page n’est pas droite, si les illustrations ne sont pas rectangulaires ou si les formes sont légèrement de biais ou si le texte s'enroule autour de l'illustration, il est possible de prendre l’outil polygone.
- Pour détourer l’élément avec le polygone, il suffit de cliquer aux quatre coins du « rectangle », et revenir au point de départ pour fermer la sélection. La fermeture d’un rectangle entraine la création d’une nouvelle zone du même type.

Pour se déplacer sur le document, il faut revenir à la main afin de ne pas créer de nouvelle zone de sélection.
La sélection est repositionnable, avec l’aide de l’outil main.
Il est possible de revenir sur la sélection avec l’icône œil, et de supprimer cette sélection avec la poubelle.

En haut, on retrouve un entonnoir qui indique que l'on traite les images qui nous sont assignés, on retrouve également une option pour laisser un commentaire afin de faire remonter des questions, qui seront transmises au modérateur ou à l'administrateur. Enfin, les flèches permettent de passer d'une tâche à l'autre.

Il est important de valider la tâche à la fin de l'annotation. Le bouton ignorer permet à un annotateur de passer une tâche, qui sera assignée à quelqu'un d'autre. Cela ne permet pas de dire qu'il n'y a pas de champs interessants sur cette image. Si une page ne contient pas d'illustration, il faut valider l'annotation sans champs délimités.

Il est possible de revenir sur son annotation pour la corriger.


## 7. L'export de résultats vers Arkindex

**Retour au compte administrateur**

L'export vers Arkindex permet de retrouver ces annotations et d'entraîner un modèle. Il est donc necessaire.
L'export des résultats se retrouve sur la page de la campagne.
![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/397e95d2-0884-43e1-ae68-f81b74e38cec.png)


Ici, on retrouve trois options, la génération d'un tableur au format csv, au format xlsx et directement sur arkindex.
Une campagne peut être exportée sans être terminée à 100%, elle peut également être exportée plusieurs fois.


#### L'export vers Arkindex

- Lorsque cette option est sélectionnée, ce formulaire s'ouvre:  ![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/0d97be3a-ac1e-4906-8a41-bd38c3d9fb09.png)

Le nom du processus permet de le retrouver, mais n'est pas très important. Ici, il s'agit de l'export de la campagne de délimitation.

On peut choisir l'état des tâches à exporter, si celles-ci sont annotées ou validées. Ici, on coche annotées, car elles n'ont pas été modérées et validées.

On trouve ensuite deux options ( "forcer la republication des annotations" et "publier chaque annotation séparément")  qui ne sont pas à cocher.

- On peut alors commencer l'export. La page de process s'ouvre, on peut réguliérement rafraichir pour voir l'avancée des tâches. A la fin du process, on peut repasser sur Arkindex, pour vérifier que les annotations sont importées.

![](https://storage.teklia.com/tools-hedgedoc-uploads/uploads/595d07e6-aec0-41c3-89ab-6dd9d458edb0.png)

Ici, on peut voir l'annotation de l'illustration. Les annotations permettront par la suite de réaliser l'entraînement d'un modèle de détection de zones.

### Conclusion
Par ce tutoriel, nous avons donc vu comment importer des images dans Arkindex, puis dans Callico, et enfin la réalisation d'une campagne de délimitation de zones de texte.
La délimitation des zones permet ensuite la réalisation de campagnes de transcriptions, ou de regroupement d'entités, les campagnes peuvent se multiplier et enrichir les documents en fonction des entrainements. L'outil est alors modulable pour s'adapter aux besoins du projet.
Pour tout autre type de campagne, les étapes de configuration sont similaires, néanmoins il est nécessaire de consulter la documentation de [Callico](https://https://doc.callico.eu/campaigns/configure/#specific-configuration-for-each-campaign-mode) pour trouver le mode de campagne adapté aux besoins.

Callico et Arkindex sont des outils open-source en construction, et des développements sont possibles pour des besoins spécifiques.

Vous êtes vivement invités à manipuler l'outil et à nous faire des retours !

Merci pour votre attention !











