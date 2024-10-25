import{s as _i,n as Qt}from"./scheduler.DaEglZbh.js";import{S as Li,i as Hi,e as n,s as u,c as s,k as o,f as a,g as l,d as i}from"./index.B_-7WD2a.js";function Ii(hi){let r,Yt="Pictoria",ke,p,$t='<li><a href="https://pictoria.hypotheses.org/" rel="nofollow">PictorIA</a></li> <li><a href="https://pictoria.hypotheses.org/1520" rel="nofollow">Programme journée-atelier du 15 mai 2024</a></li>',ye,v,gt="Le consortium pictoria",Ae,m,el="Présentation",Fe,d,tl="<li>cartographie des outils diponibles, et mettre en lumière les points forts mais également les lacunes. Orienté le développement d’outils spécifiques.</li> <li>protocole, référentiels tutoriels (partage des éfforts, créer des bases tutoriels, aborder les questions éthiques et juridiques)</li> <li>proposer des formations et ateliers (accompagnement, formation des jeunes chercheurs)</li> <li>prototypage</li>",ze,x,ll="Feuille de route",Se,f,il="<li>15/05 : journée atelier</li> <li>26/06 : 1ere séance du séminaire atelier pictorIA : « IA et IIIF »</li> <li>11/09 : 3e séance</li> <li>17/10 : 4e séance</li> <li>6-8/11 : Journée DHNord à Lille</li>",Ee,C,nl="Le BnF Datalab et IA",Ue,c,sl="En 2021 la BnF s’est donnée une feuille de route IA avec un horizon 2026 pour les premières applications. Notons notamment Gallica-Images, développemt d’outils d’annotation de corpus, modèles HTR sur des langues peu dotées, etc.",Ne,h,ol="La BnF datalab est une porte d’entrée pour les chercheurs pour la fouille l’accès aux données numériques de la BnF (archives du web, métadonnées bibliographiques). Le Datalab propose aussi des formations pour les chercheurs. Avec Huma-num, le Datalab propose des appels à projet et fourni un accompagnement pour les projets retenus.",De,_,ul="IIIF et IA",Re,L,al="Jean-Philippe Moreux",Be,H,rl="IIIF et <em>workflow IA</em>",Je,I,pl=`Au tournant des années 2017-18 on perçois un accelération, le protocole donne accès aux images directement depuis les entrepôts de données (on ne travaille plus à partir de fichiers mais à partir d’URL, donc des flow de données), ce qui facilite le prototypage, etc.
Workflow / pipline`,Ve,q,vl=`<li><p>IIIF -&gt; IIIF segmentation -&gt; base de données XML, etc.</p></li> <li><p>IIIF -&gt; HTR</p></li> <li><p>recherche d’information : NER
Facilite le développement d’activié scintifique ou de prototypage.
Mais quelques inconvénients</p></li> <li><p>pression sur les serveurs IIIF, si corpus massif, ce n’est pas ce qu’il y a de plus efficace</p></li> <li><p>traitement d’image : si enchainement d’étape il est plus facile de faire une copie locale pour ne pas le télécharger plusieurs fois.</p></li>`,Ge,b,ml="Boîte à outils IIIF",Oe,T,dl=`Projet Mezanno : Workflow léger pour les HN, projet d’annotation sans avoir d’infrastructures numérique à dépoyer sur sa machine (serveur IIIF d’annotation).
Pense Workflow Lourd
Possibilité aussi d’intégrer IIIF dans des outils (eScriptorium, Transkribus)`,Ke,P,xl="IIIF pour la dessimination des jeux de données",We,M,fl=`IIIF comme une format de production ou d’échange de jeux de données, mais aussi comme format de conservation des jeux de données.
D’autre part c’est du JSON, donc compris par les informatitions, qui peuvent utiliser ces données comme format pivot pour une utilisation avec l’IA.`,Xe,j,Cl="Voir projets",Ze,w,cl='<li><a href="https://www.unige.ch/visualcontagions/" rel="nofollow">Visual Contation</a></li> <li><a href="https://www.newseye.eu/" rel="nofollow">NewsEye</a></li> <li><a href="https://gallicapix.bnf.fr/rest?run=findIllustrations-form.xq" rel="nofollow">GallicaPix</a> (précurseur de Gallica Images) (manifestes Gallica enrichis avec les annotation IA de GallicaPix)</li> <li><a href="https://projet.biblissima.fr/fr" rel="nofollow">Bibliossima+</a> : Manifestes IIIF comme liste de résultats</li> <li><a href="https://vikusviewer.fh-potsdam.de/" rel="nofollow">Vikus</a> : Visualiseur de collections IIIF, conçu comme un outil de navigation et de recherche dans des collections iconographiques.</li>',Qe,k,hl="Ontologie et annotation : bonnes pratiques et cas d’usage",Ye,y,_l="Marion Charpier, musée des arts décoratifs",$e,A,Ll="L’ontologie",ge,F,Hl=`L’ontologie est l’ensemble des classes à annoter et des descriptions formelles explicites et précises de ces même classes.
Le jeu de données en CV (computeur vision), doit répondre à l’objet de l’étude, mais dois aussi permettre de générer un modèle robuste et complet.
Le modèle est toutefois toujours une réduction
Il faut`,et,z,Il="<li>définir précicément pour assurer l’homégénéité et l’annotation</li> <li>définition claire pour la bonne compréhension</li> <li>sans abiguïté pour éviter les biais.</li>",tt,S,ql="Application de l’ontologie dans l’annotation et retour",lt,E,bl=`<li>Cohérence et documentation de l’ontologie
<ul><li>Importation de la cohérence sémantique dans les annotation</li></ul></li> <li>Notion cléfs</li>`,it,U,Tl="Cas d’usage : le projet Royère",nt,N,Pl="Fonds de dessins consituté d’environ 18k items répartis en quatre grandes catégories",st,D,Ml="<li>les grandes gouaches</li> <li>les petites gouaches</li> <li>les calques</li>",ot,R,jl="rédaction d’une première ontologie afin de",ut,B,wl="<li>répondre au contraintes liés aux demandes sur le fonds</li> <li>intégrer la classification de Jean Royère</li> <li>respecter les cotrainte liées à la détection.</li>",at,J,kl="Entrainement d’un premier modèle, mais certains problème apparaisse (lampes tres végétalisées, qui se confondes avec les vraies plantes). Cela induit des biais qu’il faut désambiguiser par la rédaction d’une nouvelle ontologie. C’est un travail itératif.",rt,V,yl="Les outils <em>open-source</em> de Teklia pour le traitement de documents numérisés",pt,G,Al="Christopher Kermorvant",vt,O,Fl="Arkindex/Callico",mt,K,zl="plateforme développée par Teklia depuis 2019. Traitement de tout type de documents (pas que du HTR par exemple), scalable (possibilité de traiter 1000 ou 10K images). Cette plateforme est open-source depuis récemment. L’objectif est améliorer cette plateforme de manière collaborative.",dt,W,Sl="Stockage et gestion des documents",xt,X,El="Elle permet :",ft,Z,Ul="<li>import web, S3, ou IIIF</li> <li>support des images et PDF</li> <li>structuration hiérarchique</li>",Ct,Q,Nl="Annotation et validation",ct,Y,Dl="<li>zonage</li> <li>classification</li> <li>transcription</li> <li>clé valeur</li> <li>extraction d’entités-nommées</li> <li>groupement d’objet (exemple page de presse)</li>",ht,$,Rl="Intégration de modèles/algorithmes",_t,g,Bl="<li>intégration de n’importe quel langage/code/modèle</li> <li>code de base python fourni</li> <li>intégration par API</li> <li>déploiement par Docker</li> <li>entrainement par inférence</li>",Lt,ee,Jl="Exemple d’applications",Ht,te,Vl="<li>classification</li> <li>structuration (d’un livre par exemple / chapitre / section, etc)</li> <li>OCR/HTR</li> <li>extraction d’entités</li> <li>analyse de photo avec du <em>tagging</em></li>",It,le,Gl="Simara",qt,ie,Ol="Aux AN 2021-2023. Traitement de 400 000 fiches d’index, reconnaissance d’écriture manuscrite et extraction d’entité. C’est un modèle clés-valeurs qui segmente, transcrit et extrait les entités nommées.",bt,ne,Kl="SOCFACE",Tt,se,Wl="INED/PSE/SIAF/TEKLIA 2022-2025. Classificartion, structuration, reconnaissance et linking de 100 ans de recensements fr entre 1836 et 1936.",Pt,oe,Xl="Projet HikarIA",Mt,ue,Zl="2023-2026. Labélisation, détection d’objets, recherche par similarité pour une collection d’album de photographie japonaises du XIXe siècle.",jt,ae,Ql="Il y a beaucoup de modèles développés par énormément d’infrasctructures et finalement ce qui compte c’est de les évaluer, peu à peu il devient de moins en moins nécessaire des les créer <em>from scratch</em>.",wt,re,Yl="Teklia et l’Open-source",kt,pe,$l='<a href="https://gitlab.teklia.com/explore" rel="nofollow">https://gitlab.teklia.com/explore</a>.',yt,ve,gl="L’IA dans les sciences géographiques - l’exemple du cadastre napoléonien",At,me,ei="Dominique Andrieu et Barthélémy Serres",Ft,de,ti=`L’IA a été investi assez tôt pour traiter les images satellitaires, mais les cartes anciennes numérisées ont été délaissées. Le projet Veccar a développé l’apprentissage machine pour extraire les limites cadastrales du cadastre napoléonien.
L’IA a investi les outils métier (ArcGis)`,zt,xe,li=`Sans la vectorisation on ne peut rien faire, c’est en quelque sorte une phase d’annotation, qui prend beaucoup de temps.
La couple donnée cadastrale et données cadastrale vectorisées constitue la vérité de terrain qui sert à l’apprentissage du modèle.`,St,fe,ii="Méthode 1 détection de contours",Et,Ce,ni="Méthode ancienne, globalement les modèles arrivent à trouver les parcelles, mais sur certaines parties fines il y un sur-segmentation (par exemple les routes sont agrégée aux parcelles voisines)",Ut,ce,si="Méthode panoptique",Nt,he,oi=`Utilisé pour distinguer les zones bâties et zones non bâties. Globalement bonne confiance dans les détections du modèle pour les zones bâties et non bâties. mais la précision n’est pas optimale sur les contours
La généricité est relative (application d’un modèle fait sur l’ile rousse pour fréjus) ?`,Dt,_e,ui="Perspective",Rt,Le,ai="Lidée était ensuite de récupérer ces informations afin de l’implémenter dans des logiciels de gestion d’informations géographiques.",Bt,He,ri="“Le projet PENSE de l’INHA : annotation et enrichissement de corpus visuels en histoire de l’art et perspectives d’édition numérique scientifique multi-support à partir de données IIIF”",Jt,Ie,pi="Jean-Christophe Carius (INHA)",Vt,qe,vi='<img src="https://cms.zak.group/site/assets/files/4949/zak_group_curveseries_trevor_paglen_screen_08.1920x0.jpg" alt="Trevor Paglen, the treachery of Object Recognition"/>',Gt,be,mi="Accompagnement des chercheurs dans l’utilisation et l’appropriation des outils numériques. Le projet n’est pas né au départ avec l’idée d’utiliser l’IA, c’est un projet de web sémantique.",Ot,Te,di='Très rapidement le projet devient un moyen de reconstituer la boite d’archive enrichie des données de la recherche. <a href="https://barye.inha.fr/" rel="nofollow">Les papiers Barye</a> est le projet pilote.',Kt,Pe,xi=`Les matériaux que l’on trouve dans PENSE sont souvent multimodaux.
Sur certains projets le HTR a été utilisé, pas tellement pour la transcription, mais pour la segmentation. Parce qu’il n’y avait pas forcément suffisament de matériaux pour entrainer un modèle sur une seule main. D’autre par les chercheurs ont manifesté le besoin de prendre le temps de transcrire.
L’annotation a permis de connecter des données à d’autres base de données (<em>image as database</em>) voir projet <a href="https://karbowsky.inha.fr/" rel="nofollow">19 rue Spontini, Paris l’hôtel particulier de Jacques Doucet de 1907 à 1912</a>.`,Wt,Me,fi="Le projet PENSE peut être vu finalement sous deux angles :",Xt,je,Ci="<li>aspect enrichissement de la source</li> <li>édition numérique. Le travail se retrouve finalement synthétisé sour la forme d’une édition. C’est assez difficile de trouver le format d’une édition numérique (ergonomie, niveaux de lecture, etc.) Il y a véritablement tout un travail à faire du point de vue de la restitution de la source quand on travail avec l’IA.</li>",Zt,we,ci='<a href="https://invisu.cnrs.fr/project/pervisum-iiif-pour-ledition-scientifique-multisupport/" rel="nofollow">PerVisum</a> est un projet qui développe l’aspect d’article visuel multi support, et qui explore les différents formats éditoriaux.';return{c(){r=n("h1"),r.textContent=Yt,ke=u(),p=n("ul"),p.innerHTML=$t,ye=u(),v=n("h2"),v.textContent=gt,Ae=u(),m=n("h3"),m.textContent=el,Fe=u(),d=n("ul"),d.innerHTML=tl,ze=u(),x=n("h3"),x.textContent=ll,Se=u(),f=n("ul"),f.innerHTML=il,Ee=u(),C=n("h2"),C.textContent=nl,Ue=u(),c=n("p"),c.textContent=sl,Ne=u(),h=n("p"),h.textContent=ol,De=u(),_=n("h2"),_.textContent=ul,Re=u(),L=n("p"),L.textContent=al,Be=u(),H=n("h3"),H.innerHTML=rl,Je=u(),I=n("p"),I.textContent=pl,Ve=u(),q=n("ul"),q.innerHTML=vl,Ge=u(),b=n("h3"),b.textContent=ml,Oe=u(),T=n("p"),T.textContent=dl,Ke=u(),P=n("h3"),P.textContent=xl,We=u(),M=n("p"),M.textContent=fl,Xe=u(),j=n("p"),j.textContent=Cl,Ze=u(),w=n("ul"),w.innerHTML=cl,Qe=u(),k=n("h2"),k.textContent=hl,Ye=u(),y=n("p"),y.textContent=_l,$e=u(),A=n("h3"),A.textContent=Ll,ge=u(),F=n("p"),F.textContent=Hl,et=u(),z=n("ul"),z.innerHTML=Il,tt=u(),S=n("h3"),S.textContent=ql,lt=u(),E=n("ul"),E.innerHTML=bl,it=u(),U=n("h3"),U.textContent=Tl,nt=u(),N=n("p"),N.textContent=Pl,st=u(),D=n("ul"),D.innerHTML=Ml,ot=u(),R=n("p"),R.textContent=jl,ut=u(),B=n("ul"),B.innerHTML=wl,at=u(),J=n("p"),J.textContent=kl,rt=u(),V=n("h2"),V.innerHTML=yl,pt=u(),G=n("p"),G.textContent=Al,vt=u(),O=n("h3"),O.textContent=Fl,mt=u(),K=n("p"),K.textContent=zl,dt=u(),W=n("h4"),W.textContent=Sl,xt=u(),X=n("p"),X.textContent=El,ft=u(),Z=n("ul"),Z.innerHTML=Ul,Ct=u(),Q=n("h4"),Q.textContent=Nl,ct=u(),Y=n("ul"),Y.innerHTML=Dl,ht=u(),$=n("h4"),$.textContent=Rl,_t=u(),g=n("ul"),g.innerHTML=Bl,Lt=u(),ee=n("h4"),ee.textContent=Jl,Ht=u(),te=n("ul"),te.innerHTML=Vl,It=u(),le=n("h5"),le.textContent=Gl,qt=u(),ie=n("p"),ie.textContent=Ol,bt=u(),ne=n("h5"),ne.textContent=Kl,Tt=u(),se=n("p"),se.textContent=Wl,Pt=u(),oe=n("h5"),oe.textContent=Xl,Mt=u(),ue=n("p"),ue.textContent=Zl,jt=u(),ae=n("p"),ae.innerHTML=Ql,wt=u(),re=n("h4"),re.textContent=Yl,kt=u(),pe=n("p"),pe.innerHTML=$l,yt=u(),ve=n("h2"),ve.textContent=gl,At=u(),me=n("p"),me.textContent=ei,Ft=u(),de=n("p"),de.textContent=ti,zt=u(),xe=n("p"),xe.textContent=li,St=u(),fe=n("h3"),fe.textContent=ii,Et=u(),Ce=n("p"),Ce.textContent=ni,Ut=u(),ce=n("h3"),ce.textContent=si,Nt=u(),he=n("p"),he.textContent=oi,Dt=u(),_e=n("h3"),_e.textContent=ui,Rt=u(),Le=n("p"),Le.textContent=ai,Bt=u(),He=n("h2"),He.textContent=ri,Jt=u(),Ie=n("p"),Ie.textContent=pi,Vt=u(),qe=n("p"),qe.innerHTML=vi,Gt=u(),be=n("p"),be.textContent=mi,Ot=u(),Te=n("p"),Te.innerHTML=di,Kt=u(),Pe=n("p"),Pe.innerHTML=xi,Wt=u(),Me=n("p"),Me.textContent=fi,Xt=u(),je=n("ul"),je.innerHTML=Ci,Zt=u(),we=n("p"),we.innerHTML=ci},l(e){r=s(e,"H1",{"data-svelte-h":!0}),o(r)!=="svelte-1tvlk7v"&&(r.textContent=Yt),ke=a(e),p=s(e,"UL",{"data-svelte-h":!0}),o(p)!=="svelte-p7ergq"&&(p.innerHTML=$t),ye=a(e),v=s(e,"H2",{"data-svelte-h":!0}),o(v)!=="svelte-o0gi19"&&(v.textContent=gt),Ae=a(e),m=s(e,"H3",{"data-svelte-h":!0}),o(m)!=="svelte-14nafu8"&&(m.textContent=el),Fe=a(e),d=s(e,"UL",{"data-svelte-h":!0}),o(d)!=="svelte-12rwluo"&&(d.innerHTML=tl),ze=a(e),x=s(e,"H3",{"data-svelte-h":!0}),o(x)!=="svelte-vqrx40"&&(x.textContent=ll),Se=a(e),f=s(e,"UL",{"data-svelte-h":!0}),o(f)!=="svelte-1lvlmw5"&&(f.innerHTML=il),Ee=a(e),C=s(e,"H2",{"data-svelte-h":!0}),o(C)!=="svelte-1ur8qg5"&&(C.textContent=nl),Ue=a(e),c=s(e,"P",{"data-svelte-h":!0}),o(c)!=="svelte-gw6q41"&&(c.textContent=sl),Ne=a(e),h=s(e,"P",{"data-svelte-h":!0}),o(h)!=="svelte-r3wgkl"&&(h.textContent=ol),De=a(e),_=s(e,"H2",{"data-svelte-h":!0}),o(_)!=="svelte-7cjm6e"&&(_.textContent=ul),Re=a(e),L=s(e,"P",{"data-svelte-h":!0}),o(L)!=="svelte-128zql2"&&(L.textContent=al),Be=a(e),H=s(e,"H3",{"data-svelte-h":!0}),o(H)!=="svelte-1o8o2ae"&&(H.innerHTML=rl),Je=a(e),I=s(e,"P",{"data-svelte-h":!0}),o(I)!=="svelte-1rjyg5k"&&(I.textContent=pl),Ve=a(e),q=s(e,"UL",{"data-svelte-h":!0}),o(q)!=="svelte-11h3lpv"&&(q.innerHTML=vl),Ge=a(e),b=s(e,"H3",{"data-svelte-h":!0}),o(b)!=="svelte-mm9u2n"&&(b.textContent=ml),Oe=a(e),T=s(e,"P",{"data-svelte-h":!0}),o(T)!=="svelte-1948qro"&&(T.textContent=dl),Ke=a(e),P=s(e,"H3",{"data-svelte-h":!0}),o(P)!=="svelte-1eallya"&&(P.textContent=xl),We=a(e),M=s(e,"P",{"data-svelte-h":!0}),o(M)!=="svelte-1ecrff2"&&(M.textContent=fl),Xe=a(e),j=s(e,"P",{"data-svelte-h":!0}),o(j)!=="svelte-1p99d41"&&(j.textContent=Cl),Ze=a(e),w=s(e,"UL",{"data-svelte-h":!0}),o(w)!=="svelte-11gded9"&&(w.innerHTML=cl),Qe=a(e),k=s(e,"H2",{"data-svelte-h":!0}),o(k)!=="svelte-stya3r"&&(k.textContent=hl),Ye=a(e),y=s(e,"P",{"data-svelte-h":!0}),o(y)!=="svelte-1fkmxzz"&&(y.textContent=_l),$e=a(e),A=s(e,"H3",{"data-svelte-h":!0}),o(A)!=="svelte-1nca4a1"&&(A.textContent=Ll),ge=a(e),F=s(e,"P",{"data-svelte-h":!0}),o(F)!=="svelte-l0pmna"&&(F.textContent=Hl),et=a(e),z=s(e,"UL",{"data-svelte-h":!0}),o(z)!=="svelte-fe6m20"&&(z.innerHTML=Il),tt=a(e),S=s(e,"H3",{"data-svelte-h":!0}),o(S)!=="svelte-enf2iy"&&(S.textContent=ql),lt=a(e),E=s(e,"UL",{"data-svelte-h":!0}),o(E)!=="svelte-h6hix0"&&(E.innerHTML=bl),it=a(e),U=s(e,"H3",{"data-svelte-h":!0}),o(U)!=="svelte-1dctyr9"&&(U.textContent=Tl),nt=a(e),N=s(e,"P",{"data-svelte-h":!0}),o(N)!=="svelte-1wcqffh"&&(N.textContent=Pl),st=a(e),D=s(e,"UL",{"data-svelte-h":!0}),o(D)!=="svelte-1ubrj9x"&&(D.innerHTML=Ml),ot=a(e),R=s(e,"P",{"data-svelte-h":!0}),o(R)!=="svelte-1dg7b2v"&&(R.textContent=jl),ut=a(e),B=s(e,"UL",{"data-svelte-h":!0}),o(B)!=="svelte-1xj95ka"&&(B.innerHTML=wl),at=a(e),J=s(e,"P",{"data-svelte-h":!0}),o(J)!=="svelte-5paepg"&&(J.textContent=kl),rt=a(e),V=s(e,"H2",{"data-svelte-h":!0}),o(V)!=="svelte-j8r978"&&(V.innerHTML=yl),pt=a(e),G=s(e,"P",{"data-svelte-h":!0}),o(G)!=="svelte-1kdqahk"&&(G.textContent=Al),vt=a(e),O=s(e,"H3",{"data-svelte-h":!0}),o(O)!=="svelte-ubur7q"&&(O.textContent=Fl),mt=a(e),K=s(e,"P",{"data-svelte-h":!0}),o(K)!=="svelte-bidyk3"&&(K.textContent=zl),dt=a(e),W=s(e,"H4",{"data-svelte-h":!0}),o(W)!=="svelte-lzlwmn"&&(W.textContent=Sl),xt=a(e),X=s(e,"P",{"data-svelte-h":!0}),o(X)!=="svelte-9b4p23"&&(X.textContent=El),ft=a(e),Z=s(e,"UL",{"data-svelte-h":!0}),o(Z)!=="svelte-ns4cqq"&&(Z.innerHTML=Ul),Ct=a(e),Q=s(e,"H4",{"data-svelte-h":!0}),o(Q)!=="svelte-1rgiztn"&&(Q.textContent=Nl),ct=a(e),Y=s(e,"UL",{"data-svelte-h":!0}),o(Y)!=="svelte-cwqk9e"&&(Y.innerHTML=Dl),ht=a(e),$=s(e,"H4",{"data-svelte-h":!0}),o($)!=="svelte-1ai7z1l"&&($.textContent=Rl),_t=a(e),g=s(e,"UL",{"data-svelte-h":!0}),o(g)!=="svelte-1yvjkdp"&&(g.innerHTML=Bl),Lt=a(e),ee=s(e,"H4",{"data-svelte-h":!0}),o(ee)!=="svelte-1ddciyc"&&(ee.textContent=Jl),Ht=a(e),te=s(e,"UL",{"data-svelte-h":!0}),o(te)!=="svelte-1o3qlv0"&&(te.innerHTML=Vl),It=a(e),le=s(e,"H5",{"data-svelte-h":!0}),o(le)!=="svelte-y0ewj3"&&(le.textContent=Gl),qt=a(e),ie=s(e,"P",{"data-svelte-h":!0}),o(ie)!=="svelte-vjwrmb"&&(ie.textContent=Ol),bt=a(e),ne=s(e,"H5",{"data-svelte-h":!0}),o(ne)!=="svelte-uwuns8"&&(ne.textContent=Kl),Tt=a(e),se=s(e,"P",{"data-svelte-h":!0}),o(se)!=="svelte-1fowjap"&&(se.textContent=Wl),Pt=a(e),oe=s(e,"H5",{"data-svelte-h":!0}),o(oe)!=="svelte-te9czb"&&(oe.textContent=Xl),Mt=a(e),ue=s(e,"P",{"data-svelte-h":!0}),o(ue)!=="svelte-1yoatto"&&(ue.textContent=Zl),jt=a(e),ae=s(e,"P",{"data-svelte-h":!0}),o(ae)!=="svelte-hga3v8"&&(ae.innerHTML=Ql),wt=a(e),re=s(e,"H4",{"data-svelte-h":!0}),o(re)!=="svelte-m73p3q"&&(re.textContent=Yl),kt=a(e),pe=s(e,"P",{"data-svelte-h":!0}),o(pe)!=="svelte-1k003oj"&&(pe.innerHTML=$l),yt=a(e),ve=s(e,"H2",{"data-svelte-h":!0}),o(ve)!=="svelte-1cw2usi"&&(ve.textContent=gl),At=a(e),me=s(e,"P",{"data-svelte-h":!0}),o(me)!=="svelte-1xvu34f"&&(me.textContent=ei),Ft=a(e),de=s(e,"P",{"data-svelte-h":!0}),o(de)!=="svelte-1g316i8"&&(de.textContent=ti),zt=a(e),xe=s(e,"P",{"data-svelte-h":!0}),o(xe)!=="svelte-ipwqaf"&&(xe.textContent=li),St=a(e),fe=s(e,"H3",{"data-svelte-h":!0}),o(fe)!=="svelte-xqi0pw"&&(fe.textContent=ii),Et=a(e),Ce=s(e,"P",{"data-svelte-h":!0}),o(Ce)!=="svelte-4k6e2k"&&(Ce.textContent=ni),Ut=a(e),ce=s(e,"H3",{"data-svelte-h":!0}),o(ce)!=="svelte-1s2qunc"&&(ce.textContent=si),Nt=a(e),he=s(e,"P",{"data-svelte-h":!0}),o(he)!=="svelte-14n1r92"&&(he.textContent=oi),Dt=a(e),_e=s(e,"H3",{"data-svelte-h":!0}),o(_e)!=="svelte-4twpz0"&&(_e.textContent=ui),Rt=a(e),Le=s(e,"P",{"data-svelte-h":!0}),o(Le)!=="svelte-bl96la"&&(Le.textContent=ai),Bt=a(e),He=s(e,"H2",{"data-svelte-h":!0}),o(He)!=="svelte-14qervx"&&(He.textContent=ri),Jt=a(e),Ie=s(e,"P",{"data-svelte-h":!0}),o(Ie)!=="svelte-11oxqdo"&&(Ie.textContent=pi),Vt=a(e),qe=s(e,"P",{"data-svelte-h":!0}),o(qe)!=="svelte-27k0k2"&&(qe.innerHTML=vi),Gt=a(e),be=s(e,"P",{"data-svelte-h":!0}),o(be)!=="svelte-10ej6pl"&&(be.textContent=mi),Ot=a(e),Te=s(e,"P",{"data-svelte-h":!0}),o(Te)!=="svelte-4zndq3"&&(Te.innerHTML=di),Kt=a(e),Pe=s(e,"P",{"data-svelte-h":!0}),o(Pe)!=="svelte-1ssvi9q"&&(Pe.innerHTML=xi),Wt=a(e),Me=s(e,"P",{"data-svelte-h":!0}),o(Me)!=="svelte-1lit0z"&&(Me.textContent=fi),Xt=a(e),je=s(e,"UL",{"data-svelte-h":!0}),o(je)!=="svelte-9418nc"&&(je.innerHTML=Ci),Zt=a(e),we=s(e,"P",{"data-svelte-h":!0}),o(we)!=="svelte-1kfxkyq"&&(we.innerHTML=ci)},m(e,t){l(e,r,t),l(e,ke,t),l(e,p,t),l(e,ye,t),l(e,v,t),l(e,Ae,t),l(e,m,t),l(e,Fe,t),l(e,d,t),l(e,ze,t),l(e,x,t),l(e,Se,t),l(e,f,t),l(e,Ee,t),l(e,C,t),l(e,Ue,t),l(e,c,t),l(e,Ne,t),l(e,h,t),l(e,De,t),l(e,_,t),l(e,Re,t),l(e,L,t),l(e,Be,t),l(e,H,t),l(e,Je,t),l(e,I,t),l(e,Ve,t),l(e,q,t),l(e,Ge,t),l(e,b,t),l(e,Oe,t),l(e,T,t),l(e,Ke,t),l(e,P,t),l(e,We,t),l(e,M,t),l(e,Xe,t),l(e,j,t),l(e,Ze,t),l(e,w,t),l(e,Qe,t),l(e,k,t),l(e,Ye,t),l(e,y,t),l(e,$e,t),l(e,A,t),l(e,ge,t),l(e,F,t),l(e,et,t),l(e,z,t),l(e,tt,t),l(e,S,t),l(e,lt,t),l(e,E,t),l(e,it,t),l(e,U,t),l(e,nt,t),l(e,N,t),l(e,st,t),l(e,D,t),l(e,ot,t),l(e,R,t),l(e,ut,t),l(e,B,t),l(e,at,t),l(e,J,t),l(e,rt,t),l(e,V,t),l(e,pt,t),l(e,G,t),l(e,vt,t),l(e,O,t),l(e,mt,t),l(e,K,t),l(e,dt,t),l(e,W,t),l(e,xt,t),l(e,X,t),l(e,ft,t),l(e,Z,t),l(e,Ct,t),l(e,Q,t),l(e,ct,t),l(e,Y,t),l(e,ht,t),l(e,$,t),l(e,_t,t),l(e,g,t),l(e,Lt,t),l(e,ee,t),l(e,Ht,t),l(e,te,t),l(e,It,t),l(e,le,t),l(e,qt,t),l(e,ie,t),l(e,bt,t),l(e,ne,t),l(e,Tt,t),l(e,se,t),l(e,Pt,t),l(e,oe,t),l(e,Mt,t),l(e,ue,t),l(e,jt,t),l(e,ae,t),l(e,wt,t),l(e,re,t),l(e,kt,t),l(e,pe,t),l(e,yt,t),l(e,ve,t),l(e,At,t),l(e,me,t),l(e,Ft,t),l(e,de,t),l(e,zt,t),l(e,xe,t),l(e,St,t),l(e,fe,t),l(e,Et,t),l(e,Ce,t),l(e,Ut,t),l(e,ce,t),l(e,Nt,t),l(e,he,t),l(e,Dt,t),l(e,_e,t),l(e,Rt,t),l(e,Le,t),l(e,Bt,t),l(e,He,t),l(e,Jt,t),l(e,Ie,t),l(e,Vt,t),l(e,qe,t),l(e,Gt,t),l(e,be,t),l(e,Ot,t),l(e,Te,t),l(e,Kt,t),l(e,Pe,t),l(e,Wt,t),l(e,Me,t),l(e,Xt,t),l(e,je,t),l(e,Zt,t),l(e,we,t)},p:Qt,i:Qt,o:Qt,d(e){e&&(i(r),i(ke),i(p),i(ye),i(v),i(Ae),i(m),i(Fe),i(d),i(ze),i(x),i(Se),i(f),i(Ee),i(C),i(Ue),i(c),i(Ne),i(h),i(De),i(_),i(Re),i(L),i(Be),i(H),i(Je),i(I),i(Ve),i(q),i(Ge),i(b),i(Oe),i(T),i(Ke),i(P),i(We),i(M),i(Xe),i(j),i(Ze),i(w),i(Qe),i(k),i(Ye),i(y),i($e),i(A),i(ge),i(F),i(et),i(z),i(tt),i(S),i(lt),i(E),i(it),i(U),i(nt),i(N),i(st),i(D),i(ot),i(R),i(ut),i(B),i(at),i(J),i(rt),i(V),i(pt),i(G),i(vt),i(O),i(mt),i(K),i(dt),i(W),i(xt),i(X),i(ft),i(Z),i(Ct),i(Q),i(ct),i(Y),i(ht),i($),i(_t),i(g),i(Lt),i(ee),i(Ht),i(te),i(It),i(le),i(qt),i(ie),i(bt),i(ne),i(Tt),i(se),i(Pt),i(oe),i(Mt),i(ue),i(jt),i(ae),i(wt),i(re),i(kt),i(pe),i(yt),i(ve),i(At),i(me),i(Ft),i(de),i(zt),i(xe),i(St),i(fe),i(Et),i(Ce),i(Ut),i(ce),i(Nt),i(he),i(Dt),i(_e),i(Rt),i(Le),i(Bt),i(He),i(Jt),i(Ie),i(Vt),i(qe),i(Gt),i(be),i(Ot),i(Te),i(Kt),i(Pe),i(Wt),i(Me),i(Xt),i(je),i(Zt),i(we))}}}const Ti={title:"pictoria",date:"2024-05-15T00:00:00.000Z",speaker:"Jean-Philippe Moreux ; Julien Schuh ; Anne-Violaine Szabados ; Marion Charpier ; Christopher Kermorvant ; Dominique Andrieu ; Barthélémy Serres ; Jean-Christophe Carius",category:"workshop",keyworkds:"IA ; annotation ; modèle"};class Pi extends Li{constructor(r){super(),Hi(this,r,null,Ii,_i,{})}}export{Pi as default,Ti as metadata};
