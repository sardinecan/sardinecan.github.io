---
title: "Bash : nommage séquentiel des fichiers"
date: 2024-05-27
author: "jmorvan"
category: 'CLI'
keywords: "bash ; nommage ; linux ; osx ; macos"
---

# Bash : nommage séquentiel des fichiers

Une simple ligne qui garde de l'extension de fichier d'origine et ajoute des zeros en tête (*leading zeros*) :

```bash
num=0; for i in *; do mv "$i" "$(printf '%04d' $num).${i#*.}"; ((num++)); done
```


## Lectures
- [*Renaming files in a folder to sequential numbers*](https://stackoverflow.com/questions/3211595/renaming-files-in-a-folder-to-sequential-numbers)
- [*Bash script to rename files to a pattern of consecutive numbers*](https://ubuntuforums.org/showthread.php?t=1355021)

