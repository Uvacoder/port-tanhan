function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function o(){return Object.create(null)}function r(e){e.forEach(n)}function a(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,n,o,r){return e[1]&&r?t(o.ctx.slice(),e[1](r(n))):o.ctx}function l(e,t,n,o,r,a,s){const l=function(e,t,n,o){if(e[2]&&o){const r=e[2](o(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let o=0;o<n;o+=1)e[o]=t.dirty[o]|r[o];return e}return t.dirty|r}return t.dirty}(t,o,r,a);if(l){const r=c(t,n,o,s);e.p(r,l)}}function i(e,t){e.appendChild(t)}function f(e,t,n){e.insertBefore(t,n||null)}function h(e){e.parentNode.removeChild(e)}function u(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function d(e){return document.createElement(e)}function m(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function p(e){return document.createTextNode(e)}function g(){return p(" ")}function v(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function E(e){return Array.from(e.childNodes)}function $(e,t,n,o){for(let o=0;o<e.length;o+=1){const r=e[o];if(r.nodeName===t){let t=0;const a=[];for(;t<r.attributes.length;){const e=r.attributes[t++];n[e.name]||a.push(e.name)}for(let e=0;e<a.length;e++)r.removeAttribute(a[e]);return e.splice(o,1)[0]}}return o?m(t):d(t)}function y(e,t){for(let n=0;n<e.length;n+=1){const o=e[n];if(3===o.nodeType)return o.data=""+t,e.splice(n,1)[0]}return p(t)}function w(e){return y(e," ")}function b(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let A;function x(e){A=e}const L=[],q=[],I=[],k=[],T=Promise.resolve();let N=!1;function M(e){I.push(e)}let _=!1;const j=new Set;function C(){if(!_){_=!0;do{for(let e=0;e<L.length;e+=1){const t=L[e];x(t),S(t.$$)}for(L.length=0;q.length;)q.pop()();for(let e=0;e<I.length;e+=1){const t=I[e];j.has(t)||(j.add(t),t())}I.length=0}while(L.length);for(;k.length;)k.pop()();N=!1,_=!1,j.clear()}}function S(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}const z=new Set;function F(e,t){e&&e.i&&(z.delete(e),e.i(t))}function O(e,t,n,o){if(e&&e.o){if(z.has(e))return;z.add(e),(void 0).c.push(()=>{z.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}function B(e){e&&e.c()}function D(e,t){e&&e.l(t)}function H(e,t,o){const{fragment:s,on_mount:c,on_destroy:l,after_update:i}=e.$$;s&&s.m(t,o),M(()=>{const t=c.map(n).filter(a);l?l.push(...t):r(t),e.$$.on_mount=[]}),i.forEach(M)}function J(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function U(e,t){-1===e.$$.dirty[0]&&(L.push(e),N||(N=!0,T.then(C)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function P(t,n,a,s,c,l,i=[-1]){const f=A;x(t);const u=n.props||{},d=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:i};let m=!1;if(d.ctx=a?a(t,u,(e,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&c(d.ctx[e],d.ctx[e]=r)&&(d.bound[e]&&d.bound[e](r),m&&U(t,e)),n}):[],d.update(),m=!0,r(d.before_update),d.fragment=!!s&&s(d.ctx),n.target){if(n.hydrate){const e=E(n.target);d.fragment&&d.fragment.l(e),e.forEach(h)}else d.fragment&&d.fragment.c();n.intro&&F(t.$$.fragment),H(t,n.target,n.anchor),C()}x(f)}class R{$destroy(){J(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function V(t){let n,o,r,a,s,c,l,u,b,A,x,L,q,I,k,T,N,M,_,j,C,S,z,F,O,B,D,H,J,U,P,R,V,W,G;return{c(){n=d("header"),o=d("nav"),r=d("ul"),a=d("li"),s=d("a"),c=p("Tan Li Hau"),l=g(),u=d("li"),b=d("a"),A=p("About"),x=g(),L=d("li"),q=d("a"),I=p("Writings"),k=g(),T=d("li"),N=d("a"),M=p("Talks"),_=g(),j=d("li"),C=d("a"),S=p("Notes"),z=g(),F=d("li"),O=d("a"),B=p("Newsletter"),D=g(),H=d("li"),J=d("a"),U=m("svg"),P=m("path"),R=g(),V=d("a"),W=m("svg"),G=m("path"),this.h()},l(e){n=$(e,"HEADER",{class:!0});var t=E(n);o=$(t,"NAV",{});var i=E(o);r=$(i,"UL",{class:!0});var f=E(r);a=$(f,"LI",{class:!0});var d=E(a);s=$(d,"A",{href:!0,class:!0});var m=E(s);c=y(m,"Tan Li Hau"),m.forEach(h),d.forEach(h),l=w(f),u=$(f,"LI",{class:!0});var p=E(u);b=$(p,"A",{href:!0,class:!0});var g=E(b);A=y(g,"About"),g.forEach(h),p.forEach(h),x=w(f),L=$(f,"LI",{class:!0});var v=E(L);q=$(v,"A",{href:!0,class:!0});var K=E(q);I=y(K,"Writings"),K.forEach(h),v.forEach(h),k=w(f),T=$(f,"LI",{class:!0});var Q=E(T);N=$(Q,"A",{href:!0,class:!0});var X=E(N);M=y(X,"Talks"),X.forEach(h),Q.forEach(h),_=w(f),j=$(f,"LI",{class:!0});var Y=E(j);C=$(Y,"A",{href:!0,class:!0});var Z=E(C);S=y(Z,"Notes"),Z.forEach(h),Y.forEach(h),z=w(f),F=$(f,"LI",{class:!0});var ee=E(F);O=$(ee,"A",{href:!0,class:!0});var te=E(O);B=y(te,"Newsletter"),te.forEach(h),ee.forEach(h),D=w(f),H=$(f,"LI",{class:!0});var ne=E(H);J=$(ne,"A",{"aria-label":!0,href:!0,class:!0});var oe=E(J);U=$(oe,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var re=E(U);P=$(re,"path",{d:!0},1),E(P).forEach(h),re.forEach(h),oe.forEach(h),R=w(ne),V=$(ne,"A",{"aria-label":!0,href:!0,class:!0});var ae=E(V);W=$(ae,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var se=E(W);G=$(se,"path",{d:!0},1),E(G).forEach(h),se.forEach(h),ae.forEach(h),ne.forEach(h),f.forEach(h),i.forEach(h),t.forEach(h),this.h()},h(){v(s,"href","/"),v(s,"class","svelte-f3e4uo"),v(a,"class","svelte-f3e4uo"),v(b,"href","/about"),v(b,"class","svelte-f3e4uo"),v(u,"class","svelte-f3e4uo"),v(q,"href","/blogs"),v(q,"class","svelte-f3e4uo"),v(L,"class","svelte-f3e4uo"),v(N,"href","/talks"),v(N,"class","svelte-f3e4uo"),v(T,"class","svelte-f3e4uo"),v(C,"href","/notes"),v(C,"class","svelte-f3e4uo"),v(j,"class","svelte-f3e4uo"),v(O,"href","/newsletter"),v(O,"class","svelte-f3e4uo"),v(F,"class","svelte-f3e4uo"),v(P,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),v(U,"viewBox","0 0 24 24"),v(U,"width","1em"),v(U,"height","1em"),v(U,"class","svelte-f3e4uo"),v(J,"aria-label","Twitter account"),v(J,"href","https://twitter.com/lihautan"),v(J,"class","svelte-f3e4uo"),v(G,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),v(W,"viewBox","0 0 24 24"),v(W,"width","1em"),v(W,"height","1em"),v(W,"class","svelte-f3e4uo"),v(V,"aria-label","Github account"),v(V,"href","https://github.com/tanhauhau"),v(V,"class","svelte-f3e4uo"),v(H,"class","social svelte-f3e4uo"),v(r,"class","svelte-f3e4uo"),v(n,"class","svelte-f3e4uo")},m(e,t){f(e,n,t),i(n,o),i(o,r),i(r,a),i(a,s),i(s,c),i(r,l),i(r,u),i(u,b),i(b,A),i(r,x),i(r,L),i(L,q),i(q,I),i(r,k),i(r,T),i(T,N),i(N,M),i(r,_),i(r,j),i(j,C),i(C,S),i(r,z),i(r,F),i(F,O),i(O,B),i(r,D),i(r,H),i(H,J),i(J,U),i(U,P),i(H,R),i(H,V),i(V,W),i(W,G)},p:e,i:e,o:e,d(e){e&&h(n)}}}class W extends R{constructor(e){super(),P(this,e,null,V,s,{})}}function G(e,t,n){const o=e.slice();return o[6]=t[n],o}function K(e,t,n){const o=e.slice();return o[6]=t[n],o}function Q(e){let t,n;return{c(){t=d("meta"),this.h()},l(e){t=$(e,"META",{name:!0,content:!0}),this.h()},h(){v(t,"name","keywords"),v(t,"content",n=e[6])},m(e,n){f(e,t,n)},p(e,o){4&o&&n!==(n=e[6])&&v(t,"content",n)},d(e){e&&h(t)}}}function X(e){let t,n,o=e[6]+"";return{c(){t=d("span"),n=p(o),this.h()},l(e){t=$(e,"SPAN",{class:!0});var r=E(t);n=y(r,o),r.forEach(h),this.h()},h(){v(t,"class","svelte-10cnqwo")},m(e,o){f(e,t,o),i(t,n)},p(e,t){4&t&&o!==(o=e[6]+"")&&b(n,o)},d(e){e&&h(t)}}}function Y(e){let t,n,o,r,a,s,m,A,x,L,q,I,k,T,N,M,_,j;document.title=t="Note: "+e[1]+" | Tan Li Hau";let C=e[2],S=[];for(let t=0;t<C.length;t+=1)S[t]=Q(K(e,C,t));L=new W({});let z=e[2],U=[];for(let t=0;t<z.length;t+=1)U[t]=X(G(e,z,t));const P=e[4].default,R=function(e,t,n,o){if(e){const r=c(e,t,n,o);return e[0](r)}}(P,e,e[3],null);return{c(){n=d("link"),o=d("meta"),r=d("meta");for(let e=0;e<S.length;e+=1)S[e].c();a=d("meta"),s=g(),m=d("a"),A=p("Skip to content"),x=g(),B(L.$$.fragment),q=g(),I=d("main"),k=d("h1"),T=p(e[1]),N=g();for(let e=0;e<U.length;e+=1)U[e].c();M=g(),_=d("article"),R&&R.c(),this.h()},l(t){const c=function(e,t=document.body){return Array.from(t.querySelectorAll(e))}('[data-svelte="svelte-ywf7m8"]',document.head);n=$(c,"LINK",{href:!0,rel:!0}),o=$(c,"META",{name:!0,content:!0}),r=$(c,"META",{name:!0,content:!0});for(let e=0;e<S.length;e+=1)S[e].l(c);a=$(c,"META",{itemprop:!0,content:!0}),c.forEach(h),s=w(t),m=$(t,"A",{href:!0,class:!0});var l=E(m);A=y(l,"Skip to content"),l.forEach(h),x=w(t),D(L.$$.fragment,t),q=w(t),I=$(t,"MAIN",{id:!0,class:!0});var i=E(I);k=$(i,"H1",{});var f=E(k);T=y(f,e[1]),f.forEach(h),N=w(i);for(let e=0;e<U.length;e+=1)U[e].l(i);M=w(i),_=$(i,"ARTICLE",{});var u=E(_);R&&R.l(u),u.forEach(h),i.forEach(h),this.h()},h(){v(n,"href","https://lihautan.com/notes/2019-07-01 - First of July/assets/blog-base-967d71e9.css"),v(n,"rel","stylesheet"),v(o,"name","og:title"),v(o,"content",e[0]),v(r,"name","og:type"),v(r,"content","website"),v(a,"itemprop","url"),v(a,"content","https%3A%2F%2Flihautan.com%2Fnotes%2F2019-07-01%20-%20First%20of%20July"),v(m,"href","#content"),v(m,"class","skip svelte-10cnqwo"),v(I,"id","content"),v(I,"class","blog svelte-10cnqwo")},m(e,t){i(document.head,n),i(document.head,o),i(document.head,r);for(let e=0;e<S.length;e+=1)S[e].m(document.head,null);i(document.head,a),f(e,s,t),f(e,m,t),i(m,A),f(e,x,t),H(L,e,t),f(e,q,t),f(e,I,t),i(I,k),i(k,T),i(I,N);for(let e=0;e<U.length;e+=1)U[e].m(I,null);i(I,M),i(I,_),R&&R.m(_,null),j=!0},p(e,[n]){if((!j||2&n)&&t!==(t="Note: "+e[1]+" | Tan Li Hau")&&(document.title=t),(!j||1&n)&&v(o,"content",e[0]),4&n){let t;for(C=e[2],t=0;t<C.length;t+=1){const o=K(e,C,t);S[t]?S[t].p(o,n):(S[t]=Q(o),S[t].c(),S[t].m(a.parentNode,a))}for(;t<S.length;t+=1)S[t].d(1);S.length=C.length}if((!j||2&n)&&b(T,e[1]),4&n){let t;for(z=e[2],t=0;t<z.length;t+=1){const o=G(e,z,t);U[t]?U[t].p(o,n):(U[t]=X(o),U[t].c(),U[t].m(I,M))}for(;t<U.length;t+=1)U[t].d(1);U.length=z.length}R&&R.p&&8&n&&l(R,P,e,e[3],n,null,null)},i(e){j||(F(L.$$.fragment,e),F(R,e),j=!0)},o(e){O(L.$$.fragment,e),O(R,e),j=!1},d(e){h(n),h(o),h(r),u(S,e),h(a),e&&h(s),e&&h(m),e&&h(x),J(L,e),e&&h(q),e&&h(I),u(U,e),R&&R.d(e)}}}function Z(e,t,n){let{name:o}=t,{title:r}=t,{tags:a=[]}=t,{$$slots:s={},$$scope:c}=t;return e.$set=e=>{"name"in e&&n(0,o=e.name),"title"in e&&n(1,r=e.title),"tags"in e&&n(2,a=e.tags),"$$scope"in e&&n(3,c=e.$$scope)},[o,r,a,c,s]}class ee extends R{constructor(e){super(),P(this,e,Z,Y,s,{name:0,title:1,tags:2})}}function te(e){let t,n,o,r,a,s,c,l,u,m,b,A,x,L,q,I,k,T,N,M,_,j,C,S,z,F,O,B,D,H,J,U,P,R,V,W,G,K,Q;return{c(){t=d("ul"),n=d("li"),o=p("Adding to context menu, with right click"),r=d("ul"),a=d("li"),s=d("a"),c=p("https://stackoverflow.com/questions/6903794/adding-an-option-to-the-right-click-menu-for-a-chrome-extension?rq=1"),l=g(),u=d("li"),m=p("API docs "),b=d("a"),A=p("https://developer.chrome.com/apps/contextMenus"),x=g(),L=d("ul"),q=d("li"),I=d("code"),k=p("@zhaojinjiang"),T=p(" shared some of his interview experience"),N=d("ul"),M=d("li"),_=p("he prepared a ton of questions, but in the end he used 1 question, bubble sort, to eliminate 80% of the candidate"),j=g(),C=d("li"),S=p("he shared one of his prev boss classic interview question, given a DOM node, reverse all it's child element."),z=g(),F=d("li"),O=p("open-ended question, we have "),B=d("code"),D=p("insertBefore"),H=p(" and "),J=d("code"),U=p("appendChild"),P=p(", so if you are given a chance to add a new api, "),R=d("code"),V=p("insertAfter"),W=p(", explain how you would design the api."),G=g(),K=d("li"),Q=p(":orz:"),this.h()},l(e){t=$(e,"UL",{});var i=E(t);n=$(i,"LI",{});var f=E(n);o=y(f,"Adding to context menu, with right click"),r=$(f,"UL",{});var d=E(r);a=$(d,"LI",{});var p=E(a);s=$(p,"A",{href:!0,rel:!0});var g=E(s);c=y(g,"https://stackoverflow.com/questions/6903794/adding-an-option-to-the-right-click-menu-for-a-chrome-extension?rq=1"),g.forEach(h),p.forEach(h),l=w(d),u=$(d,"LI",{});var v=E(u);m=y(v,"API docs "),b=$(v,"A",{href:!0,rel:!0});var X=E(b);A=y(X,"https://developer.chrome.com/apps/contextMenus"),X.forEach(h),v.forEach(h),d.forEach(h),f.forEach(h),i.forEach(h),x=w(e),L=$(e,"UL",{});var Y=E(L);q=$(Y,"LI",{});var Z=E(q);I=$(Z,"CODE",{});var ee=E(I);k=y(ee,"@zhaojinjiang"),ee.forEach(h),T=y(Z," shared some of his interview experience"),N=$(Z,"UL",{});var te=E(N);M=$(te,"LI",{});var ne=E(M);_=y(ne,"he prepared a ton of questions, but in the end he used 1 question, bubble sort, to eliminate 80% of the candidate"),ne.forEach(h),j=w(te),C=$(te,"LI",{});var oe=E(C);S=y(oe,"he shared one of his prev boss classic interview question, given a DOM node, reverse all it's child element."),oe.forEach(h),z=w(te),F=$(te,"LI",{});var re=E(F);O=y(re,"open-ended question, we have "),B=$(re,"CODE",{});var ae=E(B);D=y(ae,"insertBefore"),ae.forEach(h),H=y(re," and "),J=$(re,"CODE",{});var se=E(J);U=y(se,"appendChild"),se.forEach(h),P=y(re,", so if you are given a chance to add a new api, "),R=$(re,"CODE",{});var ce=E(R);V=y(ce,"insertAfter"),ce.forEach(h),W=y(re,", explain how you would design the api."),re.forEach(h),G=w(te),K=$(te,"LI",{});var le=E(K);Q=y(le,":orz:"),le.forEach(h),te.forEach(h),Z.forEach(h),Y.forEach(h),this.h()},h(){v(s,"href","https://stackoverflow.com/questions/6903794/adding-an-option-to-the-right-click-menu-for-a-chrome-extension?rq=1"),v(s,"rel","nofollow"),v(b,"href","https://developer.chrome.com/apps/contextMenus"),v(b,"rel","nofollow")},m(e,h){f(e,t,h),i(t,n),i(n,o),i(n,r),i(r,a),i(a,s),i(s,c),i(r,l),i(r,u),i(u,m),i(u,b),i(b,A),f(e,x,h),f(e,L,h),i(L,q),i(q,I),i(I,k),i(q,T),i(q,N),i(N,M),i(M,_),i(N,j),i(N,C),i(C,S),i(N,z),i(N,F),i(F,O),i(F,B),i(B,D),i(F,H),i(F,J),i(J,U),i(F,P),i(F,R),i(R,V),i(F,W),i(N,G),i(N,K),i(K,Q)},d(e){e&&h(t),e&&h(x),e&&h(L)}}}function ne(e){let n,o;const r=[oe];let a={$$slots:{default:[te]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)a=t(a,r[e]);return n=new ee({props:a}),{c(){B(n.$$.fragment)},l(e){D(n.$$.fragment,e)},m(e,t){H(n,e,t),o=!0},p(e,[t]){const o=0&t?function(e,t){const n={},o={},r={$$scope:1};let a=e.length;for(;a--;){const s=e[a],c=t[a];if(c){for(const e in s)e in c||(o[e]=1);for(const e in c)r[e]||(n[e]=c[e],r[e]=1);e[a]=c}else for(const e in s)r[e]=1}for(const e in o)e in n||(n[e]=void 0);return n}(r,[(a=oe,"object"==typeof a&&null!==a?a:{})]):{};var a;1&t&&(o.$$scope={dirty:t,ctx:e}),n.$set(o)},i(e){o||(F(n.$$.fragment,e),o=!0)},o(e){O(n.$$.fragment,e),o=!1},d(e){J(n,e)}}}const oe={slug:"notes/2019-07-01 - First of July",type:"notes",date:"2019-07-01",name:"First of July",title:"2019-07-01 - First of July",layout:"note"};class re extends R{constructor(e){super(),P(this,e,null,ne,s,{})}}setTimeout(()=>{new re({target:document.querySelector("#app"),hydrate:!0});if(document.querySelector(".twitter-tweet")){const e=document.createElement("script");e.async=!0,e.src="https://platform.twitter.com/widgets.js",e.charset="utf-8",document.body.appendChild(e)}if("loading"in HTMLImageElement.prototype){document.querySelectorAll('img[loading="lazy"]').forEach(e=>{e.src=e.dataset.src})}else{const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js",document.body.appendChild(e)}},3e3);