function e(){}function t(e,t){for(const o in t)e[o]=t[o];return e}function o(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(o)}function a(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,o,n,r){return e[1]&&r?t(n.ctx.slice(),e[1](r(o))):n.ctx}function l(e,t,o,n,r,a,s){const l=function(e,t,o,n){if(e[2]&&n){const r=e[2](n(o));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],o=Math.max(t.dirty.length,r.length);for(let n=0;n<o;n+=1)e[n]=t.dirty[n]|r[n];return e}return t.dirty|r}return t.dirty}(t,n,r,a);if(l){const r=c(t,o,n,s);e.p(r,l)}}function i(e,t){e.appendChild(t)}function f(e,t,o){e.insertBefore(t,o||null)}function u(e){e.parentNode.removeChild(e)}function h(e,t){for(let o=0;o<e.length;o+=1)e[o]&&e[o].d(t)}function d(e){return document.createElement(e)}function m(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function p(e){return document.createTextNode(e)}function g(){return p(" ")}function v(e,t,o){null==o?e.removeAttribute(t):e.getAttribute(t)!==o&&e.setAttribute(t,o)}function E(e){return Array.from(e.childNodes)}function _(e,t,o,n){for(let n=0;n<e.length;n+=1){const r=e[n];if(r.nodeName===t){let t=0;const a=[];for(;t<r.attributes.length;){const e=r.attributes[t++];o[e.name]||a.push(e.name)}for(let e=0;e<a.length;e++)r.removeAttribute(a[e]);return e.splice(n,1)[0]}}return n?m(t):d(t)}function $(e,t){for(let o=0;o<e.length;o+=1){const n=e[o];if(3===n.nodeType)return n.data=""+t,e.splice(o,1)[0]}return p(t)}function y(e){return $(e," ")}function b(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let x;function w(e){x=e}const A=[],j=[],L=[],T=[],C=Promise.resolve();let N=!1;function O(e){L.push(e)}let q=!1;const I=new Set;function k(){if(!q){q=!0;do{for(let e=0;e<A.length;e+=1){const t=A[e];w(t),D(t.$$)}for(A.length=0;j.length;)j.pop()();for(let e=0;e<L.length;e+=1){const t=L[e];I.has(t)||(I.add(t),t())}L.length=0}while(A.length);for(;T.length;)T.pop()();N=!1,q=!1,I.clear()}}function D(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(O)}}const S=new Set;function M(e,t){e&&e.i&&(S.delete(e),e.i(t))}function H(e,t,o,n){if(e&&e.o){if(S.has(e))return;S.add(e),(void 0).c.push(()=>{S.delete(e),n&&(o&&e.d(1),n())}),e.o(t)}}function R(e){e&&e.c()}function B(e,t){e&&e.l(t)}function F(e,t,n){const{fragment:s,on_mount:c,on_destroy:l,after_update:i}=e.$$;s&&s.m(t,n),O(()=>{const t=c.map(o).filter(a);l?l.push(...t):r(t),e.$$.on_mount=[]}),i.forEach(O)}function P(e,t){const o=e.$$;null!==o.fragment&&(r(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function G(e,t){-1===e.$$.dirty[0]&&(A.push(e),N||(N=!0,C.then(k)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function U(t,o,a,s,c,l,i=[-1]){const f=x;w(t);const h=o.props||{},d=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:i};let m=!1;if(d.ctx=a?a(t,h,(e,o,...n)=>{const r=n.length?n[0]:o;return d.ctx&&c(d.ctx[e],d.ctx[e]=r)&&(d.bound[e]&&d.bound[e](r),m&&G(t,e)),o}):[],d.update(),m=!0,r(d.before_update),d.fragment=!!s&&s(d.ctx),o.target){if(o.hydrate){const e=E(o.target);d.fragment&&d.fragment.l(e),e.forEach(u)}else d.fragment&&d.fragment.c();o.intro&&M(t.$$.fragment),F(t,o.target,o.anchor),k()}w(f)}class z{$destroy(){P(this,1),this.$destroy=e}$on(e,t){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(t),()=>{const e=o.indexOf(t);-1!==e&&o.splice(e,1)}}$set(){}}function V(t){let o,n,r,a,s,c,l,h,b,x,w,A,j,L,T,C,N,O,q,I,k,D,S,M,H,R,B,F,P,G,U,z,V,W,Y;return{c(){o=d("header"),n=d("nav"),r=d("ul"),a=d("li"),s=d("a"),c=p("Tan Li Hau"),l=g(),h=d("li"),b=d("a"),x=p("About"),w=g(),A=d("li"),j=d("a"),L=p("Writings"),T=g(),C=d("li"),N=d("a"),O=p("Talks"),q=g(),I=d("li"),k=d("a"),D=p("Notes"),S=g(),M=d("li"),H=d("a"),R=p("Newsletter"),B=g(),F=d("li"),P=d("a"),G=m("svg"),U=m("path"),z=g(),V=d("a"),W=m("svg"),Y=m("path"),this.h()},l(e){o=_(e,"HEADER",{class:!0});var t=E(o);n=_(t,"NAV",{});var i=E(n);r=_(i,"UL",{class:!0});var f=E(r);a=_(f,"LI",{class:!0});var d=E(a);s=_(d,"A",{href:!0,class:!0});var m=E(s);c=$(m,"Tan Li Hau"),m.forEach(u),d.forEach(u),l=y(f),h=_(f,"LI",{class:!0});var p=E(h);b=_(p,"A",{href:!0,class:!0});var g=E(b);x=$(g,"About"),g.forEach(u),p.forEach(u),w=y(f),A=_(f,"LI",{class:!0});var v=E(A);j=_(v,"A",{href:!0,class:!0});var K=E(j);L=$(K,"Writings"),K.forEach(u),v.forEach(u),T=y(f),C=_(f,"LI",{class:!0});var J=E(C);N=_(J,"A",{href:!0,class:!0});var Q=E(N);O=$(Q,"Talks"),Q.forEach(u),J.forEach(u),q=y(f),I=_(f,"LI",{class:!0});var X=E(I);k=_(X,"A",{href:!0,class:!0});var Z=E(k);D=$(Z,"Notes"),Z.forEach(u),X.forEach(u),S=y(f),M=_(f,"LI",{class:!0});var ee=E(M);H=_(ee,"A",{href:!0,class:!0});var te=E(H);R=$(te,"Newsletter"),te.forEach(u),ee.forEach(u),B=y(f),F=_(f,"LI",{class:!0});var oe=E(F);P=_(oe,"A",{"aria-label":!0,href:!0,class:!0});var ne=E(P);G=_(ne,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var re=E(G);U=_(re,"path",{d:!0},1),E(U).forEach(u),re.forEach(u),ne.forEach(u),z=y(oe),V=_(oe,"A",{"aria-label":!0,href:!0,class:!0});var ae=E(V);W=_(ae,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var se=E(W);Y=_(se,"path",{d:!0},1),E(Y).forEach(u),se.forEach(u),ae.forEach(u),oe.forEach(u),f.forEach(u),i.forEach(u),t.forEach(u),this.h()},h(){v(s,"href","/"),v(s,"class","svelte-f3e4uo"),v(a,"class","svelte-f3e4uo"),v(b,"href","/about"),v(b,"class","svelte-f3e4uo"),v(h,"class","svelte-f3e4uo"),v(j,"href","/blogs"),v(j,"class","svelte-f3e4uo"),v(A,"class","svelte-f3e4uo"),v(N,"href","/talks"),v(N,"class","svelte-f3e4uo"),v(C,"class","svelte-f3e4uo"),v(k,"href","/notes"),v(k,"class","svelte-f3e4uo"),v(I,"class","svelte-f3e4uo"),v(H,"href","/newsletter"),v(H,"class","svelte-f3e4uo"),v(M,"class","svelte-f3e4uo"),v(U,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),v(G,"viewBox","0 0 24 24"),v(G,"width","1em"),v(G,"height","1em"),v(G,"class","svelte-f3e4uo"),v(P,"aria-label","Twitter account"),v(P,"href","https://twitter.com/lihautan"),v(P,"class","svelte-f3e4uo"),v(Y,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),v(W,"viewBox","0 0 24 24"),v(W,"width","1em"),v(W,"height","1em"),v(W,"class","svelte-f3e4uo"),v(V,"aria-label","Github account"),v(V,"href","https://github.com/tanhauhau"),v(V,"class","svelte-f3e4uo"),v(F,"class","social svelte-f3e4uo"),v(r,"class","svelte-f3e4uo"),v(o,"class","svelte-f3e4uo")},m(e,t){f(e,o,t),i(o,n),i(n,r),i(r,a),i(a,s),i(s,c),i(r,l),i(r,h),i(h,b),i(b,x),i(r,w),i(r,A),i(A,j),i(j,L),i(r,T),i(r,C),i(C,N),i(N,O),i(r,q),i(r,I),i(I,k),i(k,D),i(r,S),i(r,M),i(M,H),i(H,R),i(r,B),i(r,F),i(F,P),i(P,G),i(G,U),i(F,z),i(F,V),i(V,W),i(W,Y)},p:e,i:e,o:e,d(e){e&&u(o)}}}class W extends z{constructor(e){super(),U(this,e,null,V,s,{})}}function Y(e,t,o){const n=e.slice();return n[6]=t[o],n}function K(e,t,o){const n=e.slice();return n[6]=t[o],n}function J(e){let t,o;return{c(){t=d("meta"),this.h()},l(e){t=_(e,"META",{name:!0,content:!0}),this.h()},h(){v(t,"name","keywords"),v(t,"content",o=e[6])},m(e,o){f(e,t,o)},p(e,n){4&n&&o!==(o=e[6])&&v(t,"content",o)},d(e){e&&u(t)}}}function Q(e){let t,o,n=e[6]+"";return{c(){t=d("span"),o=p(n),this.h()},l(e){t=_(e,"SPAN",{class:!0});var r=E(t);o=$(r,n),r.forEach(u),this.h()},h(){v(t,"class","svelte-10cnqwo")},m(e,n){f(e,t,n),i(t,o)},p(e,t){4&t&&n!==(n=e[6]+"")&&b(o,n)},d(e){e&&u(t)}}}function X(e){let t,o,n,r,a,s,m,x,w,A,j,L,T,C,N,O,q,I,k,D;document.title=t="Note: "+e[1]+" "+e[0]+" | Tan Li Hau";let S=e[2],G=[];for(let t=0;t<S.length;t+=1)G[t]=J(K(e,S,t));A=new W({});let U=e[2],z=[];for(let t=0;t<U.length;t+=1)z[t]=Q(Y(e,U,t));const V=e[4].default,X=function(e,t,o,n){if(e){const r=c(e,t,o,n);return e[0](r)}}(V,e,e[3],null);return{c(){o=d("link"),n=d("meta"),r=d("meta");for(let e=0;e<G.length;e+=1)G[e].c();a=d("meta"),s=g(),m=d("a"),x=p("Skip to content"),w=g(),R(A.$$.fragment),j=g(),L=d("main"),T=d("h1"),C=p(e[1]),N=p(" - "),O=p(e[0]),q=g();for(let e=0;e<z.length;e+=1)z[e].c();I=g(),k=d("article"),X&&X.c(),this.h()},l(t){const c=function(e,t=document.body){return Array.from(t.querySelectorAll(e))}('[data-svelte="svelte-jez2i1"]',document.head);o=_(c,"LINK",{href:!0,rel:!0}),n=_(c,"META",{name:!0,content:!0}),r=_(c,"META",{name:!0,content:!0});for(let e=0;e<G.length;e+=1)G[e].l(c);a=_(c,"META",{itemprop:!0,content:!0}),c.forEach(u),s=y(t),m=_(t,"A",{href:!0,class:!0});var l=E(m);x=$(l,"Skip to content"),l.forEach(u),w=y(t),B(A.$$.fragment,t),j=y(t),L=_(t,"MAIN",{id:!0,class:!0});var i=E(L);T=_(i,"H1",{});var f=E(T);C=$(f,e[1]),N=$(f," - "),O=$(f,e[0]),f.forEach(u),q=y(i);for(let e=0;e<z.length;e+=1)z[e].l(i);I=y(i),k=_(i,"ARTICLE",{});var h=E(k);X&&X.l(h),h.forEach(u),i.forEach(u),this.h()},h(){v(o,"href","https://lihautan.com/notes/2019-09-30 - node experimental modules/assets/blog-base-ddb14eb9.css"),v(o,"rel","stylesheet"),v(n,"name","og:title"),v(n,"content",e[0]),v(r,"name","og:type"),v(r,"content","website"),v(a,"itemprop","url"),v(a,"content","https%3A%2F%2Flihautan.com%2Fnotes%2F2019-09-30%20-%20node%20experimental%20modules"),v(m,"href","#content"),v(m,"class","skip svelte-10cnqwo"),v(L,"id","content"),v(L,"class","blog svelte-10cnqwo")},m(e,t){i(document.head,o),i(document.head,n),i(document.head,r);for(let e=0;e<G.length;e+=1)G[e].m(document.head,null);i(document.head,a),f(e,s,t),f(e,m,t),i(m,x),f(e,w,t),F(A,e,t),f(e,j,t),f(e,L,t),i(L,T),i(T,C),i(T,N),i(T,O),i(L,q);for(let e=0;e<z.length;e+=1)z[e].m(L,null);i(L,I),i(L,k),X&&X.m(k,null),D=!0},p(e,[o]){if((!D||3&o)&&t!==(t="Note: "+e[1]+" "+e[0]+" | Tan Li Hau")&&(document.title=t),(!D||1&o)&&v(n,"content",e[0]),4&o){let t;for(S=e[2],t=0;t<S.length;t+=1){const n=K(e,S,t);G[t]?G[t].p(n,o):(G[t]=J(n),G[t].c(),G[t].m(a.parentNode,a))}for(;t<G.length;t+=1)G[t].d(1);G.length=S.length}if((!D||2&o)&&b(C,e[1]),(!D||1&o)&&b(O,e[0]),4&o){let t;for(U=e[2],t=0;t<U.length;t+=1){const n=Y(e,U,t);z[t]?z[t].p(n,o):(z[t]=Q(n),z[t].c(),z[t].m(L,I))}for(;t<z.length;t+=1)z[t].d(1);z.length=U.length}X&&X.p&&8&o&&l(X,V,e,e[3],o,null,null)},i(e){D||(M(A.$$.fragment,e),M(X,e),D=!0)},o(e){H(A.$$.fragment,e),H(X,e),D=!1},d(e){u(o),u(n),u(r),h(G,e),u(a),e&&u(s),e&&u(m),e&&u(w),P(A,e),e&&u(j),e&&u(L),h(z,e),X&&X.d(e)}}}function Z(e,t,o){let{name:n}=t,{date:r}=t,{tags:a=[]}=t,{$$slots:s={},$$scope:c}=t;return e.$set=e=>{"name"in e&&o(0,n=e.name),"date"in e&&o(1,r=e.date),"tags"in e&&o(2,a=e.tags),"$$scope"in e&&o(3,c=e.$$scope)},[n,r,a,c,s]}class ee extends z{constructor(e){super(),U(this,e,Z,X,s,{name:0,date:1,tags:2})}}function te(e){let t,o,n,r,a,s,c,l,h,m,b,x,w,A,j,L,T,C,N,O,q,I,k,D,S,M,H,R,B,F,P,G,U,z,V,W,Y,K,J,Q,X,Z,ee,te,oe,ne,re,ae,se,ce,le,ie,fe,ue,he,de,me,pe,ge,ve,Ee,_e,$e,ye,be,xe,we,Ae,je,Le,Te,Ce,Ne,Oe;return{c(){t=d("p"),o=p("To enable es module system in nodejs, it's not as simple as enabling the "),n=d("code"),r=p("--experimental-modules"),a=p(" flag."),s=g(),c=d("p"),l=p("You need:"),h=g(),m=d("ul"),b=d("li"),x=d("strong"),w=p("use "),A=d("code"),j=p(".mjs"),L=p(" file format to hint as a es module"),T=p(" or "),C=d("strong"),N=p("at the nearest "),O=d("code"),q=p("package.json"),I=p(", specify "),k=d("code"),D=p('"type": "module"'),S=g(),M=d("li"),H=p("use "),R=d("code"),B=p("import"),F=p(' statement to "require" the module file -> meaning your main file also need to be a '),P=d("code"),G=p(".mjs"),U=p(" file."),z=g(),V=d("li"),W=p('to replace all "require" and "module.exports" in '),Y=d("code"),K=p(".mjs"),J=p(" file to "),Q=d("code"),X=p("import"),Z=p("."),ee=d("ul"),te=d("li"),oe=p("as an escape hatch, you can use "),ne=d("a"),re=d("code"),ae=p("module.createRequire"),se=g(),ce=d("li"),le=p("see "),ie=d("a"),fe=p("https://nodejs.org/api/esm.html#esm_no_code_require_code_code_exports_code_code_module_exports_code_code_filename_code_code_dirname_code"),ue=g(),he=d("li"),de=p("es modules import file must specify extension, "),me=d("code"),pe=p(".mjs"),ge=p(" (es modules), "),ve=d("code"),Ee=p(".cjs"),_e=p(" (commonjs) or "),$e=d("code"),ye=p(".js"),be=p(" (depends on nearest "),xe=d("code"),we=p("package.json#type"),Ae=p(")."),je=g(),Le=d("li"),Te=p("for commonjs to import es modules, the only way is to use dynamic import "),Ce=d("code"),Ne=p("import()"),Oe=p("."),this.h()},l(e){t=_(e,"P",{});var i=E(t);o=$(i,"To enable es module system in nodejs, it's not as simple as enabling the "),n=_(i,"CODE",{});var f=E(n);r=$(f,"--experimental-modules"),f.forEach(u),a=$(i," flag."),i.forEach(u),s=y(e),c=_(e,"P",{});var d=E(c);l=$(d,"You need:"),d.forEach(u),h=y(e),m=_(e,"UL",{});var p=E(m);b=_(p,"LI",{});var g=E(b);x=_(g,"STRONG",{});var v=E(x);w=$(v,"use "),A=_(v,"CODE",{});var qe=E(A);j=$(qe,".mjs"),qe.forEach(u),L=$(v," file format to hint as a es module"),v.forEach(u),T=$(g," or "),C=_(g,"STRONG",{});var Ie=E(C);N=$(Ie,"at the nearest "),O=_(Ie,"CODE",{});var ke=E(O);q=$(ke,"package.json"),ke.forEach(u),I=$(Ie,", specify "),k=_(Ie,"CODE",{});var De=E(k);D=$(De,'"type": "module"'),De.forEach(u),Ie.forEach(u),g.forEach(u),S=y(p),M=_(p,"LI",{});var Se=E(M);H=$(Se,"use "),R=_(Se,"CODE",{});var Me=E(R);B=$(Me,"import"),Me.forEach(u),F=$(Se,' statement to "require" the module file -> meaning your main file also need to be a '),P=_(Se,"CODE",{});var He=E(P);G=$(He,".mjs"),He.forEach(u),U=$(Se," file."),Se.forEach(u),z=y(p),V=_(p,"LI",{});var Re=E(V);W=$(Re,'to replace all "require" and "module.exports" in '),Y=_(Re,"CODE",{});var Be=E(Y);K=$(Be,".mjs"),Be.forEach(u),J=$(Re," file to "),Q=_(Re,"CODE",{});var Fe=E(Q);X=$(Fe,"import"),Fe.forEach(u),Z=$(Re,"."),ee=_(Re,"UL",{});var Pe=E(ee);te=_(Pe,"LI",{});var Ge=E(te);oe=$(Ge,"as an escape hatch, you can use "),ne=_(Ge,"A",{href:!0,rel:!0});var Ue=E(ne);re=_(Ue,"CODE",{});var ze=E(re);ae=$(ze,"module.createRequire"),ze.forEach(u),Ue.forEach(u),Ge.forEach(u),se=y(Pe),ce=_(Pe,"LI",{});var Ve=E(ce);le=$(Ve,"see "),ie=_(Ve,"A",{href:!0,rel:!0});var We=E(ie);fe=$(We,"https://nodejs.org/api/esm.html#esm_no_code_require_code_code_exports_code_code_module_exports_code_code_filename_code_code_dirname_code"),We.forEach(u),Ve.forEach(u),Pe.forEach(u),Re.forEach(u),ue=y(p),he=_(p,"LI",{});var Ye=E(he);de=$(Ye,"es modules import file must specify extension, "),me=_(Ye,"CODE",{});var Ke=E(me);pe=$(Ke,".mjs"),Ke.forEach(u),ge=$(Ye," (es modules), "),ve=_(Ye,"CODE",{});var Je=E(ve);Ee=$(Je,".cjs"),Je.forEach(u),_e=$(Ye," (commonjs) or "),$e=_(Ye,"CODE",{});var Qe=E($e);ye=$(Qe,".js"),Qe.forEach(u),be=$(Ye," (depends on nearest "),xe=_(Ye,"CODE",{});var Xe=E(xe);we=$(Xe,"package.json#type"),Xe.forEach(u),Ae=$(Ye,")."),Ye.forEach(u),je=y(p),Le=_(p,"LI",{});var Ze=E(Le);Te=$(Ze,"for commonjs to import es modules, the only way is to use dynamic import "),Ce=_(Ze,"CODE",{});var et=E(Ce);Ne=$(et,"import()"),et.forEach(u),Oe=$(Ze,"."),Ze.forEach(u),p.forEach(u),this.h()},h(){v(ne,"href","https://nodejs.org/api/modules.html#modules_module_createrequire_filename"),v(ne,"rel","nofollow"),v(ie,"href","https://nodejs.org/api/esm.html#esm_no_code_require_code_code_exports_code_code_module_exports_code_code_filename_code_code_dirname_code"),v(ie,"rel","nofollow")},m(e,u){f(e,t,u),i(t,o),i(t,n),i(n,r),i(t,a),f(e,s,u),f(e,c,u),i(c,l),f(e,h,u),f(e,m,u),i(m,b),i(b,x),i(x,w),i(x,A),i(A,j),i(x,L),i(b,T),i(b,C),i(C,N),i(C,O),i(O,q),i(C,I),i(C,k),i(k,D),i(m,S),i(m,M),i(M,H),i(M,R),i(R,B),i(M,F),i(M,P),i(P,G),i(M,U),i(m,z),i(m,V),i(V,W),i(V,Y),i(Y,K),i(V,J),i(V,Q),i(Q,X),i(V,Z),i(V,ee),i(ee,te),i(te,oe),i(te,ne),i(ne,re),i(re,ae),i(ee,se),i(ee,ce),i(ce,le),i(ce,ie),i(ie,fe),i(m,ue),i(m,he),i(he,de),i(he,me),i(me,pe),i(he,ge),i(he,ve),i(ve,Ee),i(he,_e),i(he,$e),i($e,ye),i(he,be),i(he,xe),i(xe,we),i(he,Ae),i(m,je),i(m,Le),i(Le,Te),i(Le,Ce),i(Ce,Ne),i(Le,Oe)},d(e){e&&u(t),e&&u(s),e&&u(c),e&&u(h),e&&u(m)}}}function oe(e){let o,n;const r=[ne];let a={$$slots:{default:[te]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)a=t(a,r[e]);return o=new ee({props:a}),{c(){R(o.$$.fragment)},l(e){B(o.$$.fragment,e)},m(e,t){F(o,e,t),n=!0},p(e,[t]){const n=0&t?function(e,t){const o={},n={},r={$$scope:1};let a=e.length;for(;a--;){const s=e[a],c=t[a];if(c){for(const e in s)e in c||(n[e]=1);for(const e in c)r[e]||(o[e]=c[e],r[e]=1);e[a]=c}else for(const e in s)r[e]=1}for(const e in n)e in o||(o[e]=void 0);return o}(r,[(a=ne,"object"==typeof a&&null!==a?a:{})]):{};var a;1&t&&(n.$$scope={dirty:t,ctx:e}),o.$set(n)},i(e){n||(M(o.$$.fragment,e),n=!0)},o(e){H(o.$$.fragment,e),n=!1},d(e){P(o,e)}}}const ne={slug:"notes/2019-09-30 - node experimental modules",type:"notes",date:"2019-09-30",name:"node experimental modules",layout:"note"};class re extends z{constructor(e){super(),U(this,e,null,oe,s,{})}}setTimeout(()=>{new re({target:document.querySelector("#app"),hydrate:!0});if(document.querySelector(".twitter-tweet")){const e=document.createElement("script");e.async=!0,e.src="https://platform.twitter.com/widgets.js",e.charset="utf-8",document.body.appendChild(e)}},3e3);
