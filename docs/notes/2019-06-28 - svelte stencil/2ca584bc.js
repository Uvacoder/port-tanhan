function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function a(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function l(t,e,n,o,r,a,c){const l=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,a);if(l){const r=s(e,n,o,c);t.p(r,l)}}function i(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function m(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function p(t){return document.createTextNode(t)}function g(){return p(" ")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function y(t,e,n,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===e){let e=0;const a=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||a.push(t.name)}for(let t=0;t<a.length;t++)r.removeAttribute(a[t]);return t.splice(o,1)[0]}}return o?m(e):d(e)}function E(t,e){for(let n=0;n<t.length;n+=1){const o=t[n];if(3===o.nodeType)return o.data=""+e,t.splice(n,1)[0]}return p(e)}function b(t){return E(t," ")}function w(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let A;function x(t){A=t}const L=[],N=[],T=[],k=[],I=Promise.resolve();let _=!1;function S(t){T.push(t)}let M=!1;const q=new Set;function j(){if(!M){M=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];x(e),H(e.$$)}for(L.length=0;N.length;)N.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];q.has(e)||(q.add(e),e())}T.length=0}while(L.length);for(;k.length;)k.pop()();_=!1,M=!1,q.clear()}}function H(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const B=new Set;function C(t,e){t&&t.i&&(B.delete(t),t.i(e))}function F(t,e,n,o){if(t&&t.o){if(B.has(t))return;B.add(t),(void 0).c.push(()=>{B.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function U(t){t&&t.c()}function z(t,e){t&&t.l(e)}function O(t,e,o){const{fragment:c,on_mount:s,on_destroy:l,after_update:i}=t.$$;c&&c.m(e,o),S(()=>{const e=s.map(n).filter(a);l?l.push(...e):r(e),t.$$.on_mount=[]}),i.forEach(S)}function P(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function R(t,e){-1===t.$$.dirty[0]&&(L.push(t),_||(_=!0,I.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(e,n,a,c,s,l,i=[-1]){const f=A;x(e);const h=n.props||{},d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:i};let m=!1;if(d.ctx=a?a(e,h,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),m&&R(e,t)),n}):[],d.update(),m=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=$(n.target);d.fragment&&d.fragment.l(t),t.forEach(u)}else d.fragment&&d.fragment.c();n.intro&&C(e.$$.fragment),O(e,n.target,n.anchor),j()}x(f)}class W{$destroy(){P(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function D(e){let n,o,r,a,c,s,l,h,w,A,x,L,N,T,k,I,_,S,M,q,j,H,B,C,F,U,z,O,P,R,V,W,D,G,K;return{c(){n=d("header"),o=d("nav"),r=d("ul"),a=d("li"),c=d("a"),s=p("Tan Li Hau"),l=g(),h=d("li"),w=d("a"),A=p("About"),x=g(),L=d("li"),N=d("a"),T=p("Writings"),k=g(),I=d("li"),_=d("a"),S=p("Talks"),M=g(),q=d("li"),j=d("a"),H=p("Notes"),B=g(),C=d("li"),F=d("a"),U=p("Newsletter"),z=g(),O=d("li"),P=d("a"),R=m("svg"),V=m("path"),W=g(),D=d("a"),G=m("svg"),K=m("path"),this.h()},l(t){n=y(t,"HEADER",{class:!0});var e=$(n);o=y(e,"NAV",{});var i=$(o);r=y(i,"UL",{class:!0});var f=$(r);a=y(f,"LI",{class:!0});var d=$(a);c=y(d,"A",{href:!0,class:!0});var m=$(c);s=E(m,"Tan Li Hau"),m.forEach(u),d.forEach(u),l=b(f),h=y(f,"LI",{class:!0});var p=$(h);w=y(p,"A",{href:!0,class:!0});var g=$(w);A=E(g,"About"),g.forEach(u),p.forEach(u),x=b(f),L=y(f,"LI",{class:!0});var v=$(L);N=y(v,"A",{href:!0,class:!0});var J=$(N);T=E(J,"Writings"),J.forEach(u),v.forEach(u),k=b(f),I=y(f,"LI",{class:!0});var Q=$(I);_=y(Q,"A",{href:!0,class:!0});var X=$(_);S=E(X,"Talks"),X.forEach(u),Q.forEach(u),M=b(f),q=y(f,"LI",{class:!0});var Y=$(q);j=y(Y,"A",{href:!0,class:!0});var Z=$(j);H=E(Z,"Notes"),Z.forEach(u),Y.forEach(u),B=b(f),C=y(f,"LI",{class:!0});var tt=$(C);F=y(tt,"A",{href:!0,class:!0});var et=$(F);U=E(et,"Newsletter"),et.forEach(u),tt.forEach(u),z=b(f),O=y(f,"LI",{class:!0});var nt=$(O);P=y(nt,"A",{"aria-label":!0,href:!0,class:!0});var ot=$(P);R=y(ot,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var rt=$(R);V=y(rt,"path",{d:!0},1),$(V).forEach(u),rt.forEach(u),ot.forEach(u),W=b(nt),D=y(nt,"A",{"aria-label":!0,href:!0,class:!0});var at=$(D);G=y(at,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var ct=$(G);K=y(ct,"path",{d:!0},1),$(K).forEach(u),ct.forEach(u),at.forEach(u),nt.forEach(u),f.forEach(u),i.forEach(u),e.forEach(u),this.h()},h(){v(c,"href","/"),v(c,"class","svelte-f3e4uo"),v(a,"class","svelte-f3e4uo"),v(w,"href","/about"),v(w,"class","svelte-f3e4uo"),v(h,"class","svelte-f3e4uo"),v(N,"href","/blogs"),v(N,"class","svelte-f3e4uo"),v(L,"class","svelte-f3e4uo"),v(_,"href","/talks"),v(_,"class","svelte-f3e4uo"),v(I,"class","svelte-f3e4uo"),v(j,"href","/notes"),v(j,"class","svelte-f3e4uo"),v(q,"class","svelte-f3e4uo"),v(F,"href","/newsletter"),v(F,"class","svelte-f3e4uo"),v(C,"class","svelte-f3e4uo"),v(V,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),v(R,"viewBox","0 0 24 24"),v(R,"width","1em"),v(R,"height","1em"),v(R,"class","svelte-f3e4uo"),v(P,"aria-label","Twitter account"),v(P,"href","https://twitter.com/lihautan"),v(P,"class","svelte-f3e4uo"),v(K,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),v(G,"viewBox","0 0 24 24"),v(G,"width","1em"),v(G,"height","1em"),v(G,"class","svelte-f3e4uo"),v(D,"aria-label","Github account"),v(D,"href","https://github.com/tanhauhau"),v(D,"class","svelte-f3e4uo"),v(O,"class","social svelte-f3e4uo"),v(r,"class","svelte-f3e4uo"),v(n,"class","svelte-f3e4uo")},m(t,e){f(t,n,e),i(n,o),i(o,r),i(r,a),i(a,c),i(c,s),i(r,l),i(r,h),i(h,w),i(w,A),i(r,x),i(r,L),i(L,N),i(N,T),i(r,k),i(r,I),i(I,_),i(_,S),i(r,M),i(r,q),i(q,j),i(j,H),i(r,B),i(r,C),i(C,F),i(F,U),i(r,z),i(r,O),i(O,P),i(P,R),i(R,V),i(O,W),i(O,D),i(D,G),i(G,K)},p:t,i:t,o:t,d(t){t&&u(n)}}}class G extends W{constructor(t){super(),V(this,t,null,D,c,{})}}function K(t,e,n){const o=t.slice();return o[6]=e[n],o}function J(t,e,n){const o=t.slice();return o[6]=e[n],o}function Q(t){let e,n;return{c(){e=d("meta"),this.h()},l(t){e=y(t,"META",{name:!0,content:!0}),this.h()},h(){v(e,"name","keywords"),v(e,"content",n=t[6])},m(t,n){f(t,e,n)},p(t,o){4&o&&n!==(n=t[6])&&v(e,"content",n)},d(t){t&&u(e)}}}function X(t){let e,n,o=t[6]+"";return{c(){e=d("span"),n=p(o),this.h()},l(t){e=y(t,"SPAN",{class:!0});var r=$(e);n=E(r,o),r.forEach(u),this.h()},h(){v(e,"class","svelte-10cnqwo")},m(t,o){f(t,e,o),i(e,n)},p(t,e){4&e&&o!==(o=t[6]+"")&&w(n,o)},d(t){t&&u(e)}}}function Y(t){let e,n,o,r,a,c,m,A,x,L,N,T,k,I,_,S,M,q,j,H;document.title=e="Note: "+t[1]+" "+t[0]+" | Tan Li Hau";let B=t[2],R=[];for(let e=0;e<B.length;e+=1)R[e]=Q(J(t,B,e));L=new G({});let V=t[2],W=[];for(let e=0;e<V.length;e+=1)W[e]=X(K(t,V,e));const D=t[4].default,Y=function(t,e,n,o){if(t){const r=s(t,e,n,o);return t[0](r)}}(D,t,t[3],null);return{c(){n=d("link"),o=d("meta"),r=d("meta");for(let t=0;t<R.length;t+=1)R[t].c();a=d("meta"),c=g(),m=d("a"),A=p("Skip to content"),x=g(),U(L.$$.fragment),N=g(),T=d("main"),k=d("h1"),I=p(t[1]),_=p(" - "),S=p(t[0]),M=g();for(let t=0;t<W.length;t+=1)W[t].c();q=g(),j=d("article"),Y&&Y.c(),this.h()},l(e){const s=function(t,e=document.body){return Array.from(e.querySelectorAll(t))}('[data-svelte="svelte-jez2i1"]',document.head);n=y(s,"LINK",{href:!0,rel:!0}),o=y(s,"META",{name:!0,content:!0}),r=y(s,"META",{name:!0,content:!0});for(let t=0;t<R.length;t+=1)R[t].l(s);a=y(s,"META",{itemprop:!0,content:!0}),s.forEach(u),c=b(e),m=y(e,"A",{href:!0,class:!0});var l=$(m);A=E(l,"Skip to content"),l.forEach(u),x=b(e),z(L.$$.fragment,e),N=b(e),T=y(e,"MAIN",{id:!0,class:!0});var i=$(T);k=y(i,"H1",{});var f=$(k);I=E(f,t[1]),_=E(f," - "),S=E(f,t[0]),f.forEach(u),M=b(i);for(let t=0;t<W.length;t+=1)W[t].l(i);q=b(i),j=y(i,"ARTICLE",{});var h=$(j);Y&&Y.l(h),h.forEach(u),i.forEach(u),this.h()},h(){v(n,"href","https://lihautan.com/notes/2019-06-28 - svelte stencil/assets/blog-base-ddb14eb9.css"),v(n,"rel","stylesheet"),v(o,"name","og:title"),v(o,"content",t[0]),v(r,"name","og:type"),v(r,"content","website"),v(a,"itemprop","url"),v(a,"content","https%3A%2F%2Flihautan.com%2Fnotes%2F2019-06-28%20-%20svelte%20stencil"),v(m,"href","#content"),v(m,"class","skip svelte-10cnqwo"),v(T,"id","content"),v(T,"class","blog svelte-10cnqwo")},m(t,e){i(document.head,n),i(document.head,o),i(document.head,r);for(let t=0;t<R.length;t+=1)R[t].m(document.head,null);i(document.head,a),f(t,c,e),f(t,m,e),i(m,A),f(t,x,e),O(L,t,e),f(t,N,e),f(t,T,e),i(T,k),i(k,I),i(k,_),i(k,S),i(T,M);for(let t=0;t<W.length;t+=1)W[t].m(T,null);i(T,q),i(T,j),Y&&Y.m(j,null),H=!0},p(t,[n]){if((!H||3&n)&&e!==(e="Note: "+t[1]+" "+t[0]+" | Tan Li Hau")&&(document.title=e),(!H||1&n)&&v(o,"content",t[0]),4&n){let e;for(B=t[2],e=0;e<B.length;e+=1){const o=J(t,B,e);R[e]?R[e].p(o,n):(R[e]=Q(o),R[e].c(),R[e].m(a.parentNode,a))}for(;e<R.length;e+=1)R[e].d(1);R.length=B.length}if((!H||2&n)&&w(I,t[1]),(!H||1&n)&&w(S,t[0]),4&n){let e;for(V=t[2],e=0;e<V.length;e+=1){const o=K(t,V,e);W[e]?W[e].p(o,n):(W[e]=X(o),W[e].c(),W[e].m(T,q))}for(;e<W.length;e+=1)W[e].d(1);W.length=V.length}Y&&Y.p&&8&n&&l(Y,D,t,t[3],n,null,null)},i(t){H||(C(L.$$.fragment,t),C(Y,t),H=!0)},o(t){F(L.$$.fragment,t),F(Y,t),H=!1},d(t){u(n),u(o),u(r),h(R,t),u(a),t&&u(c),t&&u(m),t&&u(x),P(L,t),t&&u(N),t&&u(T),h(W,t),Y&&Y.d(t)}}}function Z(t,e,n){let{name:o}=e,{date:r}=e,{tags:a=[]}=e,{$$slots:c={},$$scope:s}=e;return t.$set=t=>{"name"in t&&n(0,o=t.name),"date"in t&&n(1,r=t.date),"tags"in t&&n(2,a=t.tags),"$$scope"in t&&n(3,s=t.$$scope)},[o,r,a,s,c]}class tt extends W{constructor(t){super(),V(this,t,Z,Y,c,{name:0,date:1,tags:2})}}function et(t){let e,n,o,r,a,c,s,l,h,m,w,A,x,L;return{c(){e=d("ul"),n=d("li"),o=p("suncc did a sharing on "),r=d("a"),a=p("yet another framework: stencil & svelte"),c=g(),s=d("li"),l=p("static vs dyanamic elemement"),h=g(),m=d("li"),w=p("dynamic attributes, dynamic components"),A=d("ul"),x=d("li"),L=p("init/mount, update, destroy"),this.h()},l(t){e=y(t,"UL",{});var i=$(e);n=y(i,"LI",{});var f=$(n);o=E(f,"suncc did a sharing on "),r=y(f,"A",{href:!0,rel:!0});var d=$(r);a=E(d,"yet another framework: stencil & svelte"),d.forEach(u),f.forEach(u),c=b(i),s=y(i,"LI",{});var p=$(s);l=E(p,"static vs dyanamic elemement"),p.forEach(u),h=b(i),m=y(i,"LI",{});var g=$(m);w=E(g,"dynamic attributes, dynamic components"),A=y(g,"UL",{});var v=$(A);x=y(v,"LI",{});var N=$(x);L=E(N,"init/mount, update, destroy"),N.forEach(u),v.forEach(u),g.forEach(u),i.forEach(u),this.h()},h(){v(r,"href","https://slides.com/chenchensun/deck"),v(r,"rel","nofollow")},m(t,u){f(t,e,u),i(e,n),i(n,o),i(n,r),i(r,a),i(e,c),i(e,s),i(s,l),i(e,h),i(e,m),i(m,w),i(m,A),i(A,x),i(x,L)},d(t){t&&u(e)}}}function nt(t){let n,o;const r=[ot];let a={$$slots:{default:[et]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)a=e(a,r[t]);return n=new tt({props:a}),{c(){U(n.$$.fragment)},l(t){z(n.$$.fragment,t)},m(t,e){O(n,t,e),o=!0},p(t,[e]){const o=0&e?function(t,e){const n={},o={},r={$$scope:1};let a=t.length;for(;a--;){const c=t[a],s=e[a];if(s){for(const t in c)t in s||(o[t]=1);for(const t in s)r[t]||(n[t]=s[t],r[t]=1);t[a]=s}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(r,[(a=ot,"object"==typeof a&&null!==a?a:{})]):{};var a;1&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){o||(C(n.$$.fragment,t),o=!0)},o(t){F(n.$$.fragment,t),o=!1},d(t){P(n,t)}}}const ot={slug:"notes/2019-06-28 - svelte stencil",type:"notes",date:"2019-06-28",name:"svelte stencil",layout:"note"};class rt extends W{constructor(t){super(),V(this,t,null,nt,c,{})}}setTimeout(()=>{new rt({target:document.querySelector("#app"),hydrate:!0});if(document.querySelector(".twitter-tweet")){const t=document.createElement("script");t.async=!0,t.src="https://platform.twitter.com/widgets.js",t.charset="utf-8",document.body.appendChild(t)}},3e3);
