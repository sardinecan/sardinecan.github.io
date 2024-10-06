---
title: 'Vim - Cheatsheet'
date: '2024-06-27'
author: 'Josselin Morvan'
language: 'vim'
keywords: 'cheatsheet ; vim'
---

# 📄 Vim

## 📌 Table des matières
- [Introduction](#introduction)
- [Modes](#modes)
- [Navigation](#navigation)
- [Édition de Texte](#edition-de-texte)
  - [Insertion de Texte](#insertion-de-texte)
  - [Suppression de Texte](#suppression-de-texte)
  - [Recherche et Remplacement](#recherche-et-remplacement)
- [Manipulation des Fichiers](#manipulation-des-fichiers)
- [Manipulation de la Fenêtre](#manipulation-de-la-fenetre)
- [Manipulation du Presse-papier](#manipulation-du-presse-papier)
- [Macros et Répétition](#macros-et-repetition)
- [Personnalisation](#personnalisation)
- [Plugins](#plugins)

---

## 📚 Introduction <span id="introduction"/>

Vim est un éditeur de texte avancé basé sur `vi`, offrant une expérience riche et extensible pour l'édition de texte. Voici une vue d'ensemble des commandes de base.

## 🔄 Modes <span id="modes"/>

| Mode        | Description                       |
|-------------|-----------------------------------|
| `Normal`    | Mode par défaut (`Esc`)           |
| `Insertion` | Pour insérer du texte (`i`, `a`)  |
| `Visuel`    | Pour sélectionner du texte (`v`)  |
| `Commande`  | Pour exécuter des commandes (`:`) |

---

## 🚀 Navigation <span id="navigation"/>

| Commande       | Description                             |
|----------------|-----------------------------------------|
| `h`, `j`, `k`, `l` | Déplacement gauche, bas, haut, droite |
| `w`            | Début du mot suivant                    |
| `b`            | Début du mot précédent                  |
| `0`            | Début de la ligne                       |
| `$`            | Fin de la ligne                         |
| `gg`           | Début du fichier                        |
| `G`            | Fin du fichier                          |
| `:n`           | Aller à la ligne `n`                    |
| `Ctrl+f`       | Page suivante                           |
| `Ctrl+b`       | Page précédente                         |

---

## ✍️ Édition de texte <span id="edition-de-texte"/>

### Insertion de texte <span id="insertion-de-texte"/>

| Commande | Description                               |
|----------|-------------------------------------------|
| `i`      | Insérer avant le curseur                  |
| `I`      | Insérer au début de la ligne              |
| `a`      | Insérer après le curseur                  |
| `A`      | Insérer à la fin de la ligne              |
| `o`      | Insérer une nouvelle ligne en dessous     |
| `O`      | Insérer une nouvelle ligne au-dessus      |

### Suppression de texte <span id="suppression-de-texte"/>

| Commande | Description                                 |
|----------|---------------------------------------------|
| `x`      | Supprimer le caractère sous le curseur      |
| `dw`     | Supprimer jusqu'au début du mot suivant     |
| `dd`     | Supprimer la ligne actuelle                 |
| `D`      | Supprimer jusqu'à la fin de la ligne        |
| `d$`     | Supprimer du curseur à la fin de la ligne   |
| `d0`     | Supprimer du curseur au début de la ligne   |

### Recherche et remplacement <span id="recherche-et-remplacement"/>

| Commande                | Description                                                |
|-------------------------|------------------------------------------------------------|
| `/mot`                  | Rechercher `mot` vers le bas                                |
| `?mot`                  | Rechercher `mot` vers le haut                               |
| `n`                     | Prochaine occurrence                                       |
| `N`                     | Occurrence précédente                                      |
| `:%s/ancien/nouveau/g`  | Remplacer `ancien` par `nouveau` dans tout le fichier       |

---

## 📁 Manipulation des fichiers <span id="manipulation-des-fichiers"/>

| Commande      | Description                               |
|---------------|-------------------------------------------|
| `:e fichier`  | Ouvrir un fichier                          |
| `:w`          | Enregistrer le fichier                     |
| `:w nom`      | Enregistrer sous `nom`                     |
| `:q`          | Quitter Vim                                |
| `:wq`         | Enregistrer et quitter                     |
| `:q!`         | Quitter sans enregistrer                   |

---

## 🪟 Manipulation de la fenêtre <span id="manipulation-de-la-fenetre"/>

| Commande        | Description                                 |
|-----------------|---------------------------------------------|
| `:split`        | Diviser la fenêtre horizontalement          |
| `:vsplit`       | Diviser la fenêtre verticalement            |
| `Ctrl+w w`      | Changer de fenêtre                          |
| `Ctrl+w q`      | Fermer la fenêtre                           |
| `Ctrl+w =`      | Redimensionner toutes les fenêtres de manière égale |

---

## 📋 Manipulation du presse-papier <span id="manipulation-du-presse-papier"/>

| Commande | Description                                |
|----------|--------------------------------------------|
| `yy`     | Copier la ligne actuelle                   |
| `yw`     | Copier jusqu'au début du mot suivant        |
| `p`      | Coller après le curseur                    |
| `P`      | Coller avant le curseur                    |
| `dd`     | Couper la ligne actuelle                   |
| `d` `motion` | Couper selon un mouvement              |
| `"+y`    | Copier dans le presse-papier système       |
| `"+p`    | Coller depuis le presse-papier système     |

---

## 🔄 Macros et répétition <span id="macros-et-repetition"/>

| Commande     | Description                                          |
|--------------|------------------------------------------------------|
| `q` `x`      | Commencer l'enregistrement d'une macro dans le registre `x` |
| `q`          | Arrêter l'enregistrement                             |
| `@x`         | Rejouer la macro enregistrée dans le registre `x`    |
| `@@`         | Rejouer la dernière macro                            |
| `.`          | Répéter la dernière commande                         |

---

## ⚙️ Personnalisation <span id="personnalisation"/>

Ajoutez des configurations dans le fichier `~/.vimrc`.

### Exemples
```vim
" Afficher les numéros de ligne
set number

" Activer la coloration syntaxique
syntax on

" Utiliser des espaces au lieu de tabulations
set expandtab
set tabstop=4
set shiftwidth=4
```

## 🔌 Plugins <span id="plugins"/>

Utilisez un gestionnaire de plugins comme vim-plug pour installer des plugins.
Exemples avec vim-plug

```vim
" Installer vim-plug
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim

" Ajouter des plugins dans ~/.vimrc
call plug#begin('~/.vim/plugged')

Plug 'preservim/nerdtree' " Gestionnaire de fichiers
Plug 'tpope/vim-fugitive'  " Plugin Git

call plug#end()
```
