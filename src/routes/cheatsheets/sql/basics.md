---
title: 'Fondamentaux'
date: '2024-06-27'
author: 'Josselin Morvan'
language: 'sql'
keywords: ''
---

# 📄 **Cheatsheet SQL**

## 📌 **Table des Matières**
- [Introduction](#introduction)
- [Commandes de Base](#commandes-de-base)
- [Clauses de Filtrage](#clauses-de-filtrage)
- [Jointures](#jointures)
- [Groupement et Agrégation](#groupement-et-agregation)
- [Sous-requêtes](#sous-requetes)
- [Manipulation des Données](#manipulation-des-donnees)
- [Gestion des Tables](#gestion-des-tables)
- [Fonctions](#fonctions)

---

## 📚 Introduction <span id="introduction"/>

SQL (Structured Query Language) est le langage standard pour gérer et manipuler des bases de données relationnelles. Cette cheatsheet couvre les commandes essentielles pour l'interaction avec les bases de données SQL.

## 🔍 Commandes de Base <span id="commandes-de-bases"/>

| Commande            | Description                              |
|---------------------|------------------------------------------|
| `SELECT`            | Récupérer des données                    |
| `FROM`              | Spécifier la table                       |
| `WHERE`             | Filtrer les résultats                    |
| `ORDER BY`          | Trier les résultats                      |
| `LIMIT`             | Limiter le nombre de résultats           |

### Exemple

```sql
SELECT nom, age
FROM employes
WHERE age > 30
ORDER BY age DESC
LIMIT 10;
```

## Clauses de filtrage <span id="clauses-de-filtrage"/>
| Commande          | Description                                |
|-------------------|--------------------------------------------|
| `WHERE`           | Filtrer les lignes selon une condition     |
| `AND`             | Combiner plusieurs conditions              |
| `OR`              | Choisir parmi plusieurs conditions         |
| `NOT`             | Nier une condition                         |
| `IN`              | Correspondance dans une liste              |
| `BETWEEN`         | Plage de valeurs                           |
| `LIKE`            | Correspondance de motif                    |
| `IS NULL`         | Vérifier si une valeur est nulle           |

```sql
SELECT nom, salaire
FROM employes
WHERE salaire BETWEEN 40000 AND 60000
AND nom LIKE 'J%';
```

## Jointures <span id="jointures"/>
| Type de Jointure  | Description                                |
|-------------------|--------------------------------------------|
| `INNER JOIN`      | Renvoie les lignes ayant des correspondances |
| `LEFT JOIN`       | Renvoie toutes les lignes de la table de gauche et les correspondances de la table de droite |
| `RIGHT JOIN`      | Renvoie toutes les lignes de la table de droite et les correspondances de la table de gauche |
| `FULL JOIN`       | Renvoie toutes les lignes quand il y a une correspondance dans l'une ou l'autre des tables |

```sql
SELECT e.nom, d.nom_departement
FROM employes e
INNER JOIN departements d ON e.departement_id = d.id;
```

## Groupement et agrégation <span id="groupement-et-agregation"/>
| Commande          | Description                                |
|-------------------|--------------------------------------------|
| `GROUP BY`        | Grouper les lignes qui ont des valeurs identiques |
| `HAVING`          | Filtrer les groupes                        |
| `COUNT`           | Compter le nombre de lignes                |
| `SUM`             | Calculer la somme                          |
| `AVG`             | Calculer la moyenne                        |
| `MIN`             | Trouver la valeur minimale                 |
| `MAX`             | Trouver la valeur maximale                 |

```sql
SELECT departement_id, AVG(salaire) AS salaire_moyen
FROM employes
GROUP BY departement_id
HAVING AVG(salaire) > 50000;
```

## Sous-requêtes <span id="sous-requetes"/>
| Type             | Description                                |
|------------------|--------------------------------------------|
| `Sous-requête dans SELECT` | Utiliser une requête dans une autre |
| `Sous-requête dans FROM`   | Utiliser une requête comme une table |
| `Sous-requête dans WHERE`  | Utiliser une requête pour filtrer    |

```sql
SELECT nom, salaire
FROM employes
WHERE salaire > (SELECT AVG(salaire) FROM employes);
```

## Manipulation des données <span id="manipulation-des-donnees"/>
| Commande          | Description                                |
|-------------------|--------------------------------------------|
| `INSERT INTO`     | Insérer des nouvelles lignes               |
| `UPDATE`          | Modifier les lignes existantes             |
| `DELETE FROM`     | Supprimer des lignes                       |

```sql
INSERT INTO employes (nom, salaire, departement_id)
VALUES ('Marie Dupont', 60000, 2);

UPDATE employes
SET salaire = salaire * 1.1
WHERE departement_id = 3;

DELETE FROM employes
WHERE salaire < 30000;
```

## Gestion des tables <span id="gestion-des-tables"/>
| Commande          | Description                                |
|-------------------|--------------------------------------------|
| `CREATE TABLE`    | Créer une nouvelle table                   |
| `ALTER TABLE`     | Modifier une table existante               |
| `DROP TABLE`      | Supprimer une table                        |
| `CREATE INDEX`    | Créer un index                             |
| `DROP INDEX`      | Supprimer un index                         |

```sql
CREATE TABLE departements (
    id INT PRIMARY KEY,
    nom_departement VARCHAR(100)
);

ALTER TABLE employes
ADD COLUMN adresse VARCHAR(255);

DROP TABLE anciennes_donnees;
```

## Fonctions <span id="fonctions"/>
| Fonction          | Description                                |
|-------------------|--------------------------------------------|
| `NOW()`           | Obtenir la date et l'heure actuelles       |
| `COALESCE`        | Retourner la première valeur non NULL      |
| `IFNULL`          | Retourner une valeur de remplacement si NULL|
| `LENGTH`          | Longueur d'une chaîne                      |
| `SUBSTRING`       | Extraire une sous-chaîne                   |
| `ROUND`           | Arrondir un nombre                         |

```sql
SELECT nom, ROUND(salaire, 2) AS salaire_arrondi
FROM employes
WHERE COALESCE(adresse, 'Adresse non fournie') = 'Adresse non fournie';
```