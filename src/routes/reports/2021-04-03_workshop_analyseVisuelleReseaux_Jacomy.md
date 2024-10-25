---
title: 'Situer l’Analyse Visuelle de Réseaux'
date: '2021-04-03'
speaker: 'Mathieu Jacomy'
category: 'workshop'
keywords: ''
---

# Situer l’Analyse Visuelle de Réseaux

## Liens utiles 

Présentation de sa thèse : <https://reticular.hypotheses.org/1879>

Mathieu Jacomy, *Hidden structures in hairballs, and how to see them* <https://reticular.hypotheses.org/1809>

The Concept <http://www.e-diasporas.fr/>

Mathieu Jacomy, *Distance between nodes, when using a force-directed layout* <https://observablehq.com/@jacomyma/distance-between-nodes-when-using-a-force-directed-layout?collection=@jacomyma/quest-for-connected-closeness>

Mathieu Jacomy, *Evaluating the connected-closeness metric (post-design)* <https://observablehq.com/@jacomyma/evaluating-the-connected-closeness-metric-post-design?collection=@jacomyma/quest-for-connected-closeness>

Tommaso Venturini, Mathieu Jacomy, Pablo Jensen, *What do we see when we look at networks* <https://arxiv.org/abs/1905.02202>

## « Situer »

Les images qui se donnent à nous ne sont pas si évidentes que ça et ne refletent pas nécessairement la réalité. 

**Situer** est une référence à Haraway : la seule façon de trouver une vision plus large des choses est d'être quelque part en particulier. Haraway  ajoute “**only** a **partial perspective promises** objective vision”

Si on transpose aux réseaux, il faut faire attention aux effets d'evidence qui se présentent à nous. Il faut penser à tout ce qui a permis la construction de cette représentation (données, algorithmes utilisés, etc.). 

On fait appel à l'analyse de réseau quand on a des données relationnelles. Ensuite on à plusieurs solutions pour analyser ces données, l'analyse visuelle en est une, mais il y a également les matrices, etc.

Nous nous attacherons ici à analyse visuelle, nœuds et relations, avec des algo type vector-force (assimilation de force). 

L'analyse visuelle de réseaux est d'abord une pratique exploratoire, qui prolonge une analyse des réseaux sociaux. On visualise pour nous même. C'est différent de l'analyse confirmatoire, dans laquelle on a une hypothèse qu'on cherche à valider. On a aussi l'analyse explicative. Tout ça pour dire qu'on peut utiliser les mêmes outils pour des propos ou des objectifs différents. 

## Storyletting : laisser parler les images

Les visualisations de réseaux sont souvent illisibles, même si ça semble parlant dans un premier temps. 

Pourquoi les personnes partagent des visualisations exploratoires alors que l'assistance aurait besoin d'une visualisation confirmatoire ou explicative ? On les partage parce que nous les avons produites, et on se dit pourquoi ne pas la partager ? En réalité on sort une image de son contexte et on la propose à une assemblée sans rien expliquer, voir par exemple la visualisation de Adamic & Glance sur *Divided they blog* <https://edisciplinas.usp.br/pluginfile.php/3333574/mod_resource/content/2/p36-adamic.pdf>, lors de l'élection US de 2004, les commentateurs concluent à un bipolarisation de la sphère politique alors que les auteurs ne le font pas.

**On laisse parler l'image sans parler du contexte**.

## Noème de la visualisation des mégadonnées

Le noème pour Roland Bart c'est la photographie, c'est le « ça a été ». Il regarde une photo de sa mère qui est morte et il est ému. Il sait que la photographie n'est pas sa mère, mais il sais qu'elle a été, et c'est ça qui l'émeut.

Visualisation de bigdata : il y a trop de choses à appréhender individuellement, et la visualisation permet de voir des formes émergentes, on ne sais pas nécessairement ce que c'est, ni à quoi ça correspond, mais on voit des règles de construction qui déclenchent une enquête de sens pour essayer de comprendre ce que ça veut dire. Finalement, il y a une sorte d'**ordre** dans le **chaos**. (voir visualisation sur les déplacements des sportifs sur le terrain => on perçois le terrain de basket)

C'est un **effet sémiotique de l'image** en elle même et pas une question de **contexte**.

