---
title: 'Opérateurs'
date: '2024-03-21'
author: 'Josselin Morvan'
language: 'julia'
keywords: ''
---

- [Opérateurs arithmétiques](#operateurs-arithmetiques)
- [Opérateurs de mise à jour](#operateurs-de-mise-a-jour)
- [Opérateurs booléens](#operateurs-booleens)
- [Opérateurs de comparaison](#operateurs-de-comparaison)
- [_Vectorized dot operator_](#dot-operator)
- [Opérateur ternaire](#operateur-ternaire)
- [Opérateur de chainage](#operateur-de-chainage)
- [## Opérateurs sur les collections](#operateurs-sur-les-collections)

## Opérateurs arithmétiques <a id="operateurs-arithmetiques" href=""/>
- `+` : addition
- `-` : soustraction
- `^` : puissance
- `*` : multiplication
- `/` : division
- `\` : division inverse (`1\2 == 2/1 # true`)
- `%` : modulo

```julia
2*2+2^3-2/2 # 11.0
```

```julia
# Reste d'une division euclidienne (modulo) ou rem(7,3)
7%3 # 1
```

## Opérateurs de mise à jour <a id="operateurs-de-mise-a-jour" href=""/>

- `+=` : addition
- `-=` : soustraction
- `^=` : puissance
- `*=` : multiplication
- `/=` : division
- `\=` : division inverse
- `%=` : modulo

```julia
x = 1

x += 2  # 3
# correspond aussi à x = x + 2

x ^= 2 # 9
```

## Opérateurs booléens <a id="operateurs-booleens" href=""/>

- `!` : négation
- `&&` : et
- `||` : ou

```julia
!false  # true

x > y && x == 1 # false

x > y || x == 1 # true
```

## Opérateurs de comparaison <a id="operateurs-de-comparaison" href=""/>
- `==` : égalité
- `===` : égalité stricte
- `!=` : inégalité
- `<` : plus petit
- `>` : plus grand
- `<=` : plus petit ou égal
- `>=`  : plus grand ou égal
```julia
x, y, z = 1, 2, 3

# égalité
x == 1 # true
x == 1.0 # true
isequal(x, 1) #true
```

```julia
# égalité stricte
x === 1 # true
x === 1.0 # false

```julia
# inégalité
x != y # true
```

```julia
# plus petit ou égal
x ≤ y <= z # true

# plus grand
x>z # false

# plus grand ou égal
x >= y ≥ z # false

# Not A Number
isnan(0 / 0) # true

isnan(1) # false

isnan("a") # erreur…
```
     
## _Vectorized dot operator_ <a id="dot-operator" href=""/>
- . : 
```julia
[1, 2, 3] .+ [4, 5, 6] # [1+4, 2+5, 3+6]
#=  
  3-element Vector{Int64}:
   5
   7
   9
=#
```

```julia
extentions = ["jpg", "JPG", "jpeg", "png", "PNG", "tif", "tiff"]
file = "picture.jpg"
endswith.(file, extentions) # retourne un vecteur de booléens
# voir d'autres exemple dans les opérateurs de collection (in)   
#=
  7-element BitVector:
   1
   0
   0
   0
   0
   0
   0
=#
```

Attention avec la vectorisation avec l'opérateur `in`. Si les deux arguments sont des vecteurs de même longueur (retourne un erreur si les dimension ne correspondent pas), `in.(items, collection)` retourne un vecteur indiquant si chaque valeur de items est dans la valeur à la position correspondante dans collection.

```julia
in.([1,2], [2,3])
#=     
  2-element BitVector:
   0
   0
=#
```

Pour obtenir un vecteur indiquant si chaque item est dans la collection, il faut envelopper la collection dans un `tuple` ou un `Ref()`

```julia
in.([1,2], ([2,3],)) # ne pas oublier la virgule
# ou in.([1,2], Ref([2,3]))
#=     
  2-element BitVector:
   0
   1
=#
```

## Opérateur ternaire <a id="operateur-ternaire" href=""/>
- `?` : opérateur ternaire
```julia
x, y = 1, 2

x == y ? "x = y " : "x ≠ y" # "x ≠ y"

x < y ? "x < y" : "x > y" # "x < y"
```

## Opérateur de chainage <a id="operateur-de-chainage" href=""/>
- `|>` : opérateur de chainage
```julia
function add2(i)
    return i+=2
end

function div2(i)
    return i/=2
end

# chaine les fonctions
1 |> add2 |> div2 # 1.5
```

## Opérateurs sur les collections <a id="operateurs-sur-les-collections" href=""/>
- `in` | `∈` : appartient
- `∉` : n'appartient pas
- `contains` | `occursin` : contient
- `issubset` : sous-ensemble

Pour une utilisation conjointe avec l'opérateur `.`, voir plus haut.

```julia
a = 1:5

3 in a # true
# autres notations 
in(3, 1:5)
3 ∈ 1:5
```

Attention avec la valeur missing…
```julia
1 in [1, missing] # true
missing in [1, missing] # missing
```

`contains()` et `occursin()` sont les mêmes fonctions, mais les arguments sont inversés. `contains()` est alignée avec `startswith()` et `endswith()`.
```julia
contains("Hello World!", "Hello") # true
occursin("Hello", "Hello World!") # true

issubset([1, 2], [1, 2, 3]) # true
issubset("Hello", "Hello World!") # true
```

