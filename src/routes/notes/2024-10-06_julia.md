---
title: 'Julia'
date: '2024-03-20'
author: 'Josselin Morvan'
language: 'julia'
keywords: ''
---

# 📝 Julia
## Syntaxe
### Variables et types
Une variable est un espace mémoire où une valeur est stockée. Julia est un langage dynamique : il n'est donc pas nécessaire de déclarer le type d'une variable lors de sa création, il est déduit automatiquement par Julia au moment de son affectation.

Les variables sont créées en leur affectant une valeur à l'aide de l'opérateur `=`.
```julia
julia> x = 1
1

julia> y = "Hello World!"
"Hello World!"

julia> x, y, z = 1, "A", [1, 2, 3]
(1, "A", [1, 2, 3])

julia> y
"A"

julia>
```

Si Julia est en mesure de déduire le type de la variable, il est aussi possible de la spécifier :
```julia
julia> a::Float64 = 3.0
3.0

julia> typeof(a)
Float64
```

Les types de données "simples" (*chaînes*, *nombres*, *booléens*) sont **immuables** : leur contenu ne peut être modifié après leur création. Si on affecte une nouvelle valeur, on crée en réalité une nouvelle instance de cette variable :
```julia
julia> x = 1
1

julia> x = x + 1 # une nouvelle variable est créée avec la valeur 2 
2
```

Les types de données plus complexes comme les *tableaux* ou les *dictionnaires* sont **mutables**, c'est-à-dire qu'il est possible de modifier leur contenu :
```julia
julia> arr = [1, 2, 3]
3-element Vector{Int64}:
 1
 2
 3

julia> arr[1] = 10
10

julia> arr
3-element Vector{Int64}:
 10
  2
  3
```

Les variables définies à l'extérieur de toute fonction ou bloc dispose d'une **portée globale**. Les variables définies dans un bloc (boucle ou fonction par exemple) ont une **portée locale**.

Il est possible de définir des **constantes** avec le mot-clé `const`. Un foie définie, une constante ne peut plus être modifiée.
```julia
julia> const π = 3.14
3.14
```

### Les types composites
Les **types composites** sont des collections champs nommés spécifiques, dont une instance peut être traitée comme une valeur unique. Ces objets sont utiles pour modéliser des structures de données complexes, que l'on souhaite hiérarchiser ou lier, plutôt que d'avoir plusieurs variables indépendantes par exemple.
```julia
julia> struct Person
           name 
           age::Int # comme pour les variables il est possible de préciser le type de chaque champ
       end

julia> sara = Person("Sara", 35)
Person("Sara", 35)

julia> sara.name
"Sara"

julia> fieldnames(Person) # pour connaitre les champs
(:name, :age)
```

Par défaut, une instance est immuable :
```julia
julia> sara.name = "Sarah"
ERROR: setfield!: immutable struct of type Person cannot be changed
Stacktrace:
 [1] setproperty!(x::Person, f::Symbol, v::String)
   @ Base ./Base.jl:41
 [2] top-level scope
   @ REPL[4]:1
```

Si l'on souhaite rendre un objet **mutable**, il faut le préciser avec le mot-clé `mutable`.

```julia
julia> mutable struct Car
           model::String
           brand::String
       end

julia> dino = Car("Dino", "Ferrari")
Car("Dino", "Ferrari")

julia> dino.brand = "FIAT"
"FIAT"

julia> dino
Car("Dino", "FIAT")
```

Une fois un type défini, il devient possible de lui associer des méthodes, ce qui permet de créer des fonctions spécifiques :
```julia
julia> struct Rectangle
           width::Int
           height::Int
       end

julia> function area(r::Rectangle)
           return r.width * r.height
       end
area (generic function with 1 method)

julia> rect = Rectangle(10, 5)
Rectangle(10, 5)

julia> area(rect)
50
```

