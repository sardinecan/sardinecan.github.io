---
title: 'System Setup'
date: '2022-05-17'
author: 'jmorvan'
keywords: 'config ; dev ; installation'
---

## Gestionnaires de paquets
Installer Homebrew [https://brew.sh/index_fr](https://brew.sh/index_fr) (macOS et Linux).

## Github
Configuration des clés SSH : [https://docs.github.com/en/authentication/connecting-to-github-with-ssh](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

## Git 
[https://git-scm.com/](https://git-scm.com/)
### Installation avec Homebrew
- `brew install git`
- `git --version` #git est livré avec macOS
- `which git` # Pour connaître quelle version est utilisé (la version de macOs par defaut)
- `sudo mv /usr/bin/git /usr/bin/git-apple` | ou | `brew link --overwrite git` # pour switcher sur la version de homebrew si nécessaire

### Configuration du `.gitignore` global : 
Cloner le repo [systemSetup](https://github.com/sardinecan/systemSetup/), puis entrer la commande suivante dans le terminal :
```shell
git config --global core.excludesfile $HOME/files/dh/systemSetup/git/.gitignore
```

## Fonts
Voir [fonts](/notes/2024-02-13_fonts)

## Terminal/shell
### Personnalisation du terminal
Ajouter le thème Hyper snazzy color scheme [https://github.com/sindresorhus/hyper-snazzy](https://github.com/sindresorhus/hyper-snazzy) et l'activer par défaut.

Autres thèmes :
    - Pure: [https://github.com/sindresorhus/pure](https://github.com/sindresorhus/pure) 
    - Molokai color scheme for Vim: [https://github.com/tomasr/molokai](https://github.com/tomasr/molokai)

### Changer le shell pour `zsh`
Depuis macOS Catalina, `zsh` est le shell par défaut sur macOS. Pour les versions antérieurs ou sur d'autres systèmes, il peut être nécessaire d'installer `zsh` ou de l'activer. Pour l'installation et l'activation, voir [Installing-ZSH](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH).

Une fois le z shell installé et activé, nous avons accès au fichier `~/.zshrc`.

### Installation de [`oh-my-zsh`](https://github.com/ohmyzsh/ohmyzsh/wiki) et personnalisation
Wiki: [Oh-my-zsh Wiki](https://github.com/ohmyzsh/wiki/tree/main)

Installation :
```shell
sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```

Activer les plugins: `web-search` et `aliases` dans `~/.zshrc` (`git` est activé par défaut) :
```bash
plugins=(git web-search aliases)
```

Installer le thème [typewritten](https://typewritten.dev/) | [Github](https://github.com/reobin/typewritten)
```shell
git clone https://github.com/reobin/typewritten.git $ZSH_CUSTOM/themes/typewritten
# NB $ZSH_CUSTOM est une variable par defaut de oh-my-zsh)
```

Dans `~/.zshrc`, modifier la ligne :
```bash
ZSH_THEME="typewritten/typewritten"
```
et ajouter les lignes suivante : 
```shell
TYPEWRITTEN_RELATIVE_PATH="adaptive"
TYPEWRITTEN_PROMPT_LAYOUT="pure"
TYPEWRITTEN_ARROW_SYMBOL="|"
TYPEWRITTEN_COLOR_MAPPINGS="primary:red"
```

Si ce n'est pas déjà fait, cloner le repo [systemSetup](https://github.com/sardinecan/systemSetup/) et insérer les lignes : 

- `source $HOME/files/dh/systemSetup/zsh/.zsh_bin`;
- `source $HOME/files/dh/systemSetup/zsh/.zsh_sc`

dans `~/.zshrc` afin d'ajouter les _aliases_ et _custom path_ personnels.
	    
<!--Bat [https://github.com/sharkdp/bat/](https://github.com/sharkdp/bat/): A cat cmd clone with syntax highlighting and Git integration. release : [https://github.com/sharkdp/bat/releases](https://github.com/sharkdp/bat/releases)-->

## Programmes
### Navigateurs
- Firefox [https://www.mozilla.org/fr/firefox/new/](https://www.mozilla.org/fr/firefox/new/)
- Chrome [https://www.google.com/chrome/](https://www.google.com/chrome/)

### Éditeurs de texte
#### Webstorm
Webstorm permet la synchronisation de paramètres (depuis un compte Jetbrains). Pour l'activer : `Webstorm/Settings/Settings Sync/Enable Settings Sync`, puis dans la popup `Get Settings from Account`.

Le changement de font s'effectue dans `Webstorm/settings/Editor/Font`.

##### Plugins
- Svelte [https://plugins.jetbrains.com/plugin/12375-svelte](https://plugins.jetbrains.com/plugin/12375-svelte)
- Xquery and XSLT [https://plugins.jetbrains.com/plugin/8612-xquery-and-xslt](https://plugins.jetbrains.com/plugin/8612-xquery-and-xslt)

##### Intégration BaseX
Voir la [documentation BaseX](https://docs.basex.org/wiki/Integrating_IntelliJ_IDEA).

#### Visual Studio Code
[https://code.visualstudio.com/](https://code.visualstudio.com/)

VS Code permet également la synchronisation des réglages depuis un compte Github. Voir la documentation pour l'activer : [https://code.visualstudio.com/docs/editor/settings-sync](https://code.visualstudio.com/docs/editor/settings-sync)
<!--
La configuration de VS Code est synchronisée sur github, pour l'activer 
- cliquer sur la roue dentée en bas à gauche de la fenêtre VS Code puis sur activier la synchronisation des paramètres
- sur l'invite suivante cliquer sur `sign in & turn on | se connecter` puis choisir `sign in with Github | se connecter avec Github`
- choisir ensuite l'option `remplacer localement`
-->

Le changement de font s'effectue dans `Code/Réglages/ParamètresEditor: Font Family`.

Il est possible de définir une font pour un langage particulier, voir la documentation [https://code.visualstudio.com/docs/getstarted/settings#_language-specific-editor-settings](https://code.visualstudio.com/docs/getstarted/settings#_language-specific-editor-settings). Voir aussi [https://worldofzero.com/posts/enable-font-ligatures-vscode/](https://worldofzero.com/posts/enable-font-ligatures-vscode/)

Pour synchroniser les balises ouvrantes et fermantes (html/xml) :
- `⌘ + ⇧ + p`, entrer `settings.json` (user) et ajouter `"editor.linkedEditing": true`.

##### Plugins
- [Julia](https://marketplace.visualstudio.com/items?itemName=julialang.language-julia) | [https://www.julia-vscode.org/](https://www.julia-vscode.org/)
- [Jupyter](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter)
- [Jupyter Cell Tags](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.vscode-jupyter-cell-tags)
- [Jupyter Keymap](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter-keymap)
- [Jupyter Notebook Renderers](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter-renderers)
- [Jupyter Slide Show](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.vscode-jupyter-slideshow)
- [French Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-fr)
- [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
- [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance)
- [Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh)
- [Remote - SSH: Editing Configuration Files](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh-edit)
- [Remote Explorer](https://marketplace.visualstudio.com/items?itemName=ms-vscode.remote-explorer)
- [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) | [https://svelte.dev/](https://svelte.dev/)
- [XMl Tools](https://marketplace.visualstudio.com/items?itemName=DotJoshJohnson.xml)

#### OxygenXML 
[Oxygen XML](oxygenXML/oxygenXML.md)

Mes paramètres personnalisés sont stockés dans le fichier `globalSettings.xml` et les scénarios de transformation sont sauvegardés dans `transformation.scenarios` (repo [systemSetup](https://github.com/sardinecan/systemSetup/)).

Pour importer les paramètres et les scénarios : `options/(importer les options globales | importer les scénarios de transformation)` 

Pour une configuration manuelle :
- Formatage : 
    - `Préférences/Éditeur/Formatage` : 
	    - cocher seulement : `détecter l'indentation à l'ouverture` ; `indenter avec Entrée` ; `activer Smart Enter`
	    - changer les valeurs pour : `largeur d'indentation` : `3` et `Longueur de ligne` : `10000`
    - `Préférences/Éditeur/Formatage/XML` :
	    - cocher : `Conserver les lignes vides` ; `Conserver les sauts de ligne dans les attributs` ; `Indenter les éléments en ligne`
	    - ajouter `//p/*` ; `//head//*` ; `//dateline//*` ; `//signed//*` ; `//choice` à `Espacement des éléments/Conserver les espaces`
- Saxon 
    - `Préférences/XML/XSLT/FO/XQuery/XSLT/Saxon/Saxon HE/PE/EE`
	    - désélectionner `Étendre les attributs par défaut ("-expand")`

#### Vim
Vim est installé par défaut sur macOs mais pas sur Ubuntu. Pour l'installation :
```shell
brew install vim
```

Pour la configuration de vim, créer un fichier `.vimrc` dans le dossier `home` : 
```shell
mkdir ~/.vimrc`
```
puis ajouter le contenu suivant pour la personnalisation :
```shell
"default vim
source $VIMRUNTIME/defaults.vim
    
"Enable line number
set number

"Enable syntax highlight
syntax on
filetype on
colorscheme default

"To scroll horizontally one character at a time to reveal more text as needed.
set sidescroll=1

"Enable autoindent
set autoindent
```
### Image/video editing
- Suite Affinity [https://affinity.serif.com/fr/](https://affinity.serif.com/fr/)
- Final Cut pro

### Programming languages
#### [Julia](https://julialang.org/)
Pour l'installation, voir [https://julialang.org/downloads/](https://julialang.org/downloads/).

#### [Python](https://www.python.org/)
Installation
```shell
brew install python
```
Pour plus d'informations sur Homebrew et Python : [https://docs.brew.sh/Homebrew-and-Python](https://docs.brew.sh/Homebrew-and-Python).

### Libraries
#### NodeJS [https://nodejs.org/en/](https://nodejs.org/en/) (LTS preferred)

#### Apache Ant 
[https://ant.apache.org/](https://ant.apache.org/)
¨Penser à ajouter `Ant` dans le `$Path`

#### TEI Stylesheets 
[https://github.com/TEIC/Stylesheets](https://github.com/TEIC/Stylesheets)

Pour une installation avec macOS, voir : [tei Stylesheets](/notes/2023-10-12_tei-stylesheets)
