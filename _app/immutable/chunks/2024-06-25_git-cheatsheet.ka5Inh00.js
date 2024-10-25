import{s as ra,n as Ls}from"./scheduler.DaEglZbh.js";import{S as ma,i as ua,e as t,s as o,H as i,c as l,k as c,f as p,a as r,l as m,d as a,m as u,g as n}from"./index.B_-7WD2a.js";function ka(Ys){let k,Ms="📚 Les fondamentaux Git",I,f,ws="📅 Index",B,g,Ts='<li><a href="#configuration">🔧 Configuration</a></li> <li><a href="#initialisation-et-clonage">📁 Initialisation et Clonage</a></li> <li><a href="#gestion-des-branches">🌲 Gestion des Branches</a></li> <li><a href="#gestion-des-fichiers">📑 Gestion des Fichiers</a></li> <li><a href="#gestion-des-commits">💾 Gestion des Commits</a></li> <li><a href="#gestion-des-remote">🌐 Gestion des Remote</a></li> <li><a href="#rebaser-et-merge">🔄 Rebaser et Merge</a></li> <li><a href="#divers">📋 Divers</a></li> <li><a href="#gestion-des-tags">🔒 Gestion des Tags</a></li> <li><a href="#gestion-des-conflits">🚑 Gestion des Conflits</a></li> <li><a href="#historique-et-annulation">⏳ Historique et Annulation</a></li> <li><a href="#depannage">🛠️ Dépannage</a></li>',N,h,Es='🔧 Configuration <span id="configuration"></span>',z,d,J,Zs=`<code class="language-bash"><span class="token comment"># Configurer le nom d'utilisateur</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">"Votre Nom"</span>

<span class="token comment"># Configurer l'email</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">"votre-email@example.com"</span>

<span class="token comment"># Configurer l'éditeur par défaut</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> core.editor <span class="token string">"nom-editeur"</span>

<span class="token comment"># Voir la configuration</span>
<span class="token function">git</span> config <span class="token parameter variable">--list</span></code>`,U,v,Rs='📁 Initialisation et Clonage <span id="initialisation-et-clonage"></span>',K,b,O,$s=`<code class="language-bash"><span class="token comment"># Initialiser un nouveau dépôt Git</span>
<span class="token function">git</span> init

<span class="token comment"># Cloner un dépôt existant</span>
<span class="token function">git</span> clone <span class="token operator">&lt;</span>url-du-repo<span class="token operator">></span></code>`,Q,_,As='🌲 Gestion des Branches <span id="gestion-des-branches"></span>',W,H,X,sa=`<code class="language-bash"><span class="token comment"># Lister toutes les branches</span>
<span class="token function">git</span> branch

<span class="token comment"># Créer une nouvelle branche</span>
<span class="token function">git</span> branch <span class="token operator">&lt;</span>nom-de-branche<span class="token operator">></span>

<span class="token comment"># Changer de branche</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>nom-de-branche<span class="token operator">></span>

<span class="token comment"># Créer et changer de branche en une commande</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>nom-de-branche<span class="token operator">></span>

<span class="token comment"># Fusionner une branche dans la branche courante</span>
<span class="token function">git</span> merge <span class="token operator">&lt;</span>nom-de-branche<span class="token operator">></span>

<span class="token comment"># Supprimer une branche</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>nom-de-branche<span class="token operator">></span></code>`,Y,C,Gs='📑 Gestion des Fichiers <span id="gestion-des-fichiers"></span>',Z,x,$,aa=`<code class="language-bash"><span class="token comment"># Voir le statut des fichiers</span>
<span class="token function">git</span> status

<span class="token comment"># Ajouter un fichier au suivi</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>nom-de-fichier<span class="token operator">></span>

<span class="token comment"># Ajouter tous les fichiers au suivi</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># Retirer un fichier du suivi</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token operator">&lt;</span>nom-de-fichier<span class="token operator">></span>

<span class="token comment"># Renommer un fichier</span>
<span class="token function">git</span> <span class="token function">mv</span> <span class="token operator">&lt;</span>ancien-nom<span class="token operator">></span> <span class="token operator">&lt;</span>nouveau-nom<span class="token operator">></span></code>`,ss,L,Ps='💾 Gestion des Commits <span id="gestion-des-commits"></span>',as,M,es,ea=`<code class="language-bash"><span class="token comment"># Commiter les changements</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"Message du commit"</span>

<span class="token comment"># Modifier le dernier commit</span>
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span>

<span class="token comment"># Voir l'historique des commits</span>
<span class="token function">git</span> log

<span class="token comment"># Voir un log simplifié</span>
<span class="token function">git</span> log <span class="token parameter variable">--oneline</span> <span class="token parameter variable">--graph</span> <span class="token parameter variable">--decorate</span> <span class="token parameter variable">--all</span></code>`,ns,w,qs='🌐 Gestion des Remote <span id="gestion-des-remote"></span>',ts,T,ls,na=`<code class="language-bash"><span class="token comment"># Ajouter un remote</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin <span class="token operator">&lt;</span>url-du-remote<span class="token operator">></span>

<span class="token comment"># Voir les remotes</span>
<span class="token function">git</span> remote <span class="token parameter variable">-v</span>

<span class="token comment"># Pousser les commits vers le remote</span>
<span class="token function">git</span> push origin <span class="token operator">&lt;</span>nom-de-branche<span class="token operator">></span>

<span class="token comment"># Récupérer les changements depuis le remote</span>
<span class="token function">git</span> pull

<span class="token comment"># Supprimer un remote</span>
<span class="token function">git</span> remote remove <span class="token operator">&lt;</span>nom-du-remote<span class="token operator">></span></code>`,os,E,js='🔄 Rebaser et Merge <span id="rebaser-et-merge"></span>',ps,R,cs,ta=`<code class="language-bash"><span class="token comment"># Rebaser la branche courante sur une autre</span>
<span class="token function">git</span> rebase <span class="token operator">&lt;</span>nom-de-branche<span class="token operator">></span>

<span class="token comment"># Fusionner une branche</span>
<span class="token function">git</span> merge <span class="token operator">&lt;</span>nom-de-branche<span class="token operator">></span>

<span class="token comment"># Continuer un rebase en cours après avoir résolu les conflits</span>
<span class="token function">git</span> rebase <span class="token parameter variable">--continue</span>

<span class="token comment"># Annuler un rebase</span>
<span class="token function">git</span> rebase <span class="token parameter variable">--abort</span></code>`,is,A,ys='📋 Divers <span id="divers"></span>',rs,G,ms,la=`<code class="language-bash"><span class="token comment"># Afficher les différences entre fichiers</span>
<span class="token function">git</span> <span class="token function">diff</span>

<span class="token comment"># Afficher les différences mises en stage</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span>

<span class="token comment"># Afficher les différences entre deux commits</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token operator">&lt;</span>commit<span class="token operator"><span class="token file-descriptor important">1</span>></span> <span class="token operator">&lt;</span>commit<span class="token operator"><span class="token file-descriptor important">2</span>></span>

<span class="token comment"># Annuler les changements dans un fichier (avant commit)</span>
<span class="token function">git</span> checkout -- <span class="token operator">&lt;</span>nom-de-fichier<span class="token operator">></span>

<span class="token comment"># Réinitialiser la branche courante à un commit précédent</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token operator">&lt;</span>commit<span class="token operator">></span>

<span class="token comment"># Réinitialiser la branche courante en gardant les modifications locales</span>
<span class="token function">git</span> reset <span class="token parameter variable">--soft</span> <span class="token operator">&lt;</span>commit<span class="token operator">></span>

<span class="token comment"># Renvoyer un fichier au stage</span>
<span class="token function">git</span> reset HEAD <span class="token operator">&lt;</span>nom-de-fichier<span class="token operator">></span>

<span class="token comment"># Nettoyer le dépôt en supprimant les fichiers non suivis</span>
<span class="token function">git</span> clean <span class="token parameter variable">-f</span></code>`,us,P,Vs='🔒 Gestion des Tags <span id="gestion-des-tags"></span>',ks,q,fs,oa=`<code class="language-bash"><span class="token comment"># Créer un tag</span>
<span class="token function">git</span> tag <span class="token operator">&lt;</span>nom-du-tag<span class="token operator">></span>

<span class="token comment"># Supprimer un tag</span>
<span class="token function">git</span> tag <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>nom-du-tag<span class="token operator">></span>

<span class="token comment"># Pousser un tag vers le remote</span>
<span class="token function">git</span> push origin <span class="token operator">&lt;</span>nom-du-tag<span class="token operator">></span>

<span class="token comment"># Lister les tags</span>
<span class="token function">git</span> tag</code>`,gs,j,Ds='🚑 Gestion des Conflits <span id="gestion-des-conflits"></span>',hs,y,ds,pa=`<code class="language-bash"><span class="token comment"># Lister les conflits</span>
<span class="token function">git</span> status

<span class="token comment"># Résoudre les conflits et ajouter les fichiers résolus</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>nom-de-fichier-conflit<span class="token operator">></span>

<span class="token comment"># Continuer après avoir résolu les conflits</span>
<span class="token function">git</span> commit</code>`,vs,V,Ss='⏳ Historique et Annulation <span id="historique-et-annulation"></span>',bs,D,_s,ca=`<code class="language-bash"><span class="token comment"># Voir les logs avec graph</span>
<span class="token function">git</span> log <span class="token parameter variable">--graph</span>

<span class="token comment"># Voir les logs de manière compacte</span>
<span class="token function">git</span> log <span class="token parameter variable">--oneline</span>

<span class="token comment"># Retourner à un commit spécifique</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>commit-id<span class="token operator">></span>

<span class="token comment"># Créer une nouvelle branche à partir d'un commit spécifique</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>nouvelle-branche<span class="token operator">></span> <span class="token operator">&lt;</span>commit-id<span class="token operator">></span>

<span class="token comment"># Annuler un commit (création d'un commit inverse)</span>
<span class="token function">git</span> revert <span class="token operator">&lt;</span>commit-id<span class="token operator">></span></code>`,Hs,S,Fs='🛠️ Dépannage <span id="depannage"></span>',Cs,F,xs,ia=`<code class="language-bash"><span class="token comment"># Annuler le dernier commit mais garder les changements dans la staging area</span>
<span class="token function">git</span> reset <span class="token parameter variable">--soft</span> HEAD^

<span class="token comment"># Annuler les derniers changements sans les garder</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD^

<span class="token comment"># Sauvegarder les changements locaux sans les committer</span>
<span class="token function">git</span> stash

<span class="token comment"># Récupérer les changements sauvegardés</span>
<span class="token function">git</span> stash pop</code>`;return{c(){k=t("h1"),k.textContent=Ms,I=o(),f=t("h2"),f.textContent=ws,B=o(),g=t("ul"),g.innerHTML=Ts,N=o(),h=t("h2"),h.innerHTML=Es,z=o(),d=t("pre"),J=new i(!1),U=o(),v=t("h2"),v.innerHTML=Rs,K=o(),b=t("pre"),O=new i(!1),Q=o(),_=t("h2"),_.innerHTML=As,W=o(),H=t("pre"),X=new i(!1),Y=o(),C=t("h2"),C.innerHTML=Gs,Z=o(),x=t("pre"),$=new i(!1),ss=o(),L=t("h2"),L.innerHTML=Ps,as=o(),M=t("pre"),es=new i(!1),ns=o(),w=t("h2"),w.innerHTML=qs,ts=o(),T=t("pre"),ls=new i(!1),os=o(),E=t("h2"),E.innerHTML=js,ps=o(),R=t("pre"),cs=new i(!1),is=o(),A=t("h2"),A.innerHTML=ys,rs=o(),G=t("pre"),ms=new i(!1),us=o(),P=t("h2"),P.innerHTML=Vs,ks=o(),q=t("pre"),fs=new i(!1),gs=o(),j=t("h2"),j.innerHTML=Ds,hs=o(),y=t("pre"),ds=new i(!1),vs=o(),V=t("h2"),V.innerHTML=Ss,bs=o(),D=t("pre"),_s=new i(!1),Hs=o(),S=t("h2"),S.innerHTML=Fs,Cs=o(),F=t("pre"),xs=new i(!1),this.h()},l(s){k=l(s,"H1",{"data-svelte-h":!0}),c(k)!=="svelte-faa8iv"&&(k.textContent=Ms),I=p(s),f=l(s,"H2",{"data-svelte-h":!0}),c(f)!=="svelte-wq2d58"&&(f.textContent=ws),B=p(s),g=l(s,"UL",{"data-svelte-h":!0}),c(g)!=="svelte-1rkbcle"&&(g.innerHTML=Ts),N=p(s),h=l(s,"H2",{"data-svelte-h":!0}),c(h)!=="svelte-j87qxt"&&(h.innerHTML=Es),z=p(s),d=l(s,"PRE",{class:!0});var e=r(d);J=m(e,!1),e.forEach(a),U=p(s),v=l(s,"H2",{"data-svelte-h":!0}),c(v)!=="svelte-b9geyl"&&(v.innerHTML=Rs),K=p(s),b=l(s,"PRE",{class:!0});var Is=r(b);O=m(Is,!1),Is.forEach(a),Q=p(s),_=l(s,"H2",{"data-svelte-h":!0}),c(_)!=="svelte-igkbcd"&&(_.innerHTML=As),W=p(s),H=l(s,"PRE",{class:!0});var Bs=r(H);X=m(Bs,!1),Bs.forEach(a),Y=p(s),C=l(s,"H2",{"data-svelte-h":!0}),c(C)!=="svelte-1fw0nfn"&&(C.innerHTML=Gs),Z=p(s),x=l(s,"PRE",{class:!0});var Ns=r(x);$=m(Ns,!1),Ns.forEach(a),ss=p(s),L=l(s,"H2",{"data-svelte-h":!0}),c(L)!=="svelte-1xg2b2"&&(L.innerHTML=Ps),as=p(s),M=l(s,"PRE",{class:!0});var zs=r(M);es=m(zs,!1),zs.forEach(a),ns=p(s),w=l(s,"H2",{"data-svelte-h":!0}),c(w)!=="svelte-1sjjoc3"&&(w.innerHTML=qs),ts=p(s),T=l(s,"PRE",{class:!0});var Js=r(T);ls=m(Js,!1),Js.forEach(a),os=p(s),E=l(s,"H2",{"data-svelte-h":!0}),c(E)!=="svelte-sxx22w"&&(E.innerHTML=js),ps=p(s),R=l(s,"PRE",{class:!0});var Us=r(R);cs=m(Us,!1),Us.forEach(a),is=p(s),A=l(s,"H2",{"data-svelte-h":!0}),c(A)!=="svelte-1n450wz"&&(A.innerHTML=ys),rs=p(s),G=l(s,"PRE",{class:!0});var Ks=r(G);ms=m(Ks,!1),Ks.forEach(a),us=p(s),P=l(s,"H2",{"data-svelte-h":!0}),c(P)!=="svelte-1ht7hk6"&&(P.innerHTML=Vs),ks=p(s),q=l(s,"PRE",{class:!0});var Os=r(q);fs=m(Os,!1),Os.forEach(a),gs=p(s),j=l(s,"H2",{"data-svelte-h":!0}),c(j)!=="svelte-jajd09"&&(j.innerHTML=Ds),hs=p(s),y=l(s,"PRE",{class:!0});var Qs=r(y);ds=m(Qs,!1),Qs.forEach(a),vs=p(s),V=l(s,"H2",{"data-svelte-h":!0}),c(V)!=="svelte-l23k78"&&(V.innerHTML=Ss),bs=p(s),D=l(s,"PRE",{class:!0});var Ws=r(D);_s=m(Ws,!1),Ws.forEach(a),Hs=p(s),S=l(s,"H2",{"data-svelte-h":!0}),c(S)!=="svelte-8yub9x"&&(S.innerHTML=Fs),Cs=p(s),F=l(s,"PRE",{class:!0});var Xs=r(F);xs=m(Xs,!1),Xs.forEach(a),this.h()},h(){J.a=null,u(d,"class","language-bash"),O.a=null,u(b,"class","language-bash"),X.a=null,u(H,"class","language-bash"),$.a=null,u(x,"class","language-bash"),es.a=null,u(M,"class","language-bash"),ls.a=null,u(T,"class","language-bash"),cs.a=null,u(R,"class","language-bash"),ms.a=null,u(G,"class","language-bash"),fs.a=null,u(q,"class","language-bash"),ds.a=null,u(y,"class","language-bash"),_s.a=null,u(D,"class","language-bash"),xs.a=null,u(F,"class","language-bash")},m(s,e){n(s,k,e),n(s,I,e),n(s,f,e),n(s,B,e),n(s,g,e),n(s,N,e),n(s,h,e),n(s,z,e),n(s,d,e),J.m(Zs,d),n(s,U,e),n(s,v,e),n(s,K,e),n(s,b,e),O.m($s,b),n(s,Q,e),n(s,_,e),n(s,W,e),n(s,H,e),X.m(sa,H),n(s,Y,e),n(s,C,e),n(s,Z,e),n(s,x,e),$.m(aa,x),n(s,ss,e),n(s,L,e),n(s,as,e),n(s,M,e),es.m(ea,M),n(s,ns,e),n(s,w,e),n(s,ts,e),n(s,T,e),ls.m(na,T),n(s,os,e),n(s,E,e),n(s,ps,e),n(s,R,e),cs.m(ta,R),n(s,is,e),n(s,A,e),n(s,rs,e),n(s,G,e),ms.m(la,G),n(s,us,e),n(s,P,e),n(s,ks,e),n(s,q,e),fs.m(oa,q),n(s,gs,e),n(s,j,e),n(s,hs,e),n(s,y,e),ds.m(pa,y),n(s,vs,e),n(s,V,e),n(s,bs,e),n(s,D,e),_s.m(ca,D),n(s,Hs,e),n(s,S,e),n(s,Cs,e),n(s,F,e),xs.m(ia,F)},p:Ls,i:Ls,o:Ls,d(s){s&&(a(k),a(I),a(f),a(B),a(g),a(N),a(h),a(z),a(d),a(U),a(v),a(K),a(b),a(Q),a(_),a(W),a(H),a(Y),a(C),a(Z),a(x),a(ss),a(L),a(as),a(M),a(ns),a(w),a(ts),a(T),a(os),a(E),a(ps),a(R),a(is),a(A),a(rs),a(G),a(us),a(P),a(ks),a(q),a(gs),a(j),a(hs),a(y),a(vs),a(V),a(bs),a(D),a(Hs),a(S),a(Cs),a(F))}}}const ha={title:"Git - Cheatsheet",date:"2024-06-25",author:"Josselin Morvan",category:"git",keywords:"cheatsheet ; git"};class da extends ma{constructor(k){super(),ua(this,k,null,ka,ra,{})}}export{da as default,ha as metadata};
