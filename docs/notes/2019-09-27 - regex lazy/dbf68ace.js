function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function a(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function l(t,e,n,o,r,a,c){const l=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,a);if(l){const r=s(e,n,o,c);t.p(r,l)}}function f(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function m(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function p(){return g(" ")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function E(t,e,n,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===e){let e=0;const a=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||a.push(t.name)}for(let t=0;t<a.length;t++)r.removeAttribute(a[t]);return t.splice(o,1)[0]}}return o?m(e):d(e)}function y(t,e){for(let n=0;n<t.length;n+=1){const o=t[n];if(3===o.nodeType)return o.data=""+e,t.splice(n,1)[0]}return g(e)}function w(t){return y(t," ")}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let A;function x(t){A=t}const L=[],N=[],T=[],_=[],k=Promise.resolve();let I=!1;function S(t){T.push(t)}let q=!1;const M=new Set;function z(){if(!q){q=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];x(e),j(e.$$)}for(L.length=0;N.length;)N.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];M.has(e)||(M.add(e),e())}T.length=0}while(L.length);for(;_.length;)_.pop()();I=!1,q=!1,M.clear()}}function j(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const C=new Set;function H(t,e){t&&t.i&&(C.delete(t),t.i(e))}function B(t,e,n,o){if(t&&t.o){if(C.has(t))return;C.add(t),(void 0).c.push(()=>{C.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function F(t){t&&t.c()}function P(t,e){t&&t.l(e)}function O(t,e,o){const{fragment:c,on_mount:s,on_destroy:l,after_update:f}=t.$$;c&&c.m(e,o),S(()=>{const e=s.map(n).filter(a);l?l.push(...e):r(e),t.$$.on_mount=[]}),f.forEach(S)}function D(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function R(t,e){-1===t.$$.dirty[0]&&(L.push(t),I||(I=!0,k.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(e,n,a,c,s,l,f=[-1]){const i=A;x(e);const h=n.props||{},d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:o(),dirty:f};let m=!1;if(d.ctx=a?a(e,h,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),m&&R(e,t)),n}):[],d.update(),m=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=$(n.target);d.fragment&&d.fragment.l(t),t.forEach(u)}else d.fragment&&d.fragment.c();n.intro&&H(e.$$.fragment),O(e,n.target,n.anchor),z()}x(i)}class W{$destroy(){D(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function G(e){let n,o,r,a,c,s,l,h,b,A,x,L,N,T,_,k,I,S,q,M,z,j,C,H,B,F,P,O,D,R,V,W,G,K,U;return{c(){n=d("header"),o=d("nav"),r=d("ul"),a=d("li"),c=d("a"),s=g("Tan Li Hau"),l=p(),h=d("li"),b=d("a"),A=g("About"),x=p(),L=d("li"),N=d("a"),T=g("Writings"),_=p(),k=d("li"),I=d("a"),S=g("Talks"),q=p(),M=d("li"),z=d("a"),j=g("Notes"),C=p(),H=d("li"),B=d("a"),F=g("Newsletter"),P=p(),O=d("li"),D=d("a"),R=m("svg"),V=m("path"),W=p(),G=d("a"),K=m("svg"),U=m("path"),this.h()},l(t){n=E(t,"HEADER",{class:!0});var e=$(n);o=E(e,"NAV",{});var f=$(o);r=E(f,"UL",{class:!0});var i=$(r);a=E(i,"LI",{class:!0});var d=$(a);c=E(d,"A",{href:!0,class:!0});var m=$(c);s=y(m,"Tan Li Hau"),m.forEach(u),d.forEach(u),l=w(i),h=E(i,"LI",{class:!0});var g=$(h);b=E(g,"A",{href:!0,class:!0});var p=$(b);A=y(p,"About"),p.forEach(u),g.forEach(u),x=w(i),L=E(i,"LI",{class:!0});var v=$(L);N=E(v,"A",{href:!0,class:!0});var J=$(N);T=y(J,"Writings"),J.forEach(u),v.forEach(u),_=w(i),k=E(i,"LI",{class:!0});var Q=$(k);I=E(Q,"A",{href:!0,class:!0});var X=$(I);S=y(X,"Talks"),X.forEach(u),Q.forEach(u),q=w(i),M=E(i,"LI",{class:!0});var Y=$(M);z=E(Y,"A",{href:!0,class:!0});var Z=$(z);j=y(Z,"Notes"),Z.forEach(u),Y.forEach(u),C=w(i),H=E(i,"LI",{class:!0});var tt=$(H);B=E(tt,"A",{href:!0,class:!0});var et=$(B);F=y(et,"Newsletter"),et.forEach(u),tt.forEach(u),P=w(i),O=E(i,"LI",{class:!0});var nt=$(O);D=E(nt,"A",{"aria-label":!0,href:!0,class:!0});var ot=$(D);R=E(ot,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var rt=$(R);V=E(rt,"path",{d:!0},1),$(V).forEach(u),rt.forEach(u),ot.forEach(u),W=w(nt),G=E(nt,"A",{"aria-label":!0,href:!0,class:!0});var at=$(G);K=E(at,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var ct=$(K);U=E(ct,"path",{d:!0},1),$(U).forEach(u),ct.forEach(u),at.forEach(u),nt.forEach(u),i.forEach(u),f.forEach(u),e.forEach(u),this.h()},h(){v(c,"href","/"),v(c,"class","svelte-f3e4uo"),v(a,"class","svelte-f3e4uo"),v(b,"href","/about"),v(b,"class","svelte-f3e4uo"),v(h,"class","svelte-f3e4uo"),v(N,"href","/blogs"),v(N,"class","svelte-f3e4uo"),v(L,"class","svelte-f3e4uo"),v(I,"href","/talks"),v(I,"class","svelte-f3e4uo"),v(k,"class","svelte-f3e4uo"),v(z,"href","/notes"),v(z,"class","svelte-f3e4uo"),v(M,"class","svelte-f3e4uo"),v(B,"href","/newsletter"),v(B,"class","svelte-f3e4uo"),v(H,"class","svelte-f3e4uo"),v(V,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),v(R,"viewBox","0 0 24 24"),v(R,"width","1em"),v(R,"height","1em"),v(R,"class","svelte-f3e4uo"),v(D,"aria-label","Twitter account"),v(D,"href","https://twitter.com/lihautan"),v(D,"class","svelte-f3e4uo"),v(U,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),v(K,"viewBox","0 0 24 24"),v(K,"width","1em"),v(K,"height","1em"),v(K,"class","svelte-f3e4uo"),v(G,"aria-label","Github account"),v(G,"href","https://github.com/tanhauhau"),v(G,"class","svelte-f3e4uo"),v(O,"class","social svelte-f3e4uo"),v(r,"class","svelte-f3e4uo"),v(n,"class","svelte-f3e4uo")},m(t,e){i(t,n,e),f(n,o),f(o,r),f(r,a),f(a,c),f(c,s),f(r,l),f(r,h),f(h,b),f(b,A),f(r,x),f(r,L),f(L,N),f(N,T),f(r,_),f(r,k),f(k,I),f(I,S),f(r,q),f(r,M),f(M,z),f(z,j),f(r,C),f(r,H),f(H,B),f(B,F),f(r,P),f(r,O),f(O,D),f(D,R),f(R,V),f(O,W),f(O,G),f(G,K),f(K,U)},p:t,i:t,o:t,d(t){t&&u(n)}}}class K extends W{constructor(t){super(),V(this,t,null,G,c,{})}}function U(t,e,n){const o=t.slice();return o[6]=e[n],o}function J(t,e,n){const o=t.slice();return o[6]=e[n],o}function Q(t){let e,n;return{c(){e=d("meta"),this.h()},l(t){e=E(t,"META",{name:!0,content:!0}),this.h()},h(){v(e,"name","keywords"),v(e,"content",n=t[6])},m(t,n){i(t,e,n)},p(t,o){4&o&&n!==(n=t[6])&&v(e,"content",n)},d(t){t&&u(e)}}}function X(t){let e,n,o=t[6]+"";return{c(){e=d("span"),n=g(o),this.h()},l(t){e=E(t,"SPAN",{class:!0});var r=$(e);n=y(r,o),r.forEach(u),this.h()},h(){v(e,"class","svelte-10cnqwo")},m(t,o){i(t,e,o),f(e,n)},p(t,e){4&e&&o!==(o=t[6]+"")&&b(n,o)},d(t){t&&u(e)}}}function Y(t){let e,n,o,r,a,c,m,A,x,L,N,T,_,k,I,S,q,M,z,j;document.title=e="Note: "+t[1]+" "+t[0]+" | Tan Li Hau";let C=t[2],R=[];for(let e=0;e<C.length;e+=1)R[e]=Q(J(t,C,e));L=new K({});let V=t[2],W=[];for(let e=0;e<V.length;e+=1)W[e]=X(U(t,V,e));const G=t[4].default,Y=function(t,e,n,o){if(t){const r=s(t,e,n,o);return t[0](r)}}(G,t,t[3],null);return{c(){n=d("link"),o=d("meta"),r=d("meta");for(let t=0;t<R.length;t+=1)R[t].c();a=d("meta"),c=p(),m=d("a"),A=g("Skip to content"),x=p(),F(L.$$.fragment),N=p(),T=d("main"),_=d("h1"),k=g(t[1]),I=g(" - "),S=g(t[0]),q=p();for(let t=0;t<W.length;t+=1)W[t].c();M=p(),z=d("article"),Y&&Y.c(),this.h()},l(e){const s=function(t,e=document.body){return Array.from(e.querySelectorAll(t))}('[data-svelte="svelte-jez2i1"]',document.head);n=E(s,"LINK",{href:!0,rel:!0}),o=E(s,"META",{name:!0,content:!0}),r=E(s,"META",{name:!0,content:!0});for(let t=0;t<R.length;t+=1)R[t].l(s);a=E(s,"META",{itemprop:!0,content:!0}),s.forEach(u),c=w(e),m=E(e,"A",{href:!0,class:!0});var l=$(m);A=y(l,"Skip to content"),l.forEach(u),x=w(e),P(L.$$.fragment,e),N=w(e),T=E(e,"MAIN",{id:!0,class:!0});var f=$(T);_=E(f,"H1",{});var i=$(_);k=y(i,t[1]),I=y(i," - "),S=y(i,t[0]),i.forEach(u),q=w(f);for(let t=0;t<W.length;t+=1)W[t].l(f);M=w(f),z=E(f,"ARTICLE",{});var h=$(z);Y&&Y.l(h),h.forEach(u),f.forEach(u),this.h()},h(){v(n,"href","https://lihautan.com/notes/2019-09-27 - regex lazy/assets/blog-base-ddb14eb9.css"),v(n,"rel","stylesheet"),v(o,"name","og:title"),v(o,"content",t[0]),v(r,"name","og:type"),v(r,"content","website"),v(a,"itemprop","url"),v(a,"content","https%3A%2F%2Flihautan.com%2Fnotes%2F2019-09-27%20-%20regex%20lazy"),v(m,"href","#content"),v(m,"class","skip svelte-10cnqwo"),v(T,"id","content"),v(T,"class","blog svelte-10cnqwo")},m(t,e){f(document.head,n),f(document.head,o),f(document.head,r);for(let t=0;t<R.length;t+=1)R[t].m(document.head,null);f(document.head,a),i(t,c,e),i(t,m,e),f(m,A),i(t,x,e),O(L,t,e),i(t,N,e),i(t,T,e),f(T,_),f(_,k),f(_,I),f(_,S),f(T,q);for(let t=0;t<W.length;t+=1)W[t].m(T,null);f(T,M),f(T,z),Y&&Y.m(z,null),j=!0},p(t,[n]){if((!j||3&n)&&e!==(e="Note: "+t[1]+" "+t[0]+" | Tan Li Hau")&&(document.title=e),(!j||1&n)&&v(o,"content",t[0]),4&n){let e;for(C=t[2],e=0;e<C.length;e+=1){const o=J(t,C,e);R[e]?R[e].p(o,n):(R[e]=Q(o),R[e].c(),R[e].m(a.parentNode,a))}for(;e<R.length;e+=1)R[e].d(1);R.length=C.length}if((!j||2&n)&&b(k,t[1]),(!j||1&n)&&b(S,t[0]),4&n){let e;for(V=t[2],e=0;e<V.length;e+=1){const o=U(t,V,e);W[e]?W[e].p(o,n):(W[e]=X(o),W[e].c(),W[e].m(T,M))}for(;e<W.length;e+=1)W[e].d(1);W.length=V.length}Y&&Y.p&&8&n&&l(Y,G,t,t[3],n,null,null)},i(t){j||(H(L.$$.fragment,t),H(Y,t),j=!0)},o(t){B(L.$$.fragment,t),B(Y,t),j=!1},d(t){u(n),u(o),u(r),h(R,t),u(a),t&&u(c),t&&u(m),t&&u(x),D(L,t),t&&u(N),t&&u(T),h(W,t),Y&&Y.d(t)}}}function Z(t,e,n){let{name:o}=e,{date:r}=e,{tags:a=[]}=e,{$$slots:c={},$$scope:s}=e;return t.$set=t=>{"name"in t&&n(0,o=t.name),"date"in t&&n(1,r=t.date),"tags"in t&&n(2,a=t.tags),"$$scope"in t&&n(3,s=t.$$scope)},[o,r,a,s,c]}class tt extends W{constructor(t){super(),V(this,t,Z,Y,c,{name:0,date:1,tags:2})}}function et(t){let e,n,o,r,a,c,s,l;return{c(){e=d("p"),n=g("Lazy quantifier in regex "),o=d("code"),r=g("?"),a=p(),c=d("p"),s=d("a"),l=g("https://twitter.com/lihautan/status/1177476277277560832"),this.h()},l(t){e=E(t,"P",{});var f=$(e);n=y(f,"Lazy quantifier in regex "),o=E(f,"CODE",{});var i=$(o);r=y(i,"?"),i.forEach(u),f.forEach(u),a=w(t),c=E(t,"P",{});var h=$(c);s=E(h,"A",{href:!0,rel:!0});var d=$(s);l=y(d,"https://twitter.com/lihautan/status/1177476277277560832"),d.forEach(u),h.forEach(u),this.h()},h(){v(s,"href","https://twitter.com/lihautan/status/1177476277277560832"),v(s,"rel","nofollow")},m(t,u){i(t,e,u),f(e,n),f(e,o),f(o,r),i(t,a,u),i(t,c,u),f(c,s),f(s,l)},d(t){t&&u(e),t&&u(a),t&&u(c)}}}function nt(t){let n,o;const r=[ot];let a={$$slots:{default:[et]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)a=e(a,r[t]);return n=new tt({props:a}),{c(){F(n.$$.fragment)},l(t){P(n.$$.fragment,t)},m(t,e){O(n,t,e),o=!0},p(t,[e]){const o=0&e?function(t,e){const n={},o={},r={$$scope:1};let a=t.length;for(;a--;){const c=t[a],s=e[a];if(s){for(const t in c)t in s||(o[t]=1);for(const t in s)r[t]||(n[t]=s[t],r[t]=1);t[a]=s}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(r,[(a=ot,"object"==typeof a&&null!==a?a:{})]):{};var a;1&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){o||(H(n.$$.fragment,t),o=!0)},o(t){B(n.$$.fragment,t),o=!1},d(t){D(n,t)}}}const ot={slug:"notes/2019-09-27 - regex lazy",type:"notes",date:"2019-09-27",name:"regex lazy",layout:"note"};class rt extends W{constructor(t){super(),V(this,t,null,nt,c,{})}}setTimeout(()=>{new rt({target:document.querySelector("#app"),hydrate:!0});if(document.querySelector(".twitter-tweet")){const t=document.createElement("script");t.async=!0,t.src="https://platform.twitter.com/widgets.js",t.charset="utf-8",document.body.appendChild(t)}},3e3);
