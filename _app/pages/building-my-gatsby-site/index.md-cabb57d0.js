import{S as Es,i as Is,s as Ts,C as uo,w as vs,x as ys,y as ks,z as As,A as is,q as fs,o as ms,B as gs,r as js,R as cs,k as h,e as s,t as a,m as d,c as r,a as l,h as o,d as t,b as n,Q as ps,g,F as e,O as Ps}from"../../chunks/vendor-6bf294e3.js";import{B as Os}from"../../chunks/BlogLayout-152f599b.js";import{T as Cs}from"../../chunks/TableOfContent-1b9e4572.js";import{_ as Gs}from"../../chunks/twitter-card-image-a57df29d.js";import"../../chunks/stores-e20b7872.js";import"../../chunks/WebMentions-745413ea.js";/* empty css                                */var Ss="/_app/assets/inverted_emojis-4957b0b6.webp",hs="/_app/assets/inverted_emojis-a711de5a.png",Ds="/_app/assets/github-pages-e62f381e.webp",ds="/_app/assets/github-pages-c8603eb5.png";function $s(ce){let v,x,k,q,y,E,pe,B,ft,mt,he,gt,_t,Ge,wt,Je,P,bt,M,xt,Et,Ke,O,It,Se,Tt,At,Ye,C,De,N,jt,Pt,W,Ot,L,Ct,Gt,et,f,$e,H,St,Dt,U,$t,z,Rt,qt,Bt,Re,F,qe,Be,G,vo,Mt,A,Nt,de,Wt,Lt,ue,Ht,Ut,zt,Q,Ft,V,Qt,Vt,Xt,I,Zt,ve,Jt,Kt,ye,Yt,ea,ke,ta,aa,tt,c,Me,X,oa,sa,S,Z,ra,la,J,na,ia,ca,K,pa,Y,ha,da,ua,ee,va,fe,ya,ka,fa,me,_s=`<div class="filename">theme-mode.css</div><pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">div#___gatsby</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)">:after &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  content</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  position</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> fixed;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  top</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">0</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  bottom</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">0</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  left</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">0</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  right</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">0</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  pointer</span><span style="color: var(--shiki-token-keyword)">-</span><span style="color: var(--shiki-color-text)">events</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> none;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  background</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> white;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  mix</span><span style="color: var(--shiki-token-keyword)">-</span><span style="color: var(--shiki-color-text)">blend</span><span style="color: var(--shiki-token-keyword)">-</span><span style="color: var(--shiki-color-text)">mode</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> difference;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&#125;</span></span></code></pre>`,ma,Ne,ga,_a,We,te,Le,He,D,yo,wa,m,ba,ge,xa,Ea,_e,Ia,Ta,ae,Aa,ja,we,Pa,Oa,be,Ca,Ga,Sa,Ue,Da,$a,$,oe,Ra,qa,se,Ba,Ma,Na,xe,ws=`<div class="filename">remark-emoji.js</div><pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">visit</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">require</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;unist-util-visit&#39;</span><span style="color: var(--shiki-color-text)">);</span></span>
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
<span class="line"><span style="color: var(--shiki-color-text)">&#125;;</span></span></code></pre>`,Wa,ze,Ee,La,at,Ha,Fe,Ua,za,Qe,Fa,Qa,re,Va,Ie,Xa,Za,ot,T,Ve,le,Ja,Ka,_,Ya,Te,eo,to,Ae,ao,oo,je,so,ro,ne,lo,no,ie,io,Pe,co,po,st;return v=new Cs({props:{data:[{link:"the-boilerplate",title:"The boilerplate"},{link:"the-deployment",title:"The deployment"},{link:"the-light-dark-mode",title:"The light & dark mode"},{link:"the-restructure",title:"The Restructure"}]}}),{c(){vs(v.$$.fragment),x=h(),k=s("p"),q=a("After reading Dan's "),y=s("a"),E=a("Overreacted"),pe=a(" & Wei's "),B=s("a"),ft=a("A Work in Progress"),mt=a(" a while ago, I decided to have my "),he=s("a"),gt=a("own blog"),_t=a(" as well! "),Ge=s("em"),wt=a("(In case you still don't know, it's the very one you are reading right now!)"),Je=h(),P=s("p"),bt=a("I took it as an opportunity to learn "),M=s("a"),xt=a("Gatsby"),Et=a(", I've heard about it for a while, so I guess it's to know how it works."),Ke=h(),O=s("p"),It=a("This article is "),Se=s("strong"),Tt=a("NOT about how to build a Gatsby site"),At=a(", there a lot resources about that you can go for. But I am here to share some of my customisations that I've added to my Gatsby site, and hopefully you would share yours too."),Ye=h(),C=s("section"),De=s("h2"),N=s("a"),jt=a("The boilerplate"),Pt=h(),W=s("p"),Ot=a("I used the exact same Gatsby starter pack as Dan's "),L=s("a"),Ct=a("Overreacted"),Gt=a(", because why not \xAF_(\u30C4)_/\xAF. It looks sleek and simple and I like it."),et=h(),f=s("section"),$e=s("h2"),H=s("a"),St=a("The deployment"),Dt=h(),U=s("p"),$t=a("I use "),z=s("a"),Rt=a("Github Pages"),qt=a(" to host this blog."),Bt=h(),Re=s("p"),F=s("picture"),qe=s("source"),Be=s("source"),G=s("img"),Mt=h(),A=s("p"),Nt=a("According to the settings, I am required to use "),de=s("code"),Wt=a("master"),Lt=a(" branch to serve the content, that's why I am writing and developing in "),ue=s("code"),Ht=a("dev"),Ut=a(" branch instead."),zt=h(),Q=s("p"),Ft=a("To deploy, I added a "),V=s("a"),Qt=a("publish.js"),Vt=a(" script. The script will clone the repo in a temporary folder, copy all the built files into the folder, make a commit and push it to the master branch."),Xt=h(),I=s("p"),Zt=a("Lastly, I added the script to the "),ve=s("code"),Jt=a("pre-push"),Kt=a(" git hook, so that every time when I am pushing changes to the "),ye=s("code"),Yt=a("dev"),ea=a(' branch, it will also build and "deploy" changes to the '),ke=s("code"),ta=a("master"),aa=a(" branch."),tt=h(),c=s("section"),Me=s("h2"),X=s("a"),oa=a("The light & dark mode"),sa=h(),S=s("p"),Z=s("a"),ra=a("Wei"),la=a(" did a sharing on how mix blend mode works and how she "),J=s("a"),na=a("added night mode using mix-blend-mode"),ia=a(" on her site."),ca=h(),K=s("p"),pa=a("So I decided to add my own "),Y=s("a"),ha=a("Dark Mode Switch"),da=a(" as well."),ua=h(),ee=s("p"),va=a("The Dark Mode Switch was relatively easy. I added a pseudo-element "),fe=s("code"),ya=a("div#___gatsby::after"),ka=a(" to cover over my entire Gatsby blog, so I don't have to create another div element."),fa=h(),me=s("div"),ma=h(),Ne=s("p"),ga=a("It's easy and it looks great, except, all my images and emojis are inverted. \u{1F622}"),_a=h(),We=s("p"),te=s("picture"),Le=s("source"),He=s("source"),D=s("img"),wa=h(),m=s("p"),ba=a("I need to wrap all my emojis around a "),ge=s("code"),xa=a("<span>"),Ea=a(" so I can apply some css like "),_e=s("code"),Ia=a("isolation: isolate"),Ta=a(" to exclude them from being blended. "),ae=s("a"),Aa=a("Inspiration credits to huijing \u{1F44F}\u{1F44F}"),ja=a(". But I am lazy to wrap all my emojis with "),we=s("code"),Pa=a("<span>"),Oa=a(", I want to use them anytime I want, without bothering much of the "),be=s("code"),Ca=a("<span>"),Ga=a(", so I decided to write a gatsby remark plugin to do that for me. \u{1F60E}"),Sa=h(),Ue=s("p"),Da=a("Well, it turns out it's not that hard."),$a=h(),$=s("p"),oe=s("a"),Ra=a("Remark"),qa=a(" provides a friendly api to tap into the AST and "),se=s("a"),Ba=a("does transformation"),Ma=a("."),Na=h(),xe=s("div"),Wa=h(),ze=s("p"),Ee=s("em"),La=a("using emoji-regex find emojis and wrap them with a "),at=s("span"),Ha=h(),Fe=s("p"),Ua=a("...and it works!"),za=h(),Qe=s("p"),Fa=a("Although somewhere when I started writing the gatsby plugin, a weird error popped up, and after some digging, I noticed that"),Qa=h(),re=s("p"),Va=a("I had to include "),Ie=s("code"),Xa=a("package.json"),Za=a(" into the plugin folder, or else it will yell at me."),ot=h(),T=s("section"),Ve=s("h2"),le=s("a"),Ja=a("The Restructure"),Ka=h(),_=s("p"),Ya=a("A while ago, I decided to add more categories to my blog, ie, "),Te=s("a"),eo=a("my blogs"),to=a(", "),Ae=s("a"),ao=a("my talks"),oo=a(" and "),je=s("a"),so=a("my notes"),ro=a(". So I created different folders for them and "),ne=s("a"),lo=a("rewrote the GraphQL query"),no=h(),ie=s("p"),io=a("The Graphql Editor in "),Pe=s("code"),co=a("http://localhost:8000/___graphql"),po=a(" is really helpful for me to understand how Gatsby and Gatsby plugins are creating all the objects."),this.h()},l(i){ys(v.$$.fragment,i),x=d(i),k=r(i,"P",{});var u=l(k);q=o(u,"After reading Dan's "),y=r(u,"A",{href:!0,rel:!0});var ko=l(y);E=o(ko,"Overreacted"),ko.forEach(t),pe=o(u," & Wei's "),B=r(u,"A",{href:!0,rel:!0});var fo=l(B);ft=o(fo,"A Work in Progress"),fo.forEach(t),mt=o(u," a while ago, I decided to have my "),he=r(u,"A",{href:!0});var mo=l(he);gt=o(mo,"own blog"),mo.forEach(t),_t=o(u," as well! "),Ge=r(u,"EM",{});var go=l(Ge);wt=o(go,"(In case you still don't know, it's the very one you are reading right now!)"),go.forEach(t),u.forEach(t),Je=d(i),P=r(i,"P",{});var rt=l(P);bt=o(rt,"I took it as an opportunity to learn "),M=r(rt,"A",{href:!0,rel:!0});var _o=l(M);xt=o(_o,"Gatsby"),_o.forEach(t),Et=o(rt,", I've heard about it for a while, so I guess it's to know how it works."),rt.forEach(t),Ke=d(i),O=r(i,"P",{});var lt=l(O);It=o(lt,"This article is "),Se=r(lt,"STRONG",{});var wo=l(Se);Tt=o(wo,"NOT about how to build a Gatsby site"),wo.forEach(t),At=o(lt,", there a lot resources about that you can go for. But I am here to share some of my customisations that I've added to my Gatsby site, and hopefully you would share yours too."),lt.forEach(t),Ye=d(i),C=r(i,"SECTION",{});var nt=l(C);De=r(nt,"H2",{});var bo=l(De);N=r(bo,"A",{href:!0,id:!0});var xo=l(N);jt=o(xo,"The boilerplate"),xo.forEach(t),bo.forEach(t),Pt=d(nt),W=r(nt,"P",{});var it=l(W);Ot=o(it,"I used the exact same Gatsby starter pack as Dan's "),L=r(it,"A",{href:!0,rel:!0});var Eo=l(L);Ct=o(Eo,"Overreacted"),Eo.forEach(t),Gt=o(it,", because why not \xAF_(\u30C4)_/\xAF. It looks sleek and simple and I like it."),it.forEach(t),nt.forEach(t),et=d(i),f=r(i,"SECTION",{});var w=l(f);$e=r(w,"H2",{});var Io=l($e);H=r(Io,"A",{href:!0,id:!0});var To=l(H);St=o(To,"The deployment"),To.forEach(t),Io.forEach(t),Dt=d(w),U=r(w,"P",{});var ct=l(U);$t=o(ct,"I use "),z=r(ct,"A",{href:!0,rel:!0});var Ao=l(z);Rt=o(Ao,"Github Pages"),Ao.forEach(t),qt=o(ct," to host this blog."),ct.forEach(t),Bt=d(w),Re=r(w,"P",{});var jo=l(Re);F=r(jo,"PICTURE",{});var pt=l(F);qe=r(pt,"SOURCE",{type:!0,srcset:!0}),Be=r(pt,"SOURCE",{type:!0,srcset:!0}),G=r(pt,"IMG",{src:!0,loading:!0,alt:!0,title:!0}),pt.forEach(t),jo.forEach(t),Mt=d(w),A=r(w,"P",{});var Oe=l(A);Nt=o(Oe,"According to the settings, I am required to use "),de=r(Oe,"CODE",{class:!0});var Po=l(de);Wt=o(Po,"master"),Po.forEach(t),Lt=o(Oe," branch to serve the content, that's why I am writing and developing in "),ue=r(Oe,"CODE",{class:!0});var Oo=l(ue);Ht=o(Oo,"dev"),Oo.forEach(t),Ut=o(Oe," branch instead."),Oe.forEach(t),zt=d(w),Q=r(w,"P",{});var ht=l(Q);Ft=o(ht,"To deploy, I added a "),V=r(ht,"A",{href:!0,rel:!0});var Co=l(V);Qt=o(Co,"publish.js"),Co.forEach(t),Vt=o(ht," script. The script will clone the repo in a temporary folder, copy all the built files into the folder, make a commit and push it to the master branch."),ht.forEach(t),Xt=d(w),I=r(w,"P",{});var R=l(I);Zt=o(R,"Lastly, I added the script to the "),ve=r(R,"CODE",{class:!0});var Go=l(ve);Jt=o(Go,"pre-push"),Go.forEach(t),Kt=o(R," git hook, so that every time when I am pushing changes to the "),ye=r(R,"CODE",{class:!0});var So=l(ye);Yt=o(So,"dev"),So.forEach(t),ea=o(R,' branch, it will also build and "deploy" changes to the '),ke=r(R,"CODE",{class:!0});var Do=l(ke);ta=o(Do,"master"),Do.forEach(t),aa=o(R," branch."),R.forEach(t),w.forEach(t),tt=d(i),c=r(i,"SECTION",{});var p=l(c);Me=r(p,"H2",{});var $o=l(Me);X=r($o,"A",{href:!0,id:!0});var Ro=l(X);oa=o(Ro,"The light & dark mode"),Ro.forEach(t),$o.forEach(t),sa=d(p),S=r(p,"P",{});var Xe=l(S);Z=r(Xe,"A",{href:!0,rel:!0});var qo=l(Z);ra=o(qo,"Wei"),qo.forEach(t),la=o(Xe," did a sharing on how mix blend mode works and how she "),J=r(Xe,"A",{href:!0,rel:!0});var Bo=l(J);na=o(Bo,"added night mode using mix-blend-mode"),Bo.forEach(t),ia=o(Xe," on her site."),Xe.forEach(t),ca=d(p),K=r(p,"P",{});var dt=l(K);pa=o(dt,"So I decided to add my own "),Y=r(dt,"A",{href:!0,rel:!0});var Mo=l(Y);ha=o(Mo,"Dark Mode Switch"),Mo.forEach(t),da=o(dt," as well."),dt.forEach(t),ua=d(p),ee=r(p,"P",{});var ut=l(ee);va=o(ut,"The Dark Mode Switch was relatively easy. I added a pseudo-element "),fe=r(ut,"CODE",{class:!0});var No=l(fe);ya=o(No,"div#___gatsby::after"),No.forEach(t),ka=o(ut," to cover over my entire Gatsby blog, so I don't have to create another div element."),ut.forEach(t),fa=d(p),me=r(p,"DIV",{class:!0});var bs=l(me);bs.forEach(t),ma=d(p),Ne=r(p,"P",{});var Wo=l(Ne);ga=o(Wo,"It's easy and it looks great, except, all my images and emojis are inverted. \u{1F622}"),Wo.forEach(t),_a=d(p),We=r(p,"P",{});var Lo=l(We);te=r(Lo,"PICTURE",{});var vt=l(te);Le=r(vt,"SOURCE",{type:!0,srcset:!0}),He=r(vt,"SOURCE",{type:!0,srcset:!0}),D=r(vt,"IMG",{src:!0,loading:!0,alt:!0,title:!0}),vt.forEach(t),Lo.forEach(t),wa=d(p),m=r(p,"P",{});var b=l(m);ba=o(b,"I need to wrap all my emojis around a "),ge=r(b,"CODE",{class:!0});var Ho=l(ge);xa=o(Ho,"<span>"),Ho.forEach(t),Ea=o(b," so I can apply some css like "),_e=r(b,"CODE",{class:!0});var Uo=l(_e);Ia=o(Uo,"isolation: isolate"),Uo.forEach(t),Ta=o(b," to exclude them from being blended. "),ae=r(b,"A",{href:!0,rel:!0});var zo=l(ae);Aa=o(zo,"Inspiration credits to huijing \u{1F44F}\u{1F44F}"),zo.forEach(t),ja=o(b,". But I am lazy to wrap all my emojis with "),we=r(b,"CODE",{class:!0});var Fo=l(we);Pa=o(Fo,"<span>"),Fo.forEach(t),Oa=o(b,", I want to use them anytime I want, without bothering much of the "),be=r(b,"CODE",{class:!0});var Qo=l(be);Ca=o(Qo,"<span>"),Qo.forEach(t),Ga=o(b,", so I decided to write a gatsby remark plugin to do that for me. \u{1F60E}"),b.forEach(t),Sa=d(p),Ue=r(p,"P",{});var Vo=l(Ue);Da=o(Vo,"Well, it turns out it's not that hard."),Vo.forEach(t),$a=d(p),$=r(p,"P",{});var Ze=l($);oe=r(Ze,"A",{href:!0,rel:!0});var Xo=l(oe);Ra=o(Xo,"Remark"),Xo.forEach(t),qa=o(Ze," provides a friendly api to tap into the AST and "),se=r(Ze,"A",{href:!0,rel:!0});var Zo=l(se);Ba=o(Zo,"does transformation"),Zo.forEach(t),Ma=o(Ze,"."),Ze.forEach(t),Na=d(p),xe=r(p,"DIV",{class:!0});var xs=l(xe);xs.forEach(t),Wa=d(p),ze=r(p,"P",{});var Jo=l(ze);Ee=r(Jo,"EM",{});var ho=l(Ee);La=o(ho,"using emoji-regex find emojis and wrap them with a "),at=r(ho,"SPAN",{}),l(at).forEach(t),ho.forEach(t),Jo.forEach(t),Ha=d(p),Fe=r(p,"P",{});var Ko=l(Fe);Ua=o(Ko,"...and it works!"),Ko.forEach(t),za=d(p),Qe=r(p,"P",{});var Yo=l(Qe);Fa=o(Yo,"Although somewhere when I started writing the gatsby plugin, a weird error popped up, and after some digging, I noticed that"),Yo.forEach(t),Qa=d(p),re=r(p,"P",{});var yt=l(re);Va=o(yt,"I had to include "),Ie=r(yt,"CODE",{class:!0});var es=l(Ie);Xa=o(es,"package.json"),es.forEach(t),Za=o(yt," into the plugin folder, or else it will yell at me."),yt.forEach(t),p.forEach(t),ot=d(i),T=r(i,"SECTION",{});var Ce=l(T);Ve=r(Ce,"H2",{});var ts=l(Ve);le=r(ts,"A",{href:!0,id:!0});var as=l(le);Ja=o(as,"The Restructure"),as.forEach(t),ts.forEach(t),Ka=d(Ce),_=r(Ce,"P",{});var j=l(_);Ya=o(j,"A while ago, I decided to add more categories to my blog, ie, "),Te=r(j,"A",{href:!0});var os=l(Te);eo=o(os,"my blogs"),os.forEach(t),to=o(j,", "),Ae=r(j,"A",{href:!0});var ss=l(Ae);ao=o(ss,"my talks"),ss.forEach(t),oo=o(j," and "),je=r(j,"A",{href:!0});var rs=l(je);so=o(rs,"my notes"),rs.forEach(t),ro=o(j,". So I created different folders for them and "),ne=r(j,"A",{href:!0,rel:!0});var ls=l(ne);lo=o(ls,"rewrote the GraphQL query"),ls.forEach(t),j.forEach(t),no=d(Ce),ie=r(Ce,"P",{});var kt=l(ie);io=o(kt,"The Graphql Editor in "),Pe=r(kt,"CODE",{class:!0});var ns=l(Pe);co=o(ns,"http://localhost:8000/___graphql"),ns.forEach(t),po=o(kt," is really helpful for me to understand how Gatsby and Gatsby plugins are creating all the objects."),kt.forEach(t),Ce.forEach(t),this.h()},h(){n(y,"href","https://overreacted.io"),n(y,"rel","nofollow"),n(B,"href","https://dev.wgao19.cc/"),n(B,"rel","nofollow"),n(he,"href","/blogs/"),n(M,"href","https://www.gatsbyjs.org/"),n(M,"rel","nofollow"),n(N,"href","#the-boilerplate"),n(N,"id","the-boilerplate"),n(L,"href","https://overreacted.io"),n(L,"rel","nofollow"),n(H,"href","#the-deployment"),n(H,"id","the-deployment"),n(z,"href","https://pages.github.com/"),n(z,"rel","nofollow"),n(qe,"type","image/webp"),n(qe,"srcset",Ds),n(Be,"type","image/png"),n(Be,"srcset",ds),ps(G.src,vo=ds)||n(G,"src",vo),n(G,"loading","lazy"),n(G,"alt","github pages settings"),n(G,"title","Github Pages Settings"),n(de,"class","inline"),n(ue,"class","inline"),n(V,"href","https://github.com/tanhauhau/tanhauhau.github.io/blob/dev/scripts/publish.js"),n(V,"rel","nofollow"),n(ve,"class","inline"),n(ye,"class","inline"),n(ke,"class","inline"),n(X,"href","#the-light-dark-mode"),n(X,"id","the-light-dark-mode"),n(Z,"href","https://twitter.com/wgao19"),n(Z,"rel","nofollow"),n(J,"href","https://dev.wgao19.cc/2019-05-04__sun-moon-blending-mode/"),n(J,"rel","nofollow"),n(Y,"href","https://github.com/tanhauhau/tanhauhau.github.io/commit/291663d10cc7838d67392acb6a28a04a655603a6#diff-4e34e842430a5e2977417f28e477e14d"),n(Y,"rel","nofollow"),n(fe,"class","inline"),n(me,"class","code-section"),n(Le,"type","image/webp"),n(Le,"srcset",Ss),n(He,"type","image/png"),n(He,"srcset",hs),ps(D.src,yo=hs)||n(D,"src",yo),n(D,"loading","lazy"),n(D,"alt","inverted emojis"),n(D,"title","It looked like emojis going through X-Rays.. \u{1F622}"),n(ge,"class","inline"),n(_e,"class","inline"),n(ae,"href","https://www.chenhuijing.com/blog/friends-dont-let-friends-implement-dark-mode-alone/#%F0%9F%92%BB"),n(ae,"rel","nofollow"),n(we,"class","inline"),n(be,"class","inline"),n(oe,"href","https://github.com/remarkjs/remark"),n(oe,"rel","nofollow"),n(se,"href","https://github.com/tanhauhau/tanhauhau.github.io/commit/291663d10cc7838d67392acb6a28a04a655603a6#diff-1be49bbded0fd920136646bdb37f5b91"),n(se,"rel","nofollow"),n(xe,"class","code-section"),n(Ie,"class","inline"),n(le,"href","#the-restructure"),n(le,"id","the-restructure"),n(Te,"href","/blogs/"),n(Ae,"href","/talks/"),n(je,"href","/notes"),n(ne,"href","https://github.com/tanhauhau/tanhauhau.github.io/commit/50c82259749f7608d1c81062eac1f357b9437485"),n(ne,"rel","nofollow"),n(Pe,"class","inline")},m(i,u){ks(v,i,u),g(i,x,u),g(i,k,u),e(k,q),e(k,y),e(y,E),e(k,pe),e(k,B),e(B,ft),e(k,mt),e(k,he),e(he,gt),e(k,_t),e(k,Ge),e(Ge,wt),g(i,Je,u),g(i,P,u),e(P,bt),e(P,M),e(M,xt),e(P,Et),g(i,Ke,u),g(i,O,u),e(O,It),e(O,Se),e(Se,Tt),e(O,At),g(i,Ye,u),g(i,C,u),e(C,De),e(De,N),e(N,jt),e(C,Pt),e(C,W),e(W,Ot),e(W,L),e(L,Ct),e(W,Gt),g(i,et,u),g(i,f,u),e(f,$e),e($e,H),e(H,St),e(f,Dt),e(f,U),e(U,$t),e(U,z),e(z,Rt),e(U,qt),e(f,Bt),e(f,Re),e(Re,F),e(F,qe),e(F,Be),e(F,G),e(f,Mt),e(f,A),e(A,Nt),e(A,de),e(de,Wt),e(A,Lt),e(A,ue),e(ue,Ht),e(A,Ut),e(f,zt),e(f,Q),e(Q,Ft),e(Q,V),e(V,Qt),e(Q,Vt),e(f,Xt),e(f,I),e(I,Zt),e(I,ve),e(ve,Jt),e(I,Kt),e(I,ye),e(ye,Yt),e(I,ea),e(I,ke),e(ke,ta),e(I,aa),g(i,tt,u),g(i,c,u),e(c,Me),e(Me,X),e(X,oa),e(c,sa),e(c,S),e(S,Z),e(Z,ra),e(S,la),e(S,J),e(J,na),e(S,ia),e(c,ca),e(c,K),e(K,pa),e(K,Y),e(Y,ha),e(K,da),e(c,ua),e(c,ee),e(ee,va),e(ee,fe),e(fe,ya),e(ee,ka),e(c,fa),e(c,me),me.innerHTML=_s,e(c,ma),e(c,Ne),e(Ne,ga),e(c,_a),e(c,We),e(We,te),e(te,Le),e(te,He),e(te,D),e(c,wa),e(c,m),e(m,ba),e(m,ge),e(ge,xa),e(m,Ea),e(m,_e),e(_e,Ia),e(m,Ta),e(m,ae),e(ae,Aa),e(m,ja),e(m,we),e(we,Pa),e(m,Oa),e(m,be),e(be,Ca),e(m,Ga),e(c,Sa),e(c,Ue),e(Ue,Da),e(c,$a),e(c,$),e($,oe),e(oe,Ra),e($,qa),e($,se),e(se,Ba),e($,Ma),e(c,Na),e(c,xe),xe.innerHTML=ws,e(c,Wa),e(c,ze),e(ze,Ee),e(Ee,La),e(Ee,at),e(c,Ha),e(c,Fe),e(Fe,Ua),e(c,za),e(c,Qe),e(Qe,Fa),e(c,Qa),e(c,re),e(re,Va),e(re,Ie),e(Ie,Xa),e(re,Za),g(i,ot,u),g(i,T,u),e(T,Ve),e(Ve,le),e(le,Ja),e(T,Ka),e(T,_),e(_,Ya),e(_,Te),e(Te,eo),e(_,to),e(_,Ae),e(Ae,ao),e(_,oo),e(_,je),e(je,so),e(_,ro),e(_,ne),e(ne,lo),e(T,no),e(T,ie),e(ie,io),e(ie,Pe),e(Pe,co),e(ie,po),st=!0},p:Ps,i(i){st||(fs(v.$$.fragment,i),st=!0)},o(i){ms(v.$$.fragment,i),st=!1},d(i){gs(v,i),i&&t(x),i&&t(k),i&&t(Je),i&&t(P),i&&t(Ke),i&&t(O),i&&t(Ye),i&&t(C),i&&t(et),i&&t(f),i&&t(tt),i&&t(c),i&&t(ot),i&&t(T)}}}function Rs(ce){let v,x;const k=[ce[0],us];let q={$$slots:{default:[$s]},$$scope:{ctx:ce}};for(let y=0;y<k.length;y+=1)q=uo(q,k[y]);return v=new Os({props:q}),{c(){vs(v.$$.fragment)},l(y){ys(v.$$.fragment,y)},m(y,E){ks(v,y,E),x=!0},p(y,[E]){const pe=E&1?As(k,[E&1&&is(y[0]),E&0&&is(us)]):{};E&2&&(pe.$$scope={dirty:E,ctx:y}),v.$set(pe)},i(y){x||(fs(v.$$.fragment,y),x=!0)},o(y){ms(v.$$.fragment,y),x=!1},d(y){gs(v,y)}}}const us={title:"Building my Gatsby site",date:"2019-07-02T08:00:00Z",description:"A work in progress",wip:!0,label:"blog"};function qs(ce,v,x){return js("blog",{image:Gs}),ce.$$set=k=>{x(0,v=uo(uo({},v),cs(k)))},v=cs(v),[v]}class zs extends Es{constructor(v){super();Is(this,v,qs,Rs,Ts,{})}}export{zs as default,us as metadata};
