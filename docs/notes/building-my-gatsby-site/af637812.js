function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function a(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,a,o){return t[1]&&o?e(a.ctx.slice(),t[1](o(n))):a.ctx}function l(t,e,n,a,o,s,r){const l=function(t,e,n,a){if(t[2]&&a){const o=t[2](a(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let a=0;a<n;a+=1)t[a]=e.dirty[a]|o[a];return t}return e.dirty|o}return e.dirty}(e,a,o,s);if(l){const o=c(e,n,a,r);t.p(o,l)}}function i(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function m(){return g(" ")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function E(t,e,n,a){for(let a=0;a<t.length;a+=1){const o=t[a];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(a,1)[0]}}return a?d(e):p(e)}function $(t,e){for(let n=0;n<t.length;n+=1){const a=t[n];if(3===a.nodeType)return a.data=""+e,t.splice(n,1)[0]}return g(e)}function b(t){return $(t," ")}function w(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let k;function A(t){k=t}const L=[],x=[],I=[],T=[],S=Promise.resolve();let N=!1;function q(t){I.push(t)}let C=!1;const j=new Set;function _(){if(!C){C=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];A(e),M(e.$$)}for(L.length=0;x.length;)x.pop()();for(let t=0;t<I.length;t+=1){const e=I[t];j.has(e)||(j.add(e),e())}I.length=0}while(L.length);for(;T.length;)T.pop()();N=!1,C=!1,j.clear()}}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const z=new Set;function P(t,e){t&&t.i&&(z.delete(t),t.i(e))}function O(t,e,n,a){if(t&&t.o){if(z.has(t))return;z.add(t),(void 0).c.push(()=>{z.delete(t),a&&(n&&t.d(1),a())}),t.o(e)}}function U(t){t&&t.c()}function B(t,e){t&&t.l(e)}function D(t,e,a){const{fragment:r,on_mount:c,on_destroy:l,after_update:i}=t.$$;r&&r.m(e,a),q(()=>{const e=c.map(n).filter(s);l?l.push(...e):o(e),t.$$.on_mount=[]}),i.forEach(q)}function H(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(t,e){-1===t.$$.dirty[0]&&(L.push(t),N||(N=!0,S.then(_)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(e,n,s,r,c,l,i=[-1]){const u=k;A(e);const h=n.props||{},p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:a(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:a(),dirty:i};let d=!1;if(p.ctx=s?s(e,h,(t,n,...a)=>{const o=a.length?a[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),d&&F(e,t)),n}):[],p.update(),d=!0,o(p.before_update),p.fragment=!!r&&r(p.ctx),n.target){if(n.hydrate){const t=y(n.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();n.intro&&P(e.$$.fragment),D(e,n.target,n.anchor),_()}A(u)}class Q{$destroy(){H(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function R(e){let n,a,o,s,r,c,l,h,w,k,A,L,x,I,T,S,N,q,C,j,_,M,z,P,O,U,B,D,H,F,G,Q,R,V,W;return{c(){n=p("header"),a=p("nav"),o=p("ul"),s=p("li"),r=p("a"),c=g("Tan Li Hau"),l=m(),h=p("li"),w=p("a"),k=g("About"),A=m(),L=p("li"),x=p("a"),I=g("Writings"),T=m(),S=p("li"),N=p("a"),q=g("Talks"),C=m(),j=p("li"),_=p("a"),M=g("Notes"),z=m(),P=p("li"),O=p("a"),U=g("Newsletter"),B=m(),D=p("li"),H=p("a"),F=d("svg"),G=d("path"),Q=m(),R=p("a"),V=d("svg"),W=d("path"),this.h()},l(t){n=E(t,"HEADER",{class:!0});var e=y(n);a=E(e,"NAV",{});var i=y(a);o=E(i,"UL",{class:!0});var u=y(o);s=E(u,"LI",{class:!0});var p=y(s);r=E(p,"A",{href:!0,class:!0});var d=y(r);c=$(d,"Tan Li Hau"),d.forEach(f),p.forEach(f),l=b(u),h=E(u,"LI",{class:!0});var g=y(h);w=E(g,"A",{href:!0,class:!0});var m=y(w);k=$(m,"About"),m.forEach(f),g.forEach(f),A=b(u),L=E(u,"LI",{class:!0});var v=y(L);x=E(v,"A",{href:!0,class:!0});var K=y(x);I=$(K,"Writings"),K.forEach(f),v.forEach(f),T=b(u),S=E(u,"LI",{class:!0});var J=y(S);N=E(J,"A",{href:!0,class:!0});var X=y(N);q=$(X,"Talks"),X.forEach(f),J.forEach(f),C=b(u),j=E(u,"LI",{class:!0});var Y=y(j);_=E(Y,"A",{href:!0,class:!0});var Z=y(_);M=$(Z,"Notes"),Z.forEach(f),Y.forEach(f),z=b(u),P=E(u,"LI",{class:!0});var tt=y(P);O=E(tt,"A",{href:!0,class:!0});var et=y(O);U=$(et,"Newsletter"),et.forEach(f),tt.forEach(f),B=b(u),D=E(u,"LI",{class:!0});var nt=y(D);H=E(nt,"A",{"aria-label":!0,href:!0,class:!0});var at=y(H);F=E(at,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var ot=y(F);G=E(ot,"path",{d:!0},1),y(G).forEach(f),ot.forEach(f),at.forEach(f),Q=b(nt),R=E(nt,"A",{"aria-label":!0,href:!0,class:!0});var st=y(R);V=E(st,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var rt=y(V);W=E(rt,"path",{d:!0},1),y(W).forEach(f),rt.forEach(f),st.forEach(f),nt.forEach(f),u.forEach(f),i.forEach(f),e.forEach(f),this.h()},h(){v(r,"href","/"),v(r,"class","svelte-f3e4uo"),v(s,"class","svelte-f3e4uo"),v(w,"href","/about"),v(w,"class","svelte-f3e4uo"),v(h,"class","svelte-f3e4uo"),v(x,"href","/blogs"),v(x,"class","svelte-f3e4uo"),v(L,"class","svelte-f3e4uo"),v(N,"href","/talks"),v(N,"class","svelte-f3e4uo"),v(S,"class","svelte-f3e4uo"),v(_,"href","/notes"),v(_,"class","svelte-f3e4uo"),v(j,"class","svelte-f3e4uo"),v(O,"href","/newsletter"),v(O,"class","svelte-f3e4uo"),v(P,"class","svelte-f3e4uo"),v(G,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),v(F,"viewBox","0 0 24 24"),v(F,"width","1em"),v(F,"height","1em"),v(F,"class","svelte-f3e4uo"),v(H,"aria-label","Twitter account"),v(H,"href","https://twitter.com/lihautan"),v(H,"class","svelte-f3e4uo"),v(W,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),v(V,"viewBox","0 0 24 24"),v(V,"width","1em"),v(V,"height","1em"),v(V,"class","svelte-f3e4uo"),v(R,"aria-label","Github account"),v(R,"href","https://github.com/tanhauhau"),v(R,"class","svelte-f3e4uo"),v(D,"class","social svelte-f3e4uo"),v(o,"class","svelte-f3e4uo"),v(n,"class","svelte-f3e4uo")},m(t,e){u(t,n,e),i(n,a),i(a,o),i(o,s),i(s,r),i(r,c),i(o,l),i(o,h),i(h,w),i(w,k),i(o,A),i(o,L),i(L,x),i(x,I),i(o,T),i(o,S),i(S,N),i(N,q),i(o,C),i(o,j),i(j,_),i(_,M),i(o,z),i(o,P),i(P,O),i(O,U),i(o,B),i(o,D),i(D,H),i(H,F),i(F,G),i(D,Q),i(D,R),i(R,V),i(V,W)},p:t,i:t,o:t,d(t){t&&f(n)}}}class V extends Q{constructor(t){super(),G(this,t,null,R,r,{})}}function W(t,e,n){const a=t.slice();return a[6]=e[n],a}function K(t,e,n){const a=t.slice();return a[6]=e[n],a}function J(t){let e,n;return{c(){e=p("meta"),this.h()},l(t){e=E(t,"META",{name:!0,content:!0}),this.h()},h(){v(e,"name","keywords"),v(e,"content",n=t[6])},m(t,n){u(t,e,n)},p(t,a){4&a&&n!==(n=t[6])&&v(e,"content",n)},d(t){t&&f(e)}}}function X(t){let e,n,a=t[6]+"";return{c(){e=p("span"),n=g(a),this.h()},l(t){e=E(t,"SPAN",{class:!0});var o=y(e);n=$(o,a),o.forEach(f),this.h()},h(){v(e,"class","svelte-186dllz")},m(t,a){u(t,e,a),i(e,n)},p(t,e){4&e&&a!==(a=t[6]+"")&&w(n,a)},d(t){t&&f(e)}}}function Y(t){let e,n,a,o,s,r,d,k,A,L,x,I,T,S,N,q,C,j;document.title=e="Note: "+t[1]+" | Tan Li Hau";let _=t[2],M=[];for(let e=0;e<_.length;e+=1)M[e]=J(K(t,_,e));L=new V({});let z=t[2],F=[];for(let e=0;e<z.length;e+=1)F[e]=X(W(t,z,e));const G=t[4].default,Q=function(t,e,n,a){if(t){const o=c(t,e,n,a);return t[0](o)}}(G,t,t[3],null);return{c(){n=p("link"),a=p("meta"),o=p("meta");for(let t=0;t<M.length;t+=1)M[t].c();s=p("meta"),r=m(),d=p("a"),k=g("Skip to content"),A=m(),U(L.$$.fragment),x=m(),I=p("main"),T=p("h1"),S=g(t[1]),N=m();for(let t=0;t<F.length;t+=1)F[t].c();q=m(),C=p("article"),Q&&Q.c(),this.h()},l(e){const c=function(t,e=document.body){return Array.from(e.querySelectorAll(t))}('[data-svelte="svelte-ywf7m8"]',document.head);n=E(c,"LINK",{href:!0,rel:!0}),a=E(c,"META",{name:!0,content:!0}),o=E(c,"META",{name:!0,content:!0});for(let t=0;t<M.length;t+=1)M[t].l(c);s=E(c,"META",{itemprop:!0,content:!0}),c.forEach(f),r=b(e),d=E(e,"A",{href:!0,class:!0});var l=y(d);k=$(l,"Skip to content"),l.forEach(f),A=b(e),B(L.$$.fragment,e),x=b(e),I=E(e,"MAIN",{id:!0,class:!0});var i=y(I);T=E(i,"H1",{});var u=y(T);S=$(u,t[1]),u.forEach(f),N=b(i);for(let t=0;t<F.length;t+=1)F[t].l(i);q=b(i),C=E(i,"ARTICLE",{class:!0});var h=y(C);Q&&Q.l(h),h.forEach(f),i.forEach(f),this.h()},h(){v(n,"href","https://lihautan.com/notes/building-my-gatsby-site/assets/blog-base-967d71e9.css"),v(n,"rel","stylesheet"),v(a,"name","og:title"),v(a,"content",t[0]),v(o,"name","og:type"),v(o,"content","website"),v(s,"itemprop","url"),v(s,"content","https%3A%2F%2Flihautan.com%2Fnotes%2Fbuilding-my-gatsby-site"),v(d,"href","#content"),v(d,"class","skip svelte-186dllz"),v(C,"class","svelte-186dllz"),v(I,"id","content"),v(I,"class","blog svelte-186dllz")},m(t,e){i(document.head,n),i(document.head,a),i(document.head,o);for(let t=0;t<M.length;t+=1)M[t].m(document.head,null);i(document.head,s),u(t,r,e),u(t,d,e),i(d,k),u(t,A,e),D(L,t,e),u(t,x,e),u(t,I,e),i(I,T),i(T,S),i(I,N);for(let t=0;t<F.length;t+=1)F[t].m(I,null);i(I,q),i(I,C),Q&&Q.m(C,null),j=!0},p(t,[n]){if((!j||2&n)&&e!==(e="Note: "+t[1]+" | Tan Li Hau")&&(document.title=e),(!j||1&n)&&v(a,"content",t[0]),4&n){let e;for(_=t[2],e=0;e<_.length;e+=1){const a=K(t,_,e);M[e]?M[e].p(a,n):(M[e]=J(a),M[e].c(),M[e].m(s.parentNode,s))}for(;e<M.length;e+=1)M[e].d(1);M.length=_.length}if((!j||2&n)&&w(S,t[1]),4&n){let e;for(z=t[2],e=0;e<z.length;e+=1){const a=W(t,z,e);F[e]?F[e].p(a,n):(F[e]=X(a),F[e].c(),F[e].m(I,q))}for(;e<F.length;e+=1)F[e].d(1);F.length=z.length}Q&&Q.p&&8&n&&l(Q,G,t,t[3],n,null,null)},i(t){j||(P(L.$$.fragment,t),P(Q,t),j=!0)},o(t){O(L.$$.fragment,t),O(Q,t),j=!1},d(t){f(n),f(a),f(o),h(M,t),f(s),t&&f(r),t&&f(d),t&&f(A),H(L,t),t&&f(x),t&&f(I),h(F,t),Q&&Q.d(t)}}}function Z(t,e,n){let{name:a}=e,{title:o}=e,{tags:s=[]}=e,{$$slots:r={},$$scope:c}=e;return t.$set=t=>{"name"in t&&n(0,a=t.name),"title"in t&&n(1,o=t.title),"tags"in t&&n(2,s=t.tags),"$$scope"in t&&n(3,c=t.$$scope)},[a,o,s,c,r]}class tt extends Q{constructor(t){super(),G(this,t,Z,Y,r,{name:0,title:1,tags:2})}}function et(e){let n,a,o,s,r,c,l,h,d,w,k,A,L,x,I,T,S,N,q,C,j,_,M,z,P,O,U,B,D,H,F,G,Q,R,V,W,K,J,X,Y,Z,tt,et,nt,at,ot,st,rt,ct,lt,it,ut,ft,ht,pt,dt,gt,mt,vt,yt,Et,$t,bt,wt,kt,At;return{c(){n=p("ul"),a=p("li"),o=g("write an article for what i've customised for my gatsby site"),s=p("ul"),r=p("li"),c=g("content in my head at the moment"),l=p("ul"),h=p("li"),d=g("dark mode"),w=m(),k=p("li"),A=g("plugin-emoji"),L=m(),x=p("li"),I=g("reorg on the article types"),T=m(),S=p("li"),N=g("plugin-caption (wip)"),q=m(),C=p("li"),j=g("rss feed"),_=m(),M=p("p"),z=g("[Added 14 Sept 2019]"),P=m(),O=p("ul"),U=p("li"),B=g("parameters that's available from "),D=p("code"),H=g("pageQuery"),F=g(", comes from "),G=p("code"),Q=g("context"),R=g(" when "),V=p("code"),W=g("createPage({})"),K=g(".\neg:"),J=m(),X=p("pre"),Y=m(),Z=p("ul"),tt=p("li"),et=p("p"),nt=g("if you are creating "),at=p("code"),ot=g("slug"),st=g(" from page url, and it contains "),rt=p("code"),ct=g("<space>"),lt=g(" characters, you might need to do\n"),it=p("code"),ut=g("slug.replace(/\\s+/g, '-')"),ft=g(" as browser will "),ht=p("code"),pt=g("encodeUriComponent"),dt=g(" of your path, and the slug may not match."),gt=m(),mt=p("li"),vt=p("p"),yt=g("graphql aliases "),Et=p("a"),$t=g("https://graphql.org/learn/queries/#aliases"),bt=m(),wt=p("ul"),kt=p("li"),At=g("allows you to rename the result field"),this.h()},l(t){n=E(t,"UL",{});var e=y(n);a=E(e,"LI",{});var i=y(a);o=$(i,"write an article for what i've customised for my gatsby site"),s=E(i,"UL",{});var u=y(s);r=E(u,"LI",{});var p=y(r);c=$(p,"content in my head at the moment"),l=E(p,"UL",{});var g=y(l);h=E(g,"LI",{});var m=y(h);d=$(m,"dark mode"),m.forEach(f),w=b(g),k=E(g,"LI",{});var v=y(k);A=$(v,"plugin-emoji"),v.forEach(f),L=b(g),x=E(g,"LI",{});var Lt=y(x);I=$(Lt,"reorg on the article types"),Lt.forEach(f),T=b(g),S=E(g,"LI",{});var xt=y(S);N=$(xt,"plugin-caption (wip)"),xt.forEach(f),q=b(g),C=E(g,"LI",{});var It=y(C);j=$(It,"rss feed"),It.forEach(f),g.forEach(f),p.forEach(f),u.forEach(f),i.forEach(f),e.forEach(f),_=b(t),M=E(t,"P",{});var Tt=y(M);z=$(Tt,"[Added 14 Sept 2019]"),Tt.forEach(f),P=b(t),O=E(t,"UL",{});var St=y(O);U=E(St,"LI",{});var Nt=y(U);B=$(Nt,"parameters that's available from "),D=E(Nt,"CODE",{});var qt=y(D);H=$(qt,"pageQuery"),qt.forEach(f),F=$(Nt,", comes from "),G=E(Nt,"CODE",{});var Ct=y(G);Q=$(Ct,"context"),Ct.forEach(f),R=$(Nt," when "),V=E(Nt,"CODE",{});var jt=y(V);W=$(jt,"createPage({})"),jt.forEach(f),K=$(Nt,".\neg:"),Nt.forEach(f),St.forEach(f),J=b(t),X=E(t,"PRE",{class:!0}),y(X).forEach(f),Y=b(t),Z=E(t,"UL",{});var _t=y(Z);tt=E(_t,"LI",{});var Mt=y(tt);et=E(Mt,"P",{});var zt=y(et);nt=$(zt,"if you are creating "),at=E(zt,"CODE",{});var Pt=y(at);ot=$(Pt,"slug"),Pt.forEach(f),st=$(zt," from page url, and it contains "),rt=E(zt,"CODE",{});var Ot=y(rt);ct=$(Ot,"<space>"),Ot.forEach(f),lt=$(zt," characters, you might need to do\n"),it=E(zt,"CODE",{});var Ut=y(it);ut=$(Ut,"slug.replace(/\\s+/g, '-')"),Ut.forEach(f),ft=$(zt," as browser will "),ht=E(zt,"CODE",{});var Bt=y(ht);pt=$(Bt,"encodeUriComponent"),Bt.forEach(f),dt=$(zt," of your path, and the slug may not match."),zt.forEach(f),Mt.forEach(f),gt=b(_t),mt=E(_t,"LI",{});var Dt=y(mt);vt=E(Dt,"P",{});var Ht=y(vt);yt=$(Ht,"graphql aliases "),Et=E(Ht,"A",{href:!0,rel:!0});var Ft=y(Et);$t=$(Ft,"https://graphql.org/learn/queries/#aliases"),Ft.forEach(f),Ht.forEach(f),bt=b(Dt),wt=E(Dt,"UL",{});var Gt=y(wt);kt=E(Gt,"LI",{});var Qt=y(kt);At=$(Qt,"allows you to rename the result field"),Qt.forEach(f),Gt.forEach(f),Dt.forEach(f),_t.forEach(f),this.h()},h(){v(X,"class","language-js"),v(Et,"href","https://graphql.org/learn/queries/#aliases"),v(Et,"rel","nofollow")},m(t,e){u(t,n,e),i(n,a),i(a,o),i(a,s),i(s,r),i(r,c),i(r,l),i(l,h),i(h,d),i(l,w),i(l,k),i(k,A),i(l,L),i(l,x),i(x,I),i(l,T),i(l,S),i(S,N),i(l,q),i(l,C),i(C,j),u(t,_,e),u(t,M,e),i(M,z),u(t,P,e),u(t,O,e),i(O,U),i(U,B),i(U,D),i(D,H),i(U,F),i(U,G),i(G,Q),i(U,R),i(U,V),i(V,W),i(U,K),u(t,J,e),u(t,X,e),X.innerHTML='<code class="language-js"><span class="token comment">// gatsby-node.js</span>\n<span class="token function">createPage</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n    context<span class="token punctuation">:</span> <span class="token punctuation">&#123;</span>\n        slug<span class="token punctuation">:</span> <span class="token string">\'123\'</span><span class="token punctuation">,</span>\n        foo<span class="token punctuation">:</span> <span class="token string">\'bar\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>\n\n<span class="token comment">// template/blog-post.js</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> pageQuery <span class="token operator">=</span> graphql<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">\n  query BlogPostBySlug($slug: String!, $foo: String!) &#123;\n  &#125;\n</span><span class="token template-punctuation string">&#96;</span></span></code>',u(t,Y,e),u(t,Z,e),i(Z,tt),i(tt,et),i(et,nt),i(et,at),i(at,ot),i(et,st),i(et,rt),i(rt,ct),i(et,lt),i(et,it),i(it,ut),i(et,ft),i(et,ht),i(ht,pt),i(et,dt),i(Z,gt),i(Z,mt),i(mt,vt),i(vt,yt),i(vt,Et),i(Et,$t),i(mt,bt),i(mt,wt),i(wt,kt),i(kt,At)},p:t,d(t){t&&f(n),t&&f(_),t&&f(M),t&&f(P),t&&f(O),t&&f(J),t&&f(X),t&&f(Y),t&&f(Z)}}}function nt(t){let n,a;const o=[at];let s={$$slots:{default:[et]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new tt({props:s}),{c(){U(n.$$.fragment)},l(t){B(n.$$.fragment,t)},m(t,e){D(n,t,e),a=!0},p(t,[e]){const a=0&e?function(t,e){const n={},a={},o={$$scope:1};let s=t.length;for(;s--;){const r=t[s],c=e[s];if(c){for(const t in r)t in c||(a[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in r)o[t]=1}for(const t in a)t in n||(n[t]=void 0);return n}(o,[(s=at,"object"==typeof s&&null!==s?s:{})]):{};var s;1&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a)},i(t){a||(P(n.$$.fragment,t),a=!0)},o(t){O(n.$$.fragment,t),a=!1},d(t){H(n,t)}}}const at={title:"Building my Gatsby Site",tags:["Gatsby"],slug:"notes/building-my-gatsby-site",type:"notes",name:"building-my-gatsby-site",layout:"note"};class ot extends Q{constructor(t){super(),G(this,t,null,nt,r,{})}}setTimeout(()=>{new ot({target:document.querySelector("#app"),hydrate:!0});if(document.querySelector(".twitter-tweet")){const t=document.createElement("script");t.async=!0,t.src="https://platform.twitter.com/widgets.js",t.charset="utf-8",document.body.appendChild(t)}if("loading"in HTMLImageElement.prototype){document.querySelectorAll('img[loading="lazy"]').forEach(t=>{t.src=t.dataset.src})}else{const t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js",document.body.appendChild(t)}},3e3);