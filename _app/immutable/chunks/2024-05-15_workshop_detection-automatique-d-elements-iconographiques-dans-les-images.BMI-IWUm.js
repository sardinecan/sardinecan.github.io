import{s as Hi,n as We}from"./scheduler.DaEglZbh.js";import{S as bi,i as Mi,e as n,s as u,H as Ti,c as s,k as p,f as o,a as hi,l as Pi,d as l,m as qi,g as i}from"./index.B_-7WD2a.js";function ki(_i){let a,Ze="Détection automatique d’éléments iconographiques dans les images : principes et mise en œuvre",yt,r,$e="3 types de modèle",Ut,x,tl="<li>détection, c’est le moins fin, il n’est pas nécessaire de créer une ontologie, on cherche des objets, sans avoir besoin de les classifier</li> <li>classification : on attribut une étiquette ou une classe à une image ou à une région spécifique de l’image</li> <li>segmentation : encore plus fin, on divise une image en segment ou en région en fonction de certaine propriété</li>",Et,v,el=`En utilisant SAM on peut segmenter une image, récupérer les coordonées et s’en servir pour les classifier.
La robustesse d’un modèle est calculer avec un metric l’<em>intersection over union</em> (IOU). Il s’agit du taux de chevauchement entre la boite d’annotation et la vérité de terrain. En dessous de 0.5 (50% de superposition des deux boites) on considère que la prédiction est fausse. Mais attention :`,At,d,ll="<li>vrai positif (TP) : un objet dont la classe et la detection sont bonnes</li> <li>faux positif (FP) : détection d’une classe correcte mais mal positionné</li> <li>faux négatif (FN) : rien n’est bon dans la détection</li>",Ot,m,il=`ces trois indicateurs permettent de calculer le rappel, la précision et le score F1
Un modèle parfait à une score F1 = 1.`,Dt,C,nl="Une autre metric intéressante pour évaluer un modèle est la matrice de confusion.",St,f,sl="Comment choisir un modèle",zt,c,ul="Prendre en compte précision et performance, complexité et taille du modèle (demande de ressources computationnelles), robustesse aux variations, flexibilité et modularité.",Nt,_,pl="Détection automatique d’objets dans les images avec YOLO",Rt,L,ol="Principe de l’apprentissage automatique (Machine learning)",Yt,H,al=`Comment faire exécuter une tâche à un ordinateur
La première solution c’est d’écrire un programme : un expert explique à un développeur la tâche à réaliser.`,It,b,rl="La seconde solution c’est de faire apprendre la machine : avec le ML on a toujours un expert qui prend des exemples annotés, un ingénieur ML va nourrir un apprentissage à partir des exemples annotés pour créer un modèle, qui sera capable de rédiger un programme.",Ft,M,xl=`avec la programmation
le programme est écrit par un dev, l’expert doit pouvoir explicité les règles, il faut un programme par tâche, en cas d’erreur il faut modifier le programme
Avec l’apprentissage automatique, le programme est écrit par la machine, l’expert doit annoter des exemple, un seul programme d’apprentissage pour plusieurs tâche et si on a des erreurs, il suffit de donner de nouveaux exemples.
le pipeline est le suivant :`,gt,T,Gt,Li=`<code class="language-undefined">Exemples annotés -&gt;     apprentissage -&gt;     modèle
                                                ↓
                   Exemples à traiter -&gt;     programme -&gt;     exécution -&gt;     prédiction</code>`,Bt,h,vl=`Les exemples définissent le programme : l’annotation est la phse la plus importante.
Comment bien choisir les exemple : il faut constituer un échantillonage aléatoire et représentatif. Il faut également annoter come ce que l’on souhaite obtenir en prédiction.`,Xt,P,dl="L’objectif est d’apprendre à généraliser pour prédire sur des exemples nons vus pendant l’apprentissage. : il faut 3 éléments",Qt,q,ml=`<li>un échantillon pour apprendre (train test)</li> <li>un echantillon pour vérifier le modèle généralisé (validation set)</li> <li>un échantillon pour évaluer le modèle (test set)
Ces 3 ensembles doivent être repésentatifs, aléatoires et disjoints.</li>`,Kt,k,Cl=`NB : avec YOLO assez peu de données sont nécessaires pour obtenir de bon résultat.
+NB 2 : possibilité d’augmenter artificiellement les données avec les changements de perspectives par exemple, ou modification des images. mais plus efficace lorsque c’est intégrer dans un script d’apprentissage.`,Vt,w,fl="Entrainement d’un modèle de détection avec Arkindex",Jt,j,cl='<li><a href="https://doc.arkindex.org/tutorial/segmentation-training/" rel="nofollow">Documentation Arkindex</a></li> <li><a href="https://notes.teklia.com/s/P6wnIUYqQ#" rel="nofollow">notes Teklia</a></li>',Wt,y,_l='<img src="https://storage.teklia.com/tools-hedgedoc-uploads/uploads/4832afb3-38d8-4ee0-8554-1a00f1b619fd.png"/>',Zt,U,Ll="1. Créer des répertoires (folders) dans votre projet",$t,E,Hl="<li>Naviguer dans votre projet</li> <li>Créer 3 répertoires (folders) avec les noms Train, Dev et Test</li> <li>Menu Actions-&gt;Add folder</li>",te,A,bl='<img src="https://storage.teklia.com/tools-hedgedoc-uploads/uploads/caf6c560-0e42-4867-ae8b-f811a3b0c083.png"/>',ee,O,Ml="En vidéo :",le,D,Tl="youtube S_7N3jYALtc",ie,S,hl="2. Répartir les exemples aléatoirement dans les répertoires train/dev/test",ne,z,Pl="2.1 Utiliser la présentation Random",se,N,ql='<img src="https://storage.teklia.com/tools-hedgedoc-uploads/uploads/21161b4f-8ae3-4fd4-a2ad-27d91b0e3d01.png"/>',ue,R,kl="2.2 Utiliser la pagination à 100",pe,Y,wl='<img src="https://storage.teklia.com/tools-hedgedoc-uploads/uploads/c4600678-8f4d-45ea-add1-c0eb84c35bf2.png"/>',oe,I,jl="2.3 Utiliser la sélection",ae,F,yl='<img src="https://storage.teklia.com/tools-hedgedoc-uploads/uploads/a2e9731c-8aac-40fd-bb58-73bd32ad2af8.png"/>',re,g,Ul="En vidéo :",xe,G,El="youtube XOP27j-4ee4",ve,B,Al="3. Créer un dataset avec des sous-ensembles Train/Val/Test",de,X,Ol="<li>Menu Actions -&gt; Project Information -&gt; Dataset</li>",me,Q,Dl='<img src="https://storage.teklia.com/tools-hedgedoc-uploads/uploads/06924b36-4c38-4cf1-a6d3-ccc116b8beea.png"/>',Ce,K,Sl="En vidéo :",fe,V,zl="youtube wkxgt9NSMXc",ce,J,Nl="4. Générer l’export complet du projet",_e,W,Rl=`<li>Menu Actions -&gt; Manage Export -&gt; Start Export
<img src="https://storage.teklia.com/tools-hedgedoc-uploads/uploads/adf1b4cf-527e-4a3e-8f83-6076d429adbd.png"/></li>`,Le,Z,Yl=`:::info
Pourquoi cette étape ?
Arkindex permet l’entrainement distribué (cloud, cluster)
L’export et la génération de l’archive d’entrainement permettent la distribution des données
:::`,He,$,Il="En vidéo :",be,tt,Fl="youtube w082mRvSqEI",Me,et,gl="5. Générer l’archive d’entrainement à partir du projet",Te,lt,Gl="<li>Menu Actions -&gt; Create Dataset process</li>",he,it,Bl='<img src="https://storage.teklia.com/tools-hedgedoc-uploads/uploads/a2ad2b26-7226-45f1-a05f-97cd95166fc2.png"/>',Pe,nt,Xl="<li>Select « Generic  Training Dataset Extractor »</li>",qe,st,Ql='<img src="https://storage.teklia.com/tools-hedgedoc-uploads/uploads/24cd7a48-3d19-48a2-9df4-9b9818ecd8f4.png"/>',ke,ut,Kl="<li>Run Process</li>",we,pt,Vl='<img src="https://storage.teklia.com/tools-hedgedoc-uploads/uploads/50b131b8-9bed-46a0-884f-504505173939.png"/>',je,ot,Jl="En vidéo :",ye,at,Wl="youtube GLOY-Q9ekpc",Ue,rt,Zl="6. Créer un modèle",Ee,xt,$l="<li>Menu Personnel -&gt; Models</li>",Ae,vt,ti='<img src="https://storage.teklia.com/tools-hedgedoc-uploads/uploads/bce1c379-75e1-44c0-abae-5c5d3540b971.png"/>',Oe,dt,ei="<li>CREATE MODEL puis renseigner les informations</li>",De,mt,li='<img src="https://storage.teklia.com/tools-hedgedoc-uploads/uploads/98471c27-be6c-406c-a396-2c1b0ae067cf.png"/>',Se,Ct,ii="En vidéo :",ze,ft,ni="youtube _0B2ARsnbqo",Ne,ct,si="7. Lancer l’entrainement du modèle YOLO",Re,_t,ui="7.1 Menu Actions -> Create Dataset process",Ye,Lt,pi='<img src="https://storage.teklia.com/tools-hedgedoc-uploads/uploads/3b52d35e-166c-41e3-8515-a00802688e2b.png"/>',Ie,Ht,oi="7.2. Find the YOLO Training | Detect/Segment worker",Fe,bt,ai='<img src="https://storage.teklia.com/tools-hedgedoc-uploads/uploads/f7cf0df5-655f-424f-b7b6-4c1a18c32b55.png"/>',ge,Mt,ri="7.3 Créer une configuration d’entrainement",Ge,Tt,xi="<li>Name : votre_nom YOLO illustration</li> <li>Class names to predict : illustration</li> <li>Model that will receive the new trained version :  nom du modèle créé en 6.</li> <li>Number of epochs to train the model : 3</li> <li>Type of object to detect using the segmenter : bbox</li>",Be,ht,vi='<img src="https://storage.teklia.com/tools-hedgedoc-uploads/uploads/35a7e5b6-efc6-4a1a-8c93-ac1f68b2dbdd.png"/>',Xe,Pt,di="7.4 Lancer l’entrainement",Qe,qt,mi="<li>Sélectionner GPU</li> <li>RUN PROCESS</li>",Ke,kt,Ci='<img src="https://storage.teklia.com/tools-hedgedoc-uploads/uploads/e0b0c9ef-2ed6-476e-8256-83c8c26f5b26.png"/>',Ve,wt,fi="En vidéo :",Je,jt,ci="youtube 9XiL9FxD31M";return{c(){a=n("h1"),a.textContent=Ze,yt=u(),r=n("p"),r.textContent=$e,Ut=u(),x=n("ul"),x.innerHTML=tl,Et=u(),v=n("p"),v.innerHTML=el,At=u(),d=n("ul"),d.innerHTML=ll,Ot=u(),m=n("p"),m.textContent=il,Dt=u(),C=n("p"),C.textContent=nl,St=u(),f=n("h2"),f.textContent=sl,zt=u(),c=n("p"),c.textContent=ul,Nt=u(),_=n("h2"),_.textContent=pl,Rt=u(),L=n("h3"),L.textContent=ol,Yt=u(),H=n("p"),H.textContent=al,It=u(),b=n("p"),b.textContent=rl,Ft=u(),M=n("p"),M.textContent=xl,gt=u(),T=n("pre"),Gt=new Ti(!1),Bt=u(),h=n("p"),h.textContent=vl,Xt=u(),P=n("p"),P.textContent=dl,Qt=u(),q=n("ul"),q.innerHTML=ml,Kt=u(),k=n("p"),k.textContent=Cl,Vt=u(),w=n("h2"),w.textContent=fl,Jt=u(),j=n("ul"),j.innerHTML=cl,Wt=u(),y=n("p"),y.innerHTML=_l,Zt=u(),U=n("h3"),U.textContent=Ll,$t=u(),E=n("ul"),E.innerHTML=Hl,te=u(),A=n("p"),A.innerHTML=bl,ee=u(),O=n("h4"),O.textContent=Ml,le=u(),D=n("p"),D.textContent=Tl,ie=u(),S=n("h3"),S.textContent=hl,ne=u(),z=n("p"),z.textContent=Pl,se=u(),N=n("p"),N.innerHTML=ql,ue=u(),R=n("p"),R.textContent=kl,pe=u(),Y=n("p"),Y.innerHTML=wl,oe=u(),I=n("p"),I.textContent=jl,ae=u(),F=n("p"),F.innerHTML=yl,re=u(),g=n("h4"),g.textContent=Ul,xe=u(),G=n("p"),G.textContent=El,ve=u(),B=n("h3"),B.textContent=Al,de=u(),X=n("ul"),X.innerHTML=Ol,me=u(),Q=n("p"),Q.innerHTML=Dl,Ce=u(),K=n("h4"),K.textContent=Sl,fe=u(),V=n("p"),V.textContent=zl,ce=u(),J=n("h4"),J.textContent=Nl,_e=u(),W=n("ul"),W.innerHTML=Rl,Le=u(),Z=n("p"),Z.textContent=Yl,He=u(),$=n("h4"),$.textContent=Il,be=u(),tt=n("p"),tt.textContent=Fl,Me=u(),et=n("h3"),et.textContent=gl,Te=u(),lt=n("ul"),lt.innerHTML=Gl,he=u(),it=n("p"),it.innerHTML=Bl,Pe=u(),nt=n("ul"),nt.innerHTML=Xl,qe=u(),st=n("p"),st.innerHTML=Ql,ke=u(),ut=n("ul"),ut.innerHTML=Kl,we=u(),pt=n("p"),pt.innerHTML=Vl,je=u(),ot=n("h4"),ot.textContent=Jl,ye=u(),at=n("p"),at.textContent=Wl,Ue=u(),rt=n("h3"),rt.textContent=Zl,Ee=u(),xt=n("ul"),xt.innerHTML=$l,Ae=u(),vt=n("p"),vt.innerHTML=ti,Oe=u(),dt=n("ul"),dt.innerHTML=ei,De=u(),mt=n("p"),mt.innerHTML=li,Se=u(),Ct=n("h4"),Ct.textContent=ii,ze=u(),ft=n("p"),ft.textContent=ni,Ne=u(),ct=n("h3"),ct.textContent=si,Re=u(),_t=n("p"),_t.textContent=ui,Ye=u(),Lt=n("p"),Lt.innerHTML=pi,Ie=u(),Ht=n("p"),Ht.textContent=oi,Fe=u(),bt=n("p"),bt.innerHTML=ai,ge=u(),Mt=n("p"),Mt.textContent=ri,Ge=u(),Tt=n("ul"),Tt.innerHTML=xi,Be=u(),ht=n("p"),ht.innerHTML=vi,Xe=u(),Pt=n("p"),Pt.textContent=di,Qe=u(),qt=n("ul"),qt.innerHTML=mi,Ke=u(),kt=n("p"),kt.innerHTML=Ci,Ve=u(),wt=n("h4"),wt.textContent=fi,Je=u(),jt=n("p"),jt.textContent=ci,this.h()},l(t){a=s(t,"H1",{"data-svelte-h":!0}),p(a)!=="svelte-ulm2k9"&&(a.textContent=Ze),yt=o(t),r=s(t,"P",{"data-svelte-h":!0}),p(r)!=="svelte-ppjvy2"&&(r.textContent=$e),Ut=o(t),x=s(t,"UL",{"data-svelte-h":!0}),p(x)!=="svelte-16smnts"&&(x.innerHTML=tl),Et=o(t),v=s(t,"P",{"data-svelte-h":!0}),p(v)!=="svelte-176wap1"&&(v.innerHTML=el),At=o(t),d=s(t,"UL",{"data-svelte-h":!0}),p(d)!=="svelte-maiqrm"&&(d.innerHTML=ll),Ot=o(t),m=s(t,"P",{"data-svelte-h":!0}),p(m)!=="svelte-1is5ms8"&&(m.textContent=il),Dt=o(t),C=s(t,"P",{"data-svelte-h":!0}),p(C)!=="svelte-1l75oaj"&&(C.textContent=nl),St=o(t),f=s(t,"H2",{"data-svelte-h":!0}),p(f)!=="svelte-1qdm1n2"&&(f.textContent=sl),zt=o(t),c=s(t,"P",{"data-svelte-h":!0}),p(c)!=="svelte-rhl8d5"&&(c.textContent=ul),Nt=o(t),_=s(t,"H2",{"data-svelte-h":!0}),p(_)!=="svelte-tjj8i"&&(_.textContent=pl),Rt=o(t),L=s(t,"H3",{"data-svelte-h":!0}),p(L)!=="svelte-1ris6ax"&&(L.textContent=ol),Yt=o(t),H=s(t,"P",{"data-svelte-h":!0}),p(H)!=="svelte-19rybjt"&&(H.textContent=al),It=o(t),b=s(t,"P",{"data-svelte-h":!0}),p(b)!=="svelte-1atdrt3"&&(b.textContent=rl),Ft=o(t),M=s(t,"P",{"data-svelte-h":!0}),p(M)!=="svelte-xlns80"&&(M.textContent=xl),gt=o(t),T=s(t,"PRE",{class:!0});var e=hi(T);Gt=Pi(e,!1),e.forEach(l),Bt=o(t),h=s(t,"P",{"data-svelte-h":!0}),p(h)!=="svelte-qw8itm"&&(h.textContent=vl),Xt=o(t),P=s(t,"P",{"data-svelte-h":!0}),p(P)!=="svelte-mh9n0c"&&(P.textContent=dl),Qt=o(t),q=s(t,"UL",{"data-svelte-h":!0}),p(q)!=="svelte-10hg1hn"&&(q.innerHTML=ml),Kt=o(t),k=s(t,"P",{"data-svelte-h":!0}),p(k)!=="svelte-wobyke"&&(k.textContent=Cl),Vt=o(t),w=s(t,"H2",{"data-svelte-h":!0}),p(w)!=="svelte-15qhvvw"&&(w.textContent=fl),Jt=o(t),j=s(t,"UL",{"data-svelte-h":!0}),p(j)!=="svelte-18adcol"&&(j.innerHTML=cl),Wt=o(t),y=s(t,"P",{"data-svelte-h":!0}),p(y)!=="svelte-txkm5a"&&(y.innerHTML=_l),Zt=o(t),U=s(t,"H3",{"data-svelte-h":!0}),p(U)!=="svelte-7ksp00"&&(U.textContent=Ll),$t=o(t),E=s(t,"UL",{"data-svelte-h":!0}),p(E)!=="svelte-1uhlixa"&&(E.innerHTML=Hl),te=o(t),A=s(t,"P",{"data-svelte-h":!0}),p(A)!=="svelte-1sqb0zt"&&(A.innerHTML=bl),ee=o(t),O=s(t,"H4",{"data-svelte-h":!0}),p(O)!=="svelte-e8iwpw"&&(O.textContent=Ml),le=o(t),D=s(t,"P",{"data-svelte-h":!0}),p(D)!=="svelte-18jbdu0"&&(D.textContent=Tl),ie=o(t),S=s(t,"H3",{"data-svelte-h":!0}),p(S)!=="svelte-13yms47"&&(S.textContent=hl),ne=o(t),z=s(t,"P",{"data-svelte-h":!0}),p(z)!=="svelte-f9855y"&&(z.textContent=Pl),se=o(t),N=s(t,"P",{"data-svelte-h":!0}),p(N)!=="svelte-1qomu59"&&(N.innerHTML=ql),ue=o(t),R=s(t,"P",{"data-svelte-h":!0}),p(R)!=="svelte-1u8xq5p"&&(R.textContent=kl),pe=o(t),Y=s(t,"P",{"data-svelte-h":!0}),p(Y)!=="svelte-iziswn"&&(Y.innerHTML=wl),oe=o(t),I=s(t,"P",{"data-svelte-h":!0}),p(I)!=="svelte-u97qap"&&(I.textContent=jl),ae=o(t),F=s(t,"P",{"data-svelte-h":!0}),p(F)!=="svelte-zjqhpv"&&(F.innerHTML=yl),re=o(t),g=s(t,"H4",{"data-svelte-h":!0}),p(g)!=="svelte-e8iwpw"&&(g.textContent=Ul),xe=o(t),G=s(t,"P",{"data-svelte-h":!0}),p(G)!=="svelte-1379fmq"&&(G.textContent=El),ve=o(t),B=s(t,"H3",{"data-svelte-h":!0}),p(B)!=="svelte-1nf8hgq"&&(B.textContent=Al),de=o(t),X=s(t,"UL",{"data-svelte-h":!0}),p(X)!=="svelte-1xb9zca"&&(X.innerHTML=Ol),me=o(t),Q=s(t,"P",{"data-svelte-h":!0}),p(Q)!=="svelte-1ql63w9"&&(Q.innerHTML=Dl),Ce=o(t),K=s(t,"H4",{"data-svelte-h":!0}),p(K)!=="svelte-e8iwpw"&&(K.textContent=Sl),fe=o(t),V=s(t,"P",{"data-svelte-h":!0}),p(V)!=="svelte-1skaa8m"&&(V.textContent=zl),ce=o(t),J=s(t,"H4",{"data-svelte-h":!0}),p(J)!=="svelte-1br4t9w"&&(J.textContent=Nl),_e=o(t),W=s(t,"UL",{"data-svelte-h":!0}),p(W)!=="svelte-fzviyc"&&(W.innerHTML=Rl),Le=o(t),Z=s(t,"P",{"data-svelte-h":!0}),p(Z)!=="svelte-1joh6n1"&&(Z.textContent=Yl),He=o(t),$=s(t,"H4",{"data-svelte-h":!0}),p($)!=="svelte-e8iwpw"&&($.textContent=Il),be=o(t),tt=s(t,"P",{"data-svelte-h":!0}),p(tt)!=="svelte-1t7zxyr"&&(tt.textContent=Fl),Me=o(t),et=s(t,"H3",{"data-svelte-h":!0}),p(et)!=="svelte-8otvjo"&&(et.textContent=gl),Te=o(t),lt=s(t,"UL",{"data-svelte-h":!0}),p(lt)!=="svelte-1qfjvx7"&&(lt.innerHTML=Gl),he=o(t),it=s(t,"P",{"data-svelte-h":!0}),p(it)!=="svelte-1qqtayp"&&(it.innerHTML=Bl),Pe=o(t),nt=s(t,"UL",{"data-svelte-h":!0}),p(nt)!=="svelte-1xqgdd2"&&(nt.innerHTML=Xl),qe=o(t),st=s(t,"P",{"data-svelte-h":!0}),p(st)!=="svelte-17hrtek"&&(st.innerHTML=Ql),ke=o(t),ut=s(t,"UL",{"data-svelte-h":!0}),p(ut)!=="svelte-8phdo9"&&(ut.innerHTML=Kl),we=o(t),pt=s(t,"P",{"data-svelte-h":!0}),p(pt)!=="svelte-pnt28v"&&(pt.innerHTML=Vl),je=o(t),ot=s(t,"H4",{"data-svelte-h":!0}),p(ot)!=="svelte-e8iwpw"&&(ot.textContent=Jl),ye=o(t),at=s(t,"P",{"data-svelte-h":!0}),p(at)!=="svelte-1nfkn94"&&(at.textContent=Wl),Ue=o(t),rt=s(t,"H3",{"data-svelte-h":!0}),p(rt)!=="svelte-xjqcz5"&&(rt.textContent=Zl),Ee=o(t),xt=s(t,"UL",{"data-svelte-h":!0}),p(xt)!=="svelte-ofti6r"&&(xt.innerHTML=$l),Ae=o(t),vt=s(t,"P",{"data-svelte-h":!0}),p(vt)!=="svelte-1bpajm0"&&(vt.innerHTML=ti),Oe=o(t),dt=s(t,"UL",{"data-svelte-h":!0}),p(dt)!=="svelte-1ruwlcw"&&(dt.innerHTML=ei),De=o(t),mt=s(t,"P",{"data-svelte-h":!0}),p(mt)!=="svelte-uwjayy"&&(mt.innerHTML=li),Se=o(t),Ct=s(t,"H4",{"data-svelte-h":!0}),p(Ct)!=="svelte-e8iwpw"&&(Ct.textContent=ii),ze=o(t),ft=s(t,"P",{"data-svelte-h":!0}),p(ft)!=="svelte-13umhos"&&(ft.textContent=ni),Ne=o(t),ct=s(t,"H3",{"data-svelte-h":!0}),p(ct)!=="svelte-r13kbi"&&(ct.textContent=si),Re=o(t),_t=s(t,"P",{"data-svelte-h":!0}),p(_t)!=="svelte-19jf8q8"&&(_t.textContent=ui),Ye=o(t),Lt=s(t,"P",{"data-svelte-h":!0}),p(Lt)!=="svelte-e4jf62"&&(Lt.innerHTML=pi),Ie=o(t),Ht=s(t,"P",{"data-svelte-h":!0}),p(Ht)!=="svelte-1s56nez"&&(Ht.textContent=oi),Fe=o(t),bt=s(t,"P",{"data-svelte-h":!0}),p(bt)!=="svelte-1t47xzt"&&(bt.innerHTML=ai),ge=o(t),Mt=s(t,"P",{"data-svelte-h":!0}),p(Mt)!=="svelte-14mqkwi"&&(Mt.textContent=ri),Ge=o(t),Tt=s(t,"UL",{"data-svelte-h":!0}),p(Tt)!=="svelte-142ifcr"&&(Tt.innerHTML=xi),Be=o(t),ht=s(t,"P",{"data-svelte-h":!0}),p(ht)!=="svelte-1qrrms8"&&(ht.innerHTML=vi),Xe=o(t),Pt=s(t,"P",{"data-svelte-h":!0}),p(Pt)!=="svelte-qximtf"&&(Pt.textContent=di),Qe=o(t),qt=s(t,"UL",{"data-svelte-h":!0}),p(qt)!=="svelte-64yn2t"&&(qt.innerHTML=mi),Ke=o(t),kt=s(t,"P",{"data-svelte-h":!0}),p(kt)!=="svelte-8jcp3p"&&(kt.innerHTML=Ci),Ve=o(t),wt=s(t,"H4",{"data-svelte-h":!0}),p(wt)!=="svelte-e8iwpw"&&(wt.textContent=fi),Je=o(t),jt=s(t,"P",{"data-svelte-h":!0}),p(jt)!=="svelte-1wxtka3"&&(jt.textContent=ci),this.h()},h(){Gt.a=null,qi(T,"class","language-undefined")},m(t,e){i(t,a,e),i(t,yt,e),i(t,r,e),i(t,Ut,e),i(t,x,e),i(t,Et,e),i(t,v,e),i(t,At,e),i(t,d,e),i(t,Ot,e),i(t,m,e),i(t,Dt,e),i(t,C,e),i(t,St,e),i(t,f,e),i(t,zt,e),i(t,c,e),i(t,Nt,e),i(t,_,e),i(t,Rt,e),i(t,L,e),i(t,Yt,e),i(t,H,e),i(t,It,e),i(t,b,e),i(t,Ft,e),i(t,M,e),i(t,gt,e),i(t,T,e),Gt.m(Li,T),i(t,Bt,e),i(t,h,e),i(t,Xt,e),i(t,P,e),i(t,Qt,e),i(t,q,e),i(t,Kt,e),i(t,k,e),i(t,Vt,e),i(t,w,e),i(t,Jt,e),i(t,j,e),i(t,Wt,e),i(t,y,e),i(t,Zt,e),i(t,U,e),i(t,$t,e),i(t,E,e),i(t,te,e),i(t,A,e),i(t,ee,e),i(t,O,e),i(t,le,e),i(t,D,e),i(t,ie,e),i(t,S,e),i(t,ne,e),i(t,z,e),i(t,se,e),i(t,N,e),i(t,ue,e),i(t,R,e),i(t,pe,e),i(t,Y,e),i(t,oe,e),i(t,I,e),i(t,ae,e),i(t,F,e),i(t,re,e),i(t,g,e),i(t,xe,e),i(t,G,e),i(t,ve,e),i(t,B,e),i(t,de,e),i(t,X,e),i(t,me,e),i(t,Q,e),i(t,Ce,e),i(t,K,e),i(t,fe,e),i(t,V,e),i(t,ce,e),i(t,J,e),i(t,_e,e),i(t,W,e),i(t,Le,e),i(t,Z,e),i(t,He,e),i(t,$,e),i(t,be,e),i(t,tt,e),i(t,Me,e),i(t,et,e),i(t,Te,e),i(t,lt,e),i(t,he,e),i(t,it,e),i(t,Pe,e),i(t,nt,e),i(t,qe,e),i(t,st,e),i(t,ke,e),i(t,ut,e),i(t,we,e),i(t,pt,e),i(t,je,e),i(t,ot,e),i(t,ye,e),i(t,at,e),i(t,Ue,e),i(t,rt,e),i(t,Ee,e),i(t,xt,e),i(t,Ae,e),i(t,vt,e),i(t,Oe,e),i(t,dt,e),i(t,De,e),i(t,mt,e),i(t,Se,e),i(t,Ct,e),i(t,ze,e),i(t,ft,e),i(t,Ne,e),i(t,ct,e),i(t,Re,e),i(t,_t,e),i(t,Ye,e),i(t,Lt,e),i(t,Ie,e),i(t,Ht,e),i(t,Fe,e),i(t,bt,e),i(t,ge,e),i(t,Mt,e),i(t,Ge,e),i(t,Tt,e),i(t,Be,e),i(t,ht,e),i(t,Xe,e),i(t,Pt,e),i(t,Qe,e),i(t,qt,e),i(t,Ke,e),i(t,kt,e),i(t,Ve,e),i(t,wt,e),i(t,Je,e),i(t,jt,e)},p:We,i:We,o:We,d(t){t&&(l(a),l(yt),l(r),l(Ut),l(x),l(Et),l(v),l(At),l(d),l(Ot),l(m),l(Dt),l(C),l(St),l(f),l(zt),l(c),l(Nt),l(_),l(Rt),l(L),l(Yt),l(H),l(It),l(b),l(Ft),l(M),l(gt),l(T),l(Bt),l(h),l(Xt),l(P),l(Qt),l(q),l(Kt),l(k),l(Vt),l(w),l(Jt),l(j),l(Wt),l(y),l(Zt),l(U),l($t),l(E),l(te),l(A),l(ee),l(O),l(le),l(D),l(ie),l(S),l(ne),l(z),l(se),l(N),l(ue),l(R),l(pe),l(Y),l(oe),l(I),l(ae),l(F),l(re),l(g),l(xe),l(G),l(ve),l(B),l(de),l(X),l(me),l(Q),l(Ce),l(K),l(fe),l(V),l(ce),l(J),l(_e),l(W),l(Le),l(Z),l(He),l($),l(be),l(tt),l(Me),l(et),l(Te),l(lt),l(he),l(it),l(Pe),l(nt),l(qe),l(st),l(ke),l(ut),l(we),l(pt),l(je),l(ot),l(ye),l(at),l(Ue),l(rt),l(Ee),l(xt),l(Ae),l(vt),l(Oe),l(dt),l(De),l(mt),l(Se),l(Ct),l(ze),l(ft),l(Ne),l(ct),l(Re),l(_t),l(Ye),l(Lt),l(Ie),l(Ht),l(Fe),l(bt),l(ge),l(Mt),l(Ge),l(Tt),l(Be),l(ht),l(Xe),l(Pt),l(Qe),l(qt),l(Ke),l(kt),l(Ve),l(wt),l(Je),l(jt))}}}const yi={title:"Détection automatique d’éléments iconographiques dans les images : principes et mise en œuvre",date:"2024-05-15",speaker:"Christopher Kermorvant ; Marion Charpier",category:"workshop",keyworkds:"IA ; annotation ; modèle ; détection"};class Ui extends bi{constructor(a){super(),Mi(this,a,null,ki,Hi,{})}}export{Ui as default,yi as metadata};