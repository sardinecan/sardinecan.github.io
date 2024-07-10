---
title: 'System Setup'
date: '2022-05-17'
category: 'setup'
author: 'jmorvan'
keywords: 'config ; dev ; installation'
---

# System Setup

Prérequis :
    - [**Homebrew**](https://brew.sh/index_fr) (macOS et Linux).
    - [**Git**](https://git-scm.com/)
```bash
brew install git

# git est livré avec macOs
git --version

# pour connaître la version utilisée (macOs par défaut)
which git

# si besoin de switcher sur la version homebrew
sudo mv /usr/bin/git /usr/bin/git-apple
# ou 
brew link --overwrite git
```

## Récupération des fichiers de configuration
J'utilise [**chezmoi**](https://www.chezmoi.io/) pour la gestion de mes dotfiles (`.gitconfig`, `.gitignore`, `.zshrc`, etc.).
```bash
#macos
brew install chezmoi
#arch
sudo pacman -S chezmoi
```

Récupération automatique des fichiers sur une nouvelle machine :
```bash
# si le repo github est nommé 'dotefiles'
chezmoi init --apply $GITHUB_USERNAME
# autrement
chezmoi init --apply https://github.com/$GITHUB_USERNAME/$GITHUB_REPO.git
```

## Fonts
Voir [fonts](/notes/2024-02-13_fonts)


## Terminal/shell
Ajouter le thème [**Hyper snazzy**](https://github.com/sindresorhus/hyper-snazzy) et l'activer par défaut. Autres thèmes :
    - [**Pure**](https://github.com/sindresorhus/pure) 
    - [**Molokai color scheme for Vim**](https://github.com/tomasr/molokai)

Depuis macOS Catalina, `zsh` est le shell par défaut. Pour les versions antérieurs, ou sur d'autres systèmes, il peut être nécessaire d'installer `zsh` ou de l'activer. Pour l'installation et l'activation, voir [Installing-ZSH](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH).

Pour la configuration du shell j'utilise [`Oh-my-zsh`](https://github.com/ohmyzsh/ohmyzsh/wiki).
```bash
# installation
sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```

Pour une configuration manuelle du `.zshrc` (sans `chezmoi`), suivre les étapes suivantes : 
- plugins
```bash
plugins=(git web-search aliases)
```

- thème [typewritten](https://typewritten.dev/) ([github](https://github.com/reobin/typewritten))
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

## Navigateurs
- [**Firefox**](https://www.mozilla.org/fr/firefox/new/)
- [**Chrome**](https://www.google.com/chrome/)

## Langages de programmation
Pour l'installation de [**Julia**](https://julialang.org/), voir [https://julialang.org/downloads/](https://julialang.org/downloads/).

Installer [**Python**](https://www.python.org/) avec Homebrew ou avec un gestionnaire de paquets Linux (`brew install python`).
Pour plus d'informations sur Homebrew et Python : [https://docs.brew.sh/Homebrew-and-Python](https://docs.brew.sh/Homebrew-and-Python).


## Librairies
- [**NodeJS**](https://nodejs.org/en/)

J'utilise le package [`n`](https://github.com/tj/n) pour la gestion des versions de NodeJS. Pour l'installer : `brew install n`

Pour définir le dossier d'installation de NodeJS, il faut configurer [la variable d'environnement `N_PREFIX`](https://github.com/tj/n?tab=readme-ov-file#optional-environment-variables) (déjà configurée dans mes `dotefiles`).
```bash
# .zshrc
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

- [**Apache Ant**](https://ant.apache.org/)

Penser à ajouter `Ant` dans le `$Path`

- [**TEI Stylesheets**](https://github.com/TEIC/Stylesheets)

Pour une installation avec macOS, voir : [tei Stylesheets](/notes/2023-10-12_tei-stylesheets)

### Éditeurs de texte
- [**Vim**](https://www.vim.org/)
Vim est installé par défaut sur macOs mais pas sur toutes les distributions Linux. Pour l'installer s'il est manquant `brew install vim`. Un fichier [`.vimrc`](https://github.com/sardinecan/dotfiles/blob/main/dot_vimrc) est présent dans mes `dotefiles`.

- [**Neovim**](https://neovim.io/) : 
```bash
# macos
brew install neovim
#arch
pacman -S neovim
```

Les fichiers de configuration se trouvent dans mes `dotefiles` ([.config/nvim](https://github.com/sardinecan/dotfiles/tree/main/private_dot_config/nvim)).

La configuration de [JuliaLS](https://github.com/williamboman/mason-lspconfig.nvim/blob/main/lua/mason-lspconfig/server_configurations/julials/README.md) nécessite une étape manuelle pour la création d'un environnement julia `nvim-lspconfig` ([voir ce post pour plus de détails](https://discourse.julialang.org/t/neovim-languageserver-jl/37286/83), une copie est présente dans mon zotero pour la procédure complète. Voir aussi le repos [fredrikekre/.dotfiles](https://github.com/fredrikekre/.dotfiles/tree/master/.julia/environments/nvim-lspconfig)). 

- lancer la commande `julia --project=~/.julia/environments/nvim-lspconfig -e 'using Pkg; Pkg.add("LanguageServer")'` pour créer l'environnement ;
- changer de répertoire : `cd ~.julia/environment/nvim-lspconfig` ;
- lancer la commande `make`.

NB : le fichier `makefile` et le dossier `.julia/environments/nvim-lspconfig` sont aussi dans mes `dotefiles`.

NB2 : Pour une raison que j'ignore, sous macos Sonoma 14.5, le fichier `languageserver.dylib` créé avec la commande `make` cause une erreur à l'ouverture d'un fichier julia avec neovim. Le supprimer règle toutefois le problème (julia 1.10+). Le problème n'a cependant pas été constatée sous macos Catalina et Archlinux. 

Commandes utiles pour le deboggage : 
```vim
:TSUpdate ---mise à jour des parsers
:LspInfo --- statuts et serveurs de langages actifs et configurés
--- ouvrir un fichier julia puis lancer la commande 
:LspInfo --- puis <tab> permet d'accéder à plus d'informations sur la configuration requise
:LspUpdate --- mettre à jour les serveurs de langages
:LspLog --- logs des serveurs de langages
:checkhealth --- diagnostics de la configuration neovim
:Lazy --- pour la gestion des plugins
```

- [**Webstorm**](https://www.jetbrains.com/fr-fr/webstorm/)
Webstorm permet la synchronisation de paramètres depuis un compte Jetbrains. Pour activer la synchronisation : `Webstorm/Settings/Settings Sync/Enable Settings Sync`, puis dans la popup `Get Settings from Account`. Le changement de font s'effectue dans `Webstorm/settings/Editor/Font`.

Plugins :
- [Svelte](https://plugins.jetbrains.com/plugin/12375-svelte)
- [Xquery and XSLT](https://plugins.jetbrains.com/plugin/8612-xquery-and-xslt)

Intégration de BaseX : voir la [documentation BaseX](https://docs.basex.org/wiki/Integrating_IntelliJ_IDEA).

- [**Visual Studio Code** / **Code OSS**](https://code.visualstudio.com/)
VS Code permet également la synchronisation des paramètres depuis un compte Github. Voir la documentation pour l'activer : [https://code.visualstudio.com/docs/editor/settings-sync](https://code.visualstudio.com/docs/editor/settings-sync). Code OSS ne le permet vraisemblablement pas et nécessite une configuration manuelle.

<!--
La configuration de VS Code est synchronisée sur github, pour l'activer 
- cliquer sur la roue dentée en bas à gauche de la fenêtre VS Code puis sur activier la synchronisation des paramètres
- sur l'invite suivante cliquer sur `sign in & turn on | se connecter` puis choisir `sign in with Github | se connecter avec Github`
- choisir ensuite l'option `remplacer localement`
-->

Le changement de font s'effectue dans `Code/Réglages/ParamètresEditor: Font Family`. Il est également possible de définir une font pour un langage particulier, voir la [documentation](https://code.visualstudio.com/docs/getstarted/settings#_language-specific-editor-settings) et aussi [https://worldofzero.com/posts/enable-font-ligatures-vscode/](https://worldofzero.com/posts/enable-font-ligatures-vscode/).

Pour synchroniser les balises ouvrantes et fermantes (html/xml) : `⌘ + ⇧ + p`, puis choisir `settings.json` (user) et ajouter `"editor.linkedEditing": true`.

Plugins :
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

- [**OxygenXML**](https://www.oxygenxml.com/)

Mes paramètres personnalisés sont stockés dans le fichier `globalSettings.xml` et les scénarios de transformation dans `transformation.scenarios` (repo [oxygenxml-config](https://github.com/sardinecan/oxygenxml-config)).

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
- [Suite **Affinity**](https://affinity.serif.com/fr/)
- [**Final Cut pro**](https://www.apple.com/fr/final-cut-pro/)
