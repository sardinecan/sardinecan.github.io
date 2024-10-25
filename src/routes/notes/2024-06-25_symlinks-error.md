---
title: "Too many levels of symbolic links"
date: 2024-06-25
author: "jmorvan"
category: 'setup'
keywords: "symbolic ; symlink ; setup ; error"
---

# *Too many levels of symbolic links Error*

Imaginons la structure suivante :
```bash
$ tree
.
└──monDossier
    ├──source
    └──output
```

Ajoutons ensuite un lien symbolique du dossier `source` dans le dossier `output`.

```bash
$ cd monDossier
$ ln -s source output
$ tree
.
├──source
└──output
    └──output/source -> source
```

Malheureusement le lien symbolique est cassé :

```bash
find -L -xtype l # pour identifier les symlinks cassés
find: ‘./output/source’: Too many levels of symbolic links
```

La raison de cette erreur est  simple : les liens symboliques réalisés avec des chemins relatifs sont toujours relatifs au répertoire du lien symbolique, et non au répertoire d'origine. Le lien symbolique `/monDossier/output/source` que nous venons de créer pointe donc vers `/monDossier/output/source` au lieu de `/monDossier/source`. 

Pour régler le problème, il suffit d'utiliser des chemins absolus !