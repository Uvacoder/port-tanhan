function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function a(){return Object.create(null)}function o(e){e.forEach(n)}function s(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,n,a,o){return e[1]&&o?t(a.ctx.slice(),e[1](o(n))):a.ctx}function r(e,t,n,a,o,s,i){const r=function(e,t,n,a){if(e[2]&&a){const o=e[2](a(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let a=0;a<n;a+=1)e[a]=t.dirty[a]|o[a];return e}return t.dirty|o}return t.dirty}(t,a,o,s);if(r){const o=c(t,n,a,i);e.p(o,r)}}function l(e,t){e.appendChild(t)}function u(e,t,n){e.insertBefore(t,n||null)}function h(e){e.parentNode.removeChild(e)}function d(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function f(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function m(e){return document.createTextNode(e)}function g(){return m(" ")}function y(){return m("")}function b(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function v(e){return Array.from(e.childNodes)}function E(e,t,n,a){for(let a=0;a<e.length;a+=1){const o=e[a];if(o.nodeName===t){let t=0;const s=[];for(;t<o.attributes.length;){const e=o.attributes[t++];n[e.name]||s.push(e.name)}for(let e=0;e<s.length;e++)o.removeAttribute(s[e]);return e.splice(a,1)[0]}}return a?f(t):p(t)}function w(e,t){for(let n=0;n<e.length;n+=1){const a=e[n];if(3===a.nodeType)return a.data=""+t,e.splice(n,1)[0]}return m(t)}function k(e){return w(e," ")}function $(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function I(e,t){e.value=null==t?"":t}class A{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,n=null){this.e||(this.e=p(t.nodeName),this.t=t,this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)u(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(h)}}let T;function S(e){T=e}function x(e){(function(){if(!T)throw new Error("Function called outside component initialization");return T})().$$.on_mount.push(e)}const j=[],P=[],C=[],O=[],U=Promise.resolve();let M=!1;function L(e){C.push(e)}let _=!1;const R=new Set;function N(){if(!_){_=!0;do{for(let e=0;e<j.length;e+=1){const t=j[e];S(t),H(t.$$)}for(j.length=0;P.length;)P.pop()();for(let e=0;e<C.length;e+=1){const t=C[e];R.has(t)||(R.add(t),t())}C.length=0}while(j.length);for(;O.length;)O.pop()();M=!1,_=!1,R.clear()}}function H(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}const z=new Set;function J(e,t){e&&e.i&&(z.delete(e),e.i(t))}function B(e,t,n,a){if(e&&e.o){if(z.has(e))return;z.add(e),(void 0).c.push(()=>{z.delete(e),a&&(n&&e.d(1),a())}),e.o(t)}}function G(e){e&&e.c()}function D(e,t){e&&e.l(t)}function F(e,t,a){const{fragment:i,on_mount:c,on_destroy:r,after_update:l}=e.$$;i&&i.m(t,a),L(()=>{const t=c.map(n).filter(s);r?r.push(...t):o(t),e.$$.on_mount=[]}),l.forEach(L)}function q(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function W(e,t){-1===e.$$.dirty[0]&&(j.push(e),M||(M=!0,U.then(N)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function V(t,n,s,i,c,r,l=[-1]){const u=T;S(t);const d=n.props||{},p=t.$$={fragment:null,ctx:null,props:r,update:e,not_equal:c,bound:a(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:a(),dirty:l};let f=!1;if(p.ctx=s?s(t,d,(e,n,...a)=>{const o=a.length?a[0]:n;return p.ctx&&c(p.ctx[e],p.ctx[e]=o)&&(p.bound[e]&&p.bound[e](o),f&&W(t,e)),n}):[],p.update(),f=!0,o(p.before_update),p.fragment=!!i&&i(p.ctx),n.target){if(n.hydrate){const e=v(n.target);p.fragment&&p.fragment.l(e),e.forEach(h)}else p.fragment&&p.fragment.c();n.intro&&J(t.$$.fragment),F(t,n.target,n.anchor),N()}S(u)}class Y{$destroy(){q(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function K(t){let n,a,o,s,i,c,r,d,y,$,I,A,T,S,x,j,P,C,O,U,M,L,_,R,N,H,z,J,B,G,D,F,q,W,V;return{c(){n=p("header"),a=p("nav"),o=p("ul"),s=p("li"),i=p("a"),c=m("Tan Li Hau"),r=g(),d=p("li"),y=p("a"),$=m("About"),I=g(),A=p("li"),T=p("a"),S=m("Writings"),x=g(),j=p("li"),P=p("a"),C=m("Talks"),O=g(),U=p("li"),M=p("a"),L=m("Notes"),_=g(),R=p("li"),N=p("a"),H=m("Newsletter"),z=g(),J=p("li"),B=p("a"),G=f("svg"),D=f("path"),F=g(),q=p("a"),W=f("svg"),V=f("path"),this.h()},l(e){n=E(e,"HEADER",{class:!0});var t=v(n);a=E(t,"NAV",{});var l=v(a);o=E(l,"UL",{class:!0});var u=v(o);s=E(u,"LI",{class:!0});var p=v(s);i=E(p,"A",{href:!0,class:!0});var f=v(i);c=w(f,"Tan Li Hau"),f.forEach(h),p.forEach(h),r=k(u),d=E(u,"LI",{class:!0});var m=v(d);y=E(m,"A",{href:!0,class:!0});var g=v(y);$=w(g,"About"),g.forEach(h),m.forEach(h),I=k(u),A=E(u,"LI",{class:!0});var b=v(A);T=E(b,"A",{href:!0,class:!0});var Y=v(T);S=w(Y,"Writings"),Y.forEach(h),b.forEach(h),x=k(u),j=E(u,"LI",{class:!0});var K=v(j);P=E(K,"A",{href:!0,class:!0});var Z=v(P);C=w(Z,"Talks"),Z.forEach(h),K.forEach(h),O=k(u),U=E(u,"LI",{class:!0});var Q=v(U);M=E(Q,"A",{href:!0,class:!0});var X=v(M);L=w(X,"Notes"),X.forEach(h),Q.forEach(h),_=k(u),R=E(u,"LI",{class:!0});var ee=v(R);N=E(ee,"A",{href:!0,class:!0});var te=v(N);H=w(te,"Newsletter"),te.forEach(h),ee.forEach(h),z=k(u),J=E(u,"LI",{class:!0});var ne=v(J);B=E(ne,"A",{"aria-label":!0,href:!0,class:!0});var ae=v(B);G=E(ae,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var oe=v(G);D=E(oe,"path",{d:!0},1),v(D).forEach(h),oe.forEach(h),ae.forEach(h),F=k(ne),q=E(ne,"A",{"aria-label":!0,href:!0,class:!0});var se=v(q);W=E(se,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var ie=v(W);V=E(ie,"path",{d:!0},1),v(V).forEach(h),ie.forEach(h),se.forEach(h),ne.forEach(h),u.forEach(h),l.forEach(h),t.forEach(h),this.h()},h(){b(i,"href","/"),b(i,"class","svelte-f3e4uo"),b(s,"class","svelte-f3e4uo"),b(y,"href","/about"),b(y,"class","svelte-f3e4uo"),b(d,"class","svelte-f3e4uo"),b(T,"href","/blogs"),b(T,"class","svelte-f3e4uo"),b(A,"class","svelte-f3e4uo"),b(P,"href","/talks"),b(P,"class","svelte-f3e4uo"),b(j,"class","svelte-f3e4uo"),b(M,"href","/notes"),b(M,"class","svelte-f3e4uo"),b(U,"class","svelte-f3e4uo"),b(N,"href","/newsletter"),b(N,"class","svelte-f3e4uo"),b(R,"class","svelte-f3e4uo"),b(D,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),b(G,"viewBox","0 0 24 24"),b(G,"width","1em"),b(G,"height","1em"),b(G,"class","svelte-f3e4uo"),b(B,"aria-label","Twitter account"),b(B,"href","https://twitter.com/lihautan"),b(B,"class","svelte-f3e4uo"),b(V,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),b(W,"viewBox","0 0 24 24"),b(W,"width","1em"),b(W,"height","1em"),b(W,"class","svelte-f3e4uo"),b(q,"aria-label","Github account"),b(q,"href","https://github.com/tanhauhau"),b(q,"class","svelte-f3e4uo"),b(J,"class","social svelte-f3e4uo"),b(o,"class","svelte-f3e4uo"),b(n,"class","svelte-f3e4uo")},m(e,t){u(e,n,t),l(n,a),l(a,o),l(o,s),l(s,i),l(i,c),l(o,r),l(o,d),l(d,y),l(y,$),l(o,I),l(o,A),l(A,T),l(T,S),l(o,x),l(o,j),l(j,P),l(P,C),l(o,O),l(o,U),l(U,M),l(M,L),l(o,_),l(o,R),l(R,N),l(N,H),l(o,z),l(o,J),l(J,B),l(B,G),l(G,D),l(J,F),l(J,q),l(q,W),l(W,V)},p:e,i:e,o:e,d(e){e&&h(n)}}}class Z extends Y{constructor(e){super(),V(this,e,null,K,i,{})}}function Q(t){let n,a,o,s,i,c,r,d,f,y,$,A,T,S,x,j,P,C,O,U;return{c(){n=p("div"),a=p("h1"),o=m("Subscribe to my newsletter"),s=g(),i=p("h2"),c=m("Get the latest blog posts and project updates delivered right to your inbox"),r=g(),d=p("form"),f=p("div"),y=p("input"),$=g(),A=p("input"),S=g(),x=p("input"),j=g(),P=p("p"),C=m("Powered by Buttondown."),this.h()},l(e){n=E(e,"DIV",{class:!0});var t=v(n);a=E(t,"H1",{});var l=v(a);o=w(l,"Subscribe to my newsletter"),l.forEach(h),s=k(t),i=E(t,"H2",{class:!0});var u=v(i);c=w(u,"Get the latest blog posts and project updates delivered right to your inbox"),u.forEach(h),r=k(t),d=E(t,"FORM",{action:!0,method:!0,target:!0,onsubmit:!0,class:!0});var p=v(d);f=E(p,"DIV",{class:!0});var m=v(f);y=E(m,"INPUT",{type:!0,name:!0,id:!0,"aria-label":!0,placeholder:!0,class:!0}),$=k(m),A=E(m,"INPUT",{type:!0,value:!0,disabled:!0,class:!0}),m.forEach(h),S=k(p),x=E(p,"INPUT",{type:!0,value:!0,name:!0,class:!0}),j=k(p),P=E(p,"P",{class:!0});var g=v(P);C=w(g,"Powered by Buttondown."),g.forEach(h),p.forEach(h),t.forEach(h),this.h()},h(){b(i,"class","svelte-1k1s1co"),b(y,"type","email"),b(y,"name","email"),b(y,"id","bd-email"),b(y,"aria-label","email address"),b(y,"placeholder","youremail@example.com"),b(y,"class","svelte-1k1s1co"),b(A,"type","submit"),A.value="Subscribe",A.disabled=T=!t[0],b(A,"class","svelte-1k1s1co"),b(f,"class","form-item svelte-1k1s1co"),b(x,"type","hidden"),x.value="1",b(x,"name","embed"),b(x,"class","svelte-1k1s1co"),b(P,"class","svelte-1k1s1co"),b(d,"action","https://buttondown.email/api/emails/embed-subscribe/lihautan"),b(d,"method","post"),b(d,"target","popupwindow"),b(d,"onsubmit","window.open('https://buttondown.email/lihautan', 'popupwindow')"),b(d,"class","embeddable-buttondown-form"),b(n,"class","form svelte-1k1s1co")},m(e,h){var p,m,g,b;u(e,n,h),l(n,a),l(a,o),l(n,s),l(n,i),l(i,c),l(n,r),l(n,d),l(d,f),l(f,y),I(y,t[0]),l(f,$),l(f,A),l(d,S),l(d,x),l(d,j),l(d,P),l(P,C),O||(p=y,m="input",g=t[1],p.addEventListener(m,g,b),U=()=>p.removeEventListener(m,g,b),O=!0)},p(e,[t]){1&t&&y.value!==e[0]&&I(y,e[0]),1&t&&T!==(T=!e[0])&&(A.disabled=T)},i:e,o:e,d(e){e&&h(n),O=!1,U()}}}function X(e,t,n){let a;return[a,function(){a=this.value,n(0,a)}]}class ee extends Y{constructor(e){super(),V(this,e,X,Q,i,{})}}function te(e){return x(()=>(setTimeout(()=>{if(window.innerWidth>1080){const e=document.createElement("script");e.async=!0,e.type="text/javascript",e.src="//cdn.carbonads.com/carbon.js?serve=CE7ITK3E&placement=lihautancom",e.id="_carbonads_js",document.body.appendChild(e)}},5e3),()=>{try{const e=document.getElementById("carbonads");e.parentNode.removeChild(e)}catch(e){}})),[]}class ne extends Y{constructor(e){super(),V(this,e,te,null,i,{})}}function ae(e,t,n){const a=e.slice();return a[6]=t[n],a}function oe(e,t,n){const a=e.slice();return a[6]=t[n],a}function se(e){let t,n;return{c(){t=p("meta"),this.h()},l(e){t=E(e,"META",{name:!0,content:!0}),this.h()},h(){b(t,"name","keywords"),b(t,"content",n=e[6])},m(e,n){u(e,t,n)},p(e,a){4&a&&n!==(n=e[6])&&b(t,"content",n)},d(e){e&&h(t)}}}function ie(e){let t,n,a=e[6]+"";return{c(){t=p("span"),n=m(a),this.h()},l(e){t=E(e,"SPAN",{class:!0});var o=v(t);n=w(o,a),o.forEach(h),this.h()},h(){b(t,"class","svelte-9tqnza")},m(e,a){u(e,t,a),l(t,n)},p(e,t){4&t&&a!==(a=e[6]+"")&&$(n,a)},d(e){e&&h(t)}}}function ce(e){let t,n,a,o,s,i,f,I,T,S,x,j,P,C,O,U,M,L,_,R,N,H,z,W,V,Y,K,Q,X,te,ce,re,le,ue,he,de,pe,fe,me,ge=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"Article",author:e[3],copyrightHolder:e[3],copyrightYear:"2020",creator:e[3],publisher:e[3],description:e[1],headline:e[0],name:e[0],inLanguage:"en"})}<\/script>`,ye=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",description:"Breadcrumbs list",name:"Breadcrumbs",itemListElement:[{"@type":"ListItem",item:{"@id":"https://lihautan.com",name:"Homepage"},position:1},{"@type":"ListItem",item:{"@id":"https%3A%2F%2Flihautan.com%2Fuglify-ascii-only",name:e[0]},position:2}]})}<\/script>`;document.title=t=e[0]+" | Tan Li Hau";let be=e[2],ve=[];for(let t=0;t<be.length;t+=1)ve[t]=se(oe(e,be,t));z=new Z({});let Ee=e[2],we=[];for(let t=0;t<Ee.length;t+=1)we[t]=ie(ae(e,Ee,t));const ke=e[5].default,$e=function(e,t,n,a){if(e){const o=c(e,t,n,a);return e[0](o)}}(ke,e,e[4],null);return le=new ee({}),he=new ne({}),{c(){n=p("meta"),a=p("meta"),o=p("meta"),s=p("meta"),i=p("meta"),f=p("meta"),I=p("meta"),T=p("meta"),S=p("meta"),x=p("meta"),j=p("meta");for(let e=0;e<ve.length;e+=1)ve[e].c();P=p("meta"),C=p("meta"),U=y(),L=y(),_=g(),R=p("a"),N=m("Skip to content"),H=g(),G(z.$$.fragment),W=g(),V=p("main"),Y=p("h1"),K=m(e[0]),Q=g();for(let e=0;e<we.length;e+=1)we[e].c();X=g(),te=p("article"),$e&&$e.c(),ce=g(),re=p("footer"),G(le.$$.fragment),ue=g(),G(he.$$.fragment),de=g(),fe=y(),this.h()},l(t){const c=function(e,t=document.body){return Array.from(t.querySelectorAll(e))}('[data-svelte="svelte-n0q11s"]',document.head);n=E(c,"META",{name:!0,content:!0}),a=E(c,"META",{name:!0,content:!0}),o=E(c,"META",{name:!0,content:!0}),s=E(c,"META",{name:!0,content:!0}),i=E(c,"META",{name:!0,content:!0}),f=E(c,"META",{name:!0,content:!0}),I=E(c,"META",{name:!0,content:!0}),T=E(c,"META",{name:!0,content:!0}),S=E(c,"META",{name:!0,content:!0}),x=E(c,"META",{name:!0,content:!0}),j=E(c,"META",{name:!0,content:!0});for(let e=0;e<ve.length;e+=1)ve[e].l(c);P=E(c,"META",{itemprop:!0,content:!0}),C=E(c,"META",{itemprop:!0,content:!0}),U=y(),L=y(),c.forEach(h),_=k(t),R=E(t,"A",{href:!0,class:!0});var r=v(R);N=w(r,"Skip to content"),r.forEach(h),H=k(t),D(z.$$.fragment,t),W=k(t),V=E(t,"MAIN",{id:!0,class:!0});var l=v(V);Y=E(l,"H1",{});var u=v(Y);K=w(u,e[0]),u.forEach(h),Q=k(l);for(let e=0;e<we.length;e+=1)we[e].l(l);X=k(l),te=E(l,"ARTICLE",{});var d=v(te);$e&&$e.l(d),d.forEach(h),l.forEach(h),ce=k(t),re=E(t,"FOOTER",{class:!0});var p=v(re);D(le.$$.fragment,p),ue=k(p),D(he.$$.fragment,p),p.forEach(h),de=k(t),fe=y(),this.h()},h(){b(n,"name","description"),b(n,"content",e[1]),b(a,"name","image"),b(a,"content",null),b(o,"name","og:image"),b(o,"content",null),b(s,"name","og:title"),b(s,"content",e[0]),b(i,"name","og:description"),b(i,"content",e[1]),b(f,"name","og:type"),b(f,"content","website"),b(I,"name","twitter:card"),b(I,"content","summary_large_image"),b(T,"name","twitter:creator"),b(T,"content","@lihautan"),b(S,"name","twitter:title"),b(S,"content",e[0]),b(x,"name","twitter:description"),b(x,"content",e[1]),b(j,"name","twitter:image"),b(j,"content",null),b(P,"itemprop","url"),b(P,"content","https%3A%2F%2Flihautan.com%2Fuglify-ascii-only"),b(C,"itemprop","image"),b(C,"content",null),O=new A(U),M=new A(L),b(R,"href","#content"),b(R,"class","skip svelte-9tqnza"),b(V,"id","content"),b(V,"class","blog svelte-9tqnza"),b(re,"class","svelte-9tqnza"),pe=new A(fe)},m(e,t){l(document.head,n),l(document.head,a),l(document.head,o),l(document.head,s),l(document.head,i),l(document.head,f),l(document.head,I),l(document.head,T),l(document.head,S),l(document.head,x),l(document.head,j);for(let e=0;e<ve.length;e+=1)ve[e].m(document.head,null);l(document.head,P),l(document.head,C),O.m(ge,document.head),l(document.head,U),M.m(ye,document.head),l(document.head,L),u(e,_,t),u(e,R,t),l(R,N),u(e,H,t),F(z,e,t),u(e,W,t),u(e,V,t),l(V,Y),l(Y,K),l(V,Q);for(let e=0;e<we.length;e+=1)we[e].m(V,null);l(V,X),l(V,te),$e&&$e.m(te,null),u(e,ce,t),u(e,re,t),F(le,re,null),l(re,ue),F(he,re,null),u(e,de,t),pe.m('<script async defer src="https://platform.twitter.com/widgets.js" charset="utf-8"><\/script>',e,t),u(e,fe,t),me=!0},p(e,[a]){if((!me||1&a)&&t!==(t=e[0]+" | Tan Li Hau")&&(document.title=t),(!me||2&a)&&b(n,"content",e[1]),(!me||1&a)&&b(s,"content",e[0]),(!me||2&a)&&b(i,"content",e[1]),(!me||1&a)&&b(S,"content",e[0]),(!me||2&a)&&b(x,"content",e[1]),4&a){let t;for(be=e[2],t=0;t<be.length;t+=1){const n=oe(e,be,t);ve[t]?ve[t].p(n,a):(ve[t]=se(n),ve[t].c(),ve[t].m(P.parentNode,P))}for(;t<ve.length;t+=1)ve[t].d(1);ve.length=be.length}if((!me||3&a)&&ge!==(ge=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"Article",author:e[3],copyrightHolder:e[3],copyrightYear:"2020",creator:e[3],publisher:e[3],description:e[1],headline:e[0],name:e[0],inLanguage:"en"})}<\/script>`)&&O.p(ge),(!me||1&a)&&ye!==(ye=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",description:"Breadcrumbs list",name:"Breadcrumbs",itemListElement:[{"@type":"ListItem",item:{"@id":"https://lihautan.com",name:"Homepage"},position:1},{"@type":"ListItem",item:{"@id":"https%3A%2F%2Flihautan.com%2Fuglify-ascii-only",name:e[0]},position:2}]})}<\/script>`)&&M.p(ye),(!me||1&a)&&$(K,e[0]),4&a){let t;for(Ee=e[2],t=0;t<Ee.length;t+=1){const n=ae(e,Ee,t);we[t]?we[t].p(n,a):(we[t]=ie(n),we[t].c(),we[t].m(V,X))}for(;t<we.length;t+=1)we[t].d(1);we.length=Ee.length}$e&&$e.p&&16&a&&r($e,ke,e,e[4],a,null,null)},i(e){me||(J(z.$$.fragment,e),J($e,e),J(le.$$.fragment,e),J(he.$$.fragment,e),me=!0)},o(e){B(z.$$.fragment,e),B($e,e),B(le.$$.fragment,e),B(he.$$.fragment,e),me=!1},d(e){h(n),h(a),h(o),h(s),h(i),h(f),h(I),h(T),h(S),h(x),h(j),d(ve,e),h(P),h(C),h(U),e&&O.d(),h(L),e&&M.d(),e&&h(_),e&&h(R),e&&h(H),q(z,e),e&&h(W),e&&h(V),d(we,e),$e&&$e.d(e),e&&h(ce),e&&h(re),q(le),q(he),e&&h(de),e&&h(fe),e&&pe.d()}}}function re(e,t,n){let{title:a=""}=t,{description:o=""}=t,{tags:s=[]}=t;const i={"@type":"Person",name:"Tan Li Hau"};let{$$slots:c={},$$scope:r}=t;return e.$set=e=>{"title"in e&&n(0,a=e.title),"description"in e&&n(1,o=e.description),"tags"in e&&n(2,s=e.tags),"$$scope"in e&&n(4,r=e.$$scope)},[a,o,s,i,r,c]}class le extends Y{constructor(e){super(),V(this,e,re,ce,i,{title:0,description:1,tags:2})}}function ue(t){let n,a,o,s,i,c,r,d,f,y,$,I,A,T,S,x,j,P,C,O,U,M,L,_,R,N,H,z,J,B,G,D,F,q,W,V,Y,K,Z,Q,X,ee,te,ne,ae,oe,se,ie,ce,re,le,ue,he,de,pe,fe,me,ge,ye,be,ve,Ee,we,ke,$e,Ie,Ae,Te,Se,xe,je,Pe,Ce,Oe,Ue,Me,Le,_e,Re,Ne,He,ze,Je,Be,Ge,De,Fe,qe,We,Ve,Ye,Ke,Ze,Qe,Xe,et,tt,nt,at,ot,st,it,ct,rt,lt,ut,ht,dt,pt,ft,mt,gt,yt,bt,vt,Et,wt,kt,$t,It,At,Tt,St,xt,jt,Pt,Ct,Ot,Ut,Mt,Lt,_t,Rt,Nt,Ht,zt,Jt,Bt,Gt,Dt,Ft,qt,Wt,Vt,Yt,Kt,Zt,Qt,Xt,en,tn,nn,an,on,sn,cn;return{c(){n=p("section"),a=p("ul"),o=p("li"),s=p("a"),i=m("TIL: UglifyJs ascii_only option, use it when you want to escape Unicode characters."),c=g(),r=p("p"),d=m("The background story"),f=g(),y=p("p"),$=m("I was working on a chrome extension, and trying to add some emojis 😍😀😎 into the extension, however I realised the 😍😀😎 are not rendered correctly!"),I=g(),A=p("p"),T=p("picture"),S=p("source"),x=p("source"),j=p("img"),P=g(),C=p("p"),O=m("And so I inspect the source code loaded into the chrome extension, it wasn’t loaded correctly as well!"),U=g(),M=p("p"),L=p("picture"),_=p("source"),R=p("source"),N=p("img"),H=g(),z=p("p"),J=m("And so I think, probably the encoding issue was caused by the webpack compilation, but, my compiled code looks exactly fine!"),B=g(),G=p("p"),D=p("picture"),F=p("source"),q=p("source"),W=p("img"),V=g(),Y=p("p"),K=m("So, most likely is a decoding issue when the emoji code get loaded into chrome extension. So I manually changed the emoji in the compiled code to "),Z=p("code"),Q=m("\\ud83d\\ude0d"),X=m(" (unicode for 😍). Guess what? The emoji is showing correctly in the chrome extension!"),ee=g(),te=p("p"),ne=p("picture"),ae=p("source"),oe=p("source"),se=p("img"),ie=g(),ce=p("p"),re=m("So I changed my source code to manually type in the unicode, and compiled it using webpack. To my surprise, the unicode was compiled back into the emoji (😍) it represents!"),le=g(),ue=p("p"),he=m("I googled around and I found "),de=p("a"),pe=m("this fix for babel-generator"),fe=m(":"),me=g(),ge=p("p"),ye=p("picture"),be=p("source"),ve=p("source"),Ee=p("img"),we=g(),ke=p("p"),$e=m("I checked my babel version, and it had included this fix. So what went wrong?"),Ie=g(),Ae=p("hr"),Te=g(),Se=p("p"),xe=m("My colleague reminded me that during webpack compilation, there are 2 phases, the "),je=p("strong"),Pe=m("transpilation"),Ce=m(" (via babel) and the "),Oe=p("strong"),Ue=m("minification"),Me=m(" (via uglify plugin)."),Le=g(),_e=p("p"),Re=m("So I disabled the optimisation in webpack config, and noticed that my compiled code contains the original unicode string ("),Ne=p("code"),He=m("\\ud83d\\ude0d"),ze=m("), instead of the emoji (😍) string. So the unicode string was converted to emoji string during minification!"),Je=g(),Be=p("p"),Ge=m("So I went to my favourite "),De=p("a"),Fe=m("Online JavaScript Minifier"),qe=m(" (by "),We=p("a"),Ve=m("skalman"),Ye=m(") to try it out."),Ke=g(),Ze=p("p"),Qe=p("picture"),Xe=p("source"),et=p("source"),tt=p("img"),nt=g(),at=p("p"),ot=m("After some googling, I "),st=p("a"),it=m("found this issue"),ct=m(" which described my scenario perfectly."),rt=g(),lt=p("p"),ut=p("picture"),ht=p("source"),dt=p("source"),pt=p("img"),ft=g(),mt=p("p"),gt=m("Turned out there is a "),yt=p("code"),bt=m("ascii_only"),vt=m(" for "),Et=p("a"),wt=m("output options"),kt=m(", and it is default to "),$t=p("code"),It=m("false"),At=m(". So I set "),Tt=p("code"),St=m("ascii_only"),xt=m(" to "),jt=p("code"),Pt=m("true"),Ct=m(", ran webpack, and checked my compiled code, it contained the unicode string ("),Ot=p("code"),Ut=m("\\ud83d\\ude0d"),Mt=m(")! And even when I wrote emoji string (😍) in my source code, it got compiled to unicode as well."),Lt=g(),_t=p("pre"),Rt=g(),Nt=p("hr"),Ht=g(),zt=p("section"),Jt=p("h2"),Bt=p("a"),Gt=m("TIL: UglifyJs ascii_only option, use it when you want to escape Unicode characters."),Dt=g(),Ft=p("hr"),qt=g(),Wt=p("p"),Vt=m("Why is there a "),Yt=p("code"),Kt=m("ascii_only"),Zt=m(" option?"),Qt=g(),Xt=p("p"),en=m("My guess is that it takes less space for a unicode character (16–17bit) than the escaped ascii characters (6 "),tn=p("em"),nn=m("8 bit — 12"),an=m(" bit), that’s why using unicode character is the default option ("),on=p("code"),sn=m("ascii_only=false"),cn=m(")."),this.h()},l(e){n=E(e,"SECTION",{});var t=v(n);a=E(t,"UL",{class:!0,id:!0,role:!0,"aria-label":!0});var l=v(a);o=E(l,"LI",{});var u=v(o);s=E(u,"A",{href:!0});var p=v(s);i=w(p,"TIL: UglifyJs ascii_only option, use it when you want to escape Unicode characters."),p.forEach(h),u.forEach(h),l.forEach(h),t.forEach(h),c=k(e),r=E(e,"P",{});var m=v(r);d=w(m,"The background story"),m.forEach(h),f=k(e),y=E(e,"P",{});var g=v(y);$=w(g,"I was working on a chrome extension, and trying to add some emojis 😍😀😎 into the extension, however I realised the 😍😀😎 are not rendered correctly!"),g.forEach(h),I=k(e),A=E(e,"P",{});var b=v(A);T=E(b,"PICTURE",{});var rn=v(T);S=E(rn,"SOURCE",{type:!0,srcset:!0}),x=E(rn,"SOURCE",{type:!0,srcset:!0}),j=E(rn,"IMG",{title:!0,alt:!0,"data-src":!0,loading:!0}),rn.forEach(h),b.forEach(h),P=k(e),C=E(e,"P",{});var ln=v(C);O=w(ln,"And so I inspect the source code loaded into the chrome extension, it wasn’t loaded correctly as well!"),ln.forEach(h),U=k(e),M=E(e,"P",{});var un=v(M);L=E(un,"PICTURE",{});var hn=v(L);_=E(hn,"SOURCE",{type:!0,srcset:!0}),R=E(hn,"SOURCE",{type:!0,srcset:!0}),N=E(hn,"IMG",{title:!0,alt:!0,"data-src":!0,loading:!0}),hn.forEach(h),un.forEach(h),H=k(e),z=E(e,"P",{});var dn=v(z);J=w(dn,"And so I think, probably the encoding issue was caused by the webpack compilation, but, my compiled code looks exactly fine!"),dn.forEach(h),B=k(e),G=E(e,"P",{});var pn=v(G);D=E(pn,"PICTURE",{});var fn=v(D);F=E(fn,"SOURCE",{type:!0,srcset:!0}),q=E(fn,"SOURCE",{type:!0,srcset:!0}),W=E(fn,"IMG",{title:!0,alt:!0,"data-src":!0,loading:!0}),fn.forEach(h),pn.forEach(h),V=k(e),Y=E(e,"P",{});var mn=v(Y);K=w(mn,"So, most likely is a decoding issue when the emoji code get loaded into chrome extension. So I manually changed the emoji in the compiled code to "),Z=E(mn,"CODE",{});var gn=v(Z);Q=w(gn,"\\ud83d\\ude0d"),gn.forEach(h),X=w(mn," (unicode for 😍). Guess what? The emoji is showing correctly in the chrome extension!"),mn.forEach(h),ee=k(e),te=E(e,"P",{});var yn=v(te);ne=E(yn,"PICTURE",{});var bn=v(ne);ae=E(bn,"SOURCE",{type:!0,srcset:!0}),oe=E(bn,"SOURCE",{type:!0,srcset:!0}),se=E(bn,"IMG",{title:!0,alt:!0,"data-src":!0,loading:!0}),bn.forEach(h),yn.forEach(h),ie=k(e),ce=E(e,"P",{});var vn=v(ce);re=w(vn,"So I changed my source code to manually type in the unicode, and compiled it using webpack. To my surprise, the unicode was compiled back into the emoji (😍) it represents!"),vn.forEach(h),le=k(e),ue=E(e,"P",{});var En=v(ue);he=w(En,"I googled around and I found "),de=E(En,"A",{href:!0,rel:!0});var wn=v(de);pe=w(wn,"this fix for babel-generator"),wn.forEach(h),fe=w(En,":"),En.forEach(h),me=k(e),ge=E(e,"P",{});var kn=v(ge);ye=E(kn,"PICTURE",{});var $n=v(ye);be=E($n,"SOURCE",{type:!0,srcset:!0}),ve=E($n,"SOURCE",{type:!0,srcset:!0}),Ee=E($n,"IMG",{title:!0,alt:!0,"data-src":!0,loading:!0}),$n.forEach(h),kn.forEach(h),we=k(e),ke=E(e,"P",{});var In=v(ke);$e=w(In,"I checked my babel version, and it had included this fix. So what went wrong?"),In.forEach(h),Ie=k(e),Ae=E(e,"HR",{}),Te=k(e),Se=E(e,"P",{});var An=v(Se);xe=w(An,"My colleague reminded me that during webpack compilation, there are 2 phases, the "),je=E(An,"STRONG",{});var Tn=v(je);Pe=w(Tn,"transpilation"),Tn.forEach(h),Ce=w(An," (via babel) and the "),Oe=E(An,"STRONG",{});var Sn=v(Oe);Ue=w(Sn,"minification"),Sn.forEach(h),Me=w(An," (via uglify plugin)."),An.forEach(h),Le=k(e),_e=E(e,"P",{});var xn=v(_e);Re=w(xn,"So I disabled the optimisation in webpack config, and noticed that my compiled code contains the original unicode string ("),Ne=E(xn,"CODE",{});var jn=v(Ne);He=w(jn,"\\ud83d\\ude0d"),jn.forEach(h),ze=w(xn,"), instead of the emoji (😍) string. So the unicode string was converted to emoji string during minification!"),xn.forEach(h),Je=k(e),Be=E(e,"P",{});var Pn=v(Be);Ge=w(Pn,"So I went to my favourite "),De=E(Pn,"A",{href:!0,rel:!0});var Cn=v(De);Fe=w(Cn,"Online JavaScript Minifier"),Cn.forEach(h),qe=w(Pn," (by "),We=E(Pn,"A",{href:!0,rel:!0});var On=v(We);Ve=w(On,"skalman"),On.forEach(h),Ye=w(Pn,") to try it out."),Pn.forEach(h),Ke=k(e),Ze=E(e,"P",{});var Un=v(Ze);Qe=E(Un,"PICTURE",{});var Mn=v(Qe);Xe=E(Mn,"SOURCE",{type:!0,srcset:!0}),et=E(Mn,"SOURCE",{type:!0,srcset:!0}),tt=E(Mn,"IMG",{title:!0,alt:!0,"data-src":!0,loading:!0}),Mn.forEach(h),Un.forEach(h),nt=k(e),at=E(e,"P",{});var Ln=v(at);ot=w(Ln,"After some googling, I "),st=E(Ln,"A",{href:!0,rel:!0});var _n=v(st);it=w(_n,"found this issue"),_n.forEach(h),ct=w(Ln," which described my scenario perfectly."),Ln.forEach(h),rt=k(e),lt=E(e,"P",{});var Rn=v(lt);ut=E(Rn,"PICTURE",{});var Nn=v(ut);ht=E(Nn,"SOURCE",{type:!0,srcset:!0}),dt=E(Nn,"SOURCE",{type:!0,srcset:!0}),pt=E(Nn,"IMG",{title:!0,alt:!0,"data-src":!0,loading:!0}),Nn.forEach(h),Rn.forEach(h),ft=k(e),mt=E(e,"P",{});var Hn=v(mt);gt=w(Hn,"Turned out there is a "),yt=E(Hn,"CODE",{});var zn=v(yt);bt=w(zn,"ascii_only"),zn.forEach(h),vt=w(Hn," for "),Et=E(Hn,"A",{href:!0,rel:!0});var Jn=v(Et);wt=w(Jn,"output options"),Jn.forEach(h),kt=w(Hn,", and it is default to "),$t=E(Hn,"CODE",{});var Bn=v($t);It=w(Bn,"false"),Bn.forEach(h),At=w(Hn,". So I set "),Tt=E(Hn,"CODE",{});var Gn=v(Tt);St=w(Gn,"ascii_only"),Gn.forEach(h),xt=w(Hn," to "),jt=E(Hn,"CODE",{});var Dn=v(jt);Pt=w(Dn,"true"),Dn.forEach(h),Ct=w(Hn,", ran webpack, and checked my compiled code, it contained the unicode string ("),Ot=E(Hn,"CODE",{});var Fn=v(Ot);Ut=w(Fn,"\\ud83d\\ude0d"),Fn.forEach(h),Mt=w(Hn,")! And even when I wrote emoji string (😍) in my source code, it got compiled to unicode as well."),Hn.forEach(h),Lt=k(e),_t=E(e,"PRE",{class:!0}),v(_t).forEach(h),Rt=k(e),Nt=E(e,"HR",{}),Ht=k(e),zt=E(e,"SECTION",{});var qn=v(zt);Jt=E(qn,"H2",{});var Wn=v(Jt);Bt=E(Wn,"A",{href:!0,id:!0});var Vn=v(Bt);Gt=w(Vn,"TIL: UglifyJs ascii_only option, use it when you want to escape Unicode characters."),Vn.forEach(h),Wn.forEach(h),Dt=k(qn),Ft=E(qn,"HR",{}),qt=k(qn),Wt=E(qn,"P",{});var Yn=v(Wt);Vt=w(Yn,"Why is there a "),Yt=E(Yn,"CODE",{});var Kn=v(Yt);Kt=w(Kn,"ascii_only"),Kn.forEach(h),Zt=w(Yn," option?"),Yn.forEach(h),Qt=k(qn),Xt=E(qn,"P",{});var Zn=v(Xt);en=w(Zn,"My guess is that it takes less space for a unicode character (16–17bit) than the escaped ascii characters (6 "),tn=E(Zn,"EM",{});var Qn=v(tn);nn=w(Qn,"8 bit — 12"),Qn.forEach(h),an=w(Zn," bit), that’s why using unicode character is the default option ("),on=E(Zn,"CODE",{});var Xn=v(on);sn=w(Xn,"ascii_only=false"),Xn.forEach(h),cn=w(Zn,")."),Zn.forEach(h),qn.forEach(h),this.h()},h(){b(s,"href","#til-uglifyjs-ascii-only-option-use-it-when-you-want-to-escape-unicode-characters"),b(a,"class","sitemap"),b(a,"id","sitemap"),b(a,"role","navigation"),b(a,"aria-label","Table of Contents"),b(S,"type","image/webp"),b(S,"srcset","adf2abda876019fd.webp"),b(x,"type","image/jpeg"),b(x,"srcset","adf2abda876019fd.png"),b(j,"title","null"),b(j,"alt","The 😍😍😀😀isn’t rendered correctly in chrome extension"),b(j,"data-src","adf2abda876019fd.png"),b(j,"loading","lazy"),b(_,"type","image/webp"),b(_,"srcset","7afb27b2027d0eb4.webp"),b(R,"type","image/jpeg"),b(R,"srcset","7afb27b2027d0eb4.png"),b(N,"title","null"),b(N,"alt","problem with the source too"),b(N,"data-src","7afb27b2027d0eb4.png"),b(N,"loading","lazy"),b(F,"type","image/webp"),b(F,"srcset","aeb3ba002a361331.webp"),b(q,"type","image/jpeg"),b(q,"srcset","aeb3ba002a361331.png"),b(W,"title","null"),b(W,"alt","The compiled code seems okay!"),b(W,"data-src","aeb3ba002a361331.png"),b(W,"loading","lazy"),b(ae,"type","image/webp"),b(ae,"srcset","e40d56e0e272da42.webp"),b(oe,"type","image/jpeg"),b(oe,"srcset","e40d56e0e272da42.png"),b(se,"title","null"),b(se,"alt","😍!"),b(se,"data-src","e40d56e0e272da42.png"),b(se,"loading","lazy"),b(de,"href","https://github.com/babel/babel/pull/4478"),b(de,"rel","nofollow"),b(be,"type","image/webp"),b(be,"srcset","cec8624969909357.webp"),b(ve,"type","image/jpeg"),b(ve,"srcset","cec8624969909357.png"),b(Ee,"title","null"),b(Ee,"alt","babel issue"),b(Ee,"data-src","cec8624969909357.png"),b(Ee,"loading","lazy"),b(De,"href","https://skalman.github.io/UglifyJS-online/"),b(De,"rel","nofollow"),b(We,"href","https://github.com/skalman"),b(We,"rel","nofollow"),b(Xe,"type","image/webp"),b(Xe,"srcset","4a468cb0933b0473.webp"),b(et,"type","image/jpeg"),b(et,"srcset","4a468cb0933b0473.png"),b(tt,"title","null"),b(tt,"alt","online javasript minifier"),b(tt,"data-src","4a468cb0933b0473.png"),b(tt,"loading","lazy"),b(st,"href","https://github.com/mishoo/UglifyJS2/issues/490"),b(st,"rel","nofollow"),b(ht,"type","image/webp"),b(ht,"srcset","5824c5e3e9173f25.webp"),b(dt,"type","image/jpeg"),b(dt,"srcset","5824c5e3e9173f25.png"),b(pt,"title","null"),b(pt,"alt","why uglifyjs always compress unicode characters to utf8"),b(pt,"data-src","5824c5e3e9173f25.png"),b(pt,"loading","lazy"),b(Et,"href","https://github.com/mishoo/UglifyJS2#output-options"),b(Et,"rel","nofollow"),b(_t,"class","language-js"),b(Bt,"href","#til-uglifyjs-ascii-only-option-use-it-when-you-want-to-escape-unicode-characters"),b(Bt,"id","til-uglifyjs-ascii-only-option-use-it-when-you-want-to-escape-unicode-characters")},m(e,t){u(e,n,t),l(n,a),l(a,o),l(o,s),l(s,i),u(e,c,t),u(e,r,t),l(r,d),u(e,f,t),u(e,y,t),l(y,$),u(e,I,t),u(e,A,t),l(A,T),l(T,S),l(T,x),l(T,j),u(e,P,t),u(e,C,t),l(C,O),u(e,U,t),u(e,M,t),l(M,L),l(L,_),l(L,R),l(L,N),u(e,H,t),u(e,z,t),l(z,J),u(e,B,t),u(e,G,t),l(G,D),l(D,F),l(D,q),l(D,W),u(e,V,t),u(e,Y,t),l(Y,K),l(Y,Z),l(Z,Q),l(Y,X),u(e,ee,t),u(e,te,t),l(te,ne),l(ne,ae),l(ne,oe),l(ne,se),u(e,ie,t),u(e,ce,t),l(ce,re),u(e,le,t),u(e,ue,t),l(ue,he),l(ue,de),l(de,pe),l(ue,fe),u(e,me,t),u(e,ge,t),l(ge,ye),l(ye,be),l(ye,ve),l(ye,Ee),u(e,we,t),u(e,ke,t),l(ke,$e),u(e,Ie,t),u(e,Ae,t),u(e,Te,t),u(e,Se,t),l(Se,xe),l(Se,je),l(je,Pe),l(Se,Ce),l(Se,Oe),l(Oe,Ue),l(Se,Me),u(e,Le,t),u(e,_e,t),l(_e,Re),l(_e,Ne),l(Ne,He),l(_e,ze),u(e,Je,t),u(e,Be,t),l(Be,Ge),l(Be,De),l(De,Fe),l(Be,qe),l(Be,We),l(We,Ve),l(Be,Ye),u(e,Ke,t),u(e,Ze,t),l(Ze,Qe),l(Qe,Xe),l(Qe,et),l(Qe,tt),u(e,nt,t),u(e,at,t),l(at,ot),l(at,st),l(st,it),l(at,ct),u(e,rt,t),u(e,lt,t),l(lt,ut),l(ut,ht),l(ut,dt),l(ut,pt),u(e,ft,t),u(e,mt,t),l(mt,gt),l(mt,yt),l(yt,bt),l(mt,vt),l(mt,Et),l(Et,wt),l(mt,kt),l(mt,$t),l($t,It),l(mt,At),l(mt,Tt),l(Tt,St),l(mt,xt),l(mt,jt),l(jt,Pt),l(mt,Ct),l(mt,Ot),l(Ot,Ut),l(mt,Mt),u(e,Lt,t),u(e,_t,t),_t.innerHTML='<code class="language-js"><span class="token keyword">const</span> UglifyJsPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'uglifyjs-webpack-plugin\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>\n  <span class="token comment">//...</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">&#123;</span>\n    minimizer<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">UglifyJsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n      uglifyOptions<span class="token punctuation">:</span> <span class="token punctuation">&#123;</span>\n        <span class="token comment">// highlight-start</span>\n        output<span class="token punctuation">:</span> <span class="token punctuation">&#123;</span>\n          <span class="token comment">// true for &#96;ascii_only&#96;</span>\n          ascii_only<span class="token punctuation">:</span> <span class="token boolean">true</span>\n        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n        <span class="token comment">// highlight-end</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n<span class="token punctuation">&#125;</span></code>',u(e,Rt,t),u(e,Nt,t),u(e,Ht,t),u(e,zt,t),l(zt,Jt),l(Jt,Bt),l(Bt,Gt),l(zt,Dt),l(zt,Ft),l(zt,qt),l(zt,Wt),l(Wt,Vt),l(Wt,Yt),l(Yt,Kt),l(Wt,Zt),l(zt,Qt),l(zt,Xt),l(Xt,en),l(Xt,tn),l(tn,nn),l(Xt,an),l(Xt,on),l(on,sn),l(Xt,cn)},p:e,d(e){e&&h(n),e&&h(c),e&&h(r),e&&h(f),e&&h(y),e&&h(I),e&&h(A),e&&h(P),e&&h(C),e&&h(U),e&&h(M),e&&h(H),e&&h(z),e&&h(B),e&&h(G),e&&h(V),e&&h(Y),e&&h(ee),e&&h(te),e&&h(ie),e&&h(ce),e&&h(le),e&&h(ue),e&&h(me),e&&h(ge),e&&h(we),e&&h(ke),e&&h(Ie),e&&h(Ae),e&&h(Te),e&&h(Se),e&&h(Le),e&&h(_e),e&&h(Je),e&&h(Be),e&&h(Ke),e&&h(Ze),e&&h(nt),e&&h(at),e&&h(rt),e&&h(lt),e&&h(ft),e&&h(mt),e&&h(Lt),e&&h(_t),e&&h(Rt),e&&h(Nt),e&&h(Ht),e&&h(zt)}}}function he(e){let n,a;const o=[de];let s={$$slots:{default:[ue]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)s=t(s,o[e]);return n=new le({props:s}),{c(){G(n.$$.fragment)},l(e){D(n.$$.fragment,e)},m(e,t){F(n,e,t),a=!0},p(e,[t]){const a=0&t?function(e,t){const n={},a={},o={$$scope:1};let s=e.length;for(;s--;){const i=e[s],c=t[s];if(c){for(const e in i)e in c||(a[e]=1);for(const e in c)o[e]||(n[e]=c[e],o[e]=1);e[s]=c}else for(const e in i)o[e]=1}for(const e in a)e in n||(n[e]=void 0);return n}(o,[(s=de,"object"==typeof s&&null!==s?s:{})]):{};var s;1&t&&(a.$$scope={dirty:t,ctx:e}),n.$set(a)},i(e){a||(J(n.$$.fragment,e),a=!0)},o(e){B(n.$$.fragment,e),a=!1},d(e){q(n,e)}}}const de={title:"The `ascii_only` option in uglify-js",date:"2018-10-27T08:00:00Z",description:"that get my emoji showing in my chrome extension",slug:"uglify-ascii-only",type:"blog"};class pe extends Y{constructor(e){super(),V(this,e,null,he,i,{})}}setTimeout(()=>{new pe({target:document.querySelector("#app"),hydrate:!0})},3e3);
