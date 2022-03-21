import{S as Ma,i as $a,s as Sa,C as Eo,w as va,x as ya,y as da,z as Ta,A as ca,q as ua,o as ma,B as xa,r as Pa,R as ka,k as r,e as a,t as p,m as i,c as t,a as n,h as c,d as o,b as y,g as Es,F as s,O as Aa}from"../../chunks/vendor-6bf294e3.js";import{B as Ca}from"../../chunks/BlogLayout-152f599b.js";import{T as Na}from"../../chunks/TableOfContent-1b9e4572.js";import{_ as Va}from"../../chunks/twitter-card-image-a57df29d.js";import"../../chunks/stores-e20b7872.js";import"../../chunks/WebMentions-745413ea.js";/* empty css                                */function ja(C){let k,u,e,g,h,m,N,F,E,Ls,Is,J,Ms,$s,R,Z,Ss,Ts,G,Ps,As,K,V,Cs,L,Ns,Vs,j,fa=`<pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-keyword)">function</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">changeTab</span><span style="color: var(--shiki-color-text)">(selectedTabNode</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> desiredModelId) &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">for</span><span style="color: var(--shiki-color-text)"> (</span><span style="color: var(--shiki-token-keyword)">var</span><span style="color: var(--shiki-color-text)"> i </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">0</span><span style="color: var(--shiki-color-text)">; i </span><span style="color: var(--shiki-token-keyword)">&lt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">tabArea</span><span style="color: var(--shiki-color-text)">.</span><span style="color: var(--shiki-token-constant)">childNodes</span><span style="color: var(--shiki-color-text)">.</span><span style="color: var(--shiki-token-constant)">length</span><span style="color: var(--shiki-color-text)">; i</span><span style="color: var(--shiki-token-keyword)">++</span><span style="color: var(--shiki-color-text)">) &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">var</span><span style="color: var(--shiki-color-text)"> child </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">tabArea</span><span style="color: var(--shiki-color-text)">.childNodes[i];</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">if</span><span style="color: var(--shiki-color-text)"> (</span><span style="color: var(--shiki-token-string-expression)">/tab/</span><span style="color: var(--shiki-token-function)">.test</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">child</span><span style="color: var(--shiki-color-text)">.className)) &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-constant)">child</span><span style="color: var(--shiki-color-text)">.className </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;tab&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &#125;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &#125;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">selectedTabNode</span><span style="color: var(--shiki-color-text)">.className </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;tab active&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">var</span><span style="color: var(--shiki-color-text)"> currentState </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">editor</span><span style="color: var(--shiki-token-function)">.saveViewState</span><span style="color: var(--shiki-color-text)">();</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">var</span><span style="color: var(--shiki-color-text)"> currentModel </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">editor</span><span style="color: var(--shiki-token-function)">.getModel</span><span style="color: var(--shiki-color-text)">();</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">if</span><span style="color: var(--shiki-color-text)"> (currentModel </span><span style="color: var(--shiki-token-keyword)">===</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">data</span><span style="color: var(--shiki-color-text)">.</span><span style="color: var(--shiki-token-constant)">js</span><span style="color: var(--shiki-color-text)">.model) &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-constant)">data</span><span style="color: var(--shiki-color-text)">.</span><span style="color: var(--shiki-token-constant)">js</span><span style="color: var(--shiki-color-text)">.state </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> currentState;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &#125; </span><span style="color: var(--shiki-token-keyword)">else</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">if</span><span style="color: var(--shiki-color-text)"> (currentModel </span><span style="color: var(--shiki-token-keyword)">===</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">data</span><span style="color: var(--shiki-color-text)">.</span><span style="color: var(--shiki-token-constant)">css</span><span style="color: var(--shiki-color-text)">.model) &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-constant)">data</span><span style="color: var(--shiki-color-text)">.</span><span style="color: var(--shiki-token-constant)">css</span><span style="color: var(--shiki-color-text)">.state </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> currentState;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &#125; </span><span style="color: var(--shiki-token-keyword)">else</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">if</span><span style="color: var(--shiki-color-text)"> (currentModel </span><span style="color: var(--shiki-token-keyword)">===</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">data</span><span style="color: var(--shiki-color-text)">.</span><span style="color: var(--shiki-token-constant)">html</span><span style="color: var(--shiki-color-text)">.model) &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-constant)">data</span><span style="color: var(--shiki-color-text)">.</span><span style="color: var(--shiki-token-constant)">html</span><span style="color: var(--shiki-color-text)">.state </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> currentState;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">editor</span><span style="color: var(--shiki-token-function)">.setModel</span><span style="color: var(--shiki-color-text)">(data[desiredModelId].model);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">editor</span><span style="color: var(--shiki-token-function)">.restoreViewState</span><span style="color: var(--shiki-color-text)">(data[desiredModelId].state);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">editor</span><span style="color: var(--shiki-token-function)">.focus</span><span style="color: var(--shiki-color-text)">();</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&#125;</span></span></code></pre>`,js,U,ga=`<pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-function)">loadSample</span><span style="color: var(--shiki-color-text)">(sampleId</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">function</span><span style="color: var(--shiki-color-text)"> (err</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> sample) &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">if</span><span style="color: var(--shiki-color-text)"> (err) &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-function)">alert</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;Sample not found! &#39;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">+</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">err</span><span style="color: var(--shiki-color-text)">.message);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &#125;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">if</span><span style="color: var(--shiki-color-text)"> (myToken </span><span style="color: var(--shiki-token-keyword)">!==</span><span style="color: var(--shiki-color-text)"> currentToken) &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &#125;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">data</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">js</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">model</span><span style="color: var(--shiki-token-function)">.setValue</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">sample</span><span style="color: var(--shiki-color-text)">.js);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">data</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">html</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">model</span><span style="color: var(--shiki-token-function)">.setValue</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">sample</span><span style="color: var(--shiki-color-text)">.html);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">data</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">css</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">model</span><span style="color: var(--shiki-token-function)">.setValue</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">sample</span><span style="color: var(--shiki-color-text)">.css);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">editor</span><span style="color: var(--shiki-token-function)">.setScrollTop</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">0</span><span style="color: var(--shiki-color-text)">);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-function)">run</span><span style="color: var(--shiki-color-text)">();</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&#125;);</span></span></code></pre>`,Us,q,_a=`<pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-constant)">data</span><span style="color: var(--shiki-color-text)">.</span><span style="color: var(--shiki-token-constant)">js</span><span style="color: var(--shiki-color-text)">.model </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">monaco</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">editor</span><span style="color: var(--shiki-token-function)">.createModel</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;console.log(&quot;hi&quot;)&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;javascript&#39;</span><span style="color: var(--shiki-color-text)">);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-constant)">data</span><span style="color: var(--shiki-color-text)">.</span><span style="color: var(--shiki-token-constant)">css</span><span style="color: var(--shiki-color-text)">.model </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">monaco</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">editor</span><span style="color: var(--shiki-token-function)">.createModel</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;css&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;css&#39;</span><span style="color: var(--shiki-color-text)">);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-constant)">data</span><span style="color: var(--shiki-color-text)">.</span><span style="color: var(--shiki-token-constant)">html</span><span style="color: var(--shiki-color-text)">.model </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">monaco</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">editor</span><span style="color: var(--shiki-token-function)">.createModel</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;html&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;html&#39;</span><span style="color: var(--shiki-color-text)">);</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">		editor </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">monaco</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">editor</span><span style="color: var(--shiki-token-function)">.create</span><span style="color: var(--shiki-color-text)">(editorContainer</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			model</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">data</span><span style="color: var(--shiki-color-text)">.</span><span style="color: var(--shiki-token-constant)">js</span><span style="color: var(--shiki-color-text)">.model</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			minimap</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				enabled</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			&#125;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		&#125;);</span></span></code></pre>`,qs,I,Q,Hs,Ds,W,Os,Bs,X,zs,Fs,x,Y,ss,Js,Rs,os,as,Zs,Gs,ts,ns,Ks,Qs,es,ls,Ws,Xs,H,wa='<pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-constant)">editor</span><span style="color: var(--shiki-color-text)">.onDidChangeModelContent</span></span></code></pre>',gs,d,rs,M,Ys,so,is,oo,ao,_,$,ps,S,to,no,w,cs,eo,lo,ks,ro,io,hs,po,co,vs,ys,T,ko,ho,ds,us,vo,yo,D,uo,P,mo,xo,ms,O,fo,xs,fs,A,go,_s;return k=new Na({props:{data:[{link:"monaco-samples",title:"monaco samples:"},{link:"syntax-highlighting",title:"syntax highlighting"}]}}),{c(){va(k.$$.fragment),u=r(),e=a("section"),g=a("h2"),h=a("a"),m=p("monaco samples:"),N=r(),F=a("p"),E=a("a"),Ls=p("https://github.com/microsoft/monaco-editor-samples/blob/master/browser-amd-monarch/index.html"),Is=r(),J=a("p"),Ms=p("tab + history undo buffer"),$s=r(),R=a("ul"),Z=a("li"),Ss=p("link to issues that was fixed previously"),Ts=r(),G=a("p"),Ps=p("get inspiration from the playground"),As=r(),K=a("ul"),V=a("li"),Cs=p(`it has 3 tabs
`),L=a("a"),Ns=p("https://microsoft.github.io/monaco-editor/playground.html"),Vs=r(),j=a("div"),js=r(),U=a("div"),Us=r(),q=a("div"),qs=r(),I=a("ul"),Q=a("li"),Hs=p("how to add svlete language server into it"),Ds=r(),W=a("li"),Os=p("markdown"),Bs=r(),X=a("p"),zs=p("** store as global variable"),Fs=r(),x=a("ul"),Y=a("li"),ss=a("p"),Js=p("window.xxx"),Rs=r(),os=a("li"),as=a("p"),Zs=p(`right-click, "store as global variable"
quickly test out apis, without having to wait for reload`),Gs=r(),ts=a("li"),ns=a("p"),Ks=p(`allow switching tabs
create new model on new tab / init
store the state when switching tabs
restore state upon selecting tabs`),Qs=r(),es=a("li"),ls=a("p"),Ws=p("listen to changes"),Xs=r(),H=a("div"),gs=r(),d=a("section"),rs=a("h2"),M=a("a"),Ys=p("syntax highlighting"),so=r(),is=a("p"),oo=p("this is rough man"),ao=r(),_=a("ul"),$=a("li"),ps=a("p"),S=a("a"),to=p("https://gearset.com/blog/writing-an-open-source-apex-syntax-highlighter-for-monaco-editor"),no=r(),w=a("ul"),cs=a("li"),eo=p("vs code vs monaco"),lo=r(),ks=a("li"),ro=p("text mate grammars, language servers, monarch grammars"),io=r(),hs=a("li"),po=p("native library"),co=r(),vs=a("li"),ys=a("p"),T=a("a"),ko=p("https://github.com/microsoft/monaco-editor/issues/171"),ho=r(),ds=a("li"),us=a("p"),vo=p("implement a monaco language, shouldn't be hard? \u{1F937}\u200D\u2642\uFE0F"),yo=r(),D=a("p"),uo=p("playground "),P=a("a"),mo=p("https://microsoft.github.io/monaco-editor/monarch.html"),xo=r(),ms=a("ul"),O=a("li"),fo=p("proxy based language server"),xs=a("ul"),fs=a("li"),A=a("a"),go=p("https://medium.com/dscddu/language-server-protocol-adding-support-for-multiple-language-servers-to-monaco-editor-a3c35e42a98d"),this.h()},l(v){ya(k.$$.fragment,v),u=i(v),e=t(v,"SECTION",{});var l=n(e);g=t(l,"H2",{});var Lo=n(g);h=t(Lo,"A",{href:!0,id:!0});var Io=n(h);m=c(Io,"monaco samples:"),Io.forEach(o),Lo.forEach(o),N=i(l),F=t(l,"P",{});var Mo=n(F);E=t(Mo,"A",{href:!0,rel:!0});var $o=n(E);Ls=c($o,"https://github.com/microsoft/monaco-editor-samples/blob/master/browser-amd-monarch/index.html"),$o.forEach(o),Mo.forEach(o),Is=i(l),J=t(l,"P",{});var So=n(J);Ms=c(So,"tab + history undo buffer"),So.forEach(o),$s=i(l),R=t(l,"UL",{});var To=n(R);Z=t(To,"LI",{});var Po=n(Z);Ss=c(Po,"link to issues that was fixed previously"),Po.forEach(o),To.forEach(o),Ts=i(l),G=t(l,"P",{});var Ao=n(G);Ps=c(Ao,"get inspiration from the playground"),Ao.forEach(o),As=i(l),K=t(l,"UL",{});var Co=n(K);V=t(Co,"LI",{});var _o=n(V);Cs=c(_o,`it has 3 tabs
`),L=t(_o,"A",{href:!0,rel:!0});var No=n(L);Ns=c(No,"https://microsoft.github.io/monaco-editor/playground.html"),No.forEach(o),_o.forEach(o),Co.forEach(o),Vs=i(l),j=t(l,"DIV",{class:!0});var ba=n(j);ba.forEach(o),js=i(l),U=t(l,"DIV",{class:!0});var Ea=n(U);Ea.forEach(o),Us=i(l),q=t(l,"DIV",{class:!0});var La=n(q);La.forEach(o),qs=i(l),I=t(l,"UL",{});var ws=n(I);Q=t(ws,"LI",{});var Vo=n(Q);Hs=c(Vo,"how to add svlete language server into it"),Vo.forEach(o),Ds=i(ws),W=t(ws,"LI",{});var jo=n(W);Os=c(jo,"markdown"),jo.forEach(o),ws.forEach(o),Bs=i(l),X=t(l,"P",{});var Uo=n(X);zs=c(Uo,"** store as global variable"),Uo.forEach(o),Fs=i(l),x=t(l,"UL",{});var b=n(x);Y=t(b,"LI",{});var qo=n(Y);ss=t(qo,"P",{});var Ho=n(ss);Js=c(Ho,"window.xxx"),Ho.forEach(o),qo.forEach(o),Rs=i(b),os=t(b,"LI",{});var Do=n(os);as=t(Do,"P",{});var Oo=n(as);Zs=c(Oo,`right-click, "store as global variable"
quickly test out apis, without having to wait for reload`),Oo.forEach(o),Do.forEach(o),Gs=i(b),ts=t(b,"LI",{});var Bo=n(ts);ns=t(Bo,"P",{});var zo=n(ns);Ks=c(zo,`allow switching tabs
create new model on new tab / init
store the state when switching tabs
restore state upon selecting tabs`),zo.forEach(o),Bo.forEach(o),Qs=i(b),es=t(b,"LI",{});var Fo=n(es);ls=t(Fo,"P",{});var Jo=n(ls);Ws=c(Jo,"listen to changes"),Jo.forEach(o),Fo.forEach(o),b.forEach(o),Xs=i(l),H=t(l,"DIV",{class:!0});var Ia=n(H);Ia.forEach(o),l.forEach(o),gs=i(v),d=t(v,"SECTION",{});var f=n(d);rs=t(f,"H2",{});var Ro=n(rs);M=t(Ro,"A",{href:!0,id:!0});var Zo=n(M);Ys=c(Zo,"syntax highlighting"),Zo.forEach(o),Ro.forEach(o),so=i(f),is=t(f,"P",{});var Go=n(is);oo=c(Go,"this is rough man"),Go.forEach(o),ao=i(f),_=t(f,"UL",{});var B=n(_);$=t(B,"LI",{});var bs=n($);ps=t(bs,"P",{});var Ko=n(ps);S=t(Ko,"A",{href:!0,rel:!0});var Qo=n(S);to=c(Qo,"https://gearset.com/blog/writing-an-open-source-apex-syntax-highlighter-for-monaco-editor"),Qo.forEach(o),Ko.forEach(o),no=i(bs),w=t(bs,"UL",{});var z=n(w);cs=t(z,"LI",{});var Wo=n(cs);eo=c(Wo,"vs code vs monaco"),Wo.forEach(o),lo=i(z),ks=t(z,"LI",{});var Xo=n(ks);ro=c(Xo,"text mate grammars, language servers, monarch grammars"),Xo.forEach(o),io=i(z),hs=t(z,"LI",{});var Yo=n(hs);po=c(Yo,"native library"),Yo.forEach(o),z.forEach(o),bs.forEach(o),co=i(B),vs=t(B,"LI",{});var sa=n(vs);ys=t(sa,"P",{});var oa=n(ys);T=t(oa,"A",{href:!0,rel:!0});var aa=n(T);ko=c(aa,"https://github.com/microsoft/monaco-editor/issues/171"),aa.forEach(o),oa.forEach(o),sa.forEach(o),ho=i(B),ds=t(B,"LI",{});var ta=n(ds);us=t(ta,"P",{});var na=n(us);vo=c(na,"implement a monaco language, shouldn't be hard? \u{1F937}\u200D\u2642\uFE0F"),na.forEach(o),ta.forEach(o),B.forEach(o),yo=i(f),D=t(f,"P",{});var wo=n(D);uo=c(wo,"playground "),P=t(wo,"A",{href:!0,rel:!0});var ea=n(P);mo=c(ea,"https://microsoft.github.io/monaco-editor/monarch.html"),ea.forEach(o),wo.forEach(o),xo=i(f),ms=t(f,"UL",{});var la=n(ms);O=t(la,"LI",{});var bo=n(O);fo=c(bo,"proxy based language server"),xs=t(bo,"UL",{});var ra=n(xs);fs=t(ra,"LI",{});var ia=n(fs);A=t(ia,"A",{href:!0,rel:!0});var pa=n(A);go=c(pa,"https://medium.com/dscddu/language-server-protocol-adding-support-for-multiple-language-servers-to-monaco-editor-a3c35e42a98d"),pa.forEach(o),ia.forEach(o),ra.forEach(o),bo.forEach(o),la.forEach(o),f.forEach(o),this.h()},h(){y(h,"href","#monaco-samples"),y(h,"id","monaco-samples"),y(E,"href","https://github.com/microsoft/monaco-editor-samples/blob/master/browser-amd-monarch/index.html"),y(E,"rel","nofollow"),y(L,"href","https://microsoft.github.io/monaco-editor/playground.html"),y(L,"rel","nofollow"),y(j,"class","code-section"),y(U,"class","code-section"),y(q,"class","code-section"),y(H,"class","code-section"),y(M,"href","#syntax-highlighting"),y(M,"id","syntax-highlighting"),y(S,"href","https://gearset.com/blog/writing-an-open-source-apex-syntax-highlighter-for-monaco-editor"),y(S,"rel","nofollow"),y(T,"href","https://github.com/microsoft/monaco-editor/issues/171"),y(T,"rel","nofollow"),y(P,"href","https://microsoft.github.io/monaco-editor/monarch.html"),y(P,"rel","nofollow"),y(A,"href","https://medium.com/dscddu/language-server-protocol-adding-support-for-multiple-language-servers-to-monaco-editor-a3c35e42a98d"),y(A,"rel","nofollow")},m(v,l){da(k,v,l),Es(v,u,l),Es(v,e,l),s(e,g),s(g,h),s(h,m),s(e,N),s(e,F),s(F,E),s(E,Ls),s(e,Is),s(e,J),s(J,Ms),s(e,$s),s(e,R),s(R,Z),s(Z,Ss),s(e,Ts),s(e,G),s(G,Ps),s(e,As),s(e,K),s(K,V),s(V,Cs),s(V,L),s(L,Ns),s(e,Vs),s(e,j),j.innerHTML=fa,s(e,js),s(e,U),U.innerHTML=ga,s(e,Us),s(e,q),q.innerHTML=_a,s(e,qs),s(e,I),s(I,Q),s(Q,Hs),s(I,Ds),s(I,W),s(W,Os),s(e,Bs),s(e,X),s(X,zs),s(e,Fs),s(e,x),s(x,Y),s(Y,ss),s(ss,Js),s(x,Rs),s(x,os),s(os,as),s(as,Zs),s(x,Gs),s(x,ts),s(ts,ns),s(ns,Ks),s(x,Qs),s(x,es),s(es,ls),s(ls,Ws),s(e,Xs),s(e,H),H.innerHTML=wa,Es(v,gs,l),Es(v,d,l),s(d,rs),s(rs,M),s(M,Ys),s(d,so),s(d,is),s(is,oo),s(d,ao),s(d,_),s(_,$),s($,ps),s(ps,S),s(S,to),s($,no),s($,w),s(w,cs),s(cs,eo),s(w,lo),s(w,ks),s(ks,ro),s(w,io),s(w,hs),s(hs,po),s(_,co),s(_,vs),s(vs,ys),s(ys,T),s(T,ko),s(_,ho),s(_,ds),s(ds,us),s(us,vo),s(d,yo),s(d,D),s(D,uo),s(D,P),s(P,mo),s(d,xo),s(d,ms),s(ms,O),s(O,fo),s(O,xs),s(xs,fs),s(fs,A),s(A,go),_s=!0},p:Aa,i(v){_s||(ua(k.$$.fragment,v),_s=!0)},o(v){ma(k.$$.fragment,v),_s=!1},d(v){xa(k,v),v&&o(u),v&&o(e),v&&o(gs),v&&o(d)}}}function Ua(C){let k,u;const e=[C[0],ha];let g={$$slots:{default:[ja]},$$scope:{ctx:C}};for(let h=0;h<e.length;h+=1)g=Eo(g,e[h]);return k=new Ca({props:g}),{c(){va(k.$$.fragment)},l(h){ya(k.$$.fragment,h)},m(h,m){da(k,h,m),u=!0},p(h,[m]){const N=m&1?Ta(e,[m&1&&ca(h[0]),m&0&&ca(ha)]):{};m&2&&(N.$$scope={dirty:m,ctx:h}),k.$set(N)},i(h){u||(ua(k.$$.fragment,h),u=!0)},o(h){ma(k.$$.fragment,h),u=!1},d(h){xa(k,h)}}}const ha={title:"adding monaco to the svelte repl",date:"2020-03-22T08:00:00Z",tags:["Svelte","JavaScript"],wip:!0,label:"blog"};function qa(C,k,u){return Pa("blog",{image:Va}),C.$$set=e=>{u(0,k=Eo(Eo({},k),ka(e)))},k=ka(k),[k]}class Ra extends Ma{constructor(k){super();$a(this,k,qa,Ua,Sa,{})}}export{Ra as default,ha as metadata};
