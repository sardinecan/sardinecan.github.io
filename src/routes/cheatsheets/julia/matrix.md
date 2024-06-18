---
title: 'Les matrices'
date: '2024-03-23'
author: 'Josselin Morvan'
language: 'julia'
keywords: ''
---

# Les matrices
[Documentation Julia](https://docs.julialang.org/en/v1/manual/arrays/)

## Déclaration
```julia
# multidimentional array
m = [1 2 3 
     4 5 6]
#=     
  2×3 Matrix{Int64}:
    1  2  3
    4  5  6
=#

m = [1 2 3; 4 5 6]
#=
  2×3 Matrix{Int64}:
    [1 2 3; 4 5 6]
=#

size(M) # (2, 3)

transpose(m) # transposition 
#=
3×2 transpose(::Matrix{Int64}) with eltype Int64:
 1  4
 2  5
 3  6
=#

m' #ou adjoint(m)
#=
3×2 adjoint(::Matrix{Int64}) with eltype Int64:
 1  4
 2  5
 3  6
=#
```

## Accès et mutation
```julia
m[2, :] # Sélectionner la 2ème ligne
#=
3-element Vector{Int64}:
 4
 5
 6
=#
m[:, 1] # Sélectionner la 1ere colonne
#=
2-element Vector{Int64}:
 1
 4
=#
```

## Concaténation 
```julia
m = [1 2 3
     4 5 6]

m1 = [7  8  9
     10 11 12]

M = [m ; m1] # concaténation verticale 
#ou
vcat(m, m1)
#=
4×3 Matrix{Int64}:
  1   2   3
  4   5   6
  7   8   9
 10  11  12
=#

M = [m m1] # concaténation horizontale
#ou 
hcat(m, m1)
#=
2×6 Matrix{Int64}:
 1  2  3   7   8   9
 4  5  6  10  11  12
=#
```

## Opération sur les items
```julia
m = [1 2 3
     4 5 6]
m .+ 1
#=
2×3 Matrix{Int64}:
 2  3  4
 5  6  7
=#

m = [(1,2) (3,4)
     (5,6) (7,8)]
#=     
  2×2 Matrix{Tuple{Int64, Int64}}:
   (1, 2)  (3, 4)
   (5, 6)  (7, 8)
=#   

map((x) -> x[1]+x[2], m)
#=     
  2×2 Matrix{Int64}:
    3   7
   11  15
=#
```