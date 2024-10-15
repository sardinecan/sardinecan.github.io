import{s as kt,n as Re}from"./scheduler.DaEglZbh.js";import{S as mt,i as Et,e as a,s as o,H as c,c as l,k as d,f as p,a as i,l as u,d as t,m as k,g as n}from"./index.B_-7WD2a.js";function yt(at){let r,Ae="📄 <strong>Cheatsheet SQL</strong>",W,m,xe="📌 <strong>Table des Matières</strong>",J,E,Ne='<li><a href="#introduction">Introduction</a></li> <li><a href="#commandes-de-base">Commandes de Base</a></li> <li><a href="#clauses-de-filtrage">Clauses de Filtrage</a></li> <li><a href="#jointures">Jointures</a></li> <li><a href="#groupement-et-agregation">Groupement et Agrégation</a></li> <li><a href="#sous-requetes">Sous-requêtes</a></li> <li><a href="#manipulation-des-donnees">Manipulation des Données</a></li> <li><a href="#gestion-des-tables">Gestion des Tables</a></li> <li><a href="#fonctions">Fonctions</a></li>',V,Y,Q,y,ge='📚 Introduction <span id="introduction"></span>',j,T,qe="SQL (Structured Query Language) est le langage standard pour gérer et manipuler des bases de données relationnelles. Cette cheatsheet couvre les commandes essentielles pour l’interaction avec les bases de données SQL.",K,L,Se='🔍 Commandes de Base <span id="commandes-de-base"></span>',X,h,Oe="<thead><tr><th>Commande</th> <th>Description</th></tr></thead> <tbody><tr><td><code>SELECT</code></td> <td>Récupérer des données</td></tr> <tr><td><code>FROM</code></td> <td>Spécifier la table</td></tr> <tr><td><code>WHERE</code></td> <td>Filtrer les résultats</td></tr> <tr><td><code>ORDER BY</code></td> <td>Trier les résultats</td></tr> <tr><td><code>LIMIT</code></td> <td>Limiter le nombre de résultats</td></tr></tbody>",z,f,Ie="Exemple",Z,v,$,lt=`<code class="language-sql"><span class="token keyword">SELECT</span> nom<span class="token punctuation">,</span> age
<span class="token keyword">FROM</span> employes
<span class="token keyword">WHERE</span> age <span class="token operator">></span> <span class="token number">30</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> age <span class="token keyword">DESC</span>
<span class="token keyword">LIMIT</span> <span class="token number">10</span><span class="token punctuation">;</span></code>`,ee,_,De='Clauses de filtrage <span id="clauses-de-filtrage"></span>',te,w,Be="<thead><tr><th>Commande</th> <th>Description</th></tr></thead> <tbody><tr><td><code>WHERE</code></td> <td>Filtrer les lignes selon une condition</td></tr> <tr><td><code>AND</code></td> <td>Combiner plusieurs conditions</td></tr> <tr><td><code>OR</code></td> <td>Choisir parmi plusieurs conditions</td></tr> <tr><td><code>NOT</code></td> <td>Nier une condition</td></tr> <tr><td><code>IN</code></td> <td>Correspondance dans une liste</td></tr> <tr><td><code>BETWEEN</code></td> <td>Plage de valeurs</td></tr> <tr><td><code>LIKE</code></td> <td>Correspondance de motif</td></tr> <tr><td><code>IS NULL</code></td> <td>Vérifier si une valeur est nulle</td></tr></tbody>",se,H,ne,ot=`<code class="language-sql"><span class="token keyword">SELECT</span> nom<span class="token punctuation">,</span> salaire
<span class="token keyword">FROM</span> employes
<span class="token keyword">WHERE</span> salaire <span class="token operator">BETWEEN</span> <span class="token number">40000</span> <span class="token operator">AND</span> <span class="token number">60000</span>
<span class="token operator">AND</span> nom <span class="token operator">LIKE</span> <span class="token string">'J%'</span><span class="token punctuation">;</span></code>`,ae,b,Fe='Jointures <span id="jointures"></span>',le,C,Ue="<thead><tr><th>Type de Jointure</th> <th>Description</th></tr></thead> <tbody><tr><td><code>INNER JOIN</code></td> <td>Renvoie les lignes ayant des correspondances</td></tr> <tr><td><code>LEFT JOIN</code></td> <td>Renvoie toutes les lignes de la table de gauche et les correspondances de la table de droite</td></tr> <tr><td><code>RIGHT JOIN</code></td> <td>Renvoie toutes les lignes de la table de droite et les correspondances de la table de gauche</td></tr> <tr><td><code>FULL JOIN</code></td> <td>Renvoie toutes les lignes quand il y a une correspondance dans l’une ou l’autre des tables</td></tr></tbody>",oe,M,pe,pt=`<code class="language-sql"><span class="token keyword">SELECT</span> e<span class="token punctuation">.</span>nom<span class="token punctuation">,</span> d<span class="token punctuation">.</span>nom_departement
<span class="token keyword">FROM</span> employes e
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> departements d <span class="token keyword">ON</span> e<span class="token punctuation">.</span>departement_id <span class="token operator">=</span> d<span class="token punctuation">.</span>id<span class="token punctuation">;</span></code>`,de,R,Pe='Groupement et agrégation <span id="groupement-et-agregation"></span>',re,A,Ge="<thead><tr><th>Commande</th> <th>Description</th></tr></thead> <tbody><tr><td><code>GROUP BY</code></td> <td>Grouper les lignes qui ont des valeurs identiques</td></tr> <tr><td><code>HAVING</code></td> <td>Filtrer les groupes</td></tr> <tr><td><code>COUNT</code></td> <td>Compter le nombre de lignes</td></tr> <tr><td><code>SUM</code></td> <td>Calculer la somme</td></tr> <tr><td><code>AVG</code></td> <td>Calculer la moyenne</td></tr> <tr><td><code>MIN</code></td> <td>Trouver la valeur minimale</td></tr> <tr><td><code>MAX</code></td> <td>Trouver la valeur maximale</td></tr></tbody>",ce,x,ie,dt=`<code class="language-sql"><span class="token keyword">SELECT</span> departement_id<span class="token punctuation">,</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salaire<span class="token punctuation">)</span> <span class="token keyword">AS</span> salaire_moyen
<span class="token keyword">FROM</span> employes
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> departement_id
<span class="token keyword">HAVING</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salaire<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">50000</span><span class="token punctuation">;</span></code>`,ue,N,We='Sous-requêtes <span id="sous-requetes"></span>',ke,g,Je="<thead><tr><th>Type</th> <th>Description</th></tr></thead> <tbody><tr><td><code>Sous-requête dans SELECT</code></td> <td>Utiliser une requête dans une autre</td></tr> <tr><td><code>Sous-requête dans FROM</code></td> <td>Utiliser une requête comme une table</td></tr> <tr><td><code>Sous-requête dans WHERE</code></td> <td>Utiliser une requête pour filtrer</td></tr></tbody>",me,q,Ee,rt=`<code class="language-sql"><span class="token keyword">SELECT</span> nom<span class="token punctuation">,</span> salaire
<span class="token keyword">FROM</span> employes
<span class="token keyword">WHERE</span> salaire <span class="token operator">></span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salaire<span class="token punctuation">)</span> <span class="token keyword">FROM</span> employes<span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,ye,S,Ve='Manipulation des données <span id="manipulation-des-donnees"></span>',Te,O,Ye="<thead><tr><th>Commande</th> <th>Description</th></tr></thead> <tbody><tr><td><code>INSERT INTO</code></td> <td>Insérer des nouvelles lignes</td></tr> <tr><td><code>UPDATE</code></td> <td>Modifier les lignes existantes</td></tr> <tr><td><code>DELETE FROM</code></td> <td>Supprimer des lignes</td></tr></tbody>",Le,I,he,ct=`<code class="language-sql"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> employes <span class="token punctuation">(</span>nom<span class="token punctuation">,</span> salaire<span class="token punctuation">,</span> departement_id<span class="token punctuation">)</span>
<span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'Marie Dupont'</span><span class="token punctuation">,</span> <span class="token number">60000</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">UPDATE</span> employes
<span class="token keyword">SET</span> salaire <span class="token operator">=</span> salaire <span class="token operator">*</span> <span class="token number">1.1</span>
<span class="token keyword">WHERE</span> departement_id <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> employes
<span class="token keyword">WHERE</span> salaire <span class="token operator">&lt;</span> <span class="token number">30000</span><span class="token punctuation">;</span></code>`,fe,D,Qe='Gestion des tables <span id="gestion-des-tables"></span>',ve,B,je="<thead><tr><th>Commande</th> <th>Description</th></tr></thead> <tbody><tr><td><code>CREATE TABLE</code></td> <td>Créer une nouvelle table</td></tr> <tr><td><code>ALTER TABLE</code></td> <td>Modifier une table existante</td></tr> <tr><td><code>DROP TABLE</code></td> <td>Supprimer une table</td></tr> <tr><td><code>CREATE INDEX</code></td> <td>Créer un index</td></tr> <tr><td><code>DROP INDEX</code></td> <td>Supprimer un index</td></tr></tbody>",_e,F,we,it=`<code class="language-sql"><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> departements <span class="token punctuation">(</span>
    id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>
    nom_departement <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> employes
<span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> adresse <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> anciennes_donnees<span class="token punctuation">;</span></code>`,He,U,Ke='Fonctions <span id="fonctions"></span>',be,P,Xe="<thead><tr><th>Fonction</th> <th>Description</th></tr></thead> <tbody><tr><td><code>NOW()</code></td> <td>Obtenir la date et l’heure actuelles</td></tr> <tr><td><code>COALESCE</code></td> <td>Retourner la première valeur non NULL</td></tr> <tr><td><code>IFNULL</code></td> <td>Retourner une valeur de remplacement si NULL</td></tr> <tr><td><code>LENGTH</code></td> <td>Longueur d’une chaîne</td></tr> <tr><td><code>SUBSTRING</code></td> <td>Extraire une sous-chaîne</td></tr> <tr><td><code>ROUND</code></td> <td>Arrondir un nombre</td></tr></tbody>",Ce,G,Me,ut=`<code class="language-sql"><span class="token keyword">SELECT</span> nom<span class="token punctuation">,</span> <span class="token function">ROUND</span><span class="token punctuation">(</span>salaire<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> salaire_arrondi
<span class="token keyword">FROM</span> employes
<span class="token keyword">WHERE</span> <span class="token keyword">COALESCE</span><span class="token punctuation">(</span>adresse<span class="token punctuation">,</span> <span class="token string">'Adresse non fournie'</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">'Adresse non fournie'</span><span class="token punctuation">;</span></code>`;return{c(){r=a("h1"),r.innerHTML=Ae,W=o(),m=a("h2"),m.innerHTML=xe,J=o(),E=a("ul"),E.innerHTML=Ne,V=o(),Y=a("hr"),Q=o(),y=a("h2"),y.innerHTML=ge,j=o(),T=a("p"),T.textContent=qe,K=o(),L=a("h2"),L.innerHTML=Se,X=o(),h=a("table"),h.innerHTML=Oe,z=o(),f=a("h3"),f.textContent=Ie,Z=o(),v=a("pre"),$=new c(!1),ee=o(),_=a("h2"),_.innerHTML=De,te=o(),w=a("table"),w.innerHTML=Be,se=o(),H=a("pre"),ne=new c(!1),ae=o(),b=a("h2"),b.innerHTML=Fe,le=o(),C=a("table"),C.innerHTML=Ue,oe=o(),M=a("pre"),pe=new c(!1),de=o(),R=a("h2"),R.innerHTML=Pe,re=o(),A=a("table"),A.innerHTML=Ge,ce=o(),x=a("pre"),ie=new c(!1),ue=o(),N=a("h2"),N.innerHTML=We,ke=o(),g=a("table"),g.innerHTML=Je,me=o(),q=a("pre"),Ee=new c(!1),ye=o(),S=a("h2"),S.innerHTML=Ve,Te=o(),O=a("table"),O.innerHTML=Ye,Le=o(),I=a("pre"),he=new c(!1),fe=o(),D=a("h2"),D.innerHTML=Qe,ve=o(),B=a("table"),B.innerHTML=je,_e=o(),F=a("pre"),we=new c(!1),He=o(),U=a("h2"),U.innerHTML=Ke,be=o(),P=a("table"),P.innerHTML=Xe,Ce=o(),G=a("pre"),Me=new c(!1),this.h()},l(e){r=l(e,"H1",{"data-svelte-h":!0}),d(r)!=="svelte-18jzxla"&&(r.innerHTML=Ae),W=p(e),m=l(e,"H2",{"data-svelte-h":!0}),d(m)!=="svelte-qt2mhr"&&(m.innerHTML=xe),J=p(e),E=l(e,"UL",{"data-svelte-h":!0}),d(E)!=="svelte-ngw3wc"&&(E.innerHTML=Ne),V=p(e),Y=l(e,"HR",{}),Q=p(e),y=l(e,"H2",{"data-svelte-h":!0}),d(y)!=="svelte-1rx62y6"&&(y.innerHTML=ge),j=p(e),T=l(e,"P",{"data-svelte-h":!0}),d(T)!=="svelte-1ivrtin"&&(T.textContent=qe),K=p(e),L=l(e,"H2",{"data-svelte-h":!0}),d(L)!=="svelte-1weyjkt"&&(L.innerHTML=Se),X=p(e),h=l(e,"TABLE",{"data-svelte-h":!0}),d(h)!=="svelte-1dinfrq"&&(h.innerHTML=Oe),z=p(e),f=l(e,"H3",{"data-svelte-h":!0}),d(f)!=="svelte-vc1l78"&&(f.textContent=Ie),Z=p(e),v=l(e,"PRE",{class:!0});var s=i(v);$=u(s,!1),s.forEach(t),ee=p(e),_=l(e,"H2",{"data-svelte-h":!0}),d(_)!=="svelte-1oxm0y5"&&(_.innerHTML=De),te=p(e),w=l(e,"TABLE",{"data-svelte-h":!0}),d(w)!=="svelte-vk5smy"&&(w.innerHTML=Be),se=p(e),H=l(e,"PRE",{class:!0});var ze=i(H);ne=u(ze,!1),ze.forEach(t),ae=p(e),b=l(e,"H2",{"data-svelte-h":!0}),d(b)!=="svelte-8cr0or"&&(b.innerHTML=Fe),le=p(e),C=l(e,"TABLE",{"data-svelte-h":!0}),d(C)!=="svelte-1hntifk"&&(C.innerHTML=Ue),oe=p(e),M=l(e,"PRE",{class:!0});var Ze=i(M);pe=u(Ze,!1),Ze.forEach(t),de=p(e),R=l(e,"H2",{"data-svelte-h":!0}),d(R)!=="svelte-1atisut"&&(R.innerHTML=Pe),re=p(e),A=l(e,"TABLE",{"data-svelte-h":!0}),d(A)!=="svelte-1kdklop"&&(A.innerHTML=Ge),ce=p(e),x=l(e,"PRE",{class:!0});var $e=i(x);ie=u($e,!1),$e.forEach(t),ue=p(e),N=l(e,"H2",{"data-svelte-h":!0}),d(N)!=="svelte-6qpmyq"&&(N.innerHTML=We),ke=p(e),g=l(e,"TABLE",{"data-svelte-h":!0}),d(g)!=="svelte-17mim8g"&&(g.innerHTML=Je),me=p(e),q=l(e,"PRE",{class:!0});var et=i(q);Ee=u(et,!1),et.forEach(t),ye=p(e),S=l(e,"H2",{"data-svelte-h":!0}),d(S)!=="svelte-1cw0515"&&(S.innerHTML=Ve),Te=p(e),O=l(e,"TABLE",{"data-svelte-h":!0}),d(O)!=="svelte-7ydvg9"&&(O.innerHTML=Ye),Le=p(e),I=l(e,"PRE",{class:!0});var tt=i(I);he=u(tt,!1),tt.forEach(t),fe=p(e),D=l(e,"H2",{"data-svelte-h":!0}),d(D)!=="svelte-gncxbf"&&(D.innerHTML=Qe),ve=p(e),B=l(e,"TABLE",{"data-svelte-h":!0}),d(B)!=="svelte-1fgoy1l"&&(B.innerHTML=je),_e=p(e),F=l(e,"PRE",{class:!0});var st=i(F);we=u(st,!1),st.forEach(t),He=p(e),U=l(e,"H2",{"data-svelte-h":!0}),d(U)!=="svelte-dsna33"&&(U.innerHTML=Ke),be=p(e),P=l(e,"TABLE",{"data-svelte-h":!0}),d(P)!=="svelte-wr2qh9"&&(P.innerHTML=Xe),Ce=p(e),G=l(e,"PRE",{class:!0});var nt=i(G);Me=u(nt,!1),nt.forEach(t),this.h()},h(){$.a=null,k(v,"class","language-sql"),ne.a=null,k(H,"class","language-sql"),pe.a=null,k(M,"class","language-sql"),ie.a=null,k(x,"class","language-sql"),Ee.a=null,k(q,"class","language-sql"),he.a=null,k(I,"class","language-sql"),we.a=null,k(F,"class","language-sql"),Me.a=null,k(G,"class","language-sql")},m(e,s){n(e,r,s),n(e,W,s),n(e,m,s),n(e,J,s),n(e,E,s),n(e,V,s),n(e,Y,s),n(e,Q,s),n(e,y,s),n(e,j,s),n(e,T,s),n(e,K,s),n(e,L,s),n(e,X,s),n(e,h,s),n(e,z,s),n(e,f,s),n(e,Z,s),n(e,v,s),$.m(lt,v),n(e,ee,s),n(e,_,s),n(e,te,s),n(e,w,s),n(e,se,s),n(e,H,s),ne.m(ot,H),n(e,ae,s),n(e,b,s),n(e,le,s),n(e,C,s),n(e,oe,s),n(e,M,s),pe.m(pt,M),n(e,de,s),n(e,R,s),n(e,re,s),n(e,A,s),n(e,ce,s),n(e,x,s),ie.m(dt,x),n(e,ue,s),n(e,N,s),n(e,ke,s),n(e,g,s),n(e,me,s),n(e,q,s),Ee.m(rt,q),n(e,ye,s),n(e,S,s),n(e,Te,s),n(e,O,s),n(e,Le,s),n(e,I,s),he.m(ct,I),n(e,fe,s),n(e,D,s),n(e,ve,s),n(e,B,s),n(e,_e,s),n(e,F,s),we.m(it,F),n(e,He,s),n(e,U,s),n(e,be,s),n(e,P,s),n(e,Ce,s),n(e,G,s),Me.m(ut,G)},p:Re,i:Re,o:Re,d(e){e&&(t(r),t(W),t(m),t(J),t(E),t(V),t(Y),t(Q),t(y),t(j),t(T),t(K),t(L),t(X),t(h),t(z),t(f),t(Z),t(v),t(ee),t(_),t(te),t(w),t(se),t(H),t(ae),t(b),t(le),t(C),t(oe),t(M),t(de),t(R),t(re),t(A),t(ce),t(x),t(ue),t(N),t(ke),t(g),t(me),t(q),t(ye),t(S),t(Te),t(O),t(Le),t(I),t(fe),t(D),t(ve),t(B),t(_e),t(F),t(He),t(U),t(be),t(P),t(Ce),t(G))}}}const ht={title:"SQL - Cheatsheet",date:"2024-06-27",author:"Josselin Morvan",category:"sql",keywords:"cheatsheet ; sql"};class ft extends mt{constructor(r){super(),Et(this,r,null,yt,kt,{})}}export{ft as default,ht as metadata};