---
title: 'Julia | Manipuler des collections'
date: '2024-03-23'
language: 'julia'
keywords: ''
---
## map()
```julia
m = [1 2 3
     4 5 6]
#=     
  2×3 Matrix{Int64}:
    1  2  3
    4  5  6
=#

map(x -> x+1, m)
#=
  2×3 Matrix{Int64}:
   2  3  4
   5  6  7
=#

map((x) -> x+1, m)
#=
  2×3 Matrix{Int64}:
   2  3  4
   5  6  7
=#
```

```julia
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

```julia
x, y = (1, 2) # (1, 2)
y # 2
x # 1

typeof((x, y)) # Tuple{Int64, Int64}
```