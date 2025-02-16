import{s as Jb,n as Au}from"./CXCHmQ-B.js";import{S as Gb,i as Nb,d as s,a as t,k as u,c as e,l as c,g as o,e as r,m as i,h as p,j as l,H as k}from"./DuaWf0Pd.js";function Kb(ld){let m,Wu="📝 Julia",qt,d,zu="Syntaxe",Vt,b,Yu="Variables et types",Dt,f,Ou="Une variable est un espace mémoire où une valeur est stockée. Julia est un langage dynamique : il n’est donc pas nécessaire de déclarer le type d’une variable lors de sa création, il est déduit automatiquement par Julia au moment de son affectation.",Ut,v,Bu="Les variables sont créées en leur affectant une valeur à l’aide de l’opérateur <code>=</code>.",Ft,g,At,cd=`<code class="language-julia">julia<span class="token operator">></span> x <span class="token operator">=</span> <span class="token number">1</span>
<span class="token number">1</span>

julia<span class="token operator">></span> y <span class="token operator">=</span> <span class="token string">"Hello World!"</span>
<span class="token string">"Hello World!"</span>

julia<span class="token operator">></span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"A"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"A"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

julia<span class="token operator">></span> y
<span class="token string">"A"</span>

julia<span class="token operator">></span></code>`,Wt,_,Ju="Si Julia est en mesure de déduire le type de la variable, il est aussi possible de la spécifier :",zt,j,Yt,ud=`<code class="language-julia">julia<span class="token operator">></span> a<span class="token punctuation">::</span>Float64 <span class="token operator">=</span> <span class="token number">3.0</span>
<span class="token number">3.0</span>

julia<span class="token operator">></span> typeof<span class="token punctuation">(</span>a<span class="token punctuation">)</span>
Float64</code>`,Ot,x,Gu="Les types de données “simples” (<em>chaînes</em>, <em>nombres</em>, <em>booléens</em>) sont <strong>immuables</strong> : leur contenu ne peut être modifié après leur création. Si on affecte une nouvelle valeur, on crée en réalité une nouvelle instance de cette variable :",Bt,w,Jt,rd=`<code class="language-julia">julia<span class="token operator">></span> x <span class="token operator">=</span> <span class="token number">1</span>
<span class="token number">1</span>

julia<span class="token operator">></span> x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment"># une nouvelle variable est créée avec la valeur 2 </span>
<span class="token number">2</span></code>`,Gt,C,Nu="Les types de données plus complexes comme les <em>tableaux</em> ou les <em>dictionnaires</em> sont <strong>mutables</strong>, c’est-à-dire qu’il est possible de modifier leur contenu :",Nt,y,Kt,id=`<code class="language-julia">julia<span class="token operator">></span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token number">3</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">1</span>
 <span class="token number">2</span>
 <span class="token number">3</span>

julia<span class="token operator">></span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span>
<span class="token number">10</span>

julia<span class="token operator">></span> arr
<span class="token number">3</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">10</span>
  <span class="token number">2</span>
  <span class="token number">3</span></code>`,Xt,H,Ku="Les variables définies à l’extérieur de toute fonction ou bloc dispose d’une <strong>portée globale</strong>. Les variables définies dans un bloc (boucle ou fonction par exemple) ont une <strong>portée locale</strong>.",$t,L,Xu="Il est possible de définir des <strong>constantes</strong> avec le mot-clé <code>const</code>. Un foie définie, une constante ne peut plus être modifiée.",Qt,h,Zt,kd=`<code class="language-julia">julia<span class="token operator">></span> <span class="token keyword">const</span> <span class="token constant">π</span> <span class="token operator">=</span> <span class="token number">3.14</span>
<span class="token number">3.14</span></code>`,ne,P,$u="Les types composites",se,E,Qu="Les <strong>types composites</strong> sont des collections champs nommés spécifiques, dont une instance peut être traitée comme une valeur unique. Ces objets sont utiles pour modéliser des structures de données complexes, que l’on souhaite hiérarchiser ou lier, plutôt que d’avoir plusieurs variables indépendantes par exemple.",ae,M,te,md=`<code class="language-julia">julia<span class="token operator">></span> <span class="token keyword">struct</span> Person
           name 
           age<span class="token punctuation">::</span>Int <span class="token comment"># comme pour les variables il est possible de préciser le type de chaque champ</span>
       <span class="token keyword">end</span>

julia<span class="token operator">></span> sara <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token string">"Sara"</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">)</span>
Person<span class="token punctuation">(</span><span class="token string">"Sara"</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">)</span>

julia<span class="token operator">></span> sara<span class="token punctuation">.</span>name
<span class="token string">"Sara"</span>

julia<span class="token operator">></span> fieldnames<span class="token punctuation">(</span>Person<span class="token punctuation">)</span> <span class="token comment"># pour connaitre les champs</span>
<span class="token punctuation">(</span><span class="token punctuation">:</span>name<span class="token punctuation">,</span> <span class="token punctuation">:</span>age<span class="token punctuation">)</span></code>`,ee,T,Zu="Par défaut, une instance est immuable :",pe,R,oe,dd=`<code class="language-julia">julia<span class="token operator">></span> sara<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"Sarah"</span>
ERROR<span class="token punctuation">:</span> setfield<span class="token operator">!</span><span class="token punctuation">:</span> <span class="token keyword">immutable</span> <span class="token keyword">struct</span> of <span class="token keyword">type</span> Person cannot be changed
Stacktrace<span class="token punctuation">:</span>
 <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> setproperty<span class="token operator">!</span><span class="token punctuation">(</span>x<span class="token punctuation">::</span>Person<span class="token punctuation">,</span> f<span class="token punctuation">::</span>Symbol<span class="token punctuation">,</span> v<span class="token punctuation">::</span>String<span class="token punctuation">)</span>
   @ Base <span class="token punctuation">.</span><span class="token operator">/</span>Base<span class="token punctuation">.</span>jl<span class="token punctuation">:</span><span class="token number">41</span>
 <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> top<span class="token operator">-</span>level scope
   @ REPL<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">:</span><span class="token number">1</span></code>`,le,S,nr="Si l’on souhaite rendre un objet <strong>mutable</strong>, il faut le préciser avec le mot-clé <code>mutable</code>.",ce,I,ue,bd=`<code class="language-julia">julia<span class="token operator">></span> mutable <span class="token keyword">struct</span> Car
           model<span class="token punctuation">::</span>String
           brand<span class="token punctuation">::</span>String
       <span class="token keyword">end</span>

julia<span class="token operator">></span> dino <span class="token operator">=</span> Car<span class="token punctuation">(</span><span class="token string">"Dino"</span><span class="token punctuation">,</span> <span class="token string">"Ferrari"</span><span class="token punctuation">)</span>
Car<span class="token punctuation">(</span><span class="token string">"Dino"</span><span class="token punctuation">,</span> <span class="token string">"Ferrari"</span><span class="token punctuation">)</span>

julia<span class="token operator">></span> dino<span class="token punctuation">.</span>brand <span class="token operator">=</span> <span class="token string">"FIAT"</span>
<span class="token string">"FIAT"</span>

julia<span class="token operator">></span> dino
Car<span class="token punctuation">(</span><span class="token string">"Dino"</span><span class="token punctuation">,</span> <span class="token string">"FIAT"</span><span class="token punctuation">)</span></code>`,re,q,sr="Une fois un type défini, il devient possible de lui associer des méthodes, ce qui permet de créer des fonctions spécifiques :",ie,V,ke,fd=`<code class="language-julia">julia<span class="token operator">></span> <span class="token keyword">struct</span> Rectangle
           width<span class="token punctuation">::</span>Int
           height<span class="token punctuation">::</span>Int
       <span class="token keyword">end</span>

julia<span class="token operator">></span> <span class="token keyword">function</span> area<span class="token punctuation">(</span>r<span class="token punctuation">::</span>Rectangle<span class="token punctuation">)</span>
           <span class="token keyword">return</span> r<span class="token punctuation">.</span>width <span class="token operator">*</span> r<span class="token punctuation">.</span>height
       <span class="token keyword">end</span>
area <span class="token punctuation">(</span>generic <span class="token keyword">function</span> with <span class="token number">1</span> method<span class="token punctuation">)</span>

julia<span class="token operator">></span> rect <span class="token operator">=</span> Rectangle<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
Rectangle<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>

julia<span class="token operator">></span> area<span class="token punctuation">(</span>rect<span class="token punctuation">)</span>
<span class="token number">50</span></code>`,me,D,ar="Pour aller plus loin voir aussi :",de,U,tr='<li><a href="https://docs.julialang.org/en/v1/manual/types/#Parametric-Types" rel="nofollow">Parametric Types</a></li>',be,F,er="Opérateurs booléens et opérations mathématiques",fe,A,pr="Il existe 3 opérateurs booléens dans Julia",ve,W,or="<li><code>!</code> : NOT</li> <li><code>||</code> : OR</li> <li><code>&amp;&amp;</code> : AND</li>",ge,z,lr="Les opérateurs arithmétiques permettent d’effectuer les opérations mathématiques de base sur les nombres :",_e,Y,cr="<li><code>+</code> : addition</li> <li><code>-</code> : soustraction</li> <li><code>^</code> : puissance</li> <li><code>*</code> : multiplication</li> <li><code>/</code> : division</li> <li><code>\\</code> : division inverse (<code>1\\2 == 2/1 # true</code>)</li> <li><code>%</code> : modulo</li>",je,O,ur="Avec Julia, l’ordre d’évaluation des opérateurs suit les conventions mathématiques (<em>PEMDAS</em>).",xe,B,we,vd=`<code class="language-julia">julia<span class="token operator">></span> <span class="token number">2</span><span class="token operator">*</span><span class="token number">2</span><span class="token operator">+</span><span class="token number">2</span><span class="token operator">^</span><span class="token number">3</span><span class="token operator">-</span><span class="token number">2</span><span class="token operator">/</span><span class="token number">2</span>
<span class="token number">11.0</span>

julia<span class="token operator">></span> <span class="token number">7</span><span class="token operator">%</span><span class="token number">3</span>
<span class="token number">1</span></code>`,Ce,J,rr="Quant aux <em>Shorthand operators</em>, ils combinent une opération et une affectation.",ye,G,ir="<li><code>+=</code> : addition</li> <li><code>-=</code> : soustraction</li> <li><code>^=</code> : puissance</li> <li><code>*=</code> : multiplication</li> <li><code>/=</code> : division</li> <li><code>\\=</code> : division inverse</li> <li><code>%=</code> : modulo</li>",He,N,Le,gd=`<code class="language-julia">julia<span class="token operator">></span> x <span class="token operator">=</span> <span class="token number">1</span>
<span class="token number">1</span>

julia<span class="token operator">></span> x <span class="token operator">+=</span> <span class="token number">2</span>  <span class="token comment"># correspond à x = x + 2</span>
<span class="token number">3</span></code>`,he,K,kr="Julia permet enfin de comparer des valeurs. Ces opérations retournent toujours un booléen.",Pe,X,Ee,_d=`<code class="language-julia">julia<span class="token operator">></span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span>
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span></code>`,Me,$,mr="<strong>Egalité</strong> :",Te,Q,dr="<li><code>==</code> : égalité</li> <li><code>===</code> : égalité stricte</li> <li><code>!=</code> : inégalité</li>",Re,Z,Se,jd=`<code class="language-julia"><span class="token comment"># égalité</span>
julia<span class="token operator">></span> x <span class="token operator">==</span> <span class="token number">1</span>
<span class="token boolean">true</span>

julia<span class="token operator">></span> x <span class="token operator">==</span> <span class="token number">1.0</span>
<span class="token boolean">true</span>

julia<span class="token operator">></span> isequal<span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token boolean">true</span>

<span class="token comment"># égalité stricte</span>
julia<span class="token operator">></span> x <span class="token operator">===</span> <span class="token number">1</span>
<span class="token boolean">true</span>

julia<span class="token operator">></span> x <span class="token operator">===</span> <span class="token number">1.0</span>
<span class="token boolean">false</span>

<span class="token comment"># inégalité</span>
julia<span class="token operator">></span> x <span class="token operator">!=</span> y
<span class="token boolean">true</span>

<span class="token comment"># Not a number</span>
julia<span class="token operator">></span> isnan<span class="token punctuation">(</span><span class="token number">0</span><span class="token operator">/</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token boolean">true</span>

julia<span class="token operator">></span> isnan<span class="token punctuation">(</span><span class="token char">'A'</span><span class="token punctuation">)</span>
ERROR<span class="token punctuation">:</span> MethodError<span class="token punctuation">:</span> no method matching isnan<span class="token punctuation">(</span><span class="token punctuation">::</span>Char<span class="token punctuation">)</span></code>`,Ie,nn,br="<strong>Plus grand que</strong>",qe,sn,fr="<li><code>&gt;</code> : plus grand</li> <li><code>&gt;=</code>  : plus grand ou égal</li>",Ve,an,vr="<strong>Plus petit que</strong>",De,tn,gr="<li><code>&lt;</code> : plus petit</li> <li><code>&lt;=</code> : plus petit ou égal</li>",Ue,en,Fe,xd=`<code class="language-julia">julia<span class="token operator">></span> x <span class="token operator">&lt;=</span> y <span class="token operator">&lt;=</span> z
<span class="token boolean">true</span>
</code>`,Ae,pn,_r="Les fonctions",We,on,jr="Une fonction associe la valeur d’un ou plusieurs arguments à une ou plusieurs valeurs de sortie. Une fonction Julia est déclarée ainsi :",ze,ln,Ye,wd=`<code class="language-julia">julia<span class="token operator">></span> <span class="token keyword">function</span> my_function<span class="token punctuation">(</span><span class="token punctuation">)</span>
           <span class="token keyword">return</span> <span class="token keyword">println</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span>
       <span class="token keyword">end</span>
my_function <span class="token punctuation">(</span>generic <span class="token keyword">function</span> with <span class="token number">1</span> method<span class="token punctuation">)</span>

julia<span class="token operator">></span> my_function<span class="token punctuation">(</span><span class="token punctuation">)</span>
Hello World<span class="token operator">!</span></code>`,Oe,cn,xr="Il existe également une syntaxe compacte :",Be,un,Je,Cd=`<code class="language-julia">julia<span class="token operator">></span> greetings<span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">println</span><span class="token punctuation">(</span><span class="token string">"Greetings "</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
greetings <span class="token punctuation">(</span>generic <span class="token keyword">function</span> with <span class="token number">1</span> method<span class="token punctuation">)</span>

julia<span class="token operator">></span> greetings<span class="token punctuation">(</span><span class="token string">"Space Captain"</span><span class="token punctuation">)</span>
Greetings Space Captain</code>`,Ge,rn,wr="Bien évidemment, il est possible de préciser les types :",Ne,kn,Ke,yd=`<code class="language-julia">julia<span class="token operator">></span> <span class="token keyword">function</span> multiply_numbers<span class="token punctuation">(</span>x<span class="token punctuation">::</span>Int64<span class="token punctuation">,</span> y<span class="token punctuation">::</span>Int64<span class="token punctuation">)</span>
           <span class="token keyword">return</span> x<span class="token operator">*</span>y
       <span class="token keyword">end</span>
multiply_numbers <span class="token punctuation">(</span>generic <span class="token keyword">function</span> with <span class="token number">1</span> method<span class="token punctuation">)</span>

julia<span class="token operator">></span> multiply_numbers<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
<span class="token number">8</span></code>`,Xe,mn,Cr="Les types permettent de définir différentes méthodes, et donc d’induire des comportements différents au regard de la nature des arguments :",$e,dn,Qe,Hd=`<code class="language-julia">julia<span class="token operator">></span> <span class="token keyword">function</span> multiply_numbers<span class="token punctuation">(</span>x<span class="token punctuation">::</span>Float64<span class="token punctuation">,</span> y<span class="token punctuation">::</span>Float64<span class="token punctuation">)</span>
           <span class="token keyword">return</span> x<span class="token operator">*</span>y
       <span class="token keyword">end</span>
multiply_numbers <span class="token punctuation">(</span>generic <span class="token keyword">function</span> with <span class="token number">2</span> methods<span class="token punctuation">)</span></code>`,Ze,bn,yr="Une fonction peut également retourner plusieurs valeurs. Dans ce cas, pour accéder aux différentes valeurs, plusieurs options s’offrent à nous, soit :",np,fn,Hr="<li>associer une variable à chaque valeur ;</li> <li>associer une unique variable au résultat de la fonction et accéder aux valeurs avec <code>[]</code>, <code>first()</code> et <code>last()</code> par exemple.</li>",sp,vn,ap,Ld=`<code class="language-julia">julia<span class="token operator">></span> <span class="token keyword">function</span> my_math<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
           add <span class="token operator">=</span> x <span class="token operator">+</span> y
           sub <span class="token operator">=</span> x <span class="token operator">-</span> y
           <span class="token keyword">return</span> add<span class="token punctuation">,</span> sub
       <span class="token keyword">end</span>
my_math <span class="token punctuation">(</span>generic <span class="token keyword">function</span> with <span class="token number">1</span> method<span class="token punctuation">)</span>

julia<span class="token operator">></span> my_math<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

julia<span class="token operator">></span> output1<span class="token punctuation">,</span> output2 <span class="token operator">=</span> my_math<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

julia<span class="token operator">></span> output2
<span class="token number">1</span>

julia<span class="token operator">></span> output <span class="token operator">=</span> my_math<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

julia<span class="token operator">></span> output<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token number">5</span>

julia<span class="token operator">></span> last<span class="token punctuation">(</span>output<span class="token punctuation">)</span>
<span class="token number">1</span></code>`,tp,gn,Lr="Les fonctions Julia acceptent également des mots-clés comme arguments, ils sont séparés des arguments par un point-virgule (<code>;</code>). Notons qu’arguments et mots-clés peuvent disposer de valeurs par défaut :",ep,_n,pp,hd=`<code class="language-julia">julia<span class="token operator">></span> <span class="token keyword">function</span> logarithm<span class="token punctuation">(</span>x<span class="token punctuation">;</span> base<span class="token operator">=</span><span class="token number">2.718281828459045</span><span class="token punctuation">)</span>
           <span class="token keyword">return</span> log<span class="token punctuation">(</span>base<span class="token punctuation">,</span> x<span class="token punctuation">)</span>
       <span class="token keyword">end</span>
logarithm <span class="token punctuation">(</span>generic <span class="token keyword">function</span> with <span class="token number">1</span> method<span class="token punctuation">)</span>

julia<span class="token operator">></span> logarithm<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token number">2.302585092994046</span>

julia<span class="token operator">></span> logarithm<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> base<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token number">3.3219280948873626</span>

julia<span class="token operator">></span></code>`,op,jn,hr="Les fonctions anonymes",lp,xn,Pr="Pour des besoins plus spécifiques, il peut être nécessaire de créer rapidement des petites instructions, par exemple pour filtrer des résultats. On utilise alors généralement des <strong>fonctions anonymes</strong>. Ces fonctions s’utilisent alors comme arguments d’autres fonctions, comme <code>map()</code> par exemple. Elles reposent sur l’opérateur <code>-&gt;</code>. À la gauche de cet opérateur, on définit les paramètres, et à droite on définit les opérations que l’on souhaite effectuer.",cp,wn,up,Pd=`<code class="language-julia">julia<span class="token operator">></span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token number">3</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">1</span>
 <span class="token number">2</span>
 <span class="token number">3</span>

julia<span class="token operator">></span> map<span class="token punctuation">(</span>x <span class="token operator">-</span><span class="token operator">></span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token comment"># on utilise la fonction map() pour associer la fonction au tableau</span>
<span class="token number">3</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">2</span>
 <span class="token number">3</span>
 <span class="token number">4</span></code>`,rp,Cn,Er="Plusieurs arguments peuvent être passés,, ils faut alors les placer entre parenthèses : <code>(x, y, z) -&gt; x + y + z</code>.",ip,yn,Mr="Les fonctions avec un opérateur bang <code>!</code>",kp,Hn,Tr="L’opérateur bang <code>!</code> est une convention Julia pour indiquer qu’une fonction modifie un ou plusieurs de ses arguments (<em>side effect</em>).",mp,Ln,Rr="Chaînage",dp,hn,Sr="L’opérateur <code>|&gt;</code> permet de chaîner des opérations :",bp,Pn,fp,Ed=`<code class="language-julia">julia<span class="token operator">></span> <span class="token keyword">function</span> add_two<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
           <span class="token keyword">return</span> i <span class="token operator">+</span> <span class="token number">2</span>
       <span class="token keyword">end</span>
add_two <span class="token punctuation">(</span>generic <span class="token keyword">function</span> with <span class="token number">1</span> method<span class="token punctuation">)</span>

julia<span class="token operator">></span> <span class="token keyword">function</span> div_by_two<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
           <span class="token keyword">return</span> i <span class="token operator">/</span> <span class="token number">2</span>
       <span class="token keyword">end</span>
div_by_two <span class="token punctuation">(</span>generic <span class="token keyword">function</span> with <span class="token number">1</span> method<span class="token punctuation">)</span>

julia<span class="token operator">></span> <span class="token number">1</span> <span class="token operator">|></span> add_two <span class="token operator">|></span> div_by_two
<span class="token number">1.5</span></code>`,vp,En,Ir="Les conditions",gp,Mn,qr="Julia utilise les mots-clés <code>if</code>, <code>elseif</code> et <code>else</code> pour afin d’évaluer des expressions et exécuter une portion de code particulière.",_p,Tn,jp,Md=`<code class="language-julia">julia<span class="token operator">></span> a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span>
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

julia<span class="token operator">></span> <span class="token keyword">if</span> a <span class="token operator">></span> b
           <span class="token string">"a est plus grand que b"</span>
       <span class="token keyword">elseif</span> a <span class="token operator">==</span> b
           <span class="token string">"a est égal à b"</span>
       <span class="token keyword">else</span>
           <span class="token string">"a est plus petit que b"</span>
       <span class="token keyword">end</span>
<span class="token string">"a est plus petit que b"</span></code>`,xp,Rn,Vr="Il est aussi possible d’utiliser une syntaxe simplifiée pour les évaluations simples avec l’opérateur ternaire <code>?</code>",wp,Sn,Cp,Td=`<code class="language-julia">julia<span class="token operator">></span> x<span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span>
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

julia<span class="token operator">></span> x <span class="token operator">==</span> y <span class="token punctuation">?</span> <span class="token string">"x = y "</span> <span class="token punctuation">:</span> <span class="token string">"x ≠ y"</span>
<span class="token string">"x ≠ y"</span>

julia<span class="token operator">></span> x <span class="token operator">&lt;</span> y <span class="token punctuation">?</span> <span class="token string">"x &lt; y"</span> <span class="token punctuation">:</span> <span class="token string">"x > y"</span>
<span class="token string">"x &lt; y"</span></code>`,yp,In,Dr="Les boucles",Hp,qn,Ur="For",Lp,Vn,Fr="Les boucles <code>for</code> permettent d’itérer des opérations pour chaque élément d’une séquence.",hp,Dn,Pp,Rd=`<code class="language-julia">julia<span class="token operator">></span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token number">3</span>
           <span class="token keyword">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
       <span class="token keyword">end</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span></code>`,Ep,Un,Ar="While",Mp,Fn,Wr="La boucle <code>while</code> est un peu à mi-chemin entre les conditions <code>if</code> et la boucle <code>for</code>. Tant qu’une condition n’est pas remplie, la boucle <code>while</code> continue ses itérations.",Tp,An,Rp,Sd=`<code class="language-julia">julia<span class="token operator">></span> x <span class="token operator">=</span> <span class="token number">0</span>
<span class="token number">0</span>

julia<span class="token operator">></span> <span class="token keyword">while</span> x <span class="token operator">&lt;</span> <span class="token number">6</span>
           <span class="token keyword">println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token comment"># on imprime x</span>
           <span class="token keyword">global</span> x <span class="token operator">+=</span> <span class="token number">2</span> <span class="token comment"># on rajoute + 2 à la variable globale x</span>
       <span class="token keyword">end</span>
<span class="token number">0</span>
<span class="token number">2</span>
<span class="token number">4</span></code>`,Sp,Wn,zr="Les types simples",Ip,zn,Yr="Les chaînes de caractères",qp,Yn,Or="Les caractères sont placés entre guillemets simples et il est possible de coder un caractère sous la forme d’un entier",Vp,On,Dp,Id=`<code class="language-julia">julia<span class="token operator">></span> c <span class="token operator">=</span> <span class="token char">'a'</span>
<span class="token char">'a'</span><span class="token punctuation">:</span> ASCII<span class="token operator">/</span>Unicode U<span class="token operator">+</span><span class="token number">0061</span> <span class="token punctuation">(</span>category Ll<span class="token punctuation">:</span> Letter<span class="token punctuation">,</span> lowercase<span class="token punctuation">)</span>

julia<span class="token operator">></span> c <span class="token operator">=</span> Int<span class="token punctuation">(</span>c<span class="token punctuation">)</span> 
<span class="token number">97</span>

julia<span class="token operator">></span> Char<span class="token punctuation">(</span><span class="token number">97</span><span class="token punctuation">)</span> 
<span class="token char">'a'</span><span class="token punctuation">:</span> ASCII<span class="token operator">/</span>Unicode U<span class="token operator">+</span><span class="token number">0061</span> <span class="token punctuation">(</span>category Ll<span class="token punctuation">:</span> Letter<span class="token punctuation">,</span> lowercase<span class="token punctuation">)</span></code>`,Up,Bn,Br="Il est donc possible d’effectuer des comparaisons ou des opérations arithmétiques.",Fp,Jn,Ap,qd=`<code class="language-julia">julia<span class="token operator">></span> <span class="token char">'A'</span> <span class="token operator">&lt;</span> <span class="token char">'a'</span> 
<span class="token boolean">true</span>

julia<span class="token operator">></span> <span class="token char">'A'</span> <span class="token operator">+</span> <span class="token number">1</span> 
<span class="token char">'B'</span><span class="token punctuation">:</span> ASCII<span class="token operator">/</span>Unicode U<span class="token operator">+</span><span class="token number">0042</span> <span class="token punctuation">(</span>category Lu<span class="token punctuation">:</span> Letter<span class="token punctuation">,</span> uppercase<span class="token punctuation">)</span></code>`,Wp,Gn,Jr="Les chaînes de caractères sont placées entre guillemets doubles, ou triple s’il y a des guillemets doubles dedans.",zp,Nn,Yp,Vd=`<code class="language-julia">julia<span class="token operator">></span> str <span class="token operator">=</span> <span class="token string">"Hello World!"</span>
<span class="token string">"Hello World!"</span>


julia<span class="token operator">></span> str <span class="token operator">=</span> <span class="token string">"""Victore Hugo a prononcé la phrase "Ce gouvernement, je le caractérise d'un mot : la police partout, la justice nulle part" le 17 juillet 1851."""</span>
<span class="token string">"Victore Hugo a prononcé la phrase "Ce gouvernement, je le caractérise d'un mot : la police partout, la justice nulle part" le 17 juillet 1851."</span>
<span class="token operator">=</span><span class="token comment">#</span>

julia<span class="token operator">></span> typeof<span class="token punctuation">(</span>str<span class="token punctuation">)</span>
String</code>`,Op,Kn,Gr="Opérations sur les <code>Strings</code>",Bp,Xn,Nr="Il est possible d’itérer sur une chaine de caractères.",Jp,$n,Gp,Dd=`<code class="language-julia">julia<span class="token operator">></span> <span class="token keyword">for</span> c <span class="token keyword">in</span> <span class="token string">"Hello"</span>
           <span class="token keyword">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
       <span class="token keyword">end</span>
H
e
l
l
o</code>`,Np,Qn,Kr="De la même manière, il est possible de mesurer la longueur d’une chaîne avec les fonctions <code>length()</code> et <code>lastindex()</code>.",Kp,Zn,Xp,Ud=`<code class="language-julia">julia<span class="token operator">></span> str <span class="token operator">=</span> <span class="token string">"Bodø est une ville norvégienne située dans le comté de Nordland"</span>
<span class="token string">"Bodø est une ville norvégienne située dans le comté de Nordland"</span>

julia<span class="token operator">></span> length<span class="token punctuation">(</span>str<span class="token punctuation">)</span>
<span class="token number">63</span></code>`,$p,ns,Xr="Attention cependant à l’encodage des caractères, <code>length()</code> et <code>lastindex()</code> ne retournent pas toujours le même résultat.",Qp,ss,Zp,Fd=`<code class="language-julia">julia<span class="token operator">></span> lastindex<span class="token punctuation">(</span>str<span class="token punctuation">)</span>
<span class="token number">67</span></code>`,no,as,$r="La concaténation s’effectue avec l’opérateur <code>*</code> ou la fonction <code>join()</code>, et l’interpolation avec <code>$</code>",so,ts,ao,Ad=`<code class="language-julia">julia<span class="token operator">></span> <span class="token string">"Hello"</span><span class="token operator">*</span><span class="token string">" "</span><span class="token operator">*</span><span class="token string">"World"</span><span class="token operator">*</span><span class="token string">"!"</span>
<span class="token string">"Hello World!"</span>

julia<span class="token operator">></span> jours <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"lundi"</span><span class="token punctuation">,</span> <span class="token string">"mardi"</span><span class="token punctuation">,</span> <span class="token string">"mercredi"</span><span class="token punctuation">,</span> <span class="token string">"jeudi"</span><span class="token punctuation">,</span> <span class="token string">"vendredi"</span><span class="token punctuation">,</span> <span class="token string">"samedi"</span><span class="token punctuation">,</span> <span class="token string">"dimanche"</span><span class="token punctuation">]</span>
<span class="token number">7</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>String<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token string">"lundi"</span>
 <span class="token string">"mardi"</span>
 <span class="token string">"mercredi"</span>
 <span class="token string">"jeudi"</span>
 <span class="token string">"vendredi"</span>
 <span class="token string">"samedi"</span>
 <span class="token string">"dimanche"</span>

julia<span class="token operator">></span> join<span class="token punctuation">(</span>jours<span class="token punctuation">,</span> <span class="token string">", "</span><span class="token punctuation">,</span> <span class="token string">" et "</span><span class="token punctuation">)</span>
<span class="token string">"lundi, mardi, mercredi, jeudi, vendredi, samedi et dimanche"</span>


julia<span class="token operator">></span> surname<span class="token punctuation">,</span> forename <span class="token operator">=</span> <span class="token string">"Hugo"</span><span class="token punctuation">,</span> <span class="token string">"Victor"</span>
<span class="token punctuation">(</span><span class="token string">"Hugo"</span><span class="token punctuation">,</span> <span class="token string">"Victor"</span><span class="token punctuation">)</span>

julia<span class="token operator">></span> fullname <span class="token operator">=</span> <span class="token string">"$forename $surname"</span>
<span class="token string">"Victor Hugo"</span></code>`,to,es,Qr="Les <strong>occurrences</strong> de caractères ou de chaîne de caractères peuvent être recherchées.",eo,ps,po,Wd=`<code class="language-julia">julia<span class="token operator">></span> findfirst<span class="token punctuation">(</span><span class="token char">'l'</span><span class="token punctuation">,</span> <span class="token string">"Hello World"</span><span class="token punctuation">)</span>
<span class="token number">3</span>

julia<span class="token operator">></span> findlast<span class="token punctuation">(</span><span class="token char">'l'</span><span class="token punctuation">,</span> <span class="token string">"Hello World"</span><span class="token punctuation">)</span>
<span class="token number">10</span>

julia<span class="token operator">></span> findprev<span class="token punctuation">(</span><span class="token char">'l'</span><span class="token punctuation">,</span> <span class="token string">"Hello World"</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> 
<span class="token number">4</span>

julia<span class="token operator">></span> findnext<span class="token punctuation">(</span><span class="token char">'l'</span><span class="token punctuation">,</span> <span class="token string">"Hello World"</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token number">10</span>

julia<span class="token operator">></span> findall<span class="token punctuation">(</span><span class="token char">'l'</span><span class="token punctuation">,</span> <span class="token string">"Hello World"</span><span class="token punctuation">)</span>
<span class="token number">3</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
  <span class="token number">3</span>
  <span class="token number">4</span>
 <span class="token number">10</span>

julia<span class="token operator">></span> occursin<span class="token punctuation">(</span><span class="token string">"world"</span><span class="token punctuation">,</span> <span class="token string">"Hello world!"</span><span class="token punctuation">)</span> 
<span class="token boolean">true</span>

julia<span class="token operator">></span> occursin<span class="token punctuation">(</span><span class="token string">"Goodbye"</span><span class="token punctuation">,</span> <span class="token string">"Hello world!"</span><span class="token punctuation">)</span>
<span class="token boolean">false</span></code>`,oo,os,Zr="Julia prend aussi en charge les <strong>expressions régulières</strong> (<em>RegEx</em>)",lo,ls,co,zd=`<code class="language-julia">julia<span class="token operator">></span> str <span class="token operator">=</span> <span class="token string">"Hello World!"</span>
<span class="token string">"Hello World!"</span>

julia<span class="token operator">></span> r <span class="token operator">=</span> <span class="token regex">r"l"</span>
<span class="token regex">r"l"</span>

julia<span class="token operator">></span> typeof<span class="token punctuation">(</span>r<span class="token punctuation">)</span>
Regex

julia<span class="token operator">></span> occursin<span class="token punctuation">(</span>r<span class="token punctuation">,</span> str<span class="token punctuation">)</span>
<span class="token boolean">true</span>

julia<span class="token operator">></span> match<span class="token punctuation">(</span>r<span class="token punctuation">,</span> str<span class="token punctuation">)</span>
RegexMatch<span class="token punctuation">(</span><span class="token string">"l"</span><span class="token punctuation">)</span>

julia<span class="token operator">></span> m <span class="token operator">=</span> match<span class="token punctuation">(</span><span class="token regex">r"[0-9]"</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span> <span class="token comment"># si aucun match retour "nothing"</span>

julia<span class="token operator">></span>  <span class="token keyword">if</span> m <span class="token operator">===</span> nothing
            <span class="token keyword">return</span> <span class="token string">"no match"</span>
        <span class="token keyword">else</span>
            <span class="token keyword">return</span> <span class="token string">"match"</span>
        <span class="token keyword">end</span>
<span class="token string">"no match"</span>

julia<span class="token operator">></span> m <span class="token operator">=</span> match<span class="token punctuation">(</span><span class="token regex">r"(ll).*(l)"</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span>
RegexMatch<span class="token punctuation">(</span><span class="token string">"llo Worl"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">=</span><span class="token string">"ll"</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">=</span><span class="token string">"l"</span><span class="token punctuation">)</span>

julia<span class="token operator">></span> m<span class="token punctuation">.</span>match 
<span class="token string">"llo Worl"</span>

julia<span class="token operator">></span> m<span class="token punctuation">.</span>captures
<span class="token number">2</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Union<span class="token punctuation">&#123;</span>Nothing<span class="token punctuation">,</span> SubString<span class="token punctuation">&#123;</span>String<span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token string">"ll"</span>
 <span class="token string">"l"</span>

julia<span class="token operator">></span> m <span class="token operator">=</span> match<span class="token punctuation">(</span><span class="token regex">r"(?d+):(?d+)"</span><span class="token punctuation">,</span><span class="token string">"12:45"</span><span class="token punctuation">)</span>
RegexMatch<span class="token punctuation">(</span><span class="token string">"12:45"</span><span class="token punctuation">,</span> hour<span class="token operator">=</span><span class="token string">"12"</span><span class="token punctuation">,</span> minute<span class="token operator">=</span><span class="token string">"45"</span><span class="token punctuation">)</span>

julia<span class="token operator">></span> m<span class="token punctuation">[</span><span class="token punctuation">:</span>minute<span class="token punctuation">]</span>
<span class="token string">"45"</span>

julia<span class="token operator">></span> m<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token string">"45"</span>

julia<span class="token operator">></span> m <span class="token operator">=</span> eachmatch<span class="token punctuation">(</span>r<span class="token punctuation">,</span> str<span class="token punctuation">)</span>
Base<span class="token punctuation">.</span>RegexMatchIterator<span class="token punctuation">(</span><span class="token regex">r"l"</span><span class="token punctuation">,</span> <span class="token string">"Hello World!"</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>

julia<span class="token operator">></span> collect<span class="token punctuation">(</span>m<span class="token punctuation">)</span>
<span class="token number">3</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>RegexMatch<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 RegexMatch<span class="token punctuation">(</span><span class="token string">"l"</span><span class="token punctuation">)</span>
 RegexMatch<span class="token punctuation">(</span><span class="token string">"l"</span><span class="token punctuation">)</span>
 RegexMatch<span class="token punctuation">(</span><span class="token string">"l"</span><span class="token punctuation">)</span>

julia<span class="token operator">></span> <span class="token punctuation">[</span>m<span class="token punctuation">.</span>match <span class="token keyword">for</span> m <span class="token operator">=</span> eachmatch<span class="token punctuation">(</span>r<span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token number">3</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>SubString<span class="token punctuation">&#123;</span>String<span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token string">"l"</span>
 <span class="token string">"l"</span>
 <span class="token string">"l"</span></code>`,uo,cs,ni="Enfin, toutes les opérations classiques sur les <em>substrings</em> sont possibles.",ro,us,si="<li>pour les extraire</li>",io,rs,ko,Yd=`<code class="language-julia">julia<span class="token operator">></span> str <span class="token operator">=</span> <span class="token string">"Hello World!"</span>
<span class="token string">"Hello World!"</span>

julia<span class="token operator">></span> str<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token char">'e'</span><span class="token punctuation">:</span> ASCII<span class="token operator">/</span>Unicode U<span class="token operator">+</span><span class="token number">0065</span> <span class="token punctuation">(</span>category Ll<span class="token punctuation">:</span> Letter<span class="token punctuation">,</span> lowercase<span class="token punctuation">)</span>

julia<span class="token operator">></span> str<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span>
<span class="token string">"Hello"</span>

julia<span class="token operator">></span> str<span class="token punctuation">[</span><span class="token keyword">begin</span><span class="token punctuation">:</span><span class="token keyword">end</span><span class="token operator">-</span><span class="token number">6</span><span class="token punctuation">]</span>
<span class="token string">"Hello "</span>

julia<span class="token operator">></span> str<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token char">'H'</span><span class="token punctuation">:</span> ASCII<span class="token operator">/</span>Unicode U<span class="token operator">+</span><span class="token number">0048</span> <span class="token punctuation">(</span>category Lu<span class="token punctuation">:</span> Letter<span class="token punctuation">,</span> uppercase<span class="token punctuation">)</span>

julia<span class="token operator">></span> str<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token string">"H"</span>

julia<span class="token operator">></span> SubString<span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token string">"Hello"</span></code>`,mo,is,ai="<li>pour savoir si une chaîne contient (<code>contains()</code>), commence (<code>startswith()</code>) ou se termine (<code>endswith()</code>) par telle expression.</li>",bo,ks,fo,Od=`<code class="language-julia">julia<span class="token operator">></span> str <span class="token operator">=</span> <span class="token string">"Hello World"</span>
<span class="token string">"Hello World"</span>

julia<span class="token operator">></span> contains<span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token string">"Hello"</span><span class="token punctuation">)</span>
<span class="token boolean">true</span></code>`,vo,ms,ti="<li>pour remplacer un segment</li>",go,ds,_o,Bd=`<code class="language-julia">julia<span class="token operator">></span> replace<span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token string">"Hello"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"Goodbye"</span><span class="token punctuation">)</span>
<span class="token string">"Goodbye World!"</span></code>`,jo,bs,ei="<li>pour les tokeniser (<code>split()</code>)</li>",xo,fs,wo,Jd=`<code class="language-julia">julia<span class="token operator">></span> split<span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">)</span>
<span class="token number">2</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>SubString<span class="token punctuation">&#123;</span>String<span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token string">"Goodbye"</span>
 <span class="token string">"World"</span></code>`,Co,vs,pi="<li><p>pour les transformer <code>lowercase()</code>, <code>uppercase()</code>, <code>titlecase()</code>, <code>lowercasefirst()</code>, etc.</p></li> <li><p>ou encore pour les convertir</p></li>",yo,gs,Ho,Gd=`<code class="language-julia">julia<span class="token operator">></span> n <span class="token operator">=</span> <span class="token number">123</span>
<span class="token number">123</span>

julia<span class="token operator">></span> string<span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token comment"># de nombre vers string</span>
<span class="token string">"123"</span>

julia<span class="token operator">></span> parse<span class="token punctuation">(</span>Int64<span class="token punctuation">,</span> <span class="token string">"123"</span><span class="token punctuation">)</span> <span class="token comment"># ou de string vers nombre</span>
<span class="token number">123</span></code>`,Lo,_s,oi="Range",ho,js,li="Le type <code>UnitRange</code> correspond à un intervalle.",Po,xs,Eo,Nd=`<code class="language-julia">julia<span class="token operator">></span> r <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token number">10</span>
<span class="token number">1</span><span class="token punctuation">:</span><span class="token number">10</span>

julia<span class="token operator">></span> typeof<span class="token punctuation">(</span>r<span class="token punctuation">)</span>
UnitRange<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span></code>`,Mo,ws,ci="Pour récupérer les valeurs de cet intervalle on peut utiliser une boucle, ou la fonction <code>collect()</code>",To,Cs,Ro,Kd=`<code class="language-julia">julia<span class="token operator">></span> collect<span class="token punctuation">(</span>r<span class="token punctuation">)</span>
<span class="token number">10</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
  <span class="token number">1</span>
  <span class="token number">2</span>
  <span class="token number">3</span>
  <span class="token number">4</span>
  <span class="token number">5</span>
  <span class="token number">6</span>
  <span class="token number">7</span>
  <span class="token number">8</span>
  <span class="token number">9</span>
 <span class="token number">10</span></code>`,So,ys,ui="Il est aussi possible de modifier le pas d’un intervalle avec la syntaxe <code>start:step:stop</code>.",Io,Hs,qo,Xd=`<code class="language-julia">ulia<span class="token operator">></span> r <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token number">0.5</span><span class="token punctuation">:</span><span class="token number">3</span>
<span class="token number">1.0</span><span class="token punctuation">:</span><span class="token number">0.5</span><span class="token punctuation">:</span><span class="token number">3.0</span>

julia<span class="token operator">></span> collect<span class="token punctuation">(</span>r<span class="token punctuation">)</span>
<span class="token number">5</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Float64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">1.0</span>
 <span class="token number">1.5</span>
 <span class="token number">2.0</span>
 <span class="token number">2.5</span>
 <span class="token number">3.0</span></code>`,Vo,Ls,ri="Symbols",Do,hs,ii="@todo",Uo,Ps,ki="Data structures",Fo,Es,mi="Paires et dictionnaires",Ao,Ms,di='<a href="https://docs.julialang.org/en/v1/base/collections/#Dictionaries" rel="nofollow">Documentation Julia</a>',Wo,Ts,bi="Une paire est constituée de deux objets : une clé sa une valeur.",zo,Rs,Yo,$d=`<code class="language-julia">julia<span class="token operator">></span> p <span class="token operator">=</span> <span class="token string">"key"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"value"</span> <span class="token comment"># ou symbole pour la clé  :key => "value"</span>
<span class="token string">"key"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"value"</span>

julia<span class="token operator">></span> p<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token string">"key"</span>

julia<span class="token operator">></span> p<span class="token punctuation">.</span>first
<span class="token string">"key"</span></code>`,Oo,Ss,fi="Un dictionnaire est constitué d’une ou plusieurs paires, ils sont très commodes pour retrouver la valeur attachée à une clé.",Bo,Is,vi="Ils peuvent être déclaré soit à partir d’un vecteur <code>tuple</code>s  soit directement à partir de paires",Jo,qs,Go,Qd=`<code class="language-julia">julia<span class="token operator">></span> Dict<span class="token punctuation">(</span> <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">"A"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">"B"</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token punctuation">)</span>
Dict<span class="token punctuation">&#123;</span>String<span class="token punctuation">,</span> Int64<span class="token punctuation">&#125;</span> with <span class="token number">2</span> entries<span class="token punctuation">:</span>
  <span class="token string">"B"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">2</span>
  <span class="token string">"A"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">1</span>

julia<span class="token operator">></span> Dict<span class="token punctuation">(</span> <span class="token string">"A"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"B"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">2</span><span class="token punctuation">)</span>
Dict<span class="token punctuation">&#123;</span>String<span class="token punctuation">,</span> Int64<span class="token punctuation">&#125;</span> with <span class="token number">2</span> entries<span class="token punctuation">:</span>
  <span class="token string">"B"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">2</span>
  <span class="token string">"A"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">1</span>

<span class="token comment"># il est possible de typer les clés ou les valeurs</span>
julia<span class="token operator">></span> d <span class="token operator">=</span> Dict<span class="token punctuation">&#123;</span>String<span class="token punctuation">,</span> Integer<span class="token punctuation">&#125;</span><span class="token punctuation">(</span> <span class="token string">"A"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"B"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"C"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"Hello World"</span><span class="token punctuation">)</span>
ERROR<span class="token punctuation">:</span> MethodError<span class="token punctuation">:</span> Cannot <span class="token string">&#96;convert&#96;</span> an object of <span class="token keyword">type</span> String to an object of <span class="token keyword">type</span> Integer</code>`,No,Vs,gi="Opérations sur les clés/valeurs",Ko,Ds,_i="<li>récupérer les clés ou les valeurs avec <code>keys()</code> et <code>values()</code>, ou tester la présence d’une clé avec <code>haskey()</code></li>",Xo,Us,$o,Zd=`<code class="language-julia">julia<span class="token operator">></span> d <span class="token operator">=</span> Dict<span class="token punctuation">&#123;</span>Symbol<span class="token punctuation">,</span> Any<span class="token punctuation">&#125;</span><span class="token punctuation">(</span>
         <span class="token punctuation">:</span>hello <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"world"</span><span class="token punctuation">,</span>
         <span class="token punctuation">:</span>adios <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"Amigos"</span>
       <span class="token punctuation">)</span>
Dict<span class="token punctuation">&#123;</span>Symbol<span class="token punctuation">,</span> Any<span class="token punctuation">&#125;</span> with <span class="token number">2</span> entries<span class="token punctuation">:</span>
  <span class="token punctuation">:</span>hello <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"world"</span>
  <span class="token punctuation">:</span>adios <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"Amigos"</span>

julia<span class="token operator">></span> keys<span class="token punctuation">(</span>d<span class="token punctuation">)</span>
KeySet <span class="token keyword">for</span> a Dict<span class="token punctuation">&#123;</span>Symbol<span class="token punctuation">,</span> Any<span class="token punctuation">&#125;</span> with <span class="token number">2</span> entries<span class="token punctuation">.</span> Keys<span class="token punctuation">:</span>
  <span class="token punctuation">:</span>hello
  <span class="token punctuation">:</span>adios

julia<span class="token operator">></span> values<span class="token punctuation">(</span>d<span class="token punctuation">)</span>
ValueIterator <span class="token keyword">for</span> a Dict<span class="token punctuation">&#123;</span>Symbol<span class="token punctuation">,</span> Any<span class="token punctuation">&#125;</span> with <span class="token number">2</span> entries<span class="token punctuation">.</span> Values<span class="token punctuation">:</span>
  <span class="token string">"world"</span>
  <span class="token string">"Amigos"</span>

julia<span class="token operator">></span> haskey<span class="token punctuation">(</span>d<span class="token punctuation">,</span> <span class="token string">"salut"</span><span class="token punctuation">)</span>
<span class="token boolean">false</span></code>`,Qo,Fs,ji="<li>créer un tableau à partir de la liste des clés / valeurs avec <code>collect()</code></li>",Zo,As,nl,nb=`<code class="language-julia">julia<span class="token operator">></span> collect<span class="token punctuation">(</span>values<span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token number">2</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Any<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token string">"world"</span>
 <span class="token string">"Amigos"</span></code>`,sl,Ws,xi="<li>récupérer la valeur d’une clé avec <code>get</code> ou en appelant la <code>key</code> dans l’opérateur <code>[]</code>.</li>",al,zs,tl,sb=`<code class="language-julia">julia<span class="token operator">></span> get<span class="token punctuation">(</span>d<span class="token punctuation">,</span> <span class="token punctuation">:</span>hello<span class="token punctuation">,</span> <span class="token string">"pas de clé :hello"</span><span class="token punctuation">)</span>
<span class="token string">"world"</span>

julia<span class="token operator">></span> get<span class="token punctuation">(</span>d<span class="token punctuation">,</span> <span class="token string">"hello"</span><span class="token punctuation">,</span> <span class="token string">"pas de clé 'hello'"</span><span class="token punctuation">)</span> <span class="token comment"># cherche une clé de type String</span>
<span class="token string">"pas de clé 'hello'"</span>

julia<span class="token operator">></span> d<span class="token punctuation">[</span><span class="token punctuation">:</span>hello<span class="token punctuation">]</span>
<span class="token string">"world"</span></code>`,el,Ys,wi="<li>amender un dictionnaire avec <code>delete!()</code> ou <code>pop!()</code></li>",pl,Os,ol,ab=`<code class="language-julia">julia<span class="token operator">></span> delete<span class="token operator">!</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> <span class="token punctuation">:</span>adios<span class="token punctuation">)</span>
Dict<span class="token punctuation">&#123;</span>Symbol<span class="token punctuation">,</span> Any<span class="token punctuation">&#125;</span> with <span class="token number">1</span> entry<span class="token punctuation">:</span>
  <span class="token punctuation">:</span>hello <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"world"</span>
<span class="token comment"># si la clé n'existe pas, le dictionnaire n'est pas modifié.</span>

julia<span class="token operator">></span> pop<span class="token operator">!</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> <span class="token punctuation">:</span>hello<span class="token punctuation">)</span>
<span class="token string">"world"</span>

<span class="token comment"># pop!() retourne une erreur si la clé n'est pas trouvée...</span>
julia<span class="token operator">></span> pop<span class="token operator">!</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> <span class="token punctuation">:</span>hello<span class="token punctuation">)</span> 
ERROR<span class="token punctuation">:</span> KeyError<span class="token punctuation">:</span> key <span class="token punctuation">:</span>hello not found

<span class="token comment"># … ou une valeur par défaut si elle est précisée</span>
julia<span class="token operator">></span> pop<span class="token operator">!</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> <span class="token punctuation">:</span>hola<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token number">0</span></code>`,ll,Bs,Ci=`<li>fusionner des dictionnaires avec <code>merge()</code> (voir aussi <code>merge!()</code> et <code>mergewith()</code>.
)</li>`,cl,Js,ul,tb=`<code class="language-julia">julia<span class="token operator">></span> a <span class="token operator">=</span> Dict<span class="token punctuation">(</span><span class="token string">"foo"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token string">"bar"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">42.0</span><span class="token punctuation">)</span>
Dict<span class="token punctuation">&#123;</span>String<span class="token punctuation">,</span> Float64<span class="token punctuation">&#125;</span> with <span class="token number">2</span> entries<span class="token punctuation">:</span>
  <span class="token string">"bar"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">42.0</span>
  <span class="token string">"foo"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">0.0</span>

julia<span class="token operator">></span> b <span class="token operator">=</span> Dict<span class="token punctuation">(</span><span class="token string">"baz"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">17</span><span class="token punctuation">,</span> <span class="token string">"bar"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">4711</span><span class="token punctuation">)</span>
Dict<span class="token punctuation">&#123;</span>String<span class="token punctuation">,</span> Int64<span class="token punctuation">&#125;</span> with <span class="token number">2</span> entries<span class="token punctuation">:</span>
  <span class="token string">"bar"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">4711</span>
  <span class="token string">"baz"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">17</span>

julia<span class="token operator">></span> merge<span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
Dict<span class="token punctuation">&#123;</span>String<span class="token punctuation">,</span> Float64<span class="token punctuation">&#125;</span> with <span class="token number">3</span> entries<span class="token punctuation">:</span>
  <span class="token string">"bar"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">4711.0</span> <span class="token comment"># la valeur du second remplace celle du premier</span>
  <span class="token string">"baz"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">17.0</span>
  <span class="token string">"foo"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">0.0</span></code>`,rl,Gs,yi="Avec <code>merge!()</code>,il faut parfois ajouter les types pour résoudre les problèmes de fusion (<code>merge()</code> (sans!) ne semble pas impactée).",il,Ns,kl,eb=`<code class="language-julia">julia<span class="token operator">></span> d <span class="token operator">=</span> Dict<span class="token punctuation">(</span>
  <span class="token punctuation">:</span>title <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"myTitle"</span><span class="token punctuation">,</span>
  <span class="token punctuation">:</span>date <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"2024-01-01"</span>
<span class="token punctuation">)</span>

julia<span class="token operator">></span> c <span class="token operator">=</span> Dict<span class="token punctuation">(</span>
  <span class="token punctuation">:</span>files <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span>
    <span class="token string">"file1.text"</span><span class="token punctuation">,</span>
    <span class="token string">"file2.text"</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">)</span>

julia<span class="token operator">></span> merge<span class="token operator">!</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
ERROR<span class="token punctuation">:</span> MethodError<span class="token punctuation">:</span> Cannot <span class="token string">&#96;convert&#96;</span> an object of <span class="token keyword">type</span> Vector<span class="token punctuation">&#123;</span>String<span class="token punctuation">&#125;</span> to an object of <span class="token keyword">type</span> String

julia<span class="token operator">></span> d <span class="token operator">=</span> Dict<span class="token punctuation">&#123;</span>Symbol<span class="token punctuation">,</span> Any<span class="token punctuation">&#125;</span><span class="token punctuation">(</span> 
  <span class="token punctuation">:</span>title <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"myTitle"</span><span class="token punctuation">,</span>
  <span class="token punctuation">:</span>date <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"2024-01-01"</span>
<span class="token punctuation">)</span></code>`,ml,Ks,Hi="Les tableaux",dl,Xs,Li='<a href="https://docs.julialang.org/en/v1/manual/arrays/" rel="nofollow">Documentation Julia</a>',bl,$s,hi="Un tableau, ou <strong>array</strong>, est une séquence d’objets ou de valeurs. Généralement un <em>array</em> contient un type de données, mais ce n’est pas une obligation.",fl,Qs,vl,pb=`<code class="language-julia">julia<span class="token operator">></span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token number">3</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">1</span>
 <span class="token number">2</span>
 <span class="token number">3</span>

julia<span class="token operator">></span> b <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token char">'a'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token char">'α'</span><span class="token punctuation">,</span> <span class="token char">'β'</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token number">3</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Any<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">1</span>
  <span class="token char">'a'</span><span class="token punctuation">:</span> ASCII<span class="token operator">/</span>Unicode U<span class="token operator">+</span><span class="token number">0061</span> <span class="token punctuation">(</span>category Ll<span class="token punctuation">:</span> Letter<span class="token punctuation">,</span> lowercase<span class="token punctuation">)</span>
  <span class="token punctuation">[</span><span class="token char">'α'</span><span class="token punctuation">,</span> <span class="token char">'β'</span><span class="token punctuation">]</span>

julia<span class="token operator">></span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token comment"># une matrice</span>
        <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token number">2</span>×<span class="token number">2</span> Matrix<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">1</span>  <span class="token number">2</span>
 <span class="token number">3</span>  <span class="token number">4</span></code>`,gl,Zs,Pi="Il existe deux types d’<em>array</em> :",_l,na,Ei="<li>les vecteurs, <code>Vector{T}</code>, (une dimension) ;</li> <li>les matrices, <code>Matrix{T}</code> (deux dimensions).</li>",jl,sa,Mi="Il existe plusieurs méthodes pour créer des tableaux. La première méthode est d’utiliser les constructeurs par défaut <code>Vector{T}(undef, n)</code> (construit un <code>Vector{T}</code> non initialisé de longueur <code>n</code>.) ou <code>Matrix{T}(undef, m, n)</code> (matrice non initialisée de taille <code>m</code> x <code>n</code>)",xl,aa,wl,ob=`<code class="language-julia">julia<span class="token operator">></span> a <span class="token operator">=</span> Vector<span class="token punctuation">&#123;</span>Float64<span class="token punctuation">&#125;</span><span class="token punctuation">(</span>undef<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token number">3</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Float64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">2.03e-322</span>
 <span class="token number">6.5e-322</span>
 <span class="token number">2.2062283473e-314</span>

julia<span class="token operator">></span> a <span class="token operator">=</span> Matrix<span class="token punctuation">&#123;</span>Float64<span class="token punctuation">&#125;</span><span class="token punctuation">(</span>undef<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token number">3</span>×<span class="token number">2</span> Matrix<span class="token punctuation">&#123;</span>Float64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">2.20472e-314</span>  <span class="token number">2.20472e-314</span>
 <span class="token number">2.20472e-314</span>  <span class="token number">2.20472e-314</span>
 <span class="token number">2.20472e-314</span>  <span class="token number">2.20472e-314</span></code>`,Cl,ta,Ti="Julia dispose également d’alias syntaxiques pour les éléments les plus courants dans la construction de tableaux :",yl,ea,Hl,lb=`<code class="language-julia">julia<span class="token operator">></span> v <span class="token operator">=</span> zeros<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment"># initialise avec des O on peut aussi passer un type zeros(Float64, 5)</span>
<span class="token number">5</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Float64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">0.0</span>
 <span class="token number">0.0</span>
 <span class="token number">0.0</span>
 <span class="token number">0.0</span>
 <span class="token number">0.0</span>


julia<span class="token operator">></span> m <span class="token operator">=</span> ones<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment"># initialise avec des 1</span>
<span class="token number">5</span>×<span class="token number">3</span> Matrix<span class="token punctuation">&#123;</span>Float64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">1.0</span>  <span class="token number">1.0</span>  <span class="token number">1.0</span>
 <span class="token number">1.0</span>  <span class="token number">1.0</span>  <span class="token number">1.0</span>
 <span class="token number">1.0</span>  <span class="token number">1.0</span>  <span class="token number">1.0</span>
 <span class="token number">1.0</span>  <span class="token number">1.0</span>  <span class="token number">1.0</span>
 <span class="token number">1.0</span>  <span class="token number">1.0</span>  <span class="token number">1.0</span></code>`,Ll,pa,Ri="Il est aussi possible d’instancier un <em>array</em> vide puis de la remplir avec <code>fill!()</code>.",hl,oa,Pl,cb=`<code class="language-julia">julia<span class="token operator">></span> m <span class="token operator">=</span> Matrix<span class="token punctuation">&#123;</span>Float64<span class="token punctuation">&#125;</span><span class="token punctuation">(</span>undef<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token number">2</span>×<span class="token number">2</span> Matrix<span class="token punctuation">&#123;</span>Float64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">1.6e-322</span>    <span class="token number">2.20881e-314</span>
 <span class="token number">2.351e-314</span>  <span class="token number">1.0e-323</span>

julia<span class="token operator">></span> fill<span class="token operator">!</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> <span class="token constant">π</span><span class="token punctuation">)</span>
<span class="token number">2</span>×<span class="token number">2</span> Matrix<span class="token punctuation">&#123;</span>Float64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">3.14159</span>  <span class="token number">3.14159</span>
 <span class="token number">3.14159</span>  <span class="token number">3.14159</span></code>`,El,la,Si="Ou simplement en utilisant des crochets <code>[]</code>",Ml,ca,Tl,ub=`<code class="language-julia">julia<span class="token operator">></span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token number">3</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">1</span>
 <span class="token number">2</span>
 <span class="token number">3</span>

julia<span class="token operator">></span> <span class="token punctuation">[</span>x<span class="token operator">*</span><span class="token number">2</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span>
<span class="token number">4</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">2</span>
 <span class="token number">4</span>
 <span class="token number">6</span>
 <span class="token number">8</span>

julia<span class="token operator">></span> <span class="token punctuation">[</span>zeros<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> ones<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token number">3</span>×<span class="token number">2</span> Matrix<span class="token punctuation">&#123;</span>Float64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">0.0</span>  <span class="token number">1.0</span>
 <span class="token number">0.0</span>  <span class="token number">1.0</span>
 <span class="token number">0.0</span>  <span class="token number">1.0</span></code>`,Rl,ua,Ii="La concaténation peut aussi être utilisée pour créer un nouvel array (<code>cat()</code>).",Sl,ra,Il,rb=`<code class="language-julia">julia<span class="token operator">></span> cat<span class="token punctuation">(</span>ones<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> ones<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> dims<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment"># voir aussi hcat() (cat(…; dims=2)) et vcat() (cat(…; dims=1))</span>
<span class="token number">3</span>×<span class="token number">2</span> Matrix<span class="token punctuation">&#123;</span>Float64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">1.0</span>  <span class="token number">1.0</span>
 <span class="token number">1.0</span>  <span class="token number">1.0</span>
 <span class="token number">1.0</span>  <span class="token number">1.0</span>

julia<span class="token operator">></span> arrA <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
julia<span class="token operator">></span> arrB <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>

julia<span class="token operator">></span> append<span class="token operator">!</span><span class="token punctuation">(</span>arrA<span class="token punctuation">,</span> arrB<span class="token punctuation">)</span> <span class="token comment"># concat arrB à la suite de arrA</span>
<span class="token number">6</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">1</span>
 <span class="token number">2</span>
 <span class="token number">3</span>
 <span class="token number">4</span>
 <span class="token number">5</span>
 <span class="token number">6</span></code>`,ql,ia,qi="Une fois la tableaux établit, il est possible de le parcourir. Mais préalablement, il est souvent nécessaire de connaître les caractéristiques du tableau : taille (<code>size()</code>), longueur (<code>length()</code>), dimensions (<code>ndims()</code>), type des éléments (<code>eltype()</code>)",Vl,ka,Dl,ib=`<code class="language-julia">julia<span class="token operator">></span> v <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token number">3</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">1</span>
 <span class="token number">2</span>
 <span class="token number">3</span>

julia<span class="token operator">></span> m <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>
            <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span>
<span class="token number">2</span>×<span class="token number">3</span> Matrix<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">1</span>  <span class="token number">2</span>  <span class="token number">3</span>
 <span class="token number">4</span>  <span class="token number">5</span>  <span class="token number">6</span>

julia<span class="token operator">></span> size<span class="token punctuation">(</span>m<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

julia<span class="token operator">></span> ndims<span class="token punctuation">(</span>v<span class="token punctuation">)</span>
<span class="token number">1</span></code>`,Ul,ma,Vi="Les valeurs dans un tableau sont indexées par des des entiers, il est donc très facile de récupérer une valeur ou un segment.",Fl,da,Al,kb=`<code class="language-julia">julia<span class="token operator">></span> v<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token number">2</span>

julia<span class="token operator">></span> v<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token keyword">end</span><span class="token punctuation">]</span>
<span class="token number">2</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">2</span>
 <span class="token number">3</span>

julia<span class="token operator">></span> m
<span class="token number">2</span>×<span class="token number">3</span> Matrix<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">1</span>  <span class="token number">2</span>  <span class="token number">3</span>
 <span class="token number">4</span>  <span class="token number">5</span>  <span class="token number">6</span>

julia<span class="token operator">></span> m<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
<span class="token number">5</span>

julia<span class="token operator">></span> m<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">]</span>
<span class="token number">3</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">4</span>
 <span class="token number">5</span>
 <span class="token number">6</span>

julia<span class="token operator">></span> m<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token number">2</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">1</span>
 <span class="token number">4</span></code>`,Wl,ba,Di="Les tableaux sont mutables, il est donc possible de réassigner une valeur ou un segment très simplement en utilisant le signe <code>=</code>, mais aussi d’ajouter des valeurs (<code>push!()</code>, <code>pushfirst!()</code>), d’en supprimer (<code>pop!()</code>, <code>popfirst!()</code> et <code>deleteat!()</code>), de le trier (<code>sort!()</code>).",zl,fa,Yl,mb=`<code class="language-julia">julia<span class="token operator">></span> m
<span class="token number">2</span>×<span class="token number">3</span> Matrix<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">1</span>  <span class="token number">2</span>  <span class="token number">3</span>
 <span class="token number">4</span>  <span class="token number">5</span>  <span class="token number">6</span>

julia<span class="token operator">></span> m<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">50</span>
<span class="token number">50</span>

julia<span class="token operator">></span> m
<span class="token number">2</span>×<span class="token number">3</span> Matrix<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">1</span>   <span class="token number">2</span>  <span class="token number">3</span>
 <span class="token number">4</span>  <span class="token number">50</span>  <span class="token number">6</span>

julia<span class="token operator">></span> arr <span class="token operator">=</span> Integer<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token number">3</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Integer<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">1</span>
 <span class="token number">2</span>
 <span class="token number">3</span>

julia<span class="token operator">></span> pop<span class="token operator">!</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment"># suppression d'un élément en fin de tableau</span>
<span class="token number">3</span>

julia<span class="token operator">></span> popfirst<span class="token operator">!</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment"># suppression d'un élément en debut tableau</span>
<span class="token number">1</span>

julia<span class="token operator">></span> arr
<span class="token number">1</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Integer<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">2</span>

julia<span class="token operator">></span> pushfirst<span class="token operator">!</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token number">2</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Integer<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">1</span>
 <span class="token number">2</span>


julia<span class="token operator">></span> push<span class="token operator">!</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token number">3</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Integer<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">1</span>
 <span class="token number">2</span>
 <span class="token number">3</span>

julia<span class="token operator">></span> deleteat<span class="token operator">!</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token number">2</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Integer<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">1</span>
 <span class="token number">3</span>

julia<span class="token operator">></span> sort<span class="token operator">!</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token char">'c'</span><span class="token punctuation">,</span> <span class="token char">'b'</span><span class="token punctuation">,</span> <span class="token char">'a'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token number">3</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Char<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token char">'a'</span><span class="token punctuation">:</span> ASCII<span class="token operator">/</span>Unicode U<span class="token operator">+</span><span class="token number">0061</span> <span class="token punctuation">(</span>category Ll<span class="token punctuation">:</span> Letter<span class="token punctuation">,</span> lowercase<span class="token punctuation">)</span>
 <span class="token char">'b'</span><span class="token punctuation">:</span> ASCII<span class="token operator">/</span>Unicode U<span class="token operator">+</span><span class="token number">0062</span> <span class="token punctuation">(</span>category Ll<span class="token punctuation">:</span> Letter<span class="token punctuation">,</span> lowercase<span class="token punctuation">)</span>
 <span class="token char">'c'</span><span class="token punctuation">:</span> ASCII<span class="token operator">/</span>Unicode U<span class="token operator">+</span><span class="token number">0063</span> <span class="token punctuation">(</span>category Ll<span class="token punctuation">:</span> Letter<span class="token punctuation">,</span> lowercase<span class="token punctuation">)</span></code>`,Ol,va,Ui="Il est également possible de modifier la forme d’un tableau, comme par exemple passer d’un vecteur à un matrice, à l’aide de la fonction <code>reshape()</code>",Bl,ga,Jl,db=`<code class="language-julia">julia<span class="token operator">></span> v <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token number">4</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">1</span>
 <span class="token number">2</span>
 <span class="token number">3</span>
 <span class="token number">4</span>

julia<span class="token operator">></span> v2m <span class="token operator">=</span> reshape<span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># création d'une matrice 2x2</span>
<span class="token number">2</span>×<span class="token number">2</span> Matrix<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">1</span>  <span class="token number">3</span>
 <span class="token number">2</span>  <span class="token number">4</span>

julia<span class="token operator">></span> m <span class="token operator">=</span> reshape<span class="token punctuation">(</span>v2m<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># création d'un vecteur à partir d'une matrice.</span>
<span class="token number">4</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">1</span>
 <span class="token number">2</span>
 <span class="token number">3</span>
 <span class="token number">4</span></code>`,Gl,_a,Fi="Des fonctions peuvent être appliquées à chaque élément d’un array. On utilise généralement l’opérateur <code>dot</code> (<em>broadcasting</em>).",Nl,ja,Kl,bb=`<code class="language-julia">julia<span class="token operator">></span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token operator">+</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token comment"># [1+4, 2+5, 3+6]  </span>
<span class="token number">3</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">5</span>
 <span class="token number">7</span>
 <span class="token number">9</span>

julia<span class="token operator">></span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token operator">-</span><span class="token number">1</span>
<span class="token number">3</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">0</span>
 <span class="token number">1</span>
 <span class="token number">2</span>

julia<span class="token operator">></span> extentions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"jpg"</span><span class="token punctuation">,</span> <span class="token string">"JPG"</span><span class="token punctuation">,</span> <span class="token string">"jpeg"</span><span class="token punctuation">,</span> <span class="token string">"png"</span><span class="token punctuation">,</span> <span class="token string">"PNG"</span><span class="token punctuation">,</span> <span class="token string">"tif"</span><span class="token punctuation">,</span> <span class="token string">"tiff"</span><span class="token punctuation">]</span>
julia<span class="token operator">></span> file <span class="token operator">=</span> <span class="token string">"picture.jpg"</span>
julia<span class="token operator">></span> endswith<span class="token punctuation">.</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> extentions<span class="token punctuation">)</span> <span class="token comment"># retourne un vecteur de booléens</span>
<span class="token number">7</span><span class="token operator">-</span>element BitVector<span class="token punctuation">:</span>
 <span class="token number">1</span>
 <span class="token number">0</span>
 <span class="token number">0</span>
 <span class="token number">0</span>
 <span class="token number">0</span>
 <span class="token number">0</span>
 <span class="token number">0</span>
<span class="token comment"># voir d'autres exemple dans les opérateurs de collection (in)   </span></code>`,Xl,xa,Ai="Attention a la vectorisation avec l’opérateur <code>in</code>. Si les deux arguments sont des vecteurs de même longueur (retourne un erreur si les dimension ne correspondent pas), <code>in.(items, collection)</code> retourne un vecteur indiquant si chaque valeur de <code>items</code> est dans la valeur à la position correspondante dans <code>collection</code>.",$l,wa,Ql,fb=`<code class="language-julia">julia<span class="token operator">></span> <span class="token keyword">in</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token number">2</span><span class="token operator">-</span>element BitVector<span class="token punctuation">:</span>
 <span class="token number">0</span>
 <span class="token number">0</span></code>`,Zl,Ca,Wi="Pour obtenir un vecteur indiquant si chaque item est dans la collection, il faut envelopper la collection dans un <code>tuple</code> ou un <code>Ref()</code>",nc,ya,sc,vb=`<code class="language-julia">julia<span class="token operator">></span> <span class="token keyword">in</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># ne pas oublier la virgule</span>
<span class="token number">2</span><span class="token operator">-</span>element BitVector<span class="token punctuation">:</span>
 <span class="token number">0</span>
 <span class="token number">1</span>
<span class="token comment"># ou in.([1,2], Ref([2,3]))</span></code>`,ac,Ha,zi="Produit scalaire",tc,La,ec,gb=`<code class="language-julia">julia<span class="token operator">></span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
julia<span class="token operator">></span> b <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
julia<span class="token operator">></span> sum<span class="token punctuation">(</span>a <span class="token punctuation">.</span><span class="token operator">*</span> b<span class="token punctuation">)</span> <span class="token comment"># (1*2 + 2*3 + 3*4)</span>
<span class="token number">20</span>
</code>`,pc,ha,Yi="Une autre possibilité est d’utiliser la fonction <code>map()</code>.",oc,Pa,lc,_b=`<code class="language-julia">julia<span class="token operator">></span> map<span class="token punctuation">(</span>x <span class="token operator">-</span><span class="token operator">></span> x<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token number">3</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">2</span>
 <span class="token number">3</span>
 <span class="token number">4</span></code>`,cc,Ea,Oi="De nombreuses autres opérations sont applicables aux tableaux : jointure, appartenance, contient, sous-ensemble, etc.",uc,Ma,rc,jb=`<code class="language-julia">julia<span class="token operator">></span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
julia<span class="token operator">></span> join<span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token string">","</span><span class="token punctuation">)</span>
<span class="token string">"1,2,3"</span></code>`,ic,Ta,Bi="Opérateurs :",kc,Ra,Ji="<li><code>in</code> | <code>∈</code> : appartient</li> <li><code>∉</code> : n’appartient pas</li> <li><code>issubset</code> : sous-ensemble</li>",mc,Sa,dc,xb=`<code class="language-julia">julia<span class="token operator">></span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token number">5</span>
julia<span class="token operator">></span> <span class="token number">3</span> <span class="token keyword">in</span> a <span class="token comment"># autres notations : in(3, 1:5) ou 3 ∈ 1:5</span>
<span class="token boolean">true</span></code>`,bc,Ia,Gi="Attention avec la valeur missing…",fc,qa,vc,wb=`<code class="language-julia">julia<span class="token operator">></span> <span class="token number">1</span> <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> missing<span class="token punctuation">]</span>
<span class="token boolean">true</span>

julia<span class="token operator">></span> missing <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> missing<span class="token punctuation">]</span>
missing</code>`,gc,Va,_c,Cb=`<code class="language-julia">julia<span class="token operator">></span> issubset<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token boolean">true</span></code>`,jc,Da,Ni="Tuples",xc,Ua,Ki="Un <code>tuple</code> est assez proche d’un tableau, il correspond à une séquence de valeurs indexées par des entiers. Les valeurs sont séparées par une virgule et chacune peut disposer de son propre type. On les place généralement entre parenthèses mais ces dernières ne sont pas obligatoires. Ils se distinguent des tableaux par leur caractère <strong>immuable</strong>.",wc,Fa,Cc,yb=`<code class="language-julia">julia<span class="token operator">></span> t <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span>
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

julia<span class="token operator">></span> t <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

julia<span class="token operator">></span> t <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">)</span>

julia<span class="token operator">></span> typeof<span class="token punctuation">(</span>t<span class="token punctuation">)</span>
Tuple<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span>

julia<span class="token operator">></span> tuple<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment"># on peut également utiliser la fonction tuple()</span>
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

julia<span class="token operator">></span> t<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment"># comme pour les tableaux, les valeurs sont indexées.</span>
<span class="token number">1</span></code>`,yc,Aa,Xi="Les tuples sont très utilisés pour l’affectation (ou réaffectation) de variables.",Hc,Wa,Lc,Hb=`<code class="language-julia">julia<span class="token operator">></span> a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span>
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

julia<span class="token operator">></span> str <span class="token operator">=</span> <span class="token string">"Hello World"</span>
<span class="token string">"Hello World"</span>

julia<span class="token operator">></span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=</span> split<span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">)</span>
<span class="token number">2</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>SubString<span class="token punctuation">&#123;</span>String<span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token string">"Hello"</span>
 <span class="token string">"World"</span></code>`,hc,za,$i="Certaines fonctions peuvent prendre un nombre variable d’arguments, reconnaissables par les <code>...</code> qui suivent le nom du paramètre. Dans ce cas, les différents arguments sont agrégés dans un tuple.",Pc,Ya,Ec,Lb=`<code class="language-julia">julia<span class="token operator">></span> <span class="token keyword">function</span> add<span class="token punctuation">(</span>args<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
           sum<span class="token punctuation">(</span>args<span class="token punctuation">)</span>
       <span class="token keyword">end</span>
add <span class="token punctuation">(</span>generic <span class="token keyword">function</span> with <span class="token number">1</span> method<span class="token punctuation">)</span>

julia<span class="token operator">></span> add<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token number">15</span></code>`,Mc,Oa,Qi="On peut avoir recours au tuples lorsque l’on souhaite passer plusieurs arguments dans une fonction anonyme.",Tc,Ba,Rc,hb=`<code class="language-julia">julia<span class="token operator">></span> map<span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> x<span class="token operator">*</span>y<span class="token operator">^</span>z<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token number">324</span></code>`,Sc,Ja,Zi="Un nom peut être associé a chaque valeur d’un tuple.",Ic,Ga,qc,Pb=`<code class="language-julia">julia<span class="token operator">></span> <span class="token punctuation">(</span>a<span class="token operator">=</span><span class="token char">'a'</span><span class="token punctuation">,</span> b<span class="token operator">=</span><span class="token char">'c'</span><span class="token punctuation">,</span> c<span class="token operator">=</span><span class="token char">'c'</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span>a <span class="token operator">=</span> <span class="token char">'a'</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token char">'c'</span><span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token char">'c'</span><span class="token punctuation">)</span></code>`,Vc,Na,nk="Une syntaxe existe également pour créer un tuple nommé à partir de variables préexistantes. Elle reprend le principe des arguments mots-clés avec les fonctions et l’emploi d’un point-virgule <code>;</code>.",Dc,Ka,Uc,Eb=`<code class="language-julia">julia<span class="token operator">></span> a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token char">'a'</span><span class="token punctuation">,</span> <span class="token char">'b'</span>
<span class="token punctuation">(</span><span class="token char">'a'</span><span class="token punctuation">,</span> <span class="token char">'b'</span><span class="token punctuation">)</span>

julia<span class="token operator">></span> t <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
<span class="token punctuation">(</span>a <span class="token operator">=</span> <span class="token char">'a'</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token char">'b'</span><span class="token punctuation">)</span></code>`,Fc,Xa,sk="Voir aussi les utilisations de <code>collect()</code> et <code>zip()</code> avec les tuples.",Ac,$a,ak="DataFrames",Wc,Qa,tk='<a href="https://dataframes.juliadata.org/stable/" rel="nofollow">Documentation DataFrames.jl</a>',zc,Za,ek="Il existe de nombreuses méthodes pour créer un <em>DataFrames</em>, à partir de vecteurs, de paires, de vecteurs de paires, de dictionnaires, avec des tuples de vecteurs nommés, colonne par colonne, ligne à ligne, etc.",Yc,nt,Oc,Mb=`<code class="language-julia">julia<span class="token operator">></span> <span class="token keyword">using</span> DataFrames
julia<span class="token operator">></span>  DataFrame<span class="token punctuation">(</span>
            a<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">,</span>
            b<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">"Yoda"</span><span class="token punctuation">,</span> <span class="token string">"Han Solo"</span><span class="token punctuation">,</span> <span class="token string">"Luke"</span><span class="token punctuation">,</span> <span class="token string">"Dark Vador"</span><span class="token punctuation">]</span>
        <span class="token punctuation">)</span>
<span class="token number">4</span>×<span class="token number">2</span> DataFrame
 Row │ a      b          
     │ Int64  String     
─────┼───────────────────
   <span class="token number">1</span> │     <span class="token number">1</span>  Yoda
   <span class="token number">2</span> │     <span class="token number">2</span>  Han Solo
   <span class="token number">3</span> │     <span class="token number">3</span>  Luke
   <span class="token number">4</span> │     <span class="token number">4</span>  Dark Vador

<span class="token comment"># avec des paires</span>
julia<span class="token operator">></span> DataFrame<span class="token punctuation">(</span><span class="token string">"a"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"b"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span><span class="token string">"Yoda"</span><span class="token punctuation">,</span> <span class="token string">"Han Solo"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># avec un vecteur de paires</span>
julia<span class="token operator">></span> DataFrame<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"a"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"b"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span><span class="token string">"Yoda"</span><span class="token punctuation">,</span> <span class="token string">"Han Solo"</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># avec un dictionnaire</span>
julia<span class="token operator">></span> DataFrame<span class="token punctuation">(</span>Dict<span class="token punctuation">(</span>
  <span class="token string">"a"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">,</span> 
  <span class="token string">"b"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span><span class="token string">"Yoda"</span><span class="token punctuation">,</span> <span class="token string">"Han Solo"</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># un tuple de vecteurs identifiés...</span>
julia<span class="token operator">></span> DataFrame<span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> b<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">"Yoda"</span><span class="token punctuation">,</span> <span class="token string">"Han Solo"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># ... ou un vecteur de tuples</span>
julia<span class="token operator">></span> DataFrame<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span>a<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> b<span class="token operator">=</span><span class="token string">"Yoda"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>a<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> b<span class="token operator">=</span><span class="token string">"Han Solo"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># construction colonne par colonne</span>
julia<span class="token operator">></span> df <span class="token operator">=</span> DataFrame<span class="token punctuation">(</span><span class="token punctuation">)</span>
julia<span class="token operator">></span> df<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token number">2</span> <span class="token comment"># ajout de la colonne a</span>
julia<span class="token operator">></span> df<span class="token punctuation">[</span><span class="token operator">!</span><span class="token punctuation">,</span> <span class="token punctuation">:</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Yoda"</span><span class="token punctuation">,</span> <span class="token string">"Han Solo"</span><span class="token punctuation">]</span> <span class="token comment">#ajout de la colonne b (autre syntaxe)</span>

<span class="token comment"># construction ligne à ligne</span>
julia<span class="token operator">></span> df <span class="token operator">=</span> DataFrame<span class="token punctuation">(</span>a<span class="token operator">=</span>Int<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> b<span class="token operator">=</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
julia<span class="token operator">></span> push<span class="token operator">!</span><span class="token punctuation">(</span>df<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"Yoda"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
julia<span class="token operator">></span> push<span class="token operator">!</span><span class="token punctuation">(</span>df<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"Han Solo"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># Il est possible d'utiliser pushfirst!() pour ajouter une ligne au début</span>
<span class="token comment"># insert!() pour ajouter une ligne à un index donné</span>
<span class="token comment"># append!() ou prepend!() pour ajouter des tables entières </span></code>`,Bc,st,pk="Et même à partir de données tabulaires",Jc,at,Gc,Tb=`<code class="language-csv"><span class="token value">#data.csv</span>
<span class="token value">a</span><span class="token punctuation">,</span><span class="token value">b</span>
<span class="token value">1</span><span class="token punctuation">,</span><span class="token value">"Yoda"</span>
<span class="token value">2</span><span class="token punctuation">,</span><span class="token value">"Han Solo"</span></code>`,Nc,tt,Kc,Rb=`<code class="language-julia">julia<span class="token operator">></span> <span class="token keyword">using</span> CSV
julia<span class="token operator">></span> df <span class="token operator">=</span> DataFrame<span class="token punctuation">(</span>CSV<span class="token punctuation">.</span>File<span class="token punctuation">(</span><span class="token string">"data.csv"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token number">2</span>×<span class="token number">2</span> DataFrame
 Row │ a      b        
     │ Int64  String   
─────┼─────────────────
   <span class="token number">1</span> │     <span class="token number">1</span>  Yoda
   <span class="token number">2</span> │     <span class="token number">2</span>  Han Solo</code>`,Xc,et,ok="Les noms des colonnes peuvent être récupérés sous la forme d’un vecteur avec la fonction <code>names()</code>",$c,pt,Qc,Sb=`<code class="language-julia">julia<span class="token operator">></span> names<span class="token punctuation">(</span>df<span class="token punctuation">)</span>
<span class="token number">2</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>String<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token string">"a"</span>
 <span class="token string">"b"</span>

julia<span class="token operator">></span> propertynames<span class="token punctuation">(</span>df<span class="token punctuation">)</span> <span class="token comment"># retourne les noms de colonne sous forme de symboles</span>
<span class="token number">2</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Symbol<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token punctuation">:</span>a
 <span class="token punctuation">:</span>b</code>`,Zc,ot,lk="Cette même fonction permet de faire des recherches dans le noms de colonnes.",nu,lt,su,Ib=`<code class="language-julia">julia<span class="token operator">></span> names<span class="token punctuation">(</span>df<span class="token punctuation">,</span> <span class="token regex">r"a"</span><span class="token punctuation">)</span> <span class="token comment"># liste les colonnes avec RegEx</span>
julia<span class="token operator">></span> names<span class="token punctuation">(</span>df<span class="token punctuation">,</span> Not<span class="token punctuation">(</span><span class="token punctuation">:</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># tous les noms de colonnes sauf :b</span>
julia<span class="token operator">></span> names<span class="token punctuation">(</span>df<span class="token punctuation">,</span> Int<span class="token punctuation">)</span> <span class="token comment"># liste les colonnes en fonction du type de données</span></code>`,au,ct,ck="On peut récupérer un vecteur des valeurs d’une colonne de différentes manières",tu,ut,eu,qb=`<code class="language-julia">julia<span class="token operator">></span> df<span class="token punctuation">.</span>b
julia<span class="token operator">></span> df<span class="token punctuation">.</span><span class="token string">"b"</span>
julia<span class="token operator">></span> df<span class="token punctuation">[</span><span class="token operator">!</span><span class="token punctuation">,</span> <span class="token punctuation">:</span>b<span class="token punctuation">]</span>
julia<span class="token operator">></span> df<span class="token punctuation">[</span><span class="token operator">!</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">]</span>
julia<span class="token operator">></span> df<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token punctuation">:</span>b<span class="token punctuation">]</span>
julia<span class="token operator">></span> df<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">]</span>
<span class="token number">2</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>String<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token string">"Yoda"</span>
 <span class="token string">"Han Solo"</span></code>`,pu,rt,uk="Il existe cependant une différente entre <code>df[!, :b]</code> et <code>df[:, :b]</code> : le <em>bang operator</em> <code>!</code> indique qu’une copie n’est pas réalisée. Si on change un élément du vecteur alors il sera propagé au Dataframe.",ou,it,rk="<p>Columns can be directly (i.e. without copying) accessed via df.col or df[!, :col]. […] Since df[!, :col] does not make a copy, changing the elements of the column vector returned by this syntax will affect the values stored in the original df. To get a copy of the column use df[:, :col]: changing the vector returned by this syntax does not change df.</p>",lu,kt,cu,Vb=`<code class="language-julia">julia<span class="token operator">></span> df <span class="token operator">=</span> DataFrame<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"a"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"b"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span><span class="token string">"Yoda"</span><span class="token punctuation">,</span> <span class="token string">"Han Solo"</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
julia<span class="token operator">></span> v <span class="token operator">=</span> df<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token punctuation">:</span>b<span class="token punctuation">]</span> <span class="token comment"># pas de bang, la valeur ne sera pas modifiée</span>
<span class="token number">2</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>String<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token string">"Yoda"</span>
 <span class="token string">"Han Solo"</span>

julia<span class="token operator">></span> v<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Dark Vador"</span>
<span class="token string">"Dark Vador"</span>

julia<span class="token operator">></span> df
<span class="token number">2</span>×<span class="token number">2</span> DataFrame
 Row │ a      b        
     │ Int64  String   
─────┼─────────────────
   <span class="token number">1</span> │     <span class="token number">1</span>  Yoda
   <span class="token number">2</span> │     <span class="token number">2</span>  Han Solo


julia<span class="token operator">></span> v <span class="token operator">=</span> df<span class="token punctuation">[</span><span class="token operator">!</span><span class="token punctuation">,</span> <span class="token punctuation">:</span>b<span class="token punctuation">]</span> <span class="token comment"># bang opérateur</span>
julia<span class="token operator">></span> v<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Dark Vador"</span>
julia<span class="token operator">></span> df <span class="token comment"># utilisation de bang, la valeur est modifiée.</span>
<span class="token number">2</span>×<span class="token number">2</span> DataFrame
 Row │ a      b          
     │ Int64  String     
─────┼───────────────────
   <span class="token number">1</span> │     <span class="token number">1</span>  Yoda
   <span class="token number">2</span> │     <span class="token number">2</span>  Dark Vador</code>`,uu,mt,ik='Voir la documentation pour travailler avec les <a href="https://dataframes.juliadata.org/stable/man/working_with_dataframes/" rel="nofollow"><em>subsets</em></a> et pour les nombreuses options de <a href="https://dataframes.juliadata.org/stable/man/sorting/" rel="nofollow">tri</a>.',ru,dt,kk="Pour récupérer une ligne ou un groupe de lignes et/ou des colonnes spécifiques, on utilise la notation suivante :",iu,bt,ku,Db=`<code class="language-julia">julia<span class="token operator">></span> names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Yoda"</span><span class="token punctuation">,</span> <span class="token string">"Dark Vador"</span><span class="token punctuation">,</span> <span class="token string">"Luke Skywalker"</span><span class="token punctuation">,</span> <span class="token string">"Mace Windu"</span><span class="token punctuation">]</span>
<span class="token number">4</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>String<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token string">"Yoda"</span>
 <span class="token string">"Dark Vador"</span>
 <span class="token string">"Luke Skywalker"</span>
 <span class="token string">"Mace Windu"</span>

julia<span class="token operator">></span> side <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"light"</span><span class="token punctuation">,</span> <span class="token string">"dark"</span><span class="token punctuation">,</span> <span class="token string">"light"</span><span class="token punctuation">,</span> <span class="token string">"light"</span><span class="token punctuation">]</span>
<span class="token number">4</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>String<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token string">"light"</span>
 <span class="token string">"dark"</span>
 <span class="token string">"light"</span>
 <span class="token string">"light"</span>

julia<span class="token operator">></span> df <span class="token operator">=</span> DataFrame<span class="token punctuation">(</span><span class="token punctuation">;</span> name<span class="token operator">=</span>names<span class="token punctuation">,</span> side<span class="token operator">=</span>side<span class="token punctuation">)</span>
<span class="token number">4</span>×<span class="token number">2</span> DataFrame
 Row │ name            side   
     │ String          String 
─────┼────────────────────────
   <span class="token number">1</span> │ Yoda            light
   <span class="token number">2</span> │ Dark Vador      dark
   <span class="token number">3</span> │ Luke Skywalker  light
   <span class="token number">4</span> │ Mace Windu      light

julia<span class="token operator">></span> df<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">]</span>
<span class="token number">2</span>×<span class="token number">2</span> DataFrame
 Row │ name        side   
     │ String      String 
─────┼────────────────────
   <span class="token number">1</span> │ Yoda        light
   <span class="token number">2</span> │ Dark Vador  dark

julia<span class="token operator">></span> df<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">]</span>
DataFrameRow
 Row │ name            side   
     │ String          String 
─────┼────────────────────────
   <span class="token number">3</span> │ Luke Skywalker  light

julia<span class="token operator">></span> df<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">:</span>side<span class="token punctuation">]</span> <span class="token comment"># lignes 1 et 3 uniquement la colonne side</span>
<span class="token number">2</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>String<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token string">"light"</span>
 <span class="token string">"light"</span>

julia<span class="token operator">></span> df<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">:</span>side<span class="token punctuation">,</span> <span class="token punctuation">:</span>name<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token comment"># uniquement lignes 1 et 3 et colonne side et name</span>
<span class="token number">2</span>×<span class="token number">2</span> DataFrame
 Row │ side    name           
     │ String  String         
─────┼────────────────────────
   <span class="token number">1</span> │ light   Yoda
   <span class="token number">2</span> │ light   Luke Skywalker</code>`,mu,ft,mk="On peut également filtrer les résultats en fonction de la valeur d’une ou de plusieurs cellules :",du,vt,bu,Ub=`<code class="language-julia">julia<span class="token operator">></span> df<span class="token punctuation">[</span>df<span class="token punctuation">.</span>side <span class="token punctuation">.</span><span class="token operator">==</span> <span class="token string">"light"</span><span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">]</span>
<span class="token number">3</span>×<span class="token number">2</span> DataFrame
 Row │ name            side   
     │ String          String 
─────┼────────────────────────
   <span class="token number">1</span> │ Yoda            light
   <span class="token number">2</span> │ Luke Skywalker  light
   <span class="token number">3</span> │ Mace Windu      light

julia<span class="token operator">></span> df<span class="token punctuation">[</span><span class="token punctuation">(</span>df<span class="token punctuation">.</span>name <span class="token punctuation">.</span><span class="token operator">==</span> <span class="token string">"Yoda"</span><span class="token punctuation">)</span> <span class="token punctuation">.</span><span class="token operator">||</span> <span class="token punctuation">(</span>df<span class="token punctuation">.</span>side <span class="token punctuation">.</span><span class="token operator">==</span> <span class="token string">"dark"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">]</span>
<span class="token number">2</span>×<span class="token number">2</span> DataFrame
 Row │ name        side   
     │ String      String 
─────┼────────────────────
   <span class="token number">1</span> │ Yoda        light
   <span class="token number">2</span> │ Dark Vador  dark</code>`,fu,gt,dk="La fonction <code>subset()</code> peut aussi être utilisée :",vu,_t,gu,Fb=`<code class="language-julia">julia<span class="token operator">></span> subset<span class="token punctuation">(</span>df<span class="token punctuation">,</span> <span class="token punctuation">:</span>name <span class="token operator">=</span><span class="token operator">></span> n <span class="token operator">-</span><span class="token operator">></span> n <span class="token punctuation">.</span><span class="token operator">==</span> <span class="token string">"Yoda"</span><span class="token punctuation">)</span>
<span class="token number">1</span>×<span class="token number">2</span> DataFrame
 Row │ name    side   
     │ String  String 
─────┼────────────────
   <span class="token number">1</span> │ Yoda    light

julia<span class="token operator">></span> subset<span class="token punctuation">(</span>df<span class="token punctuation">,</span> <span class="token punctuation">:</span>name <span class="token operator">=</span><span class="token operator">></span> n <span class="token operator">-</span><span class="token operator">></span> n <span class="token punctuation">.</span><span class="token operator">==</span> <span class="token string">"Yoda"</span><span class="token punctuation">,</span> <span class="token punctuation">:</span>side <span class="token operator">=</span><span class="token operator">></span> s <span class="token operator">-</span><span class="token operator">></span> s <span class="token punctuation">.</span><span class="token operator">==</span> <span class="token string">"dark"</span><span class="token punctuation">)</span>
<span class="token number">0</span>×<span class="token number">2</span> DataFrame
 Row │ name    side   
     │ String  String 
─────┴────────────────
<span class="token comment"># retourne un df vide car aucune ligne ne répond au x deux conditions</span></code>`,_u,jt,bk="Des colonnes peuvent être ajoutées à un DataFrame existant :",ju,xt,xu,Ab=`<code class="language-julia">julia<span class="token operator">></span> df<span class="token punctuation">.</span>midichlorians <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">17000</span><span class="token punctuation">,</span> <span class="token number">27000</span><span class="token punctuation">,</span> <span class="token number">14000</span><span class="token punctuation">,</span> <span class="token number">12000</span><span class="token punctuation">]</span>
<span class="token number">4</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Int64<span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 <span class="token number">17000</span>
 <span class="token number">27000</span>
 <span class="token number">14000</span>
 <span class="token number">12000</span>

julia<span class="token operator">></span> df<span class="token punctuation">.</span>lighsaber <span class="token operator">=</span> missings<span class="token punctuation">(</span>String<span class="token punctuation">,</span> nrow<span class="token punctuation">(</span>df<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token number">4</span><span class="token operator">-</span>element Vector<span class="token punctuation">&#123;</span>Union<span class="token punctuation">&#123;</span>Missing<span class="token punctuation">,</span> String<span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
 missing
 missing
 missing
 missing

julia<span class="token operator">></span> df
<span class="token number">4</span>×<span class="token number">4</span> DataFrame
 Row │ name            side    midichlorians  lighsaber 
     │ String          String  Int64          String<span class="token punctuation">?</span>   
─────┼──────────────────────────────────────────────────
   <span class="token number">1</span> │ Yoda            light           <span class="token number">17000</span>  missing   
   <span class="token number">2</span> │ Dark Vador      dark            <span class="token number">27000</span>  missing   
   <span class="token number">3</span> │ Luke Skywalker  light           <span class="token number">14000</span>  missing   
   <span class="token number">4</span> │ Mace Windu      light           <span class="token number">12000</span>  missing   
</code>`,wu,wt,fk="Copie",Cu,Ct,yu,Wb=`<code class="language-julia">a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
b <span class="token operator">=</span> copy<span class="token punctuation">(</span>a<span class="token punctuation">)</span>
c <span class="token operator">=</span> deepcopy<span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">#recursif</span>
a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">11</span>
a
<span class="token comment">#=
2-element Vector&#123;Vector&#123;Int64&#125;&#125;:
 [11, 2, 3]
 [4, 5, 6]
=#</span>

b
<span class="token comment">#=
2-element Vector&#123;Vector&#123;Int64&#125;&#125;:
 [11, 2, 3]
 [4, 5, 6]
=#</span>
c
<span class="token comment">#=
2-element Vector&#123;Vector&#123;Int64&#125;&#125;:
 [1, 2, 3]
 [4, 5, 6]
=#</span></code>`,Hu,yt,vk="autre",Lu,Ht,gk="<code>contains()</code> et <code>occursin()</code> sont les mêmes fonctions, mais les arguments sont inversés. <code>contains()</code> est alignée avec <code>startswith()</code> et <code>endswith()</code>.",hu,Lt,Pu,zb=`<code class="language-julia">contains<span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">,</span> <span class="token string">"Hello"</span><span class="token punctuation">)</span> <span class="token comment"># true</span>
occursin<span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">,</span> <span class="token string">"Hello World!"</span><span class="token punctuation">)</span> <span class="token comment"># true</span>

issubset<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment"># true</span>
issubset<span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">,</span> <span class="token string">"Hello World!"</span><span class="token punctuation">)</span> <span class="token comment"># true</span></code>`,Eu,ht,_k="Les symboles LaTeX",Mu,Pt,jk='Commentaires <a id="Commentaires" href=""></a>',Tu,Et,Ru,Yb=`<code class="language-julia">v <span class="token operator">=</span> <span class="token number">12</span> <span class="token comment"># un commentaire de fin de ligne</span>
<span class="token comment">#=
    Un bloc de commentaire
    qui peut s'etendre 
    sur plusieurs
    lignes
=#</span></code>`,Su,Mt,xk='Chainage <a id="Chainage" href=""></a>',Iu,Tt,qu,Ob=`<code class="language-julia">x <span class="token operator">=</span> y <span class="token operator">=</span> z <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment">#=
  x = 1
  y = 1
  z = 1
=#</span>

<span class="token number">0</span><span class="token operator">&lt;</span>x<span class="token operator">&lt;</span><span class="token number">2</span> <span class="token comment"># true</span></code>`,Vu,Rt,wk="Symboles LaTeX",Du,St,Ck="Il est possible d’utiliser les symboles LaTeX directement dans Julia.",Uu,It,Fu,Bb=`<code class="language-julia"><span class="token comment"># \\beta [+ tabulation]</span>
β <span class="token operator">=</span> <span class="token number">10</span> </code>`;return{c(){m=p("h1"),m.textContent=Wu,qt=l(),d=p("h2"),d.textContent=zu,Vt=l(),b=p("h3"),b.textContent=Yu,Dt=l(),f=p("p"),f.textContent=Ou,Ut=l(),v=p("p"),v.innerHTML=Bu,Ft=l(),g=p("pre"),At=new k(!1),Wt=l(),_=p("p"),_.textContent=Ju,zt=l(),j=p("pre"),Yt=new k(!1),Ot=l(),x=p("p"),x.innerHTML=Gu,Bt=l(),w=p("pre"),Jt=new k(!1),Gt=l(),C=p("p"),C.innerHTML=Nu,Nt=l(),y=p("pre"),Kt=new k(!1),Xt=l(),H=p("p"),H.innerHTML=Ku,$t=l(),L=p("p"),L.innerHTML=Xu,Qt=l(),h=p("pre"),Zt=new k(!1),ne=l(),P=p("h3"),P.textContent=$u,se=l(),E=p("p"),E.innerHTML=Qu,ae=l(),M=p("pre"),te=new k(!1),ee=l(),T=p("p"),T.textContent=Zu,pe=l(),R=p("pre"),oe=new k(!1),le=l(),S=p("p"),S.innerHTML=nr,ce=l(),I=p("pre"),ue=new k(!1),re=l(),q=p("p"),q.textContent=sr,ie=l(),V=p("pre"),ke=new k(!1),me=l(),D=p("p"),D.textContent=ar,de=l(),U=p("ul"),U.innerHTML=tr,be=l(),F=p("h3"),F.textContent=er,fe=l(),A=p("p"),A.textContent=pr,ve=l(),W=p("ul"),W.innerHTML=or,ge=l(),z=p("p"),z.textContent=lr,_e=l(),Y=p("ul"),Y.innerHTML=cr,je=l(),O=p("p"),O.innerHTML=ur,xe=l(),B=p("pre"),we=new k(!1),Ce=l(),J=p("p"),J.innerHTML=rr,ye=l(),G=p("ul"),G.innerHTML=ir,He=l(),N=p("pre"),Le=new k(!1),he=l(),K=p("p"),K.textContent=kr,Pe=l(),X=p("pre"),Ee=new k(!1),Me=l(),$=p("p"),$.innerHTML=mr,Te=l(),Q=p("ul"),Q.innerHTML=dr,Re=l(),Z=p("pre"),Se=new k(!1),Ie=l(),nn=p("p"),nn.innerHTML=br,qe=l(),sn=p("ul"),sn.innerHTML=fr,Ve=l(),an=p("p"),an.innerHTML=vr,De=l(),tn=p("ul"),tn.innerHTML=gr,Ue=l(),en=p("pre"),Fe=new k(!1),Ae=l(),pn=p("h3"),pn.textContent=_r,We=l(),on=p("p"),on.textContent=jr,ze=l(),ln=p("pre"),Ye=new k(!1),Oe=l(),cn=p("p"),cn.textContent=xr,Be=l(),un=p("pre"),Je=new k(!1),Ge=l(),rn=p("p"),rn.textContent=wr,Ne=l(),kn=p("pre"),Ke=new k(!1),Xe=l(),mn=p("p"),mn.textContent=Cr,$e=l(),dn=p("pre"),Qe=new k(!1),Ze=l(),bn=p("p"),bn.textContent=yr,np=l(),fn=p("ul"),fn.innerHTML=Hr,sp=l(),vn=p("pre"),ap=new k(!1),tp=l(),gn=p("p"),gn.innerHTML=Lr,ep=l(),_n=p("pre"),pp=new k(!1),op=l(),jn=p("h4"),jn.textContent=hr,lp=l(),xn=p("p"),xn.innerHTML=Pr,cp=l(),wn=p("pre"),up=new k(!1),rp=l(),Cn=p("p"),Cn.innerHTML=Er,ip=l(),yn=p("h4"),yn.innerHTML=Mr,kp=l(),Hn=p("p"),Hn.innerHTML=Tr,mp=l(),Ln=p("h4"),Ln.textContent=Rr,dp=l(),hn=p("p"),hn.innerHTML=Sr,bp=l(),Pn=p("pre"),fp=new k(!1),vp=l(),En=p("h3"),En.textContent=Ir,gp=l(),Mn=p("p"),Mn.innerHTML=qr,_p=l(),Tn=p("pre"),jp=new k(!1),xp=l(),Rn=p("p"),Rn.innerHTML=Vr,wp=l(),Sn=p("pre"),Cp=new k(!1),yp=l(),In=p("h3"),In.textContent=Dr,Hp=l(),qn=p("h4"),qn.textContent=Ur,Lp=l(),Vn=p("p"),Vn.innerHTML=Fr,hp=l(),Dn=p("pre"),Pp=new k(!1),Ep=l(),Un=p("h4"),Un.textContent=Ar,Mp=l(),Fn=p("p"),Fn.innerHTML=Wr,Tp=l(),An=p("pre"),Rp=new k(!1),Sp=l(),Wn=p("h2"),Wn.textContent=zr,Ip=l(),zn=p("h3"),zn.textContent=Yr,qp=l(),Yn=p("p"),Yn.textContent=Or,Vp=l(),On=p("pre"),Dp=new k(!1),Up=l(),Bn=p("p"),Bn.textContent=Br,Fp=l(),Jn=p("pre"),Ap=new k(!1),Wp=l(),Gn=p("p"),Gn.textContent=Jr,zp=l(),Nn=p("pre"),Yp=new k(!1),Op=l(),Kn=p("h4"),Kn.innerHTML=Gr,Bp=l(),Xn=p("p"),Xn.textContent=Nr,Jp=l(),$n=p("pre"),Gp=new k(!1),Np=l(),Qn=p("p"),Qn.innerHTML=Kr,Kp=l(),Zn=p("pre"),Xp=new k(!1),$p=l(),ns=p("p"),ns.innerHTML=Xr,Qp=l(),ss=p("pre"),Zp=new k(!1),no=l(),as=p("p"),as.innerHTML=$r,so=l(),ts=p("pre"),ao=new k(!1),to=l(),es=p("p"),es.innerHTML=Qr,eo=l(),ps=p("pre"),po=new k(!1),oo=l(),os=p("p"),os.innerHTML=Zr,lo=l(),ls=p("pre"),co=new k(!1),uo=l(),cs=p("p"),cs.innerHTML=ni,ro=l(),us=p("ul"),us.innerHTML=si,io=l(),rs=p("pre"),ko=new k(!1),mo=l(),is=p("ul"),is.innerHTML=ai,bo=l(),ks=p("pre"),fo=new k(!1),vo=l(),ms=p("ul"),ms.innerHTML=ti,go=l(),ds=p("pre"),_o=new k(!1),jo=l(),bs=p("ul"),bs.innerHTML=ei,xo=l(),fs=p("pre"),wo=new k(!1),Co=l(),vs=p("ul"),vs.innerHTML=pi,yo=l(),gs=p("pre"),Ho=new k(!1),Lo=l(),_s=p("h3"),_s.textContent=oi,ho=l(),js=p("p"),js.innerHTML=li,Po=l(),xs=p("pre"),Eo=new k(!1),Mo=l(),ws=p("p"),ws.innerHTML=ci,To=l(),Cs=p("pre"),Ro=new k(!1),So=l(),ys=p("p"),ys.innerHTML=ui,Io=l(),Hs=p("pre"),qo=new k(!1),Vo=l(),Ls=p("h3"),Ls.textContent=ri,Do=l(),hs=p("p"),hs.textContent=ii,Uo=l(),Ps=p("h2"),Ps.textContent=ki,Fo=l(),Es=p("h3"),Es.textContent=mi,Ao=l(),Ms=p("p"),Ms.innerHTML=di,Wo=l(),Ts=p("p"),Ts.textContent=bi,zo=l(),Rs=p("pre"),Yo=new k(!1),Oo=l(),Ss=p("p"),Ss.textContent=fi,Bo=l(),Is=p("p"),Is.innerHTML=vi,Jo=l(),qs=p("pre"),Go=new k(!1),No=l(),Vs=p("h4"),Vs.textContent=gi,Ko=l(),Ds=p("ul"),Ds.innerHTML=_i,Xo=l(),Us=p("pre"),$o=new k(!1),Qo=l(),Fs=p("ul"),Fs.innerHTML=ji,Zo=l(),As=p("pre"),nl=new k(!1),sl=l(),Ws=p("ul"),Ws.innerHTML=xi,al=l(),zs=p("pre"),tl=new k(!1),el=l(),Ys=p("ul"),Ys.innerHTML=wi,pl=l(),Os=p("pre"),ol=new k(!1),ll=l(),Bs=p("ul"),Bs.innerHTML=Ci,cl=l(),Js=p("pre"),ul=new k(!1),rl=l(),Gs=p("p"),Gs.innerHTML=yi,il=l(),Ns=p("pre"),kl=new k(!1),ml=l(),Ks=p("h3"),Ks.textContent=Hi,dl=l(),Xs=p("p"),Xs.innerHTML=Li,bl=l(),$s=p("p"),$s.innerHTML=hi,fl=l(),Qs=p("pre"),vl=new k(!1),gl=l(),Zs=p("p"),Zs.innerHTML=Pi,_l=l(),na=p("ul"),na.innerHTML=Ei,jl=l(),sa=p("p"),sa.innerHTML=Mi,xl=l(),aa=p("pre"),wl=new k(!1),Cl=l(),ta=p("p"),ta.textContent=Ti,yl=l(),ea=p("pre"),Hl=new k(!1),Ll=l(),pa=p("p"),pa.innerHTML=Ri,hl=l(),oa=p("pre"),Pl=new k(!1),El=l(),la=p("p"),la.innerHTML=Si,Ml=l(),ca=p("pre"),Tl=new k(!1),Rl=l(),ua=p("p"),ua.innerHTML=Ii,Sl=l(),ra=p("pre"),Il=new k(!1),ql=l(),ia=p("p"),ia.innerHTML=qi,Vl=l(),ka=p("pre"),Dl=new k(!1),Ul=l(),ma=p("p"),ma.textContent=Vi,Fl=l(),da=p("pre"),Al=new k(!1),Wl=l(),ba=p("p"),ba.innerHTML=Di,zl=l(),fa=p("pre"),Yl=new k(!1),Ol=l(),va=p("p"),va.innerHTML=Ui,Bl=l(),ga=p("pre"),Jl=new k(!1),Gl=l(),_a=p("p"),_a.innerHTML=Fi,Nl=l(),ja=p("pre"),Kl=new k(!1),Xl=l(),xa=p("p"),xa.innerHTML=Ai,$l=l(),wa=p("pre"),Ql=new k(!1),Zl=l(),Ca=p("p"),Ca.innerHTML=Wi,nc=l(),ya=p("pre"),sc=new k(!1),ac=l(),Ha=p("p"),Ha.textContent=zi,tc=l(),La=p("pre"),ec=new k(!1),pc=l(),ha=p("p"),ha.innerHTML=Yi,oc=l(),Pa=p("pre"),lc=new k(!1),cc=l(),Ea=p("p"),Ea.textContent=Oi,uc=l(),Ma=p("pre"),rc=new k(!1),ic=l(),Ta=p("p"),Ta.textContent=Bi,kc=l(),Ra=p("ul"),Ra.innerHTML=Ji,mc=l(),Sa=p("pre"),dc=new k(!1),bc=l(),Ia=p("p"),Ia.textContent=Gi,fc=l(),qa=p("pre"),vc=new k(!1),gc=l(),Va=p("pre"),_c=new k(!1),jc=l(),Da=p("h3"),Da.textContent=Ni,xc=l(),Ua=p("p"),Ua.innerHTML=Ki,wc=l(),Fa=p("pre"),Cc=new k(!1),yc=l(),Aa=p("p"),Aa.textContent=Xi,Hc=l(),Wa=p("pre"),Lc=new k(!1),hc=l(),za=p("p"),za.innerHTML=$i,Pc=l(),Ya=p("pre"),Ec=new k(!1),Mc=l(),Oa=p("p"),Oa.textContent=Qi,Tc=l(),Ba=p("pre"),Rc=new k(!1),Sc=l(),Ja=p("p"),Ja.textContent=Zi,Ic=l(),Ga=p("pre"),qc=new k(!1),Vc=l(),Na=p("p"),Na.innerHTML=nk,Dc=l(),Ka=p("pre"),Uc=new k(!1),Fc=l(),Xa=p("p"),Xa.innerHTML=sk,Ac=l(),$a=p("h3"),$a.textContent=ak,Wc=l(),Qa=p("p"),Qa.innerHTML=tk,zc=l(),Za=p("p"),Za.innerHTML=ek,Yc=l(),nt=p("pre"),Oc=new k(!1),Bc=l(),st=p("p"),st.textContent=pk,Jc=l(),at=p("pre"),Gc=new k(!1),Nc=l(),tt=p("pre"),Kc=new k(!1),Xc=l(),et=p("p"),et.innerHTML=ok,$c=l(),pt=p("pre"),Qc=new k(!1),Zc=l(),ot=p("p"),ot.textContent=lk,nu=l(),lt=p("pre"),su=new k(!1),au=l(),ct=p("p"),ct.textContent=ck,tu=l(),ut=p("pre"),eu=new k(!1),pu=l(),rt=p("p"),rt.innerHTML=uk,ou=l(),it=p("blockquote"),it.innerHTML=rk,lu=l(),kt=p("pre"),cu=new k(!1),uu=l(),mt=p("p"),mt.innerHTML=ik,ru=l(),dt=p("p"),dt.textContent=kk,iu=l(),bt=p("pre"),ku=new k(!1),mu=l(),ft=p("p"),ft.textContent=mk,du=l(),vt=p("pre"),bu=new k(!1),fu=l(),gt=p("p"),gt.innerHTML=dk,vu=l(),_t=p("pre"),gu=new k(!1),_u=l(),jt=p("p"),jt.textContent=bk,ju=l(),xt=p("pre"),xu=new k(!1),wu=l(),wt=p("h2"),wt.textContent=fk,Cu=l(),Ct=p("pre"),yu=new k(!1),Hu=l(),yt=p("h2"),yt.textContent=vk,Lu=l(),Ht=p("p"),Ht.innerHTML=gk,hu=l(),Lt=p("pre"),Pu=new k(!1),Eu=l(),ht=p("h3"),ht.textContent=_k,Mu=l(),Pt=p("h2"),Pt.innerHTML=jk,Tu=l(),Et=p("pre"),Ru=new k(!1),Su=l(),Mt=p("h2"),Mt.innerHTML=xk,Iu=l(),Tt=p("pre"),qu=new k(!1),Vu=l(),Rt=p("h2"),Rt.textContent=wk,Du=l(),St=p("p"),St.textContent=Ck,Uu=l(),It=p("pre"),Fu=new k(!1),this.h()},l(n){m=e(n,"H1",{"data-svelte-h":!0}),c(m)!=="svelte-pptv0r"&&(m.textContent=Wu),qt=o(n),d=e(n,"H2",{"data-svelte-h":!0}),c(d)!=="svelte-o0mry4"&&(d.textContent=zu),Vt=o(n),b=e(n,"H3",{"data-svelte-h":!0}),c(b)!=="svelte-1rk9dcv"&&(b.textContent=Yu),Dt=o(n),f=e(n,"P",{"data-svelte-h":!0}),c(f)!=="svelte-2d4ac8"&&(f.textContent=Ou),Ut=o(n),v=e(n,"P",{"data-svelte-h":!0}),c(v)!=="svelte-1v0g2ht"&&(v.innerHTML=Bu),Ft=o(n),g=e(n,"PRE",{class:!0});var a=r(g);At=i(a,!1),a.forEach(s),Wt=o(n),_=e(n,"P",{"data-svelte-h":!0}),c(_)!=="svelte-1tm54ru"&&(_.textContent=Ju),zt=o(n),j=e(n,"PRE",{class:!0});var yk=r(j);Yt=i(yk,!1),yk.forEach(s),Ot=o(n),x=e(n,"P",{"data-svelte-h":!0}),c(x)!=="svelte-1gpaufn"&&(x.innerHTML=Gu),Bt=o(n),w=e(n,"PRE",{class:!0});var Hk=r(w);Jt=i(Hk,!1),Hk.forEach(s),Gt=o(n),C=e(n,"P",{"data-svelte-h":!0}),c(C)!=="svelte-ji3qto"&&(C.innerHTML=Nu),Nt=o(n),y=e(n,"PRE",{class:!0});var Lk=r(y);Kt=i(Lk,!1),Lk.forEach(s),Xt=o(n),H=e(n,"P",{"data-svelte-h":!0}),c(H)!=="svelte-b9uumc"&&(H.innerHTML=Ku),$t=o(n),L=e(n,"P",{"data-svelte-h":!0}),c(L)!=="svelte-1k6vin"&&(L.innerHTML=Xu),Qt=o(n),h=e(n,"PRE",{class:!0});var hk=r(h);Zt=i(hk,!1),hk.forEach(s),ne=o(n),P=e(n,"H3",{"data-svelte-h":!0}),c(P)!=="svelte-1x3pgsv"&&(P.textContent=$u),se=o(n),E=e(n,"P",{"data-svelte-h":!0}),c(E)!=="svelte-q6decy"&&(E.innerHTML=Qu),ae=o(n),M=e(n,"PRE",{class:!0});var Pk=r(M);te=i(Pk,!1),Pk.forEach(s),ee=o(n),T=e(n,"P",{"data-svelte-h":!0}),c(T)!=="svelte-1x53ovv"&&(T.textContent=Zu),pe=o(n),R=e(n,"PRE",{class:!0});var Ek=r(R);oe=i(Ek,!1),Ek.forEach(s),le=o(n),S=e(n,"P",{"data-svelte-h":!0}),c(S)!=="svelte-17r5fgf"&&(S.innerHTML=nr),ce=o(n),I=e(n,"PRE",{class:!0});var Mk=r(I);ue=i(Mk,!1),Mk.forEach(s),re=o(n),q=e(n,"P",{"data-svelte-h":!0}),c(q)!=="svelte-1n6sopn"&&(q.textContent=sr),ie=o(n),V=e(n,"PRE",{class:!0});var Tk=r(V);ke=i(Tk,!1),Tk.forEach(s),me=o(n),D=e(n,"P",{"data-svelte-h":!0}),c(D)!=="svelte-1r1sxj5"&&(D.textContent=ar),de=o(n),U=e(n,"UL",{"data-svelte-h":!0}),c(U)!=="svelte-bahwa3"&&(U.innerHTML=tr),be=o(n),F=e(n,"H3",{"data-svelte-h":!0}),c(F)!=="svelte-cyw9qg"&&(F.textContent=er),fe=o(n),A=e(n,"P",{"data-svelte-h":!0}),c(A)!=="svelte-i30lum"&&(A.textContent=pr),ve=o(n),W=e(n,"UL",{"data-svelte-h":!0}),c(W)!=="svelte-1pbt5pw"&&(W.innerHTML=or),ge=o(n),z=e(n,"P",{"data-svelte-h":!0}),c(z)!=="svelte-1cyh2up"&&(z.textContent=lr),_e=o(n),Y=e(n,"UL",{"data-svelte-h":!0}),c(Y)!=="svelte-1ut3oqn"&&(Y.innerHTML=cr),je=o(n),O=e(n,"P",{"data-svelte-h":!0}),c(O)!=="svelte-qu81l5"&&(O.innerHTML=ur),xe=o(n),B=e(n,"PRE",{class:!0});var Rk=r(B);we=i(Rk,!1),Rk.forEach(s),Ce=o(n),J=e(n,"P",{"data-svelte-h":!0}),c(J)!=="svelte-1ujwart"&&(J.innerHTML=rr),ye=o(n),G=e(n,"UL",{"data-svelte-h":!0}),c(G)!=="svelte-1x46wre"&&(G.innerHTML=ir),He=o(n),N=e(n,"PRE",{class:!0});var Sk=r(N);Le=i(Sk,!1),Sk.forEach(s),he=o(n),K=e(n,"P",{"data-svelte-h":!0}),c(K)!=="svelte-18yi1i3"&&(K.textContent=kr),Pe=o(n),X=e(n,"PRE",{class:!0});var Ik=r(X);Ee=i(Ik,!1),Ik.forEach(s),Me=o(n),$=e(n,"P",{"data-svelte-h":!0}),c($)!=="svelte-16aq49k"&&($.innerHTML=mr),Te=o(n),Q=e(n,"UL",{"data-svelte-h":!0}),c(Q)!=="svelte-1lh8erp"&&(Q.innerHTML=dr),Re=o(n),Z=e(n,"PRE",{class:!0});var qk=r(Z);Se=i(qk,!1),qk.forEach(s),Ie=o(n),nn=e(n,"P",{"data-svelte-h":!0}),c(nn)!=="svelte-kjn4oc"&&(nn.innerHTML=br),qe=o(n),sn=e(n,"UL",{"data-svelte-h":!0}),c(sn)!=="svelte-wndq0"&&(sn.innerHTML=fr),Ve=o(n),an=e(n,"P",{"data-svelte-h":!0}),c(an)!=="svelte-pln6am"&&(an.innerHTML=vr),De=o(n),tn=e(n,"UL",{"data-svelte-h":!0}),c(tn)!=="svelte-fn2b9s"&&(tn.innerHTML=gr),Ue=o(n),en=e(n,"PRE",{class:!0});var Vk=r(en);Fe=i(Vk,!1),Vk.forEach(s),Ae=o(n),pn=e(n,"H3",{"data-svelte-h":!0}),c(pn)!=="svelte-18raytb"&&(pn.textContent=_r),We=o(n),on=e(n,"P",{"data-svelte-h":!0}),c(on)!=="svelte-10gkugm"&&(on.textContent=jr),ze=o(n),ln=e(n,"PRE",{class:!0});var Dk=r(ln);Ye=i(Dk,!1),Dk.forEach(s),Oe=o(n),cn=e(n,"P",{"data-svelte-h":!0}),c(cn)!=="svelte-1v5vvc3"&&(cn.textContent=xr),Be=o(n),un=e(n,"PRE",{class:!0});var Uk=r(un);Je=i(Uk,!1),Uk.forEach(s),Ge=o(n),rn=e(n,"P",{"data-svelte-h":!0}),c(rn)!=="svelte-1iaovq7"&&(rn.textContent=wr),Ne=o(n),kn=e(n,"PRE",{class:!0});var Fk=r(kn);Ke=i(Fk,!1),Fk.forEach(s),Xe=o(n),mn=e(n,"P",{"data-svelte-h":!0}),c(mn)!=="svelte-nhqvbf"&&(mn.textContent=Cr),$e=o(n),dn=e(n,"PRE",{class:!0});var Ak=r(dn);Qe=i(Ak,!1),Ak.forEach(s),Ze=o(n),bn=e(n,"P",{"data-svelte-h":!0}),c(bn)!=="svelte-1pvyqvv"&&(bn.textContent=yr),np=o(n),fn=e(n,"UL",{"data-svelte-h":!0}),c(fn)!=="svelte-1ab7bb8"&&(fn.innerHTML=Hr),sp=o(n),vn=e(n,"PRE",{class:!0});var Wk=r(vn);ap=i(Wk,!1),Wk.forEach(s),tp=o(n),gn=e(n,"P",{"data-svelte-h":!0}),c(gn)!=="svelte-8kyspj"&&(gn.innerHTML=Lr),ep=o(n),_n=e(n,"PRE",{class:!0});var zk=r(_n);pp=i(zk,!1),zk.forEach(s),op=o(n),jn=e(n,"H4",{"data-svelte-h":!0}),c(jn)!=="svelte-zv965j"&&(jn.textContent=hr),lp=o(n),xn=e(n,"P",{"data-svelte-h":!0}),c(xn)!=="svelte-tmr61h"&&(xn.innerHTML=Pr),cp=o(n),wn=e(n,"PRE",{class:!0});var Yk=r(wn);up=i(Yk,!1),Yk.forEach(s),rp=o(n),Cn=e(n,"P",{"data-svelte-h":!0}),c(Cn)!=="svelte-imme0r"&&(Cn.innerHTML=Er),ip=o(n),yn=e(n,"H4",{"data-svelte-h":!0}),c(yn)!=="svelte-nv35tk"&&(yn.innerHTML=Mr),kp=o(n),Hn=e(n,"P",{"data-svelte-h":!0}),c(Hn)!=="svelte-tknuyw"&&(Hn.innerHTML=Tr),mp=o(n),Ln=e(n,"H4",{"data-svelte-h":!0}),c(Ln)!=="svelte-aaofez"&&(Ln.textContent=Rr),dp=o(n),hn=e(n,"P",{"data-svelte-h":!0}),c(hn)!=="svelte-1n4uh48"&&(hn.innerHTML=Sr),bp=o(n),Pn=e(n,"PRE",{class:!0});var Ok=r(Pn);fp=i(Ok,!1),Ok.forEach(s),vp=o(n),En=e(n,"H3",{"data-svelte-h":!0}),c(En)!=="svelte-e7akoy"&&(En.textContent=Ir),gp=o(n),Mn=e(n,"P",{"data-svelte-h":!0}),c(Mn)!=="svelte-14u6ujy"&&(Mn.innerHTML=qr),_p=o(n),Tn=e(n,"PRE",{class:!0});var Bk=r(Tn);jp=i(Bk,!1),Bk.forEach(s),xp=o(n),Rn=e(n,"P",{"data-svelte-h":!0}),c(Rn)!=="svelte-kq7uof"&&(Rn.innerHTML=Vr),wp=o(n),Sn=e(n,"PRE",{class:!0});var Jk=r(Sn);Cp=i(Jk,!1),Jk.forEach(s),yp=o(n),In=e(n,"H3",{"data-svelte-h":!0}),c(In)!=="svelte-1iep1dx"&&(In.textContent=Dr),Hp=o(n),qn=e(n,"H4",{"data-svelte-h":!0}),c(qn)!=="svelte-xdvwt7"&&(qn.textContent=Ur),Lp=o(n),Vn=e(n,"P",{"data-svelte-h":!0}),c(Vn)!=="svelte-1cq3g7q"&&(Vn.innerHTML=Fr),hp=o(n),Dn=e(n,"PRE",{class:!0});var Gk=r(Dn);Pp=i(Gk,!1),Gk.forEach(s),Ep=o(n),Un=e(n,"H4",{"data-svelte-h":!0}),c(Un)!=="svelte-1mq16kd"&&(Un.textContent=Ar),Mp=o(n),Fn=e(n,"P",{"data-svelte-h":!0}),c(Fn)!=="svelte-1nir522"&&(Fn.innerHTML=Wr),Tp=o(n),An=e(n,"PRE",{class:!0});var Nk=r(An);Rp=i(Nk,!1),Nk.forEach(s),Sp=o(n),Wn=e(n,"H2",{"data-svelte-h":!0}),c(Wn)!=="svelte-oeccqw"&&(Wn.textContent=zr),Ip=o(n),zn=e(n,"H3",{"data-svelte-h":!0}),c(zn)!=="svelte-1lr0syn"&&(zn.textContent=Yr),qp=o(n),Yn=e(n,"P",{"data-svelte-h":!0}),c(Yn)!=="svelte-m0hjua"&&(Yn.textContent=Or),Vp=o(n),On=e(n,"PRE",{class:!0});var Kk=r(On);Dp=i(Kk,!1),Kk.forEach(s),Up=o(n),Bn=e(n,"P",{"data-svelte-h":!0}),c(Bn)!=="svelte-dg54vw"&&(Bn.textContent=Br),Fp=o(n),Jn=e(n,"PRE",{class:!0});var Xk=r(Jn);Ap=i(Xk,!1),Xk.forEach(s),Wp=o(n),Gn=e(n,"P",{"data-svelte-h":!0}),c(Gn)!=="svelte-4vem3c"&&(Gn.textContent=Jr),zp=o(n),Nn=e(n,"PRE",{class:!0});var $k=r(Nn);Yp=i($k,!1),$k.forEach(s),Op=o(n),Kn=e(n,"H4",{"data-svelte-h":!0}),c(Kn)!=="svelte-1qn08jh"&&(Kn.innerHTML=Gr),Bp=o(n),Xn=e(n,"P",{"data-svelte-h":!0}),c(Xn)!=="svelte-70t80p"&&(Xn.textContent=Nr),Jp=o(n),$n=e(n,"PRE",{class:!0});var Qk=r($n);Gp=i(Qk,!1),Qk.forEach(s),Np=o(n),Qn=e(n,"P",{"data-svelte-h":!0}),c(Qn)!=="svelte-139jhai"&&(Qn.innerHTML=Kr),Kp=o(n),Zn=e(n,"PRE",{class:!0});var Zk=r(Zn);Xp=i(Zk,!1),Zk.forEach(s),$p=o(n),ns=e(n,"P",{"data-svelte-h":!0}),c(ns)!=="svelte-1cdt8o2"&&(ns.innerHTML=Xr),Qp=o(n),ss=e(n,"PRE",{class:!0});var nm=r(ss);Zp=i(nm,!1),nm.forEach(s),no=o(n),as=e(n,"P",{"data-svelte-h":!0}),c(as)!=="svelte-1efpwyh"&&(as.innerHTML=$r),so=o(n),ts=e(n,"PRE",{class:!0});var sm=r(ts);ao=i(sm,!1),sm.forEach(s),to=o(n),es=e(n,"P",{"data-svelte-h":!0}),c(es)!=="svelte-ws01mw"&&(es.innerHTML=Qr),eo=o(n),ps=e(n,"PRE",{class:!0});var am=r(ps);po=i(am,!1),am.forEach(s),oo=o(n),os=e(n,"P",{"data-svelte-h":!0}),c(os)!=="svelte-1eq5p0x"&&(os.innerHTML=Zr),lo=o(n),ls=e(n,"PRE",{class:!0});var tm=r(ls);co=i(tm,!1),tm.forEach(s),uo=o(n),cs=e(n,"P",{"data-svelte-h":!0}),c(cs)!=="svelte-7t4ey4"&&(cs.innerHTML=ni),ro=o(n),us=e(n,"UL",{"data-svelte-h":!0}),c(us)!=="svelte-73ehrp"&&(us.innerHTML=si),io=o(n),rs=e(n,"PRE",{class:!0});var em=r(rs);ko=i(em,!1),em.forEach(s),mo=o(n),is=e(n,"UL",{"data-svelte-h":!0}),c(is)!=="svelte-1yta3hj"&&(is.innerHTML=ai),bo=o(n),ks=e(n,"PRE",{class:!0});var pm=r(ks);fo=i(pm,!1),pm.forEach(s),vo=o(n),ms=e(n,"UL",{"data-svelte-h":!0}),c(ms)!=="svelte-x5i2sg"&&(ms.innerHTML=ti),go=o(n),ds=e(n,"PRE",{class:!0});var om=r(ds);_o=i(om,!1),om.forEach(s),jo=o(n),bs=e(n,"UL",{"data-svelte-h":!0}),c(bs)!=="svelte-1azccmo"&&(bs.innerHTML=ei),xo=o(n),fs=e(n,"PRE",{class:!0});var lm=r(fs);wo=i(lm,!1),lm.forEach(s),Co=o(n),vs=e(n,"UL",{"data-svelte-h":!0}),c(vs)!=="svelte-rw295r"&&(vs.innerHTML=pi),yo=o(n),gs=e(n,"PRE",{class:!0});var cm=r(gs);Ho=i(cm,!1),cm.forEach(s),Lo=o(n),_s=e(n,"H3",{"data-svelte-h":!0}),c(_s)!=="svelte-1jlguch"&&(_s.textContent=oi),ho=o(n),js=e(n,"P",{"data-svelte-h":!0}),c(js)!=="svelte-15flp1r"&&(js.innerHTML=li),Po=o(n),xs=e(n,"PRE",{class:!0});var um=r(xs);Eo=i(um,!1),um.forEach(s),Mo=o(n),ws=e(n,"P",{"data-svelte-h":!0}),c(ws)!=="svelte-1kvs2if"&&(ws.innerHTML=ci),To=o(n),Cs=e(n,"PRE",{class:!0});var rm=r(Cs);Ro=i(rm,!1),rm.forEach(s),So=o(n),ys=e(n,"P",{"data-svelte-h":!0}),c(ys)!=="svelte-qx9tet"&&(ys.innerHTML=ui),Io=o(n),Hs=e(n,"PRE",{class:!0});var im=r(Hs);qo=i(im,!1),im.forEach(s),Vo=o(n),Ls=e(n,"H3",{"data-svelte-h":!0}),c(Ls)!=="svelte-tqktwd"&&(Ls.textContent=ri),Do=o(n),hs=e(n,"P",{"data-svelte-h":!0}),c(hs)!=="svelte-kgkx94"&&(hs.textContent=ii),Uo=o(n),Ps=e(n,"H2",{"data-svelte-h":!0}),c(Ps)!=="svelte-1occgts"&&(Ps.textContent=ki),Fo=o(n),Es=e(n,"H3",{"data-svelte-h":!0}),c(Es)!=="svelte-1rqr3z5"&&(Es.textContent=mi),Ao=o(n),Ms=e(n,"P",{"data-svelte-h":!0}),c(Ms)!=="svelte-1nj5ho5"&&(Ms.innerHTML=di),Wo=o(n),Ts=e(n,"P",{"data-svelte-h":!0}),c(Ts)!=="svelte-1wiarfr"&&(Ts.textContent=bi),zo=o(n),Rs=e(n,"PRE",{class:!0});var km=r(Rs);Yo=i(km,!1),km.forEach(s),Oo=o(n),Ss=e(n,"P",{"data-svelte-h":!0}),c(Ss)!=="svelte-qalfy4"&&(Ss.textContent=fi),Bo=o(n),Is=e(n,"P",{"data-svelte-h":!0}),c(Is)!=="svelte-1d488fb"&&(Is.innerHTML=vi),Jo=o(n),qs=e(n,"PRE",{class:!0});var mm=r(qs);Go=i(mm,!1),mm.forEach(s),No=o(n),Vs=e(n,"H4",{"data-svelte-h":!0}),c(Vs)!=="svelte-h96gno"&&(Vs.textContent=gi),Ko=o(n),Ds=e(n,"UL",{"data-svelte-h":!0}),c(Ds)!=="svelte-5qv0cb"&&(Ds.innerHTML=_i),Xo=o(n),Us=e(n,"PRE",{class:!0});var dm=r(Us);$o=i(dm,!1),dm.forEach(s),Qo=o(n),Fs=e(n,"UL",{"data-svelte-h":!0}),c(Fs)!=="svelte-vx390v"&&(Fs.innerHTML=ji),Zo=o(n),As=e(n,"PRE",{class:!0});var bm=r(As);nl=i(bm,!1),bm.forEach(s),sl=o(n),Ws=e(n,"UL",{"data-svelte-h":!0}),c(Ws)!=="svelte-khk42h"&&(Ws.innerHTML=xi),al=o(n),zs=e(n,"PRE",{class:!0});var fm=r(zs);tl=i(fm,!1),fm.forEach(s),el=o(n),Ys=e(n,"UL",{"data-svelte-h":!0}),c(Ys)!=="svelte-1du4dm2"&&(Ys.innerHTML=wi),pl=o(n),Os=e(n,"PRE",{class:!0});var vm=r(Os);ol=i(vm,!1),vm.forEach(s),ll=o(n),Bs=e(n,"UL",{"data-svelte-h":!0}),c(Bs)!=="svelte-1h6xgar"&&(Bs.innerHTML=Ci),cl=o(n),Js=e(n,"PRE",{class:!0});var gm=r(Js);ul=i(gm,!1),gm.forEach(s),rl=o(n),Gs=e(n,"P",{"data-svelte-h":!0}),c(Gs)!=="svelte-1ij46dj"&&(Gs.innerHTML=yi),il=o(n),Ns=e(n,"PRE",{class:!0});var _m=r(Ns);kl=i(_m,!1),_m.forEach(s),ml=o(n),Ks=e(n,"H3",{"data-svelte-h":!0}),c(Ks)!=="svelte-zhp5rm"&&(Ks.textContent=Hi),dl=o(n),Xs=e(n,"P",{"data-svelte-h":!0}),c(Xs)!=="svelte-1ww7vog"&&(Xs.innerHTML=Li),bl=o(n),$s=e(n,"P",{"data-svelte-h":!0}),c($s)!=="svelte-62l9a0"&&($s.innerHTML=hi),fl=o(n),Qs=e(n,"PRE",{class:!0});var jm=r(Qs);vl=i(jm,!1),jm.forEach(s),gl=o(n),Zs=e(n,"P",{"data-svelte-h":!0}),c(Zs)!=="svelte-1dscsr5"&&(Zs.innerHTML=Pi),_l=o(n),na=e(n,"UL",{"data-svelte-h":!0}),c(na)!=="svelte-1yao90p"&&(na.innerHTML=Ei),jl=o(n),sa=e(n,"P",{"data-svelte-h":!0}),c(sa)!=="svelte-dh353b"&&(sa.innerHTML=Mi),xl=o(n),aa=e(n,"PRE",{class:!0});var xm=r(aa);wl=i(xm,!1),xm.forEach(s),Cl=o(n),ta=e(n,"P",{"data-svelte-h":!0}),c(ta)!=="svelte-12ita92"&&(ta.textContent=Ti),yl=o(n),ea=e(n,"PRE",{class:!0});var wm=r(ea);Hl=i(wm,!1),wm.forEach(s),Ll=o(n),pa=e(n,"P",{"data-svelte-h":!0}),c(pa)!=="svelte-19ov43c"&&(pa.innerHTML=Ri),hl=o(n),oa=e(n,"PRE",{class:!0});var Cm=r(oa);Pl=i(Cm,!1),Cm.forEach(s),El=o(n),la=e(n,"P",{"data-svelte-h":!0}),c(la)!=="svelte-1af8nuc"&&(la.innerHTML=Si),Ml=o(n),ca=e(n,"PRE",{class:!0});var ym=r(ca);Tl=i(ym,!1),ym.forEach(s),Rl=o(n),ua=e(n,"P",{"data-svelte-h":!0}),c(ua)!=="svelte-14d2940"&&(ua.innerHTML=Ii),Sl=o(n),ra=e(n,"PRE",{class:!0});var Hm=r(ra);Il=i(Hm,!1),Hm.forEach(s),ql=o(n),ia=e(n,"P",{"data-svelte-h":!0}),c(ia)!=="svelte-1caynt6"&&(ia.innerHTML=qi),Vl=o(n),ka=e(n,"PRE",{class:!0});var Lm=r(ka);Dl=i(Lm,!1),Lm.forEach(s),Ul=o(n),ma=e(n,"P",{"data-svelte-h":!0}),c(ma)!=="svelte-ta3mjc"&&(ma.textContent=Vi),Fl=o(n),da=e(n,"PRE",{class:!0});var hm=r(da);Al=i(hm,!1),hm.forEach(s),Wl=o(n),ba=e(n,"P",{"data-svelte-h":!0}),c(ba)!=="svelte-1nci0zf"&&(ba.innerHTML=Di),zl=o(n),fa=e(n,"PRE",{class:!0});var Pm=r(fa);Yl=i(Pm,!1),Pm.forEach(s),Ol=o(n),va=e(n,"P",{"data-svelte-h":!0}),c(va)!=="svelte-1435j08"&&(va.innerHTML=Ui),Bl=o(n),ga=e(n,"PRE",{class:!0});var Em=r(ga);Jl=i(Em,!1),Em.forEach(s),Gl=o(n),_a=e(n,"P",{"data-svelte-h":!0}),c(_a)!=="svelte-bp3nc2"&&(_a.innerHTML=Fi),Nl=o(n),ja=e(n,"PRE",{class:!0});var Mm=r(ja);Kl=i(Mm,!1),Mm.forEach(s),Xl=o(n),xa=e(n,"P",{"data-svelte-h":!0}),c(xa)!=="svelte-1p7fxbc"&&(xa.innerHTML=Ai),$l=o(n),wa=e(n,"PRE",{class:!0});var Tm=r(wa);Ql=i(Tm,!1),Tm.forEach(s),Zl=o(n),Ca=e(n,"P",{"data-svelte-h":!0}),c(Ca)!=="svelte-1yd1q5e"&&(Ca.innerHTML=Wi),nc=o(n),ya=e(n,"PRE",{class:!0});var Rm=r(ya);sc=i(Rm,!1),Rm.forEach(s),ac=o(n),Ha=e(n,"P",{"data-svelte-h":!0}),c(Ha)!=="svelte-iupwz9"&&(Ha.textContent=zi),tc=o(n),La=e(n,"PRE",{class:!0});var Sm=r(La);ec=i(Sm,!1),Sm.forEach(s),pc=o(n),ha=e(n,"P",{"data-svelte-h":!0}),c(ha)!=="svelte-bnuj3h"&&(ha.innerHTML=Yi),oc=o(n),Pa=e(n,"PRE",{class:!0});var Im=r(Pa);lc=i(Im,!1),Im.forEach(s),cc=o(n),Ea=e(n,"P",{"data-svelte-h":!0}),c(Ea)!=="svelte-1iqd96a"&&(Ea.textContent=Oi),uc=o(n),Ma=e(n,"PRE",{class:!0});var qm=r(Ma);rc=i(qm,!1),qm.forEach(s),ic=o(n),Ta=e(n,"P",{"data-svelte-h":!0}),c(Ta)!=="svelte-1kf6u7m"&&(Ta.textContent=Bi),kc=o(n),Ra=e(n,"UL",{"data-svelte-h":!0}),c(Ra)!=="svelte-7bqbrg"&&(Ra.innerHTML=Ji),mc=o(n),Sa=e(n,"PRE",{class:!0});var Vm=r(Sa);dc=i(Vm,!1),Vm.forEach(s),bc=o(n),Ia=e(n,"P",{"data-svelte-h":!0}),c(Ia)!=="svelte-1ekytwh"&&(Ia.textContent=Gi),fc=o(n),qa=e(n,"PRE",{class:!0});var Dm=r(qa);vc=i(Dm,!1),Dm.forEach(s),gc=o(n),Va=e(n,"PRE",{class:!0});var Um=r(Va);_c=i(Um,!1),Um.forEach(s),jc=o(n),Da=e(n,"H3",{"data-svelte-h":!0}),c(Da)!=="svelte-p8fh7j"&&(Da.textContent=Ni),xc=o(n),Ua=e(n,"P",{"data-svelte-h":!0}),c(Ua)!=="svelte-1shuzyt"&&(Ua.innerHTML=Ki),wc=o(n),Fa=e(n,"PRE",{class:!0});var Fm=r(Fa);Cc=i(Fm,!1),Fm.forEach(s),yc=o(n),Aa=e(n,"P",{"data-svelte-h":!0}),c(Aa)!=="svelte-19d7617"&&(Aa.textContent=Xi),Hc=o(n),Wa=e(n,"PRE",{class:!0});var Am=r(Wa);Lc=i(Am,!1),Am.forEach(s),hc=o(n),za=e(n,"P",{"data-svelte-h":!0}),c(za)!=="svelte-5c8tks"&&(za.innerHTML=$i),Pc=o(n),Ya=e(n,"PRE",{class:!0});var Wm=r(Ya);Ec=i(Wm,!1),Wm.forEach(s),Mc=o(n),Oa=e(n,"P",{"data-svelte-h":!0}),c(Oa)!=="svelte-149bp22"&&(Oa.textContent=Qi),Tc=o(n),Ba=e(n,"PRE",{class:!0});var zm=r(Ba);Rc=i(zm,!1),zm.forEach(s),Sc=o(n),Ja=e(n,"P",{"data-svelte-h":!0}),c(Ja)!=="svelte-xb4fba"&&(Ja.textContent=Zi),Ic=o(n),Ga=e(n,"PRE",{class:!0});var Ym=r(Ga);qc=i(Ym,!1),Ym.forEach(s),Vc=o(n),Na=e(n,"P",{"data-svelte-h":!0}),c(Na)!=="svelte-1bys8is"&&(Na.innerHTML=nk),Dc=o(n),Ka=e(n,"PRE",{class:!0});var Om=r(Ka);Uc=i(Om,!1),Om.forEach(s),Fc=o(n),Xa=e(n,"P",{"data-svelte-h":!0}),c(Xa)!=="svelte-1nuq3dm"&&(Xa.innerHTML=sk),Ac=o(n),$a=e(n,"H3",{"data-svelte-h":!0}),c($a)!=="svelte-5161by"&&($a.textContent=ak),Wc=o(n),Qa=e(n,"P",{"data-svelte-h":!0}),c(Qa)!=="svelte-1vw5yci"&&(Qa.innerHTML=tk),zc=o(n),Za=e(n,"P",{"data-svelte-h":!0}),c(Za)!=="svelte-1r8lodg"&&(Za.innerHTML=ek),Yc=o(n),nt=e(n,"PRE",{class:!0});var Bm=r(nt);Oc=i(Bm,!1),Bm.forEach(s),Bc=o(n),st=e(n,"P",{"data-svelte-h":!0}),c(st)!=="svelte-1q1hi7d"&&(st.textContent=pk),Jc=o(n),at=e(n,"PRE",{class:!0});var Jm=r(at);Gc=i(Jm,!1),Jm.forEach(s),Nc=o(n),tt=e(n,"PRE",{class:!0});var Gm=r(tt);Kc=i(Gm,!1),Gm.forEach(s),Xc=o(n),et=e(n,"P",{"data-svelte-h":!0}),c(et)!=="svelte-1uhip7u"&&(et.innerHTML=ok),$c=o(n),pt=e(n,"PRE",{class:!0});var Nm=r(pt);Qc=i(Nm,!1),Nm.forEach(s),Zc=o(n),ot=e(n,"P",{"data-svelte-h":!0}),c(ot)!=="svelte-1v1jvrd"&&(ot.textContent=lk),nu=o(n),lt=e(n,"PRE",{class:!0});var Km=r(lt);su=i(Km,!1),Km.forEach(s),au=o(n),ct=e(n,"P",{"data-svelte-h":!0}),c(ct)!=="svelte-1bvzwtt"&&(ct.textContent=ck),tu=o(n),ut=e(n,"PRE",{class:!0});var Xm=r(ut);eu=i(Xm,!1),Xm.forEach(s),pu=o(n),rt=e(n,"P",{"data-svelte-h":!0}),c(rt)!=="svelte-q2pma7"&&(rt.innerHTML=uk),ou=o(n),it=e(n,"BLOCKQUOTE",{"data-svelte-h":!0}),c(it)!=="svelte-1loqsng"&&(it.innerHTML=rk),lu=o(n),kt=e(n,"PRE",{class:!0});var $m=r(kt);cu=i($m,!1),$m.forEach(s),uu=o(n),mt=e(n,"P",{"data-svelte-h":!0}),c(mt)!=="svelte-rty5g5"&&(mt.innerHTML=ik),ru=o(n),dt=e(n,"P",{"data-svelte-h":!0}),c(dt)!=="svelte-1h7juok"&&(dt.textContent=kk),iu=o(n),bt=e(n,"PRE",{class:!0});var Qm=r(bt);ku=i(Qm,!1),Qm.forEach(s),mu=o(n),ft=e(n,"P",{"data-svelte-h":!0}),c(ft)!=="svelte-1jwytn5"&&(ft.textContent=mk),du=o(n),vt=e(n,"PRE",{class:!0});var Zm=r(vt);bu=i(Zm,!1),Zm.forEach(s),fu=o(n),gt=e(n,"P",{"data-svelte-h":!0}),c(gt)!=="svelte-c8p3et"&&(gt.innerHTML=dk),vu=o(n),_t=e(n,"PRE",{class:!0});var nd=r(_t);gu=i(nd,!1),nd.forEach(s),_u=o(n),jt=e(n,"P",{"data-svelte-h":!0}),c(jt)!=="svelte-177ezzl"&&(jt.textContent=bk),ju=o(n),xt=e(n,"PRE",{class:!0});var sd=r(xt);xu=i(sd,!1),sd.forEach(s),wu=o(n),wt=e(n,"H2",{"data-svelte-h":!0}),c(wt)!=="svelte-1o1b5ie"&&(wt.textContent=fk),Cu=o(n),Ct=e(n,"PRE",{class:!0});var ad=r(Ct);yu=i(ad,!1),ad.forEach(s),Hu=o(n),yt=e(n,"H2",{"data-svelte-h":!0}),c(yt)!=="svelte-1s8pe0v"&&(yt.textContent=vk),Lu=o(n),Ht=e(n,"P",{"data-svelte-h":!0}),c(Ht)!=="svelte-wfw5sx"&&(Ht.innerHTML=gk),hu=o(n),Lt=e(n,"PRE",{class:!0});var td=r(Lt);Pu=i(td,!1),td.forEach(s),Eu=o(n),ht=e(n,"H3",{"data-svelte-h":!0}),c(ht)!=="svelte-wnve28"&&(ht.textContent=_k),Mu=o(n),Pt=e(n,"H2",{"data-svelte-h":!0}),c(Pt)!=="svelte-xbk9b4"&&(Pt.innerHTML=jk),Tu=o(n),Et=e(n,"PRE",{class:!0});var ed=r(Et);Ru=i(ed,!1),ed.forEach(s),Su=o(n),Mt=e(n,"H2",{"data-svelte-h":!0}),c(Mt)!=="svelte-kh2qb0"&&(Mt.innerHTML=xk),Iu=o(n),Tt=e(n,"PRE",{class:!0});var pd=r(Tt);qu=i(pd,!1),pd.forEach(s),Vu=o(n),Rt=e(n,"H2",{"data-svelte-h":!0}),c(Rt)!=="svelte-x2z6by"&&(Rt.textContent=wk),Du=o(n),St=e(n,"P",{"data-svelte-h":!0}),c(St)!=="svelte-1594wbl"&&(St.textContent=Ck),Uu=o(n),It=e(n,"PRE",{class:!0});var od=r(It);Fu=i(od,!1),od.forEach(s),this.h()},h(){At.a=null,u(g,"class","language-julia"),Yt.a=null,u(j,"class","language-julia"),Jt.a=null,u(w,"class","language-julia"),Kt.a=null,u(y,"class","language-julia"),Zt.a=null,u(h,"class","language-julia"),te.a=null,u(M,"class","language-julia"),oe.a=null,u(R,"class","language-julia"),ue.a=null,u(I,"class","language-julia"),ke.a=null,u(V,"class","language-julia"),we.a=null,u(B,"class","language-julia"),Le.a=null,u(N,"class","language-julia"),Ee.a=null,u(X,"class","language-julia"),Se.a=null,u(Z,"class","language-julia"),Fe.a=null,u(en,"class","language-julia"),Ye.a=null,u(ln,"class","language-julia"),Je.a=null,u(un,"class","language-julia"),Ke.a=null,u(kn,"class","language-julia"),Qe.a=null,u(dn,"class","language-julia"),ap.a=null,u(vn,"class","language-julia"),pp.a=null,u(_n,"class","language-julia"),up.a=null,u(wn,"class","language-julia"),fp.a=null,u(Pn,"class","language-julia"),jp.a=null,u(Tn,"class","language-julia"),Cp.a=null,u(Sn,"class","language-julia"),Pp.a=null,u(Dn,"class","language-julia"),Rp.a=null,u(An,"class","language-julia"),Dp.a=null,u(On,"class","language-julia"),Ap.a=null,u(Jn,"class","language-julia"),Yp.a=null,u(Nn,"class","language-julia"),Gp.a=null,u($n,"class","language-julia"),Xp.a=null,u(Zn,"class","language-julia"),Zp.a=null,u(ss,"class","language-julia"),ao.a=null,u(ts,"class","language-julia"),po.a=null,u(ps,"class","language-julia"),co.a=null,u(ls,"class","language-julia"),ko.a=null,u(rs,"class","language-julia"),fo.a=null,u(ks,"class","language-julia"),_o.a=null,u(ds,"class","language-julia"),wo.a=null,u(fs,"class","language-julia"),Ho.a=null,u(gs,"class","language-julia"),Eo.a=null,u(xs,"class","language-julia"),Ro.a=null,u(Cs,"class","language-julia"),qo.a=null,u(Hs,"class","language-julia"),Yo.a=null,u(Rs,"class","language-julia"),Go.a=null,u(qs,"class","language-julia"),$o.a=null,u(Us,"class","language-julia"),nl.a=null,u(As,"class","language-julia"),tl.a=null,u(zs,"class","language-julia"),ol.a=null,u(Os,"class","language-julia"),ul.a=null,u(Js,"class","language-julia"),kl.a=null,u(Ns,"class","language-julia"),vl.a=null,u(Qs,"class","language-julia"),wl.a=null,u(aa,"class","language-julia"),Hl.a=null,u(ea,"class","language-julia"),Pl.a=null,u(oa,"class","language-julia"),Tl.a=null,u(ca,"class","language-julia"),Il.a=null,u(ra,"class","language-julia"),Dl.a=null,u(ka,"class","language-julia"),Al.a=null,u(da,"class","language-julia"),Yl.a=null,u(fa,"class","language-julia"),Jl.a=null,u(ga,"class","language-julia"),Kl.a=null,u(ja,"class","language-julia"),Ql.a=null,u(wa,"class","language-julia"),sc.a=null,u(ya,"class","language-julia"),ec.a=null,u(La,"class","language-julia"),lc.a=null,u(Pa,"class","language-julia"),rc.a=null,u(Ma,"class","language-julia"),dc.a=null,u(Sa,"class","language-julia"),vc.a=null,u(qa,"class","language-julia"),_c.a=null,u(Va,"class","language-julia"),Cc.a=null,u(Fa,"class","language-julia"),Lc.a=null,u(Wa,"class","language-julia"),Ec.a=null,u(Ya,"class","language-julia"),Rc.a=null,u(Ba,"class","language-julia"),qc.a=null,u(Ga,"class","language-julia"),Uc.a=null,u(Ka,"class","language-julia"),Oc.a=null,u(nt,"class","language-julia"),Gc.a=null,u(at,"class","language-csv"),Kc.a=null,u(tt,"class","language-julia"),Qc.a=null,u(pt,"class","language-julia"),su.a=null,u(lt,"class","language-julia"),eu.a=null,u(ut,"class","language-julia"),cu.a=null,u(kt,"class","language-julia"),ku.a=null,u(bt,"class","language-julia"),bu.a=null,u(vt,"class","language-julia"),gu.a=null,u(_t,"class","language-julia"),xu.a=null,u(xt,"class","language-julia"),yu.a=null,u(Ct,"class","language-julia"),Pu.a=null,u(Lt,"class","language-julia"),Ru.a=null,u(Et,"class","language-julia"),qu.a=null,u(Tt,"class","language-julia"),Fu.a=null,u(It,"class","language-julia")},m(n,a){t(n,m,a),t(n,qt,a),t(n,d,a),t(n,Vt,a),t(n,b,a),t(n,Dt,a),t(n,f,a),t(n,Ut,a),t(n,v,a),t(n,Ft,a),t(n,g,a),At.m(cd,g),t(n,Wt,a),t(n,_,a),t(n,zt,a),t(n,j,a),Yt.m(ud,j),t(n,Ot,a),t(n,x,a),t(n,Bt,a),t(n,w,a),Jt.m(rd,w),t(n,Gt,a),t(n,C,a),t(n,Nt,a),t(n,y,a),Kt.m(id,y),t(n,Xt,a),t(n,H,a),t(n,$t,a),t(n,L,a),t(n,Qt,a),t(n,h,a),Zt.m(kd,h),t(n,ne,a),t(n,P,a),t(n,se,a),t(n,E,a),t(n,ae,a),t(n,M,a),te.m(md,M),t(n,ee,a),t(n,T,a),t(n,pe,a),t(n,R,a),oe.m(dd,R),t(n,le,a),t(n,S,a),t(n,ce,a),t(n,I,a),ue.m(bd,I),t(n,re,a),t(n,q,a),t(n,ie,a),t(n,V,a),ke.m(fd,V),t(n,me,a),t(n,D,a),t(n,de,a),t(n,U,a),t(n,be,a),t(n,F,a),t(n,fe,a),t(n,A,a),t(n,ve,a),t(n,W,a),t(n,ge,a),t(n,z,a),t(n,_e,a),t(n,Y,a),t(n,je,a),t(n,O,a),t(n,xe,a),t(n,B,a),we.m(vd,B),t(n,Ce,a),t(n,J,a),t(n,ye,a),t(n,G,a),t(n,He,a),t(n,N,a),Le.m(gd,N),t(n,he,a),t(n,K,a),t(n,Pe,a),t(n,X,a),Ee.m(_d,X),t(n,Me,a),t(n,$,a),t(n,Te,a),t(n,Q,a),t(n,Re,a),t(n,Z,a),Se.m(jd,Z),t(n,Ie,a),t(n,nn,a),t(n,qe,a),t(n,sn,a),t(n,Ve,a),t(n,an,a),t(n,De,a),t(n,tn,a),t(n,Ue,a),t(n,en,a),Fe.m(xd,en),t(n,Ae,a),t(n,pn,a),t(n,We,a),t(n,on,a),t(n,ze,a),t(n,ln,a),Ye.m(wd,ln),t(n,Oe,a),t(n,cn,a),t(n,Be,a),t(n,un,a),Je.m(Cd,un),t(n,Ge,a),t(n,rn,a),t(n,Ne,a),t(n,kn,a),Ke.m(yd,kn),t(n,Xe,a),t(n,mn,a),t(n,$e,a),t(n,dn,a),Qe.m(Hd,dn),t(n,Ze,a),t(n,bn,a),t(n,np,a),t(n,fn,a),t(n,sp,a),t(n,vn,a),ap.m(Ld,vn),t(n,tp,a),t(n,gn,a),t(n,ep,a),t(n,_n,a),pp.m(hd,_n),t(n,op,a),t(n,jn,a),t(n,lp,a),t(n,xn,a),t(n,cp,a),t(n,wn,a),up.m(Pd,wn),t(n,rp,a),t(n,Cn,a),t(n,ip,a),t(n,yn,a),t(n,kp,a),t(n,Hn,a),t(n,mp,a),t(n,Ln,a),t(n,dp,a),t(n,hn,a),t(n,bp,a),t(n,Pn,a),fp.m(Ed,Pn),t(n,vp,a),t(n,En,a),t(n,gp,a),t(n,Mn,a),t(n,_p,a),t(n,Tn,a),jp.m(Md,Tn),t(n,xp,a),t(n,Rn,a),t(n,wp,a),t(n,Sn,a),Cp.m(Td,Sn),t(n,yp,a),t(n,In,a),t(n,Hp,a),t(n,qn,a),t(n,Lp,a),t(n,Vn,a),t(n,hp,a),t(n,Dn,a),Pp.m(Rd,Dn),t(n,Ep,a),t(n,Un,a),t(n,Mp,a),t(n,Fn,a),t(n,Tp,a),t(n,An,a),Rp.m(Sd,An),t(n,Sp,a),t(n,Wn,a),t(n,Ip,a),t(n,zn,a),t(n,qp,a),t(n,Yn,a),t(n,Vp,a),t(n,On,a),Dp.m(Id,On),t(n,Up,a),t(n,Bn,a),t(n,Fp,a),t(n,Jn,a),Ap.m(qd,Jn),t(n,Wp,a),t(n,Gn,a),t(n,zp,a),t(n,Nn,a),Yp.m(Vd,Nn),t(n,Op,a),t(n,Kn,a),t(n,Bp,a),t(n,Xn,a),t(n,Jp,a),t(n,$n,a),Gp.m(Dd,$n),t(n,Np,a),t(n,Qn,a),t(n,Kp,a),t(n,Zn,a),Xp.m(Ud,Zn),t(n,$p,a),t(n,ns,a),t(n,Qp,a),t(n,ss,a),Zp.m(Fd,ss),t(n,no,a),t(n,as,a),t(n,so,a),t(n,ts,a),ao.m(Ad,ts),t(n,to,a),t(n,es,a),t(n,eo,a),t(n,ps,a),po.m(Wd,ps),t(n,oo,a),t(n,os,a),t(n,lo,a),t(n,ls,a),co.m(zd,ls),t(n,uo,a),t(n,cs,a),t(n,ro,a),t(n,us,a),t(n,io,a),t(n,rs,a),ko.m(Yd,rs),t(n,mo,a),t(n,is,a),t(n,bo,a),t(n,ks,a),fo.m(Od,ks),t(n,vo,a),t(n,ms,a),t(n,go,a),t(n,ds,a),_o.m(Bd,ds),t(n,jo,a),t(n,bs,a),t(n,xo,a),t(n,fs,a),wo.m(Jd,fs),t(n,Co,a),t(n,vs,a),t(n,yo,a),t(n,gs,a),Ho.m(Gd,gs),t(n,Lo,a),t(n,_s,a),t(n,ho,a),t(n,js,a),t(n,Po,a),t(n,xs,a),Eo.m(Nd,xs),t(n,Mo,a),t(n,ws,a),t(n,To,a),t(n,Cs,a),Ro.m(Kd,Cs),t(n,So,a),t(n,ys,a),t(n,Io,a),t(n,Hs,a),qo.m(Xd,Hs),t(n,Vo,a),t(n,Ls,a),t(n,Do,a),t(n,hs,a),t(n,Uo,a),t(n,Ps,a),t(n,Fo,a),t(n,Es,a),t(n,Ao,a),t(n,Ms,a),t(n,Wo,a),t(n,Ts,a),t(n,zo,a),t(n,Rs,a),Yo.m($d,Rs),t(n,Oo,a),t(n,Ss,a),t(n,Bo,a),t(n,Is,a),t(n,Jo,a),t(n,qs,a),Go.m(Qd,qs),t(n,No,a),t(n,Vs,a),t(n,Ko,a),t(n,Ds,a),t(n,Xo,a),t(n,Us,a),$o.m(Zd,Us),t(n,Qo,a),t(n,Fs,a),t(n,Zo,a),t(n,As,a),nl.m(nb,As),t(n,sl,a),t(n,Ws,a),t(n,al,a),t(n,zs,a),tl.m(sb,zs),t(n,el,a),t(n,Ys,a),t(n,pl,a),t(n,Os,a),ol.m(ab,Os),t(n,ll,a),t(n,Bs,a),t(n,cl,a),t(n,Js,a),ul.m(tb,Js),t(n,rl,a),t(n,Gs,a),t(n,il,a),t(n,Ns,a),kl.m(eb,Ns),t(n,ml,a),t(n,Ks,a),t(n,dl,a),t(n,Xs,a),t(n,bl,a),t(n,$s,a),t(n,fl,a),t(n,Qs,a),vl.m(pb,Qs),t(n,gl,a),t(n,Zs,a),t(n,_l,a),t(n,na,a),t(n,jl,a),t(n,sa,a),t(n,xl,a),t(n,aa,a),wl.m(ob,aa),t(n,Cl,a),t(n,ta,a),t(n,yl,a),t(n,ea,a),Hl.m(lb,ea),t(n,Ll,a),t(n,pa,a),t(n,hl,a),t(n,oa,a),Pl.m(cb,oa),t(n,El,a),t(n,la,a),t(n,Ml,a),t(n,ca,a),Tl.m(ub,ca),t(n,Rl,a),t(n,ua,a),t(n,Sl,a),t(n,ra,a),Il.m(rb,ra),t(n,ql,a),t(n,ia,a),t(n,Vl,a),t(n,ka,a),Dl.m(ib,ka),t(n,Ul,a),t(n,ma,a),t(n,Fl,a),t(n,da,a),Al.m(kb,da),t(n,Wl,a),t(n,ba,a),t(n,zl,a),t(n,fa,a),Yl.m(mb,fa),t(n,Ol,a),t(n,va,a),t(n,Bl,a),t(n,ga,a),Jl.m(db,ga),t(n,Gl,a),t(n,_a,a),t(n,Nl,a),t(n,ja,a),Kl.m(bb,ja),t(n,Xl,a),t(n,xa,a),t(n,$l,a),t(n,wa,a),Ql.m(fb,wa),t(n,Zl,a),t(n,Ca,a),t(n,nc,a),t(n,ya,a),sc.m(vb,ya),t(n,ac,a),t(n,Ha,a),t(n,tc,a),t(n,La,a),ec.m(gb,La),t(n,pc,a),t(n,ha,a),t(n,oc,a),t(n,Pa,a),lc.m(_b,Pa),t(n,cc,a),t(n,Ea,a),t(n,uc,a),t(n,Ma,a),rc.m(jb,Ma),t(n,ic,a),t(n,Ta,a),t(n,kc,a),t(n,Ra,a),t(n,mc,a),t(n,Sa,a),dc.m(xb,Sa),t(n,bc,a),t(n,Ia,a),t(n,fc,a),t(n,qa,a),vc.m(wb,qa),t(n,gc,a),t(n,Va,a),_c.m(Cb,Va),t(n,jc,a),t(n,Da,a),t(n,xc,a),t(n,Ua,a),t(n,wc,a),t(n,Fa,a),Cc.m(yb,Fa),t(n,yc,a),t(n,Aa,a),t(n,Hc,a),t(n,Wa,a),Lc.m(Hb,Wa),t(n,hc,a),t(n,za,a),t(n,Pc,a),t(n,Ya,a),Ec.m(Lb,Ya),t(n,Mc,a),t(n,Oa,a),t(n,Tc,a),t(n,Ba,a),Rc.m(hb,Ba),t(n,Sc,a),t(n,Ja,a),t(n,Ic,a),t(n,Ga,a),qc.m(Pb,Ga),t(n,Vc,a),t(n,Na,a),t(n,Dc,a),t(n,Ka,a),Uc.m(Eb,Ka),t(n,Fc,a),t(n,Xa,a),t(n,Ac,a),t(n,$a,a),t(n,Wc,a),t(n,Qa,a),t(n,zc,a),t(n,Za,a),t(n,Yc,a),t(n,nt,a),Oc.m(Mb,nt),t(n,Bc,a),t(n,st,a),t(n,Jc,a),t(n,at,a),Gc.m(Tb,at),t(n,Nc,a),t(n,tt,a),Kc.m(Rb,tt),t(n,Xc,a),t(n,et,a),t(n,$c,a),t(n,pt,a),Qc.m(Sb,pt),t(n,Zc,a),t(n,ot,a),t(n,nu,a),t(n,lt,a),su.m(Ib,lt),t(n,au,a),t(n,ct,a),t(n,tu,a),t(n,ut,a),eu.m(qb,ut),t(n,pu,a),t(n,rt,a),t(n,ou,a),t(n,it,a),t(n,lu,a),t(n,kt,a),cu.m(Vb,kt),t(n,uu,a),t(n,mt,a),t(n,ru,a),t(n,dt,a),t(n,iu,a),t(n,bt,a),ku.m(Db,bt),t(n,mu,a),t(n,ft,a),t(n,du,a),t(n,vt,a),bu.m(Ub,vt),t(n,fu,a),t(n,gt,a),t(n,vu,a),t(n,_t,a),gu.m(Fb,_t),t(n,_u,a),t(n,jt,a),t(n,ju,a),t(n,xt,a),xu.m(Ab,xt),t(n,wu,a),t(n,wt,a),t(n,Cu,a),t(n,Ct,a),yu.m(Wb,Ct),t(n,Hu,a),t(n,yt,a),t(n,Lu,a),t(n,Ht,a),t(n,hu,a),t(n,Lt,a),Pu.m(zb,Lt),t(n,Eu,a),t(n,ht,a),t(n,Mu,a),t(n,Pt,a),t(n,Tu,a),t(n,Et,a),Ru.m(Yb,Et),t(n,Su,a),t(n,Mt,a),t(n,Iu,a),t(n,Tt,a),qu.m(Ob,Tt),t(n,Vu,a),t(n,Rt,a),t(n,Du,a),t(n,St,a),t(n,Uu,a),t(n,It,a),Fu.m(Bb,It)},p:Au,i:Au,o:Au,d(n){n&&(s(m),s(qt),s(d),s(Vt),s(b),s(Dt),s(f),s(Ut),s(v),s(Ft),s(g),s(Wt),s(_),s(zt),s(j),s(Ot),s(x),s(Bt),s(w),s(Gt),s(C),s(Nt),s(y),s(Xt),s(H),s($t),s(L),s(Qt),s(h),s(ne),s(P),s(se),s(E),s(ae),s(M),s(ee),s(T),s(pe),s(R),s(le),s(S),s(ce),s(I),s(re),s(q),s(ie),s(V),s(me),s(D),s(de),s(U),s(be),s(F),s(fe),s(A),s(ve),s(W),s(ge),s(z),s(_e),s(Y),s(je),s(O),s(xe),s(B),s(Ce),s(J),s(ye),s(G),s(He),s(N),s(he),s(K),s(Pe),s(X),s(Me),s($),s(Te),s(Q),s(Re),s(Z),s(Ie),s(nn),s(qe),s(sn),s(Ve),s(an),s(De),s(tn),s(Ue),s(en),s(Ae),s(pn),s(We),s(on),s(ze),s(ln),s(Oe),s(cn),s(Be),s(un),s(Ge),s(rn),s(Ne),s(kn),s(Xe),s(mn),s($e),s(dn),s(Ze),s(bn),s(np),s(fn),s(sp),s(vn),s(tp),s(gn),s(ep),s(_n),s(op),s(jn),s(lp),s(xn),s(cp),s(wn),s(rp),s(Cn),s(ip),s(yn),s(kp),s(Hn),s(mp),s(Ln),s(dp),s(hn),s(bp),s(Pn),s(vp),s(En),s(gp),s(Mn),s(_p),s(Tn),s(xp),s(Rn),s(wp),s(Sn),s(yp),s(In),s(Hp),s(qn),s(Lp),s(Vn),s(hp),s(Dn),s(Ep),s(Un),s(Mp),s(Fn),s(Tp),s(An),s(Sp),s(Wn),s(Ip),s(zn),s(qp),s(Yn),s(Vp),s(On),s(Up),s(Bn),s(Fp),s(Jn),s(Wp),s(Gn),s(zp),s(Nn),s(Op),s(Kn),s(Bp),s(Xn),s(Jp),s($n),s(Np),s(Qn),s(Kp),s(Zn),s($p),s(ns),s(Qp),s(ss),s(no),s(as),s(so),s(ts),s(to),s(es),s(eo),s(ps),s(oo),s(os),s(lo),s(ls),s(uo),s(cs),s(ro),s(us),s(io),s(rs),s(mo),s(is),s(bo),s(ks),s(vo),s(ms),s(go),s(ds),s(jo),s(bs),s(xo),s(fs),s(Co),s(vs),s(yo),s(gs),s(Lo),s(_s),s(ho),s(js),s(Po),s(xs),s(Mo),s(ws),s(To),s(Cs),s(So),s(ys),s(Io),s(Hs),s(Vo),s(Ls),s(Do),s(hs),s(Uo),s(Ps),s(Fo),s(Es),s(Ao),s(Ms),s(Wo),s(Ts),s(zo),s(Rs),s(Oo),s(Ss),s(Bo),s(Is),s(Jo),s(qs),s(No),s(Vs),s(Ko),s(Ds),s(Xo),s(Us),s(Qo),s(Fs),s(Zo),s(As),s(sl),s(Ws),s(al),s(zs),s(el),s(Ys),s(pl),s(Os),s(ll),s(Bs),s(cl),s(Js),s(rl),s(Gs),s(il),s(Ns),s(ml),s(Ks),s(dl),s(Xs),s(bl),s($s),s(fl),s(Qs),s(gl),s(Zs),s(_l),s(na),s(jl),s(sa),s(xl),s(aa),s(Cl),s(ta),s(yl),s(ea),s(Ll),s(pa),s(hl),s(oa),s(El),s(la),s(Ml),s(ca),s(Rl),s(ua),s(Sl),s(ra),s(ql),s(ia),s(Vl),s(ka),s(Ul),s(ma),s(Fl),s(da),s(Wl),s(ba),s(zl),s(fa),s(Ol),s(va),s(Bl),s(ga),s(Gl),s(_a),s(Nl),s(ja),s(Xl),s(xa),s($l),s(wa),s(Zl),s(Ca),s(nc),s(ya),s(ac),s(Ha),s(tc),s(La),s(pc),s(ha),s(oc),s(Pa),s(cc),s(Ea),s(uc),s(Ma),s(ic),s(Ta),s(kc),s(Ra),s(mc),s(Sa),s(bc),s(Ia),s(fc),s(qa),s(gc),s(Va),s(jc),s(Da),s(xc),s(Ua),s(wc),s(Fa),s(yc),s(Aa),s(Hc),s(Wa),s(hc),s(za),s(Pc),s(Ya),s(Mc),s(Oa),s(Tc),s(Ba),s(Sc),s(Ja),s(Ic),s(Ga),s(Vc),s(Na),s(Dc),s(Ka),s(Fc),s(Xa),s(Ac),s($a),s(Wc),s(Qa),s(zc),s(Za),s(Yc),s(nt),s(Bc),s(st),s(Jc),s(at),s(Nc),s(tt),s(Xc),s(et),s($c),s(pt),s(Zc),s(ot),s(nu),s(lt),s(au),s(ct),s(tu),s(ut),s(pu),s(rt),s(ou),s(it),s(lu),s(kt),s(uu),s(mt),s(ru),s(dt),s(iu),s(bt),s(mu),s(ft),s(du),s(vt),s(fu),s(gt),s(vu),s(_t),s(_u),s(jt),s(ju),s(xt),s(wu),s(wt),s(Cu),s(Ct),s(Hu),s(yt),s(Lu),s(Ht),s(hu),s(Lt),s(Eu),s(ht),s(Mu),s(Pt),s(Tu),s(Et),s(Su),s(Mt),s(Iu),s(Tt),s(Vu),s(Rt),s(Du),s(St),s(Uu),s(It))}}}const Xb={title:"Julia - Cheatsheet",date:"2024-03-20",author:"Josselin Morvan",category:"julia",keywords:"cheatsheet ; julia"},{title:Zb,date:n1,author:s1,category:a1,keywords:t1}=Xb;class e1 extends Gb{constructor(m){super(),Nb(this,m,null,Kb,Jb,{})}}export{e1 as default,Xb as metadata};
