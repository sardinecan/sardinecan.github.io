
---
title: "CLI connexion Wifi"
date: 2024-05-15
author: "jmorvan"
keywords: "CLI ; wifi ; setup"
---

# Se connecter au wifi en ligne de commande

La commande `nmcli dev wifi` permet de lister les points d'accès wifi :

```
nmcli dev wifi                               
IN-USE  BSSID              SSID                    MODE   CHAN  RATE>
        F2:8D:7E:03:34:94  HUAWEI-B528-0656        Infra  11    130 >
        BE:F3:D0:0E:17:EC  Redmi Note 11           Infra  7     117 >
*       04:F0:21:4C:55:9B  NormandieTrainConnecte  Infra  6     195 >
        06:F0:21:4C:55:9B  --                      Infra  6     195 >
        06:F0:21:4C:55:2C  --                      Infra  36    405 >
        04:F0:21:4C:55:2C  NormandieTrainConnecte  Infra  36    405 >

```

La commande `nmcli dev wifi connect NormandieTrainConnecte` permet de se connecter à l'un des points d'accès.
Ajouter `password *monmdp*` à la fin de la commande si la connexion nécessite un mot de passe.
