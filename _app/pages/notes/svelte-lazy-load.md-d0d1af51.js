import{S as Us,i as Ks,s as Qs,C as ws,w as Gs,x as Rs,y as Ws,z as Xs,A as Hs,q as Zs,o as sn,B as nn,r as an,Y as Ns,e as t,t as u,k as f,c as e,a as p,h as r,d as n,m as y,b as i,g as J,H as s,J as tn}from"../../chunks/vendor-da4388d4.js";import{B as en}from"../../chunks/BlogLayout-86707f1c.js";import{_ as pn}from"../../chunks/twitter-card-image-a57df29d.js";import"../../chunks/stores-1fad7c36.js";import"../../chunks/ldjson-b0805387.js";/* empty css                                */function on(j){let a,v,d,z,o,k,V='<pre class="prism language-svelte"><code><div class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></div><div class="line">	<span class="token keyword">let</span> lazyComponent<span class="token punctuation">;</span></div><div class="line"></div><div class="line">	<span class="token keyword">function</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span></div><div class="line">		lazyComponent <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">./LazyComponent.svelte</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></div><div class="line">	<span class="token punctuation">&#125;</span></div><div class="line">	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></div><div class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></div><div class="line"></div><div class="line"><span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> lazyComponent<span class="token punctuation">&#125;</span></span></div><div class="line">	<span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">await</span> lazyComponent then <span class="token punctuation">&#123;</span> <span class="token keyword">default</span><span class="token operator">:</span> LazyComponent <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span></div><div class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LazyComponent</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>count<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></div><div class="line">	<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">await</span><span class="token punctuation">&#125;</span></span></div><div class="line"><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span></div><div class="line"></div><div class="line"></div><div class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>load<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>Load<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></div><div class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> count <span class="token operator">++</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>Increment<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></div></code></pre>',R,x,Ys='<pre class="prism language-svelte"><code><div class="line"><span class="token comment">&lt;!-- LazyComponent.svelte --></span></div><div class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></div><div class="line">	<span class="token keyword">export</span> <span class="token keyword">let</span> count<span class="token punctuation">;</span></div><div class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></div><div class="line"></div><div class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">&#123;</span>count<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span></div></code></pre>',P,_,H,E,W,X,N,I,Z,h,O,ss,ns,Y,as,ts,F,es,U,c,M,C,ps,os,w,L,ls,A,cs,is,D,us,rs,b,ks,S,ds,vs,ms,B,gs,fs,T,Fs=`<pre class="prism language-svelte"><code><div class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></div><div class="line">	<span class="token keyword">import</span> LazyComponent <span class="token keyword">from</span> <span class="token string">'./LazyComponent.svelte'</span><span class="token punctuation">;</span></div><div class="line">	<span class="token keyword">let</span> load <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></div><div class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></div><div class="line"></div><div class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LazyComponent</span> </div><div class="line">	<span class="token attr-name">when=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>load<span class="token punctuation">&#125;</span></span></div><div class="line">	<span class="token attr-name">component=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./LoadMeLikeLazy.svelte'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></div><div class="line"></div><div class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span> load <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>Load<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></div></code></pre>`,ys,$,Ms='<pre class="prism language-svelte"><code><div class="line"><span class="token comment">&lt;!-- filename: LazyComponent.svelte --></span></div><div class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></div><div class="line">	<span class="token keyword">export</span> <span class="token keyword">let</span> when <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></div><div class="line">	<span class="token keyword">export</span> <span class="token keyword">let</span> component<span class="token punctuation">;</span></div><div class="line"></div><div class="line">	<span class="token keyword">let</span> loading<span class="token punctuation">;</span></div><div class="line"></div><div class="line">	<span class="token literal-property property">$</span><span class="token operator">:</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>when<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span></div><div class="line">		<span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></div><div class="line">	<span class="token punctuation">&#125;</span></div><div class="line"></div><div class="line">	<span class="token keyword">function</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span></div><div class="line">		loading <span class="token operator">=</span> <span class="token function">component</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></div><div class="line">	<span class="token punctuation">&#125;</span></div><div class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></div><div class="line"><span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> when<span class="token punctuation">&#125;</span></span></div><div class="line">	<span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">await</span> loading then <span class="token punctuation">&#123;</span> <span class="token keyword">default</span><span class="token operator">:</span> Component <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span></div><div class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component</span> <span class="token punctuation">/></span></span></div><div class="line">	<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">await</span><span class="token punctuation">&#125;</span></span></div><div class="line"><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span></div></code></pre>';return{c(){a=t("section"),v=t("h2"),d=t("a"),z=u("Lazy Loading Svelte component"),o=f(),k=t("div"),R=f(),x=t("div"),P=f(),_=t("section"),H=t("h3"),E=t("a"),W=u("Notes"),X=f(),N=t("ul"),I=t("li"),Z=u("For rollup users, dynamic imports only supported in the following output formats:"),h=t("ul"),O=t("li"),ss=u("esm"),ns=f(),Y=t("li"),as=u("amd"),ts=f(),F=t("li"),es=u("systemjs"),U=f(),c=t("section"),M=t("h2"),C=t("a"),ps=u("Dynamic Lazy Component"),os=f(),w=t("blockquote"),L=t("p"),ls=u("This is great! I tried turning lazy loading into its own component, but got burned by dynamic imports of variables. Any thoughts on how this could work? "),A=t("a"),cs=u("pic.twitter.com/yCDadJYFqf"),is=u("\u2014 sean mullen (@srmullen) "),D=t("a"),us=u("August 12, 2020"),rs=f(),b=t("p"),ks=u("You can't use dynamic expressions for "),S=t("code"),ds=u("import()"),vs=u(" in rollup."),ms=f(),B=t("p"),gs=u("A better approach for dynamic lazy component would be passing in a function that will return a dynamic component"),fs=f(),T=t("div"),ys=f(),$=t("div"),this.h()},l(l){a=e(l,"SECTION",{});var m=p(a);v=e(m,"H2",{});var Ls=p(v);d=e(Ls,"A",{href:!0,id:!0});var zs=p(d);z=r(zs,"Lazy Loading Svelte component"),zs.forEach(n),Ls.forEach(n),o=y(m),k=e(m,"DIV",{class:!0});var Bs=p(k);Bs.forEach(n),R=y(m),x=e(m,"DIV",{class:!0});var Js=p(x);Js.forEach(n),m.forEach(n),P=y(l),_=e(l,"SECTION",{});var K=p(_);H=e(K,"H3",{});var Es=p(H);E=e(Es,"A",{href:!0,id:!0});var Cs=p(E);W=r(Cs,"Notes"),Cs.forEach(n),Es.forEach(n),X=y(K),N=e(K,"UL",{});var bs=p(N);I=e(bs,"LI",{});var hs=p(I);Z=r(hs,"For rollup users, dynamic imports only supported in the following output formats:"),h=e(hs,"UL",{});var q=p(h);O=e(q,"LI",{});var js=p(O);ss=r(js,"esm"),js.forEach(n),ns=y(q),Y=e(q,"LI",{});var xs=p(Y);as=r(xs,"amd"),xs.forEach(n),ts=y(q),F=e(q,"LI",{});var Is=p(F);es=r(Is,"systemjs"),Is.forEach(n),q.forEach(n),hs.forEach(n),bs.forEach(n),K.forEach(n),U=y(l),c=e(l,"SECTION",{});var g=p(c);M=e(g,"H2",{});var As=p(M);C=e(As,"A",{href:!0,id:!0});var Ds=p(C);ps=r(Ds,"Dynamic Lazy Component"),Ds.forEach(n),As.forEach(n),os=y(g),w=e(g,"BLOCKQUOTE",{class:!0});var Q=p(w);L=e(Q,"P",{lang:!0,dir:!0});var _s=p(L);ls=r(_s,"This is great! I tried turning lazy loading into its own component, but got burned by dynamic imports of variables. Any thoughts on how this could work? "),A=e(_s,"A",{href:!0});var Ss=p(A);cs=r(Ss,"pic.twitter.com/yCDadJYFqf"),Ss.forEach(n),_s.forEach(n),is=r(Q,"\u2014 sean mullen (@srmullen) "),D=e(Q,"A",{href:!0});var Ts=p(D);us=r(Ts,"August 12, 2020"),Ts.forEach(n),Q.forEach(n),rs=y(g),b=e(g,"P",{});var G=p(b);ks=r(G,"You can't use dynamic expressions for "),S=e(G,"CODE",{class:!0});var $s=p(S);ds=r($s,"import()"),$s.forEach(n),vs=r(G," in rollup."),G.forEach(n),ms=y(g),B=e(g,"P",{});var qs=p(B);gs=r(qs,"A better approach for dynamic lazy component would be passing in a function that will return a dynamic component"),qs.forEach(n),fs=y(g),T=e(g,"DIV",{class:!0});var Vs=p(T);Vs.forEach(n),ys=y(g),$=e(g,"DIV",{class:!0});var Ps=p($);Ps.forEach(n),g.forEach(n),this.h()},h(){i(d,"href","#lazy-loading-svelte-component"),i(d,"id","lazy-loading-svelte-component"),i(k,"class","code-section"),i(x,"class","code-section"),i(E,"href","#notes"),i(E,"id","notes"),i(C,"href","#dynamic-lazy-component"),i(C,"id","dynamic-lazy-component"),i(A,"href","https://t.co/yCDadJYFqf"),i(L,"lang","en"),i(L,"dir","ltr"),i(D,"href","https://twitter.com/srmullen/status/1293549224676777984?ref_src=twsrc%5Etfw"),i(w,"class","twitter-tweet"),i(S,"class","inline"),i(T,"class","code-section"),i($,"class","code-section")},m(l,m){J(l,a,m),s(a,v),s(v,d),s(d,z),s(a,o),s(a,k),k.innerHTML=V,s(a,R),s(a,x),x.innerHTML=Ys,J(l,P,m),J(l,_,m),s(_,H),s(H,E),s(E,W),s(_,X),s(_,N),s(N,I),s(I,Z),s(I,h),s(h,O),s(O,ss),s(h,ns),s(h,Y),s(Y,as),s(h,ts),s(h,F),s(F,es),J(l,U,m),J(l,c,m),s(c,M),s(M,C),s(C,ps),s(c,os),s(c,w),s(w,L),s(L,ls),s(L,A),s(A,cs),s(w,is),s(w,D),s(D,us),s(c,rs),s(c,b),s(b,ks),s(b,S),s(S,ds),s(b,vs),s(c,ms),s(c,B),s(B,gs),s(c,fs),s(c,T),T.innerHTML=Fs,s(c,ys),s(c,$),$.innerHTML=Ms},p:tn,d(l){l&&n(a),l&&n(P),l&&n(_),l&&n(U),l&&n(c)}}}function ln(j){let a,v;const d=[j[0],Os];let z={$$slots:{default:[on]},$$scope:{ctx:j}};for(let o=0;o<d.length;o+=1)z=ws(z,d[o]);return a=new en({props:z}),{c(){Gs(a.$$.fragment)},l(o){Rs(a.$$.fragment,o)},m(o,k){Ws(a,o,k),v=!0},p(o,[k]){const V=k&1?Xs(d,[k&1&&Hs(o[0]),k&0&&Hs(Os)]):{};k&2&&(V.$$scope={dirty:k,ctx:o}),a.$set(V)},i(o){v||(Zs(a.$$.fragment,o),v=!0)},o(o){sn(a.$$.fragment,o),v=!1},d(o){nn(a,o)}}}const Os={title:"Lazy Loading Svelte component",tags:["lazy load","svelte"],description:"Lazy Loading Svelte componentNotesFor rollup users, dynamic imports only supported in the following output formats:esmamdsystemjsDynamic Lazy ComponentYou can't use dynamic expressions for `import()` in rollup....",tableOfContents:[{link:"lazy-loading-svelte-component",title:"Lazy Loading Svelte component",nested:[{link:"notes",title:"Notes"}]},{link:"dynamic-lazy-component",title:"Dynamic Lazy Component"}]};function cn(j,a,v){return an("blog",{image:pn}),j.$$set=d=>{v(0,a=ws(ws({},a),Ns(d)))},a=Ns(a),[a]}class gn extends Us{constructor(a){super();Ks(this,a,cn,ln,Qs,{})}}export{gn as default,Os as metadata};
