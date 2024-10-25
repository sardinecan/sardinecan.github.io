import{s as y,n as b}from"./scheduler.DaEglZbh.js";import{S as L,i as T,e as r,s as h,H as z,c,k as v,f as _,a as M,l as $,d as a,m as B,g as t}from"./index.B_-7WD2a.js";function j(H){let n,g="Bash : nommage séquentiel des fichiers",u,l,x="Une simple ligne qui garde de l’extension de fichier d’origine et ajoute des zeros en tête (<em>leading zeros</em>) :",m,o,f,q=`<code class="language-bash"><span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> <span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> *<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token string">"<span class="token variable">$i</span>"</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">printf</span> <span class="token string">'%04d'</span> $num<span class="token variable">)</span></span>.<span class="token variable">$&#123;i<span class="token operator">#</span>*.&#125;</span>"</span><span class="token punctuation">;</span> <span class="token variable"><span class="token punctuation">((</span>num<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">done</span></code>`,k,i,w="Lectures",d,p,C='<li><a href="https://stackoverflow.com/questions/3211595/renaming-files-in-a-folder-to-sequential-numbers" rel="nofollow"><em>Renaming files in a folder to sequential numbers</em></a></li> <li><a href="https://ubuntuforums.org/showthread.php?t=1355021" rel="nofollow"><em>Bash script to rename files to a pattern of consecutive numbers</em></a></li>';return{c(){n=r("h1"),n.textContent=g,u=h(),l=r("p"),l.innerHTML=x,m=h(),o=r("pre"),f=new z(!1),k=h(),i=r("h2"),i.textContent=w,d=h(),p=r("ul"),p.innerHTML=C,this.h()},l(e){n=c(e,"H1",{"data-svelte-h":!0}),v(n)!=="svelte-15ffetu"&&(n.textContent=g),u=_(e),l=c(e,"P",{"data-svelte-h":!0}),v(l)!=="svelte-qw5bei"&&(l.innerHTML=x),m=_(e),o=c(e,"PRE",{class:!0});var s=M(o);f=$(s,!1),s.forEach(a),k=_(e),i=c(e,"H2",{"data-svelte-h":!0}),v(i)!=="svelte-1u3eosd"&&(i.textContent=w),d=_(e),p=c(e,"UL",{"data-svelte-h":!0}),v(p)!=="svelte-olz9z2"&&(p.innerHTML=C),this.h()},h(){f.a=null,B(o,"class","language-bash")},m(e,s){t(e,n,s),t(e,u,s),t(e,l,s),t(e,m,s),t(e,o,s),f.m(q,o),t(e,k,s),t(e,i,s),t(e,d,s),t(e,p,s)},p:b,i:b,o:b,d(e){e&&(a(n),a(u),a(l),a(m),a(o),a(k),a(i),a(d),a(p))}}}const R={title:"Bash : nommage séquentiel des fichiers",date:"2024-05-27T00:00:00.000Z",author:"jmorvan",category:"CLI",keywords:"bash ; nommage ; linux ; osx ; macos"};class S extends L{constructor(n){super(),T(this,n,null,j,y,{})}}export{S as default,R as metadata};