## La littérature scientifique sur le dessin de réseaux a toujours couru après les pratiques

La littérature du dessin de graph, qui dit ce qu'est un bon dessin de graph est nécessaire pour les informaticiens.

On se nourrit des pratiques, d'abord pour faire des graphs à la main, pour essayer de déterminer les critères pour faire de bons dessins (minimiser le nombre de croisements, minimiser le nombre de coudes, longueur des arcs homogène dans le dessin, etc.), mais parfois il y a des contradictions. En 1984, ces critères se fixent un peu, et Eads met au point le premier graph de force.

En 1997 Purchase prend en compte des critère esthétiques (limiter les croisements, etc.), elle arrive à la conclusion que moins il y a de croisements et plus c'est lisible, mais son réseau n'a que 16 nœuds.

En 2005, on a *Divided they blog*, on rentre dans l'aire des réseaux complexes, chaque sommet à un certain nombre de relations, ce qui compte ce n'est plus le critère esthétique, mais la séparabilité des groupes. Il faut rompre avec les liens de longueur égale, qui ne permettent pas de séparer les groupes.

La lecture diagramatique s'applique bien aux petits réseaux (moins de 100 nœuds), on arrive à suivre les chemins ; dans l'interprétation topologique, il y a tellement de liens qu'on ne peut plus suivre les chemins, finalement les liens ne servent presque à rien, ce qui nous intéresse c'est les hubs hyperconnectés, le placement des nœuds, leur répartition, leur densité, etc. par exemple, dans *Divided they blog*, on n'a pas placé les bleus avec les bleus et les rouges avec les rouges, il y a aussi des bleus dans les rouges et inversement.

## Le malajustement entre notre cognition visuelle et l'ordre computationnel

Pour voir des groupes l'homme a besoin de voir des écarts. L'algorythme ne voit pas les choses comme ça. Il pense de manière probabiliste, il s'interesse en quelque sorte au barycentre. 

L'algo de détection de communauté peut donc voir des groupes qui ne sont pour autant pas complètement séparés, que l'œil n'arriverait pas à distinguer — on peut les répérer tout de même à l'œil car on remarque une sorte d'élongation. Si on lance plusieurs fois l'algo ou qu'on change certains paramètres, les communautés détectées peuvent varier, sauf aux extrémités, c'est dans l'entre-deux qu'on a des variations. Encore une fois, il faut faire attentions à ce qu'on voit.

## Quels groupes voit-on avec une spatialisation simulant des forces

Voir papier de Peixoto sur les Stochastic block models : le groupe comme quelque chose de *cohésif* est une notion qu'on a d'un groupe, mais il y en a d'autre qui ne sont pas nécessairement « cohésives ».

Dire qu'il y a des communautés est une chose, montrer des communautés en est une autre, et identifier correctement chaque membre d'une communauté en est une autre, notamment losqu'il y a des recouvrements (nœuds qui appartient à plusieurs groupes).

Les algo de détection de communautés ne sont pas stables, car il n'y a pas de communautés préexistentes dans un réseau. 

Pour voir les groupes dans des structures il faut avoir des liens longs, Il est parfois nécessaire pour ça de sacrifier certains liens : si on n'est pas capable de sacrifier certains liens pour permettre cette élongation, on ne peut plus distinguer ces groupes. C'est pour ça que certains militent pour ne pas utiliser de longueur de liens non extensible.

## Connected-closeness

C'est une mesure pour aider à comprendre les réseaux. Elle est basée sur l'idée que de nombreux graphs de réseaux utilisent des algo de placement par assimilation de force qui tentent de rapprocher les nœuds connectés. Mais en même temps, nous savons que deux nœuds qui sont proches dans la visualisation ne sont pas nécessairement connectés, et qu'il y a toujours des nœuds connectés qui sont éloignés…

voir ici <https://observablehq.com/@jacomyma/highlights-on-connected-closeness>

 ## Conclusion

La visualisation de réseau implique une réduction et les groupes qu'on voit sont le travail d'un algo qu'on ne maitrise souvent pas. La visualisation pose finalement le même problème de réduction que celui qu'on essaye de contourner en faisant appel à la visualisation.





