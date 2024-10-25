---
title: 'Combinaisons de paires uniques'
date: '2020-06-12'
category: 'code'
author: 'jmorvan'
keywords: 'xquery ; code ; pair'
---

# Combinaisons de paires uniques
Pour obtenir toutes les paires uniques à partir d'une séquence.

```shell
seq = ("a", "b", "c", "d")
result = 
.   a,b  a,c  a,d
.    .   b,c  b,d
.    .    .   c,d
.    .    .    .
```

- voir aussi [*How do I get the total number of unique pairs of a set in the database?*](https://stackoverflow.com/questions/18859430/how-do-i-get-the-total-number-of-unique-pairs-of-a-set-in-the-database)

## XQuery

```xquery
xquery version "3.1" ;
(:~
 : Pairs combinations in a sequence
 : Unique pairs in a sequence (where order is irrelevant)
 :)
let $seq := ("a", "b", "b", "d")
for $i at $pos in $seq
for $j in fn:subsequence($seq, $pos+1, fn:count($seq))
return <result>{$i, $j}</result>

(: result :)
a,b
a,c
a,d
b,c
b,d
c,d
```


