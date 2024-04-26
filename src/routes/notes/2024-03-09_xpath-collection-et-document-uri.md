---
title: 'Les fonctions collection() et document-uri()'
date: '2022-03-09'
category: 'xpath'
author: 'jmorvan'
keywords: 'xpath ; xml'
---

## `collection()`
Renvoie une séquence d'éléments identifiés par une URI, ou une collection par défaut si aucune URI n'est fournie.
```xml
collection('.?select=*.xml') <!-- retourne une collection de document xml -->
```

Pour récupérer le nom de chaque fichier, deux fonctions peuvent être utilisées : `document-uri()` et `base-uri()`.
voir [document-uri() is not working when using collection()](https://stackoverflow.com/questions/77325893/document-uri-is-not-working-when-using-collection).

### [`document-uri()`](https://www.saxonica.com/documentation12/index.html#!functions/fn/document-uri)

> Les documents lus à l'aide de la fonction `collection()` sont ajoutés au pool de documents (et ont donc une propriété `document-uri()`) si et seulement si la collection est stable. Dans Saxon, pour des raisons de performance, les collections ne sont pas stables à moins que l'option de configuration `STABLE_COLLECTION_URI` ne soit activée ou que la stabilité ne soit demandée d'une autre manière, par exemple en incluant le paramètre `stable=yes` dans l'URI de la collection.

```xml
<xsl:for-each select="collection('.?select=*.xml&amp;content-type=application/xml&amp;stable=yes')">
  <xsl:variable name="filename" select="tokenize(base-uri(.), '/')[last()]"/>
  <xsl:variable name="id" select="substring-before($filename, '.xml')"/>
  <xsl:result-document method="text" href="output/{$id}.txt">
    <xsl:apply-templates/>
  </xsl:result-document>
</xsl:for-each>
```


### [`base-uri()`](https://www.saxonica.com/documentation12/index.html#!functions/fn/base-uri)
Il n'est pas nécessaire d'avoir une collection stable avec `base-uri()`.

```xml
<xsl:for-each select="collection('.?select=*.xml')">
  <xsl:variable name="filename" select="tokenize(base-uri(.), '/')[last()]"/>
  <xsl:variable name="id" select="substring-before($filename, '.xml')"/>
  <xsl:result-document method="text" href="output/{$id}.txt">
    <xsl:apply-templates/>
  </xsl:result-document>
</xsl:for-each>

```

