function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function a(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function l(t,e,n,o,r,a,c){const l=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,a);if(l){const r=s(e,n,o,c);t.p(r,l)}}function i(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function m(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function p(t){return document.createTextNode(t)}function g(){return p(" ")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t){return Array.from(t.childNodes)}function $(t,e,n,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===e){let e=0;const a=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||a.push(t.name)}for(let t=0;t<a.length;t++)r.removeAttribute(a[t]);return t.splice(o,1)[0]}}return o?m(e):d(e)}function E(t,e){for(let n=0;n<t.length;n+=1){const o=t[n];if(3===o.nodeType)return o.data=""+e,t.splice(n,1)[0]}return p(e)}function y(t){return E(t," ")}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let A;function x(t){A=t}const L=[],T=[],N=[],I=[],_=Promise.resolve();let z=!1;function k(t){N.push(t)}let S=!1;const M=new Set;function j(){if(!S){S=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];x(e),q(e.$$)}for(L.length=0;T.length;)T.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];M.has(e)||(M.add(e),e())}N.length=0}while(L.length);for(;I.length;)I.pop()();z=!1,S=!1,M.clear()}}function q(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const H=new Set;function C(t,e){t&&t.i&&(H.delete(t),t.i(e))}function W(t,e,n,o){if(t&&t.o){if(H.has(t))return;H.add(t),(void 0).c.push(()=>{H.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function B(t){t&&t.c()}function F(t,e){t&&t.l(e)}function P(t,e,o){const{fragment:c,on_mount:s,on_destroy:l,after_update:i}=t.$$;c&&c.m(e,o),k(()=>{const e=s.map(n).filter(a);l?l.push(...e):r(e),t.$$.on_mount=[]}),i.forEach(k)}function U(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function O(t,e){-1===t.$$.dirty[0]&&(L.push(t),z||(z=!0,_.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(e,n,a,c,s,l,i=[-1]){const f=A;x(e);const u=n.props||{},d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:i};let m=!1;if(d.ctx=a?a(e,u,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),m&&O(e,t)),n}):[],d.update(),m=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=w(n.target);d.fragment&&d.fragment.l(t),t.forEach(h)}else d.fragment&&d.fragment.c();n.intro&&C(e.$$.fragment),P(e,n.target,n.anchor),j()}x(f)}class V{$destroy(){U(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function D(e){let n,o,r,a,c,s,l,u,b,A,x,L,T,N,I,_,z,k,S,M,j,q,H,C,W,B,F,P,U,O,R,V,D,G,K;return{c(){n=d("header"),o=d("nav"),r=d("ul"),a=d("li"),c=d("a"),s=p("Tan Li Hau"),l=g(),u=d("li"),b=d("a"),A=p("About"),x=g(),L=d("li"),T=d("a"),N=p("Writings"),I=g(),_=d("li"),z=d("a"),k=p("Talks"),S=g(),M=d("li"),j=d("a"),q=p("Notes"),H=g(),C=d("li"),W=d("a"),B=p("Newsletter"),F=g(),P=d("li"),U=d("a"),O=m("svg"),R=m("path"),V=g(),D=d("a"),G=m("svg"),K=m("path"),this.h()},l(t){n=$(t,"HEADER",{class:!0});var e=w(n);o=$(e,"NAV",{});var i=w(o);r=$(i,"UL",{class:!0});var f=w(r);a=$(f,"LI",{class:!0});var d=w(a);c=$(d,"A",{href:!0,class:!0});var m=w(c);s=E(m,"Tan Li Hau"),m.forEach(h),d.forEach(h),l=y(f),u=$(f,"LI",{class:!0});var p=w(u);b=$(p,"A",{href:!0,class:!0});var g=w(b);A=E(g,"About"),g.forEach(h),p.forEach(h),x=y(f),L=$(f,"LI",{class:!0});var v=w(L);T=$(v,"A",{href:!0,class:!0});var J=w(T);N=E(J,"Writings"),J.forEach(h),v.forEach(h),I=y(f),_=$(f,"LI",{class:!0});var Q=w(_);z=$(Q,"A",{href:!0,class:!0});var X=w(z);k=E(X,"Talks"),X.forEach(h),Q.forEach(h),S=y(f),M=$(f,"LI",{class:!0});var Y=w(M);j=$(Y,"A",{href:!0,class:!0});var Z=w(j);q=E(Z,"Notes"),Z.forEach(h),Y.forEach(h),H=y(f),C=$(f,"LI",{class:!0});var tt=w(C);W=$(tt,"A",{href:!0,class:!0});var et=w(W);B=E(et,"Newsletter"),et.forEach(h),tt.forEach(h),F=y(f),P=$(f,"LI",{class:!0});var nt=w(P);U=$(nt,"A",{"aria-label":!0,href:!0,class:!0});var ot=w(U);O=$(ot,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var rt=w(O);R=$(rt,"path",{d:!0},1),w(R).forEach(h),rt.forEach(h),ot.forEach(h),V=y(nt),D=$(nt,"A",{"aria-label":!0,href:!0,class:!0});var at=w(D);G=$(at,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var ct=w(G);K=$(ct,"path",{d:!0},1),w(K).forEach(h),ct.forEach(h),at.forEach(h),nt.forEach(h),f.forEach(h),i.forEach(h),e.forEach(h),this.h()},h(){v(c,"href","/"),v(c,"class","svelte-f3e4uo"),v(a,"class","svelte-f3e4uo"),v(b,"href","/about"),v(b,"class","svelte-f3e4uo"),v(u,"class","svelte-f3e4uo"),v(T,"href","/blogs"),v(T,"class","svelte-f3e4uo"),v(L,"class","svelte-f3e4uo"),v(z,"href","/talks"),v(z,"class","svelte-f3e4uo"),v(_,"class","svelte-f3e4uo"),v(j,"href","/notes"),v(j,"class","svelte-f3e4uo"),v(M,"class","svelte-f3e4uo"),v(W,"href","/newsletter"),v(W,"class","svelte-f3e4uo"),v(C,"class","svelte-f3e4uo"),v(R,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),v(O,"viewBox","0 0 24 24"),v(O,"width","1em"),v(O,"height","1em"),v(O,"class","svelte-f3e4uo"),v(U,"aria-label","Twitter account"),v(U,"href","https://twitter.com/lihautan"),v(U,"class","svelte-f3e4uo"),v(K,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),v(G,"viewBox","0 0 24 24"),v(G,"width","1em"),v(G,"height","1em"),v(G,"class","svelte-f3e4uo"),v(D,"aria-label","Github account"),v(D,"href","https://github.com/tanhauhau"),v(D,"class","svelte-f3e4uo"),v(P,"class","social svelte-f3e4uo"),v(r,"class","svelte-f3e4uo"),v(n,"class","svelte-f3e4uo")},m(t,e){f(t,n,e),i(n,o),i(o,r),i(r,a),i(a,c),i(c,s),i(r,l),i(r,u),i(u,b),i(b,A),i(r,x),i(r,L),i(L,T),i(T,N),i(r,I),i(r,_),i(_,z),i(z,k),i(r,S),i(r,M),i(M,j),i(j,q),i(r,H),i(r,C),i(C,W),i(W,B),i(r,F),i(r,P),i(P,U),i(U,O),i(O,R),i(P,V),i(P,D),i(D,G),i(G,K)},p:t,i:t,o:t,d(t){t&&h(n)}}}class G extends V{constructor(t){super(),R(this,t,null,D,c,{})}}function K(t,e,n){const o=t.slice();return o[6]=e[n],o}function J(t,e,n){const o=t.slice();return o[6]=e[n],o}function Q(t){let e,n;return{c(){e=d("meta"),this.h()},l(t){e=$(t,"META",{name:!0,content:!0}),this.h()},h(){v(e,"name","keywords"),v(e,"content",n=t[6])},m(t,n){f(t,e,n)},p(t,o){4&o&&n!==(n=t[6])&&v(e,"content",n)},d(t){t&&h(e)}}}function X(t){let e,n,o=t[6]+"";return{c(){e=d("span"),n=p(o),this.h()},l(t){e=$(t,"SPAN",{class:!0});var r=w(e);n=E(r,o),r.forEach(h),this.h()},h(){v(e,"class","svelte-10cnqwo")},m(t,o){f(t,e,o),i(e,n)},p(t,e){4&e&&o!==(o=t[6]+"")&&b(n,o)},d(t){t&&h(e)}}}function Y(t){let e,n,o,r,a,c,m,A,x,L,T,N,I,_,z,k,S,M,j,q;document.title=e="Note: "+t[1]+" "+t[0]+" | Tan Li Hau";let H=t[2],O=[];for(let e=0;e<H.length;e+=1)O[e]=Q(J(t,H,e));L=new G({});let R=t[2],V=[];for(let e=0;e<R.length;e+=1)V[e]=X(K(t,R,e));const D=t[4].default,Y=function(t,e,n,o){if(t){const r=s(t,e,n,o);return t[0](r)}}(D,t,t[3],null);return{c(){n=d("link"),o=d("meta"),r=d("meta");for(let t=0;t<O.length;t+=1)O[t].c();a=d("meta"),c=g(),m=d("a"),A=p("Skip to content"),x=g(),B(L.$$.fragment),T=g(),N=d("main"),I=d("h1"),_=p(t[1]),z=p(" - "),k=p(t[0]),S=g();for(let t=0;t<V.length;t+=1)V[t].c();M=g(),j=d("article"),Y&&Y.c(),this.h()},l(e){const s=function(t,e=document.body){return Array.from(e.querySelectorAll(t))}('[data-svelte="svelte-jez2i1"]',document.head);n=$(s,"LINK",{href:!0,rel:!0}),o=$(s,"META",{name:!0,content:!0}),r=$(s,"META",{name:!0,content:!0});for(let t=0;t<O.length;t+=1)O[t].l(s);a=$(s,"META",{itemprop:!0,content:!0}),s.forEach(h),c=y(e),m=$(e,"A",{href:!0,class:!0});var l=w(m);A=E(l,"Skip to content"),l.forEach(h),x=y(e),F(L.$$.fragment,e),T=y(e),N=$(e,"MAIN",{id:!0,class:!0});var i=w(N);I=$(i,"H1",{});var f=w(I);_=E(f,t[1]),z=E(f," - "),k=E(f,t[0]),f.forEach(h),S=y(i);for(let t=0;t<V.length;t+=1)V[t].l(i);M=y(i),j=$(i,"ARTICLE",{});var u=w(j);Y&&Y.l(u),u.forEach(h),i.forEach(h),this.h()},h(){v(n,"href","https://lihautan.com/notes/2019-09-13 - Writing/assets/blog-base-967d71e9.css"),v(n,"rel","stylesheet"),v(o,"name","og:title"),v(o,"content",t[0]),v(r,"name","og:type"),v(r,"content","website"),v(a,"itemprop","url"),v(a,"content","https%3A%2F%2Flihautan.com%2Fnotes%2F2019-09-13%20-%20Writing"),v(m,"href","#content"),v(m,"class","skip svelte-10cnqwo"),v(N,"id","content"),v(N,"class","blog svelte-10cnqwo")},m(t,e){i(document.head,n),i(document.head,o),i(document.head,r);for(let t=0;t<O.length;t+=1)O[t].m(document.head,null);i(document.head,a),f(t,c,e),f(t,m,e),i(m,A),f(t,x,e),P(L,t,e),f(t,T,e),f(t,N,e),i(N,I),i(I,_),i(I,z),i(I,k),i(N,S);for(let t=0;t<V.length;t+=1)V[t].m(N,null);i(N,M),i(N,j),Y&&Y.m(j,null),q=!0},p(t,[n]){if((!q||3&n)&&e!==(e="Note: "+t[1]+" "+t[0]+" | Tan Li Hau")&&(document.title=e),(!q||1&n)&&v(o,"content",t[0]),4&n){let e;for(H=t[2],e=0;e<H.length;e+=1){const o=J(t,H,e);O[e]?O[e].p(o,n):(O[e]=Q(o),O[e].c(),O[e].m(a.parentNode,a))}for(;e<O.length;e+=1)O[e].d(1);O.length=H.length}if((!q||2&n)&&b(_,t[1]),(!q||1&n)&&b(k,t[0]),4&n){let e;for(R=t[2],e=0;e<R.length;e+=1){const o=K(t,R,e);V[e]?V[e].p(o,n):(V[e]=X(o),V[e].c(),V[e].m(N,M))}for(;e<V.length;e+=1)V[e].d(1);V.length=R.length}Y&&Y.p&&8&n&&l(Y,D,t,t[3],n,null,null)},i(t){q||(C(L.$$.fragment,t),C(Y,t),q=!0)},o(t){W(L.$$.fragment,t),W(Y,t),q=!1},d(t){h(n),h(o),h(r),u(O,t),h(a),t&&h(c),t&&h(m),t&&h(x),U(L,t),t&&h(T),t&&h(N),u(V,t),Y&&Y.d(t)}}}function Z(t,e,n){let{name:o}=e,{date:r}=e,{tags:a=[]}=e,{$$slots:c={},$$scope:s}=e;return t.$set=t=>{"name"in t&&n(0,o=t.name),"date"in t&&n(1,r=t.date),"tags"in t&&n(2,a=t.tags),"$$scope"in t&&n(3,s=t.$$scope)},[o,r,a,s,c]}class tt extends V{constructor(t){super(),R(this,t,Z,Y,c,{name:0,date:1,tags:2})}}function et(t){let e,n,o,r,a,c,s,l,u,m,b,A,x,L,T,N,I,_,z;return{c(){e=d("p"),n=p("text analyzer:"),o=g(),r=d("ul"),a=d("li"),c=d("a"),s=p("http://www.hemingwayapp.com/"),l=g(),u=d("li"),m=d("a"),b=p("https://coschedule.com/headline-analyzer"),A=g(),x=d("p"),L=p("guideline"),T=g(),N=d("ul"),I=d("li"),_=d("a"),z=p("https://www.freecodecamp.org/news/how-to-get-published-in-the-freecodecamp-medium-publication-9b342a22400e/"),this.h()},l(t){e=$(t,"P",{});var i=w(e);n=E(i,"text analyzer:"),i.forEach(h),o=y(t),r=$(t,"UL",{});var f=w(r);a=$(f,"LI",{});var d=w(a);c=$(d,"A",{href:!0,rel:!0});var p=w(c);s=E(p,"http://www.hemingwayapp.com/"),p.forEach(h),d.forEach(h),l=y(f),u=$(f,"LI",{});var g=w(u);m=$(g,"A",{href:!0,rel:!0});var v=w(m);b=E(v,"https://coschedule.com/headline-analyzer"),v.forEach(h),g.forEach(h),f.forEach(h),A=y(t),x=$(t,"P",{});var k=w(x);L=E(k,"guideline"),k.forEach(h),T=y(t),N=$(t,"UL",{});var S=w(N);I=$(S,"LI",{});var M=w(I);_=$(M,"A",{href:!0,rel:!0});var j=w(_);z=E(j,"https://www.freecodecamp.org/news/how-to-get-published-in-the-freecodecamp-medium-publication-9b342a22400e/"),j.forEach(h),M.forEach(h),S.forEach(h),this.h()},h(){v(c,"href","http://www.hemingwayapp.com/"),v(c,"rel","nofollow"),v(m,"href","https://coschedule.com/headline-analyzer"),v(m,"rel","nofollow"),v(_,"href","https://www.freecodecamp.org/news/how-to-get-published-in-the-freecodecamp-medium-publication-9b342a22400e/"),v(_,"rel","nofollow")},m(t,h){f(t,e,h),i(e,n),f(t,o,h),f(t,r,h),i(r,a),i(a,c),i(c,s),i(r,l),i(r,u),i(u,m),i(m,b),f(t,A,h),f(t,x,h),i(x,L),f(t,T,h),f(t,N,h),i(N,I),i(I,_),i(_,z)},d(t){t&&h(e),t&&h(o),t&&h(r),t&&h(A),t&&h(x),t&&h(T),t&&h(N)}}}function nt(t){let n,o;const r=[ot];let a={$$slots:{default:[et]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)a=e(a,r[t]);return n=new tt({props:a}),{c(){B(n.$$.fragment)},l(t){F(n.$$.fragment,t)},m(t,e){P(n,t,e),o=!0},p(t,[e]){const o=0&e?function(t,e){const n={},o={},r={$$scope:1};let a=t.length;for(;a--;){const c=t[a],s=e[a];if(s){for(const t in c)t in s||(o[t]=1);for(const t in s)r[t]||(n[t]=s[t],r[t]=1);t[a]=s}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(r,[(a=ot,"object"==typeof a&&null!==a?a:{})]):{};var a;1&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){o||(C(n.$$.fragment,t),o=!0)},o(t){W(n.$$.fragment,t),o=!1},d(t){U(n,t)}}}const ot={slug:"notes/2019-09-13 - Writing",type:"notes",date:"2019-09-13",name:"Writing",layout:"note"};class rt extends V{constructor(t){super(),R(this,t,null,nt,c,{})}}setTimeout(()=>{new rt({target:document.querySelector("#app"),hydrate:!0});if(document.querySelector(".twitter-tweet")){const t=document.createElement("script");t.async=!0,t.src="https://platform.twitter.com/widgets.js",t.charset="utf-8",document.body.appendChild(t)}if("loading"in HTMLImageElement.prototype){document.querySelectorAll('img[loading="lazy"]').forEach(t=>{t.src=t.dataset.src})}else{const t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js",document.body.appendChild(t)}},3e3);
