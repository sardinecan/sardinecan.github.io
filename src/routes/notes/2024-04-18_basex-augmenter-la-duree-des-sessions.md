---
title: 'Augmenter la durée des sessions'
date: '2024-04-18'
category: 'basex'
author: 'jmorvan'
keywords: 'basex ; xml ; config'
---

Il est possible d'augmenter la durée des sessions en ajoutant la code suivant dans le fichier `basex/webapp/WEB-INF/web.xml` :

```xml
<!-- Increase timeout to 8 hours -->
<session-config>
  <session-timeout>480</session-timeout>
</session-config>
```

