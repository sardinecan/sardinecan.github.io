---
title: 'Basex : augmenter la durée des sessions'
date: '2024-04-18'
category: 'basex'
author: 'jmorvan'
keywords: 'basex ; xml ; config'
---

# Augmenter la durée des sessions BaseX

Il est possible d'augmenter la durée des sessions en ajoutant le code suivant dans le fichier `basex/webapp/WEB-INF/web.xml` :

```xml
<!-- Increase timeout to 8 hours -->
<session-config>
  <session-timeout>480</session-timeout>
</session-config>
```

