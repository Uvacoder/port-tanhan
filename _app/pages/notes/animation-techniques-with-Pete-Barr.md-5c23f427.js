import{S as ct,i as kt,s as ht,C as js,w as vt,x as yt,y as ut,z as dt,A as Zs,q as ft,o as gt,B as mt,r as xt,Y as st,e as o,t as c,k as v,c as e,a as n,h as k,d as t,m as y,b as l,g as f,H as s,J as _t}from"../../chunks/vendor-da4388d4.js";import{B as Et}from"../../chunks/BlogLayout-d479b777.js";import{_ as wt}from"../../chunks/twitter-card-image-a57df29d.js";import"../../chunks/stores-1fad7c36.js";import"../../chunks/ldjson-b0805387.js";/* empty css                                */function qt(G){let i,g,u,q,p,r,m,S,rs,ls,N,A,ps,b,cs,ks,hs,M,at=`<pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">mySplitText</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">SplitText</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&quot;#quote&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> &#123;type</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;words,chars&quot;</span><span style="color: var(--shiki-color-text)">&#125;)</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-token-comment)">//an array of all the divs that wrap each character</span></span>
<span class="line"><span style="color: var(--shiki-token-constant)">const</span><span style="color: var(--shiki-color-text)"> chars </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">mySplitText</span><span style="color: var(--shiki-color-text)">.chars;</span></span></code></pre>`,vs,P,V,ys,C,us,ds,D,fs,gs,z,ot=`<pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">data-splitting</span><span style="color: var(--shiki-color-text)">&gt;ABC&lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-function)">Splitting</span><span style="color: var(--shiki-color-text)">();</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre>`,Q,x,R,I,ms,xs,O,et=`<pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-function)">.element</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-comment)">/* make the center of origin behind the characters */</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">transform-origin</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">center center -100</span><span style="color: var(--shiki-token-keyword)">px</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-comment)">/* comment this out to see the back of the letters */</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">backface-visibility</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">hidden</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">animation</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">rotate 5</span><span style="color: var(--shiki-token-keyword)">s</span><span style="color: var(--shiki-token-constant)"> linear infinite</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&#125;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">@keyframes</span><span style="color: var(--shiki-color-text)"> rotate &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  from &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-constant)">transform</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">rotateX</span><span style="color: var(--shiki-token-constant)">(0</span><span style="color: var(--shiki-token-keyword)">deg</span><span style="color: var(--shiki-token-constant)">)</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &#125;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  to &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-constant)">transform</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">rotateX</span><span style="color: var(--shiki-token-constant)">(360</span><span style="color: var(--shiki-token-keyword)">deg</span><span style="color: var(--shiki-token-constant)">)</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &#125;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&#125;</span></span></code></pre>`,W,_,U,T,_s,Es,X,L,ws,Z,E,J,j,qs,Ss,H,Y,As,bs,F,Cs,ss,w,K,$,Is,Ts,B,nt=`<pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">svg</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">defs</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">mask</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">id</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;jm-mask&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">path</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">d</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;...&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;/</span><span style="color: var(--shiki-token-string-expression)">mask</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">defs</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">rect</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">class</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;stage&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">width</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;716&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">height</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;1020&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">fill</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;red&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">mask</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;url(#jm-mask)&quot;</span><span style="color: var(--shiki-color-text)">/&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">svg</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre>`;return{c(){i=o("p"),g=c("Link: "),u=o("a"),q=c("https://frontend.horse/articles/amazing-animation-techniques-with-gsap/"),p=v(),r=o("section"),m=o("h2"),S=o("a"),rs=c("Split text from phrase to animate character individually"),ls=v(),N=o("ul"),A=o("li"),ps=c("Greensock "),b=o("a"),cs=c("SplitText"),ks=c(" plugin"),hs=v(),M=o("div"),vs=v(),P=o("ul"),V=o("li"),ys=c("Splitting.js "),C=o("a"),us=c("https://splitting.js.org/"),ds=v(),D=o("p"),fs=c("Add data-splitting to element"),gs=v(),z=o("div"),Q=v(),x=o("section"),R=o("h2"),I=o("a"),ms=c("Cylinder Rotation Effect"),xs=v(),O=o("div"),W=v(),_=o("section"),U=o("h2"),T=o("a"),_s=c("Create custom easing function using GreenSock Ease Visualiser"),Es=v(),X=o("p"),L=o("a"),ws=c("https://greensock.com/docs/v3/Eases"),Z=v(),E=o("section"),J=o("h2"),j=o("a"),qs=c("Infinite looping"),Ss=v(),H=o("ul"),Y=o("li"),As=c("use linear ease"),bs=v(),F=o("li"),Cs=c("animate until the ending point is the same as starting point, then restart the animation"),ss=v(),w=o("section"),K=o("h2"),$=o("a"),Is=c("Masking using svg mask"),Ts=v(),B=o("div"),this.h()},l(a){i=e(a,"P",{});var h=n(i);g=k(h,"Link: "),u=e(h,"A",{href:!0,rel:!0});var Hs=n(u);q=k(Hs,"https://frontend.horse/articles/amazing-animation-techniques-with-gsap/"),Hs.forEach(t),h.forEach(t),p=y(a),r=e(a,"SECTION",{});var d=n(r);m=e(d,"H2",{});var $s=n(m);S=e($s,"A",{href:!0,id:!0});var Gs=n(S);rs=k(Gs,"Split text from phrase to animate character individually"),Gs.forEach(t),$s.forEach(t),ls=y(d),N=e(d,"UL",{});var Ms=n(N);A=e(Ms,"LI",{});var ts=n(A);ps=k(ts,"Greensock "),b=e(ts,"A",{href:!0,rel:!0});var Vs=n(b);cs=k(Vs,"SplitText"),Vs.forEach(t),ks=k(ts," plugin"),ts.forEach(t),Ms.forEach(t),hs=y(d),M=e(d,"DIV",{class:!0});var it=n(M);it.forEach(t),vs=y(d),P=e(d,"UL",{});var zs=n(P);V=e(zs,"LI",{});var Ls=n(V);ys=k(Ls,"Splitting.js "),C=e(Ls,"A",{href:!0,rel:!0});var Os=n(C);us=k(Os,"https://splitting.js.org/"),Os.forEach(t),Ls.forEach(t),zs.forEach(t),ds=y(d),D=e(d,"P",{});var Bs=n(D);fs=k(Bs,"Add data-splitting to element"),Bs.forEach(t),gs=y(d),z=e(d,"DIV",{class:!0});var rt=n(z);rt.forEach(t),d.forEach(t),Q=y(a),x=e(a,"SECTION",{});var as=n(x);R=e(as,"H2",{});var Ns=n(R);I=e(Ns,"A",{href:!0,id:!0});var Ps=n(I);ms=k(Ps,"Cylinder Rotation Effect"),Ps.forEach(t),Ns.forEach(t),xs=y(as),O=e(as,"DIV",{class:!0});var lt=n(O);lt.forEach(t),as.forEach(t),W=y(a),_=e(a,"SECTION",{});var os=n(_);U=e(os,"H2",{});var Ds=n(U);T=e(Ds,"A",{href:!0,id:!0});var Rs=n(T);_s=k(Rs,"Create custom easing function using GreenSock Ease Visualiser"),Rs.forEach(t),Ds.forEach(t),Es=y(os),X=e(os,"P",{});var Us=n(X);L=e(Us,"A",{href:!0,rel:!0});var Xs=n(L);ws=k(Xs,"https://greensock.com/docs/v3/Eases"),Xs.forEach(t),Us.forEach(t),os.forEach(t),Z=y(a),E=e(a,"SECTION",{});var es=n(E);J=e(es,"H2",{});var Js=n(J);j=e(Js,"A",{href:!0,id:!0});var Ys=n(j);qs=k(Ys,"Infinite looping"),Ys.forEach(t),Js.forEach(t),Ss=y(es),H=e(es,"UL",{});var ns=n(H);Y=e(ns,"LI",{});var Fs=n(Y);As=k(Fs,"use linear ease"),Fs.forEach(t),bs=y(ns),F=e(ns,"LI",{});var Ks=n(F);Cs=k(Ks,"animate until the ending point is the same as starting point, then restart the animation"),Ks.forEach(t),ns.forEach(t),es.forEach(t),ss=y(a),w=e(a,"SECTION",{});var is=n(w);K=e(is,"H2",{});var Qs=n(K);$=e(Qs,"A",{href:!0,id:!0});var Ws=n($);Is=k(Ws,"Masking using svg mask"),Ws.forEach(t),Qs.forEach(t),Ts=y(is),B=e(is,"DIV",{class:!0});var pt=n(B);pt.forEach(t),is.forEach(t),this.h()},h(){l(u,"href","https://frontend.horse/articles/amazing-animation-techniques-with-gsap/"),l(u,"rel","nofollow"),l(S,"href","#split-text-from-phrase-to-animate-character-individually"),l(S,"id","split-text-from-phrase-to-animate-character-individually"),l(b,"href","https://greensock.com/splittext/"),l(b,"rel","nofollow"),l(M,"class","code-section"),l(C,"href","https://splitting.js.org/"),l(C,"rel","nofollow"),l(z,"class","code-section"),l(I,"href","#cylinder-rotation-effect"),l(I,"id","cylinder-rotation-effect"),l(O,"class","code-section"),l(T,"href","#create-custom-easing-function-using-greensock-ease-visualiser"),l(T,"id","create-custom-easing-function-using-greensock-ease-visualiser"),l(L,"href","https://greensock.com/docs/v3/Eases"),l(L,"rel","nofollow"),l(j,"href","#infinite-looping"),l(j,"id","infinite-looping"),l($,"href","#masking-using-svg-mask"),l($,"id","masking-using-svg-mask"),l(B,"class","code-section")},m(a,h){f(a,i,h),s(i,g),s(i,u),s(u,q),f(a,p,h),f(a,r,h),s(r,m),s(m,S),s(S,rs),s(r,ls),s(r,N),s(N,A),s(A,ps),s(A,b),s(b,cs),s(A,ks),s(r,hs),s(r,M),M.innerHTML=at,s(r,vs),s(r,P),s(P,V),s(V,ys),s(V,C),s(C,us),s(r,ds),s(r,D),s(D,fs),s(r,gs),s(r,z),z.innerHTML=ot,f(a,Q,h),f(a,x,h),s(x,R),s(R,I),s(I,ms),s(x,xs),s(x,O),O.innerHTML=et,f(a,W,h),f(a,_,h),s(_,U),s(U,T),s(T,_s),s(_,Es),s(_,X),s(X,L),s(L,ws),f(a,Z,h),f(a,E,h),s(E,J),s(J,j),s(j,qs),s(E,Ss),s(E,H),s(H,Y),s(Y,As),s(H,bs),s(H,F),s(F,Cs),f(a,ss,h),f(a,w,h),s(w,K),s(K,$),s($,Is),s(w,Ts),s(w,B),B.innerHTML=nt},p:_t,d(a){a&&t(i),a&&t(p),a&&t(r),a&&t(Q),a&&t(x),a&&t(W),a&&t(_),a&&t(Z),a&&t(E),a&&t(ss),a&&t(w)}}}function St(G){let i,g;const u=[G[0],tt];let q={$$slots:{default:[qt]},$$scope:{ctx:G}};for(let p=0;p<u.length;p+=1)q=js(q,u[p]);return i=new Et({props:q}),{c(){vt(i.$$.fragment)},l(p){yt(i.$$.fragment,p)},m(p,r){ut(i,p,r),g=!0},p(p,[r]){const m=r&1?dt(u,[r&1&&Zs(p[0]),r&0&&Zs(tt)]):{};r&2&&(m.$$scope={dirty:r,ctx:p}),i.$set(m)},i(p){g||(ft(i.$$.fragment,p),g=!0)},o(p){gt(i.$$.fragment,p),g=!1},d(p){mt(i,p)}}}const tt={title:"Amazing Animation Techniques with GSAP",tags:["greensock","web animation"],description:"Link: https://frontend.horse/articles/amazing-animation-techniques-with-gsap/Split text from phrase to animate character individuallyGreensock SplitText pluginSplitting.js https://splitting.js.org/Add data-splitting to element...",tableOfContents:[{link:"split-text-from-phrase-to-animate-character-individually",title:"Split text from phrase to animate character individually"},{link:"cylinder-rotation-effect",title:"Cylinder Rotation Effect"},{link:"create-custom-easing-function-using-greensock-ease-visualiser",title:"Create custom easing function using GreenSock Ease Visualiser"},{link:"infinite-looping",title:"Infinite looping"},{link:"masking-using-svg-mask",title:"Masking using svg mask"}]};function At(G,i,g){return xt("blog",{image:wt}),G.$$set=u=>{g(0,i=js(js({},i),st(u)))},i=st(i),[i]}class Ht extends ct{constructor(i){super();kt(this,i,At,St,ht,{})}}export{Ht as default,tt as metadata};