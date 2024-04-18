---
title: 'TEI Stylesheets'
date: '2023-10-12'
author: 'jmorvan'
keywords: 'tei ; xml ; xslt ; stylesheets'
---

[works also with Linux]

This is a family of XSLT 2.0 stylesheets to transform TEI XML documents to various formats, including XHTML, LaTeX, XSL Formatting Objects, ePub, plain text, RDF, JSON; and to/from Word OOXML (docx) and OpenOffice (odt). They concentrate on the core TEI modules which are used for simple transcription and "born digital" writing.

## MacOs Install
- download fork at [https://github.com/sardinecan/Stylesheets](https://github.com/sardinecan/Stylesheets)

For your information, here are the changes made to the original makefile 
  - variable PREFIX : `/usr` > `/tmp/tei`
  	- NB `/tmp` directory is cleaned up by macOS every 3 days by default [see apple forum](https://forums.developer.apple.com/forums/thread/71382)
  - line `cp --preserve=timestamps bin/transformtei ${PREFIX}/bin` > `cp -p bin/transformtei ${PREFIX}/bin`
  - line `cp --preserve=timestamps source/p5subset.xml ${PREFIX}/source` > `cp -p source/p5subset.xml ${PREFIX}/source`
  - line `perl -p -i -e 's+^APPHOME=.*+APPHOME=/usr/share/xml/tei/stylesheet+' ${PREFIX}/bin/transformtei` > `perl -p -i -e 's+^APPHOME=.*+APPHOME=${PREFIX}/share/xml/tei/stylesheet+' ${PREFIX}/bin/transformtei`

- Go to stylesheets folder: `cd path/to/local/Stylesheets` and install: `make install`
  - if the Make command doesn't run, it's likely that the Xcode command line is missing, to install it: `xcode-select --install`
  - if needed you chan change a variable for the installation: `make PREFIX=destination/path/for/installation install`
- add binaries to the `$PATH` in your `~/.zshrc`: `export PATH=$PATH:/tmp/tei/bin/`

## Add custom profile
Create a profile in the `Stylesheets/profile` subdirectory with the following pattern: `profiles/$PROFILENAME/$FORMAT/(from.xsl or to.xsl)` for example: `profiles/local/docx/from.xsl`

to import the default transformation, add an `xsl:import` rule to the custom xslt stylesheet, for example: `<xsl:import href="../../default/docx/from.xsl" />`.

Complete sample:
```xml
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
  xmlns:wne="http://schemas.microsoft.com/office/word/2006/wordml"
  xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"
  xmlns="http://www.tei-c.org/ns/1.0"
  exclude-result-prefixes="xs w"
  version="2.0">
  <xsl:import href="../../default/docx/from.xsl"/>
  <!-- nouvelles règles-->
  <xsl:template match="/">[…]</xsl:template>
</xsl:stylesheet>
```

Then you need to reinstall the tei stylesheets: `cd path/to/tei/Stylesheets ; make install`

## Transform
- to call a XSLT just: `docxtotei inputFile outputFile`.
- to call a XSLT with a custom profile: `docxtotei --profile=$PROFILENAME inputFile outputFile` for example `docxtotei --profile=local inputFile outputFile`.

## NOTA BENE

- Note that if your $FORMAT is docx, this directory must contain a file template.docx which is used to create .docx files from. See the sample in the default profile.

- [Converting from DOCX format](https://listserv.brown.edu/archives/cgi-bin/wa?A2=TEI-L;1123776a.1605) : "The TEI conversions from docx are better in many ways than the conversions from other the wordprocessing formats. There are also small tricks like having docx styles of 'tei_elementName' to get certain phrase-level elements converted."

- [https://dixit.uni-koeln.de/wp-content/uploads/2015/04/Camp2-15-Sebastian_Rahtz_-_Working_with_TEI_Stylesheets__talk.pdf](https://dixit.uni-koeln.de/wp-content/uploads/2015/04/Camp2-15-Sebastian_Rahtz_-_Working_with_TEI_Stylesheets__talk.pdf)

- the documentation is accessible in the installation directory, for example: `/tmp/tei/share/doc/tei-xsl/index.html`.
