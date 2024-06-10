---
title: 'Les métadonnées archivistiques en transition : le nouveau cadre normatif, les enjeux et les premières réalisations'
date: '2020-01-28'
place: 'Archives nationales'
speaker: 'Florence Clavaud ; Thomas Francart ; Pauline Charbonnier ; Nicolas Orsini ; Camille Monnier ; Manonmani Restif ; Tiphaine-Cécile Foucher ; Anila Angjeli'
category: 'conference'
keywords: ''
---

# Les métadonnées archivistiques en transition : le nouveau cadre normatif, les enjeux et les premières réalisations

## Introduction

Anthea Seles

**L'ICA** : promouvoir la préservation et l'accès aux Archives dans le monde entier.

**RIC** a été crée par un groupe d'experts de la description archivistique et son objectif est de faire des liens **entre** les collections.



## *Records In Contexts* : le nouveau standard international pour la description archivistique

Florence Clavaud

Présentation du standard et de quelques facettes pour donner un aperçu général.

Le **standard RIC** s'inscrit dans la continuité des 4 standards internationaux existants **ISAD-G**, **ISAAR-CPF**, **ISDF**, **ISDIAH**, qui **ne prenaient pas** en compte **les dernières réflexions** dans ce domaine et coportaient même **quelques contradictions**.

**RIC** doit les remplacer mais ce n'est pas pour autant une rupture, il se devait donc d'être compatible.

**RIC** se concentre sur **les entités qui constituent le monde des archives** et non sur les règles de description de ces entités. On s'attache à définir les entités qui définissent le monde des archives, mais aussi leurs propriétés (les attributs). Ces entités appartiennent à des catégories ou classes d'objets qui doivent en premier lieu être (re)définies. Ces entités peuvent être reliées entre elles par des relations.

Un des objectifs est donc de considérer les archives, leur histoire et **les multiples couches de contextes** dans lesquelles elles s'inscrivent. On n'arrive pas avec les standards existants à décrire les archives dans leur histoire et leur gestion. On arrive généralement seulement à gérer les provenances. RIC ambitionne une description plus précise, plus nuancée, plus facile à exploiter et **multidimensionnelle**. RIC permet de présenter des graphes orientés, on passe vraiment dans le multidimensionnel, **on quitte le bidimensionel proposé par ISAD-G-EAD**.

