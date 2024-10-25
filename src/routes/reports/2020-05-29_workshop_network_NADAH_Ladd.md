---
title: 'Understanding and Interpreting Your Network'
date: '2020-05-29'
speaker: 'John R. Ladd'
category: 'workshop'
keywords: ''
---

# Understanding and Interpreting Your Network

Slides : https://jrladd.com/slides/networkbasics

Glossaire : https://jrladd.com/network-glossary.html

Bibliographie : https://historicalnetworkresearch.org/bibliography

## Definition

In a network, there are entities (nodes) and relationships (edges).

Node can have attributes (numerical (size) ant categorical(color))

Edges can have attributes too (directed or not, weighted, or not, edge type)

**Path & diameter** : sum of the edges that separate two nodes. Sometimes we have a multiple path between two nodes, with a shorter. Doing an average is interesting. 

**Isolates** : node with no edges. They are still in the network.

**Hubs** : nodes with the more edges.

**Bridge** : nodes with less degrees than hubs but still a great betweenness.

## Centrality

**Degree** : number of edges for a node.

**Strength** : sum of the weight for a node connected to weighted edges.

**Betweenness** : number of shorter path that must pathru a node.

## Types of network

**Unipartite/unimodal network** : the entities are of the same kind. 

**Bipartite/bimodal** : the entities (nodes) are of different kind (persons and objets). Particularity : the nodes of a same set cannot be connected to each other (a person with another person can't be connected)

**Multipartite/K-partite/multimodal** : Like a bimodal with more nodesets. As for bimodal, the nodes of a same set can't be connected, but they can be connected to all the other nodeset. 



## Groups of nodes within network

**Components** : We can have connected components (groups of nodes separated from other groups of nodes.)

**Cliques** : a group of nodes where all the nodes are connected to each other.

**Clustering** : how the node's neighbourghs are connected to each others. 

**Community** : a group a nodes sometimes we started identifying from a cliques, or a path. There is no algorithm for community detection.

**Dense network** : hard to identify cliques, because each node have a lot of edges.

## Types of visualisation 

Adjacency matrix, Adjacency list, node-link diagram

## Other important concepts

**Triadic closure** : if A is friend of B and C, we can think that B and C are friends too.

**Assortative mixing/homophily** : nodes with similare attributes tend to be connected. Homophily is a tendency not a law.

**Preferential attachement**

**Weak ties** : in a weighted network, identifying a weak tie allow to identify two connected components linked by this weak tie.

**Small world network** : have low average short path length, low clustering coefficients, degree distrubtion follows power law (a few large hubs) (it allows the short path link to exist), low diameter (usually around "six degrees" (=> six degrees of Francis Beacon)).