---
title: 'Network Visualization: The Next Generation'
date: '2024-04-05'
speaker: 'Dario Rodighiero'
category: 'workshop'
keyworkds: 'design ; dh ; dataviz ; networks ; python'
---

# Network Visualization: The Next Generation

On est a un moment où nous allons changer d'outils.
DR travaille au début comme designer web (JS, HTML, CSS).
Vers 2012, on commence à travailler sur la visualisation de données et DRd débute son travail sur la visualisation de réseaux.
Au début de la cadre d'une conférence DH en 2013 il produit une premère dataviz du réseau des intervenants reliés par les mots clés tiré des abstracts. Ils réutilisent ce résaau pour des goodies et des animations durant la conférence, voir [https://dariorodighiero.com/DH2014-Brand-Image](https://dariorodighiero.com/DH2014-Brand-Image).

Dans le cadre de ses recherches il travaille notamment sur la représentation des diagrams organisationnels, qui ont traditionnellement toujours quelque chose de pyramidal. DR cherche donc à les représenter à l'aide de la visualisation de réseaux afin de proposer une alternative à la représentation hiérarchique. Il produit ainsi une carte qui sera réutilisée à la conférence DH 2014, voir [https://dariorodighiero.com/Affinity-Map](https://dariorodighiero.com/Affinity-Map).

Jusque ici il a essentiellement travaillé avec des réseaux attraction-répulsion. Peu avant l'épidémie de Covid, il explore sur les aspects immersifs à travers la littérature scientifique.[https://dariorodighiero.com/Immersive-Architectures-for-Visual-Data-Literacy](https://dariorodighiero.com/Immersive-Architectures-for-Visual-Data-Literacy). Avec plus de 60k (600K ?) entrées, la visualisation du réseau était complexe. Il s'appuiera sur Unity [?] utilisé normalement pour les jeux vidéo, lui permettant une représentation en 3 dimentions (le temps est représenté par l'intermédiaire des dates de publication).

[Surprise machine](https://dariorodighiero.com/Surprise-Machines) est un autre projet qu'il a élaboré dans un cadre muséal (Harvard Art Museums) afin de représenter l'ensemble des œuvres, même celles qui ne sont pas exposées. 230k images. Utilisation d'[ImageNet](https://www.image-net.org/) et [PixPlot](https://dhlab.yale.edu/projects/pixplot/) | [repo github](https://github.com/YaleDHLab/pix-plot) (_machine learning_) pour la détection des objets.

DR travaille ensuite sur la controverse avec une visualisation inspirée des cartes météo, voir [https://dariorodighiero.com/Weather-Map](https://dariorodighiero.com/Weather-Map). Utilisation de la couleur pour la représentation temporelle.

## Discussion
DR propose de voir la visualisation comme une base de données large, et donner la possibilité à l'usager de remonter la chaine d'informations (zoom-in).

## Workshop
https://github.com/rodighiero/Charles-S-Peirce-PAP

Faire un mapping des pages selon leur similarité.

La matization pour chaque objet produit par spacy. Il opère ensuire une extraction des noms. La lématization est utilise pour simplifier les noms. Ainsi on peut faire une analyse sur la fréquence. Il ajoute une étape de nettoyage. Pour la distance linguistique il utilise un algorythme assez ancien mais efficace. On prend en considération la fréquence des mots pour les pondérer (permet d'éliminer les articles par exemple).

Ensuite il faut de réduction de dimention avec UMAP [voir https://acommaret.github.io/fichiers/Rapport_stage_Commaret.pdf](https://acommaret.github.io/fichiers/Rapport_stage_Commaret.pdf).

On obtient ensuite une distribution des pages par similarité. 

Il effectue ensuite une identification des clusters.

Il utilise ensuite un Word cloud : il prend les clusters pour les décrires avec des mots.

Le fichier `index.js`

cloner le repos `cd repo` puis `npm run start` => got localhost::8080
La différence avec Gephy qui fonctione selon une attraction/répulsion, ici on a une représentation de vecteur.
