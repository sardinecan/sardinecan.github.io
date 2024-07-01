---
title: 'N pour NodeJS'
date: '2022-05-17'
category: 'nodejs'
author: 'jmorvan'
keywords: 'nodejs ; version'
---

# N pour NodeJS

Travailler avec plusieurs versions de `node` grâce au package [`n`](https://github.com/tj/n), et sans recourir à `nvm`.
<!--### Installer l'aide de node
- `sudo npm cache clean -f` pour nettoyer le cache npm
- `sudo npm install -g n` pour installer node helper (n) globalement en utilisant la commande suivante.-->

Installer `n` avec `homebrew` avec la commande suivante : 
```bash
brew install n
```

[Configurer les variables d'environnement](https://github.com/tj/n?tab=readme-ov-file#optional-environment-variables) afin de définir le dossier d'installation de node (il est possible d'ajouter ces deux lignes dans son `.zshrc`…): 

```bash
export N_PREFIX=$HOME/.n
export PATH=$N_PREFIX/bin:$PATH
```

Il est ensuite possible d'installer différentes versions de node :
- `n stable` pour installer la version stable
- `n <version>` pour installer une version spécifique, par exemple `n 16.15.0`
- `n lts` pour installer la version de support à long terme
- `n latest` pour installer la dernière version.

Pour vérifier la version de node : `node -v`.

Pour passer d'une version de Node à l'autre il suffit de taper `n` dans le terminal, de sélectionner la version désirée avec les `flèches` et d'appuyer sur `enter`.