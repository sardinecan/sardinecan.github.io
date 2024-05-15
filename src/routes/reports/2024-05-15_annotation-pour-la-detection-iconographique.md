
---
title: "Annotation d'images pour la détection iconographique"
type: "workshop"
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

### Callico (atelier)

[https://notes.teklia.com/s/U0ZkcuQnC#](https://notes.teklia.com/s/U0ZkcuQnC#)
		
