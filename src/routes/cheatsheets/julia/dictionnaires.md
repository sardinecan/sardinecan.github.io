---
title: 'Les dictionnaires'
date: '2024-03-23'
author: 'Josselin Morvan'
language: 'julia'
keywords: ''
---

# Les dictionnaires
[Documentation Julia](https://docs.julialang.org/en/v1/base/collections/#Dictionaries)

## Déclaration
```julia
d = Dict( [("A", 1), ("B", 2)] ) # d = Dict{k, v}( [("A", 1), ("B", 2)] )
d = Dict( "A" => 1, "B" => 2) # d = Dict{k, v}( [("A", 1), ("B", 2)] )
d = Dict{String, Integer}( "A" => 1, "B" => 2, "C" => "Hello World") 
#=
ERROR: MethodError: Cannot `convert` an object of type String to an object of type Integer
=#

d = Dict{Symbol, Any}(
  :hello => "world",
  :adios => "Amigos"
)
```

## Opérations sur les clés/valeurs
```julia
keys(d) # ensemble des clés d'un dictionnaire
#=
KeySet for a Dict{Symbol, Any} with 2 entries. Keys:
[:hello, :adios]
=#
values(d)
#=
ValueIterator for a Dict{Symbol, Any} with 2 entries. Values: …
Any["world", "Amigos"]
=#

haskey(d, "Salut") # évalue si une clé est présente
#false

arr = collect(values(d)) # créer un tableau à partir de la liste des clés / valeurs
# ou arr = [v for (k,v) in d]
#=
2-element Vector{Any}:
Any["world", "Amigos"]
=#

# récupérer la valeur d'une clé
get(d, :hello, "pas de clé hello") # "world"
get(d, "hello", "pas de clé hello") # "pas de clé hello"
```

## Amender un dictionnaire
```julia
d = Dict{Symbol, Any}(
  :hello => "world",
  :adios => "Amigos"
)

delete!(d, :adios) # supprimer une entrée du dictionnaire
#=
Dict{String, Int64} with 1 entry:
  :hello => "world"
=#

delete!(d, :salut) # d n'est pas modifié
#=
Dict{String, Int64} with 1 entry:
  :hello => "world"
=#
```

```julia
d = Dict{Symbol, Any}(
  :hello => "world",
  :adios => "Amigos"
)

pop!(d, :adios) # supprime une entrée et retourne la valeur correspondante 
# "Amigos"

pop!(d, :salut) # retourne une erreur si la clé n'est pas trouvée...
# ERROR: KeyError: key :salut not found

pop!(d, :hola, 0) # … ou une valeur par défaut si elle est indiquée
# 0
```

```julia
a = Dict("foo" => 0.0, "bar" => 42.0)
#=
Dict{String, Float64} with 2 entries:
  "bar" => 42.0
  "foo" => 0.0
=#

b = Dict("baz" => 17, "bar" => 4711)
#=
Dict{String, Int64} with 2 entries:
  "bar" => 4711
  "baz" => 17
=#

merge(a, b)
#=
Dict{String, Float64} with 3 entries:
  "bar" => 4711.0
  "baz" => 17.0
  "foo" => 0.0
=#

merge(b, a)
#=
Dict{String, Float64} with 3 entries:
  "bar" => 42.0
  "baz" => 17.0
  "foo" => 0.0
=#
```

voir aussi `merge!()` et `mergewith()`.
```julia
d = Dict(
  :title => "myTitle",
  :date => "2024-01-01"
)

c = Dict(
  :files => [
    "file1.text",
    "file2.text"
  ]
)

merge!(d, c)
# ERROR: MethodError: Cannot `convert` an object of type Vector{String} to an object of type String

# Il faut ajouter les types pour résoudre le problème ; merge() (sans!) ne semble pas impactée.
d = Dict{Symbol, Any}( 
  :title => "myTitle",
  :date => "2024-01-01"
)
```
