import{S as xt,i as Dt,s as Ot,C as Je,w as wt,x as It,y as Tt,z as $t,A as kt,q as Lt,o as Pt,B as At,r as Bt,Y as Ct,e as s,t,k as w,c as a,a as i,h as o,d as r,m as I,b as f,g as _,H as e}from"../../chunks/vendor-da4388d4.js";import{B as qt}from"../../chunks/BlogLayout-86707f1c.js";import{_ as Ft}from"../../chunks/twitter-card-image-a57df29d.js";import"../../chunks/stores-1fad7c36.js";import"../../chunks/ldjson-b0805387.js";/* empty css                                */function St(T){let c,y,p,D,m,v,C,g,re,$,le,se,L,ae,ie,P,ne,ce,M,E,de,A,fe,me,Z,he,ue,B,pe,_e,V,n,ve,q,Ee,ge,F,ye,ke,S,Ce,be,z,xe,De,R,Oe,we,Y,Ie,Te,G,$e,Le,H,Pe,Ae,N,Be,qe,j,Fe,Se,K,ze,Re,X,ee,te,Q,Ye,oe,u,Ge,J,He,Ne,U,je,Ke,O,Qe,Ue,W,We,Ze;return{c(){c=s("p"),y=t("From the "),p=s("a"),D=t("official docs"),m=t(" of docker for .dockerignore:"),v=w(),C=s("blockquote"),g=s("p"),re=t("Before the docker CLI sends the context to the docker daemon, it looks for a file named "),$=s("code"),le=t(".dockerignore"),se=t(" in the root directory of the context. If this file exists, the CLI modifies the context to exclude files and directories that match patterns in it. This helps to avoid unnecessarily sending large or sensitive files and directories to the daemon and potentially adding them to images using "),L=s("code"),ae=t("ADD"),ie=t(" or "),P=s("code"),ne=t("COPY"),ce=t("."),M=w(),E=s("p"),de=t("Docker CLI will only look for "),A=s("code"),fe=t(".dockerignore"),me=t(" file in the "),Z=s("strong"),he=t("root directory of the context"),ue=t(", if you have a monorepo of multiple packages, make sure "),B=s("code"),pe=t(".dockerignore"),_e=t(" file is on the root directory of your context, it will ignore it if it is somewhere in the subfolder."),V=w(),n=s("p"),ve=t("About pattern matching of the ignored file, "),q=s("code"),Ee=t("*/temp"),ge=t(" will match "),F=s("code"),ye=t("a/temp"),ke=t(" and "),S=s("code"),Ce=t("b/temp"),be=t(" but not "),z=s("code"),xe=t("temp"),De=t(" or "),R=s("code"),Oe=t("a/b/temp"),we=t(" from the root directory. To match 2 levels deep only, you need to write "),Y=s("code"),Ie=t("*/*/temp"),Te=t(" and for arbitrary levels, use "),G=s("code"),$e=t("**"),Le=t(" it will match any number of directory including zero, eg: "),H=s("code"),Pe=t("**/temp"),Ae=t(" matches "),N=s("code"),Be=t("temp"),qe=t(", "),j=s("code"),Fe=t("a/temp"),Se=t(" and "),K=s("code"),ze=t("a/b/temp"),Re=t(" !"),X=w(),ee=s("hr"),te=w(),Q=s("p"),Ye=t("Further reading:"),oe=w(),u=s("p"),Ge=t("To understand more why you "),J=s("strong"),He=t("should not ignore"),Ne=w(),U=s("code"),je=t(".dockerignore"),Ke=t(", read "),O=s("a"),Qe=t("this article"),Ue=t(". It gives a lot of insight why "),W=s("code"),We=t(".dockerignore"),Ze=t(" file is important."),this.h()},l(l){c=a(l,"P",{});var h=i(c);y=o(h,"From the "),p=a(h,"A",{href:!0,rel:!0});var Me=i(p);D=o(Me,"official docs"),Me.forEach(r),m=o(h," of docker for .dockerignore:"),h.forEach(r),v=I(l),C=a(l,"BLOCKQUOTE",{});var Ve=i(C);g=a(Ve,"P",{});var b=i(g);re=o(b,"Before the docker CLI sends the context to the docker daemon, it looks for a file named "),$=a(b,"CODE",{class:!0});var Xe=i($);le=o(Xe,".dockerignore"),Xe.forEach(r),se=o(b," in the root directory of the context. If this file exists, the CLI modifies the context to exclude files and directories that match patterns in it. This helps to avoid unnecessarily sending large or sensitive files and directories to the daemon and potentially adding them to images using "),L=a(b,"CODE",{class:!0});var et=i(L);ae=o(et,"ADD"),et.forEach(r),ie=o(b," or "),P=a(b,"CODE",{class:!0});var tt=i(P);ne=o(tt,"COPY"),tt.forEach(r),ce=o(b,"."),b.forEach(r),Ve.forEach(r),M=I(l),E=a(l,"P",{});var x=i(E);de=o(x,"Docker CLI will only look for "),A=a(x,"CODE",{class:!0});var ot=i(A);fe=o(ot,".dockerignore"),ot.forEach(r),me=o(x," file in the "),Z=a(x,"STRONG",{});var rt=i(Z);he=o(rt,"root directory of the context"),rt.forEach(r),ue=o(x,", if you have a monorepo of multiple packages, make sure "),B=a(x,"CODE",{class:!0});var lt=i(B);pe=o(lt,".dockerignore"),lt.forEach(r),_e=o(x," file is on the root directory of your context, it will ignore it if it is somewhere in the subfolder."),x.forEach(r),V=I(l),n=a(l,"P",{});var d=i(n);ve=o(d,"About pattern matching of the ignored file, "),q=a(d,"CODE",{class:!0});var st=i(q);Ee=o(st,"*/temp"),st.forEach(r),ge=o(d," will match "),F=a(d,"CODE",{class:!0});var at=i(F);ye=o(at,"a/temp"),at.forEach(r),ke=o(d," and "),S=a(d,"CODE",{class:!0});var it=i(S);Ce=o(it,"b/temp"),it.forEach(r),be=o(d," but not "),z=a(d,"CODE",{class:!0});var nt=i(z);xe=o(nt,"temp"),nt.forEach(r),De=o(d," or "),R=a(d,"CODE",{class:!0});var ct=i(R);Oe=o(ct,"a/b/temp"),ct.forEach(r),we=o(d," from the root directory. To match 2 levels deep only, you need to write "),Y=a(d,"CODE",{class:!0});var dt=i(Y);Ie=o(dt,"*/*/temp"),dt.forEach(r),Te=o(d," and for arbitrary levels, use "),G=a(d,"CODE",{class:!0});var ft=i(G);$e=o(ft,"**"),ft.forEach(r),Le=o(d," it will match any number of directory including zero, eg: "),H=a(d,"CODE",{class:!0});var mt=i(H);Pe=o(mt,"**/temp"),mt.forEach(r),Ae=o(d," matches "),N=a(d,"CODE",{class:!0});var ht=i(N);Be=o(ht,"temp"),ht.forEach(r),qe=o(d,", "),j=a(d,"CODE",{class:!0});var ut=i(j);Fe=o(ut,"a/temp"),ut.forEach(r),Se=o(d," and "),K=a(d,"CODE",{class:!0});var pt=i(K);ze=o(pt,"a/b/temp"),pt.forEach(r),Re=o(d," !"),d.forEach(r),X=I(l),ee=a(l,"HR",{}),te=I(l),Q=a(l,"P",{});var _t=i(Q);Ye=o(_t,"Further reading:"),_t.forEach(r),oe=I(l),u=a(l,"P",{});var k=i(u);Ge=o(k,"To understand more why you "),J=a(k,"STRONG",{});var vt=i(J);He=o(vt,"should not ignore"),vt.forEach(r),Ne=I(k),U=a(k,"CODE",{class:!0});var Et=i(U);je=o(Et,".dockerignore"),Et.forEach(r),Ke=o(k,", read "),O=a(k,"A",{href:!0,rel:!0});var gt=i(O);Qe=o(gt,"this article"),gt.forEach(r),Ue=o(k,". It gives a lot of insight why "),W=a(k,"CODE",{class:!0});var yt=i(W);We=o(yt,".dockerignore"),yt.forEach(r),Ze=o(k," file is important."),k.forEach(r),this.h()},h(){f(p,"href","https://docs.docker.com/engine/reference/builder/#dockerignore-file"),f(p,"rel","nofollow"),f($,"class","inline"),f(L,"class","inline"),f(P,"class","inline"),f(A,"class","inline"),f(B,"class","inline"),f(q,"class","inline"),f(F,"class","inline"),f(S,"class","inline"),f(z,"class","inline"),f(R,"class","inline"),f(Y,"class","inline"),f(G,"class","inline"),f(H,"class","inline"),f(N,"class","inline"),f(j,"class","inline"),f(K,"class","inline"),f(U,"class","inline"),f(O,"href","https://codefresh.io/docker-tutorial/not-ignore-dockerignore/"),f(O,"rel","nofollow"),f(W,"class","inline")},m(l,h){_(l,c,h),e(c,y),e(c,p),e(p,D),e(c,m),_(l,v,h),_(l,C,h),e(C,g),e(g,re),e(g,$),e($,le),e(g,se),e(g,L),e(L,ae),e(g,ie),e(g,P),e(P,ne),e(g,ce),_(l,M,h),_(l,E,h),e(E,de),e(E,A),e(A,fe),e(E,me),e(E,Z),e(Z,he),e(E,ue),e(E,B),e(B,pe),e(E,_e),_(l,V,h),_(l,n,h),e(n,ve),e(n,q),e(q,Ee),e(n,ge),e(n,F),e(F,ye),e(n,ke),e(n,S),e(S,Ce),e(n,be),e(n,z),e(z,xe),e(n,De),e(n,R),e(R,Oe),e(n,we),e(n,Y),e(Y,Ie),e(n,Te),e(n,G),e(G,$e),e(n,Le),e(n,H),e(H,Pe),e(n,Ae),e(n,N),e(N,Be),e(n,qe),e(n,j),e(j,Fe),e(n,Se),e(n,K),e(K,ze),e(n,Re),_(l,X,h),_(l,ee,h),_(l,te,h),_(l,Q,h),e(Q,Ye),_(l,oe,h),_(l,u,h),e(u,Ge),e(u,J),e(J,He),e(u,Ne),e(u,U),e(U,je),e(u,Ke),e(u,O),e(O,Qe),e(u,Ue),e(u,W),e(W,We),e(u,Ze)},d(l){l&&r(c),l&&r(v),l&&r(C),l&&r(M),l&&r(E),l&&r(V),l&&r(n),l&&r(X),l&&r(ee),l&&r(te),l&&r(Q),l&&r(oe),l&&r(u)}}}function zt(T){let c,y;const p=[T[0],bt];let D={$$slots:{default:[St]},$$scope:{ctx:T}};for(let m=0;m<p.length;m+=1)D=Je(D,p[m]);return c=new qt({props:D}),{c(){wt(c.$$.fragment)},l(m){It(c.$$.fragment,m)},m(m,v){Tt(c,m,v),y=!0},p(m,[v]){const C=v&1?$t(p,[v&1&&kt(m[0]),v&0&&kt(bt)]):{};v&2&&(C.$$scope={dirty:v,ctx:m}),c.$set(C)},i(m){y||(Lt(c.$$.fragment,m),y=!0)},o(m){Pt(c.$$.fragment,m),y=!1},d(m){At(c,m)}}}const bt={title:"Took me hours to realise why docker build ignores my .dockerignore",date:"2017-11-26T08:00:00Z",description:"...and this is what I've learned",label:"blog"};function Rt(T,c,y){return Bt("blog",{image:Ft}),T.$$set=p=>{y(0,c=Je(Je({},c),Ct(p)))},c=Ct(c),[c]}class Qt extends xt{constructor(c){super();Dt(this,c,Rt,zt,Ot,{})}}export{Qt as default,bt as metadata};
