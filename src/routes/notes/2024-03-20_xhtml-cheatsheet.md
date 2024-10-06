---
title: 'XHTML - Cheatsheet'
date: '2024-03-20'
author: 'Josselin Morvan'
language: 'html'
keywords: 'cheatsheet ; html ; xhtml'
---

# 📝 Les fondamentaux HTML

## Éléments et structure de base
<dl>
  <dt><code>&lt;!DOCTYPE html&gt;</code></dt>
  <dd>Le doctype HTML5, doit être placé en préambule.</dd>
  <dt><code>&lt;html&gt;</code></dt>
  <dd>Élément racine d'une page html. Cette balise contient tout le code html et est placée à la suite directe du préambule.</dd>
  <dt><code>@lang</code></dt>
  <dd>Langue principale de la page web (<a href="https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags">liste des codes langues</a>).</dd>
  <dt><code>&lt;head&gt;</code></dt>
  <dd>Rassemble les métadonnées du document, incluant son titre, des scripts, des feuilles de style ou des liens vers des scripts et des feuilles de style.</dd>
  <dt><code>&lt;title&gt;</code></dt>
  <dd>Titre de la page web (affiché dans la barre du navigateur ou dans l'onglet de la page). <code>&lt;title&gt;</code> ne peut contenir que du texte.</dd>
	<dt><code>&lt;meta/&gt;</code></dt>
	<dd>Métadonnées.</dd>
	<dt><code>@charset</code></dt>
	<dd>Attribut spécifiant l'encodage utilisépour la page. On utilise généralement UTF-8.</dd>
	<dt><code>&lt;body&gt;</code></dt>
	<dd>Corps de la page web. L'élément <code>&lt;body/&gt;</code> contient le contenu du document html.</dd>
</dl>

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <title>Ma première page</title>
    <meta charset="utf-8"/>
  </head>
  <body>
  </body>
</html>
```

## Formattage du texte
<dl>
	<dt><code>&lt;h1/&gt; à &lt;h6/&gt;</code></dt>
	<dd>Éléments de titre.</dd>
	<dt><code>&lt;p&gt;</code></dt>
	<dd>Paragraphe.</dd>
	<dt><code>&lt;ul&gt;</code></dt>
	<dd>Liste non ordonnée.</dd>
	<dt><code>&lt;ol&gt;</code></dt>
	<dd>Liste ordonnée.</dd>
	<dt><code>&lt;li&gt;</code></dt>
	<dd>Item de liste.</dd>
	<dt><code>&lt;dl&gt;</code></dt>
	<dd>Liste de description.</dd>
	<dt><code>&lt;dt&gt;</code></dt>
	<dd>Terme à décrire.</dd>
	<dt><code>&lt;dd&gt;</code></dt>
	<dd>Définition d'un terme.</dd>
	<dt><code>&lt;strong&gt;</code></dt>
	<dd>Élément de haute importance. Affiché par défaut en gras.</dd>
	<dt><code>&lt;em&gt;</code></dt>
	<dd>Emphase (mise en valeur). Affiché par défaut en italique.</dd>
	<dt><code>&lt;cite&gt;</code></dt>
	<dd>Élément de citation, contenant le titre d'une œuvre.</dd>
	<dt><code>&lt;q&gt;</code></dt>
	<dd>Élément de citation en incise.</dd>
	<dt><code>&lt;blockquote&gt;</code></dt>
	<dd>Élément de bloc de citation.</dd>
	<dt><code>&lt;sub&gt;</code></dt>
	<dd>Indice.</dd>
	<dt><code>&lt;sup&gt;</code></dt>
	<dd>Exposant.</dd>
	<dt><code>&lt;small&gt;</code></dt>
	<dd>Petits caractères.</dd>
	<dt><code>&lt;pre&gt;</code></dt>
	<dd>Texte préformaté (les espaces sont conservés).</dd>
	<dt><code>&lt;code&gt;</code></dt>
	<dd>Élément de code en ligne.</dd>
	<dt><code>&lt;u&gt;</code></dt>
	<dd>Soulignement.</dd>
	<dt><code>&lt;i&gt;</code></dt>
	<dd>Italique.</dd>
	<dt><code>&lt;b&gt;</code></dt>
	<dd>Gras.</dd>
</dl>


## Les liens
<dl>
	<dt><code>&lt;a&gt;</code></dt>
	<dd>Un lien hypertexte.</dd>
	<dt><code>@href</code></dt>
	<dd>Contient une URL absolue ou relative.</dd>
	<dt><code>@href="mailto:adressMail"</code></dt>
	<dd>Un lien hypertexte vers une adresse mail.</dd>
	<dt><code>@href="tel:+33123456789"</code></dt>
	<dd>Un lien vers un numéro de téléphone.</dd>
	<dt><code>@target</code></dt>
	<dd>Contexte d'affichage de l'URL. Valeurs <code>"_blank"</code> (nouvel onglet) | <code>"_self"</code> (onglet actuel, par défaut).</dd>
</dl>

## Les sections
<dl>
	<dt><code>&lt;header&gt;</code></dt>
	<dd>En-tête de la page web. Elle peut contenir un titre et/ou la navigation par exemple.</dd>
	<dt><code>&lt;footer&gt;</code></dt>
	<dd>Pied de page.</dd>
	<dt><code>&lt;nav&gt;</code></dt>
	<dd>Navigation.</dd>
	<dt><code>&lt;article&gt;</code></dt>
	<dd>Contenu autonome.</dd>
	<dt><code>&lt;section&gt;</code></dt>
	<dd>Regroupe des contenus liés.</dd>
	<dt><code>&lt;aside&gt;</code></dt>
	<dd>Aparté.</dd>
</dl>

## Balises et attributs génériques
<dl>
	<dt><code>&lt;div&gt;</code></dt>
	<dd>Conteneur générique de type <em>bloc</em>.</dd>
	<dt><code>&lt;span&gt;</code></dt>
	<dd>Conteneur générique de type <em>inline</em>.</dd>
	<dt><code>@id</code></dt>
	<dd>Un identifiant unique.</dd>
	<dt><code>@class</code></dt>
	<dd>Une liste de classes associées à l'élément courant pour être manipulé avec CSS et/ou Javascript.</dd>
	<dt><code>@contenteditable="true"</code></dt>
	<dd>Contenu éditable.</dd>
	<dt><code>@dir</code></dt>
	<dd>Direction du texte. <code>dir="ltr"</code> (gauche à droite) | <code>dir="rtl"</code> (droite à gauche)</dd>
</dl>

## Formulaires
<dl>
	<dt><code>&lt;form&gt;</code></dt>
	<dd>Un formulaire.</dd>
	<dt><code>&lt;fieldset&gt;</code></dt>
	<dd>Un groupe de champs dans un formulaire.</dd>
	<dt><code>&lt;legend&gt;</code></dt>
	<dd>Une description pour un groupe de champs.</dd>
	<dt><code>&lt;input&gt;</code></dt>
	<dd>Un champ de formulaire.</dd>
	<dt><code>&lt;input type="text"&gt;</code></dt>
	<dd>Un champ texte.</dd>
	<dt><code>&lt;input type="checkbox"&gt;</code></dt>
	<dd>Un champ case à cocher.</dd>
	<dt><code>&lt;input type="radio"&gt;</code></dt>
	<dd>Un champ bouton radio.</dd>
	<dt><code>&lt;input type="submit"&gt;</code></dt>
	<dd>Un bouton de soumission.</dd>
	<dt><code>&lt;input type="email"&gt;</code></dt>
	<dd>Un champ texte pour un adresse mail.</dd>
	<dt><code>&lt;input type="url"&gt;</code></dt>
	<dd>Un champ texte pour une url.</dd>
	<dt><code>&lt;input type="number"&gt;</code></dt>
	<dd>Un champ texte pour un nombre.</dd>
	<dt><code>&lt;textarea&gt;</code></dt>
	<dd>Une boite de texte.</dd>
	<dt><code>&lt;label&gt;</code></dt>
	<dd>Le nom d'un champ de formulaire.</dd>
	<dt><code>&lt;select&gt;</code></dt>
	<dd>Une liste d'option.</dd>
	<dt><code>&lt;option&gt;</code></dt>
	<dd>Une option (choix) dans une liste de formulaire.</dd>
	<dt><code>&lt;optgroup&gt;</code></dt>
	<dd>Un groupe d'options (choix) dans un liste de formulaire.</dd>
</dl>


## Les médias
<dl>
	<dt><code>&lt;img/&gt;</code></dt>
	<dd>Image.</dd>
	<dt><code>@src</code></dt>
	<dd>Url d'un média. Peut être utilisé avec les balises <code>&lt;img/&gt;</code>, <code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code> et <code>&lt;source&gt;</code>.</dd>
	<dt><code>@alt</code></dt>
	<dd>Description de l'image.</dd>
	<dt><code>@width</code></dt>
	<dd>La largeur d'une image (<code>&lt;img/&gt;</code>) ou d'une vidéo (<code>&lt;video&gt;</code>).</dd>
	<dt><code>&lt;audio&gt;</code></dt>
	<dd>Contenu sonore. S'utilise avec un attribut <code>@src</code> ou avec un ou plusieurs sous-éléments <code>&lt;source&gt;</code>.</dd>
	<dt><code>&lt;video&gt;</code></dt>
	<dd>Contenu vidéo. S'utilise avec un attribut <code>@src</code> ou avec un ou plusieurs sous-éléments <code>&lt;source&gt;</code>.</dd>
	<dt><code>@control="true"</code></dt>
	<dd>Utiliser les contrôles du navigateur pour les contenus audio et vidéo.</dd>
	<dt><code>&lt;source/&gt;</code></dt>
	<dd>Contenu média pour les balises <code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code> et <code>&lt;picture&gt;</code> (en remplacement de l'attribut <code>@src</code>).</dd>
	<dt><code>@type</code></dt>
	<dd>Le type MIME de la ressource.</dd>
	<dt><code>@media</code></dt>
	<dd>Contenu média pour les balises <code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code> et <code>&lt;picture&gt;</code> (en remplacement de l'attribut <code>@src</code>).</dd>
	<dt><code>&lt;figure&gt;</code></dt>
	<dd>Un contenu autonome. Généralement une image, une figure, un graphe, un diagramme, ou un fragment de code.</dd>
	<dt><code>&lt;figcaption&gt;</code></dt>
	<dd>Une légende pour un élément <code>&lt;figure&gt;</code>.</dd>
</dl>

```html
<audio controls="true" src="/audio/piste01.mp3" />
<audio controls="true">
  <source src="piste01.mp3">
	<source src="piste01.ogg">
	<p>
	  Audio HTML5 non pris en charge.
		<a href="piste01.mp3">Télécharger l'audio</a>.
	</p>
</audio>
```

## Médias adaptatifs
<dl>
	<dt><code>&lt;picture&gt;</code></dt>
	<dd>Image responsive. S'utilise conjointement avec un sous-élément <code>&lt;img/&gt;</code> et un ou plusieurs sous-éléments <code>&lt;source&gt;</code>.</dd>
	<dt><code>@srcset</code></dt>
	<dd>Une liste d'images sous la forme de chaînes de caractères séparées par une virgule. Chaque chaîne est composée d'une URL et, séparé par un espace, soit d'un indicateur de largeur suivi directement de 'w', soit d'un indicateur de densité de pixel suivi directement de 'x'. Pour les balises <code>&lt;img&gt;</code> et <code>&lt;source&gt;</code> (en remplacement de l'attribut <code>@src</code>).</dd>
	<dt><code>@sizes</code></dt>
	<dd>Une liste de conditions sous la forme de chaînes de caractères séparées par une virgule afin de définir quelle image afficher. Chaque chaîne est composée d'une condition (media) et, séparé par un espace, la largeur de l'image si la condition est vraie. Pour les balises <code>&lt;img&gt;</code> et <code>&lt;source&gt;</code>.</dd>
	<dt><code>@media</code></dt>
	<dd>Une condition pour un média.</dd>
</dl>

```html
<picture>
	<!-- Un @média par source, si @srcset ne contient pas de liste -->
  <source srcset="bassedet.jpg" media="(max-width: 500px)"/>
	<source srcset="hautedef.jpg" media="(max-width: 1024px)"/>
	<!-- Un img pour le chargement par défaut -->
	<img src="hautedef.jpg" alt="paysage"/>
</picture>
<!-- ou -->

<img srcset="bassedef.jpg 495w, hautedef.jpg 1024w"
		 sizes="(max-width: 500px) 495px, 1024px"
		 src="hautedef.jpg"
		 alt="paysage">
<!-- @sizes si @srcset  contient une liste  et un @src pour  le traitement par défaut. -->
```

## Tableau
<dl>
	<dt><code>&lt;table&gt;</code></dt>
	<dd>Un tableau.</dd>
	<dt><code>&lt;thead&gt;</code></dt>
	<dd>En-tête d'un tableau.</dd>
	<dt><code>&lt;tbody&gt;</code></dt>
	<dd>Corps d'un tableau.</dd>
	<dt><code>&lt;tfoot&gt;</code></dt>
	<dd>Pied d'un tableau.</dd>
	<dt><code>&lt;th&gt;</code></dt>
	<dd>En-tête d'une ligne ou d'une colonne.</dd>
	<dt><code>&lt;tr&gt;</code></dt>
	<dd>Ligne d'un tableau.</dd>
	<dt><code>&lt;th&gt;</code></dt>
	<dd>Cellule d'en-tête d'une ligne ou d'une colonne.</dd>
	<dt><code>&lt;td&gt;</code></dt>
	<dd>Une cellule.</dd>
	<dt><code>@colspan</code></dt>
	<dd>Nombre de colonnes sur lesquelles s'étend la cellule.</dd>
	<dt><code>@rowspan</code></dt>
	<dd>Nombre de lignes sur lesquelles s'étend la cellule.</dd>
</dl>

```html
<table>
   <thead>
      <tr>
         <th>Achat boulangerie</th>
         <th>Prix</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <th>Baguette</th>
         <td rowspan="2">1€</td>
      </tr>
      <tr>
         <th>Croissant</th>
      </tr>
      <tr>
         <th>Pain de campagne</th>
         <td>2€</td>
      </tr>
   </tbody>
   <tfoot>
      <tr>
         <th>total</th>
         <td>4€</td>
      </tr>
   </tfoot>
</table>
```
