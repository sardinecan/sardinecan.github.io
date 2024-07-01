---
title: "Code-OSS : Julia"
date: 2024-05-27
author: "jmorvan"
category: 'setup'
keywords: "arch ; linux ; setup ; visual studio code ; vscode ; code ; code-oss ; julia"
---

# Code-OSS : configuration de Julia

si Julia se trouve dans le `PATH`, l'extension Julia devrait automatiquement trouver le *binary*, sans nécessité de configuration particulière. 

Toutefois, si l'extension ne trouve pas Julia automatiquement, un erreur peut survenir :

> Could not start the Julia language server. Make sure the configuration setting julia.executablePath points to the Julia binary.

Pour la résoudre, il faut faire pointer le paramètre `julia.executablePath` vers l'exécutable Julia que l'extension doit utiliser. Pour modifier ce paramètre de configuration, deux possibilités :

- exécuter la commande `Preferences : Ouvrir les paramètres utilisateur` (`ctrl`+`maj`+`p` ou `Affichage`->`Palette de commandes`)

```JSON
  "terminal.integrated.commandsToSkipShell": [
    "language-julia.interrupt"
  ],
  "julia.symbolCacheDownload": true,
  "julia.enableTelemetry": false,
  "julia.executablePath": "/home/josselin/.juliaup/bin/julia"
```

- via le menu `Fichier`->`Préférences`->`Paramètres`, puis rechercher le paramètre `Julia: Executable Path` pour y indiquer le chemin vers l'exécutable Julia `/home/josselin/.juliaup/bin/julia`.
 
## Lectures
- [*I am not able to use julia in vscode*](https://discourse.julialang.org/t/i-am-not-able-to-use-julia-in-vscode/76112)
- [*Could not start the Julia language server. Make sure the `julia.environmentPath` setting is valid*](https://discourse.julialang.org/t/could-not-start-the-julia-language-server-make-sure-the-julia-environmentpath-setting-is-valid/87794)
- [Visual Studio Code sur le wiki Arch Linux Wiki](https://wiki.archlinux.org/title/Visual_Studio_Code#Command_%22...%22_not_found)
