---
title: 'Les tableaux'
date: '2024-03-23'
author: 'Josselin Morvan'
language: 'julia'
keywords: ''
---

# Les tableaux
[Documentation Julia](https://docs.julialang.org/en/v1/manual/arrays/)

## Déclaration
```julia
arr = [] #ou arr = Vector()
typeof(arr)
#=
Any[]
Vector{Any} (alias for Array{Any, 1})
=#
```

## Typage
```julia
arr = Float64[] 
# ou
arr = Vector{Float64}()

typeof(arr)
#=
Float64[]
Vector{Float64} (alias for Array{Float64, 1})
=#

# Tableau de n éléments, non initialisé 	Vector{Type}(undef,n)
```

## Accès et mutation
```julia
a = Float64[1,2]
#=
2-element Vector{Float64}:
 1.0
 2.0
=#
a[1] # 1.0
a[1] = 3 # 3.0
a
#=
2-element Vector{Float64}:
 3.0
 2.0
=#
a[2] = "Hello"
#=
ERROR: MethodError: Cannot `convert` an object of type String to an object of type Float64
=#

a = Any[1,2]
#=
2-element Vector{Any}:
 1
 2
=#

a[2] = "Hello" # Hello
a
#=
2-element Vector{Any}:
  1
  "Hello"
=#

arr = [1, 2, 3, 4, 5]
arr[1:3] #[1, 2, 3]
```

# Copie
```julia
a = [[1,2,3], [4,5,6]]
b = copy(a)
c = deepcopy(a) #recursif
a[1][1] = 11
a
#=
2-element Vector{Vector{Int64}}:
 [11, 2, 3]
 [4, 5, 6]
=#

b
#=
2-element Vector{Vector{Int64}}:
 [11, 2, 3]
 [4, 5, 6]
=#
c
#=
2-element Vector{Vector{Int64}}:
 [1, 2, 3]
 [4, 5, 6]
=#
```

## Ajout/suppression d'un item
```julia
arr = Integer[1, 2, 3]

# suppression d'un élément en fin de tableau
pop!(arr) # 3

# suppression d'un élément en debut tableau
popfirst!(arr) # 1

arr
#=
1-element Vector{Integer}:
 2
=#

pushfirst!(arr, 1)
#=
2-element Vector{Integer}:
 1
 2
=#

push!(arr, 3)
#=
3-element Vector{Integer}:
 1
 2
 3
=#

deleteat!(arr, 2)
#=
2-element Vector{Integer}:
 1
 3
=#
```

## Tri
```julia
arr = Any['C', 'B', 'A']
sort!(arr)
#=
3-element Vector{Any}:
 'A': ASCII/Unicode U+0041 (category Lu: Letter, uppercase)
 'B': ASCII/Unicode U+0042 (category Lu: Letter, uppercase)
 'C': ASCII/Unicode U+0043 (category Lu: Letter, uppercase)
=#
```

## Concaténation 
```julia
arrA = [1, 2, 3]
arrB = [4, 5, 6]

append!(arrA, arrB) # concat arrB à la suite de arrA
#=
6-element Vector{Int64}:
 1
 2
 3
 4
 5
 6
=#
```

## Opération sur les items
```julia
arr = [1, 2, 3] # conversion en chaine de caractères
join(arr, ",") #"1,2,3"
```

```julia
arr = [1, 2, 3]
map(x -> x+1, arr)
#=
3-element Vector{Int64}:
 2
 3
 4
=#

arr .-1
#=
3-element Vector{Int64}:
 0
 1
 2
=#
```

```julia
# produit scalaire
a = [1, 2, 3]
b = [2, 3, 4]
sum(a .* b) # 20 (1*2 + 2*3 + 3*4)
```

```julia
arr = ["Hello", "World"]
val = "Adios"
in(val, arr) # ou val in arr
#=
false
=#
```