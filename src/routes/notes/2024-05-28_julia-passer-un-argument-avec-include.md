---
title: "Julia : passer un argument avec include('file.jl')"
date: 2024-05-27
author: "jmorvan"
category: 'julia'
keywords: "julia ; argument ; include ; variable"
---

# Julia : passer un argument avec include('file.jl')

Une méthode intéressante consiste à utiliser `isdefined` pour vérifier la présence d'une source différente de paramètres avant d'utiliser `ARGS` dans le fichier que l'on souhaite inclue. Par exemple :

`main.jl`
```julia
newARGS = String["adios","amigos"]
include("file.jl")
```

`file.jl`
```julia
localARGS = isdefined(:newARGS) ? newARGS : ARGS
@show localARGS
```

Ce qui donnerait : 
```julia
> julia file.jl hello world
localARGS = String["hello","world"]

> julia main.jl 
localARGS = String["adios","amigos"]
```

> Reassigning ARGS to make file.jl think it received arguments works, but leads to a warning (because it overwrites Base.ARGS). A better methods perhaps is to use isdefined to check for a different source of parameters before using ARGS in file.jl.
> This also allows communicating deeper through several levels of inclusion.

## Lectures
- [*Julia:passing argument to the include("file.jl")*](https://stackoverflow.com/questions/44967240/juliapassing-argument-to-the-includefile-jl)
