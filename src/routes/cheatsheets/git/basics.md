---
title: 'Fondamentaux'
date: '2024-06-25'
author: 'Josselin Morvan'
language: 'git'
keywords: ''
---

# 📚 Les fondamentaux Git

## 📅 Index
- [🔧 Configuration](#-configuration)
- [📁 Initialisation et Clonage](#-initialisation-et-clonage)
- [🌲 Gestion des Branches](#-gestion-des-branches)
- [📑 Gestion des Fichiers](#-gestion-des-fichiers)
- [💾 Gestion des Commits](#-gestion-des-commits)
- [🌐 Gestion des Remote](#-gestion-des-remote)
- [🔄 Rebaser et Merge](#-rebaser-et-merge)
- [📋 Divers](#-divers)

## 🔧 Configuration

```bash
# Configurer le nom d'utilisateur
git config --global user.name "Votre Nom"

# Configurer l'email
git config --global user.email "votre-email@example.com"

# Configurer l'éditeur par défaut
git config --global core.editor "nom-editeur"

# Voir la configuration
git config --list
```

## 📁 Initialisation et Clonage

```bash
# Initialiser un nouveau dépôt Git
git init

# Cloner un dépôt existant
git clone <url-du-repo>
```

## 🌲 Gestion des Branches

```bash
# Lister toutes les branches
git branch

# Créer une nouvelle branche
git branch <nom-de-branche>

# Changer de branche
git checkout <nom-de-branche>

# Créer et changer de branche en une commande
git checkout -b <nom-de-branche>

# Fusionner une branche dans la branche courante
git merge <nom-de-branche>

# Supprimer une branche
git branch -d <nom-de-branche>
```

## 📑 Gestion des Fichiers

```bash
# Voir le statut des fichiers
git status

# Ajouter un fichier au suivi
git add <nom-de-fichier>

# Ajouter tous les fichiers au suivi
git add .

# Retirer un fichier du suivi
git rm <nom-de-fichier>

# Renommer un fichier
git mv <ancien-nom> <nouveau-nom>
```

## 💾 Gestion des Commits

```bash
# Commiter les changements
git commit -m "Message du commit"

# Modifier le dernier commit
git commit --amend

# Voir l'historique des commits
git log

# Voir un log simplifié
git log --oneline --graph --decorate --all
```

## 🌐 Gestion des Remote

```bash
# Ajouter un remote
git remote add origin <url-du-remote>

# Voir les remotes
git remote -v

# Pousser les commits vers le remote
git push origin <nom-de-branche>

# Récupérer les changements depuis le remote
git pull

# Supprimer un remote
git remote remove <nom-du-remote>
```

## 🔄 Rebaser et Merge

```bash
# Rebaser la branche courante sur une autre
git rebase <nom-de-branche>

# Fusionner une branche
git merge <nom-de-branche>

# Continuer un rebase en cours après avoir résolu les conflits
git rebase --continue

# Annuler un rebase
git rebase --abort
```

## 📋 Divers

```bash
# Afficher les différences entre fichiers
git diff

# Afficher les différences mises en stage
git diff --cached

# Afficher les différences entre deux commits
git diff <commit1> <commit2>

# Annuler les changements dans un fichier (avant commit)
git checkout -- <nom-de-fichier>

# Réinitialiser la branche courante à un commit précédent
git reset --hard <commit>

# Réinitialiser la branche courante en gardant les modifications locales
git reset --soft <commit>

# Renvoyer un fichier au stage
git reset HEAD <nom-de-fichier>

# Nettoyer le dépôt en supprimant les fichiers non suivis
git clean -f
```

## 🔒 Gestion des Tags

```bash
# Créer un tag
git tag <nom-du-tag>

# Supprimer un tag
git tag -d <nom-du-tag>

# Pousser un tag vers le remote
git push origin <nom-du-tag>

# Lister les tags
git tag
```

## 🚑 Gestion des Conflits

```bash
# Lister les conflits
git status

# Résoudre les conflits et ajouter les fichiers résolus
git add <nom-de-fichier-conflit>

# Continuer après avoir résolu les conflits
git commit
```

## ⏳ Historique et Annulation

```bash
# Voir les logs avec graph
git log --graph

# Voir les logs de manière compacte
git log --oneline

# Retourner à un commit spécifique
git checkout <commit-id>

# Créer une nouvelle branche à partir d'un commit spécifique
git checkout -b <nouvelle-branche> <commit-id>

# Annuler un commit (création d'un commit inverse)
git revert <commit-id>
```

## 🛠️ Dépannage

```bash
# Annuler le dernier commit mais garder les changements dans la staging area
git reset --soft HEAD^

# Annuler les derniers changements sans les garder
git reset --hard HEAD^

# Sauvegarder les changements locaux sans les committer
git stash

# Récupérer les changements sauvegardés
git stash pop
```