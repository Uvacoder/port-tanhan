function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function c(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function l(t,e,n,o,r,c,a){const l=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,c);if(l){const r=s(e,n,o,a);t.p(r,l)}}function i(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function p(){return m(" ")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function y(t,e,n,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===e){let e=0;const c=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||c.push(t.name)}for(let t=0;t<c.length;t++)r.removeAttribute(c[t]);return t.splice(o,1)[0]}}return o?g(e):d(e)}function E(t,e){for(let n=0;n<t.length;n+=1){const o=t[n];if(3===o.nodeType)return o.data=""+e,t.splice(n,1)[0]}return m(e)}function b(t){return E(t," ")}function w(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let A;function x(t){A=t}const T=[],N=[],L=[],I=[],F=Promise.resolve();let _=!1;function k(t){L.push(t)}let M=!1;const S=new Set;function R(){if(!M){M=!0;do{for(let t=0;t<T.length;t+=1){const e=T[t];x(e),j(e.$$)}for(T.length=0;N.length;)N.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];S.has(e)||(S.add(e),e())}L.length=0}while(T.length);for(;I.length;)I.pop()();_=!1,M=!1,S.clear()}}function j(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const q=new Set;function H(t,e){t&&t.i&&(q.delete(t),t.i(e))}function z(t,e,n,o){if(t&&t.o){if(q.has(t))return;q.add(t),(void 0).c.push(()=>{q.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function C(t){t&&t.c()}function D(t,e){t&&t.l(e)}function B(t,e,o){const{fragment:a,on_mount:s,on_destroy:l,after_update:i}=t.$$;a&&a.m(e,o),k(()=>{const e=s.map(n).filter(c);l?l.push(...e):r(e),t.$$.on_mount=[]}),i.forEach(k)}function P(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function O(t,e){-1===t.$$.dirty[0]&&(T.push(t),_||(_=!0,F.then(R)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(e,n,c,a,s,l,i=[-1]){const u=A;x(e);const h=n.props||{},d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:i};let g=!1;if(d.ctx=c?c(e,h,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),g&&O(e,t)),n}):[],d.update(),g=!0,r(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=$(n.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();n.intro&&H(e.$$.fragment),B(e,n.target,n.anchor),R()}x(u)}class W{$destroy(){P(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function G(e){let n,o,r,c,a,s,l,h,w,A,x,T,N,L,I,F,_,k,M,S,R,j,q,H,z,C,D,B,P,O,V,W,G,J,K;return{c(){n=d("header"),o=d("nav"),r=d("ul"),c=d("li"),a=d("a"),s=m("Tan Li Hau"),l=p(),h=d("li"),w=d("a"),A=m("About"),x=p(),T=d("li"),N=d("a"),L=m("Writings"),I=p(),F=d("li"),_=d("a"),k=m("Talks"),M=p(),S=d("li"),R=d("a"),j=m("Notes"),q=p(),H=d("li"),z=d("a"),C=m("Newsletter"),D=p(),B=d("li"),P=d("a"),O=g("svg"),V=g("path"),W=p(),G=d("a"),J=g("svg"),K=g("path"),this.h()},l(t){n=y(t,"HEADER",{class:!0});var e=$(n);o=y(e,"NAV",{});var i=$(o);r=y(i,"UL",{class:!0});var u=$(r);c=y(u,"LI",{class:!0});var d=$(c);a=y(d,"A",{href:!0,class:!0});var g=$(a);s=E(g,"Tan Li Hau"),g.forEach(f),d.forEach(f),l=b(u),h=y(u,"LI",{class:!0});var m=$(h);w=y(m,"A",{href:!0,class:!0});var p=$(w);A=E(p,"About"),p.forEach(f),m.forEach(f),x=b(u),T=y(u,"LI",{class:!0});var v=$(T);N=y(v,"A",{href:!0,class:!0});var U=$(N);L=E(U,"Writings"),U.forEach(f),v.forEach(f),I=b(u),F=y(u,"LI",{class:!0});var Q=$(F);_=y(Q,"A",{href:!0,class:!0});var X=$(_);k=E(X,"Talks"),X.forEach(f),Q.forEach(f),M=b(u),S=y(u,"LI",{class:!0});var Y=$(S);R=y(Y,"A",{href:!0,class:!0});var Z=$(R);j=E(Z,"Notes"),Z.forEach(f),Y.forEach(f),q=b(u),H=y(u,"LI",{class:!0});var tt=$(H);z=y(tt,"A",{href:!0,class:!0});var et=$(z);C=E(et,"Newsletter"),et.forEach(f),tt.forEach(f),D=b(u),B=y(u,"LI",{class:!0});var nt=$(B);P=y(nt,"A",{"aria-label":!0,href:!0,class:!0});var ot=$(P);O=y(ot,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var rt=$(O);V=y(rt,"path",{d:!0},1),$(V).forEach(f),rt.forEach(f),ot.forEach(f),W=b(nt),G=y(nt,"A",{"aria-label":!0,href:!0,class:!0});var ct=$(G);J=y(ct,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var at=$(J);K=y(at,"path",{d:!0},1),$(K).forEach(f),at.forEach(f),ct.forEach(f),nt.forEach(f),u.forEach(f),i.forEach(f),e.forEach(f),this.h()},h(){v(a,"href","/"),v(a,"class","svelte-f3e4uo"),v(c,"class","svelte-f3e4uo"),v(w,"href","/about"),v(w,"class","svelte-f3e4uo"),v(h,"class","svelte-f3e4uo"),v(N,"href","/blogs"),v(N,"class","svelte-f3e4uo"),v(T,"class","svelte-f3e4uo"),v(_,"href","/talks"),v(_,"class","svelte-f3e4uo"),v(F,"class","svelte-f3e4uo"),v(R,"href","/notes"),v(R,"class","svelte-f3e4uo"),v(S,"class","svelte-f3e4uo"),v(z,"href","/newsletter"),v(z,"class","svelte-f3e4uo"),v(H,"class","svelte-f3e4uo"),v(V,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),v(O,"viewBox","0 0 24 24"),v(O,"width","1em"),v(O,"height","1em"),v(O,"class","svelte-f3e4uo"),v(P,"aria-label","Twitter account"),v(P,"href","https://twitter.com/lihautan"),v(P,"class","svelte-f3e4uo"),v(K,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),v(J,"viewBox","0 0 24 24"),v(J,"width","1em"),v(J,"height","1em"),v(J,"class","svelte-f3e4uo"),v(G,"aria-label","Github account"),v(G,"href","https://github.com/tanhauhau"),v(G,"class","svelte-f3e4uo"),v(B,"class","social svelte-f3e4uo"),v(r,"class","svelte-f3e4uo"),v(n,"class","svelte-f3e4uo")},m(t,e){u(t,n,e),i(n,o),i(o,r),i(r,c),i(c,a),i(a,s),i(r,l),i(r,h),i(h,w),i(w,A),i(r,x),i(r,T),i(T,N),i(N,L),i(r,I),i(r,F),i(F,_),i(_,k),i(r,M),i(r,S),i(S,R),i(R,j),i(r,q),i(r,H),i(H,z),i(z,C),i(r,D),i(r,B),i(B,P),i(P,O),i(O,V),i(B,W),i(B,G),i(G,J),i(J,K)},p:t,i:t,o:t,d(t){t&&f(n)}}}class J extends W{constructor(t){super(),V(this,t,null,G,a,{})}}function K(t,e,n){const o=t.slice();return o[6]=e[n],o}function U(t,e,n){const o=t.slice();return o[6]=e[n],o}function Q(t){let e,n;return{c(){e=d("meta"),this.h()},l(t){e=y(t,"META",{name:!0,content:!0}),this.h()},h(){v(e,"name","keywords"),v(e,"content",n=t[6])},m(t,n){u(t,e,n)},p(t,o){4&o&&n!==(n=t[6])&&v(e,"content",n)},d(t){t&&f(e)}}}function X(t){let e,n,o=t[6]+"";return{c(){e=d("span"),n=m(o),this.h()},l(t){e=y(t,"SPAN",{class:!0});var r=$(e);n=E(r,o),r.forEach(f),this.h()},h(){v(e,"class","svelte-10cnqwo")},m(t,o){u(t,e,o),i(e,n)},p(t,e){4&e&&o!==(o=t[6]+"")&&w(n,o)},d(t){t&&f(e)}}}function Y(t){let e,n,o,r,c,a,g,A,x,T,N,L,I,F,_,k,M,S,R,j;document.title=e="Note: "+t[1]+" "+t[0]+" | Tan Li Hau";let q=t[2],O=[];for(let e=0;e<q.length;e+=1)O[e]=Q(U(t,q,e));T=new J({});let V=t[2],W=[];for(let e=0;e<V.length;e+=1)W[e]=X(K(t,V,e));const G=t[4].default,Y=function(t,e,n,o){if(t){const r=s(t,e,n,o);return t[0](r)}}(G,t,t[3],null);return{c(){n=d("link"),o=d("meta"),r=d("meta");for(let t=0;t<O.length;t+=1)O[t].c();c=d("meta"),a=p(),g=d("a"),A=m("Skip to content"),x=p(),C(T.$$.fragment),N=p(),L=d("main"),I=d("h1"),F=m(t[1]),_=m(" - "),k=m(t[0]),M=p();for(let t=0;t<W.length;t+=1)W[t].c();S=p(),R=d("article"),Y&&Y.c(),this.h()},l(e){const s=function(t,e=document.body){return Array.from(e.querySelectorAll(t))}('[data-svelte="svelte-jez2i1"]',document.head);n=y(s,"LINK",{href:!0,rel:!0}),o=y(s,"META",{name:!0,content:!0}),r=y(s,"META",{name:!0,content:!0});for(let t=0;t<O.length;t+=1)O[t].l(s);c=y(s,"META",{itemprop:!0,content:!0}),s.forEach(f),a=b(e),g=y(e,"A",{href:!0,class:!0});var l=$(g);A=E(l,"Skip to content"),l.forEach(f),x=b(e),D(T.$$.fragment,e),N=b(e),L=y(e,"MAIN",{id:!0,class:!0});var i=$(L);I=y(i,"H1",{});var u=$(I);F=E(u,t[1]),_=E(u," - "),k=E(u,t[0]),u.forEach(f),M=b(i);for(let t=0;t<W.length;t+=1)W[t].l(i);S=b(i),R=y(i,"ARTICLE",{});var h=$(R);Y&&Y.l(h),h.forEach(f),i.forEach(f),this.h()},h(){v(n,"href","https://lihautan.com/notes/2019-09-04 - useDebounceFn/assets/blog-base-967d71e9.css"),v(n,"rel","stylesheet"),v(o,"name","og:title"),v(o,"content",t[0]),v(r,"name","og:type"),v(r,"content","website"),v(c,"itemprop","url"),v(c,"content","https%3A%2F%2Flihautan.com%2Fnotes%2F2019-09-04%20-%20useDebounceFn"),v(g,"href","#content"),v(g,"class","skip svelte-10cnqwo"),v(L,"id","content"),v(L,"class","blog svelte-10cnqwo")},m(t,e){i(document.head,n),i(document.head,o),i(document.head,r);for(let t=0;t<O.length;t+=1)O[t].m(document.head,null);i(document.head,c),u(t,a,e),u(t,g,e),i(g,A),u(t,x,e),B(T,t,e),u(t,N,e),u(t,L,e),i(L,I),i(I,F),i(I,_),i(I,k),i(L,M);for(let t=0;t<W.length;t+=1)W[t].m(L,null);i(L,S),i(L,R),Y&&Y.m(R,null),j=!0},p(t,[n]){if((!j||3&n)&&e!==(e="Note: "+t[1]+" "+t[0]+" | Tan Li Hau")&&(document.title=e),(!j||1&n)&&v(o,"content",t[0]),4&n){let e;for(q=t[2],e=0;e<q.length;e+=1){const o=U(t,q,e);O[e]?O[e].p(o,n):(O[e]=Q(o),O[e].c(),O[e].m(c.parentNode,c))}for(;e<O.length;e+=1)O[e].d(1);O.length=q.length}if((!j||2&n)&&w(F,t[1]),(!j||1&n)&&w(k,t[0]),4&n){let e;for(V=t[2],e=0;e<V.length;e+=1){const o=K(t,V,e);W[e]?W[e].p(o,n):(W[e]=X(o),W[e].c(),W[e].m(L,S))}for(;e<W.length;e+=1)W[e].d(1);W.length=V.length}Y&&Y.p&&8&n&&l(Y,G,t,t[3],n,null,null)},i(t){j||(H(T.$$.fragment,t),H(Y,t),j=!0)},o(t){z(T.$$.fragment,t),z(Y,t),j=!1},d(t){f(n),f(o),f(r),h(O,t),f(c),t&&f(a),t&&f(g),t&&f(x),P(T,t),t&&f(N),t&&f(L),h(W,t),Y&&Y.d(t)}}}function Z(t,e,n){let{name:o}=e,{date:r}=e,{tags:c=[]}=e,{$$slots:a={},$$scope:s}=e;return t.$set=t=>{"name"in t&&n(0,o=t.name),"date"in t&&n(1,r=t.date),"tags"in t&&n(2,c=t.tags),"$$scope"in t&&n(3,s=t.$$scope)},[o,r,c,s,a]}class tt extends W{constructor(t){super(),V(this,t,Z,Y,a,{name:0,date:1,tags:2})}}function et(e){let n,o,r,c;return{c(){n=d("p"),o=m("is this the right way of doing it? :thinking:"),r=p(),c=d("pre"),this.h()},l(t){n=y(t,"P",{});var e=$(n);o=E(e,"is this the right way of doing it? :thinking:"),e.forEach(f),r=b(t),c=y(t,"PRE",{class:!0}),$(c).forEach(f),this.h()},h(){v(c,"class","language-null")},m(t,e){u(t,n,e),i(n,o),u(t,r,e),u(t,c,e),c.innerHTML='\n<code class="language-">import * as React from &#39;react&#39;;\n\nexport default function useDebounceFn&lt;T extends (...args: any) =&gt; void&gt;(fn: T, delay: number): T &#123;\n  const timeoutId = React.useRef&lt;NodeJS.Timeout&gt;();\n  const originalFn = React.useRef&lt;T&gt;();\n\n  React.useEffect(() =&gt; &#123;\n    originalFn.current = fn;\n    () =&gt; &#123;\n      originalFn.current = null;\n    &#125;;\n  &#125;, [fn]);\n\n  React.useEffect(() =&gt; &#123;\n    return () =&gt; &#123;\n      clearTimeout(timeoutId.current);\n    &#125;;\n  &#125;, []);\n\n  return React.useMemo&lt;T&gt;(\n    () =&gt; (...args: any) =&gt; &#123;\n      clearTimeout(timeoutId.current);\n\n      timeoutId.current = setTimeout(() =&gt; &#123;\n        if (originalFn.current) &#123;\n          originalFn.current(...args);\n        &#125;\n      &#125;, delay);\n    &#125;,\n    [delay]\n  );\n&#125;</code>'},p:t,d(t){t&&f(n),t&&f(r),t&&f(c)}}}function nt(t){let n,o;const r=[ot];let c={$$slots:{default:[et]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)c=e(c,r[t]);return n=new tt({props:c}),{c(){C(n.$$.fragment)},l(t){D(n.$$.fragment,t)},m(t,e){B(n,t,e),o=!0},p(t,[e]){const o=0&e?function(t,e){const n={},o={},r={$$scope:1};let c=t.length;for(;c--;){const a=t[c],s=e[c];if(s){for(const t in a)t in s||(o[t]=1);for(const t in s)r[t]||(n[t]=s[t],r[t]=1);t[c]=s}else for(const t in a)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(r,[(c=ot,"object"==typeof c&&null!==c?c:{})]):{};var c;1&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){o||(H(n.$$.fragment,t),o=!0)},o(t){z(n.$$.fragment,t),o=!1},d(t){P(n,t)}}}const ot={slug:"notes/2019-09-04 - useDebounceFn",type:"notes",date:"2019-09-04",name:"useDebounceFn",layout:"note"};class rt extends W{constructor(t){super(),V(this,t,null,nt,a,{})}}setTimeout(()=>{new rt({target:document.querySelector("#app"),hydrate:!0});if(document.querySelector(".twitter-tweet")){const t=document.createElement("script");t.async=!0,t.src="https://platform.twitter.com/widgets.js",t.charset="utf-8",document.body.appendChild(t)}if("loading"in HTMLImageElement.prototype){document.querySelectorAll('img[loading="lazy"]').forEach(t=>{t.src=t.dataset.src})}else{const t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js",document.body.appendChild(t)}},3e3);
