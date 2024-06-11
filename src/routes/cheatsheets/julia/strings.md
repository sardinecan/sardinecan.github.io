---
title: 'Chaines de caractères'
date: '2024-03-22'
author: 'Josselin Morvan'
language: 'julia'
keywords: ''
---

# Chaines de caractères
[Documentation Julia](https://docs.julialang.org/en/v1/manual/strings/)

- [Caratères](#caracteres)
- [Chaines de caractères](#strings)
- [Itération sur une chaine de caractères](#iteration-sur-une-chaine-de-caracteres)
- [Concaténation](#concaténation)
- [Interpolation](#interpolation)
- [Occurences](#occurences)
- [Jointures](#jointures)
- [RegEx](#regex)
- [Longueur de chaines](#longueur)
- [Remplacer](#remplacer)
- [Substrings](#substrings)

## caractères <a id="caracteres" href="">
```julia
# les caractères sont entre guillemets simples
c = 'a' # 'a': ASCII/Unicode U+0061 (category Ll: Letter, lowercase)

# il est possible de coder un caractère sous la forme d'un entier
c = Int(c) # 97


Char(97) # 'a': ASCII/Unicode U+0061 (category Ll: Letter, lowercase)

# il est donc possible d'effectuer des comparaisons...
'A' < 'a' # true

#... ou des opérations arithmétiques
'A' + 1 # 'B': ASCII/Unicode U+0042 (category Lu: Letter, uppercase)
```

## Strings <a id="strings" href="">

```julia
# entre guillemets doubles...
str = "Hello World!" # "Hello World!"

#... ou triple s'il y a des guillemets doubles dedans
str = """Victore Hugo a prononcé la phrase "Ce gouvernement, je le caractérise d'un mot : la police partout, la justice nulle part" le 17 juillet 1851."""
     
#=
"Victore Hugo a prononcé la phrase \"Ce gouvernement, je le caractérise d'un mot : la police partout, la justice nulle part\" le 17 juillet 1851."
=#

typeof(str) # String
```

## Itération sur une chaine de caractères <a id="iteration-sur-une-chaine-de-caracteres" href="">

```julia
str = "Hello" # "Hello"
for c in str
    println(c)
end
#=
  H
  e
  l
  l
  o
=#   
```

## Concaténation <a id="concaténation" href="">

```julia
"Hello"*" "*"World"*"!" # "Hello World!"
```

## Interpolation <a id="interpolation" href="">

```julia
surname = "Hugo"
forename = "Victor"
fullname = "$forename $surname" # "Victor Hugo"
```

## Occurences <a id="occurences" href="">

```julia
findfirst('l', "Hello World") # 3

findlast('l', "Hello World") # 10

findprev('l', "Hello World", 5) # 4

findnext('l', "Hello World", 5) # 10

findall('l', "Hello World")
#=
  3-element Vector{Int64}:
    3
    4
   10
=#

occursin("world", "Hello world!") # true

occursin("Goodbye", "Hello world!") # false
```

## Jointures <a id="jointures" href="">

```julia
jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]
     
#=
  7-element Vector{String}:
   "lundi"
   "mardi"
   "mercredi"
   "jeudi"
   "vendredi"
   "samedi"
   "dimanche"
=#

join(jours, ", ", " et ") # "lundi, mardi, mercredi, jeudi, vendredi, samedi et dimanche"
```

## RegEx <a id="regex" href="">

```julia
str = "Hello World!" # "Hello World!"

r = r"l" # r"l"

typeof(r) # Regex

#occursin retourne vrai ou faux
occursin(r, str) # true

match(r, str) # RegexMatch("l")

m = match(r"[0-9]", str) #si aucun match retour "nothing"
if m === nothing
    return "no match"
else
    return "match"
end
     
# "no match"

m = match(r"(ll).*(l)", str) # RegexMatch("llo Worl", 1="ll", 2="l")

m.match # "llo Worl"

m.captures
#=     
  2-element Vector{Union{Nothing, SubString{String}}}:
   "ll"
   "l"
=#

m = match(r"(?\d+):(?\d+)","12:45") # RegexMatch("12:45", hour="12", minute="45")

m[:minute] # "45"

m[2] # "45"

m = eachmatch(r, str) # Base.RegexMatchIterator(r"l", "Hello World!", false)

collect(m)
#=
  3-element Vector{RegexMatch}:
   RegexMatch("l")
   RegexMatch("l")
   RegexMatch("l")
=#

[m.match for m = eachmatch(r, str)]
#=     
  3-element Vector{SubString{String}}:
   "l"
   "l"
   "l"
=#
```

## Longueur <a id="longueur" href="">

```julia
str = "Bodø est une ville norvégienne située dans le comté de Nordland"

length(str) # 63

# attention à l'encodage des caractères, length() et lastindex() ne retournent pas toujours le même résultat
lastindex(str) # 67
```

## Remplacer <a id="remplacer" href="">

```julia
str = "Hello World!"
replace(str, "Hello" => "Goodbye") # "Goodbye World!"
```

## Substrings <a id="substrings" href="">
```julia
str = "Hello World!"
str[2] # 'e': ASCII/Unicode U+0065 (category Ll: Letter, lowercase)

str[1:5] # "Hello"

str[begin:end-6] # "Hello "

str[1] # 'H': ASCII/Unicode U+0048 (category Lu: Letter, uppercase)
str[1:1] # "H"

typeof(str[1:5]) # String

SubString(str, 1, 5) # "Hello"

typeof(SubString(str, 1, 5)) # SubString{String}