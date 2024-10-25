---
title: 'Édition critique de formules mathématiques'
date: '2023-12-31'
category: 'tei'
author: 'jmorvan'
keywords: 'xml ; tei ; mathml ; latex'
---

# Édition critique de formules mathématiques

Message [LaTeX/XML-TEI & texte mathématique](https://groupes.renater.fr/sympa/msg/dh/2024-01/anfNKVPnC4nitTaP6UpYyQ) sur la liste DH.

Question posée par EMAN, ERC Philiumm et ANR BANANA pour l'édition critique et génétique des formules : comment encoder correctement en XML-TEI les corrections, ajouts, versions, etc. dans les formules mêmes. S'intéressent aux possibilités offertes par l'utilisation conjointe de LateX et [MathJax](https://www.mathjax.org/). Proposition formulée par EMAN

```xml
<formula rend="LaTeX">
  \begin{align*}
    62)\, \int_0^{e^{xi}}(\log k-\log 4\sqrt q)\frac{<del rend="overtyped">\mathfrak d</del>
    <handShift scribe="Weber"/>
    <add place="inline" type="correction">d</add><handShift scribe="Dedekind"/>}{q}
    =&-2\log4\cos\frac{x^2}{2}+\frac{2}{4}\log 4\cos \frac{2x^2}{2}-\frac{2}{9}\log 4\cos \frac{3x^3}{2}+\frac{2}{16}\log 4\cos \frac {4x^4}{2}\\
    & -4\pi i\left(\frac{x}{2\pi}\right)+\frac{4\pi i}{4}\left(\frac{2x}{2\pi}\right)-\frac{4\pi i}{9}\left(\frac{3x}{2\pi}\right) +\frac{4\pi i}{16}\left(\frac{4x}{2\pi}\right)\\
    & =2\sum\frac{(-1)^n \log \cos\frac{nx^2}{2}}{nn}
    <handShift scribe="Weber"/>
    <add place="inline" type="correction">
      \left[+4\pi i\sum\frac{(-1)^n}{nn}\left(\frac{nx}{2\pi}\right)\right] 
    </add>
    <handShift scribe="Dedekind"/>
  \end{align*}
</formula>
```

L'utilisation de LaTeX au sein de la TEI afin de produire une édition critique ne semble toutefois pas pertinente, d'autant qu'XML permet de travailler avec les espaces de noms, pourquoi ne pas les utiliser ?
```xml
<TEI xmlns="http://www.tei-c.org/ns/1.0" xmlns:tei="http://www.tei-c.org/ns/1.0">
   <teiHeader>
      <fileDesc>
         <titleStmt>
            <title>Title</title>
         </titleStmt>
         <publicationStmt>
            <p>Publication Information</p>
         </publicationStmt>
         <sourceDesc>
            <p>Information about the source</p>
         </sourceDesc>
      </fileDesc>
   </teiHeader>
   <text>
      <body>
         <p>Some text here.</p>
         <p>
            <formula>
               <math xmlns="http://www.w3.org/1998/Math/MathML" display="block" class="tml-display" style="display:block math;">
                  <semantics>
                     <mtable displaystyle="true" columnalign="right left">
                        <mtr>
                           <mtd class="tml-right" style="padding:0.7ex 0em 0.7ex 0em;">
                              <mrow>
                                 <mn>62</mn>
                                 <mo form="postfix" stretchy="false">)</mo>
                                 <mspace width="0.1667em"/>
                                 <msubsup>
                                    <mo movablelimits="false">∫</mo>
                                    <mn>0</mn>
                                    <msup>
                                       <mi>e</mi>
                                       <mrow>
                                          <mi>x</mi>
                                          <mi>i</mi>
                                       </mrow>
                                    </msup>
                                 </msubsup>
                                 <mo form="prefix" stretchy="false">(</mo>
                                 <mrow>
                                    <mi>log</mi>
                                    <mo>⁡</mo>
                                    <mspace width="0.1667em"/>
                                 </mrow>
                                 <mi>k</mi>
                                 <mo>−</mo>
                                 <mrow>
                                    <mi>log</mi>
                                    <mo>⁡</mo>
                                    <mspace width="0.1667em"/>
                                 </mrow>
                                 <mn>4</mn>
                                 <msqrt>
                                    <mi>q</mi>
                                 </msqrt>
                                 <mo form="postfix" stretchy="false">)</mo>
                                 <mfrac>
                                    <mrow>
                                       <tei:del rend="overtyped"><mi>𝔡</mi></tei:del>
                                       <tei:add hand="weber" place="inline" type="correction"><mi>d</mi></tei:add>
                                    </mrow>
                                    <mi>q</mi>
                                 </mfrac>
                                 <mo>=</mo>
                              </mrow>
                           </mtd>
                           <mtd class="tml-left" style="padding:0.7ex 0em 0.7ex 0em;">
                              <mrow>
                                 <mo form="prefix" stretchy="false">−</mo>
                                 <mn>2</mn>
                                 <mrow>
                                    <mspace width="0.1667em"/>
                                    <mi>log</mi>
                                    <mo>⁡</mo>
                                    <mspace width="0.1667em"/>
                                 </mrow>
                                 <mn>4</mn>
                                 <mrow>
                                    <mspace width="0.1667em"/>
                                    <mi>cos</mi>
                                    <mo>⁡</mo>
                                    <mspace width="0.1667em"/>
                                 </mrow>
                                 <mfrac>
                                    <msup>
                                       <mi>x</mi>
                                       <mn>2</mn>
                                    </msup>
                                    <mn>2</mn>
                                 </mfrac>
                                 <mo>+</mo>
                                 <mfrac>
                                    <mn>2</mn>
                                    <mn>4</mn>
                                 </mfrac>
                                 <mrow>
                                    <mi>log</mi>
                                    <mo>⁡</mo>
                                    <mspace width="0.1667em"/>
                                 </mrow>
                                 <mn>4</mn>
                                 <mrow>
                                    <mspace width="0.1667em"/>
                                    <mi>cos</mi>
                                    <mo>⁡</mo>
                                    <mspace width="0.1667em"/>
                                 </mrow>
                                 <mfrac>
                                    <mrow>
                                       <mn>2</mn>
                                       <msup>
                                          <mi>x</mi>
                                          <mn>2</mn>
                                       </msup>
                                    </mrow>
                                    <mn>2</mn>
                                 </mfrac>
                                 <mo>−</mo>
                                 <mfrac>
                                    <mn>2</mn>
                                    <mn>9</mn>
                                 </mfrac>
                                 <mrow>
                                    <mi>log</mi>
                                    <mo>⁡</mo>
                                    <mspace width="0.1667em"/>
                                 </mrow>
                                 <mn>4</mn>
                                 <mrow>
                                    <mspace width="0.1667em"/>
                                    <mi>cos</mi>
                                    <mo>⁡</mo>
                                    <mspace width="0.1667em"/>
                                 </mrow>
                                 <mfrac>
                                    <mrow>
                                       <mn>3</mn>
                                       <msup>
                                          <mi>x</mi>
                                          <mn>3</mn>
                                       </msup>
                                    </mrow>
                                    <mn>2</mn>
                                 </mfrac>
                                 <mo>+</mo>
                                 <mfrac>
                                    <mn>2</mn>
                                    <mn>16</mn>
                                 </mfrac>
                                 <mrow>
                                    <mi>log</mi>
                                    <mo>⁡</mo>
                                    <mspace width="0.1667em"/>
                                 </mrow>
                                 <mn>4</mn>
                                 <mrow>
                                    <mspace width="0.1667em"/>
                                    <mi>cos</mi>
                                    <mo>⁡</mo>
                                    <mspace width="0.1667em"/>
                                 </mrow>
                                 <mfrac>
                                    <mrow>
                                       <mn>4</mn>
                                       <msup>
                                          <mi>x</mi>
                                          <mn>4</mn>
                                       </msup>
                                    </mrow>
                                    <mn>2</mn>
                                 </mfrac>
                              </mrow>
                           </mtd>
                        </mtr>
                        <mtr>
                           <mtd class="tml-right" style="padding:0.7ex 0em 0.7ex 0em;">
                              <mrow/>
                           </mtd>
                           <mtd class="tml-left" style="padding:0.7ex 0em 0.7ex 0em;">
                              <mrow>
                                 <mo>−</mo>
                                 <mn>4</mn>
                                 <mi>π</mi>
                                 <mi>i</mi>
                                 <mrow>
                                    <mo fence="true" form="prefix">(</mo>
                                    <mfrac>
                                       <mi>x</mi>
                                       <mrow>
                                          <mn>2</mn>
                                          <mi>π</mi>
                                       </mrow>
                                    </mfrac>
                                    <mo fence="true" form="postfix">)</mo>
                                 </mrow>
                                 <mo>+</mo>
                                 <mfrac>
                                    <mrow>
                                       <mn>4</mn>
                                       <mi>π</mi>
                                       <mi>i</mi>
                                    </mrow>
                                    <mn>4</mn>
                                 </mfrac>
                                 <mrow>
                                    <mo fence="true" form="prefix">(</mo>
                                    <mfrac>
                                       <mrow>
                                          <mn>2</mn>
                                          <mi>x</mi>
                                       </mrow>
                                       <mrow>
                                          <mn>2</mn>
                                          <mi>π</mi>
                                       </mrow>
                                    </mfrac>
                                    <mo fence="true" form="postfix">)</mo>
                                 </mrow>
                                 <mo>−</mo>
                                 <mfrac>
                                    <mrow>
                                       <mn>4</mn>
                                       <mi>π</mi>
                                       <mi>i</mi>
                                    </mrow>
                                    <mn>9</mn>
                                 </mfrac>
                                 <mrow>
                                    <mo fence="true" form="prefix">(</mo>
                                    <mfrac>
                                       <mrow>
                                          <mn>3</mn>
                                          <mi>x</mi>
                                       </mrow>
                                       <mrow>
                                          <mn>2</mn>
                                          <mi>π</mi>
                                       </mrow>
                                    </mfrac>
                                    <mo fence="true" form="postfix">)</mo>
                                 </mrow>
                                 <mo>+</mo>
                                 <mfrac>
                                    <mrow>
                                       <mn>4</mn>
                                       <mi>π</mi>
                                       <mi>i</mi>
                                    </mrow>
                                    <mn>16</mn>
                                 </mfrac>
                                 <mrow>
                                    <mo fence="true" form="prefix">(</mo>
                                    <mfrac>
                                       <mrow>
                                          <mn>4</mn>
                                          <mi>x</mi>
                                       </mrow>
                                       <mrow>
                                          <mn>2</mn>
                                          <mi>π</mi>
                                       </mrow>
                                    </mfrac>
                                    <mo fence="true" form="postfix">)</mo>
                                 </mrow>
                              </mrow>
                           </mtd>
                        </mtr>
                        <mtr>
                           <mtd class="tml-right" style="padding:0.7ex 0em 0.7ex 0em;">
                              <mrow/>
                           </mtd>
                           <mtd class="tml-left" style="padding:0.7ex 0em 0.7ex 0em;">
                              <mrow>
                                 <mo>=</mo>
                                 <mn>2</mn>
                                 <mo movablelimits="false">∑</mo>
                                 <mfrac>
                                    <mrow>
                                       <mo form="prefix" stretchy="false" lspace="0em" rspace="0em">(</mo>
                                       <mo form="prefix" stretchy="false">−</mo>
                                       <mn>1</mn>
                                       <msup>
                                          <mo form="postfix" stretchy="false">)</mo>
                                          <mi>n</mi>
                                       </msup>
                                       <mrow>
                                          <mi>log</mi>
                                          <mo>⁡</mo>
                                          <mspace width="0.1667em"/>
                                       </mrow>
                                       <mrow>
                                          <mi>cos</mi>
                                          <mo>⁡</mo>
                                          <mspace width="0.1667em"/>
                                       </mrow>
                                       <mfrac>
                                          <mrow>
                                             <mi>n</mi>
                                             <msup>
                                                <mi>x</mi>
                                                <mn>2</mn>
                                             </msup>
                                          </mrow>
                                          <mn>2</mn>
                                       </mfrac>
                                    </mrow>
                                    <mrow>
                                       <mi>n</mi>
                                       <mi>n</mi>
                                    </mrow>
                                 </mfrac>
                                 <tei:add hand="weber" place="inline" type="correction">
                                    <mrow>
                                       <mo fence="true" form="prefix">[</mo>
                                       <mo>+</mo>
                                       <mn>4</mn>
                                       <mi>π</mi>
                                       <mi>i</mi>
                                       <mo movablelimits="false">∑</mo>
                                       <mfrac>
                                          <mrow>
                                             <mo form="prefix" stretchy="false" lspace="0em" rspace="0em">(</mo>
                                             <mo form="prefix" stretchy="false">−</mo>
                                             <mn>1</mn>
                                             <msup>
                                                <mo form="postfix" stretchy="false">)</mo>
                                                <mi>n</mi>
                                             </msup>
                                          </mrow>
                                          <mrow>
                                             <mi>n</mi>
                                             <mi>n</mi>
                                          </mrow>
                                       </mfrac>
                                       <mrow>
                                          <mo fence="true" form="prefix">(</mo>
                                          <mfrac>
                                             <mrow>
                                                <mi>n</mi>
                                                <mi>x</mi>
                                             </mrow>
                                             <mrow>
                                                <mn>2</mn>
                                                <mi>π</mi>
                                             </mrow>
                                          </mfrac>
                                          <mo fence="true" form="postfix">)</mo>
                                       </mrow>
                                       <mo fence="true" form="postfix">]</mo>
                                    </mrow>
                                 </tei:add>
                              </mrow>
                           </mtd>
                        </mtr>
                     </mtable>
                     <annotation encoding="application/x-tex">\begin{align*}
                     62)\, \int_0^{e^{xi}}(\log k-\log 4\sqrt q)\frac{\mathfrak d
                     d}{q}
                     =&amp;-2\log4\cos\frac{x^2}{2}+\frac{2}{4}\log 4\cos \frac{2x^2}{2}-\frac{2}{9}\log 4\cos \frac{3x^3}{2}+\frac{2}{16}\log 4\cos \frac{4x^4}{2}\\
                     &amp; -4\pi i\left(\frac{x}{2\pi}\right)+\frac{4\pi i}{4}\left(\frac{2x}{2\pi}\right)-\frac{4\pi i}{9}\left(\frac{3x}{2\pi}\right)+\frac{4\pi i}{16}\left(\frac{4x}{2\pi}\right)\\
                     &amp; =2\sum\frac{(-1)^n \log \cos\frac{nx^2}{2}}{nn}
                        \left[+4\pi i\sum\frac{(-1)^n}{nn}\left(\frac{nx}{2\pi}\right)\right]
                     \end{align*}</annotation>
                  </semantics>
               </math>
            </formula>
         </p>
      </body>
   </text>
</TEI>
```