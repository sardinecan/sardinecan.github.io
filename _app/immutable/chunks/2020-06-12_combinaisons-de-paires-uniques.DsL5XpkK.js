import{s as S,n as w}from"./scheduler.DaEglZbh.js";import{S as U,i as z,e as u,s as k,H as P,c as r,k as g,f as m,a as E,l as j,d as n,m as L,g as t}from"./index.B_-7WD2a.js";function I(T){let e,y="Combinaisons de paires uniques",b,p,x="Pour obtenir toutes les paires uniques à partir d’une séquence.",d,l,f,M=`<code class="language-shell"><span class="token function">seq</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">"a"</span>, <span class="token string">"b"</span>, <span class="token string">"c"</span>, <span class="token string">"d"</span><span class="token punctuation">)</span>
result <span class="token operator">=</span> 
<span class="token builtin class-name">.</span>   a,b  a,c  a,d
<span class="token builtin class-name">.</span>    <span class="token builtin class-name">.</span>   b,c  b,d
<span class="token builtin class-name">.</span>    <span class="token builtin class-name">.</span>    <span class="token builtin class-name">.</span>   c,d
<span class="token builtin class-name">.</span>    <span class="token builtin class-name">.</span>    <span class="token builtin class-name">.</span>    <span class="token builtin class-name">.</span></code>`,v,o,C='<li>voir aussi <a href="https://stackoverflow.com/questions/18859430/how-do-i-get-the-total-number-of-unique-pairs-of-a-set-in-the-database" rel="nofollow"><em>How do I get the total number of unique pairs of a set in the database?</em></a></li>',_,c,$="XQuery",q,i,h,R=`<code class="language-xquery"><span class="token keyword">xquery</span> <span class="token keyword">version</span> <span class="token string">"3.1"</span> <span class="token punctuation">;</span>
<span class="token xquery-comment comment">(:~
 : Pairs combinations in a sequence
 : Unique pairs in a sequence (where order is irrelevant)
 :)</span>
<span class="token keyword">let</span> <span class="token variable">$seq</span> <span class="token operator">:=</span> <span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">,</span> <span class="token string">"d"</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token variable">$i</span> <span class="token keyword">at</span> <span class="token variable">$pos</span> <span class="token keyword">in</span> <span class="token variable">$seq</span>
<span class="token keyword">for</span> <span class="token variable">$j</span> <span class="token keyword">in</span> <span class="token function">fn:subsequence</span><span class="token punctuation">(</span><span class="token variable">$seq</span><span class="token punctuation">,</span> <span class="token variable">$pos</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token function">fn:count</span><span class="token punctuation">(</span><span class="token variable">$seq</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span><span class="token punctuation">></span></span><span class="token punctuation">&#123;</span><span class="token variable">$i</span><span class="token punctuation">,</span> <span class="token variable">$j</span><span class="token punctuation">&#125;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">></span></span>

<span class="token xquery-comment comment">(: result :)</span>
a<span class="token punctuation">,</span>b
a<span class="token punctuation">,</span>c
a<span class="token punctuation">,</span>d
b<span class="token punctuation">,</span>c
b<span class="token punctuation">,</span>d
c<span class="token punctuation">,</span>d</code>`;return{c(){e=u("h1"),e.textContent=y,b=k(),p=u("p"),p.textContent=x,d=k(),l=u("pre"),f=new P(!1),v=k(),o=u("ul"),o.innerHTML=C,_=k(),c=u("h2"),c.textContent=$,q=k(),i=u("pre"),h=new P(!1),this.h()},l(s){e=r(s,"H1",{"data-svelte-h":!0}),g(e)!=="svelte-11wwte8"&&(e.textContent=y),b=m(s),p=r(s,"P",{"data-svelte-h":!0}),g(p)!=="svelte-useign"&&(p.textContent=x),d=m(s),l=r(s,"PRE",{class:!0});var a=E(l);f=j(a,!1),a.forEach(n),v=m(s),o=r(s,"UL",{"data-svelte-h":!0}),g(o)!=="svelte-lznsoc"&&(o.innerHTML=C),_=m(s),c=r(s,"H2",{"data-svelte-h":!0}),g(c)!=="svelte-1q5msry"&&(c.textContent=$),q=m(s),i=r(s,"PRE",{class:!0});var H=E(i);h=j(H,!1),H.forEach(n),this.h()},h(){f.a=null,L(l,"class","language-shell"),h.a=null,L(i,"class","language-xquery")},m(s,a){t(s,e,a),t(s,b,a),t(s,p,a),t(s,d,a),t(s,l,a),f.m(M,l),t(s,v,a),t(s,o,a),t(s,_,a),t(s,c,a),t(s,q,a),t(s,i,a),h.m(R,i)},p:w,i:w,o:w,d(s){s&&(n(e),n(b),n(p),n(d),n(l),n(v),n(o),n(_),n(c),n(q),n(i))}}}const A={title:"Combinaisons de paires uniques",date:"2020-06-12",category:"code",author:"jmorvan",keywords:"xquery ; code ; pair"};class B extends U{constructor(e){super(),z(this,e,null,I,S,{})}}export{B as default,A as metadata};