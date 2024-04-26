---
title: 'Appels Python et R dans Julia'
date: '2024-03-31'
author: 'Josselin Morvan'
language: 'julia'
keywords: ''
---

# Appels Python et R dans Julia

## PyCall

```python
Using PyCall

# déclaration d'une fonction Python
py"""
  def sumMyArgs (i, j):
    return i+j
"""

a = py"sumMyArgs"(3,4)
```