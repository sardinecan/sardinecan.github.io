---
title: "Synchroniser les fichiers Zotero sur le webdav de Sharedocs"
date: 2024-08-16
author: "jmorvan"
category: 'config'
keywords: "zotero ; bibliography ; bibliographie ; synchronisation ; webdav ; data ; storage"
---

# Synchroniser les fichiers Zotero sur le webdav de Sharedocs

Il est possible de configurer Zotero pour qu'il sauvegarde les fichiers joints sur le webdav de son choix. Si vous disposez d'un compte [Sharedocs Huma-num](https://sharedocs.huma-num.fr/), il est possible d'activer le service Webdav et ainsi sauvegarder sa bibliothèque directement. Inutile alors de souscrire un abonnement pour du stockage supplémentaire !

## Activer le service Webdav de Sharedocs
Lire la [documentation](https://documentation.huma-num.fr/sharedocs-stockage/#synchronisation-de-stockage-par-webdav) pour activer le service. Noter les identifiants.

Créer un dossier `zotero` à l'emplacement de votre choix.

## Configuration de Zotero
Aller dans `Zotero/préférences/synchronisation`, puis sélectionner `WebDAV` pour le champ `Synchroniser les fichiers joints de Ma bibliothèque`, puis indiquer les identifiants obtenus à l'étape précédente.

Et voilà !
