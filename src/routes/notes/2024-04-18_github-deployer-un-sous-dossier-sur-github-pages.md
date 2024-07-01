---
title: 'Déploiement d’un sous dossier sur Github Pages'
date: '2024-04-18'
category: 'github'
author: 'jmorvan'
keywords: 'git ; github ; github pages'
---

# Déploiement d’un sous dossier sur Github Pages

Voici comment ajouter seulement un sous-dossier de la branche principale à la branche `gh-pages` (ou de toute autre branche).

```bash
git add path/to/subfolder && git commit -m 'Initial commit'

git subtree push --prefix path/to/subfolder origin gh-pages
```

Ces commandes créent une branche gh-pages et ajoutent uniquement les fichiers du dossier `path/to/subfolder` à la nouvelle branche, de sorte que seule cette branche soit publiée.

La simple création et l'extraction d'une branche ne ferait que copier l'intégralité de la branche principale dans la nouvelle branche, et la commande `git subtree push` s'assure que seul le sous-dossier est copié.

-----
Traduction de la note [_Deploying a subfolder to GitHub Pages_](https://notes.nicolevanderhoeven.com/Deploying+a+subfolder+to+GitHub+Pages#Deploying+a+subfolder+to+GitHub+Pages) de Nicole van der Hoeven.