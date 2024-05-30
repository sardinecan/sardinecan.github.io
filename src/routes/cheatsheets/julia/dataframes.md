---
title: 'Les DataFrames'
date: '2024-03-23'
author: 'Josselin Morvan'
language: 'julia'
keywords: ''
---

# Les DataFrames
[Documentation DataFrames.jl](https://dataframes.juliadata.org/stable/)

## Déclaration
Il existe de nombreuses méthodes pour créer un *DataFrames*
```julia
using DataFrames
# avec des vecteurs
DataFrame(
    a=1:4,
    b=["Yoda", "Han Solo", "Luke", "Dark Vador"]
)
#=
4×2 DataFrame
 Row │ a      b          
     │ Int64  String     
─────┼───────────────────
   1 │     1  Yoda
   2 │     2  Han Solo
   3 │     3  Luke
   4 │     4  Dark Vador
=#

# avec des paires
DataFrame("a" => 1:2, "b" => ["Yoda", "Han Solo"])

# avec un vecteur de paires
DataFrame(["a" => 1:2, "b" => ["Yoda", "Han Solo"]])

# avec un dictionnaire
DataFrame(Dict(
  "a" => 1:2, 
  "b" => ["Yoda", "Han Solo"]
))

# un tuple de vecteurs identifiés...
DataFrame((a=[1, 2], b=["Yoda", "Han Solo"]))

# ... ou un vecteur de tuples
DataFrame([(a=1, b="Yoda"), (a=2, b="Han Solo")])

# construction colonne par colonne
df = DataFrame()
df.a = 1:2 # ajout de la colonne a
df[!, :b] = ["Yoda", "Han Solo"] #ajout de la colonne b (autre syntaxe)
df

# construction ligne à ligne
df = DataFrame(a=Int[], b=String[])
push!(df, (1, "Yoda"))
push!(df, (2, "Han Solo"))
# Il est possible d'utiliser 
# pushfirst!() pour ajouter une ligne au début
# insert!() pour ajouter une ligne à un index donné
# append!() ou prepend!() pour ajouter des tables entières 

# à partir de données tabulaires
#=data.csv
a,b
1,"Yoda"
2,"Han Solo"
=#
using CSV
df = DataFrame(CSV.File("data.csv"))
#=
2×2 DataFrame
 Row │ a      b        
     │ Int64  String   
─────┼─────────────────
   1 │     1  Yoda
   2 │     2  Han Solo
=#
```

## Les noms colonnes
```julia
names(df) # liste les colonnes et retourne un vecteur
#=
2-element Vector{String}:
 "a"
 "b"
=#

names(df, r"a") # liste les colonnes avec RegEx
names(df, Not(:b)) # tous les noms de colonnes sauf :b
names(df, Int) # liste les colonnes en fonction du type de données
#=
1-element Vector{String}:
 "a"
=#

propertynames(df) # retourne les noms de colonne sous forme de symboles
#=
2-element Vector{Symbol}:
 :a
 :b
=#
```

## Extraires les colonnes
```julia
df.b
df."b"
df[!, :b]
df[!, "b"]
df[:, :b]
df[:, "b"]
#=
2-element Vector{String}:
 "Yoda"
 "Han Solo"
=#
```
### Différence entre df[!, :b] et df[:, :b]
 > Columns can be directly (i.e. without copying) accessed via df.col or df[!, :col]. [...] Since df[!, :col] does not make a copy, changing the elements of the column vector returned by this syntax will affect the values stored in the original df. To get a copy of the column use df[:, :col]: changing the vector returned by this syntax does not change df.

```julia 
df = DataFrame(["a" => 1:2, "b" => ["Yoda", "Han Solo"]])
n = df[:, :b]
#=
2-element Vector{String}:
 "Yoda"
 "Han Solo"
=#
n[2] = "Dark Vador"
df
#=
2×2 DataFrame
 Row │ a      b        
     │ Int64  String   
─────┼─────────────────
   1 │     1  Yoda
   2 │     2  Han Solo
=#

n = df[!, :b]
n[2] = "Dark Vador"
df
#=
2×2 DataFrame
 Row │ a      b          
     │ Int64  String     
─────┼───────────────────
   1 │     1  Yoda
   2 │     2  Dark Vador
=#
```
