---
title: 'Basculer des URL de dépôts distants de HTTPS vers SSH'
date: '2022-05-17'
category: 'github'
author: 'jmorvan'
keywords: 'nodejs ; version'
---

# Basculer des URL de dépôts distants Github de HTTPS vers SSH

[Documentation Github](https://docs.github.com/fr/get-started/getting-started-with-git/managing-remote-repositories#switching-remote-urls-from-https-to-ssh)

Si la commande `git push` est  requiert les identifiants.
```shell
cd /mon/projet/sur/github
```
Pour lister les dépôts distants :
```shell
git remote -v
# origin  https://github.com/OWNER/REPOSITORY.git (fetch)
# origin  https://github.com/OWNER/REPOSITORY.git (push)
```

Pour changer l'url des dépôts de `https` vers `SSH`
```shell
git remote set-url origin git@github.com:OWNER/REPOSITORY.git
```

vérification
```shell
git remote -v
# Verify new remote URL
# origin  git@github.com:OWNER/REPOSITORY.git (fetch)
# origin  git@github.com:OWNER/REPOSITORY.git (push)
```
  