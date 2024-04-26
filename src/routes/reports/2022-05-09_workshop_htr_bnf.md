---
title: 'Point HTR 2022 Transkribus / eScriptorium : Transcrire, annoter et éditer numériquement des documents d’archives'
date: '2022-05-09'
place: 'BnF'
category: 'workshop'
keywords: ''
---

# Point HTR 2022 Transkribus / eScriptorium : Transcrire, annoter et éditer numériquement des documents d’archives

## [Transkribus](https://readcoop.eu/transkribus/)
### Écosystème
S'inscrit dans un ensemble de procédés
- traitement de l'image
- collecte de données
- annotation
- reconnaissance de texte + entraînement
- publication

Il existe plusieurs solutions pour utiliser Transkribus
- [Transkribus AI](https://transkribus.ai/) : directement dans le navigateur, par cliquer-glisser, mais fonctionnalités très limitées ;
- [Transkribus lite](https://transkribus.eu/lite/) : application en ligne aussi, accessible depuis n'importe quel pc ou tablette, contient la majorité des fonctionnalités proposées par Transkribus ;
- [Transkribus expert-client](https://readcoop.eu/transkribus/download/) : version complète, logiciel à installer sur son ordinateur. Offre toutes les fonctionnalités de Transkribus ;
- Transkribus Metagrapho : API à installer sur serveur, pour créer ses propres flux de travail, permet d'intégrer Transkribus dans un système d'information déjà en place.

C'est 80 000 utilisateurs, 31M d'images, et 14 000 modèles HTR.

Transkribus fonctionne également avec la [scantent](https://readcoop.eu/scantent/) + application smartphone [Docscan](https://play.google.com/store/apps/details?id=at.ac.tuwien.caa.docscan), pour traiter les documents directement au moment de la prise de vue. 
Transkribus propose également des solutions de publication. La plateforme est personnalisable et permet d'effectuer des recherches plein texte et par _keyword spotting_ (données qui ont été écartées au moment de l'HTR).
_Citizen & science_, pour de la transcription participative. En cours de développement dans le cadre d'un projet pilote de science citoyenne au Tyrol/Autriche.

### Utilisation
Transkribus propose des modèles publiques. Chaque utilisateur peut créer son propre modèle. Pour le moment 120 modèles publics sont en ligne, pour des documents du XIe au XXIe siècle et dans 20 langues. 
Certains modèles atteignent 99,5% de reconnaissance de caractères (pour la reconnaissance des mots, on a un facteur d'erreur x3). 
Quelques projets 
- Archives nationales de Berlin, 3,6M de fiches ;
- Zeitpunkt, 15M de pages de journaux, utilisation du modèle _newsEye_ pour segmenter les articles ;
- Académie autrichienne des sciences, entraînement d'un modèle _Fraktur_ pour la reconnaissance des caractères typographiques, taux d'erreur inf à 1% ;
- Archives de la ville d'Amsterdam - _VeleHanden_ : projet en collaboration avec Transkribus. Gros succès, 4000 pages prévues mais 42 000 faites ;
- British Library également, pour des projets en langue indienne.

### READ-COOP
Coopérative à charte européenne, évolution d'un grand projet débuté en 2013, _Transcriptorium_, qui a évoluer en 2016 vers le consortium READ, qui a permis de développer la plateforme Transkribus. En 2019 fin des subventions européennes, donc transformation vers une société coopérative européenne :
- appartient aux utilisateurs qui deviennent membres ;
- organisée de manière démocratique ;
- tous les fonds sont réinvestis dans la plateforme ;
- sert la communauté ;
- dirigée par un conseil d'administration élu ;

### Cas pratiques : projet [Nouvelle-France numérique](http://nouvellefrancenumerique.info/)
Utilisation de Transkribus depuis 2017, quasiment depuis le début. L'objectif était de rassembler et transcrire l'ensemble des archives de la Nouvelle-France (16e-18e siècles). Grâce au HTR, le projet à pris une ampleur qui n'était pas envisagée au début (plutôt modeste), c'est aussi un projet participatif. 
Depuis le début c'est plus de 100 K pages qui ont été transcrites. Deux modèles sont publics pour le français entre le 16e et le 18e siècle, mais d'autres ne sont pas publiés. Ils peuvent toutefois être partagés, mais ils ne sont pas encore finalisés (+100). Beaucoup de types de documents (archives judiciaires, correspondances, cahiers d'ordonnances, greffes de notaires, etc.)
Très bonne intégration pour le travail en équipe, facilite le balisage des métadonnées (intégration XML), suivi des statut, etc. Outils de recherche très performants également (Solr), plein texte, par balises (mais pas Xpath), et également _keywork spotting_. 
Documentation sur une chaîne Youtube.

### Q°
Pourquoi ne pas faire un seul gros modèle générique ? 
    > Ce n'est pas une question de performance mais de précision du modèle : si on a une seule main, avec un vocabulaire réduit, on préférera un modèle plus petit et propre, proposant de meilleurs résultats, à contrario, si on a plusieurs mains, etc. on se tournera vers un modèle plus généraliste.

## [eScriptorium](https://escriptorium.fr/)
C'est une autre système de HTR. Derrière il y a le logiciel [Kraken](https://kraken.re/master/index.html), qui existe depuis quelques années et développé par _Kiessling_. Il permet la segmentation automatique, la transcription automatique, et est optimisé pour les écritures historiques et non latines. Ce système est libre, gratuit et ouvert (le logiciel et les modèles). Mais _Kraken_ s'exécute en ligne de commande. 

eScriptorium est une interface web pour _Kraken_ :
- plus facile à utiliser pour les chercheur en SHS ;
- Il faut des bons algorithmes, mais aussi une bonne ingénierie ;
- Ses début remonte à 2019, au sein du projet [Scripta-PSL](https://scripta.psl.eu/). Encore une fois, c'est libre, ouvert et gratuit.

### Le flux de travail
- Importer les images ;
- segmentation : trouver les lignes de texte, mais également les régions (via _kraken_, via importation, ou à la main) ;
- transcrire le texte (via _kraken_, via importation, ou à la main),
    - corriger la transcription, (ré)entraîner le modèle, répéter ;
- exporter le texte et/ou les modèles ;

Bientôt, il sera possible de modifier la séquence des lignes, via _kraken_ (ou déjà possible, à la main), la corriger, puis (ré)entraîner le modèle.
Concernant les modèles, bien évidemment, plus on a de documents et d'exemples, et plus on peut entraîner les modèles. 

En revanche, même pour le travail à la main, l'interface est pratique et accessible (ligne par ligne) et permet un suivi des modifications.

L'exportation des modèles fait partie de la documentation (q° de droit, sur les images qui ont permis l'entraînement, mais également le type d'écriture).

### Développements en cours
- Le balisage du texte (ß) ;
- l'annotation graphique (ß) ;
- la recherche de texte (ß) ;
- interface multilingue ;
- alignement automatique des textes (alignement d'un texte préexistant avec l'image).

### Les écritures rares
- Différents types d'écriture, polices, blocs Unicode
    - alphabets, logogrammes, hiéroglyphes
    - pas de définition claire de « signe » et « mot »
- différentes directions
    - gauche-droite, droite-gauche, haut-bas, bas-haut, circulaire, etc.
    - écrire sur la ligne de base, sur la ligne supérieure ou verticale, ou dans la grille
- un corpus souvent limité (trop petit pour Google)
    - il y a peut-être peu d'exemples pour entraîner une machine
    - souvent pas de modèles préexistants
- différentes conventions pour la transcription et la présentation, même pour les langues dites « simples ».

Il faut donc de bons algorithmes, mais aussi une bonne ingénierie !

### Types de projet eScriptorium / _Kraken_
- Usage personnel, sur un ordinateur (pas d'entraînement), ou avec gpu externe, sinon c'est trop gourmand en ressources ;
- un seul projet (par ex. _Viatnamica_, EPHE) serveur avec GPU modeste : pour une dizaine d'utilisateurs ;
- consortium de taille moyenne (par ex FoNDUE en Suisse) avec un cluster institutionnel ;
- consortium de grande taille.

### Exporter et échanger
On peut importer et exporter des transcriptions (ALTO, PAGE, conversion TEI (même si modèle de texte et pas de document)). Les modèles sont publiés sur [Zenodo](https://zenodo.org/communities/ocr_models/?page=1&size=20), et [Github](https://github.com/mittagessen/kraken-models). Il y a également le projet [HTR-United](https://htr-united.github.io/) (qui n'est pas propre à eScriptorium, mais pour tous les HTR). [SegmOnto](https://segmonto.github.io/) peut également être utilisé pour décrire la segmentation d'une page (onglet ontology).

L'interopérabilité est un réel défi (plus largement dans le cadre des dh), car chaque projet a ses propres objectifs, approches, et il est donc difficile de développer un modèle générique, applicable pour tout le monde et pour tous les projets.

## Table ronde
### Les usagers
 les deux projets sont issus du monde universitaire, toutefois, ça intéresse également les bibliothèques et centres d'archives, car ces solutions permettraient de proposer de nouveaux services aux usagers (dématérialisation, recherche, etc.). Les généalogistes sont également intéressés bien évidemment, et aussi certains services administratifs (dématérialisation).

 Quelles limites pour les transcriptions ?
     > On réfléchie à la reconnaissance et la transcription de partitions de musiques
 
 Quid des formules mathématiques ou scientifiques ?
     > Vraisemblablement sur les plateformes, impossible de ne serait-ce que les transcrire si elles n'ont pas la possibilité de s'exprimer en Unicode, pas de gestion de MathML par exemple. Voir aussi le projet d'édition des tables astrologiques de l'Observatoire et un autre projet qui utilise Transkribus, un peu eScriptorium, et un outils HTR d'IBM.

 Q° du processus de contrôle et de correction ?
     > Tout dépend de ce qu'on veut faire : donner accès à des ressources ou les publier ? Il n'est pas nécessaire d'avoir des transcriptions parfaites. Mais dans l'absolu dès lors que la segmentation est correctement faite, il est possible de revenir sur ces transcriptions.

### Moyens et ressources
Avec Transkribus, il est nécessaire de téléverser les images à « océriser » et de bénéficier de la puissance de calcule des serveurs du projet (tout est gratuit, sauf l'utilisation du HTR). Mettre en branle un projet c'est finalement toujours le plus compliqué, c'est bien si on est au sein d'une équipe mixte ou d'un service avec info et recherche pour l'installation et la prise en main.

Concernant les modèles, eScriptorium est ouvert, des modèles sont accessibles et il est possible d'en partager. Pour Transkribus, leur objectif c'est les données, pas les modèles. 


## Projets utilisant Transkribus
### Projets aux Pays-bas et en Belgique
Game of thrones, etc.

### _Between citizen science and handwritten text recognition_ - Vivien Popken
Utilise Transkribus depuis 4 ans. Le projet était de collecter les archives de la Hanse teutonique afin de les rendre accessibles, puis de les traiter avec HTR pour finalement les publier. Ils ont mis en place une école d'été. La _citizen science_ est un moyen de faire participer le public et de le former à de nouvelles pratiques, souvent issues du monde académique.
read.hanse.Sources!

### Modèles généraux et abréviations - Tobias Hodel
Problèmes spécifiques ! entre 2016 et 2019, a suivi l'évolution du HTR à travers une participation à READ. Les modèles généraux c'est pas seulement la reconnaissance d'une écriture spécifique, mais c'est aussi un type d'écriture.
Apprentissage à partir de documents d'une seule main. Dans ce temps il y a eu de grosses évolutions dans les techniques de reconnaissance pour l'océrisation.
Le second défi est de connaître l'efficacité d'un modèle, ils ont alors appliqué le premier modèle, mais le taux d'erreur n'était pas bon car l'entraînement avait été fait sur peu de documents et écrits par une seule main, avant de reprendre un modèle générique et de l'appliquer à un échantillon de test représentatif des documents à traiter.
Concernant les abréviations, il est possible de traiter pendant l'HTR.

### [PENSE](https://numrha.hypotheses.org/1107) - Plateforme d'Édition Numérique de Source Enrichies - J.-C. Carius (INHA)
Le projet est développé sous forme AGILE, c'est à dire qu'il a été lancé très tôt, il est toujours en cours, mais déjà accessible à tous. Plusieurs projets participe de cette initiative :
 - Projet pilote : les papiers d'Antoine-Louis Barye :
     - Transkribus n'a pas été utilisé pour la transcription, mais pour la segmentation, projet classique d'édition de documents,
- [Correspondance Doucet / René Jean](https://skylab.inha.fr/PENSE/LettresDeJacquesDoucetAReneJean1908-1929/) ;
- [Les planches Karbowski](https://skylab.inha.fr/PENSE/LesPlanchesKarbowsky/DecorsKarbowskyPourDoucet).

Pour utiliser Transkribus, il fallait faire quelque part de la rétro-ingénierie afin de le rendre utilisable aux chercheurs en histoire de l'art, qui ne sont pas nécessairement versés dans les nouvelles techno. Le tout a été de traduire le modèle de données de Transkribus pour ces chercheur afin qu'ils puissent traiter les métadonnées. L'API de Transkribus a aussi été utilisée pour développer une interface de suivie du travail.

## eScriptorium 

### [Sofer mahier](https://sofermahir.hypotheses.org/) - Daniel Stökl Ben Ezra

Projet lancé avant même _Transcriptorium_, pour l'édition de 16 mss hébraïques très importants car antérieurs au Talmud (ce dernier est un commentaire de ces textes). L'objectif c'est la précision. Dans un premier temps il y a eu un test de _crowdsourcing_, mais malgré la transcription de plusieurs milliers de lignes, la précision n'était pas satisfaisante. 
Finalement ils ont opté pour l'utilisation de _Kraken_, avec apprentissage d'un modèle, et utilisation d'éditions vulgates pour l'apprentissage du modèle.
Il y a une hiérarchie de document (page, colonne, ligne), mais pour l'édition il fallait une autre hiérarchie (livre, chapitre, etc.), le modèle a été entrainé pour cela également.
Finalement le modèle entraîné permet d'obtenir un taux d'erreurs situé entre 3% et 0.9% !

### [LectAuRep](https://lectaurep.hypotheses.org/) - Hugo Scheithauer
C'est une projet qui est finalisé aujourd'hui. L'objectif était de faciliter la consultation des répertoires des notaires conservés au Minutier central.
Difficultés : beaucoup de mains présentes dans les répertoires (différences des graphies, différences dans les densités, etc.). L'idée c'était de faire deux modèles génériques à partir d'une dizaine de mains afin d'obtenir un taux d'erreur inf. à 10% ; puis de passer à des modèles plus poussés (pour un notaire qui a beaucoup produit par exemple) permettant de passer à un taux d'erreur de l'ordre de 5%.

Il y a eu un gros travail sur la segmentation, afin de rendre compte des tableaux dans lesquels sont saisis les actes des notaires (à l'origine les transcriptions sortaient à plat, non structurées donc et il était impossible de rendre compte de ces tableaux).

### [ANR e-Notre-Dame-Paris](https://lamop.hypotheses.org/6870) - Sergio Torres
Édition des registres du chapitre de Notre-Dame. L'idée c'est de développer un traitement HTR afin de traiter rapidement les 14 000 pages du corpus, avec si possible un taux d'erreur inf. à 10%.
Il y a un format pour les pages qui est à peu près suivi et le système commence à réussir à repérer ces zones : 
- date
- conclusions
- titre (dans les marges)
- liste des chanoines
- numérotation

Ce qui est difficile dans la reconnaissance de texte du Moyen-Âge : les écritures (cursive, gothique, pré-gothique), les ligatures, chevauchements, concaténations, les pratiques d'écritures, abréviations, la répartition du texte en colonnes, en marginalia, etc.

Deux solutions intéressantes mises en place par le projet :
- capitalisation des entités nommées, le système arrive à mettre des capitales aux noms de lieux ou de personnes et c'est assez efficace !
- développement de certaines abréviations.

NB : réduire de 1% ou 2% son taux d'erreur c'est très long et complexe. Il faut faire attention car le système peut tomber dans de l'hyper-correction.

## Présentation des plateformes

### Transkribus
Sur le site web on trouve à peu près tout ce que nous avons besoin : les différentes applications Transkribus en ligne (AI, Lite) et la possibilité de télécharger l'application bureau (expert-client), on a aussi accès aux modèles publics (principalement pour les manuscrits, mais aussi pour les imprimés), etc.
Concernant les coûts, tout est gratuit, sauf la reconnaissance de texte, quand on procède à la reconnaissance de texte c'est payant, le reste est gratis (entraînement des modèles, segmentation, etc.).

- Transkribus AI : rapide, mais transcriptions, en fonction des cas, très imparfaites.
- Transkribus Lite : Transkribus dans le navigateur, permet de faire la segmentation, apprentissage d'un modèle, transcription automatique, ajout des balises, gérer des collections, vérifier le statut des actions lancées, gérer ses modèles, effectuer des recherches, etc.
- Transkribus Expert-client : toutes les fonctionnalités avancées de Transkribus : vue sur son travail, gestion des collections, gestion du layout des documents, gestion des versions des documents (historique des modifications, qui a fait quoi et comment), possibilité de baliser le texte et des outils avancés (AI), détection automatique de la segmentation, gestion des modèles (accès aux modèles publics), calcule des taux d'erreur.

### eScriptorium
msIA propose une instance eScriptorium (mais uniquement si on fait partie d'une institution membre). Il est possible de récupérer _Kraken_ et d'avoir accès à des tutoriels, au code source de eScriptorium. 

eScriptorium fonctionne par projets, qui contiennent des documents, contenant eux mêmes des pages. Pour un document ou une page, il est possible de lancer un processus de segmentation automatique, ou de le faire à la main, appliquer un modèle de transcription, etc.
La segmentation est vraiment efficace mais nécessite de la pratique. Dans le bloc _ontology_, il est possible de définir les types de régions, ou certains types de lignes et créer ses propres boutons pour l'annotation des textes.
Sur un point particulier, pour apprendre au modèle à reconnaître des annotations marginales, il faut entre 15 et 50 pages. idem pour les transcriptions. 
L'interface permet également la gestion de projet :
- données personnelles
- projet
- personnel (équipe)
- rapports divers (tâches, monitoring)
- metrics
- résumé du projet

eScriptorium propose également une fonctionnalité de recherche.

Pour le traitement des images, l'interface propose 4 panels :
- visualisation et annotation d'image ;
- segmentation ;
- transcription ;
- texte.

Il y a aussi la gestion de claviers virtuels. Tout comme Transkribus, il est possible de gérer/rétablir l'ordre des lignes.

#### Q°
La gestion des projets est très simple, chaque membre d'un équipe peut presque tout faire : ainsi l'annotation du texte par exemple n'est pas imputable à un membre en particulier. 
Le mode de publication des modèles est également léger (pas de _review_ avant publication, pas de validation), c'est un projet open-source, et ce serait contraire à cet esprit.
Pour Transkribus, il y a une validation lorsqu'un modèle est rendu public, afin de vérifier que le modèle est suffisamment documenté ; pour les modèles privés en revanche, il n'y a pas de contrôle.

## Workshop

### Transkribus

On téléverse ses documents sur les serveurs d'Innsbruck. La collection est centrale : elle relie les documents aux utilisateurs et aux modèles. Les opérations ne se font donc pas sur notre machine. Cela permet un travail en équipe avec gestion des rôles/droits utilisateurs.

**Verser un document** : 
- Il est possible de travailler un peu en local, pour transcrire (icône _open local document_), mais pas d'accès à la segmentation par exemple ;
- _import document_ (si rôle éditeur ou propriétaire) permet de téléverser un document :
    - soit .pdf, soit un dossier comportant des images, 
    - une fois téléversé, transkribus décompose le .pdf en images individuelles et ajoute un fichier **doc.xml** et un dossier **pages** contenant d'autres documents .xml pour chaque images (transcription + coordonnées),
    - possibilité également de téléverser via FTP pour gagner du temps.

Exporter les documents : 
    - On peut récupérer les documents transkribus bruts au format Mets (dossier avec nom du document contenant les images, et les documents xml associés)
    - Les propriétés d'exportation et formats sont personnalisables : pdf, pdf avec page titre contenant les métadonées, TEI, TEI avec XSL perso, .docx,_ filename pattern_, etc.

5 onglets de navigation principaux : _Server, Tools, Layout, Overview, Metadata_ :

**Overview** : vue générale sur le document (miniatures, nom du doc, etc.) 

**Server** :
- _document management_ : permet de visualiser les documents rapidement ; 
- _jobs_ : permet de voir les tâches en cours de traitement (transcription, segmentation) ;
- _collections_ : permet de choisir un collection mais également de gérer ses crédits, gérer les utilisateurs et leur rôle pour le partage des collections ;
- _recherche_ : 
    - recherche du texte dans les métadonnées, 
    - _fulltext_ (solr), avec des options intéressante, notamment le mode **fuzzy** (permet d'inclure dans la recherche un certain taux de caractères aléatoires),
    - _keyword spotting_ : compare avec les mots qui n'ont pas été retenues lors de l'HTR, avec un seuil d'erreur. Ça devient très puissant puisque avec cet outil on ne cherche plus nécessairement la perfection de la transcription : la donnée n'est pas parfaite, mais elle devient accessible,
    - par balises et attributs, permet par exemple de sélectionner ces balises en fonction d'un critère de recherche et de mettre à jour leurs attributs par lot.
        - _tips_ : si on a un peu trop de bruit dans la liste des résultats, on met à jour la première occurrence des balises recherchées, puis on sélectionne toutes les autres occurrences pertinentes et on clique sur _update_.  

**Tools** : 
- permet de configurer la segmentation (sélection du preset, mais aussi quelles pages sont concernées, filtres, etc.) ;
- configuration de la reconnaissance de texte (_text recognition_) ;
    - choix entre HTR ou textes imprimés,
    - Il est possible ensuite d'appliquer la reconnaissance de texte ou d'entraîner un modèle :
        - Modèles (_models_) : liste de tous les modèle disponibles, avec leurs propriétés. Un clique droit sur un modèle, permet de le partager dans une autre collection par exemple,
        - reconnaissance de texte (_run_) :
            - possibilité de lancer la reconnaissance sur une page, sur une sélection de pages, ou tout le document,
            - si on applique la reconnaissance, il faut alors choisir un modèle à appliquer, et surtout appliquer la fonction **keyword spotting** (très utile pour les grands documents) ;
            - **NB** les chiffres sont un problème, puisque qu'il n'y a pas le logique d'occurrence : il n'y a pas plus de chance de trouver 1 ou 2 ou 1350, alors que pour les mots, on a des lexiques. Une fois fait on peut passer le statut sur _done_ dans la barre supérieure ;
        - entraînement d'un modèle (_train_)
            - lorsque l'on veut entraîner un modèle, c'est préférable de travailler dans une collection, dans laquelle on peut inclure des documents de plusieurs autres collections.
            - C'est l'usage qui force l'apprentissage d'un modèle : si on rétablie les accents, la séparation des mots agglutinés, le rétablissement des majuscules… alors ll’algorithme aura tendance à les rétablir aussi. Ce sont des choix à faire dès le début. Plus on respecte le texte et plus on a un modèle précis et efficace,
            - si création :
                - nom de modèle,
                - langue (code langue ISO),
                - deux algorithmes :
                    - PyLaia (segmente au mot et plus de réglages possibles),
                    - HTR CITilab :
                        - possibilité d'ajouter des balises à prendre en compte (abréviations, noms de personnes, noms de lieux), ainsi que les attributs
                        - ne pas oublier d'omettre les balises _gap_ et _unclear_
                - nb d'époch : moins on met de cycles de validation, plus c'est rapide, à l'inverse, plus on fait de cycle et plus on augmente la précision)
                - en générale on utilise 10% pour la validation,
            - possibilité également, sur le même principe, de ré-entraîner un modèle existant pour l'améliorer
- apprentissage de l'analyse spatiale (P2PaLA), pour la reconnaissance des divisions du texte.
- calcules des performances d'un modèle (quand on le corrige).


**Metadata** : 
- document, permet de renseigner les métadonnées, ainsi que les conventions éditoriales ;
- commentaires ;
- permet d'organiser le balisage du document :
    - sous onglet _textual_ pour le texte : noms de personnes, de lieux, dates, abréviations, lacunes, glyphs, etc. et possibilité d'ajouter des attributs,
    - sous onglet _structural_ pour la division du texte : div, p, header, etc. (possibilité de sélectionner les régions avec des règles directement sur l'image),
    - pour les formules mathématiques, c'est assez limité pour le moment, utilisation du clavier virtuel, avec ajout de caractères _custom_

**Layout**
- une fois la segmentation faite, et une page sélectionnée, cet onglet permet de modifier la segmentation si elle présente des erreurs.

Dans le menu principale (menu hamburger) on peut synchroniser des documents avec des transcriptions (sous-menu documents -> sync local transcriptions with docs (si transcriptions issues de Transkribus), ou sync local text files with doc (transcriptions au format .txt, idéalement avec les retours à la ligne, mais ce n'est pas obligatoire, dans ce dernier cas, on peut entraîner un modèle, à la première passe il va associer p. ex. 1 ligne sur 10, puis on le ré-entraîne, et à la 3e passe tout sera associé, à partir d'un texte brut, sans retour à la ligne !)). 

NB 1 : Seule l'océrisation est payante. Pour gérer ses crédits => onglet server => collection => credit manager.
NB 2 : Quand on fait une tâche à la main, ne pas oublier de passer le statut sur _done_ quand il est achevé.
NB 3 : il est possible d'appliquer deux modèles sur une même page pour le HTR (imaginons un doc bilingue ou contenant deux alphabets, il faut faire une première segmentation, puis appliquer le premier modèle HTR, puis compléter la segmentation et cocher _find nex text region_ lors de l'application du second modèle HTR) mais ce n'est pas très efficace, il est préférable d'entraîner un seul modèle.

### eScriptorium
eScriptorium nécessite d'avoir accès à une instance (en local ou sur un serveur) et s'exécute dans un navigateur. ⚠ en local c'est très gourmand.

Accès à l'[instance msIA](https://msia.escriptorium.fr/projects/)

Quelques ressources/tutoriels :
- tutoriels au format texte
    - [prise en main (tutoriel texte)](https://lectaurep.hypotheses.org/documentation/prendre-en-main-escriptorium)
- tutoriels au format vidéo
    - [collection - documents - pages](https://vimeo.com/manage/videos/694079697)
    - [onglet édition - transcription et segmentation](https://vimeo.com/manage/videos/694125665)
    - [prise en main](https://vimeo.com/manage/videos/501443629)
    - [galerie de vidéos](https://escripta.hypotheses.org/escriptorium-video-gallery)

Pour créer un projet, il suffit de lui donner un nom.

Plusieurs onglets sont disponibles lors de la création d'un document :
- **Description** :
    - nom du document
    - type de caractère (latin pour français)
    - sens de lecture
    - ligne de base pour la reconnaissance des caractère occidentaux (_topline_ pour sanscrit et ligne centrale pour le chinois)

- **Ontology** : permet d'ajouter des types de région et types de ligne qui seront utilisés pour attribuer des régions lors de la segmentation. Voir [segmOnto](https://segmonto.github.io/)

- **Images** : 
    - permet de charger images
    - _segment_ permet de faire une segmentation automatique en appliquant un modèle, éventuellement avec détection des lignes mais aussi des régions
    - _transcribe_ permet de lancer une transcription automatique sur la ou les images sélectionnées
        - NB pour accéder à la transcription automatique, penser, une fois dans l'édition de l'image, à changer la version (_manual_ par défaut) 
        - NB 2 ⚠ si on applique une transcription automatique avec un modèle spécifique pour une seule page par exemple, la version apparaît pour toutes les pages de la collection, même si elle est vide pour une page en cours. De fait, faire attention lorsqu'on supprime une version, car ça supprime toutes les pages (même celle pour laquelle on a souhaité appliqué ce modèle pour la transcription)
    - _train_ (si on a les droits) pour (ré)entraîner un modèle sur toutes les images ou sur une sélection d'images
    - _export_ pour exporter les transcriptions (format text, PAGE et ALTO) avec des filtres personnalisables pour inclure certains paramètres dans les transcriptions (types de régions, types de lignes)
    - _import_ permet d'importer les images, mais aussi des transcriptions (au format ALTO ou PAGE, ⚠ il lui faut les coordonnées des lignes et zones le cas échéant)


- **Edit** : pour la segmentation et la transcription.
    - la segmentation peut se faire manuellement (simplement en cliquant sur l'image pour définir les lignes ou les régions, premier clique = début de ligne/région, second clique = fin de ligne/région)
    - les vues
        - doc 
        - segmentation 
            - on détermine les lignes (lorsque l'on trace les lignes de base la première fois pour une image, il faut penser à cliquer sur le pouce jaune pour lancer la segmentation)
            - on peut déterminer des régions (penser à cliquer sur switch mode region)
            - lorsque l'on sélectionne une ligne ou une région, il est possible de la relier à l'ontologie
        - transcription : permet de cliquer sur les segments pour transcrire ligne à ligne avec le facsimilé de la ligne juste au dessus
        - texte permet notamment d'inverser l'ordre des lignes

NB : ordre d'idée, suite question à Alix Chagué et Sébastien Cretin (BnF), ce dernier à eu un expérience avec un manuscrit de Victor Hugo ? sur lequel ils ont fait des test : il faut environ une soixantaine de pages transcrites, ensuite on arrive à un plateau et il devient alors difficile d'améliorer les choses, c'est même parfois contre productif car quand le modèle est trop entraîné, ça peut ralentir le process.





