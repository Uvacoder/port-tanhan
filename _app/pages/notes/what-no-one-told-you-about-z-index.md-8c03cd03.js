import{S as qe,i as He,s as $e,C as Qt,w as Ge,x as Pe,y as Be,z as Re,A as De,q as Ue,o as We,B as Ye,r as Fe,Y as Le,e as o,t as l,k as x,c as n,a,h as r,d as e,m as y,b as p,g as at,H as t,J as Ze}from"../../chunks/vendor-9710682b.js";import{B as je}from"../../chunks/BlogLayout-9a08402e.js";import{_ as Je}from"../../chunks/twitter-card-image-a57df29d.js";import"../../chunks/stores-f9c97213.js";import"../../chunks/TableOfContent-2fa6a472.js";/* empty css                                */function Ke(S){let s,u,v,E,c,f,z,pt,U,W,ht,kt,A,Ie=`<pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">class</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;parent&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">class</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;child&quot;</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-constant)">height</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">50</span><span style="color: var(--shiki-token-keyword)">px</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-constant)">width</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">50</span><span style="color: var(--shiki-token-keyword)">px</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &#125;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-function)">.child</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-constant)">background</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">red</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-constant)">z-index</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">-1</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-constant)">position</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">relative</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &#125;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-function)">.parent</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-constant)">background</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">green</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-comment)">/* creates a new stacking context */</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-constant)">transform</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">scale</span><span style="color: var(--shiki-token-constant)">(1)</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &#125;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre>`,dt,Y,h,vt,D,ft,xt,L,yt,ut,T,gt,_t,I,mt,wt,N,Et,bt,q,Ot,Ct,St,F,Z,zt,At,j,g,Dt,H,Lt,Tt,$,It,Nt,J,G,qt,P,Ht,$t,K,M,Gt,Pt,Q,_,Bt,B,Rt,Ut,R,Wt,lt,m,V,b,Yt,Ft,X,Zt,rt,w,tt,O,jt,Jt,et,st,C,Kt;return{c(){s=o("section"),u=o("h2"),v=o("a"),E=l("Stacking Order within the same Stacking Context"),c=x(),f=o("p"),z=l("From back to front"),pt=x(),U=o("p"),W=o("strong"),ht=l("1. stacking context root element"),kt=x(),A=o("div"),dt=x(),Y=o("blockquote"),h=o("p"),vt=l("Adding "),D=o("code"),ft=l("transform: scale(1)"),xt=l(` creates a new stacking context.
`),L=o("code"),yt=l(".child"),ut=l(" initially stacks behind "),T=o("code"),gt=l(".parent"),_t=l(", but as "),I=o("code"),mt=l(".parent"),wt=l(" becomes the root of the new stacking context, "),N=o("code"),Et=l(".child"),bt=l(" comes in front of "),q=o("code"),Ot=l(".parent"),Ct=l("."),St=x(),F=o("p"),Z=o("strong"),zt=l("2. positioned element with negative z-index"),At=x(),j=o("ul"),g=o("li"),Dt=l("Higher values stacked in front of lower values, "),H=o("code"),Lt=l("z-index: -1"),Tt=l(" in front of "),$=o("code"),It=l("z-index: -2"),Nt=x(),J=o("p"),G=o("strong"),qt=l("3. positioned element with "),P=o("code"),Ht=l("z-index: auto"),$t=x(),K=o("p"),M=o("strong"),Gt=l("4. positioned element with positive z-index"),Pt=x(),Q=o("ul"),_=o("li"),Bt=l("Higher values stacked in front of lower values, "),B=o("code"),Rt=l("z-index: 2"),Ut=l(" in front of "),R=o("code"),Wt=l("z-index: 1"),lt=x(),m=o("section"),V=o("h2"),b=o("a"),Yt=l("Global Stacking Order with Stacking Context"),Ft=x(),X=o("p"),Zt=l("All the elements within the same stacking context move forward / backward together along with the root element."),rt=x(),w=o("section"),tt=o("h2"),O=o("a"),jt=l("Links"),Jt=x(),et=o("ul"),st=o("li"),C=o("a"),Kt=l("What No One Told You About Z-Index"),this.h()},l(k){s=n(k,"SECTION",{});var i=a(s);u=n(i,"H2",{});var Vt=a(u);v=n(Vt,"A",{href:!0,id:!0});var Xt=a(v);E=r(Xt,"Stacking Order within the same Stacking Context"),Xt.forEach(e),Vt.forEach(e),c=y(i),f=n(i,"P",{});var te=a(f);z=r(te,"From back to front"),te.forEach(e),pt=y(i),U=n(i,"P",{});var ee=a(U);W=n(ee,"STRONG",{});var se=a(W);ht=r(se,"1. stacking context root element"),se.forEach(e),ee.forEach(e),kt=y(i),A=n(i,"DIV",{class:!0});var Ne=a(A);Ne.forEach(e),dt=y(i),Y=n(i,"BLOCKQUOTE",{});var oe=a(Y);h=n(oe,"P",{});var d=a(h);vt=r(d,"Adding "),D=n(d,"CODE",{class:!0});var ne=a(D);ft=r(ne,"transform: scale(1)"),ne.forEach(e),xt=r(d,` creates a new stacking context.
`),L=n(d,"CODE",{class:!0});var ae=a(L);yt=r(ae,".child"),ae.forEach(e),ut=r(d," initially stacks behind "),T=n(d,"CODE",{class:!0});var le=a(T);gt=r(le,".parent"),le.forEach(e),_t=r(d,", but as "),I=n(d,"CODE",{class:!0});var re=a(I);mt=r(re,".parent"),re.forEach(e),wt=r(d," becomes the root of the new stacking context, "),N=n(d,"CODE",{class:!0});var ie=a(N);Et=r(ie,".child"),ie.forEach(e),bt=r(d," comes in front of "),q=n(d,"CODE",{class:!0});var ce=a(q);Ot=r(ce,".parent"),ce.forEach(e),Ct=r(d,"."),d.forEach(e),oe.forEach(e),St=y(i),F=n(i,"P",{});var pe=a(F);Z=n(pe,"STRONG",{});var he=a(Z);zt=r(he,"2. positioned element with negative z-index"),he.forEach(e),pe.forEach(e),At=y(i),j=n(i,"UL",{});var ke=a(j);g=n(ke,"LI",{});var ot=a(g);Dt=r(ot,"Higher values stacked in front of lower values, "),H=n(ot,"CODE",{class:!0});var de=a(H);Lt=r(de,"z-index: -1"),de.forEach(e),Tt=r(ot," in front of "),$=n(ot,"CODE",{class:!0});var ve=a($);It=r(ve,"z-index: -2"),ve.forEach(e),ot.forEach(e),ke.forEach(e),Nt=y(i),J=n(i,"P",{});var fe=a(J);G=n(fe,"STRONG",{});var Mt=a(G);qt=r(Mt,"3. positioned element with "),P=n(Mt,"CODE",{class:!0});var xe=a(P);Ht=r(xe,"z-index: auto"),xe.forEach(e),Mt.forEach(e),fe.forEach(e),$t=y(i),K=n(i,"P",{});var ye=a(K);M=n(ye,"STRONG",{});var ue=a(M);Gt=r(ue,"4. positioned element with positive z-index"),ue.forEach(e),ye.forEach(e),Pt=y(i),Q=n(i,"UL",{});var ge=a(Q);_=n(ge,"LI",{});var nt=a(_);Bt=r(nt,"Higher values stacked in front of lower values, "),B=n(nt,"CODE",{class:!0});var _e=a(B);Rt=r(_e,"z-index: 2"),_e.forEach(e),Ut=r(nt," in front of "),R=n(nt,"CODE",{class:!0});var me=a(R);Wt=r(me,"z-index: 1"),me.forEach(e),nt.forEach(e),ge.forEach(e),i.forEach(e),lt=y(k),m=n(k,"SECTION",{});var it=a(m);V=n(it,"H2",{});var we=a(V);b=n(we,"A",{href:!0,id:!0});var Ee=a(b);Yt=r(Ee,"Global Stacking Order with Stacking Context"),Ee.forEach(e),we.forEach(e),Ft=y(it),X=n(it,"P",{});var be=a(X);Zt=r(be,"All the elements within the same stacking context move forward / backward together along with the root element."),be.forEach(e),it.forEach(e),rt=y(k),w=n(k,"SECTION",{});var ct=a(w);tt=n(ct,"H2",{});var Oe=a(tt);O=n(Oe,"A",{href:!0,id:!0});var Ce=a(O);jt=r(Ce,"Links"),Ce.forEach(e),Oe.forEach(e),Jt=y(ct),et=n(ct,"UL",{});var Se=a(et);st=n(Se,"LI",{});var ze=a(st);C=n(ze,"A",{href:!0,rel:!0});var Ae=a(C);Kt=r(Ae,"What No One Told You About Z-Index"),Ae.forEach(e),ze.forEach(e),Se.forEach(e),ct.forEach(e),this.h()},h(){p(v,"href","#stacking-order-within-the-same-stacking-context"),p(v,"id","stacking-order-within-the-same-stacking-context"),p(A,"class","code-section"),p(D,"class","inline"),p(L,"class","inline"),p(T,"class","inline"),p(I,"class","inline"),p(N,"class","inline"),p(q,"class","inline"),p(H,"class","inline"),p($,"class","inline"),p(P,"class","inline"),p(B,"class","inline"),p(R,"class","inline"),p(b,"href","#global-stacking-order-with-stacking-context"),p(b,"id","global-stacking-order-with-stacking-context"),p(O,"href","#links"),p(O,"id","links"),p(C,"href","https://philipwalton.com/articles/what-no-one-told-you-about-z-index/"),p(C,"rel","nofollow")},m(k,i){at(k,s,i),t(s,u),t(u,v),t(v,E),t(s,c),t(s,f),t(f,z),t(s,pt),t(s,U),t(U,W),t(W,ht),t(s,kt),t(s,A),A.innerHTML=Ie,t(s,dt),t(s,Y),t(Y,h),t(h,vt),t(h,D),t(D,ft),t(h,xt),t(h,L),t(L,yt),t(h,ut),t(h,T),t(T,gt),t(h,_t),t(h,I),t(I,mt),t(h,wt),t(h,N),t(N,Et),t(h,bt),t(h,q),t(q,Ot),t(h,Ct),t(s,St),t(s,F),t(F,Z),t(Z,zt),t(s,At),t(s,j),t(j,g),t(g,Dt),t(g,H),t(H,Lt),t(g,Tt),t(g,$),t($,It),t(s,Nt),t(s,J),t(J,G),t(G,qt),t(G,P),t(P,Ht),t(s,$t),t(s,K),t(K,M),t(M,Gt),t(s,Pt),t(s,Q),t(Q,_),t(_,Bt),t(_,B),t(B,Rt),t(_,Ut),t(_,R),t(R,Wt),at(k,lt,i),at(k,m,i),t(m,V),t(V,b),t(b,Yt),t(m,Ft),t(m,X),t(X,Zt),at(k,rt,i),at(k,w,i),t(w,tt),t(tt,O),t(O,jt),t(w,Jt),t(w,et),t(et,st),t(st,C),t(C,Kt)},p:Ze,d(k){k&&e(s),k&&e(lt),k&&e(m),k&&e(rt),k&&e(w)}}}function Me(S){let s,u;const v=[S[0],Te];let E={$$slots:{default:[Ke]},$$scope:{ctx:S}};for(let c=0;c<v.length;c+=1)E=Qt(E,v[c]);return s=new je({props:E}),{c(){Ge(s.$$.fragment)},l(c){Pe(s.$$.fragment,c)},m(c,f){Be(s,c,f),u=!0},p(c,[f]){const z=f&1?Re(v,[f&1&&De(c[0]),f&0&&De(Te)]):{};f&2&&(z.$$scope={dirty:f,ctx:c}),s.$set(z)},i(c){u||(Ue(s.$$.fragment,c),u=!0)},o(c){We(s.$$.fragment,c),u=!1},d(c){Ye(s,c)}}}const Te={title:"What No One Told You About Z-Index",tags:["z-index","stacking-order"],description:"Stacking Order within the same Stacking ContextFrom back to front1. stacking context root elementAdding `transform: scale(1)` creates a new stacking context.\n`.child` initially stacks behind `.parent`, but as ...",tableOfContents:[{link:"stacking-order-within-the-same-stacking-context",title:"Stacking Order within the same Stacking Context"},{link:"global-stacking-order-with-stacking-context",title:"Global Stacking Order with Stacking Context"},{link:"links",title:"Links"}]};function Qe(S,s,u){return Fe("blog",{image:Je}),S.$$set=v=>{u(0,s=Qt(Qt({},s),Le(v)))},s=Le(s),[s]}class ns extends qe{constructor(s){super();He(this,s,Qe,Me,$e,{})}}export{ns as default,Te as metadata};