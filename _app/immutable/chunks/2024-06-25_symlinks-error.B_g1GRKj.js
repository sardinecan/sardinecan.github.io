import{s as N,n as w}from"./scheduler.DaEglZbh.js";import{S as O,i as Q,e as n,s as i,H as E,c as o,k as b,f as u,a as M,l as D,d as t,m as j,g as l}from"./index.B_-7WD2a.js";function U(F){let a,$="<em>Too many levels of symbolic links Error</em>",k,r,z="Imaginons la structure suivante :",h,p,y,G=`<code class="language-bash">$ tree
<span class="token builtin class-name">.</span>
└──monDossier
    ├──source
    └──output</code>`,x,c,R="Ajoutons ensuite un lien symbolique du dossier <code>source</code> dans le dossier <code>output</code>.",C,m,T,J=`<code class="language-bash">$ <span class="token builtin class-name">cd</span> monDossier
$ <span class="token function">ln</span> <span class="token parameter variable">-s</span> <span class="token builtin class-name">source</span> output
$ tree
<span class="token builtin class-name">.</span>
├──source
└──output
    └──output/source -<span class="token operator">></span> <span class="token builtin class-name">source</span></code>`,g,d,S="Malheureusement le lien symbolique est cassé :",H,f,L,K=`<code class="language-bash"><span class="token function">find</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-xtype</span> l <span class="token comment"># pour identifier les symlinks cassés</span>
find: ‘./output/source’: Too many levels of symbolic links</code>`,P,v,A="La raison de cette erreur est  simple : les liens symboliques réalisés avec des chemins relatifs sont toujours relatifs au répertoire du lien symbolique, et non au répertoire d’origine. Le lien symbolique <code>/monDossier/output/source</code> que nous venons de créer pointe donc vers <code>/monDossier/output/source</code> au lieu de <code>/monDossier/source</code>.",q,_,I="Pour régler le problème, il suffit d’utiliser des chemins absolus !";return{c(){a=n("h1"),a.innerHTML=$,k=i(),r=n("p"),r.textContent=z,h=i(),p=n("pre"),y=new E(!1),x=i(),c=n("p"),c.innerHTML=R,C=i(),m=n("pre"),T=new E(!1),g=i(),d=n("p"),d.textContent=S,H=i(),f=n("pre"),L=new E(!1),P=i(),v=n("p"),v.innerHTML=A,q=i(),_=n("p"),_.textContent=I,this.h()},l(e){a=o(e,"H1",{"data-svelte-h":!0}),b(a)!=="svelte-158r17z"&&(a.innerHTML=$),k=u(e),r=o(e,"P",{"data-svelte-h":!0}),b(r)!=="svelte-5ztfxa"&&(r.textContent=z),h=u(e),p=o(e,"PRE",{class:!0});var s=M(p);y=D(s,!1),s.forEach(t),x=u(e),c=o(e,"P",{"data-svelte-h":!0}),b(c)!=="svelte-pj8pix"&&(c.innerHTML=R),C=u(e),m=o(e,"PRE",{class:!0});var Z=M(m);T=D(Z,!1),Z.forEach(t),g=u(e),d=o(e,"P",{"data-svelte-h":!0}),b(d)!=="svelte-vgo4lk"&&(d.textContent=S),H=u(e),f=o(e,"PRE",{class:!0});var B=M(f);L=D(B,!1),B.forEach(t),P=u(e),v=o(e,"P",{"data-svelte-h":!0}),b(v)!=="svelte-1hppvhg"&&(v.innerHTML=A),q=u(e),_=o(e,"P",{"data-svelte-h":!0}),b(_)!=="svelte-8cnzp2"&&(_.textContent=I),this.h()},h(){y.a=null,j(p,"class","language-bash"),T.a=null,j(m,"class","language-bash"),L.a=null,j(f,"class","language-bash")},m(e,s){l(e,a,s),l(e,k,s),l(e,r,s),l(e,h,s),l(e,p,s),y.m(G,p),l(e,x,s),l(e,c,s),l(e,C,s),l(e,m,s),T.m(J,m),l(e,g,s),l(e,d,s),l(e,H,s),l(e,f,s),L.m(K,f),l(e,P,s),l(e,v,s),l(e,q,s),l(e,_,s)},p:w,i:w,o:w,d(e){e&&(t(a),t(k),t(r),t(h),t(p),t(x),t(c),t(C),t(m),t(g),t(d),t(H),t(f),t(P),t(v),t(q),t(_))}}}const X={title:"Too many levels of symbolic links",date:"2024-06-25T00:00:00.000Z",author:"jmorvan",category:"setup",keywords:"symbolic ; symlink ; setup ; error"};class Y extends O{constructor(a){super(),Q(this,a,null,U,N,{})}}export{Y as default,X as metadata};