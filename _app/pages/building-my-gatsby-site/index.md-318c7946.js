import{S as Es,i as Is,s as Ts,C as ua,w as vs,x as ys,y as ks,z as As,A as is,q as fs,o as ms,B as gs,r as js,R as cs,k as h,e as s,t as o,m as d,c as r,a as l,h as a,d as t,b as n,Q as ps,g,F as e,O as Ps}from"../../chunks/vendor-ea160616.js";import{B as Os}from"../../chunks/BlogLayout-1be3dc1e.js";import{T as Cs}from"../../chunks/TableOfContent-c4f5cb6e.js";import{_ as Gs}from"../../chunks/twitter-card-image-a57df29d.js";import"../../chunks/stores-7d7fda0c.js";import"../../chunks/WebMentions-d768a574.js";/* empty css                                */var Ss="/_app/assets/inverted_emojis-4957b0b6.webp",hs="/_app/assets/inverted_emojis-d65cf6e1.png",Ds="/_app/assets/github-pages-e62f381e.webp",ds="/_app/assets/github-pages-c8603eb5.png";function $s(ce){let v,x,k,q,y,E,pe,B,ft,mt,he,gt,_t,Ge,wt,Je,P,bt,M,xt,Et,Ke,O,It,Se,Tt,At,Ye,C,De,N,jt,Pt,W,Ot,L,Ct,Gt,et,f,$e,H,St,Dt,U,$t,z,Rt,qt,Bt,Re,F,qe,Be,G,va,Mt,A,Nt,de,Wt,Lt,ue,Ht,Ut,zt,Q,Ft,V,Qt,Vt,Xt,I,Zt,ve,Jt,Kt,ye,Yt,eo,ke,to,oo,tt,c,Me,X,ao,so,S,Z,ro,lo,J,no,io,co,K,po,Y,ho,uo,vo,ee,yo,fe,ko,fo,mo,me,_s=`<div class="filename">theme-mode.css</div><pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">div#___gatsby</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)">:after &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  content</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  position</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> fixed;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  top</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">0</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  bottom</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">0</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  left</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">0</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  right</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">0</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  pointer</span><span style="color: var(--shiki-token-keyword)">-</span><span style="color: var(--shiki-color-text)">events</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> none;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  background</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> white;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  mix</span><span style="color: var(--shiki-token-keyword)">-</span><span style="color: var(--shiki-color-text)">blend</span><span style="color: var(--shiki-token-keyword)">-</span><span style="color: var(--shiki-color-text)">mode</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> difference;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&#125;</span></span></code></pre>`,go,Ne,_o,wo,We,te,Le,He,D,ya,bo,m,xo,ge,Eo,Io,_e,To,Ao,oe,jo,Po,we,Oo,Co,be,Go,So,Do,Ue,$o,Ro,$,ae,qo,Bo,se,Mo,No,Wo,xe,ws=`<div class="filename">remark-emoji.js</div><pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">visit</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">require</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;unist-util-visit&#39;</span><span style="color: var(--shiki-color-text)">);</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">emojiRegex</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">require</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;emoji-regex&#39;</span><span style="color: var(--shiki-color-text)">);</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-token-constant)">module</span><span style="color: var(--shiki-color-text)">.</span><span style="color: var(--shiki-token-constant)">exports</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">function</span><span style="color: var(--shiki-color-text)">(&#123; markdownAST &#125;) &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-function)">visit</span><span style="color: var(--shiki-color-text)">(markdownAST</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;text&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> node </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-constant)">node</span><span style="color: var(--shiki-color-text)">.type </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;html&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-constant)">node</span><span style="color: var(--shiki-color-text)">.value </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">node</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">value</span><span style="color: var(--shiki-token-function)">.replace</span><span style="color: var(--shiki-color-text)">(</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-function)">emojiRegex</span><span style="color: var(--shiki-color-text)">()</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      val </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#96;&lt;span class=&quot;emoji&quot;&gt;</span><span style="color: var(--shiki-token-keyword)">$&#123;</span><span style="color: var(--shiki-color-text)">val</span><span style="color: var(--shiki-token-keyword)">&#125;</span><span style="color: var(--shiki-token-string-expression)">&lt;/span&gt;&#96;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    );</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &#125;);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&#125;;</span></span></code></pre>`,Lo,ze,Ee,Ho,ot,Uo,Fe,zo,Fo,Qe,Qo,Vo,re,Xo,Ie,Zo,Jo,at,T,Ve,le,Ko,Yo,_,ea,Te,ta,oa,Ae,aa,sa,je,ra,la,ne,na,ia,ie,ca,Pe,pa,ha,st;return v=new Cs({props:{data:[{link:"the-boilerplate",title:"The boilerplate"},{link:"the-deployment",title:"The deployment"},{link:"the-light-dark-mode",title:"The light & dark mode"},{link:"the-restructure",title:"The Restructure"}]}}),{c(){vs(v.$$.fragment),x=h(),k=s("p"),q=o("After reading Dan's "),y=s("a"),E=o("Overreacted"),pe=o(" & Wei's "),B=s("a"),ft=o("A Work in Progress"),mt=o(" a while ago, I decided to have my "),he=s("a"),gt=o("own blog"),_t=o(" as well! "),Ge=s("em"),wt=o("(In case you still don't know, it's the very one you are reading right now!)"),Je=h(),P=s("p"),bt=o("I took it as an opportunity to learn "),M=s("a"),xt=o("Gatsby"),Et=o(", I've heard about it for a while, so I guess it's to know how it works."),Ke=h(),O=s("p"),It=o("This article is "),Se=s("strong"),Tt=o("NOT about how to build a Gatsby site"),At=o(", there a lot resources about that you can go for. But I am here to share some of my customisations that I've added to my Gatsby site, and hopefully you would share yours too."),Ye=h(),C=s("section"),De=s("h2"),N=s("a"),jt=o("The boilerplate"),Pt=h(),W=s("p"),Ot=o("I used the exact same Gatsby starter pack as Dan's "),L=s("a"),Ct=o("Overreacted"),Gt=o(", because why not \xAF_(\u30C4)_/\xAF. It looks sleek and simple and I like it."),et=h(),f=s("section"),$e=s("h2"),H=s("a"),St=o("The deployment"),Dt=h(),U=s("p"),$t=o("I use "),z=s("a"),Rt=o("Github Pages"),qt=o(" to host this blog."),Bt=h(),Re=s("p"),F=s("picture"),qe=s("source"),Be=s("source"),G=s("img"),Mt=h(),A=s("p"),Nt=o("According to the settings, I am required to use "),de=s("code"),Wt=o("master"),Lt=o(" branch to serve the content, that's why I am writing and developing in "),ue=s("code"),Ht=o("dev"),Ut=o(" branch instead."),zt=h(),Q=s("p"),Ft=o("To deploy, I added a "),V=s("a"),Qt=o("publish.js"),Vt=o(" script. The script will clone the repo in a temporary folder, copy all the built files into the folder, make a commit and push it to the master branch."),Xt=h(),I=s("p"),Zt=o("Lastly, I added the script to the "),ve=s("code"),Jt=o("pre-push"),Kt=o(" git hook, so that every time when I am pushing changes to the "),ye=s("code"),Yt=o("dev"),eo=o(' branch, it will also build and "deploy" changes to the '),ke=s("code"),to=o("master"),oo=o(" branch."),tt=h(),c=s("section"),Me=s("h2"),X=s("a"),ao=o("The light & dark mode"),so=h(),S=s("p"),Z=s("a"),ro=o("Wei"),lo=o(" did a sharing on how mix blend mode works and how she "),J=s("a"),no=o("added night mode using mix-blend-mode"),io=o(" on her site."),co=h(),K=s("p"),po=o("So I decided to add my own "),Y=s("a"),ho=o("Dark Mode Switch"),uo=o(" as well."),vo=h(),ee=s("p"),yo=o("The Dark Mode Switch was relatively easy. I added a pseudo-element "),fe=s("code"),ko=o("div#___gatsby::after"),fo=o(" to cover over my entire Gatsby blog, so I don't have to create another div element."),mo=h(),me=s("div"),go=h(),Ne=s("p"),_o=o("It's easy and it looks great, except, all my images and emojis are inverted. \u{1F622}"),wo=h(),We=s("p"),te=s("picture"),Le=s("source"),He=s("source"),D=s("img"),bo=h(),m=s("p"),xo=o("I need to wrap all my emojis around a "),ge=s("code"),Eo=o("<span>"),Io=o(" so I can apply some css like "),_e=s("code"),To=o("isolation: isolate"),Ao=o(" to exclude them from being blended. "),oe=s("a"),jo=o("Inspiration credits to huijing \u{1F44F}\u{1F44F}"),Po=o(". But I am lazy to wrap all my emojis with "),we=s("code"),Oo=o("<span>"),Co=o(", I want to use them anytime I want, without bothering much of the "),be=s("code"),Go=o("<span>"),So=o(", so I decided to write a gatsby remark plugin to do that for me. \u{1F60E}"),Do=h(),Ue=s("p"),$o=o("Well, it turns out it's not that hard."),Ro=h(),$=s("p"),ae=s("a"),qo=o("Remark"),Bo=o(" provides a friendly api to tap into the AST and "),se=s("a"),Mo=o("does transformation"),No=o("."),Wo=h(),xe=s("div"),Lo=h(),ze=s("p"),Ee=s("em"),Ho=o("using emoji-regex find emojis and wrap them with a "),ot=s("span"),Uo=h(),Fe=s("p"),zo=o("...and it works!"),Fo=h(),Qe=s("p"),Qo=o("Although somewhere when I started writing the gatsby plugin, a weird error popped up, and after some digging, I noticed that"),Vo=h(),re=s("p"),Xo=o("I had to include "),Ie=s("code"),Zo=o("package.json"),Jo=o(" into the plugin folder, or else it will yell at me."),at=h(),T=s("section"),Ve=s("h2"),le=s("a"),Ko=o("The Restructure"),Yo=h(),_=s("p"),ea=o("A while ago, I decided to add more categories to my blog, ie, "),Te=s("a"),ta=o("my blogs"),oa=o(", "),Ae=s("a"),aa=o("my talks"),sa=o(" and "),je=s("a"),ra=o("my notes"),la=o(". So I created different folders for them and "),ne=s("a"),na=o("rewrote the GraphQL query"),ia=h(),ie=s("p"),ca=o("The Graphql Editor in "),Pe=s("code"),pa=o("http://localhost:8000/___graphql"),ha=o(" is really helpful for me to understand how Gatsby and Gatsby plugins are creating all the objects."),this.h()},l(i){ys(v.$$.fragment,i),x=d(i),k=r(i,"P",{});var u=l(k);q=a(u,"After reading Dan's "),y=r(u,"A",{href:!0,rel:!0});var ka=l(y);E=a(ka,"Overreacted"),ka.forEach(t),pe=a(u," & Wei's "),B=r(u,"A",{href:!0,rel:!0});var fa=l(B);ft=a(fa,"A Work in Progress"),fa.forEach(t),mt=a(u," a while ago, I decided to have my "),he=r(u,"A",{href:!0});var ma=l(he);gt=a(ma,"own blog"),ma.forEach(t),_t=a(u," as well! "),Ge=r(u,"EM",{});var ga=l(Ge);wt=a(ga,"(In case you still don't know, it's the very one you are reading right now!)"),ga.forEach(t),u.forEach(t),Je=d(i),P=r(i,"P",{});var rt=l(P);bt=a(rt,"I took it as an opportunity to learn "),M=r(rt,"A",{href:!0,rel:!0});var _a=l(M);xt=a(_a,"Gatsby"),_a.forEach(t),Et=a(rt,", I've heard about it for a while, so I guess it's to know how it works."),rt.forEach(t),Ke=d(i),O=r(i,"P",{});var lt=l(O);It=a(lt,"This article is "),Se=r(lt,"STRONG",{});var wa=l(Se);Tt=a(wa,"NOT about how to build a Gatsby site"),wa.forEach(t),At=a(lt,", there a lot resources about that you can go for. But I am here to share some of my customisations that I've added to my Gatsby site, and hopefully you would share yours too."),lt.forEach(t),Ye=d(i),C=r(i,"SECTION",{});var nt=l(C);De=r(nt,"H2",{});var ba=l(De);N=r(ba,"A",{href:!0,id:!0});var xa=l(N);jt=a(xa,"The boilerplate"),xa.forEach(t),ba.forEach(t),Pt=d(nt),W=r(nt,"P",{});var it=l(W);Ot=a(it,"I used the exact same Gatsby starter pack as Dan's "),L=r(it,"A",{href:!0,rel:!0});var Ea=l(L);Ct=a(Ea,"Overreacted"),Ea.forEach(t),Gt=a(it,", because why not \xAF_(\u30C4)_/\xAF. It looks sleek and simple and I like it."),it.forEach(t),nt.forEach(t),et=d(i),f=r(i,"SECTION",{});var w=l(f);$e=r(w,"H2",{});var Ia=l($e);H=r(Ia,"A",{href:!0,id:!0});var Ta=l(H);St=a(Ta,"The deployment"),Ta.forEach(t),Ia.forEach(t),Dt=d(w),U=r(w,"P",{});var ct=l(U);$t=a(ct,"I use "),z=r(ct,"A",{href:!0,rel:!0});var Aa=l(z);Rt=a(Aa,"Github Pages"),Aa.forEach(t),qt=a(ct," to host this blog."),ct.forEach(t),Bt=d(w),Re=r(w,"P",{});var ja=l(Re);F=r(ja,"PICTURE",{});var pt=l(F);qe=r(pt,"SOURCE",{type:!0,srcset:!0}),Be=r(pt,"SOURCE",{type:!0,srcset:!0}),G=r(pt,"IMG",{src:!0,loading:!0,alt:!0,title:!0}),pt.forEach(t),ja.forEach(t),Mt=d(w),A=r(w,"P",{});var Oe=l(A);Nt=a(Oe,"According to the settings, I am required to use "),de=r(Oe,"CODE",{class:!0});var Pa=l(de);Wt=a(Pa,"master"),Pa.forEach(t),Lt=a(Oe," branch to serve the content, that's why I am writing and developing in "),ue=r(Oe,"CODE",{class:!0});var Oa=l(ue);Ht=a(Oa,"dev"),Oa.forEach(t),Ut=a(Oe," branch instead."),Oe.forEach(t),zt=d(w),Q=r(w,"P",{});var ht=l(Q);Ft=a(ht,"To deploy, I added a "),V=r(ht,"A",{href:!0,rel:!0});var Ca=l(V);Qt=a(Ca,"publish.js"),Ca.forEach(t),Vt=a(ht," script. The script will clone the repo in a temporary folder, copy all the built files into the folder, make a commit and push it to the master branch."),ht.forEach(t),Xt=d(w),I=r(w,"P",{});var R=l(I);Zt=a(R,"Lastly, I added the script to the "),ve=r(R,"CODE",{class:!0});var Ga=l(ve);Jt=a(Ga,"pre-push"),Ga.forEach(t),Kt=a(R," git hook, so that every time when I am pushing changes to the "),ye=r(R,"CODE",{class:!0});var Sa=l(ye);Yt=a(Sa,"dev"),Sa.forEach(t),eo=a(R,' branch, it will also build and "deploy" changes to the '),ke=r(R,"CODE",{class:!0});var Da=l(ke);to=a(Da,"master"),Da.forEach(t),oo=a(R," branch."),R.forEach(t),w.forEach(t),tt=d(i),c=r(i,"SECTION",{});var p=l(c);Me=r(p,"H2",{});var $a=l(Me);X=r($a,"A",{href:!0,id:!0});var Ra=l(X);ao=a(Ra,"The light & dark mode"),Ra.forEach(t),$a.forEach(t),so=d(p),S=r(p,"P",{});var Xe=l(S);Z=r(Xe,"A",{href:!0,rel:!0});var qa=l(Z);ro=a(qa,"Wei"),qa.forEach(t),lo=a(Xe," did a sharing on how mix blend mode works and how she "),J=r(Xe,"A",{href:!0,rel:!0});var Ba=l(J);no=a(Ba,"added night mode using mix-blend-mode"),Ba.forEach(t),io=a(Xe," on her site."),Xe.forEach(t),co=d(p),K=r(p,"P",{});var dt=l(K);po=a(dt,"So I decided to add my own "),Y=r(dt,"A",{href:!0,rel:!0});var Ma=l(Y);ho=a(Ma,"Dark Mode Switch"),Ma.forEach(t),uo=a(dt," as well."),dt.forEach(t),vo=d(p),ee=r(p,"P",{});var ut=l(ee);yo=a(ut,"The Dark Mode Switch was relatively easy. I added a pseudo-element "),fe=r(ut,"CODE",{class:!0});var Na=l(fe);ko=a(Na,"div#___gatsby::after"),Na.forEach(t),fo=a(ut," to cover over my entire Gatsby blog, so I don't have to create another div element."),ut.forEach(t),mo=d(p),me=r(p,"DIV",{class:!0});var bs=l(me);bs.forEach(t),go=d(p),Ne=r(p,"P",{});var Wa=l(Ne);_o=a(Wa,"It's easy and it looks great, except, all my images and emojis are inverted. \u{1F622}"),Wa.forEach(t),wo=d(p),We=r(p,"P",{});var La=l(We);te=r(La,"PICTURE",{});var vt=l(te);Le=r(vt,"SOURCE",{type:!0,srcset:!0}),He=r(vt,"SOURCE",{type:!0,srcset:!0}),D=r(vt,"IMG",{src:!0,loading:!0,alt:!0,title:!0}),vt.forEach(t),La.forEach(t),bo=d(p),m=r(p,"P",{});var b=l(m);xo=a(b,"I need to wrap all my emojis around a "),ge=r(b,"CODE",{class:!0});var Ha=l(ge);Eo=a(Ha,"<span>"),Ha.forEach(t),Io=a(b," so I can apply some css like "),_e=r(b,"CODE",{class:!0});var Ua=l(_e);To=a(Ua,"isolation: isolate"),Ua.forEach(t),Ao=a(b," to exclude them from being blended. "),oe=r(b,"A",{href:!0,rel:!0});var za=l(oe);jo=a(za,"Inspiration credits to huijing \u{1F44F}\u{1F44F}"),za.forEach(t),Po=a(b,". But I am lazy to wrap all my emojis with "),we=r(b,"CODE",{class:!0});var Fa=l(we);Oo=a(Fa,"<span>"),Fa.forEach(t),Co=a(b,", I want to use them anytime I want, without bothering much of the "),be=r(b,"CODE",{class:!0});var Qa=l(be);Go=a(Qa,"<span>"),Qa.forEach(t),So=a(b,", so I decided to write a gatsby remark plugin to do that for me. \u{1F60E}"),b.forEach(t),Do=d(p),Ue=r(p,"P",{});var Va=l(Ue);$o=a(Va,"Well, it turns out it's not that hard."),Va.forEach(t),Ro=d(p),$=r(p,"P",{});var Ze=l($);ae=r(Ze,"A",{href:!0,rel:!0});var Xa=l(ae);qo=a(Xa,"Remark"),Xa.forEach(t),Bo=a(Ze," provides a friendly api to tap into the AST and "),se=r(Ze,"A",{href:!0,rel:!0});var Za=l(se);Mo=a(Za,"does transformation"),Za.forEach(t),No=a(Ze,"."),Ze.forEach(t),Wo=d(p),xe=r(p,"DIV",{class:!0});var xs=l(xe);xs.forEach(t),Lo=d(p),ze=r(p,"P",{});var Ja=l(ze);Ee=r(Ja,"EM",{});var da=l(Ee);Ho=a(da,"using emoji-regex find emojis and wrap them with a "),ot=r(da,"SPAN",{}),l(ot).forEach(t),da.forEach(t),Ja.forEach(t),Uo=d(p),Fe=r(p,"P",{});var Ka=l(Fe);zo=a(Ka,"...and it works!"),Ka.forEach(t),Fo=d(p),Qe=r(p,"P",{});var Ya=l(Qe);Qo=a(Ya,"Although somewhere when I started writing the gatsby plugin, a weird error popped up, and after some digging, I noticed that"),Ya.forEach(t),Vo=d(p),re=r(p,"P",{});var yt=l(re);Xo=a(yt,"I had to include "),Ie=r(yt,"CODE",{class:!0});var es=l(Ie);Zo=a(es,"package.json"),es.forEach(t),Jo=a(yt," into the plugin folder, or else it will yell at me."),yt.forEach(t),p.forEach(t),at=d(i),T=r(i,"SECTION",{});var Ce=l(T);Ve=r(Ce,"H2",{});var ts=l(Ve);le=r(ts,"A",{href:!0,id:!0});var os=l(le);Ko=a(os,"The Restructure"),os.forEach(t),ts.forEach(t),Yo=d(Ce),_=r(Ce,"P",{});var j=l(_);ea=a(j,"A while ago, I decided to add more categories to my blog, ie, "),Te=r(j,"A",{href:!0});var as=l(Te);ta=a(as,"my blogs"),as.forEach(t),oa=a(j,", "),Ae=r(j,"A",{href:!0});var ss=l(Ae);aa=a(ss,"my talks"),ss.forEach(t),sa=a(j," and "),je=r(j,"A",{href:!0});var rs=l(je);ra=a(rs,"my notes"),rs.forEach(t),la=a(j,". So I created different folders for them and "),ne=r(j,"A",{href:!0,rel:!0});var ls=l(ne);na=a(ls,"rewrote the GraphQL query"),ls.forEach(t),j.forEach(t),ia=d(Ce),ie=r(Ce,"P",{});var kt=l(ie);ca=a(kt,"The Graphql Editor in "),Pe=r(kt,"CODE",{class:!0});var ns=l(Pe);pa=a(ns,"http://localhost:8000/___graphql"),ns.forEach(t),ha=a(kt," is really helpful for me to understand how Gatsby and Gatsby plugins are creating all the objects."),kt.forEach(t),Ce.forEach(t),this.h()},h(){n(y,"href","https://overreacted.io"),n(y,"rel","nofollow"),n(B,"href","https://dev.wgao19.cc/"),n(B,"rel","nofollow"),n(he,"href","/blogs/"),n(M,"href","https://www.gatsbyjs.org/"),n(M,"rel","nofollow"),n(N,"href","#the-boilerplate"),n(N,"id","the-boilerplate"),n(L,"href","https://overreacted.io"),n(L,"rel","nofollow"),n(H,"href","#the-deployment"),n(H,"id","the-deployment"),n(z,"href","https://pages.github.com/"),n(z,"rel","nofollow"),n(qe,"type","image/webp"),n(qe,"srcset",Ds),n(Be,"type","image/png"),n(Be,"srcset",ds),ps(G.src,va=ds)||n(G,"src",va),n(G,"loading","lazy"),n(G,"alt","github pages settings"),n(G,"title","Github Pages Settings"),n(de,"class","inline"),n(ue,"class","inline"),n(V,"href","https://github.com/tanhauhau/tanhauhau.github.io/blob/dev/scripts/publish.js"),n(V,"rel","nofollow"),n(ve,"class","inline"),n(ye,"class","inline"),n(ke,"class","inline"),n(X,"href","#the-light-dark-mode"),n(X,"id","the-light-dark-mode"),n(Z,"href","https://twitter.com/wgao19"),n(Z,"rel","nofollow"),n(J,"href","https://dev.wgao19.cc/2019-05-04__sun-moon-blending-mode/"),n(J,"rel","nofollow"),n(Y,"href","https://github.com/tanhauhau/tanhauhau.github.io/commit/291663d10cc7838d67392acb6a28a04a655603a6#diff-4e34e842430a5e2977417f28e477e14d"),n(Y,"rel","nofollow"),n(fe,"class","inline"),n(me,"class","code-section"),n(Le,"type","image/webp"),n(Le,"srcset",Ss),n(He,"type","image/png"),n(He,"srcset",hs),ps(D.src,ya=hs)||n(D,"src",ya),n(D,"loading","lazy"),n(D,"alt","inverted emojis"),n(D,"title","It looked like emojis going through X-Rays.. \u{1F622}"),n(ge,"class","inline"),n(_e,"class","inline"),n(oe,"href","https://www.chenhuijing.com/blog/friends-dont-let-friends-implement-dark-mode-alone/#%F0%9F%92%BB"),n(oe,"rel","nofollow"),n(we,"class","inline"),n(be,"class","inline"),n(ae,"href","https://github.com/remarkjs/remark"),n(ae,"rel","nofollow"),n(se,"href","https://github.com/tanhauhau/tanhauhau.github.io/commit/291663d10cc7838d67392acb6a28a04a655603a6#diff-1be49bbded0fd920136646bdb37f5b91"),n(se,"rel","nofollow"),n(xe,"class","code-section"),n(Ie,"class","inline"),n(le,"href","#the-restructure"),n(le,"id","the-restructure"),n(Te,"href","/blogs/"),n(Ae,"href","/talks/"),n(je,"href","/notes"),n(ne,"href","https://github.com/tanhauhau/tanhauhau.github.io/commit/50c82259749f7608d1c81062eac1f357b9437485"),n(ne,"rel","nofollow"),n(Pe,"class","inline")},m(i,u){ks(v,i,u),g(i,x,u),g(i,k,u),e(k,q),e(k,y),e(y,E),e(k,pe),e(k,B),e(B,ft),e(k,mt),e(k,he),e(he,gt),e(k,_t),e(k,Ge),e(Ge,wt),g(i,Je,u),g(i,P,u),e(P,bt),e(P,M),e(M,xt),e(P,Et),g(i,Ke,u),g(i,O,u),e(O,It),e(O,Se),e(Se,Tt),e(O,At),g(i,Ye,u),g(i,C,u),e(C,De),e(De,N),e(N,jt),e(C,Pt),e(C,W),e(W,Ot),e(W,L),e(L,Ct),e(W,Gt),g(i,et,u),g(i,f,u),e(f,$e),e($e,H),e(H,St),e(f,Dt),e(f,U),e(U,$t),e(U,z),e(z,Rt),e(U,qt),e(f,Bt),e(f,Re),e(Re,F),e(F,qe),e(F,Be),e(F,G),e(f,Mt),e(f,A),e(A,Nt),e(A,de),e(de,Wt),e(A,Lt),e(A,ue),e(ue,Ht),e(A,Ut),e(f,zt),e(f,Q),e(Q,Ft),e(Q,V),e(V,Qt),e(Q,Vt),e(f,Xt),e(f,I),e(I,Zt),e(I,ve),e(ve,Jt),e(I,Kt),e(I,ye),e(ye,Yt),e(I,eo),e(I,ke),e(ke,to),e(I,oo),g(i,tt,u),g(i,c,u),e(c,Me),e(Me,X),e(X,ao),e(c,so),e(c,S),e(S,Z),e(Z,ro),e(S,lo),e(S,J),e(J,no),e(S,io),e(c,co),e(c,K),e(K,po),e(K,Y),e(Y,ho),e(K,uo),e(c,vo),e(c,ee),e(ee,yo),e(ee,fe),e(fe,ko),e(ee,fo),e(c,mo),e(c,me),me.innerHTML=_s,e(c,go),e(c,Ne),e(Ne,_o),e(c,wo),e(c,We),e(We,te),e(te,Le),e(te,He),e(te,D),e(c,bo),e(c,m),e(m,xo),e(m,ge),e(ge,Eo),e(m,Io),e(m,_e),e(_e,To),e(m,Ao),e(m,oe),e(oe,jo),e(m,Po),e(m,we),e(we,Oo),e(m,Co),e(m,be),e(be,Go),e(m,So),e(c,Do),e(c,Ue),e(Ue,$o),e(c,Ro),e(c,$),e($,ae),e(ae,qo),e($,Bo),e($,se),e(se,Mo),e($,No),e(c,Wo),e(c,xe),xe.innerHTML=ws,e(c,Lo),e(c,ze),e(ze,Ee),e(Ee,Ho),e(Ee,ot),e(c,Uo),e(c,Fe),e(Fe,zo),e(c,Fo),e(c,Qe),e(Qe,Qo),e(c,Vo),e(c,re),e(re,Xo),e(re,Ie),e(Ie,Zo),e(re,Jo),g(i,at,u),g(i,T,u),e(T,Ve),e(Ve,le),e(le,Ko),e(T,Yo),e(T,_),e(_,ea),e(_,Te),e(Te,ta),e(_,oa),e(_,Ae),e(Ae,aa),e(_,sa),e(_,je),e(je,ra),e(_,la),e(_,ne),e(ne,na),e(T,ia),e(T,ie),e(ie,ca),e(ie,Pe),e(Pe,pa),e(ie,ha),st=!0},p:Ps,i(i){st||(fs(v.$$.fragment,i),st=!0)},o(i){ms(v.$$.fragment,i),st=!1},d(i){gs(v,i),i&&t(x),i&&t(k),i&&t(Je),i&&t(P),i&&t(Ke),i&&t(O),i&&t(Ye),i&&t(C),i&&t(et),i&&t(f),i&&t(tt),i&&t(c),i&&t(at),i&&t(T)}}}function Rs(ce){let v,x;const k=[ce[0],us];let q={$$slots:{default:[$s]},$$scope:{ctx:ce}};for(let y=0;y<k.length;y+=1)q=ua(q,k[y]);return v=new Os({props:q}),{c(){vs(v.$$.fragment)},l(y){ys(v.$$.fragment,y)},m(y,E){ks(v,y,E),x=!0},p(y,[E]){const pe=E&1?As(k,[E&1&&is(y[0]),E&0&&is(us)]):{};E&2&&(pe.$$scope={dirty:E,ctx:y}),v.$set(pe)},i(y){x||(fs(v.$$.fragment,y),x=!0)},o(y){ms(v.$$.fragment,y),x=!1},d(y){gs(v,y)}}}const us={title:"Building my Gatsby site",date:"2019-07-02T08:00:00Z",description:"A work in progress",wip:!0,label:"blog"};function qs(ce,v,x){return js("blog",{image:Gs}),ce.$$set=k=>{x(0,v=ua(ua({},v),cs(k)))},v=cs(v),[v]}class zs extends Es{constructor(v){super();Is(this,v,qs,Rs,Ts,{})}}export{zs as default,us as metadata};
