---
title: 'Gestion des environnements'
date: '2022-05-17'
category: 'julia'
author: 'jmorvan'
keywords: 'config ; dev ; installation'
--- 

# Gestion des environnements avec Julia
 
Billet original _Activating project environment in Julia REPL automatically_ [voir https://bkamins.github.io/julialang/2020/05/10/julia-project-environments.html](https://bkamins.github.io/julialang/2020/05/10/julia-project-environments.html)

Créer un fichier `~/.julia/config/startup.jl` avec le contenu suivant :

```julia
println("Salutations !")
using Pkg
if isfile("Project.toml") && isfile("Manifest.toml")
    Pkg.activate(".")
else
    Pkg.activate("/pbs/home/j/jmorvan/juliaEnv")
end
```
Lors du lancement de Julia, active l'environnement par défaut si les fichiers Project.toml et Manifest.toml ne sont pas présents.
