import{S as os,i as ns,s as rs,C as Oe,w as is,x as cs,y as ps,z as ds,A as es,q as us,o as hs,B as fs,r as ms,Y as ss,e as a,t as n,k as _,c as l,a as o,h as r,d as s,m as k,b as g,g as w,H as e,J as vs}from"../../chunks/vendor-da4388d4.js";import{B as ys}from"../../chunks/BlogLayout-86707f1c.js";import{_ as _s}from"../../chunks/twitter-card-image-a57df29d.js";import"../../chunks/stores-1fad7c36.js";import"../../chunks/ldjson-b0805387.js";/* empty css                                */function ks($){let i,d,E,x,c,f,p,H,ee,se,z,te,ae,J,le,oe,M,ne,re,T,ie,K,S,ce,N,D,m,pe,U,de,ue,B,he,fe,O,me,ve,R,q,as=`<pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-comment)">// gatsby-node.js</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">createPage</span><span style="color: var(--shiki-color-text)">(&#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    context</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        slug</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;123&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        foo</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;bar&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &#125;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&#125;)</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-token-comment)">// template/blog-post.js</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">pageQuery</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">graphql</span><span style="color: var(--shiki-token-string-expression)">&#96;</span></span>
<span class="line"><span style="color: var(--shiki-token-string-expression)">  query BlogPostBySlug($slug: String!, $foo: String!) &#123;</span></span>
<span class="line"><span style="color: var(--shiki-token-string-expression)">  &#125;</span></span>
<span class="line"><span style="color: var(--shiki-token-string-expression)">&#96;</span></span></code></pre>`,W,b,V,u,ye,P,_e,ke,j,ge,Ee,A,xe,we,Q,be,Le,qe,C,G,Ce,I,Ie,$e,Y,F,Se;return{c(){i=a("ul"),d=a("li"),E=n("write an article for what i've customised for my gatsby site"),x=a("ul"),c=a("li"),f=n("content in my head at the moment"),p=a("ul"),H=a("li"),ee=n("dark mode"),se=_(),z=a("li"),te=n("plugin-emoji"),ae=_(),J=a("li"),le=n("reorg on the article types"),oe=_(),M=a("li"),ne=n("plugin-caption (wip)"),re=_(),T=a("li"),ie=n("rss feed"),K=_(),S=a("p"),ce=n("[Added 14 Sept 2019]"),N=_(),D=a("ul"),m=a("li"),pe=n("parameters that's available from "),U=a("code"),de=n("pageQuery"),ue=n(", comes from "),B=a("code"),he=n("context"),fe=n(" when "),O=a("code"),me=n("createPage({})"),ve=n(`.
eg:`),R=_(),q=a("div"),W=_(),b=a("ul"),V=a("li"),u=a("p"),ye=n("if you are creating "),P=a("code"),_e=n("slug"),ke=n(" from page url, and it contains "),j=a("code"),ge=n("<space>"),Ee=n(` characters, you might need to do
`),A=a("code"),xe=n("slug.replace(/\\s+/g, '-')"),we=n(" as browser will "),Q=a("code"),be=n("encodeUriComponent"),Le=n(" of your path, and the slug may not match."),qe=_(),C=a("li"),G=a("p"),Ce=n("graphql aliases "),I=a("a"),Ie=n("https://graphql.org/learn/queries/#aliases"),$e=_(),Y=a("ul"),F=a("li"),Se=n("allows you to rename the result field"),this.h()},l(t){i=l(t,"UL",{});var h=o(i);d=l(h,"LI",{});var De=o(d);E=r(De,"write an article for what i've customised for my gatsby site"),x=l(De,"UL",{});var Pe=o(x);c=l(Pe,"LI",{});var Ue=o(c);f=r(Ue,"content in my head at the moment"),p=l(Ue,"UL",{});var v=o(p);H=l(v,"LI",{});var je=o(H);ee=r(je,"dark mode"),je.forEach(s),se=k(v),z=l(v,"LI",{});var Ae=o(z);te=r(Ae,"plugin-emoji"),Ae.forEach(s),ae=k(v),J=l(v,"LI",{});var Qe=o(J);le=r(Qe,"reorg on the article types"),Qe.forEach(s),oe=k(v),M=l(v,"LI",{});var Ge=o(M);ne=r(Ge,"plugin-caption (wip)"),Ge.forEach(s),re=k(v),T=l(v,"LI",{});var He=o(T);ie=r(He,"rss feed"),He.forEach(s),v.forEach(s),Ue.forEach(s),Pe.forEach(s),De.forEach(s),h.forEach(s),K=k(t),S=l(t,"P",{});var ze=o(S);ce=r(ze,"[Added 14 Sept 2019]"),ze.forEach(s),N=k(t),D=l(t,"UL",{});var Je=o(D);m=l(Je,"LI",{});var L=o(m);pe=r(L,"parameters that's available from "),U=l(L,"CODE",{class:!0});var Me=o(U);de=r(Me,"pageQuery"),Me.forEach(s),ue=r(L,", comes from "),B=l(L,"CODE",{class:!0});var Te=o(B);he=r(Te,"context"),Te.forEach(s),fe=r(L," when "),O=l(L,"CODE",{class:!0});var Ve=o(O);me=r(Ve,"createPage({})"),Ve.forEach(s),ve=r(L,`.
eg:`),L.forEach(s),Je.forEach(s),R=k(t),q=l(t,"DIV",{class:!0});var ls=o(q);ls.forEach(s),W=k(t),b=l(t,"UL",{});var X=o(b);V=l(X,"LI",{});var Ye=o(V);u=l(Ye,"P",{});var y=o(u);ye=r(y,"if you are creating "),P=l(y,"CODE",{class:!0});var Fe=o(P);_e=r(Fe,"slug"),Fe.forEach(s),ke=r(y," from page url, and it contains "),j=l(y,"CODE",{class:!0});var Ke=o(j);ge=r(Ke,"<space>"),Ke.forEach(s),Ee=r(y,` characters, you might need to do
`),A=l(y,"CODE",{class:!0});var Ne=o(A);xe=r(Ne,"slug.replace(/\\s+/g, '-')"),Ne.forEach(s),we=r(y," as browser will "),Q=l(y,"CODE",{class:!0});var Re=o(Q);be=r(Re,"encodeUriComponent"),Re.forEach(s),Le=r(y," of your path, and the slug may not match."),y.forEach(s),Ye.forEach(s),qe=k(X),C=l(X,"LI",{});var Z=o(C);G=l(Z,"P",{});var Be=o(G);Ce=r(Be,"graphql aliases "),I=l(Be,"A",{href:!0,rel:!0});var We=o(I);Ie=r(We,"https://graphql.org/learn/queries/#aliases"),We.forEach(s),Be.forEach(s),$e=k(Z),Y=l(Z,"UL",{});var Xe=o(Y);F=l(Xe,"LI",{});var Ze=o(F);Se=r(Ze,"allows you to rename the result field"),Ze.forEach(s),Xe.forEach(s),Z.forEach(s),X.forEach(s),this.h()},h(){g(U,"class","inline"),g(B,"class","inline"),g(O,"class","inline"),g(q,"class","code-section"),g(P,"class","inline"),g(j,"class","inline"),g(A,"class","inline"),g(Q,"class","inline"),g(I,"href","https://graphql.org/learn/queries/#aliases"),g(I,"rel","nofollow")},m(t,h){w(t,i,h),e(i,d),e(d,E),e(d,x),e(x,c),e(c,f),e(c,p),e(p,H),e(H,ee),e(p,se),e(p,z),e(z,te),e(p,ae),e(p,J),e(J,le),e(p,oe),e(p,M),e(M,ne),e(p,re),e(p,T),e(T,ie),w(t,K,h),w(t,S,h),e(S,ce),w(t,N,h),w(t,D,h),e(D,m),e(m,pe),e(m,U),e(U,de),e(m,ue),e(m,B),e(B,he),e(m,fe),e(m,O),e(O,me),e(m,ve),w(t,R,h),w(t,q,h),q.innerHTML=as,w(t,W,h),w(t,b,h),e(b,V),e(V,u),e(u,ye),e(u,P),e(P,_e),e(u,ke),e(u,j),e(j,ge),e(u,Ee),e(u,A),e(A,xe),e(u,we),e(u,Q),e(Q,be),e(u,Le),e(b,qe),e(b,C),e(C,G),e(G,Ce),e(G,I),e(I,Ie),e(C,$e),e(C,Y),e(Y,F),e(F,Se)},p:vs,d(t){t&&s(i),t&&s(K),t&&s(S),t&&s(N),t&&s(D),t&&s(R),t&&s(q),t&&s(W),t&&s(b)}}}function gs($){let i,d;const E=[$[0],ts];let x={$$slots:{default:[ks]},$$scope:{ctx:$}};for(let c=0;c<E.length;c+=1)x=Oe(x,E[c]);return i=new ys({props:x}),{c(){is(i.$$.fragment)},l(c){cs(i.$$.fragment,c)},m(c,f){ps(i,c,f),d=!0},p(c,[f]){const p=f&1?ds(E,[f&1&&es(c[0]),f&0&&es(ts)]):{};f&2&&(p.$$scope={dirty:f,ctx:c}),i.$set(p)},i(c){d||(us(i.$$.fragment,c),d=!0)},o(c){hs(i.$$.fragment,c),d=!1},d(c){fs(i,c)}}}const ts={title:"Building my Gatsby Site",tags:["Gatsby"],description:"write an article for what i've customised for my gatsby sitecontent in my head at the momentdark modeplugin-emojireorg on the article typesplugin-caption (wip)rss feedAdded 14 Sept 2019parameters that's available from ..."};function Es($,i,d){return ms("blog",{image:_s}),$.$$set=E=>{d(0,i=Oe(Oe({},i),ss(E)))},i=ss(i),[i]}class Is extends os{constructor(i){super();ns(this,i,Es,gs,rs,{})}}export{Is as default,ts as metadata};