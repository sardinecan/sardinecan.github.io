---
title: 'Fondamentaux'
date: '2024-03-20'
author: 'Josselin Morvan'
language: 'julia'
keywords: ''
---

# Fondamentaux
[Documentation Julia](https://docs.julialang.org/en/v1/manual/getting-started/)

- [Affectation d'une variable](#Affectation-dune-variable)
- [Constantes](#Constantes)
- [Commentaires](#Commentaires)
- [Chainage](#Chainage)
- [Déclarer une fonction](#declarer-une-fonction)
- [Symboles LaTeX](#symboles-latex)

## Affectation d'une variable <a id="Affectation-dune-variable" href=""/>
```julia
v = 12

x, y, z = 1, "A", [1,2,3]
#=
  x = 1
  y = "A",
  z = 3-element Vector{Int64}:
    1
    2
    3
=#
```

## Constantes <a id="Constantes" href=""/>
```julia
const hello = "world"
```
Il existe cependant des constantes par defaut :
```julia
pi # π = 3.1415926535897...
```

## Commentaires <a id="Commentaires" href=""/>
```julia
v = 12 # un commentaire de fin de ligne
#=
    Un bloc de commentaire
    qui peut s'etendre 
    sur plusieurs
    lignes
=#
```

## Chainage <a id="Chainage" href=""/>
```julia
x = y = z = 1
#=
  x = 1
  y = 1
  z = 1
=#

0<x<2 # true
```

## Déclarer une fonction <a id="declarer-une-fonction" href=""/>
```julia
function myFunction(i)
    return i+2
end

myFunction(3) # 5
```

## Symboles LaTeX <a id="symboles-latex" href=""/>
Il est possible d'utiliser les symboles LaTeX directement dans Julia.
```julia
# \\beta [+ tabulation]
β = 10 
```