Pour aller plus loin voir aussi : 
- [Parametric Types](https://docs.julialang.org/en/v1/manual/types/#Parametric-Types)

### Opérateurs booléens et opérations mathématiques 
Il existe 3 opérateurs booléens dans Julia
- `!` : NOT
- `||` : OR
- `&&` : AND

Les opérateurs arithmétiques permettent d'effectuer les opérations mathématiques de base sur les nombres :
- `+` : addition
- `-` : soustraction
- `^` : puissance
- `*` : multiplication
- `/` : division
- `\` : division inverse (`1\2 == 2/1 # true`)
- `%` : modulo

Avec Julia, l'ordre d'évaluation des opérateurs suit les conventions mathématiques (*PEMDAS*).

```julia
julia> 2*2+2^3-2/2
11.0

julia> 7%3
1
```

Quant aux *Shorthand operators*, ils combinent une opération et une affectation.
- `+=` : addition
- `-=` : soustraction
- `^=` : puissance
- `*=` : multiplication
- `/=` : division
- `\=` : division inverse
- `%=` : modulo

```julia
julia> x = 1
1

julia> x += 2  # correspond à x = x + 2
3
```

Julia permet enfin de comparer des valeurs. Ces opérations retournent toujours un booléen. 
```julia
julia>x, y, z = 1, 2, 3
(1, 2, 3)
```

**Egalité** : 
- `==` : égalité
- `===` : égalité stricte
- `!=` : inégalité
```julia
# égalité
julia> x == 1
true

julia> x == 1.0
true

julia> isequal(x, 1)
true

# égalité stricte
julia> x === 1
true

julia> x === 1.0
false

# inégalité
julia> x != y
true

# Not a number
julia> isnan(0/0)
true

julia> isnan('A')
ERROR: MethodError: no method matching isnan(::Char)
```

**Plus grand que**
- `>` : plus grand
- `>=`  : plus grand ou égal

**Plus petit que**
- `<` : plus petit
- `<=` : plus petit ou égal
```julia
julia> x <= y <= z
true

```

### Les fonctions
Une fonction associe la valeur d'un ou plusieurs arguments à une ou plusieurs valeurs de sortie. Une fonction Julia est déclarée ainsi :
```julia
julia> function my_function()
           return println("Hello World!")
       end
my_function (generic function with 1 method)

julia> my_function()
Hello World!
```

Il existe également une syntaxe compacte : 
```julia
julia> greetings(name) = println("Greetings ", name)
greetings (generic function with 1 method)

julia> greetings("Space Captain")
Greetings Space Captain
```

Bien évidemment, il est possible de préciser les types :
```julia
julia> function multiply_numbers(x::Int64, y::Int64)
           return x*y
       end
multiply_numbers (generic function with 1 method)

julia> multiply_numbers(2, 4)
8
```

Les types permettent de définir différentes méthodes, et donc d'induire des comportements différents au regard de la nature des arguments :
```julia
julia> function multiply_numbers(x::Float64, y::Float64)
           return x*y
       end
multiply_numbers (generic function with 2 methods)
```

Une fonction peut également retourner plusieurs valeurs. Dans ce cas, pour accéder aux différentes valeurs, plusieurs options s'offrent à nous, soit :
- associer une variable à chaque valeur ;
- associer une unique variable au résultat de la fonction et accéder aux valeurs avec `[]`, `first()` et `last()` par exemple.
```julia
julia> function my_math(x, y)
           add = x + y
           sub = x - y
           return add, sub
       end
my_math (generic function with 1 method)

julia> my_math(3, 2)
(5, 1)

julia> output1, output2 = my_math(3, 2)
(5, 1)

julia> output2
1

julia> output = my_math(3, 2)
(5, 1)

julia> output[1]
5

julia> last(output)
1
```

Les fonctions Julia acceptent également des mots-clés comme arguments, ils sont séparés des arguments par un point-virgule (`;`). Notons qu'arguments et mots-clés peuvent disposer de valeurs par défaut :
```julia
julia> function logarithm(x; base=2.718281828459045)
           return log(base, x)
       end
logarithm (generic function with 1 method)

julia> logarithm(10)
2.302585092994046

julia> logarithm(10, base=2)
3.3219280948873626

julia>
```

#### Les fonctions anonymes
Pour des besoins plus spécifiques, il peut être nécessaire de créer rapidement des petites instructions, par exemple pour filtrer des résultats. On utilise alors généralement des **fonctions anonymes**. Ces fonctions s'utilisent alors comme arguments d'autres fonctions, comme `map()` par exemple. Elles reposent sur l'opérateur `->`. À la gauche de cet opérateur, on définit les paramètres, et à droite on définit les opérations que l'on souhaite effectuer.
```julia
julia> arr = [1, 2, 3]
3-element Vector{Int64}:
 1
 2
 3

julia> map(x -> x + 1, arr) # on utilise la fonction map() pour associer la fonction au tableau
3-element Vector{Int64}:
 2
 3
 4
```

Plusieurs arguments peuvent être passés,, ils faut alors les placer entre parenthèses : `(x, y, z) -> x + y + z`.

#### Les fonctions avec un opérateur bang `!`
L'opérateur bang `!` est une convention Julia pour indiquer qu'une fonction modifie un ou plusieurs de ses arguments (*side effect*).

#### Chaînage
L'opérateur `|>` permet de chaîner des opérations :
```julia
julia> function add_two(i)
           return i + 2
       end
add_two (generic function with 1 method)

julia> function div_by_two(i)
           return i / 2
       end
div_by_two (generic function with 1 method)

julia> 1 |> add_two |> div_by_two
1.5
```

### Les conditions
Julia utilise les mots-clés `if`, `elseif` et `else` pour afin d'évaluer des expressions et exécuter une portion de code particulière.
```julia
julia> a, b = 1, 2
(1, 2)

julia> if a > b
           "a est plus grand que b"
       elseif a == b
           "a est égal à b"
       else
           "a est plus petit que b"
       end
"a est plus petit que b"
```

Il est aussi possible d'utiliser une syntaxe simplifiée pour les évaluations simples avec l'opérateur ternaire `?`
```julia
julia> x, y = 1, 2
(1, 2)

julia> x == y ? "x = y " : "x ≠ y"
"x ≠ y"

julia> x < y ? "x < y" : "x > y"
"x < y"
```

### Les boucles
#### For
Les boucles `for` permettent d'itérer des opérations pour chaque élément d'une séquence.
```julia
julia> for i in 1:3
           println(i)
       end
1
2
3
```

#### While
La boucle `while` est un peu à mi-chemin entre les conditions `if` et la boucle `for`. Tant qu'une condition n'est pas remplie, la boucle `while` continue ses itérations.
```julia
julia> x = 0
0

julia> while x < 6
           println(x) # on imprime x
           global x += 2 # on rajoute + 2 à la variable globale x
       end
0
2
4
```

## Les types simples
### Les chaînes de caractères
Les caractères sont placés entre guillemets simples et il est possible de coder un caractère sous la forme d'un entier
```julia
julia> c = 'a'
'a': ASCII/Unicode U+0061 (category Ll: Letter, lowercase)

julia> c = Int(c) 
97

julia> Char(97) 
'a': ASCII/Unicode U+0061 (category Ll: Letter, lowercase)
```

Il est donc possible d'effectuer des comparaisons ou des opérations arithmétiques.
```julia
julia> 'A' < 'a' 
true

julia> 'A' + 1 
'B': ASCII/Unicode U+0042 (category Lu: Letter, uppercase)
```

Les chaînes de caractères sont placées entre guillemets doubles, ou triple s'il y a des guillemets doubles dedans.
```julia
julia> str = "Hello World!"
"Hello World!"


julia> str = """Victore Hugo a prononcé la phrase "Ce gouvernement, je le caractérise d'un mot : la police partout, la justice nulle part" le 17 juillet 1851."""
"Victore Hugo a prononcé la phrase \"Ce gouvernement, je le caractérise d'un mot : la police partout, la justice nulle part\" le 17 juillet 1851."
=#

julia> typeof(str)
String
```

#### Opérations sur les `Strings`
Il est possible d'itérer sur une chaine de caractères.
```julia
julia> for c in "Hello"
           println(c)
       end
H
e
l
l
o
```

De la même manière, il est possible de mesurer la longueur d'une chaîne avec les fonctions `length()` et `lastindex()`.  
```julia
julia> str = "Bodø est une ville norvégienne située dans le comté de Nordland"
"Bodø est une ville norvégienne située dans le comté de Nordland"

julia> length(str)
63
```

Attention cependant à l'encodage des caractères, `length()` et `lastindex()` ne retournent pas toujours le même résultat.
```julia
julia> lastindex(str)
67
```

La concaténation s'effectue avec l'opérateur `*` ou la fonction `join()`, et l'interpolation avec `$`
```julia
julia> "Hello"*" "*"World"*"!"
"Hello World!"

julia> jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]
7-element Vector{String}:
 "lundi"
 "mardi"
 "mercredi"
 "jeudi"
 "vendredi"
 "samedi"
 "dimanche"

julia> join(jours, ", ", " et ")
"lundi, mardi, mercredi, jeudi, vendredi, samedi et dimanche"


julia> surname, forename = "Hugo", "Victor"
("Hugo", "Victor")

julia> fullname = "$forename $surname"
"Victor Hugo"
```

Les **occurrences** de caractères ou de chaîne de caractères peuvent être recherchées.
```julia
julia> findfirst('l', "Hello World")
3

julia> findlast('l', "Hello World")
10

julia> findprev('l', "Hello World", 5) 
4

julia> findnext('l', "Hello World", 5)
10

julia> findall('l', "Hello World")
3-element Vector{Int64}:
  3
  4
 10

julia> occursin("world", "Hello world!") 
true

julia> occursin("Goodbye", "Hello world!")
false
```

Julia prend aussi en charge les **expressions régulières** (*RegEx*) 
```julia
julia> str = "Hello World!"
"Hello World!"

julia> r = r"l"
r"l"

julia> typeof(r)
Regex

julia> occursin(r, str)
true

julia> match(r, str)
RegexMatch("l")

julia> m = match(r"[0-9]", str) # si aucun match retour "nothing"

julia>  if m === nothing
            return "no match"
        else
            return "match"
        end
"no match"

julia> m = match(r"(ll).*(l)", str)
RegexMatch("llo Worl", 1="ll", 2="l")

julia> m.match 
"llo Worl"

julia> m.captures
2-element Vector{Union{Nothing, SubString{String}}}:
 "ll"
 "l"

julia> m = match(r"(?\d+):(?\d+)","12:45")
RegexMatch("12:45", hour="12", minute="45")

julia> m[:minute]
"45"

julia> m[2]
"45"

julia> m = eachmatch(r, str)
Base.RegexMatchIterator(r"l", "Hello World!", false)

julia> collect(m)
3-element Vector{RegexMatch}:
 RegexMatch("l")
 RegexMatch("l")
 RegexMatch("l")

julia> [m.match for m = eachmatch(r, str)]
3-element Vector{SubString{String}}:
 "l"
 "l"
 "l"
```

Enfin, toutes les opérations classiques sur les *substrings* sont possibles.
- pour les extraire 
```julia
julia> str = "Hello World!"
"Hello World!"

julia> str[2]
'e': ASCII/Unicode U+0065 (category Ll: Letter, lowercase)

julia> str[1:5]
"Hello"

julia> str[begin:end-6]
"Hello "

julia> str[1]
'H': ASCII/Unicode U+0048 (category Lu: Letter, uppercase)

julia> str[1:1]
"H"

julia> SubString(str, 1, 5)
"Hello"
```

- pour savoir si une chaîne contient (`contains()`), commence (`startswith()`) ou se termine (`endswith()`) par telle expression.
```julia
julia> str = "Hello World"
"Hello World"

julia> contains(str, "Hello")
true
```

- pour remplacer un segment
```julia
julia> replace(str, "Hello" => "Goodbye")
"Goodbye World!"
```

- pour les tokeniser (`split()`)
```julia
julia> split(str, " ")
2-element Vector{SubString{String}}:
 "Goodbye"
 "World"
```

- pour les transformer `lowercase()`, `uppercase()`, `titlecase()`, `lowercasefirst()`, etc.

- ou encore pour les convertir
```julia
julia> n = 123
123

julia> string(n) # de nombre vers string
"123"

julia> parse(Int64, "123") # ou de string vers nombre
123
```

### Range
Le type `UnitRange` correspond à un intervalle.
```julia
julia> r = 1:10
1:10

julia> typeof(r)
UnitRange{Int64}
```

Pour récupérer les valeurs de cet intervalle on peut utiliser une boucle, ou la fonction `collect()`
```julia
julia> collect(r)
10-element Vector{Int64}:
  1
  2
  3
  4
  5
  6
  7
  8
  9
 10
```

Il est aussi possible de modifier le pas d'un intervalle avec la syntaxe `start:step:stop`.
```julia
ulia> r = 1:0.5:3
1.0:0.5:3.0

julia> collect(r)
5-element Vector{Float64}:
 1.0
 1.5
 2.0
 2.5
 3.0
```

### Symbols
@todo


## Data structures
### Paires et dictionnaires
[Documentation Julia](https://docs.julialang.org/en/v1/base/collections/#Dictionaries)

Une paire est constituée de deux objets : une clé sa une valeur.
```julia
julia> p = "key" => "value" # ou symbole pour la clé  :key => "value"
"key" => "value"

julia> p[1]
"key"

julia> p.first
"key"
```

Un dictionnaire est constitué d'une ou plusieurs paires, ils sont très commodes pour retrouver la valeur attachée à une clé.

Ils peuvent être déclaré soit à partir d'un vecteur `tuple`s  soit directement à partir de paires
```julia
julia> Dict( [("A", 1), ("B", 2)] )
Dict{String, Int64} with 2 entries:
  "B" => 2
  "A" => 1

julia> Dict( "A" => 1, "B" => 2)
Dict{String, Int64} with 2 entries:
  "B" => 2
  "A" => 1

# il est possible de typer les clés ou les valeurs
julia> d = Dict{String, Integer}( "A" => 1, "B" => 2, "C" => "Hello World")
ERROR: MethodError: Cannot `convert` an object of type String to an object of type Integer
```

#### Opérations sur les clés/valeurs
- récupérer les clés ou les valeurs avec `keys()` et `values()`, ou tester la présence d'une clé avec `haskey()`
```julia
julia> d = Dict{Symbol, Any}(
         :hello => "world",
         :adios => "Amigos"
       )
Dict{Symbol, Any} with 2 entries:
  :hello => "world"
  :adios => "Amigos"

julia> keys(d)
KeySet for a Dict{Symbol, Any} with 2 entries. Keys:
  :hello
  :adios

julia> values(d)
ValueIterator for a Dict{Symbol, Any} with 2 entries. Values:
  "world"
  "Amigos"

julia> haskey(d, "salut")
false
```

- créer un tableau à partir de la liste des clés / valeurs avec `collect()`
```julia
julia> collect(values(d))
2-element Vector{Any}:
 "world"
 "Amigos"
```

- récupérer la valeur d'une clé avec `get` ou en appelant la `key` dans l'opérateur `[]`.
```julia
julia> get(d, :hello, "pas de clé :hello")
"world"

julia> get(d, "hello", "pas de clé 'hello'") # cherche une clé de type String
"pas de clé 'hello'"

julia> d[:hello]
"world"
```

- amender un dictionnaire avec `delete!()` ou `pop!()`
```julia
julia> delete!(d, :adios)
Dict{Symbol, Any} with 1 entry:
  :hello => "world"
# si la clé n'existe pas, le dictionnaire n'est pas modifié.

julia> pop!(d, :hello)
"world"

# pop!() retourne une erreur si la clé n'est pas trouvée...
julia> pop!(d, :hello) 
ERROR: KeyError: key :hello not found

# … ou une valeur par défaut si elle est précisée
julia> pop!(d, :hola, 0)
0
```

- fusionner des dictionnaires avec `merge()` (voir aussi `merge!()` et `mergewith()`.
)
```julia
julia> a = Dict("foo" => 0.0, "bar" => 42.0)
Dict{String, Float64} with 2 entries:
  "bar" => 42.0
  "foo" => 0.0

julia> b = Dict("baz" => 17, "bar" => 4711)
Dict{String, Int64} with 2 entries:
  "bar" => 4711
  "baz" => 17

julia> merge(a, b)
Dict{String, Float64} with 3 entries:
  "bar" => 4711.0 # la valeur du second remplace celle du premier
  "baz" => 17.0
  "foo" => 0.0
```

Avec `merge!()`,il faut parfois ajouter les types pour résoudre les problèmes de fusion (`merge()` (sans!) ne semble pas impactée).

```julia
julia> d = Dict(
  :title => "myTitle",
  :date => "2024-01-01"
)

julia> c = Dict(
  :files => [
    "file1.text",
    "file2.text"
  ]
)

julia> merge!(d, c)
ERROR: MethodError: Cannot `convert` an object of type Vector{String} to an object of type String

julia> d = Dict{Symbol, Any}( 
  :title => "myTitle",
  :date => "2024-01-01"
)
```

### Les tableaux
[Documentation Julia](https://docs.julialang.org/en/v1/manual/arrays/)

Un tableau, ou **array**, est une séquence d'objets ou de valeurs. Généralement un *array* contient un type de données, mais ce n'est pas une obligation.
```julia
julia> a = [1, 2, 3]
3-element Vector{Int64}:
 1
 2
 3

julia> b = [1, 'a', ['α', 'β']]
3-element Vector{Any}:
 1
  'a': ASCII/Unicode U+0061 (category Ll: Letter, lowercase)
  ['α', 'β']

julia> [1 2 # une matrice
        3 4]
2×2 Matrix{Int64}:
 1  2
 3  4
```

Il existe deux types d'*array* :
- les vecteurs, `Vector{T}`, (une dimension) ;
- les matrices, `Matrix{T}` (deux dimensions).

Il existe plusieurs méthodes pour créer des tableaux. La première méthode est d'utiliser les constructeurs par défaut `Vector{T}(undef, n)` (construit un `Vector{T}` non initialisé de longueur `n`.) ou `Matrix{T}(undef, m, n)` (matrice non initialisée de taille `m` x `n`)  
```julia
julia> a = Vector{Float64}(undef, 3)
3-element Vector{Float64}:
 2.03e-322
 6.5e-322
 2.2062283473e-314

julia> a = Matrix{Float64}(undef, 3, 2)
3×2 Matrix{Float64}:
 2.20472e-314  2.20472e-314
 2.20472e-314  2.20472e-314
 2.20472e-314  2.20472e-314
```

Julia dispose également d'alias syntaxiques pour les éléments les plus courants dans la construction de tableaux :
```julia
julia> v = zeros(5) # initialise avec des O on peut aussi passer un type zeros(Float64, 5)
5-element Vector{Float64}:
 0.0
 0.0
 0.0
 0.0
 0.0


julia> m = ones(5, 3) # initialise avec des 1
5×3 Matrix{Float64}:
 1.0  1.0  1.0
 1.0  1.0  1.0
 1.0  1.0  1.0
 1.0  1.0  1.0
 1.0  1.0  1.0
```

Il est aussi possible d'instancier un *array* vide puis de la remplir avec `fill!()`.
```julia
julia> m = Matrix{Float64}(undef, 2, 2)
2×2 Matrix{Float64}:
 1.6e-322    2.20881e-314
 2.351e-314  1.0e-323

julia> fill!(m, π)
2×2 Matrix{Float64}:
 3.14159  3.14159
 3.14159  3.14159
```

Ou simplement en utilisant des crochets `[]`
```julia
julia> [1, 2, 3]
3-element Vector{Int64}:
 1
 2
 3

julia> [x*2 for x in 1:4]
4-element Vector{Int64}:
 2
 4
 6
 8

julia> [zeros(3) ones(3)]
3×2 Matrix{Float64}:
 0.0  1.0
 0.0  1.0
 0.0  1.0
```

La concaténation peut aussi être utilisée pour créer un nouvel array (`cat()`).
```julia
julia> cat(ones(3), ones(3), dims=2) # voir aussi hcat() (cat(…; dims=2)) et vcat() (cat(…; dims=1))
3×2 Matrix{Float64}:
 1.0  1.0
 1.0  1.0
 1.0  1.0

julia> arrA = [1, 2, 3]
julia> arrB = [4, 5, 6]

julia> append!(arrA, arrB) # concat arrB à la suite de arrA
6-element Vector{Int64}:
 1
 2
 3
 4
 5
 6
```

Une fois la tableaux établit, il est possible de le parcourir. Mais préalablement, il est souvent nécessaire de connaître les caractéristiques du tableau : taille (`size()`), longueur (`length()`), dimensions (`ndims()`), type des éléments (`eltype()`)
```julia
julia> v = [1, 2, 3]
3-element Vector{Int64}:
 1
 2
 3

julia> m = [1 2 3
            4 5 6]
2×3 Matrix{Int64}:
 1  2  3
 4  5  6

julia> size(m)
(2, 3)

julia> ndims(v)
1
```

Les valeurs dans un tableau sont indexées par des des entiers, il est donc très facile de récupérer une valeur ou un segment.
```julia
julia> v[2]
2

julia> v[2:end]
2-element Vector{Int64}:
 2
 3

julia> m
2×3 Matrix{Int64}:
 1  2  3
 4  5  6

julia> m[2, 2]
5

julia> m[2, :]
3-element Vector{Int64}:
 4
 5
 6

julia> m[:, 1]
2-element Vector{Int64}:
 1
 4
```

Les tableaux sont mutables, il est donc possible de réassigner une valeur ou un segment très simplement en utilisant le signe `=`, mais aussi d'ajouter des valeurs (`push!()`, `pushfirst!()`), d'en supprimer (`pop!()`, `popfirst!()` et `deleteat!()`), de le trier (`sort!()`).
```julia
julia> m
2×3 Matrix{Int64}:
 1  2  3
 4  5  6

julia> m[2, 2] = 50
50

julia> m
2×3 Matrix{Int64}:
 1   2  3
 4  50  6

julia> arr = Integer[1, 2, 3]
3-element Vector{Integer}:
 1
 2
 3

julia> pop!(arr) # suppression d'un élément en fin de tableau
3

julia> popfirst!(arr) # suppression d'un élément en debut tableau
1

julia> arr
1-element Vector{Integer}:
 2

julia> pushfirst!(arr, 1)
2-element Vector{Integer}:
 1
 2


julia> push!(arr, 3)
3-element Vector{Integer}:
 1
 2
 3

julia> deleteat!(arr, 2)
2-element Vector{Integer}:
 1
 3

julia> sort!(['c', 'b', 'a'])
3-element Vector{Char}:
 'a': ASCII/Unicode U+0061 (category Ll: Letter, lowercase)
 'b': ASCII/Unicode U+0062 (category Ll: Letter, lowercase)
 'c': ASCII/Unicode U+0063 (category Ll: Letter, lowercase)
```

Il est également possible de modifier la forme d'un tableau, comme par exemple passer d'un vecteur à un matrice, à l'aide de la fonction `reshape()`

```julia
julia> v = [1, 2, 3, 4]
4-element Vector{Int64}:
 1
 2
 3
 4

julia> v2m = reshape(v, (2, 2)) # création d'une matrice 2x2
2×2 Matrix{Int64}:
 1  3
 2  4

julia> m = reshape(v2m, (4,)) # création d'un vecteur à partir d'une matrice.
4-element Vector{Int64}:
 1
 2
 3
 4
```

Des fonctions peuvent être appliquées à chaque élément d'un array. On utilise généralement l'opérateur `dot` (*broadcasting*).

```julia
julia> [1, 2, 3] .+ [4, 5, 6] # [1+4, 2+5, 3+6]  
3-element Vector{Int64}:
 5
 7
 9

julia> [1, 2, 3] .-1
3-element Vector{Int64}:
 0
 1
 2

julia> extentions = ["jpg", "JPG", "jpeg", "png", "PNG", "tif", "tiff"]
julia> file = "picture.jpg"
julia> endswith.(file, extentions) # retourne un vecteur de booléens
7-element BitVector:
 1
 0
 0
 0
 0
 0
 0
# voir d'autres exemple dans les opérateurs de collection (in)   
```

Attention a la vectorisation avec l'opérateur `in`. Si les deux arguments sont des vecteurs de même longueur (retourne un erreur si les dimension ne correspondent pas), `in.(items, collection)` retourne un vecteur indiquant si chaque valeur de `items` est dans la valeur à la position correspondante dans `collection`.
```julia
julia> in.([1,2], [2,3])
2-element BitVector:
 0
 0
```

Pour obtenir un vecteur indiquant si chaque item est dans la collection, il faut envelopper la collection dans un `tuple` ou un `Ref()`

```julia
julia> in.([1,2], ([2,3],)) # ne pas oublier la virgule
2-element BitVector:
 0
 1
# ou in.([1,2], Ref([2,3]))
```

Produit scalaire
```julia
julia> a = [1, 2, 3]
julia> b = [2, 3, 4]
julia> sum(a .* b) # (1*2 + 2*3 + 3*4)
20

```

Une autre possibilité est d'utiliser la fonction `map()`.
```julia
julia> map(x -> x+1, [1, 2, 3])
3-element Vector{Int64}:
 2
 3
 4
```

De nombreuses autres opérations sont applicables aux tableaux : jointure, appartenance, contient, sous-ensemble, etc.
```julia
julia> arr = [1, 2, 3]
julia> join(arr, ",")
"1,2,3"
```
Opérateurs :
- `in` | `∈` : appartient
- `∉` : n'appartient pas
- `issubset` : sous-ensemble

```julia
julia> a = 1:5
julia> 3 in a # autres notations : in(3, 1:5) ou 3 ∈ 1:5
true
```

Attention avec la valeur missing…
```julia
julia> 1 in [1, missing]
true

julia> missing in [1, missing]
missing
```

```julia
julia> issubset([1, 2], [1, 2, 3])
true
```

### Tuples
Un `tuple` est assez proche d'un tableau, il correspond à une séquence de valeurs indexées par des entiers. Les valeurs sont séparées par une virgule et chacune peut disposer de son propre type. On les place généralement entre parenthèses mais ces dernières ne sont pas obligatoires. Ils se distinguent des tableaux par leur caractère **immuable**. 
```julia
julia> t = 1, 2, 3
(1, 2, 3)

julia> t = (1, 2, 3)
(1, 2, 3)

julia> t = (1,)
(1,)

julia> typeof(t)
Tuple{Int64}

julia> tuple(1, 2) # on peut également utiliser la fonction tuple()
(1, 2)

julia> t[1] # comme pour les tableaux, les valeurs sont indexées.
1
```

Les tuples sont très utilisés pour l'affectation (ou réaffectation) de variables.

```julia
julia> a, b = 1, 2
(1, 2)

julia> str = "Hello World"
"Hello World"

julia> (a, b) = split(str, " ")
2-element Vector{SubString{String}}:
 "Hello"
 "World"
```

Certaines fonctions peuvent prendre un nombre variable d'arguments, reconnaissables par les `...` qui suivent le nom du paramètre. Dans ce cas, les différents arguments sont agrégés dans un tuple.
```julia
julia> function add(args...)
           sum(args)
       end
add (generic function with 1 method)

julia> add(1, 2, 3, 4, 5)
15
```

On peut avoir recours au tuples lorsque l'on souhaite passer plusieurs arguments dans une fonction anonyme.
```julia
julia> map((x, y, z) -> x*y^z, 4, 9, 2)
324
```

Un nom peut être associé a chaque valeur d'un tuple.
```julia
julia> (a='a', b='c', c='c')
(a = 'a', b = 'c', c = 'c')
```

Une syntaxe existe également pour créer un tuple nommé à partir de variables préexistantes. Elle reprend le principe des arguments mots-clés avec les fonctions et l'emploi d'un point-virgule `;`.
```julia
julia> a, b = 'a', 'b'
('a', 'b')

julia> t = (; a, b)
(a = 'a', b = 'b')
```

Voir aussi les utilisations de `collect()` et `zip()` avec les tuples.

### DataFrames
[Documentation DataFrames.jl](https://dataframes.juliadata.org/stable/)

Il existe de nombreuses méthodes pour créer un *DataFrames*, à partir de vecteurs, de paires, de vecteurs de paires, de dictionnaires, avec des tuples de vecteurs nommés, colonne par colonne, ligne à ligne, etc.
```julia
julia> using DataFrames
julia>  DataFrame(
            a=1:4,
            b=["Yoda", "Han Solo", "Luke", "Dark Vador"]
        )
4×2 DataFrame
 Row │ a      b          
     │ Int64  String     
─────┼───────────────────
   1 │     1  Yoda
   2 │     2  Han Solo
   3 │     3  Luke
   4 │     4  Dark Vador

# avec des paires
julia> DataFrame("a" => 1:2, "b" => ["Yoda", "Han Solo"])

# avec un vecteur de paires
julia> DataFrame(["a" => 1:2, "b" => ["Yoda", "Han Solo"]])

# avec un dictionnaire
julia> DataFrame(Dict(
  "a" => 1:2, 
  "b" => ["Yoda", "Han Solo"]
))

# un tuple de vecteurs identifiés...
julia> DataFrame((a=[1, 2], b=["Yoda", "Han Solo"]))

# ... ou un vecteur de tuples
julia> DataFrame([(a=1, b="Yoda"), (a=2, b="Han Solo")])

# construction colonne par colonne
julia> df = DataFrame()
julia> df.a = 1:2 # ajout de la colonne a
julia> df[!, :b] = ["Yoda", "Han Solo"] #ajout de la colonne b (autre syntaxe)

# construction ligne à ligne
julia> df = DataFrame(a=Int[], b=String[])
julia> push!(df, (1, "Yoda"))
julia> push!(df, (2, "Han Solo"))
# Il est possible d'utiliser pushfirst!() pour ajouter une ligne au début
# insert!() pour ajouter une ligne à un index donné
# append!() ou prepend!() pour ajouter des tables entières 
```

Et même à partir de données tabulaires
```csv
#data.csv
a,b
1,"Yoda"
2,"Han Solo"
```
```julia
julia> using CSV
julia> df = DataFrame(CSV.File("data.csv"))
2×2 DataFrame
 Row │ a      b        
     │ Int64  String   
─────┼─────────────────
   1 │     1  Yoda
   2 │     2  Han Solo
```

Les noms des colonnes peuvent être récupérés sous la forme d'un vecteur avec la fonction `names()`
```julia
julia> names(df)
2-element Vector{String}:
 "a"
 "b"

julia> propertynames(df) # retourne les noms de colonne sous forme de symboles
2-element Vector{Symbol}:
 :a
 :b
```

Cette même fonction permet de faire des recherches dans le noms de colonnes.
```julia
julia> names(df, r"a") # liste les colonnes avec RegEx
julia> names(df, Not(:b)) # tous les noms de colonnes sauf :b
julia> names(df, Int) # liste les colonnes en fonction du type de données
```

On peut récupérer un vecteur des valeurs d'une colonne de différentes manières
```julia
julia> df.b
julia> df."b"
julia> df[!, :b]
julia> df[!, "b"]
julia> df[:, :b]
julia> df[:, "b"]
2-element Vector{String}:
 "Yoda"
 "Han Solo"
```

Il existe cependant une différente entre `df[!, :b]` et `df[:, :b]` : le *bang operator* `!` indique qu'une copie n'est pas réalisée. Si on change un élément du vecteur alors il sera propagé au Dataframe.

 > Columns can be directly (i.e. without copying) accessed via df.col or df[!, :col]. [...] Since df[!, :col] does not make a copy, changing the elements of the column vector returned by this syntax will affect the values stored in the original df. To get a copy of the column use df[:, :col]: changing the vector returned by this syntax does not change df.

```julia 
julia> df = DataFrame(["a" => 1:2, "b" => ["Yoda", "Han Solo"]])
julia> v = df[:, :b] # pas de bang, la valeur ne sera pas modifiée
2-element Vector{String}:
 "Yoda"
 "Han Solo"

julia> v[2] = "Dark Vador"
"Dark Vador"

julia> df
2×2 DataFrame
 Row │ a      b        
     │ Int64  String   
─────┼─────────────────
   1 │     1  Yoda
   2 │     2  Han Solo


julia> v = df[!, :b] # bang opérateur
julia> v[2] = "Dark Vador"
julia> df # utilisation de bang, la valeur est modifiée.
2×2 DataFrame
 Row │ a      b          
     │ Int64  String     
─────┼───────────────────
   1 │     1  Yoda
   2 │     2  Dark Vador
```

Voir la documentation pour travailler avec les [*subsets*](https://dataframes.juliadata.org/stable/man/working_with_dataframes/) et pour les nombreuses options de [tri](https://dataframes.juliadata.org/stable/man/sorting/).

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

## autre 
`contains()` et `occursin()` sont les mêmes fonctions, mais les arguments sont inversés. `contains()` est alignée avec `startswith()` et `endswith()`.
```julia
contains("Hello World!", "Hello") # true
occursin("Hello", "Hello World!") # true

issubset([1, 2], [1, 2, 3]) # true
issubset("Hello", "Hello World!") # true
```


### Les symboles LaTeX
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

## Symboles LaTeX 
Il est possible d'utiliser les symboles LaTeX directement dans Julia.
```julia
# \\beta [+ tabulation]
β = 10 
```
