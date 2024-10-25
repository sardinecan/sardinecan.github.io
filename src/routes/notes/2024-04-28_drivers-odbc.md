---
title: 'Lister les drivers ODBC'
date: '2024-04-28'
category: 'setup'
author: 'jmorvan'
keywords: 'r ; shyny ; odbc'
---

# Lister les drivers ODBC

## Terminal

voir [*how to check odbc version on linux or how to check is there odbc driver install or not*](https://stackoverflow.com/questions/44149749/how-to-check-odbc-version-on-linux-or-how-to-check-is-there-odbc-driver-install)

Il existe deux gestionnaires de pilotes ODBC open source pour UNIX (unixODBC et iODBC). Le gestionnaire de pilotes unixODBC est celui qui est inclus dans la plupart des distributions Linux et dans certaines distributions UNIX.

Dans unixODBC, les pilotes ODBC sont définis dans le fichier `odbcinst.ini`. Si unixODBC est déjà installé, On peut utiliser le programme `odbcinst` d'unixODBC pour localiser le fichier `odbcinst.ini` utilisé pour définir les pilotes :

```shell
❯ odbcinst -j
unixODBC 2.3.7
DRIVERS............: /etc/odbcinst.ini
SYSTEM DATA SOURCES: /etc/odbc.ini
FILE DATA SOURCES..: /etc/ODBCDataSources
USER DATA SOURCES..: /data/user/m/me/.odbc.ini
SQLULEN Size.......: 8
SQLLEN Size........: 8
SQLSETPOSIROW Size.: 8
```

Puis pour lister les drivers accessibles :

```shell
❯ cat /etc/odbcinst.ini 
[PostgreSQL]
Description=ODBC for PostgreSQL
Driver=/usr/lib/psqlodbcw.so
Setup=/usr/lib/libodbcpsqlS.so
Driver64=/usr/lib64/psqlodbcw.so
Setup64=/usr/lib64/libodbcpsqlS.so
FileUsage=1

[MySQL]
Description=ODBC for MySQL
Driver=/usr/lib/libmyodbc5.so
Setup=/usr/lib/libodbcmyS.so
Driver64=/usr/lib64/libmyodbc5.so
Setup64=/usr/lib64/libodbcmyS.so
FileUsage=1

[MariaDB]
Description=ODBC for MariaDB
Driver=/usr/lib/libmaodbc.so
Driver64=/usr/lib64/libmaodbc.so
FileUsage=1

[MySQL ODBC 8.3 Unicode Driver]
DRIVER=/usr/lib64/libmyodbc8w.so
UsageCount=1
```

## R
Il est possible d'utiliser la fonction `odbcListDrivers()` avec le package `odbc` pour lister les drivers.

```R
library(odbc)
sort(unique(odbcListDrivers()[[1]]))
[1] "FreeTDS"                       "MariaDB"                       "MySQL"                        
[4] "MySQL ODBC 8.3 ANSI Driver"    "MySQL ODBC 8.3 Unicode Driver" "PostgreSQL"                   
```

NB : pour une utilisation avec MySQL — par exemple pour requêter une BDD avec R et Shiny —, utiliser de préférence les drivers `MySQL ODBC 8.X Unicode Driver`.