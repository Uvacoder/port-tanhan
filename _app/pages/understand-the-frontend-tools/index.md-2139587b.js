import{S as Va,i as Ya,s as Za,C as jo,w as Xa,x as es,y as ts,z as os,A as Wa,q as as,o as ss,B as ns,r as rs,Y as za,e as o,t as n,k as i,c as a,a as s,h as r,d as t,m as d,b as h,g as j,H as e}from"../../chunks/vendor-9710682b.js";import{B as ls}from"../../chunks/BlogLayout-9a08402e.js";import{_ as is}from"../../chunks/twitter-card-image-a57df29d.js";import"../../chunks/stores-f9c97213.js";import"../../chunks/TableOfContent-2fa6a472.js";/* empty css                                */function ds(K){let l,E,I,A,m,_,Q,se,Xe,et,tt,C,H,ot,at,J,st,nt,rt,ne,re,lt,it,le,dt,Ue,v,ie,P,ht,ct,de,ut,pt,he,ce,mt,ft,ue,vt,wt,pe,me,gt,bt,fe,_t,yt,ve,we,It,We,b,ge,x,Et,kt,be,St,qt,_e,Ct,Ot,ye,Tt,At,L,Ht,D,Jt,Pt,xt,p,Ie,O,Ee,Lt,Dt,ke,Mt,Bt,Nt,Se,q,Gt,qe,$t,jt,Ce,Kt,Qt,Rt,Oe,S,Te,Ut,Wt,Ae,zt,Ft,He,Vt,Yt,Zt,Je,R,Pe,Xt,eo,to,xe,M,oo,B,ao,so,no,Le,c,ro,U,lo,io,W,ho,co,z,uo,po,F,mo,fo,V,vo,wo,Y,go,bo,Z,_o,yo,X,Io,Eo,N,ko,So,qo,De,ee,Me,Co,Oo,To,Be,te,Ne,Ao,Ho,Jo,Ge,oe,$e,Po,xo,ze,T,je,G,Lo,Do,Ke,Mo;return{c(){l=o("section"),E=o("h2"),I=o("a"),A=n("Motivation"),m=i(),_=o("p"),Q=n("Some people said, "),se=o("em"),Xe=n('"A year in the JavaScript world is equal to 10 years in the outside world."'),et=n(" It maybe a bit of exaggerated, but it shed some light on the learning hell of a frontend developer."),tt=i(),C=o("p"),H=o("a"),ot=n("Kamran Ahmed"),at=n(" has written a nice article on "),J=o("a"),st=n("frontend developer's roadmap in 2018"),nt=n(", according to him, if you want to be a frontend developer, you would require to learn preprocessors, package managers, frameworks, build tools, and etc. The list keeps going on and honestly it is tough to keep up with all the new things that's coming out."),rt=i(),ne=o("blockquote"),re=o("p"),lt=n("So, how should we make sense of all these tools, libraries and frameworks to make ourselves a better frontend developer?"),it=i(),le=o("p"),dt=n("In this post and the posts to come, I would like to share some of my insights on how I navigate around all these ever evolving tools, libraries and frameworks."),Ue=i(),v=o("section"),ie=o("h2"),P=o("a"),ht=n("Disclaimer"),ct=i(),de=o("p"),ut=n("Before you move on, I have to make some disclaimers."),pt=i(),he=o("blockquote"),ce=o("p"),mt=n("I am just another frontend developer. I am writing this to share, and hopefully get your feedback, on how to make sense with all the frontend development tools."),ft=i(),ue=o("p"),vt=n("And there's a lot of articles out there for beginners to pick up JavaScript and CSS, and so I am not covering that."),wt=i(),pe=o("blockquote"),me=o("p"),gt=n("I will be assuming you have a basic understanding on how JavaScript and CSS works in building a web application."),bt=i(),fe=o("p"),_t=n("Lastly, the opinions and insights I gathered are from articles, tweets, Github issues, and source code of the libraries."),yt=i(),ve=o("blockquote"),we=o("p"),It=n("So some opinions I have might not be the true intention of the library maintainers, but I am giving my perspective in the way I think is the best for me and for you to understand the tools."),We=i(),b=o("section"),ge=o("h2"),x=o("a"),Et=n("Asking Questions"),kt=i(),be=o("p"),St=n("I realised that in 2019, someone new to frontend development, there is a lot of knowledge and concepts required to acquire, plethora of tools to learn, and I persoanlly think that's a lot to ask. But yet, this is our state of our industry currently."),qt=i(),_e=o("p"),Ct=n("Therefore, I am writing down the thought process and concepts that I've gained so far, and hoped that these articles would help new comers to the frontend development world a better foothold on understanding the frontend ecosystem."),Ot=i(),ye=o("p"),Tt=n("When picking up a new tool, I strongly believe that the best way to learn about it is to ask youself, what kind of problems were you facing without this new tool, and how did you solve these problems? Does the new tool solved your problems?"),At=i(),L=o("p"),Ht=n("So, in my humble opinion, the best way of learning all the tools out there in the JavaScript world, is to go back to the basics, ie: writing "),D=o("a"),Jt=n("Vanilla JavaScript"),Pt=n(" and plain CSS, and start asking questions:"),xt=i(),p=o("ol"),Ie=o("li"),O=o("p"),Ee=o("strong"),Lt=n("Modularity"),Dt=n(". How do I break down my code (JavaScript and CSS alike) into separate modules? How do I "),ke=o("em"),Mt=n('"import"'),Bt=n(" then when I need the module? If this module is to be used in multiple projects, how do I share them across projects? or better, how to share the modules to other people around the world?"),Nt=i(),Se=o("li"),q=o("p"),Gt=n("Following up on question "),qe=o("strong"),$t=n("1."),jt=n(", How do I piece all my "),Ce=o("em"),Kt=n('"modules"'),Qt=n(" together? How do I download the code for the modules I only when I need it?"),Rt=i(),Oe=o("li"),S=o("p"),Te=o("strong"),Ut=n("CSS Modularity"),Wt=n(". How do I ensure that in a big application that there's no naming conflict for my CSS "),Ae=o("em"),zt=n("classname"),Ft=n(" or "),He=o("em"),Vt=n("id"),Yt=n("?"),Zt=i(),Je=o("li"),R=o("p"),Pe=o("strong"),Xt=n("Abstraction"),eo=n(". if I can abstract common logic out in JavaScript, how do I have abstraction for CSS?"),to=i(),xe=o("li"),M=o("p"),oo=n("In all fairness, "),B=o("a"),ao=n("JavaScript is not the best designed language"),so=n(". JavaScript has its own quirks. So how can JavaScript evolve as a language itself, and how do I make use of the latest language syntax without risking browser compatibility?"),no=i(),Le=o("li"),c=o("p"),ro=n("When I write code, I noticed a common pattern in the code that may cause bugs, for example, using variable without defined it in scope, missing "),U=o("code"),lo=n("default"),io=n(" case in "),W=o("code"),ho=n("switch"),co=n(" statement, adding "),z=o("code"),uo=n("string"),po=n(" with "),F=o("code"),mo=n("number"),fo=n(", etc. How do I prevent myself from writing such code? Adding "),V=o("code"),vo=n("string"),wo=n(" and "),Y=o("code"),go=n("number"),bo=n(" is still a valid JavaScript code, but it will be a source of problem if we assume the result to be a "),Z=o("code"),_o=n("number"),yo=n(". How do I make myself to be aware of the "),X=o("code"),Io=n("type"),Eo=n(" of the variable, given that JavaScript is a "),N=o("a"),ko=n("dynamically-typed"),So=n(" language?"),qo=i(),De=o("li"),ee=o("p"),Me=o("strong"),Co=n("Testing"),Oo=n(". How should I test my code? If test code explains the behavior of my code, how do I write test code such that when other people reads the test code, they can understand all the quirks and behaviours of my actual code?"),To=i(),Be=o("li"),te=o("p"),Ne=o("strong"),Ao=n("Test coverage"),Ho=n(". How do I ensure that I test all the possible scenarios? How do I know that my code has some impossible path/logic that will never execute, knowing all the possible test cases?"),Jo=i(),Ge=o("li"),oe=o("p"),$e=o("strong"),Po=n("Optimisation"),xo=n(". How does the browser downloads and exectues my code? What can I do to optimise the performance of my code? and how do I do it?"),ze=i(),T=o("section"),je=o("h2"),G=o("a"),Lo=n("Answering Them"),Do=i(),Ke=o("p"),Mo=n("The above are questions that I asked, and I am going to answer them one by one in the future articles."),this.h()},l(u){l=a(u,"SECTION",{});var w=s(l);E=a(w,"H2",{});var Ko=s(E);I=a(Ko,"A",{href:!0,id:!0});var Qo=s(I);A=r(Qo,"Motivation"),Qo.forEach(t),Ko.forEach(t),m=d(w),_=a(w,"P",{});var Fe=s(_);Q=r(Fe,"Some people said, "),se=a(Fe,"EM",{});var Ro=s(se);Xe=r(Ro,'"A year in the JavaScript world is equal to 10 years in the outside world."'),Ro.forEach(t),et=r(Fe," It maybe a bit of exaggerated, but it shed some light on the learning hell of a frontend developer."),Fe.forEach(t),tt=d(w),C=a(w,"P",{});var Qe=s(C);H=a(Qe,"A",{href:!0,rel:!0});var Uo=s(H);ot=r(Uo,"Kamran Ahmed"),Uo.forEach(t),at=r(Qe," has written a nice article on "),J=a(Qe,"A",{href:!0,rel:!0});var Wo=s(J);st=r(Wo,"frontend developer's roadmap in 2018"),Wo.forEach(t),nt=r(Qe,", according to him, if you want to be a frontend developer, you would require to learn preprocessors, package managers, frameworks, build tools, and etc. The list keeps going on and honestly it is tough to keep up with all the new things that's coming out."),Qe.forEach(t),rt=d(w),ne=a(w,"BLOCKQUOTE",{});var zo=s(ne);re=a(zo,"P",{});var Fo=s(re);lt=r(Fo,"So, how should we make sense of all these tools, libraries and frameworks to make ourselves a better frontend developer?"),Fo.forEach(t),zo.forEach(t),it=d(w),le=a(w,"P",{});var Vo=s(le);dt=r(Vo,"In this post and the posts to come, I would like to share some of my insights on how I navigate around all these ever evolving tools, libraries and frameworks."),Vo.forEach(t),w.forEach(t),Ue=d(u),v=a(u,"SECTION",{});var y=s(v);ie=a(y,"H2",{});var Yo=s(ie);P=a(Yo,"A",{href:!0,id:!0});var Zo=s(P);ht=r(Zo,"Disclaimer"),Zo.forEach(t),Yo.forEach(t),ct=d(y),de=a(y,"P",{});var Xo=s(de);ut=r(Xo,"Before you move on, I have to make some disclaimers."),Xo.forEach(t),pt=d(y),he=a(y,"BLOCKQUOTE",{});var ea=s(he);ce=a(ea,"P",{});var ta=s(ce);mt=r(ta,"I am just another frontend developer. I am writing this to share, and hopefully get your feedback, on how to make sense with all the frontend development tools."),ta.forEach(t),ea.forEach(t),ft=d(y),ue=a(y,"P",{});var oa=s(ue);vt=r(oa,"And there's a lot of articles out there for beginners to pick up JavaScript and CSS, and so I am not covering that."),oa.forEach(t),wt=d(y),pe=a(y,"BLOCKQUOTE",{});var aa=s(pe);me=a(aa,"P",{});var sa=s(me);gt=r(sa,"I will be assuming you have a basic understanding on how JavaScript and CSS works in building a web application."),sa.forEach(t),aa.forEach(t),bt=d(y),fe=a(y,"P",{});var na=s(fe);_t=r(na,"Lastly, the opinions and insights I gathered are from articles, tweets, Github issues, and source code of the libraries."),na.forEach(t),yt=d(y),ve=a(y,"BLOCKQUOTE",{});var ra=s(ve);we=a(ra,"P",{});var la=s(we);It=r(la,"So some opinions I have might not be the true intention of the library maintainers, but I am giving my perspective in the way I think is the best for me and for you to understand the tools."),la.forEach(t),ra.forEach(t),y.forEach(t),We=d(u),b=a(u,"SECTION",{});var k=s(b);ge=a(k,"H2",{});var ia=s(ge);x=a(ia,"A",{href:!0,id:!0});var da=s(x);Et=r(da,"Asking Questions"),da.forEach(t),ia.forEach(t),kt=d(k),be=a(k,"P",{});var ha=s(be);St=r(ha,"I realised that in 2019, someone new to frontend development, there is a lot of knowledge and concepts required to acquire, plethora of tools to learn, and I persoanlly think that's a lot to ask. But yet, this is our state of our industry currently."),ha.forEach(t),qt=d(k),_e=a(k,"P",{});var ca=s(_e);Ct=r(ca,"Therefore, I am writing down the thought process and concepts that I've gained so far, and hoped that these articles would help new comers to the frontend development world a better foothold on understanding the frontend ecosystem."),ca.forEach(t),Ot=d(k),ye=a(k,"P",{});var ua=s(ye);Tt=r(ua,"When picking up a new tool, I strongly believe that the best way to learn about it is to ask youself, what kind of problems were you facing without this new tool, and how did you solve these problems? Does the new tool solved your problems?"),ua.forEach(t),At=d(k),L=a(k,"P",{});var Ve=s(L);Ht=r(Ve,"So, in my humble opinion, the best way of learning all the tools out there in the JavaScript world, is to go back to the basics, ie: writing "),D=a(Ve,"A",{href:!0,rel:!0});var pa=s(D);Jt=r(pa,"Vanilla JavaScript"),pa.forEach(t),Pt=r(Ve," and plain CSS, and start asking questions:"),Ve.forEach(t),xt=d(k),p=a(k,"OL",{});var g=s(p);Ie=a(g,"LI",{});var ma=s(Ie);O=a(ma,"P",{});var Re=s(O);Ee=a(Re,"STRONG",{});var fa=s(Ee);Lt=r(fa,"Modularity"),fa.forEach(t),Dt=r(Re,". How do I break down my code (JavaScript and CSS alike) into separate modules? How do I "),ke=a(Re,"EM",{});var va=s(ke);Mt=r(va,'"import"'),va.forEach(t),Bt=r(Re," then when I need the module? If this module is to be used in multiple projects, how do I share them across projects? or better, how to share the modules to other people around the world?"),Re.forEach(t),ma.forEach(t),Nt=d(g),Se=a(g,"LI",{});var wa=s(Se);q=a(wa,"P",{});var ae=s(q);Gt=r(ae,"Following up on question "),qe=a(ae,"STRONG",{});var ga=s(qe);$t=r(ga,"1."),ga.forEach(t),jt=r(ae,", How do I piece all my "),Ce=a(ae,"EM",{});var ba=s(Ce);Kt=r(ba,'"modules"'),ba.forEach(t),Qt=r(ae," together? How do I download the code for the modules I only when I need it?"),ae.forEach(t),wa.forEach(t),Rt=d(g),Oe=a(g,"LI",{});var _a=s(Oe);S=a(_a,"P",{});var $=s(S);Te=a($,"STRONG",{});var ya=s(Te);Ut=r(ya,"CSS Modularity"),ya.forEach(t),Wt=r($,". How do I ensure that in a big application that there's no naming conflict for my CSS "),Ae=a($,"EM",{});var Ia=s(Ae);zt=r(Ia,"classname"),Ia.forEach(t),Ft=r($," or "),He=a($,"EM",{});var Ea=s(He);Vt=r(Ea,"id"),Ea.forEach(t),Yt=r($,"?"),$.forEach(t),_a.forEach(t),Zt=d(g),Je=a(g,"LI",{});var ka=s(Je);R=a(ka,"P",{});var Bo=s(R);Pe=a(Bo,"STRONG",{});var Sa=s(Pe);Xt=r(Sa,"Abstraction"),Sa.forEach(t),eo=r(Bo,". if I can abstract common logic out in JavaScript, how do I have abstraction for CSS?"),Bo.forEach(t),ka.forEach(t),to=d(g),xe=a(g,"LI",{});var qa=s(xe);M=a(qa,"P",{});var Ye=s(M);oo=r(Ye,"In all fairness, "),B=a(Ye,"A",{href:!0,rel:!0});var Ca=s(B);ao=r(Ca,"JavaScript is not the best designed language"),Ca.forEach(t),so=r(Ye,". JavaScript has its own quirks. So how can JavaScript evolve as a language itself, and how do I make use of the latest language syntax without risking browser compatibility?"),Ye.forEach(t),qa.forEach(t),no=d(g),Le=a(g,"LI",{});var Oa=s(Le);c=a(Oa,"P",{});var f=s(c);ro=r(f,"When I write code, I noticed a common pattern in the code that may cause bugs, for example, using variable without defined it in scope, missing "),U=a(f,"CODE",{class:!0});var Ta=s(U);lo=r(Ta,"default"),Ta.forEach(t),io=r(f," case in "),W=a(f,"CODE",{class:!0});var Aa=s(W);ho=r(Aa,"switch"),Aa.forEach(t),co=r(f," statement, adding "),z=a(f,"CODE",{class:!0});var Ha=s(z);uo=r(Ha,"string"),Ha.forEach(t),po=r(f," with "),F=a(f,"CODE",{class:!0});var Ja=s(F);mo=r(Ja,"number"),Ja.forEach(t),fo=r(f,", etc. How do I prevent myself from writing such code? Adding "),V=a(f,"CODE",{class:!0});var Pa=s(V);vo=r(Pa,"string"),Pa.forEach(t),wo=r(f," and "),Y=a(f,"CODE",{class:!0});var xa=s(Y);go=r(xa,"number"),xa.forEach(t),bo=r(f," is still a valid JavaScript code, but it will be a source of problem if we assume the result to be a "),Z=a(f,"CODE",{class:!0});var La=s(Z);_o=r(La,"number"),La.forEach(t),yo=r(f,". How do I make myself to be aware of the "),X=a(f,"CODE",{class:!0});var Da=s(X);Io=r(Da,"type"),Da.forEach(t),Eo=r(f," of the variable, given that JavaScript is a "),N=a(f,"A",{href:!0,rel:!0});var Ma=s(N);ko=r(Ma,"dynamically-typed"),Ma.forEach(t),So=r(f," language?"),f.forEach(t),Oa.forEach(t),qo=d(g),De=a(g,"LI",{});var Ba=s(De);ee=a(Ba,"P",{});var No=s(ee);Me=a(No,"STRONG",{});var Na=s(Me);Co=r(Na,"Testing"),Na.forEach(t),Oo=r(No,". How should I test my code? If test code explains the behavior of my code, how do I write test code such that when other people reads the test code, they can understand all the quirks and behaviours of my actual code?"),No.forEach(t),Ba.forEach(t),To=d(g),Be=a(g,"LI",{});var Ga=s(Be);te=a(Ga,"P",{});var Go=s(te);Ne=a(Go,"STRONG",{});var $a=s(Ne);Ao=r($a,"Test coverage"),$a.forEach(t),Ho=r(Go,". How do I ensure that I test all the possible scenarios? How do I know that my code has some impossible path/logic that will never execute, knowing all the possible test cases?"),Go.forEach(t),Ga.forEach(t),Jo=d(g),Ge=a(g,"LI",{});var ja=s(Ge);oe=a(ja,"P",{});var $o=s(oe);$e=a($o,"STRONG",{});var Ka=s($e);Po=r(Ka,"Optimisation"),Ka.forEach(t),xo=r($o,". How does the browser downloads and exectues my code? What can I do to optimise the performance of my code? and how do I do it?"),$o.forEach(t),ja.forEach(t),g.forEach(t),k.forEach(t),ze=d(u),T=a(u,"SECTION",{});var Ze=s(T);je=a(Ze,"H2",{});var Qa=s(je);G=a(Qa,"A",{href:!0,id:!0});var Ra=s(G);Lo=r(Ra,"Answering Them"),Ra.forEach(t),Qa.forEach(t),Do=d(Ze),Ke=a(Ze,"P",{});var Ua=s(Ke);Mo=r(Ua,"The above are questions that I asked, and I am going to answer them one by one in the future articles."),Ua.forEach(t),Ze.forEach(t),this.h()},h(){h(I,"href","#motivation"),h(I,"id","motivation"),h(H,"href","https://medium.com/@kamranahmedse"),h(H,"rel","nofollow"),h(J,"href","https://medium.com/tech-tajawal/modern-frontend-developer-in-2018-4c2072fa2b9c"),h(J,"rel","nofollow"),h(P,"href","#disclaimer"),h(P,"id","disclaimer"),h(x,"href","#asking-questions"),h(x,"id","asking-questions"),h(D,"href","https://stackoverflow.com/a/20435744/1513547"),h(D,"rel","nofollow"),h(B,"href","https://github.com/getify/You-Dont-Know-JS"),h(B,"rel","nofollow"),h(U,"class","inline"),h(W,"class","inline"),h(z,"class","inline"),h(F,"class","inline"),h(V,"class","inline"),h(Y,"class","inline"),h(Z,"class","inline"),h(X,"class","inline"),h(N,"href","https://developer.mozilla.org/en-US/docs/Glossary/Dynamic_typing"),h(N,"rel","nofollow"),h(G,"href","#answering-them"),h(G,"id","answering-them")},m(u,w){j(u,l,w),e(l,E),e(E,I),e(I,A),e(l,m),e(l,_),e(_,Q),e(_,se),e(se,Xe),e(_,et),e(l,tt),e(l,C),e(C,H),e(H,ot),e(C,at),e(C,J),e(J,st),e(C,nt),e(l,rt),e(l,ne),e(ne,re),e(re,lt),e(l,it),e(l,le),e(le,dt),j(u,Ue,w),j(u,v,w),e(v,ie),e(ie,P),e(P,ht),e(v,ct),e(v,de),e(de,ut),e(v,pt),e(v,he),e(he,ce),e(ce,mt),e(v,ft),e(v,ue),e(ue,vt),e(v,wt),e(v,pe),e(pe,me),e(me,gt),e(v,bt),e(v,fe),e(fe,_t),e(v,yt),e(v,ve),e(ve,we),e(we,It),j(u,We,w),j(u,b,w),e(b,ge),e(ge,x),e(x,Et),e(b,kt),e(b,be),e(be,St),e(b,qt),e(b,_e),e(_e,Ct),e(b,Ot),e(b,ye),e(ye,Tt),e(b,At),e(b,L),e(L,Ht),e(L,D),e(D,Jt),e(L,Pt),e(b,xt),e(b,p),e(p,Ie),e(Ie,O),e(O,Ee),e(Ee,Lt),e(O,Dt),e(O,ke),e(ke,Mt),e(O,Bt),e(p,Nt),e(p,Se),e(Se,q),e(q,Gt),e(q,qe),e(qe,$t),e(q,jt),e(q,Ce),e(Ce,Kt),e(q,Qt),e(p,Rt),e(p,Oe),e(Oe,S),e(S,Te),e(Te,Ut),e(S,Wt),e(S,Ae),e(Ae,zt),e(S,Ft),e(S,He),e(He,Vt),e(S,Yt),e(p,Zt),e(p,Je),e(Je,R),e(R,Pe),e(Pe,Xt),e(R,eo),e(p,to),e(p,xe),e(xe,M),e(M,oo),e(M,B),e(B,ao),e(M,so),e(p,no),e(p,Le),e(Le,c),e(c,ro),e(c,U),e(U,lo),e(c,io),e(c,W),e(W,ho),e(c,co),e(c,z),e(z,uo),e(c,po),e(c,F),e(F,mo),e(c,fo),e(c,V),e(V,vo),e(c,wo),e(c,Y),e(Y,go),e(c,bo),e(c,Z),e(Z,_o),e(c,yo),e(c,X),e(X,Io),e(c,Eo),e(c,N),e(N,ko),e(c,So),e(p,qo),e(p,De),e(De,ee),e(ee,Me),e(Me,Co),e(ee,Oo),e(p,To),e(p,Be),e(Be,te),e(te,Ne),e(Ne,Ao),e(te,Ho),e(p,Jo),e(p,Ge),e(Ge,oe),e(oe,$e),e($e,Po),e(oe,xo),j(u,ze,w),j(u,T,w),e(T,je),e(je,G),e(G,Lo),e(T,Do),e(T,Ke),e(Ke,Mo)},d(u){u&&t(l),u&&t(Ue),u&&t(v),u&&t(We),u&&t(b),u&&t(ze),u&&t(T)}}}function hs(K){let l,E;const I=[K[0],Fa];let A={$$slots:{default:[ds]},$$scope:{ctx:K}};for(let m=0;m<I.length;m+=1)A=jo(A,I[m]);return l=new ls({props:A}),{c(){Xa(l.$$.fragment)},l(m){es(l.$$.fragment,m)},m(m,_){ts(l,m,_),E=!0},p(m,[_]){const Q=_&1?os(I,[_&1&&Wa(m[0]),_&0&&Wa(Fa)]):{};_&2&&(Q.$$scope={dirty:_,ctx:m}),l.$set(Q)},i(m){E||(as(l.$$.fragment,m),E=!0)},o(m){ss(l.$$.fragment,m),E=!1},d(m){ns(l,m)}}}const Fa={title:"Understand the frontend tools",date:"2019-03-16T08:00:00Z",description:"About the tools frontend developer used in 2019",label:"blog",tableOfContents:[{link:"motivation",title:"Motivation"},{link:"disclaimer",title:"Disclaimer"},{link:"asking-questions",title:"Asking Questions"},{link:"answering-them",title:"Answering Them"}]};function cs(K,l,E){return rs("blog",{image:is}),K.$$set=I=>{E(0,l=jo(jo({},l),za(I)))},l=za(l),[l]}class gs extends Va{constructor(l){super();Ya(this,l,cs,hs,Za,{})}}export{gs as default,Fa as metadata};
