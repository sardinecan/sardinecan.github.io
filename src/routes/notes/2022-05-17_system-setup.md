---
title: 'System Setup'
date: '2022-05-17'
category: 'setup'
author: 'jmorvan'
keywords: 'config ; dev ; installation'
---

# System Setup

## Gestionnaires de paquets
Installer Homebrew [https://brew.sh/index_fr](https://brew.sh/index_fr) (macOS et Linux).

## Git 
[https://git-scm.com/](https://git-scm.com/)

### Installation avec Homebrew
- `brew install git`
- `git --version` #git est livré avec macOS
- `which git` # Pour connaître quelle version est utilisé (la version de macOs par defaut)
- `sudo mv /usr/bin/git /usr/bin/git-apple` | ou | `brew link --overwrite git` # pour switcher sur la version de homebrew si nécessaire

## Chezmoi

J'utilise [chezmoi](https://www.chezmoi.io/) pour la gestion de mes dotfiles (`.gitconfig`, `.gitignore`, `.zshrc`, etc.).

Installation :
```bash
#macos
brew install chezmoi
#arch
sudo pacman -S chezmoi
```

Récupération des fichiers sur une nouvelle machine :
```bash
# si le repo github est nommé 'dotefiles'
chezmoi init --apply $GITHUB_USERNAME
# autrement
chezmoi init --apply https://github.com/$GITHUB_USERNAME/$GITHUB_REPO.git
```

## Terminal/shell
### Fonts
Voir [fonts](/notes/2024-02-13_fonts)

### Personnalisation du terminal
Ajouter le thème Hyper snazzy color scheme [https://github.com/sindresorhus/hyper-snazzy](https://github.com/sindresorhus/hyper-snazzy) et l'activer par défaut.

Autres thèmes :
    - Pure: [https://github.com/sindresorhus/pure](https://github.com/sindresorhus/pure) 
    - Molokai color scheme for Vim: [https://github.com/tomasr/molokai](https://github.com/tomasr/molokai)

### Changer le shell pour `zsh`
Depuis macOS Catalina, `zsh` est le shell par défaut sur macOS. Pour les versions antérieurs ou sur d'autres systèmes, il peut être nécessaire d'installer `zsh` ou de l'activer. Pour l'installation et l'activation, voir [Installing-ZSH](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH).

### Oh My Zsh
[`Oh-my-zsh`](https://github.com/ohmyzsh/ohmyzsh/wiki) - [Oh-my-zsh Wiki](https://github.com/ohmyzsh/wiki/tree/main)

Installation :
```shell
sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```

Pour une configuration manuelle du `.zshrc` (sans `chezmoi`), suivre les étapes suivantes : 
- plugins
```bash
plugins=(git web-search aliases)
```

- thème ([typewritten](https://typewritten.dev/) | [Github](https://github.com/reobin/typewritten))
```shell
git clone https://github.com/reobin/typewritten.git $ZSH_CUSTOM/themes/typewritten
# NB $ZSH_CUSTOM est une variable par defaut de oh-my-zsh)
```

```bash
#.zshrc
ZSH_THEME="typewritten/typewritten"

TYPEWRITTEN_RELATIVE_PATH="adaptive"
TYPEWRITTEN_PROMPT_LAYOUT="pure"
TYPEWRITTEN_ARROW_SYMBOL="|"
TYPEWRITTEN_COLOR_MAPPINGS="primary:red"
```

<!--Bat [https://github.com/sharkdp/bat/](https://github.com/sharkdp/bat/): A cat cmd clone with syntax highlighting and Git integration. release : [https://github.com/sharkdp/bat/releases](https://github.com/sharkdp/bat/releases)-->

## Programmes
### Navigateurs
- Firefox [https://www.mozilla.org/fr/firefox/new/](https://www.mozilla.org/fr/firefox/new/)
- Chrome [https://www.google.com/chrome/](https://www.google.com/chrome/)

### Langages de programmation
#### [Julia](https://julialang.org/)
Pour l'installation, voir [https://julialang.org/downloads/](https://julialang.org/downloads/).

#### [Python](https://www.python.org/)
Installation
```shell
brew install python
```
Pour plus d'informations sur Homebrew et Python : [https://docs.brew.sh/Homebrew-and-Python](https://docs.brew.sh/Homebrew-and-Python).

### Librairies
#### NodeJS [https://nodejs.org/en/](https://nodejs.org/en/) (LTS preferred)
Installer `n` avec `homebrew` avec la commande suivante : 
```bash
brew install n
```
[Configurer les variables d'environnement](https://github.com/tj/n?tab=readme-ov-file#optional-environment-variables) afin de définir le dossier d'installation de Node (il est possible d'ajouter ces deux lignes dans son `.zshrc`…) : 

```bash
export N_PREFIX=$HOME/.n
export PATH=$N_PREFIX/bin:$PATH
```

Il est ensuite possible d'installer différentes versions de node :
- `n stable` pour installer la version stable
- `n <version>` pour installer une version spécifique, par exemple `n 16.15.0`
- `n lts` pour installer la version de support à long terme
- `n latest` pour installer la dernière version.

Pour vérifier la version de node : `node -v`.

Pour passer d'une version de Node à l'autre il suffit de taper `n` dans le terminal, de sélectionner la version désirée avec les `flèches` et d'appuyer sur `enter`.

#### Apache Ant 
[https://ant.apache.org/](https://ant.apache.org/)
¨Penser à ajouter `Ant` dans le `$Path`

#### TEI Stylesheets 
[https://github.com/TEIC/Stylesheets](https://github.com/TEIC/Stylesheets)

Pour une installation avec macOS, voir : [tei Stylesheets](/notes/2023-10-12_tei-stylesheets)

### Éditeurs de texte
#### Vim
Vim est installé par défaut sur macOs mais pas sur toutes les distributions Linux. Pour l'installer s'il est manquant :
```shell
brew install vim
```

[`.vimrc`](https://github.com/sardinecan/dotfiles/blob/main/dot_vimrc) est géré avec `chezmoi`.

#### Neovim
Pour installer [Neovim](https://neovim.io/) : 
```shell
# macos
brew install neovim
#arch
pacman -S neovim
```

[.config/nvim](https://github.com/sardinecan/dotfiles/tree/main/private_dot_config/nvim) est géré avec `chezmoi`.

La configuration de [JuliaLS](https://github.com/williamboman/mason-lspconfig.nvim/blob/main/lua/mason-lspconfig/server_configurations/julials/README.md) nécessite une étape manuelle pour la création d'un environnement julia `nvim-lspconfig` ([voir ce post pour plus de détail](https://discourse.julialang.org/t/neovim-languageserver-jl/37286/83), une copie est présente dans mon zotero pour la procédure complète. Voir aussi le repos [fredrikekre/.dotfiles](https://github.com/fredrikekre/.dotfiles/tree/master/.julia/environments/nvim-lspconfig)). 

- lancer la commande `julia --project=~/.julia/environments/nvim-lspconfig -e 'using Pkg; Pkg.add("LanguageServer")'` pour créer l'environnement ;
- changer de répertoire : `cd ~.julia/environment/nvim-lspconfig` ;
- lancer la commande `make`.

NB : le fichier `makefile` et le dossier `.julia/environments/nvim-lspconfig` sont gérés par `chezmoi`.
NB2 : Pour une raison que j'ignore, sous macos Sonoma 14.5, le fichier `languageserver.dylib` créé avec la commande `make` cause une erreur à l'ouverture d'un fichier julia avec neovim. Le supprimer règle toutefois le problème (julia 1.10+). Le problème n'a cependant pas été constatée sous macos Catalina et Archlinux. 

Commandes utiles pour le deboggage : 
```vim
:TSUpdate ---mise à jour des parsers
:LspInfo --- statuts et serveurs de langages actifs et configurés
--- ouvrir un fichier julia puis lancer la cmd :LspInfo, puis tab pour accéder à plus d'informations sur la configuration requise)
:LspUpdate --- mettre à jour les serveurs de langages
:LspLog --- logs des serveurs de langages
:checkhealth --- diagnostics de la configuration neovim
:Lazy --- pour la gestion des plugins
```

#### Webstorm
Webstorm permet la synchronisation de paramètres (depuis un compte Jetbrains). Pour l'activer : `Webstorm/Settings/Settings Sync/Enable Settings Sync`, puis dans la popup `Get Settings from Account`.

Le changement de font s'effectue dans `Webstorm/settings/Editor/Font`.

##### Plugins
- Svelte [https://plugins.jetbrains.com/plugin/12375-svelte](https://plugins.jetbrains.com/plugin/12375-svelte)
- Xquery and XSLT [https://plugins.jetbrains.com/plugin/8612-xquery-and-xslt](https://plugins.jetbrains.com/plugin/8612-xquery-and-xslt)

##### Intégration BaseX
Voir la [documentation BaseX](https://docs.basex.org/wiki/Integrating_IntelliJ_IDEA).

#### Visual Studio Code / Code OSS
[https://code.visualstudio.com/](https://code.visualstudio.com/)

VS Code permet également la synchronisation des réglages depuis un compte Github. Voir la documentation pour l'activer : [https://code.visualstudio.com/docs/editor/settings-sync](https://code.visualstudio.com/docs/editor/settings-sync). Code OSS ne le permet vraisemblablement pas et nécessite une configuration manuelle.
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
[Oxygen XML](https://www.oxygenxml.com/)

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

### Image/video editing
- Suite Affinity [https://affinity.serif.com/fr/](https://affinity.serif.com/fr/)
- Final Cut pro
