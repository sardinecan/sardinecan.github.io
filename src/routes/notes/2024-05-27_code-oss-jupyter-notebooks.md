---
title: "Code-OSS : configuration des Jupyter Notebooks"
date: 2024-05-27
author: "jmorvan"
category: 'setup'
keywords: "arch ; linux ; setup ; jupyter ; notebook ; visual studio code ; vscode ; code ; code-oss"
---

# Code-OSS : configuration des Jupyter Notebooks

Après l'installation de l'extension Jupyter une erreur peut se produire :

> extension activation failed Error: Extension 'ms-toolsai.jupyter' CANNOT use API proposal: notebookEditor. Its package.json#enabledApiProposals-property declares:  but NOT notebookEditor. The missing proposal MUST be added and you must start in extension development mode or use the following command line switch: --enable-proposed-api ms-toolsai.jupyter

Pour résoudre le problème, il faut lancer l'application depuis la ligne de commande avec l'argument `--enable-proposed-api ms-toolsai.jupyter`. Il est également possible de personnaliser le lanceur de bureau :

Premièrement, copier le lanceur de bureau dans le dossier d'applications :
```
$ cp /usr/share/applications/code-oss.desktop ~/.local/share/applications/.`
```

puis éditer ce fichier avec un éditeur de texte :
```
`$ vim ~/.local/share/applications/code-oss.desktop`
```

Il suffit ensuite d'ajouter l'argument `--enable-proposed-api ms-toolsai.jupyter` aux deux lignes `Exec` :

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
- [Visual Studio Code sur le wiki Arch Linux Wiki](https://wiki.archlinux.org/title/Visual_Studio_Code#Command_%22...%22_not_found)
- [*Jupyter extension for VSCode on Linux throws error when doing anything Jupyter related*](https://stackoverflow.com/questions/71106136/jupyter-extension-for-vscode-on-linux-throws-error-when-doing-anything-jupyter-r)

