---
title: 'Textes mathématiques et transcription en XML-TEI'
date: '2024-05-31'
place: 'CNRS Pouchet'
speaker: 'Richard Walter ; Candice Lecoffre ; Julie Giovacchini ; Maria-Laura ; David Rabouin ; Emmylou Haffner'
category: 'conference'
keywords: 'TEI ; edition ; LaTeX ; XML'
---

# Les métadonnées archivistiques en transition : le nouveau cadre normatif, les enjeux et les premières réalisations

## La plateforme EMAN et la transcription, une histoire complexe, (Richard Walter)
La plateforme EMAN est élaborée à partir de d'Omeka, et à l'origine elle était une bibliothèque numérique.
Développement du module *Transcript* pour la transcription de document sur la plateforme. Fondé sur le modèle XML-TEI, mais ne nécessite pas de connaitre le balisage, système WYSIWYG.

TEI Publisher est utiliser pour la publication des textes.

Problèmatique des textes mathémathiques au départ sous-évaluée, et envisagée avec `MathML`, mais complexe à mettre en œuvre  sur la plateforme. Après LaTeX dans XML-TEI, ils essayent de placer du XML dans LaTeX. 

## Encoder des maths et du texte en XML‐TEI sur Transcript : état de l'art, guidelines et pistes, (Candice Lecoffre, projet DWR)
Explorer la compatibilité du XML-TEI avec LaTeX. Pourquoi utiliser LaTeX ? Latex est connu et massivement utilisé par les mathématiciens et est moins verbeux que MathML, et donc perçu par les profanes comme plus simple.

État de l'art LaTeX/XML-TEI, réalisé dans le cadre du stage de Candice Lecoffre : 
  - LaTex est de plus en plus utilisé en SSH (en réalité cela fait longtemps !) ;
  - beaucoup de projets (transcription collaborative de l'encyclopédie, archives Poincaré, etc.) mais ils n'utilisent pas les deux conjointement (édition TEI, puis sortie LaTeX, mais pas de LaTeX dans la TEI, ou l'inverse).

La plateforme EMAN utilise MathJax pour convertir LaTeX dans la TEI mais cela pose des problèmes de visualisation.

Plusieurs solutions envisagées
- double encodages LaTeX / MathML, mais du coup trop de chose à maintenir
- faire un script 


## Retour d'expériences par les projets Dedekind, DWR et Manuscrits Leibniz
### Dedekind
Faire une analyse de l'édition des œuvres choisies de Riemann par deux autres mathématiciens (Dedekind et Weber ?). Faire une édition critique des originaux de Riemann, en faisiant apparaître les variations/corrections dans les transcriptions et épreuves des éditeurs. Mais utiliser de la TEI dans LaTeX sur Transcript pose des problèmes (problèmes de visualisation causés par la plateforme EMANN, mais aussi compatibilité avec les navigateur).

### Manuscript de Leibniz (Maria-Laura)
Comment adapter *Transcript* à une sorte d'édition génétique des témoins (pas vraiment des versions à proprement dites d'un point de vue philologique). Quel apport de de l'édition electronique au regarde de l'édition papier ? 

- problèmes de visualisation aussi des formules LaTeX ;
- formules mathématiques râturées ;
- nécessité d'encoder des râtures avec la TEI mais aussi avec LaTeX (`\cancel{}`);
- texte un peu partout à replacer sur d'autres pages, etc.

### Discussion
Il n'est pas question de faire une édition diplomatique, mais est-il question de faire une édition critiques. Sur Dedekind, il y a un texte établi, un texte de référence, qui est le manuscrit de Riemann. Sur Leibniz, c'est différent, il y a un texte final qui est celui qui doit être édité, mais il y a des manuscripts préliminaires qui ne sont pas à proprement parlé des variantes (donc pas vraiment des variantes) Pour Julie Giovacchini le cas de l'édition Leibniz ne rentre donc pas dans le cas d'une édition critique (pas possible d'utiliser `<app/>`, `<lem/>`, `<rdg/>`, etc.)

En réalité sur Leibniz, il y a les deux cas parfois, il y a des témoins sucessifs, et parfois c'est un même document qui a été corrigé successivement et commenté. De fait il est prévu deux traitements différents pour ces deux cas de figure.

## Encodage Savant en TEI de variantes d'un texte (Julie Giovacchini)
(sur la plateforme *Transcript*)

Nous disposons de témoins, qui sont des instances différentes sur des supports différents et produits à des époque différentes d'un même texte. Cela implique que la notion de texte est abstraite. Les instances peuvent présenter des différences, dans le texte notamment. 
L'encodage doit permettre d'établir une hiérarchie entre les textes (variantes). On a un texte idéal et des témoins que l'on rejette. 

Variante génétique : une variante critique n'est pas éxactement une variante génétique, elle n'est pas interne au document édité, mais elle est une autre version historique du texte complètement différente (pas encodable avec `<choice/>`, `<del/>`, etc.)

Pour le faire en utiliser, on utilise `<app>`, `<lem/>` (le texte établie, celui que l'on considère comme la bonne version), et des `<rdg/>` (les variantes).
On utilise en plus les attribut `@wit` afin d'associer un segment à un témoin.

Il existe 3 méthodes pour les encoder en TEI :
- *location reference method* : d'un côté on a le texte dans sa version établie et de l'autre l'apparat : on sort la note d'apparat du texte général et on utilise un système de numérotation pour rattacher notre note au texte (comme une note de bas de page), mais implique qu'il n'y a pas de rattachement précis dans le texte. 
- *Double-end-point-attached method* : plus complexe à mettre en œuvre. Les balises `<anchor/>` marquent précisément le début et la fin du phonème. les `<anchor/>` sont des éléments vides qui marquent un endroit précis du texte. L'ancre permet de donner un `@xml:id` unique au lemme. Seule méthode qui permet de traiter correctement les chevauchements, mais longue à mettre en place. Méthode parfaite pour des petits textes.
- *parallel segmentation method* (solution la plus utilisée) : la méthode utilisée sur Transcript. Elle consite à intégrer directement l'apparat au niveau du texte concerné. Mais problème sur la plateforme Eman pour la gestion des omissions (obligation d'avoir du contenu à étiqueter pour rattacher des balises (`<rdg wit="#id1 #id2">om.</rgd>` pour marquer une omission, à la place de `<rdg/>`)). Le surlignage en jaune proposé par EMAN pose des problèmes de compréhension et de hiérarchisation qui n'a pas lieu d'exister. 

Autre problématique, la lecture logique d'un (Laurentiana 61v-72v commentaire de Marc Aurel). Il ne s'agit pas ici de montrer des variantes : sur la même page on peut retrouver le commentaire et l'analyse grammaticale d'un mot ou d'un phrase qui parfois n'est même pas sur la même page. Il y a bien évidemment des liens de juxtaposition entre ces blocs qui se suivent, mais pas nécessairement hiérarchiques (titre, sous-titre, paragraphe, etc.). On déduit donc des blocs logiques, a plat (`<div type="commentaire"/>`, `<div type="analyse">`).



### Discussion 
Sur Leibniz, obligation de distinguer le support et le contenu (comme Condorcet, plusieurs "documents" sur une même feuille).