RIC est développé par le groupe **EGAD**, sous la présidence de Daniel Pitti (un peu le père de l'EAD).

RIC est un stnadard en 3 parties 

- un **modèle conceptuel abstrait** (indépendant de toute implémentation) : **RIC-CM**
- une **ontologie**, c'est à dire une représentation formelle et technique du modèle conceptuel, écrite dans les langages OWL/RDFS/RDF : **RIC-O**
  - Le principal objectif de RIC-O : définir un vocabulaire et les règles applicables aux métadonnées archivistiques ayant la forme de jeux de données RDF (des triplets)
- Un manuel de mise en œuvre (**RIC-Application Guidelines**)
  - non encore commencé, mais sa forme pourrait prendre la forme inhabituelle de tutoriels. 

Première version V0.1 en 2016 complètement remaniée en décembre 2019 avec la V0.2 (**la première version est à 100% obsolète**). En mars le modèle conceptuel complet de la V0.2 devrait être publié, et en novembre la V1.

RIC-CM définit **22 entités** dont **4** sont **essentielles** dans le modèle : 

- Record resource (contenu informationnel)
- Instantiation (réalisation de ce contenu informationnel sur un support)
- Agent
- Activity (évènement qui résulte de l'action intentionnelle d'un agent)

Il y a 41 attributs pour ces 22 entités, ce qui n'est par énorme.

Enfin, il y a 78 relations qui peuvent relier ces entités (relations inverses également quand elle ne sont pas symétriques), groupées et organisées en système polyhiérarchique.

### Quelques exemples

Un record resource a nécessairement une instantiation à un moment donné, mais aujourd'hui elle peut ne plus exister : 

Acte médiéval dont nous avons la trace dans un cartulaire, donc copie à partir d'un original, mais qui est aujourd'hui perdu. RIC permet de représenter cet élément.

*Note dans les exemples du PP, ce qui est préfixé RIC-O est propre à l'ontologie.* 

### Principes d'élaboration de RIC-O

Le choix de l'ontologie s'est imposé car il n'y avait aucune ontologie de référence existante. On peut imaginer d'autre forme d'expression de **RIC-CM**, notamment en **EAD** et **EAC-CPF**, qui ont vocation à s'aligner, très prochainement, avec RIC-CM (dès cette année pour EAC-CPF).

**RIC-O est une ontologie de domaine**, elle ne dépend d'aucune autre ontologie ! Ça ne veut pas dire que dans le futur ça ne sera pas la cas. 

RIC-O est immédiatement utilisable => expert RDF

RIC-O doit être utile : faire des recherches sur le graphe produit (il gère les relations)

[La documentation de RIC-O 0.1](https://www.ica.org/standards/RiC/RiC-O_v0-1.rdf) est disponible en version HTML sur le web, pour être lisible par tous.

**RIC-O est plus riche de RiC-CM** (notamment plus de classes pour être parfois plus précis et pour s'aligner avec d'autres modèles.)

À l'heure actuelle, le projet *Social Networks and Archival Context* (SNAC) Cooperative, le projet de recherche allemand, *SONAR*(idh), le protail France Archives, ont commencé à utiliser RIC. Il existe une **liste de diffusion pour RIC-O** et en févier 2020 un entrepot RIC-O sera ouvert sur **Github**.

Des ateliers de présentation plus détaillés et d'échanges seront organisés avec le SIAF (26 et 31 mars après midi) et un premier workshop de 2 à 3 jours consécutifs sera également organisé pour les personnes maitrisant EAD et EAC-CPF

## RIC aux AN : enjeux et premières réalisations

Florence Clavaud / Paulie Charbonnier

Aux AN il y a essentiellement un entrepôt principale (mais il y a en fait d'autres), celui des IR, constitué de fichiers XML-EAD (2002) en constante évolution et placés dans un *workflow* d'édition et de publication solide.

Dans ces documents, il y a déjà beaucoup de relations, mais peu exploité dans la SIV, et relevant d'une seule catégorie (la provenance) pour ce qui concerne les IR et les producteurs.

Dans la SIV il y existe un graph sous-jacent, mais il ne permet jamais de voir le context élargi. Les vocabulaires d'indexation utilisés sont très pauvres et sous employés. Cet énorme d'entrepôt de métadonnées n'est pas le seul, il y a énormément de bdd documentaires souvent anciennes et totalement dissociées de l'entrepôt principale (**base PROF** => description des provisions d'offices). Elles décrivent des documents, mais aussi des personnes. Elles ont des structure hétérogènes, des contenus parfois redondants entre eux et avec le silo principale. Il y a aussi une plateforme VITAM, une bibliothèque numérique, des bases images, plusieurs interfaces utilisateurs et finalement peu de points d'accès simples et intuitifs (qui, quand, où, quoi).

L'hypothèse de départ, RIC-CM peut aider à : 

- identifier les objets communs sous-jacents aux différents entrepôts de métadonnées
- les positionner les uns par rapport aux autres
- définir les méthodes d'agrégation de données
- Évaluer et choisir les solutions en terme d'architecture technique pour stocker, gérer et publier les informations avec un système d'information unifié…

Exemple avec une collection de photos numériques : aujourd'hui les images ne sont accessibles qu'à la fin du processus de recherche, on ne peut pas remonter aux informations à partir d'une photo ! Avec RIC-O c'est possible, on peut partir d'une photo pour remonter aux métadonnées.

La route est encore longue aux AN…

### PIAAF

Pauline Charbonnier

**Pilote d'Interopérabilité pour les Autorités Archivistiques Françaises**, première application de RIC en France dès 2014. Projet réalisé avec le concours des AN, BnF et SIAF.

Le jeux de données étaient composé de 276 notices EAC-CPF et 38 IR en EAD => petit échantillon mais potentiellement comportant des beaucoup de relations.

La première étape fut le passage de ces notices en RDF. Cela a permis d'extraire 940 agents, des collectivités, des monuments… qui n'étaient au départ par décrit dans les fichiers sources. RIC-O peut exprimer la complexité de la description archivistique.

En revanche cet exercice a montré la nécessité de préparer les jeux de métadonnées au préalable afin d'obtenir en sortie un jeu de données plus qualitatif.

### Enrichir, normaliser et sémentiser les référentiels d'indexation

#### Les référentiels de lieux

En ce moment environ 15 référentiels sont utilisés et un modèle XML "maison" trop pauvre. Le passage à RIC-O permettra d'agréger les infos des différentes institutions et d'enrichir les données.

=> dans le référentiel des lieux, il y a 13 000 noms de voies parisiennes, mais ce n'est qu'une liste.

#### Le référentiel des fonctions

*Work in progress*. L'idée est de produire un thesaurus SKOS et RIC-O. Ce sont les domaines fonctionnels qui ont été retenus (Agriculture, Social, Média…)

#### Conception d'un référentiel des agents

Décision politique début en 2018. Il s'appuiera sur l'EAC-CPF, mais il faut le faire évoluer pour la description des relations. Il a également été décidé d'agréger à ce futur référentuel des notices issues des bdd documentaires des AN. La première bdd traitée sera LEONORE.

L'objectif derrière tout ce travail sur les référentiels est d'augmenter et de favoriser l'utilisation et l'enrichissement des référentiels : si on n'indexe pas les documents et les informations qu'ils contiennent, il n'y a aucune chance de mettre au jour toutes ces relations.

### ALEGORIA

Projet mené par l'IGN : produire une plateforme permettant la recherche multimodale (dans les métadonnées mais aussi dans des images). Utilise des données des AN et de l'IGN, avec le choix de RDF et RIC-O pour l'ensemble des données. 

### Conclusion

Aujourd'hui il reste à introduire ces solutions dans une stratégie institutionnelle et intégrées dans un schéma global.

En attendant une application web sémantique aux AN, la publication des jeux de données RDF produits devrait être réalisée dans l'année sur http://data.culture.gouv.fr sous la forme de .zip récupérables par tous.

## RIC-O Converter : conversion de métadonnées archivistiques (EAC, EAC-CPF) en jeux de données conformes RIC-O

Outils de conversion des notices EAC-CPF et EAD vers des données RDF exprimées suivant RIC-O.

Il y avait un besoin pour un outil de conversion industrielle (15 000 notices EAC-CPF et 28 000 inventaires EAD pour les premières expérience (PIAAF, ALEGORIA, etc.)). Le problème c'est que, bien qu'il n'y avait que 2 formats, il y avait aussi beaucoup de pratiques différentes dans l'encodage.

RIC-O Converter est sous licence libre et doit suivre les évolutions de RIC-O. Il est financé par le MCC/DIN, suit une approche *agile*, deux versions successives du logiciel ont été développée et il y a une volonté de s'appuyer sur **XSLT**.

Le chantier a été mené par la société **Sparma**. Le développement a été piloté par des tests unitaires (90 fichiers de tests contenant chacun plusieurs cas de tests (moitié EAC/moitié EAD))[^1]

Il s'exécute en ligne de commande.

Problèmes rencontrés :

- Générer des logs d'erreur dans les cas imprévus
- Génération d'URIs
  - politique d'URIs des AN ?
  - comment assigner des URIs aux entités qui n'en ont pas ?
- Dédoublonnage des relations entre entités qui apparaissent dans les 2 sens (manque de précisions dans les relations)
- Faire émerger des entités conceptuelles qui sont implicites dans les fichiers
  - EAD : les recordResource
  - EAC : faire émerger un type de relation : person/person

Concernant les URIs, provisoirement, les ressources sont inscrites dans le domaine fictif des AN. Lorque c'est possible on s'appuie ensuite sur leur classe et l'identifant de la notice EAC.

ex pour les agents et leur notice d'autorité : 

- data.archives-nationales.culture.gouv.fr/**agent**/51126
- data.archives-nationales.culture.gouv.fr/**record**/51126

En revanche pour les relations il n'existait rien, il a été choisi de concaténer les identifiants des deux agents.

Les relations ont véritablement fait l'objet d'une grande attention. Elles sont nombreuses dans le graphe des AN, typées en 4 catégories vagues, datées (sauf relations familiales). L'expérience de PIAAF a montré qu'elles devaient être décrites de manière fine.

Les graphes produits peuvent ensuite être interrogés (graphDB par ex.). Des minis interfaces de requêtes ont été développés et publiés sur github à cet effet pour ceux qui ne maîtrisent pas les langages de requêtage.

Du point de vue des AN, le logiciel est totalement fonctionnel et a permis d'avoir une meilleure connaissance des notices EAC et EAD qui sont dans la SIV. Cela conforte dans la volonté de poursuivre en interne la sensibilisation des personnels à l'indexation et la production de métadonnées.

Les limites pour le moment sont que le convertisseur ne prend pas encore en compte l'ensemble des éléments EAC-CPF et EAD, ni les autres formats de description (SEDA par exemple).

## La feuille de route sémantique du ministère de la Culture

Nicolas Orsini

Le **Département de l'Innovation Numérique** (DIN) soutien l'innovation numérique selon 3 axes :

- programme national de numérisation et de valorisation des contenus culturels
- stratégie de diffusion des données culturelles (open data, web sem, Europeana)
- Soutien à l'innovation. 

En 2014, le MCC a mis en place un feuille de route pour inscrire les données culturelles dans le web sémantique (identification des acteurs, identifiants pérennes pour les ressources culturelles, créer une interconnexion des grands référentiels culturels, interconnexion interinstitutionnelle, etc.).

Il y a aussi un volonté de mettre en place un programme de R&D, avec l'INRIA notamment.

Le ministère de la Culture a publié des ouvrages en ligne pour les producteurs de données, (par ex. : *Quels modèles pour la provenance des données numérique ? État de l'art*).

En plus d'une logique d'accompagnement des équipes et d'actualisation de la feuille de route, il y a une volonté de sortir d'une logique de silos pour les différents secteurs culturels.

Pour l'avenir, les principaux chantiers sont : 

- Interfaces et visualisation de données liées

- Traçabilité des données numériques

- Graphes culture, etc. 



## Le portail FranceArchives: de l'agrégation d'IR à la constitution d'un réservoir de données.

Manonmani Restif / Camille Monnier

C'est une portail interministériel porté par le SIAF au ministère de la Culture, avec le ministère des Armées. Il s'agit d'un agrégateur de métadonnées archivistiques françaises. On y trouve également des archives privées. L'objectif est de toucher un public large, du néophyte au rechercheur chevronné. 

Actuellement, il collecte et expose des données des AN, Archives des Armées et Affaires étrangères, Archives départementales (seulement 43 y participent), Archives municipales, établissements publiques (La Contemporaine par ex.). C'est également l'agrégateur français pour le portail européen des archives.

C'est une acteur attendu au sein du web de données. Pour 2023, l'objectif est de passer d'agrégateur à réservoir de données. Les données en entrée sont essentiellement des docs XML-EAD (intégrés avec entrepôts OAI-PMH ou intégration manuelle). Il n'y a pour l'instant pas vraiment de liens sémantiques entre les ressources sur le portail. Les liens sont fait avec les entrées d'index. Les entités nécessitent d'être alignées car elles sont souvent décrites plusieurs fois et nommées différemment. Les agents sont alignés vers data.bnf, Wikidata ; et les lieux vers GeoNames. Des scripts d'alignement ont été produits et ont permis, avant tout nettoyage, d'aligner 14% des agents et 50% des lieux. Aujourd'hui, un nettoyage avec OpenRefine est en cours avant réintégration.

L'arrivée de certaines institutions sur FranceArchives est souvent l'occasion pour ces dernières de nettoyer leurs données. FranceArchives acceptent tous les IR, partant du principe qu'il vaut mieux avoir un IR imparfait que pas d'IR du tout (même si, bien évidemment, un IR structuré est un must…)

FranceArchives lance un groupe de travail de description/indexation (publication prochaine d'un guide des bonnes pratiques). Grand intérêt pour RIC. Il y a aujourd'hui une expérimentation d'OpenRefine et d'implémentation de Kibana pour la visualisation de données, basée sur ElasticSearch.

## La transition bibliographique à la BnF et au-delà

### Panorama global des enjeux et des travaux en cours : vers un graphe d'entités

Typhaine-Cécile Foucher

La transition bibliographique, ça fait longtemps qu'on en parle : le modèle FRBR date de 1997. C'est un changement mais pas une révolution, on n'abandonne pas les données => changement des normes, changement des codes de catalogage, changement des données et habitudes de travail.

Il y a deux points importants : les **URI** et les **liens**.

À la BnF, il y a le format intermark, qui évolue constamment et permettait déjà de gérer énormément de liens (à la différence d'autres format mark). Mais ce qui doit être implémenté c'est FRBR.

Exemple de graphe FRBR : l'idée qu'une oeuvre est une **Expression** (l'idée de l'auteur), qui peut se traduire par une **Manifestation** (si on schématise, il s'agit des différentes éditions de cette œuvre), qui peuvent elles-mêmes se traduire par un **Item** (qui est l'objet que l'on tient dans les mains).

Cette transition bibliographique devient une nécessité : importance du web sem, importance des liens, changement des pratiques professionnelles, mutualisation, coproduction…

Les outils de transition sont : 

- data.bnf.fr : date de 2011, il n'est pas parfait, mais il évolue et il permet à la Bnf de présenter ses données. L'interface de data.bnf a été modifié récemment (pas encore une refonte graphique) mais l'idée était de simplifier ce qui était présenter (/!\ pas ce qui est publié en RDF !). Il y a également le chantier RobotDonnées : ce qui est présenter c'est le niveau *expression*, mais pas encore la *manifestation*. RobotDonnées permettra de compléter les données à partir des notices bibliographiques (donc de présenter le niveau *manifestation*).
- changement des outils de catalogage (NOEMI) : permettra d'exposer tout le graphe FRBR. À l'horizon 2022, mais ne sera accessible que par la Bnf. Il y a 4 groupes de travail : 
  - Outils de production
  - Format et migration
  - Intégration SI
  - FNE



### Vers un Fichier National d'Entités (FNE)

Anila Angjeli

L'objectif est de créer une plateforme centralisée nationale pour la coproduction des données relatives aux entités de référence (agents, œuvres, concepts, évènements, etc.) utiles aux organismes dépositaires de collections documentaires en France.

Le principe : **l'unique et les multiples** : une même entité identifiée et décrite une seule fois et gérée de manière centralisée dans le FNE.

Intérets : 

- Mutualisation (coût, compétence, expertise humaine)

- Mieux intéger les référentiels dans le Web de données (le global se nourrit du local)
- Favoriser l'interconnexion des données
- Décloisonner les données et en faciliter l'utilisation
- Faire dialoguer les domaines
- Améliorer la qualité et la fiabilité des données en s'appuyant sur des outils modernisés, expertises, etc.

Les données des deux acteurs du projet (ABES et Bnf) sont sous licence ouverte de l'État. L'environnement est également propice (standards métier fondés sur la notion de graphes d'entités, transition bibliographique, etc.)

Le FNE est placé sous le programme de transition bibliographique (mêmes entités, mêmes acteurs pilotes : ABES et bnf). Il s'inscrit donc dans la continuité des efforts et comme aboutissement de la transition bibliographique. Son périmètre documentaire est potentiellement toutes les entités.

Une approche de construction progressive a été adoptée : 

- Premier cercle de producteurs (catalogueurs et experts de la Bnf, SUDOC, etc.)
- extention à d'autres acteurs

Les fonctions attendues sont : 

- Disponibilité 24/7
- Modèle de données (provenance et historisation des données, etc.)
- Outils d'alignement.

Il reposera sur Wikibase (métamodèle neutre, conçu pour le travail collaboratif, outils web et open source, permettra aux bibliothèques de publier leurs informations dans le web de données, déjà utilisé par nombre de chercheurs, etc.).

Des faiblesses ont toutefois déjà été identifiées : 

- Nombreuses fonctionnalités de recherches professionnelles à développer
- Problème des contrôles sur gestion de certaines informations difficiles à implémenter.

Un conseil scientifique a été mis en place.





[^1]:en fait on crée une sortie manuelle, afin de déterminer ce qu'on attend précisément.