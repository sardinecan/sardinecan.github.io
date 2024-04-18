---
title: 'Julia activer automatiquement des environnements'
date: '2022-05-17'
author: 'jmorvan'
keywords: 'config ; dev ; installation'
--- 
 
Billet original _Activating project environment in Julia REPL automatically_ [voir https://bkamins.github.io/julialang/2020/05/10/julia-project-environments.html](https://bkamins.github.io/julialang/2020/05/10/julia-project-environments.html)

Créer un fichier `~/.julia/config/startup.jl` avec le contenu suivant :

```julia
println("Salutations !")
en utilisant Pkg
if isfile("Project.toml") && isfile("Manifest.toml")
    Pkg.activate(".")
else
    Pkg.activate("/pbs/home/j/jmorvan/juliaEnv")
end
```