function e(){}function t(e,t){for(const o in t)e[o]=t[o];return e}function o(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(o)}function a(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,o,n,r){return e[1]&&r?t(n.ctx.slice(),e[1](r(o))):n.ctx}function l(e,t,o,n,r,a,s){const l=function(e,t,o,n){if(e[2]&&n){const r=e[2](n(o));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],o=Math.max(t.dirty.length,r.length);for(let n=0;n<o;n+=1)e[n]=t.dirty[n]|r[n];return e}return t.dirty|r}return t.dirty}(t,n,r,a);if(l){const r=c(t,o,n,s);e.p(r,l)}}function i(e,t){e.appendChild(t)}function f(e,t,o){e.insertBefore(t,o||null)}function u(e){e.parentNode.removeChild(e)}function h(e,t){for(let o=0;o<e.length;o+=1)e[o]&&e[o].d(t)}function d(e){return document.createElement(e)}function m(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function p(e){return document.createTextNode(e)}function g(){return p(" ")}function v(e,t,o){null==o?e.removeAttribute(t):e.getAttribute(t)!==o&&e.setAttribute(t,o)}function E(e){return Array.from(e.childNodes)}function _(e,t,o,n){for(let n=0;n<e.length;n+=1){const r=e[n];if(r.nodeName===t){let t=0;const a=[];for(;t<r.attributes.length;){const e=r.attributes[t++];o[e.name]||a.push(e.name)}for(let e=0;e<a.length;e++)r.removeAttribute(a[e]);return e.splice(n,1)[0]}}return n?m(t):d(t)}function y(e,t){for(let o=0;o<e.length;o+=1){const n=e[o];if(3===n.nodeType)return n.data=""+t,e.splice(o,1)[0]}return p(t)}function $(e){return y(e," ")}function b(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let x;function w(e){x=e}const A=[],j=[],L=[],T=[],C=Promise.resolve();let N=!1;function I(e){L.push(e)}let O=!1;const S=new Set;function k(){if(!O){O=!0;do{for(let e=0;e<A.length;e+=1){const t=A[e];w(t),q(t.$$)}for(A.length=0;j.length;)j.pop()();for(let e=0;e<L.length;e+=1){const t=L[e];S.has(t)||(S.add(t),t())}L.length=0}while(A.length);for(;T.length;)T.pop()();N=!1,O=!1,S.clear()}}function q(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(I)}}const D=new Set;function M(e,t){e&&e.i&&(D.delete(e),e.i(t))}function z(e,t,o,n){if(e&&e.o){if(D.has(e))return;D.add(e),(void 0).c.push(()=>{D.delete(e),n&&(o&&e.d(1),n())}),e.o(t)}}function H(e){e&&e.c()}function R(e,t){e&&e.l(t)}function B(e,t,n){const{fragment:s,on_mount:c,on_destroy:l,after_update:i}=e.$$;s&&s.m(t,n),I(()=>{const t=c.map(o).filter(a);l?l.push(...t):r(t),e.$$.on_mount=[]}),i.forEach(I)}function F(e,t){const o=e.$$;null!==o.fragment&&(r(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function P(e,t){-1===e.$$.dirty[0]&&(A.push(e),N||(N=!0,C.then(k)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function G(t,o,a,s,c,l,i=[-1]){const f=x;w(t);const h=o.props||{},d=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:i};let m=!1;if(d.ctx=a?a(t,h,(e,o,...n)=>{const r=n.length?n[0]:o;return d.ctx&&c(d.ctx[e],d.ctx[e]=r)&&(d.bound[e]&&d.bound[e](r),m&&P(t,e)),o}):[],d.update(),m=!0,r(d.before_update),d.fragment=!!s&&s(d.ctx),o.target){if(o.hydrate){const e=E(o.target);d.fragment&&d.fragment.l(e),e.forEach(u)}else d.fragment&&d.fragment.c();o.intro&&M(t.$$.fragment),B(t,o.target,o.anchor),k()}w(f)}class U{$destroy(){F(this,1),this.$destroy=e}$on(e,t){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(t),()=>{const e=o.indexOf(t);-1!==e&&o.splice(e,1)}}$set(){}}function J(t){let o,n,r,a,s,c,l,h,b,x,w,A,j,L,T,C,N,I,O,S,k,q,D,M,z,H,R,B,F,P,G,U,J,V,W;return{c(){o=d("header"),n=d("nav"),r=d("ul"),a=d("li"),s=d("a"),c=p("Tan Li Hau"),l=g(),h=d("li"),b=d("a"),x=p("About"),w=g(),A=d("li"),j=d("a"),L=p("Writings"),T=g(),C=d("li"),N=d("a"),I=p("Talks"),O=g(),S=d("li"),k=d("a"),q=p("Notes"),D=g(),M=d("li"),z=d("a"),H=p("Newsletter"),R=g(),B=d("li"),F=d("a"),P=m("svg"),G=m("path"),U=g(),J=d("a"),V=m("svg"),W=m("path"),this.h()},l(e){o=_(e,"HEADER",{class:!0});var t=E(o);n=_(t,"NAV",{});var i=E(n);r=_(i,"UL",{class:!0});var f=E(r);a=_(f,"LI",{class:!0});var d=E(a);s=_(d,"A",{href:!0,class:!0});var m=E(s);c=y(m,"Tan Li Hau"),m.forEach(u),d.forEach(u),l=$(f),h=_(f,"LI",{class:!0});var p=E(h);b=_(p,"A",{href:!0,class:!0});var g=E(b);x=y(g,"About"),g.forEach(u),p.forEach(u),w=$(f),A=_(f,"LI",{class:!0});var v=E(A);j=_(v,"A",{href:!0,class:!0});var Y=E(j);L=y(Y,"Writings"),Y.forEach(u),v.forEach(u),T=$(f),C=_(f,"LI",{class:!0});var K=E(C);N=_(K,"A",{href:!0,class:!0});var Q=E(N);I=y(Q,"Talks"),Q.forEach(u),K.forEach(u),O=$(f),S=_(f,"LI",{class:!0});var X=E(S);k=_(X,"A",{href:!0,class:!0});var Z=E(k);q=y(Z,"Notes"),Z.forEach(u),X.forEach(u),D=$(f),M=_(f,"LI",{class:!0});var ee=E(M);z=_(ee,"A",{href:!0,class:!0});var te=E(z);H=y(te,"Newsletter"),te.forEach(u),ee.forEach(u),R=$(f),B=_(f,"LI",{class:!0});var oe=E(B);F=_(oe,"A",{"aria-label":!0,href:!0,class:!0});var ne=E(F);P=_(ne,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var re=E(P);G=_(re,"path",{d:!0},1),E(G).forEach(u),re.forEach(u),ne.forEach(u),U=$(oe),J=_(oe,"A",{"aria-label":!0,href:!0,class:!0});var ae=E(J);V=_(ae,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var se=E(V);W=_(se,"path",{d:!0},1),E(W).forEach(u),se.forEach(u),ae.forEach(u),oe.forEach(u),f.forEach(u),i.forEach(u),t.forEach(u),this.h()},h(){v(s,"href","/"),v(s,"class","svelte-f3e4uo"),v(a,"class","svelte-f3e4uo"),v(b,"href","/about"),v(b,"class","svelte-f3e4uo"),v(h,"class","svelte-f3e4uo"),v(j,"href","/blogs"),v(j,"class","svelte-f3e4uo"),v(A,"class","svelte-f3e4uo"),v(N,"href","/talks"),v(N,"class","svelte-f3e4uo"),v(C,"class","svelte-f3e4uo"),v(k,"href","/notes"),v(k,"class","svelte-f3e4uo"),v(S,"class","svelte-f3e4uo"),v(z,"href","/newsletter"),v(z,"class","svelte-f3e4uo"),v(M,"class","svelte-f3e4uo"),v(G,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),v(P,"viewBox","0 0 24 24"),v(P,"width","1em"),v(P,"height","1em"),v(P,"class","svelte-f3e4uo"),v(F,"aria-label","Twitter account"),v(F,"href","https://twitter.com/lihautan"),v(F,"class","svelte-f3e4uo"),v(W,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),v(V,"viewBox","0 0 24 24"),v(V,"width","1em"),v(V,"height","1em"),v(V,"class","svelte-f3e4uo"),v(J,"aria-label","Github account"),v(J,"href","https://github.com/tanhauhau"),v(J,"class","svelte-f3e4uo"),v(B,"class","social svelte-f3e4uo"),v(r,"class","svelte-f3e4uo"),v(o,"class","svelte-f3e4uo")},m(e,t){f(e,o,t),i(o,n),i(n,r),i(r,a),i(a,s),i(s,c),i(r,l),i(r,h),i(h,b),i(b,x),i(r,w),i(r,A),i(A,j),i(j,L),i(r,T),i(r,C),i(C,N),i(N,I),i(r,O),i(r,S),i(S,k),i(k,q),i(r,D),i(r,M),i(M,z),i(z,H),i(r,R),i(r,B),i(B,F),i(F,P),i(P,G),i(B,U),i(B,J),i(J,V),i(V,W)},p:e,i:e,o:e,d(e){e&&u(o)}}}class V extends U{constructor(e){super(),G(this,e,null,J,s,{})}}function W(e,t,o){const n=e.slice();return n[6]=t[o],n}function Y(e,t,o){const n=e.slice();return n[6]=t[o],n}function K(e){let t,o;return{c(){t=d("meta"),this.h()},l(e){t=_(e,"META",{name:!0,content:!0}),this.h()},h(){v(t,"name","keywords"),v(t,"content",o=e[6])},m(e,o){f(e,t,o)},p(e,n){4&n&&o!==(o=e[6])&&v(t,"content",o)},d(e){e&&u(t)}}}function Q(e){let t,o,n=e[6]+"";return{c(){t=d("span"),o=p(n),this.h()},l(e){t=_(e,"SPAN",{class:!0});var r=E(t);o=y(r,n),r.forEach(u),this.h()},h(){v(t,"class","svelte-186dllz")},m(e,n){f(e,t,n),i(t,o)},p(e,t){4&t&&n!==(n=e[6]+"")&&b(o,n)},d(e){e&&u(t)}}}function X(e){let t,o,n,r,a,s,m,x,w,A,j,L,T,C,N,I,O,S;document.title=t="Note: "+e[1]+" | Tan Li Hau";let k=e[2],q=[];for(let t=0;t<k.length;t+=1)q[t]=K(Y(e,k,t));A=new V({});let D=e[2],P=[];for(let t=0;t<D.length;t+=1)P[t]=Q(W(e,D,t));const G=e[4].default,U=function(e,t,o,n){if(e){const r=c(e,t,o,n);return e[0](r)}}(G,e,e[3],null);return{c(){o=d("link"),n=d("meta"),r=d("meta");for(let e=0;e<q.length;e+=1)q[e].c();a=d("meta"),s=g(),m=d("a"),x=p("Skip to content"),w=g(),H(A.$$.fragment),j=g(),L=d("main"),T=d("h1"),C=p(e[1]),N=g();for(let e=0;e<P.length;e+=1)P[e].c();I=g(),O=d("article"),U&&U.c(),this.h()},l(t){const c=function(e,t=document.body){return Array.from(t.querySelectorAll(e))}('[data-svelte="svelte-ywf7m8"]',document.head);o=_(c,"LINK",{href:!0,rel:!0}),n=_(c,"META",{name:!0,content:!0}),r=_(c,"META",{name:!0,content:!0});for(let e=0;e<q.length;e+=1)q[e].l(c);a=_(c,"META",{itemprop:!0,content:!0}),c.forEach(u),s=$(t),m=_(t,"A",{href:!0,class:!0});var l=E(m);x=y(l,"Skip to content"),l.forEach(u),w=$(t),R(A.$$.fragment,t),j=$(t),L=_(t,"MAIN",{id:!0,class:!0});var i=E(L);T=_(i,"H1",{});var f=E(T);C=y(f,e[1]),f.forEach(u),N=$(i);for(let e=0;e<P.length;e+=1)P[e].l(i);I=$(i),O=_(i,"ARTICLE",{class:!0});var h=E(O);U&&U.l(h),h.forEach(u),i.forEach(u),this.h()},h(){v(o,"href","https://lihautan.com/notes/node-experimental-modules/assets/blog-base-967d71e9.css"),v(o,"rel","stylesheet"),v(n,"name","og:title"),v(n,"content",e[0]),v(r,"name","og:type"),v(r,"content","website"),v(a,"itemprop","url"),v(a,"content","https%3A%2F%2Flihautan.com%2Fnotes%2Fnode-experimental-modules"),v(m,"href","#content"),v(m,"class","skip svelte-186dllz"),v(O,"class","svelte-186dllz"),v(L,"id","content"),v(L,"class","blog svelte-186dllz")},m(e,t){i(document.head,o),i(document.head,n),i(document.head,r);for(let e=0;e<q.length;e+=1)q[e].m(document.head,null);i(document.head,a),f(e,s,t),f(e,m,t),i(m,x),f(e,w,t),B(A,e,t),f(e,j,t),f(e,L,t),i(L,T),i(T,C),i(L,N);for(let e=0;e<P.length;e+=1)P[e].m(L,null);i(L,I),i(L,O),U&&U.m(O,null),S=!0},p(e,[o]){if((!S||2&o)&&t!==(t="Note: "+e[1]+" | Tan Li Hau")&&(document.title=t),(!S||1&o)&&v(n,"content",e[0]),4&o){let t;for(k=e[2],t=0;t<k.length;t+=1){const n=Y(e,k,t);q[t]?q[t].p(n,o):(q[t]=K(n),q[t].c(),q[t].m(a.parentNode,a))}for(;t<q.length;t+=1)q[t].d(1);q.length=k.length}if((!S||2&o)&&b(C,e[1]),4&o){let t;for(D=e[2],t=0;t<D.length;t+=1){const n=W(e,D,t);P[t]?P[t].p(n,o):(P[t]=Q(n),P[t].c(),P[t].m(L,I))}for(;t<P.length;t+=1)P[t].d(1);P.length=D.length}U&&U.p&&8&o&&l(U,G,e,e[3],o,null,null)},i(e){S||(M(A.$$.fragment,e),M(U,e),S=!0)},o(e){z(A.$$.fragment,e),z(U,e),S=!1},d(e){u(o),u(n),u(r),h(q,e),u(a),e&&u(s),e&&u(m),e&&u(w),F(A,e),e&&u(j),e&&u(L),h(P,e),U&&U.d(e)}}}function Z(e,t,o){let{name:n}=t,{title:r}=t,{tags:a=[]}=t,{$$slots:s={},$$scope:c}=t;return e.$set=e=>{"name"in e&&o(0,n=e.name),"title"in e&&o(1,r=e.title),"tags"in e&&o(2,a=e.tags),"$$scope"in e&&o(3,c=e.$$scope)},[n,r,a,c,s]}class ee extends U{constructor(e){super(),G(this,e,Z,X,s,{name:0,title:1,tags:2})}}function te(e){let t,o,n,r,a,s,c,l,h,m,b,x,w,A,j,L,T,C,N,I,O,S,k,q,D,M,z,H,R,B,F,P,G,U,J,V,W,Y,K,Q,X,Z,ee,te,oe,ne,re,ae,se,ce,le,ie,fe,ue,he,de,me,pe,ge,ve,Ee,_e,ye,$e,be,xe,we,Ae,je,Le,Te,Ce,Ne,Ie;return{c(){t=d("p"),o=p("To enable es module system in nodejs, it's not as simple as enabling the "),n=d("code"),r=p("--experimental-modules"),a=p(" flag."),s=g(),c=d("p"),l=p("You need:"),h=g(),m=d("ul"),b=d("li"),x=d("strong"),w=p("use "),A=d("code"),j=p(".mjs"),L=p(" file format to hint as a es module"),T=p(" or "),C=d("strong"),N=p("at the nearest "),I=d("code"),O=p("package.json"),S=p(", specify "),k=d("code"),q=p('"type": "module"'),D=g(),M=d("li"),z=p("use "),H=d("code"),R=p("import"),B=p(' statement to "require" the module file -> meaning your main file also need to be a '),F=d("code"),P=p(".mjs"),G=p(" file."),U=g(),J=d("li"),V=p('to replace all "require" and "module.exports" in '),W=d("code"),Y=p(".mjs"),K=p(" file to "),Q=d("code"),X=p("import"),Z=p("."),ee=d("ul"),te=d("li"),oe=p("as an escape hatch, you can use "),ne=d("a"),re=d("code"),ae=p("module.createRequire"),se=g(),ce=d("li"),le=p("see "),ie=d("a"),fe=p("https://nodejs.org/api/esm.html#esm_no_code_require_code_code_exports_code_code_module_exports_code_code_filename_code_code_dirname_code"),ue=g(),he=d("li"),de=p("es modules import file must specify extension, "),me=d("code"),pe=p(".mjs"),ge=p(" (es modules), "),ve=d("code"),Ee=p(".cjs"),_e=p(" (commonjs) or "),ye=d("code"),$e=p(".js"),be=p(" (depends on nearest "),xe=d("code"),we=p("package.json#type"),Ae=p(")."),je=g(),Le=d("li"),Te=p("for commonjs to import es modules, the only way is to use dynamic import "),Ce=d("code"),Ne=p("import()"),Ie=p("."),this.h()},l(e){t=_(e,"P",{});var i=E(t);o=y(i,"To enable es module system in nodejs, it's not as simple as enabling the "),n=_(i,"CODE",{});var f=E(n);r=y(f,"--experimental-modules"),f.forEach(u),a=y(i," flag."),i.forEach(u),s=$(e),c=_(e,"P",{});var d=E(c);l=y(d,"You need:"),d.forEach(u),h=$(e),m=_(e,"UL",{});var p=E(m);b=_(p,"LI",{});var g=E(b);x=_(g,"STRONG",{});var v=E(x);w=y(v,"use "),A=_(v,"CODE",{});var Oe=E(A);j=y(Oe,".mjs"),Oe.forEach(u),L=y(v," file format to hint as a es module"),v.forEach(u),T=y(g," or "),C=_(g,"STRONG",{});var Se=E(C);N=y(Se,"at the nearest "),I=_(Se,"CODE",{});var ke=E(I);O=y(ke,"package.json"),ke.forEach(u),S=y(Se,", specify "),k=_(Se,"CODE",{});var qe=E(k);q=y(qe,'"type": "module"'),qe.forEach(u),Se.forEach(u),g.forEach(u),D=$(p),M=_(p,"LI",{});var De=E(M);z=y(De,"use "),H=_(De,"CODE",{});var Me=E(H);R=y(Me,"import"),Me.forEach(u),B=y(De,' statement to "require" the module file -> meaning your main file also need to be a '),F=_(De,"CODE",{});var ze=E(F);P=y(ze,".mjs"),ze.forEach(u),G=y(De," file."),De.forEach(u),U=$(p),J=_(p,"LI",{});var He=E(J);V=y(He,'to replace all "require" and "module.exports" in '),W=_(He,"CODE",{});var Re=E(W);Y=y(Re,".mjs"),Re.forEach(u),K=y(He," file to "),Q=_(He,"CODE",{});var Be=E(Q);X=y(Be,"import"),Be.forEach(u),Z=y(He,"."),ee=_(He,"UL",{});var Fe=E(ee);te=_(Fe,"LI",{});var Pe=E(te);oe=y(Pe,"as an escape hatch, you can use "),ne=_(Pe,"A",{href:!0,rel:!0});var Ge=E(ne);re=_(Ge,"CODE",{});var Ue=E(re);ae=y(Ue,"module.createRequire"),Ue.forEach(u),Ge.forEach(u),Pe.forEach(u),se=$(Fe),ce=_(Fe,"LI",{});var Je=E(ce);le=y(Je,"see "),ie=_(Je,"A",{href:!0,rel:!0});var Ve=E(ie);fe=y(Ve,"https://nodejs.org/api/esm.html#esm_no_code_require_code_code_exports_code_code_module_exports_code_code_filename_code_code_dirname_code"),Ve.forEach(u),Je.forEach(u),Fe.forEach(u),He.forEach(u),ue=$(p),he=_(p,"LI",{});var We=E(he);de=y(We,"es modules import file must specify extension, "),me=_(We,"CODE",{});var Ye=E(me);pe=y(Ye,".mjs"),Ye.forEach(u),ge=y(We," (es modules), "),ve=_(We,"CODE",{});var Ke=E(ve);Ee=y(Ke,".cjs"),Ke.forEach(u),_e=y(We," (commonjs) or "),ye=_(We,"CODE",{});var Qe=E(ye);$e=y(Qe,".js"),Qe.forEach(u),be=y(We," (depends on nearest "),xe=_(We,"CODE",{});var Xe=E(xe);we=y(Xe,"package.json#type"),Xe.forEach(u),Ae=y(We,")."),We.forEach(u),je=$(p),Le=_(p,"LI",{});var Ze=E(Le);Te=y(Ze,"for commonjs to import es modules, the only way is to use dynamic import "),Ce=_(Ze,"CODE",{});var et=E(Ce);Ne=y(et,"import()"),et.forEach(u),Ie=y(Ze,"."),Ze.forEach(u),p.forEach(u),this.h()},h(){v(ne,"href","https://nodejs.org/api/modules.html#modules_module_createrequire_filename"),v(ne,"rel","nofollow"),v(ie,"href","https://nodejs.org/api/esm.html#esm_no_code_require_code_code_exports_code_code_module_exports_code_code_filename_code_code_dirname_code"),v(ie,"rel","nofollow")},m(e,u){f(e,t,u),i(t,o),i(t,n),i(n,r),i(t,a),f(e,s,u),f(e,c,u),i(c,l),f(e,h,u),f(e,m,u),i(m,b),i(b,x),i(x,w),i(x,A),i(A,j),i(x,L),i(b,T),i(b,C),i(C,N),i(C,I),i(I,O),i(C,S),i(C,k),i(k,q),i(m,D),i(m,M),i(M,z),i(M,H),i(H,R),i(M,B),i(M,F),i(F,P),i(M,G),i(m,U),i(m,J),i(J,V),i(J,W),i(W,Y),i(J,K),i(J,Q),i(Q,X),i(J,Z),i(J,ee),i(ee,te),i(te,oe),i(te,ne),i(ne,re),i(re,ae),i(ee,se),i(ee,ce),i(ce,le),i(ce,ie),i(ie,fe),i(m,ue),i(m,he),i(he,de),i(he,me),i(me,pe),i(he,ge),i(he,ve),i(ve,Ee),i(he,_e),i(he,ye),i(ye,$e),i(he,be),i(he,xe),i(xe,we),i(he,Ae),i(m,je),i(m,Le),i(Le,Te),i(Le,Ce),i(Ce,Ne),i(Le,Ie)},d(e){e&&u(t),e&&u(s),e&&u(c),e&&u(h),e&&u(m)}}}function oe(e){let o,n;const r=[ne];let a={$$slots:{default:[te]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)a=t(a,r[e]);return o=new ee({props:a}),{c(){H(o.$$.fragment)},l(e){R(o.$$.fragment,e)},m(e,t){B(o,e,t),n=!0},p(e,[t]){const n=0&t?function(e,t){const o={},n={},r={$$scope:1};let a=e.length;for(;a--;){const s=e[a],c=t[a];if(c){for(const e in s)e in c||(n[e]=1);for(const e in c)r[e]||(o[e]=c[e],r[e]=1);e[a]=c}else for(const e in s)r[e]=1}for(const e in n)e in o||(o[e]=void 0);return o}(r,[(a=ne,"object"==typeof a&&null!==a?a:{})]):{};var a;1&t&&(n.$$scope={dirty:t,ctx:e}),o.$set(n)},i(e){n||(M(o.$$.fragment,e),n=!0)},o(e){z(o.$$.fragment,e),n=!1},d(e){F(o,e)}}}const ne={title:"ESM in NodeJS",tags:["NodeJS","ESM"],slug:"notes/node-experimental-modules",type:"notes",name:"node-experimental-modules",layout:"note"};class re extends U{constructor(e){super(),G(this,e,null,oe,s,{})}}setTimeout(()=>{new re({target:document.querySelector("#app"),hydrate:!0});if(document.querySelector(".twitter-tweet")){const e=document.createElement("script");e.async=!0,e.src="https://platform.twitter.com/widgets.js",e.charset="utf-8",document.body.appendChild(e)}if("loading"in HTMLImageElement.prototype){document.querySelectorAll('img[loading="lazy"]').forEach(e=>{e.src=e.dataset.src})}else{const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js",document.body.appendChild(e)}},3e3);