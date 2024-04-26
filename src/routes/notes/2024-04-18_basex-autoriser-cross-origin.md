---
title: 'Autoriser cross-origin / cross-domain'
date: '2024-04-18'
category: 'basex'
author: 'jmorvan'
keywords: 'basex ; xml ; cross-origin'
---

Pour autoriser [cross-origin et/ou cross-domain](https://developer.mozilla.org/fr/docs/Web/HTTP/CORS) dans BaseX, il suffit d'ajouter le code suivant à la fin du fichier `basex/webapp/WEB-INF/web.xml`.

```xml
<!-- allow cross-origin -->
<filter>
  <filter-name>cross-origin</filter-name>
  <filter-class>org.eclipse.jetty.servlets.CrossOriginFilter</filter-class>
</filter>
<filter-mapping>
  <filter-name>cross-origin</filter-name>
  <url-pattern>/*</url-pattern>
</filter-mapping>
```