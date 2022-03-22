import{S as Ca,i as Da,s as Pa,C as js,w as ua,x as ya,y as da,z as La,A as ca,q as fa,o as xa,B as ga,r as Oa,R as ka,k as h,e as t,t as c,m as u,c as e,a as l,h as k,d as n,b as p,Q as va,g as ts,F as s,O as Va}from"../../../chunks/vendor-ea160616.js";import{B as Aa}from"../../../chunks/BlogLayout-1be3dc1e.js";import{T as Ga}from"../../../chunks/TableOfContent-c4f5cb6e.js";import{_ as qa}from"../../../chunks/twitter-card-image-a57df29d.js";import"../../../chunks/stores-7d7fda0c.js";import"../../../chunks/WebMentions-d768a574.js";/* empty css                                   */var Ma="/_app/assets/feturbulence-011259a0.gif",Ra="/_app/assets/final-aeda1495.gif";function ja(T){let r,d,y,g,i,f,C,z,E,Hs,ss,a,N,b,es,os,m,ls,D,ps,rs,P,is,cs,ks,Q,S,vs,hs,J,I,Bs,us,K,ys,ds,U,fs,xs,L,ma='<pre class="prism language-svelte"><code><div class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></div><div class="line">  <span class="token keyword">export</span> <span class="token keyword">let</span> baseFrequency <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></div><div class="line">  <span class="token keyword">export</span> <span class="token keyword">let</span> scale <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></div><div class="line">  <span class="token keyword">export</span> <span class="token keyword">let</span> id<span class="token punctuation">;</span></div><div class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></div><div class="line"></div><div class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></div><div class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>id<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span></div><div class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feTurbulence</span></div><div class="line">      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>turbulence<span class="token punctuation">"</span></span> <span class="token attr-name">numOctaves</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span></div><div class="line">      <span class="token language-javascript"><span class="token punctuation">&#123;</span>baseFrequency<span class="token punctuation">&#125;</span></span></div><div class="line">      <span class="token attr-name">result</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>turbulence<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></div><div class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feDisplacementMap</span></div><div class="line">      <span class="token attr-name">in2</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>turbulence<span class="token punctuation">"</span></span> <span class="token attr-name">in</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>SourceGraphic<span class="token punctuation">"</span></span></div><div class="line">      <span class="token attr-name">xChannelSelector</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>R<span class="token punctuation">"</span></span> <span class="token attr-name">yChannelSelector</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>G<span class="token punctuation">"</span></span></div><div class="line">      <span class="token language-javascript"><span class="token punctuation">&#123;</span>scale<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></div><div class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">></span></span></div><div class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></div></code></pre>',gs,_,ms,O,_s,ws,V,Es,bs,A,_a='<pre class="prism language-svelte"><code><div class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">context</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></div><div class="line">  <span class="token keyword">let</span> _idx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></div><div class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></div><div class="line"></div><div class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></div><div class="line">  <span class="token comment">// ...</span></div><div class="line">  <span class="token keyword">export</span> <span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">wave-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>_idx<span class="token operator">++</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span></div><div class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></div></code></pre>',Ss,F,Is,G,Fs,$s,Ts,q,wa=`<pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> SvgFilter </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;./SvgFilter.svelte&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">function</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">wavy</span><span style="color: var(--shiki-color-text)">(node</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> params </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> &#123;&#125;) &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">let</span><span style="color: var(--shiki-color-text)"> svgFilter;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  		</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">node</span><span style="color: var(--shiki-token-function)">.addEventListener</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;introstart&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> createIntro);</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-comment)">// create SvgFilter</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">function</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">createIntro</span><span style="color: var(--shiki-color-text)">() &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    svgFilter </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">SvgFilter</span><span style="color: var(--shiki-color-text)">(&#123; target</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">document</span><span style="color: var(--shiki-color-text)">.body &#125;);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-constant)">node</span><span style="color: var(--shiki-color-text)">.</span><span style="color: var(--shiki-token-constant)">style</span><span style="color: var(--shiki-color-text)">.filter </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#96;url(#</span><span style="color: var(--shiki-token-keyword)">$&#123;</span><span style="color: var(--shiki-token-constant)">svgFilter</span><span style="color: var(--shiki-color-text)">.id</span><span style="color: var(--shiki-token-keyword)">&#125;</span><span style="color: var(--shiki-token-string-expression)">)&#96;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-constant)">node</span><span style="color: var(--shiki-token-function)">.removeEventListener</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;introstart&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> createIntro);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-constant)">node</span><span style="color: var(--shiki-token-function)">.addEventListener</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;introend&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> cleanup);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">function</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">cleanup</span><span style="color: var(--shiki-color-text)">() &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-constant)">svgFilter</span><span style="color: var(--shiki-token-function)">.$destroy</span><span style="color: var(--shiki-color-text)">();</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-constant)">node</span><span style="color: var(--shiki-token-function)">.removeEventListener</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;introend&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> cleanup);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &#125;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-comment)">// ...</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&#125;</span></span></code></pre>`,Cs,w,Ds,M,Ps,Ls,R,Os,Vs,j,Ea=`<pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-keyword)">function</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">wavy</span><span style="color: var(--shiki-color-text)">(node</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> params </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> &#123;&#125;) &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">let</span><span style="color: var(--shiki-color-text)"> svgFilter;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-comment)">// ...</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">...</span><span style="color: var(--shiki-color-text)">params</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-function)">tick</span><span style="color: var(--shiki-color-text)">(t) &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-comment)">// t     0   -&gt; 1</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-comment)">// scale 100 -&gt; 0</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">if</span><span style="color: var(--shiki-color-text)"> (svgFilter) </span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-constant)">svgFilter</span><span style="color: var(--shiki-token-function)">.$set</span><span style="color: var(--shiki-color-text)">(&#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">          scale</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> (</span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">-</span><span style="color: var(--shiki-color-text)"> t) </span><span style="color: var(--shiki-token-keyword)">*</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">100</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">          baseFrequency</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">0.55</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        &#125;);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &#125;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &#125;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&#125;</span></span></code></pre>`,As,W,Gs,qs,H,ba=`<pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-keyword)">function</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">wavy</span><span style="color: var(--shiki-color-text)">(node</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> params </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> &#123;&#125;) &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">let</span><span style="color: var(--shiki-color-text)"> svgFilter;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-comment)">// ...</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">...</span><span style="color: var(--shiki-color-text)">params</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-function)">css</span><span style="color: var(--shiki-color-text)">(t) &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-comment)">// only fade out in the last quarter of the time</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-comment)">// t       1 -&gt; 0.25 -&gt; 0</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-comment)">// opactiy 1 -&gt; 1    -&gt; 0</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> t </span><span style="color: var(--shiki-token-keyword)">&lt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">0.25</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">?</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#96;opacity: </span><span style="color: var(--shiki-token-keyword)">$&#123;</span><span style="color: var(--shiki-color-text)">t </span><span style="color: var(--shiki-token-keyword)">*</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">4</span><span style="color: var(--shiki-token-keyword)">&#125;</span><span style="color: var(--shiki-token-string-expression)">&#96;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;opacity: 1&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &#125;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-function)">tick</span><span style="color: var(--shiki-color-text)">(t) &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-comment)">// t     0   -&gt; 1</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-comment)">// scale 100 -&gt; 0</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">if</span><span style="color: var(--shiki-color-text)"> (svgFilter) </span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-constant)">svgFilter</span><span style="color: var(--shiki-token-function)">.$set</span><span style="color: var(--shiki-color-text)">(&#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">          scale</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> (</span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">-</span><span style="color: var(--shiki-color-text)"> t) </span><span style="color: var(--shiki-token-keyword)">*</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">100</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">          baseFrequency</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">0.55</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        &#125;);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &#125;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &#125;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&#125;</span></span></code></pre>`,Ms,X,$,Rs,as;return r=new Ga({props:{data:[{link:"the-result",title:"The Result"},{link:"break-it-down",title:"Break it down"}]}}),{c(){ua(r.$$.fragment),d=h(),y=t("section"),g=t("h2"),i=t("a"),f=c("The Result"),C=h(),z=t("p"),E=t("img"),ss=h(),a=t("section"),N=t("h2"),b=t("a"),es=c("Break it down"),os=h(),m=t("p"),ls=c("I'm using a combination of SVG filters "),D=t("code"),ps=c("<feTurbulence>"),rs=c(", "),P=t("code"),is=c("<feDisplacementMap>"),cs=c(" to achieve this effect."),ks=h(),Q=t("p"),S=t("a"),vs=c("Svelte REPL"),hs=h(),J=t("p"),I=t("img"),us=h(),K=t("p"),ys=c("To use this SVG filter, I first created a Svelte component for the filter."),ds=h(),U=t("p"),fs=c("The idea is to add this render this filter whenever I want to transition, and update the scale and frequency during the transition"),xs=h(),L=t("div"),gs=h(),_=t("p"),ms=c("As I'm going to have multiple instance of the SvgFilter, and I don't want the filter id to be conflict with each other, I generated the "),O=t("code"),_s=c("id"),ws=c(" everytime there's a new instance of "),V=t("code"),Es=c("SvgFilter"),bs=h(),A=t("div"),Ss=h(),F=t("p"),Is=c("I created the "),G=t("code"),Fs=c("SvgFilter"),$s=c(" component as the transition starts and remove it as the transition ends"),Ts=h(),q=t("div"),Cs=h(),w=t("p"),Ds=c("And as the transition ticks by, I set the "),M=t("code"),Ps=c("scale"),Ls=c(" of the SVG filter based on the time, "),R=t("code"),Os=c("t"),Vs=h(),j=t("div"),As=h(),W=t("p"),Gs=c("Add some fade out using the opacity"),qs=h(),H=t("div"),Ms=h(),X=t("p"),$=t("a"),Rs=c("Final REPL"),this.h()},l(v){ya(r.$$.fragment,v),d=u(v),y=e(v,"SECTION",{});var x=l(y);g=e(x,"H2",{});var zs=l(g);i=e(zs,"A",{href:!0,id:!0});var Ns=l(i);f=k(Ns,"The Result"),Ns.forEach(n),zs.forEach(n),C=u(x),z=e(x,"P",{});var Qs=l(z);E=e(Qs,"IMG",{src:!0,loading:!0,alt:!0}),Qs.forEach(n),x.forEach(n),ss=u(v),a=e(v,"SECTION",{});var o=l(a);N=e(o,"H2",{});var Js=l(N);b=e(Js,"A",{href:!0,id:!0});var Ks=l(b);es=k(Ks,"Break it down"),Ks.forEach(n),Js.forEach(n),os=u(o),m=e(o,"P",{});var B=l(m);ls=k(B,"I'm using a combination of SVG filters "),D=e(B,"CODE",{class:!0});var Us=l(D);ps=k(Us,"<feTurbulence>"),Us.forEach(n),rs=k(B,", "),P=e(B,"CODE",{class:!0});var Ws=l(P);is=k(Ws,"<feDisplacementMap>"),Ws.forEach(n),cs=k(B," to achieve this effect."),B.forEach(n),ks=u(o),Q=e(o,"P",{});var Xs=l(Q);S=e(Xs,"A",{href:!0,rel:!0});var Ys=l(S);vs=k(Ys,"Svelte REPL"),Ys.forEach(n),Xs.forEach(n),hs=u(o),J=e(o,"P",{});var Zs=l(J);I=e(Zs,"IMG",{src:!0,loading:!0,alt:!0}),Zs.forEach(n),us=u(o),K=e(o,"P",{});var sa=l(K);ys=k(sa,"To use this SVG filter, I first created a Svelte component for the filter."),sa.forEach(n),ds=u(o),U=e(o,"P",{});var aa=l(U);fs=k(aa,"The idea is to add this render this filter whenever I want to transition, and update the scale and frequency during the transition"),aa.forEach(n),xs=u(o),L=e(o,"DIV",{class:!0});var Sa=l(L);Sa.forEach(n),gs=u(o),_=e(o,"P",{});var Y=l(_);ms=k(Y,"As I'm going to have multiple instance of the SvgFilter, and I don't want the filter id to be conflict with each other, I generated the "),O=e(Y,"CODE",{class:!0});var na=l(O);_s=k(na,"id"),na.forEach(n),ws=k(Y," everytime there's a new instance of "),V=e(Y,"CODE",{class:!0});var ta=l(V);Es=k(ta,"SvgFilter"),ta.forEach(n),Y.forEach(n),bs=u(o),A=e(o,"DIV",{class:!0});var Ia=l(A);Ia.forEach(n),Ss=u(o),F=e(o,"P",{});var ns=l(F);Is=k(ns,"I created the "),G=e(ns,"CODE",{class:!0});var ea=l(G);Fs=k(ea,"SvgFilter"),ea.forEach(n),$s=k(ns," component as the transition starts and remove it as the transition ends"),ns.forEach(n),Ts=u(o),q=e(o,"DIV",{class:!0});var Fa=l(q);Fa.forEach(n),Cs=u(o),w=e(o,"P",{});var Z=l(w);Ds=k(Z,"And as the transition ticks by, I set the "),M=e(Z,"CODE",{class:!0});var oa=l(M);Ps=k(oa,"scale"),oa.forEach(n),Ls=k(Z," of the SVG filter based on the time, "),R=e(Z,"CODE",{class:!0});var la=l(R);Os=k(la,"t"),la.forEach(n),Z.forEach(n),Vs=u(o),j=e(o,"DIV",{class:!0});var $a=l(j);$a.forEach(n),As=u(o),W=e(o,"P",{});var pa=l(W);Gs=k(pa,"Add some fade out using the opacity"),pa.forEach(n),qs=u(o),H=e(o,"DIV",{class:!0});var Ta=l(H);Ta.forEach(n),Ms=u(o),X=e(o,"P",{});var ra=l(X);$=e(ra,"A",{href:!0,rel:!0});var ia=l($);Rs=k(ia,"Final REPL"),ia.forEach(n),ra.forEach(n),o.forEach(n),this.h()},h(){p(i,"href","#the-result"),p(i,"id","the-result"),va(E.src,Hs=Ra)||p(E,"src",Hs),p(E,"loading","lazy"),p(E,"alt","the-result"),p(b,"href","#break-it-down"),p(b,"id","break-it-down"),p(D,"class","inline"),p(P,"class","inline"),p(S,"href","https://svelte.dev/repl/fc2c47f30912496eb0b4fe2776345462?version=3.29.4"),p(S,"rel","nofollow"),va(I.src,Bs=Ma)||p(I,"src",Bs),p(I,"loading","lazy"),p(I,"alt","feTurbulence"),p(L,"class","code-section"),p(O,"class","inline"),p(V,"class","inline"),p(A,"class","code-section"),p(G,"class","inline"),p(q,"class","code-section"),p(M,"class","inline"),p(R,"class","inline"),p(j,"class","code-section"),p(H,"class","code-section"),p($,"href","https://svelte.dev/repl/2f3f9b62e1454f2d94729fe242375d43?version=3.29.4"),p($,"rel","nofollow")},m(v,x){da(r,v,x),ts(v,d,x),ts(v,y,x),s(y,g),s(g,i),s(i,f),s(y,C),s(y,z),s(z,E),ts(v,ss,x),ts(v,a,x),s(a,N),s(N,b),s(b,es),s(a,os),s(a,m),s(m,ls),s(m,D),s(D,ps),s(m,rs),s(m,P),s(P,is),s(m,cs),s(a,ks),s(a,Q),s(Q,S),s(S,vs),s(a,hs),s(a,J),s(J,I),s(a,us),s(a,K),s(K,ys),s(a,ds),s(a,U),s(U,fs),s(a,xs),s(a,L),L.innerHTML=ma,s(a,gs),s(a,_),s(_,ms),s(_,O),s(O,_s),s(_,ws),s(_,V),s(V,Es),s(a,bs),s(a,A),A.innerHTML=_a,s(a,Ss),s(a,F),s(F,Is),s(F,G),s(G,Fs),s(F,$s),s(a,Ts),s(a,q),q.innerHTML=wa,s(a,Cs),s(a,w),s(w,Ds),s(w,M),s(M,Ps),s(w,Ls),s(w,R),s(R,Os),s(a,Vs),s(a,j),j.innerHTML=Ea,s(a,As),s(a,W),s(W,Gs),s(a,qs),s(a,H),H.innerHTML=ba,s(a,Ms),s(a,X),s(X,$),s($,Rs),as=!0},p:Va,i(v){as||(fa(r.$$.fragment,v),as=!0)},o(v){xa(r.$$.fragment,v),as=!1},d(v){ga(r,v),v&&n(d),v&&n(y),v&&n(ss),v&&n(a)}}}function Ha(T){let r,d;const y=[T[0],ha];let g={$$slots:{default:[ja]},$$scope:{ctx:T}};for(let i=0;i<y.length;i+=1)g=js(g,y[i]);return r=new Aa({props:g}),{c(){ua(r.$$.fragment)},l(i){ya(r.$$.fragment,i)},m(i,f){da(r,i,f),d=!0},p(i,[f]){const C=f&1?La(y,[f&1&&ca(i[0]),f&0&&ca(ha)]):{};f&2&&(C.$$scope={dirty:f,ctx:i}),r.$set(C)},i(i){d||(fa(r.$$.fragment,i),d=!0)},o(i){xa(r.$$.fragment,i),d=!1},d(i){ga(r,i)}}}const ha={title:"SVG filter Svelte Transition",tags:["svelte","transition"]};function Ba(T,r,d){return Oa("blog",{image:qa}),T.$$set=y=>{d(0,r=js(js({},r),ka(y)))},r=ka(r),[r]}class Xa extends Ca{constructor(r){super();Da(this,r,Ba,Ha,Pa,{})}}export{Xa as default,ha as metadata};
