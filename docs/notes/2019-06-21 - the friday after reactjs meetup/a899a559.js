function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function a(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function l(t,e,n,o,r,a,c){const l=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,a);if(l){const r=s(e,n,o,c);t.p(r,l)}}function f(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function m(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function p(t){return document.createTextNode(t)}function g(){return p(" ")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function y(t,e,n,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===e){let e=0;const a=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||a.push(t.name)}for(let t=0;t<a.length;t++)r.removeAttribute(a[t]);return t.splice(o,1)[0]}}return o?m(e):d(e)}function E(t,e){for(let n=0;n<t.length;n+=1){const o=t[n];if(3===o.nodeType)return o.data=""+e,t.splice(n,1)[0]}return p(e)}function w(t){return E(t," ")}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let A;function x(t){A=t}const L=[],_=[],j=[],q=[],I=Promise.resolve();let T=!1;function N(t){j.push(t)}let k=!1;const S=new Set;function M(){if(!k){k=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];x(e),H(e.$$)}for(L.length=0;_.length;)_.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];S.has(e)||(S.add(e),e())}j.length=0}while(L.length);for(;q.length;)q.pop()();T=!1,k=!1,S.clear()}}function H(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const z=new Set;function C(t,e){t&&t.i&&(z.delete(t),t.i(e))}function B(t,e,n,o){if(t&&t.o){if(z.has(t))return;z.add(t),(void 0).c.push(()=>{z.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function P(t){t&&t.c()}function F(t,e){t&&t.l(e)}function U(t,e,o){const{fragment:c,on_mount:s,on_destroy:l,after_update:f}=t.$$;c&&c.m(e,o),N(()=>{const e=s.map(n).filter(a);l?l.push(...e):r(e),t.$$.on_mount=[]}),f.forEach(N)}function O(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function R(t,e){-1===t.$$.dirty[0]&&(L.push(t),T||(T=!0,I.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(e,n,a,c,s,l,f=[-1]){const i=A;x(e);const h=n.props||{},d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:o(),dirty:f};let m=!1;if(d.ctx=a?a(e,h,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),m&&R(e,t)),n}):[],d.update(),m=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=$(n.target);d.fragment&&d.fragment.l(t),t.forEach(u)}else d.fragment&&d.fragment.c();n.intro&&C(e.$$.fragment),U(e,n.target,n.anchor),M()}x(i)}class W{$destroy(){O(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function D(e){let n,o,r,a,c,s,l,h,b,A,x,L,_,j,q,I,T,N,k,S,M,H,z,C,B,P,F,U,O,R,V,W,D,G,K;return{c(){n=d("header"),o=d("nav"),r=d("ul"),a=d("li"),c=d("a"),s=p("Tan Li Hau"),l=g(),h=d("li"),b=d("a"),A=p("About"),x=g(),L=d("li"),_=d("a"),j=p("Writings"),q=g(),I=d("li"),T=d("a"),N=p("Talks"),k=g(),S=d("li"),M=d("a"),H=p("Notes"),z=g(),C=d("li"),B=d("a"),P=p("Newsletter"),F=g(),U=d("li"),O=d("a"),R=m("svg"),V=m("path"),W=g(),D=d("a"),G=m("svg"),K=m("path"),this.h()},l(t){n=y(t,"HEADER",{class:!0});var e=$(n);o=y(e,"NAV",{});var f=$(o);r=y(f,"UL",{class:!0});var i=$(r);a=y(i,"LI",{class:!0});var d=$(a);c=y(d,"A",{href:!0,class:!0});var m=$(c);s=E(m,"Tan Li Hau"),m.forEach(u),d.forEach(u),l=w(i),h=y(i,"LI",{class:!0});var p=$(h);b=y(p,"A",{href:!0,class:!0});var g=$(b);A=E(g,"About"),g.forEach(u),p.forEach(u),x=w(i),L=y(i,"LI",{class:!0});var v=$(L);_=y(v,"A",{href:!0,class:!0});var J=$(_);j=E(J,"Writings"),J.forEach(u),v.forEach(u),q=w(i),I=y(i,"LI",{class:!0});var Q=$(I);T=y(Q,"A",{href:!0,class:!0});var X=$(T);N=E(X,"Talks"),X.forEach(u),Q.forEach(u),k=w(i),S=y(i,"LI",{class:!0});var Y=$(S);M=y(Y,"A",{href:!0,class:!0});var Z=$(M);H=E(Z,"Notes"),Z.forEach(u),Y.forEach(u),z=w(i),C=y(i,"LI",{class:!0});var tt=$(C);B=y(tt,"A",{href:!0,class:!0});var et=$(B);P=E(et,"Newsletter"),et.forEach(u),tt.forEach(u),F=w(i),U=y(i,"LI",{class:!0});var nt=$(U);O=y(nt,"A",{"aria-label":!0,href:!0,class:!0});var ot=$(O);R=y(ot,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var rt=$(R);V=y(rt,"path",{d:!0},1),$(V).forEach(u),rt.forEach(u),ot.forEach(u),W=w(nt),D=y(nt,"A",{"aria-label":!0,href:!0,class:!0});var at=$(D);G=y(at,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var ct=$(G);K=y(ct,"path",{d:!0},1),$(K).forEach(u),ct.forEach(u),at.forEach(u),nt.forEach(u),i.forEach(u),f.forEach(u),e.forEach(u),this.h()},h(){v(c,"href","/"),v(c,"class","svelte-f3e4uo"),v(a,"class","svelte-f3e4uo"),v(b,"href","/about"),v(b,"class","svelte-f3e4uo"),v(h,"class","svelte-f3e4uo"),v(_,"href","/blogs"),v(_,"class","svelte-f3e4uo"),v(L,"class","svelte-f3e4uo"),v(T,"href","/talks"),v(T,"class","svelte-f3e4uo"),v(I,"class","svelte-f3e4uo"),v(M,"href","/notes"),v(M,"class","svelte-f3e4uo"),v(S,"class","svelte-f3e4uo"),v(B,"href","/newsletter"),v(B,"class","svelte-f3e4uo"),v(C,"class","svelte-f3e4uo"),v(V,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),v(R,"viewBox","0 0 24 24"),v(R,"width","1em"),v(R,"height","1em"),v(R,"class","svelte-f3e4uo"),v(O,"aria-label","Twitter account"),v(O,"href","https://twitter.com/lihautan"),v(O,"class","svelte-f3e4uo"),v(K,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),v(G,"viewBox","0 0 24 24"),v(G,"width","1em"),v(G,"height","1em"),v(G,"class","svelte-f3e4uo"),v(D,"aria-label","Github account"),v(D,"href","https://github.com/tanhauhau"),v(D,"class","svelte-f3e4uo"),v(U,"class","social svelte-f3e4uo"),v(r,"class","svelte-f3e4uo"),v(n,"class","svelte-f3e4uo")},m(t,e){i(t,n,e),f(n,o),f(o,r),f(r,a),f(a,c),f(c,s),f(r,l),f(r,h),f(h,b),f(b,A),f(r,x),f(r,L),f(L,_),f(_,j),f(r,q),f(r,I),f(I,T),f(T,N),f(r,k),f(r,S),f(S,M),f(M,H),f(r,z),f(r,C),f(C,B),f(B,P),f(r,F),f(r,U),f(U,O),f(O,R),f(R,V),f(U,W),f(U,D),f(D,G),f(G,K)},p:t,i:t,o:t,d(t){t&&u(n)}}}class G extends W{constructor(t){super(),V(this,t,null,D,c,{})}}function K(t,e,n){const o=t.slice();return o[6]=e[n],o}function J(t,e,n){const o=t.slice();return o[6]=e[n],o}function Q(t){let e,n;return{c(){e=d("meta"),this.h()},l(t){e=y(t,"META",{name:!0,content:!0}),this.h()},h(){v(e,"name","keywords"),v(e,"content",n=t[6])},m(t,n){i(t,e,n)},p(t,o){4&o&&n!==(n=t[6])&&v(e,"content",n)},d(t){t&&u(e)}}}function X(t){let e,n,o=t[6]+"";return{c(){e=d("span"),n=p(o),this.h()},l(t){e=y(t,"SPAN",{class:!0});var r=$(e);n=E(r,o),r.forEach(u),this.h()},h(){v(e,"class","svelte-10cnqwo")},m(t,o){i(t,e,o),f(e,n)},p(t,e){4&e&&o!==(o=t[6]+"")&&b(n,o)},d(t){t&&u(e)}}}function Y(t){let e,n,o,r,a,c,m,A,x,L,_,j,q,I,T,N,k,S;document.title=e="Note: "+t[1]+" | Tan Li Hau";let M=t[2],H=[];for(let e=0;e<M.length;e+=1)H[e]=Q(J(t,M,e));L=new G({});let z=t[2],R=[];for(let e=0;e<z.length;e+=1)R[e]=X(K(t,z,e));const V=t[4].default,W=function(t,e,n,o){if(t){const r=s(t,e,n,o);return t[0](r)}}(V,t,t[3],null);return{c(){n=d("link"),o=d("meta"),r=d("meta");for(let t=0;t<H.length;t+=1)H[t].c();a=d("meta"),c=g(),m=d("a"),A=p("Skip to content"),x=g(),P(L.$$.fragment),_=g(),j=d("main"),q=d("h1"),I=p(t[1]),T=g();for(let t=0;t<R.length;t+=1)R[t].c();N=g(),k=d("article"),W&&W.c(),this.h()},l(e){const s=function(t,e=document.body){return Array.from(e.querySelectorAll(t))}('[data-svelte="svelte-ywf7m8"]',document.head);n=y(s,"LINK",{href:!0,rel:!0}),o=y(s,"META",{name:!0,content:!0}),r=y(s,"META",{name:!0,content:!0});for(let t=0;t<H.length;t+=1)H[t].l(s);a=y(s,"META",{itemprop:!0,content:!0}),s.forEach(u),c=w(e),m=y(e,"A",{href:!0,class:!0});var l=$(m);A=E(l,"Skip to content"),l.forEach(u),x=w(e),F(L.$$.fragment,e),_=w(e),j=y(e,"MAIN",{id:!0,class:!0});var f=$(j);q=y(f,"H1",{});var i=$(q);I=E(i,t[1]),i.forEach(u),T=w(f);for(let t=0;t<R.length;t+=1)R[t].l(f);N=w(f),k=y(f,"ARTICLE",{});var h=$(k);W&&W.l(h),h.forEach(u),f.forEach(u),this.h()},h(){v(n,"href","https://lihautan.com/notes/2019-06-21 - the friday after reactjs meetup/assets/blog-base-967d71e9.css"),v(n,"rel","stylesheet"),v(o,"name","og:title"),v(o,"content",t[0]),v(r,"name","og:type"),v(r,"content","website"),v(a,"itemprop","url"),v(a,"content","https%3A%2F%2Flihautan.com%2Fnotes%2F2019-06-21%20-%20the%20friday%20after%20reactjs%20meetup"),v(m,"href","#content"),v(m,"class","skip svelte-10cnqwo"),v(j,"id","content"),v(j,"class","blog svelte-10cnqwo")},m(t,e){f(document.head,n),f(document.head,o),f(document.head,r);for(let t=0;t<H.length;t+=1)H[t].m(document.head,null);f(document.head,a),i(t,c,e),i(t,m,e),f(m,A),i(t,x,e),U(L,t,e),i(t,_,e),i(t,j,e),f(j,q),f(q,I),f(j,T);for(let t=0;t<R.length;t+=1)R[t].m(j,null);f(j,N),f(j,k),W&&W.m(k,null),S=!0},p(t,[n]){if((!S||2&n)&&e!==(e="Note: "+t[1]+" | Tan Li Hau")&&(document.title=e),(!S||1&n)&&v(o,"content",t[0]),4&n){let e;for(M=t[2],e=0;e<M.length;e+=1){const o=J(t,M,e);H[e]?H[e].p(o,n):(H[e]=Q(o),H[e].c(),H[e].m(a.parentNode,a))}for(;e<H.length;e+=1)H[e].d(1);H.length=M.length}if((!S||2&n)&&b(I,t[1]),4&n){let e;for(z=t[2],e=0;e<z.length;e+=1){const o=K(t,z,e);R[e]?R[e].p(o,n):(R[e]=X(o),R[e].c(),R[e].m(j,N))}for(;e<R.length;e+=1)R[e].d(1);R.length=z.length}W&&W.p&&8&n&&l(W,V,t,t[3],n,null,null)},i(t){S||(C(L.$$.fragment,t),C(W,t),S=!0)},o(t){B(L.$$.fragment,t),B(W,t),S=!1},d(t){u(n),u(o),u(r),h(H,t),u(a),t&&u(c),t&&u(m),t&&u(x),O(L,t),t&&u(_),t&&u(j),h(R,t),W&&W.d(t)}}}function Z(t,e,n){let{name:o}=e,{title:r}=e,{tags:a=[]}=e,{$$slots:c={},$$scope:s}=e;return t.$set=t=>{"name"in t&&n(0,o=t.name),"title"in t&&n(1,r=t.title),"tags"in t&&n(2,a=t.tags),"$$scope"in t&&n(3,s=t.$$scope)},[o,r,a,s,c]}class tt extends W{constructor(t){super(),V(this,t,Z,Y,c,{name:0,title:1,tags:2})}}function et(t){let e,n,o,r,a,c,s,l,h,m,b,A,x,L,_,j,q,I,T,N,k,S,M,H,z,C,B,P;return{c(){e=d("ul"),n=d("li"),o=d("p"),r=d("a"),a=p("awesome-dev-podcast"),c=g(),s=d("li"),l=d("p"),h=p("gatsby notes"),m=g(),b=d("ul"),A=d("li"),x=p("graphql editor is in http://localhost:8000/___graphql"),L=g(),_=d("li"),j=d("p"),q=d("a"),I=p("module.children"),T=p(" can give you a list of modules required by the current module."),N=g(),k=d("ul"),S=d("li"),M=p("can use the dependency tree of current module"),H=g(),z=d("li"),C=p("use case: "),B=d("a"),P=p("require-and-watch.js"),this.h()},l(t){e=y(t,"UL",{});var f=$(e);n=y(f,"LI",{});var i=$(n);o=y(i,"P",{});var d=$(o);r=y(d,"A",{href:!0,rel:!0});var p=$(r);a=E(p,"awesome-dev-podcast"),p.forEach(u),d.forEach(u),i.forEach(u),c=w(f),s=y(f,"LI",{});var g=$(s);l=y(g,"P",{});var v=$(l);h=E(v,"gatsby notes"),v.forEach(u),m=w(g),b=y(g,"UL",{});var F=$(b);A=y(F,"LI",{});var U=$(A);x=E(U,"graphql editor is in http://localhost:8000/___graphql"),U.forEach(u),F.forEach(u),g.forEach(u),L=w(f),_=y(f,"LI",{});var O=$(_);j=y(O,"P",{});var R=$(j);q=y(R,"A",{href:!0,rel:!0});var V=$(q);I=E(V,"module.children"),V.forEach(u),T=E(R," can give you a list of modules required by the current module."),R.forEach(u),N=w(O),k=y(O,"UL",{});var W=$(k);S=y(W,"LI",{});var D=$(S);M=E(D,"can use the dependency tree of current module"),D.forEach(u),H=w(W),z=y(W,"LI",{});var G=$(z);C=E(G,"use case: "),B=y(G,"A",{href:!0,rel:!0});var K=$(B);P=E(K,"require-and-watch.js"),K.forEach(u),G.forEach(u),W.forEach(u),O.forEach(u),f.forEach(u),this.h()},h(){v(r,"href","https://github.com/sw-yx/awesome-dev-podcasts"),v(r,"rel","nofollow"),v(q,"href","https://nodejs.org/api/modules.html#modules_module_children"),v(q,"rel","nofollow"),v(B,"href","https://github.com/tanhauhau/tanhauhau.github.io/tree/dev/content/notes/snippets/require-and-watch.js"),v(B,"rel","nofollow")},m(t,u){i(t,e,u),f(e,n),f(n,o),f(o,r),f(r,a),f(e,c),f(e,s),f(s,l),f(l,h),f(s,m),f(s,b),f(b,A),f(A,x),f(e,L),f(e,_),f(_,j),f(j,q),f(q,I),f(j,T),f(_,N),f(_,k),f(k,S),f(S,M),f(k,H),f(k,z),f(z,C),f(z,B),f(B,P)},d(t){t&&u(e)}}}function nt(t){let n,o;const r=[ot];let a={$$slots:{default:[et]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)a=e(a,r[t]);return n=new tt({props:a}),{c(){P(n.$$.fragment)},l(t){F(n.$$.fragment,t)},m(t,e){U(n,t,e),o=!0},p(t,[e]){const o=0&e?function(t,e){const n={},o={},r={$$scope:1};let a=t.length;for(;a--;){const c=t[a],s=e[a];if(s){for(const t in c)t in s||(o[t]=1);for(const t in s)r[t]||(n[t]=s[t],r[t]=1);t[a]=s}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(r,[(a=ot,"object"==typeof a&&null!==a?a:{})]):{};var a;1&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){o||(C(n.$$.fragment,t),o=!0)},o(t){B(n.$$.fragment,t),o=!1},d(t){O(n,t)}}}const ot={slug:"notes/2019-06-21 - the friday after reactjs meetup",type:"notes",date:"2019-06-21",name:"the friday after reactjs meetup",title:"2019-06-21 - the friday after reactjs meetup",layout:"note"};class rt extends W{constructor(t){super(),V(this,t,null,nt,c,{})}}setTimeout(()=>{new rt({target:document.querySelector("#app"),hydrate:!0});if(document.querySelector(".twitter-tweet")){const t=document.createElement("script");t.async=!0,t.src="https://platform.twitter.com/widgets.js",t.charset="utf-8",document.body.appendChild(t)}if("loading"in HTMLImageElement.prototype){document.querySelectorAll('img[loading="lazy"]').forEach(t=>{t.src=t.dataset.src})}else{const t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js",document.body.appendChild(t)}},3e3);
