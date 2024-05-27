---
title: "Code-OSS : erreur lors de l'activation de l'extension Jupyter"
date: 2024-05-15
author: "jmorvan"
category: 'setup'
keywords: "arch ; linux ; setup ; jupyter ; notebook ; visual studio code ; vscode ; code ; code-oss ; julia"
---

# Code-OSS : Julia et erreur lors de l'activation de l'extension Jupyter

De multiples erreurs peuvent survenir suite à l'installation des extensions Jupyter dans Code-oss.

## *Could not start the Julia language server*

> Could not start the Julia language server. Make sure the configuration setting julia.executablePath points to the Julia binary.

si Julia se trouve dans votre `PATH`, l'extension Julia devrait automatiquement trouver Julia automatiquement, sans nécessité de configuration particulière. 

Si l'extension ne trouve pas Julia automatiquement, il faut faire pointer le paramètre `julia.executablePath` vers l'exécutable Julia que l'extension doit utiliser. Pour modifier ce paramètre de configuration, deux possibilités :
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

## extension activation failed Error
> extension activation failed Error: Extension 'ms-toolsai.jupyter' CANNOT use API proposal: notebookEditor. Its package.json#enabledApiProposals-property declares:  but NOT notebookEditor. The missing proposal MUST be added and you must start in extension development mode or use the following command line switch: --enable-proposed-api ms-toolsai.jupyter

Lancer l'application depuis la ligne de commande avec l'argument `--enable-proposed-api ms-toolsai.jupyter` résoud le problème. Il est possible également de personnaliser le lanceur de bureau :

Premièrement, copier le lanceur de bureau dans le dossier d'applications :
```
$ cp /usr/share/applications/code-oss.desktop ~/.local/share/applications/.`
```

puis éditer ce fichier avec un éditeur de texte :
```
`$ vim ~/.local/share/applications/code-oss.desktop`
```

Il suffit ensuite d'ajouter l'argument `--enable-proposed-api ms-toolsai.jupyter` aux deux lignes `Exec` :

```
[Desktop Entry]
Name=Code - OSS
Comment=Code Editing. Redefined.
GenericName=Text Editor
Exec=/usr/bin/code-oss --enable-proposed-api ms-toolsai.jupyter --unity-launch %F
Icon=com.visualstudio.code.oss
Type=Application
StartupNotify=false
StartupWMClass=Code
Categories=TextEditor;Development;IDE;
MimeType=text/plain;application/x-code-oss-workspace;
Actions=new-empty-window;
Keywords=vscode;

[Desktop Action new-empty-window]
Name=New Empty Window
Exec=/usr/bin/code-oss --enable-proposed-api ms-toolsai.jupyter --new-window %F
Icon=com.visualstudio.code.oss
```
Enfin, il suffit de redémarrer l'ordinateur !

## Lectures
- [*I am not able to use julia in vscode*](https://discourse.julialang.org/t/i-am-not-able-to-use-julia-in-vscode/76112)
- [*Could not start the Julia language server. Make sure the `julia.environmentPath` setting is valid*](https://discourse.julialang.org/t/could-not-start-the-julia-language-server-make-sure-the-julia-environmentpath-setting-is-valid/87794)
- [Visual Studio Code sur le wiki Arch Linux Wiki](https://wiki.archlinux.org/title/Visual_Studio_Code#Command_%22...%22_not_found)
- [*Jupyter extension for VSCode on Linux throws error when doing anything Jupyter related*](https://stackoverflow.com/questions/71106136/jupyter-extension-for-vscode-on-linux-throws-error-when-doing-anything-jupyter-r)

