function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function a(){return Object.create(null)}function o(e){e.forEach(n)}function s(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,n,a,o){return e[1]&&o?t(a.ctx.slice(),e[1](o(n))):a.ctx}function i(e,t,n,a,o,s,r){const i=function(e,t,n,a){if(e[2]&&a){const o=e[2](a(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let a=0;a<n;a+=1)e[a]=t.dirty[a]|o[a];return e}return t.dirty|o}return t.dirty}(t,a,o,s);if(i){const o=c(t,n,a,r);e.p(o,i)}}function l(e,t){e.appendChild(t)}function p(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function h(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function f(e){return document.createElement(e)}function d(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function m(e){return document.createTextNode(e)}function g(){return m(" ")}function v(){return m("")}function y(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function w(e){return Array.from(e.childNodes)}function E(e,t,n,a){for(let a=0;a<e.length;a+=1){const o=e[a];if(o.nodeName===t){let t=0;const s=[];for(;t<o.attributes.length;){const e=o.attributes[t++];n[e.name]||s.push(e.name)}for(let e=0;e<s.length;e++)o.removeAttribute(s[e]);return e.splice(a,1)[0]}}return a?d(t):f(t)}function b(e,t){for(let n=0;n<e.length;n+=1){const a=e[n];if(3===a.nodeType)return a.data=""+t,e.splice(n,1)[0]}return m(t)}function k(e){return b(e," ")}function $(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function j(e,t){e.value=null==t?"":t}class A{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,n=null){this.e||(this.e=f(t.nodeName),this.t=t,this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)p(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(u)}}let O;function T(e){O=e}function D(e){(function(){if(!O)throw new Error("Function called outside component initialization");return O})().$$.on_mount.push(e)}const P=[],C=[],L=[],S=[],x=Promise.resolve();let N=!1;function I(e){L.push(e)}let M=!1;const H=new Set;function _(){if(!M){M=!0;do{for(let e=0;e<P.length;e+=1){const t=P[e];T(t),R(t.$$)}for(P.length=0;C.length;)C.pop()();for(let e=0;e<L.length;e+=1){const t=L[e];H.has(t)||(H.add(t),t())}L.length=0}while(P.length);for(;S.length;)S.pop()();N=!1,M=!1,H.clear()}}function R(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(I)}}const B=new Set;function W(e,t){e&&e.i&&(B.delete(e),e.i(t))}function F(e,t,n,a){if(e&&e.o){if(B.has(e))return;B.add(e),(void 0).c.push(()=>{B.delete(e),a&&(n&&e.d(1),a())}),e.o(t)}}function G(e){e&&e.c()}function q(e,t){e&&e.l(t)}function Y(e,t,a){const{fragment:r,on_mount:c,on_destroy:i,after_update:l}=e.$$;r&&r.m(t,a),I(()=>{const t=c.map(n).filter(s);i?i.push(...t):o(t),e.$$.on_mount=[]}),l.forEach(I)}function z(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function U(e,t){-1===e.$$.dirty[0]&&(P.push(e),N||(N=!0,x.then(_)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function J(t,n,s,r,c,i,l=[-1]){const p=O;T(t);const h=n.props||{},f=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:c,bound:a(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:a(),dirty:l};let d=!1;if(f.ctx=s?s(t,h,(e,n,...a)=>{const o=a.length?a[0]:n;return f.ctx&&c(f.ctx[e],f.ctx[e]=o)&&(f.bound[e]&&f.bound[e](o),d&&U(t,e)),n}):[],f.update(),d=!0,o(f.before_update),f.fragment=!!r&&r(f.ctx),n.target){if(n.hydrate){const e=w(n.target);f.fragment&&f.fragment.l(e),e.forEach(u)}else f.fragment&&f.fragment.c();n.intro&&W(t.$$.fragment),Y(t,n.target,n.anchor),_()}T(p)}class V{$destroy(){z(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function Q(t){let n,a,o,s,r,c,i,h,v,$,j,A,O,T,D,P,C,L,S,x,N,I,M,H,_,R,B,W,F,G,q,Y,z,U,J;return{c(){n=f("header"),a=f("nav"),o=f("ul"),s=f("li"),r=f("a"),c=m("Tan Li Hau"),i=g(),h=f("li"),v=f("a"),$=m("About"),j=g(),A=f("li"),O=f("a"),T=m("Writings"),D=g(),P=f("li"),C=f("a"),L=m("Talks"),S=g(),x=f("li"),N=f("a"),I=m("Notes"),M=g(),H=f("li"),_=f("a"),R=m("Newsletter"),B=g(),W=f("li"),F=f("a"),G=d("svg"),q=d("path"),Y=g(),z=f("a"),U=d("svg"),J=d("path"),this.h()},l(e){n=E(e,"HEADER",{class:!0});var t=w(n);a=E(t,"NAV",{});var l=w(a);o=E(l,"UL",{class:!0});var p=w(o);s=E(p,"LI",{class:!0});var f=w(s);r=E(f,"A",{href:!0,class:!0});var d=w(r);c=b(d,"Tan Li Hau"),d.forEach(u),f.forEach(u),i=k(p),h=E(p,"LI",{class:!0});var m=w(h);v=E(m,"A",{href:!0,class:!0});var g=w(v);$=b(g,"About"),g.forEach(u),m.forEach(u),j=k(p),A=E(p,"LI",{class:!0});var y=w(A);O=E(y,"A",{href:!0,class:!0});var V=w(O);T=b(V,"Writings"),V.forEach(u),y.forEach(u),D=k(p),P=E(p,"LI",{class:!0});var Q=w(P);C=E(Q,"A",{href:!0,class:!0});var K=w(C);L=b(K,"Talks"),K.forEach(u),Q.forEach(u),S=k(p),x=E(p,"LI",{class:!0});var Z=w(x);N=E(Z,"A",{href:!0,class:!0});var X=w(N);I=b(X,"Notes"),X.forEach(u),Z.forEach(u),M=k(p),H=E(p,"LI",{class:!0});var ee=w(H);_=E(ee,"A",{href:!0,class:!0});var te=w(_);R=b(te,"Newsletter"),te.forEach(u),ee.forEach(u),B=k(p),W=E(p,"LI",{class:!0});var ne=w(W);F=E(ne,"A",{"aria-label":!0,href:!0,class:!0});var ae=w(F);G=E(ae,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var oe=w(G);q=E(oe,"path",{d:!0},1),w(q).forEach(u),oe.forEach(u),ae.forEach(u),Y=k(ne),z=E(ne,"A",{"aria-label":!0,href:!0,class:!0});var se=w(z);U=E(se,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var re=w(U);J=E(re,"path",{d:!0},1),w(J).forEach(u),re.forEach(u),se.forEach(u),ne.forEach(u),p.forEach(u),l.forEach(u),t.forEach(u),this.h()},h(){y(r,"href","/"),y(r,"class","svelte-f3e4uo"),y(s,"class","svelte-f3e4uo"),y(v,"href","/about"),y(v,"class","svelte-f3e4uo"),y(h,"class","svelte-f3e4uo"),y(O,"href","/blogs"),y(O,"class","svelte-f3e4uo"),y(A,"class","svelte-f3e4uo"),y(C,"href","/talks"),y(C,"class","svelte-f3e4uo"),y(P,"class","svelte-f3e4uo"),y(N,"href","/notes"),y(N,"class","svelte-f3e4uo"),y(x,"class","svelte-f3e4uo"),y(_,"href","/newsletter"),y(_,"class","svelte-f3e4uo"),y(H,"class","svelte-f3e4uo"),y(q,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),y(G,"viewBox","0 0 24 24"),y(G,"width","1em"),y(G,"height","1em"),y(G,"class","svelte-f3e4uo"),y(F,"aria-label","Twitter account"),y(F,"href","https://twitter.com/lihautan"),y(F,"class","svelte-f3e4uo"),y(J,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),y(U,"viewBox","0 0 24 24"),y(U,"width","1em"),y(U,"height","1em"),y(U,"class","svelte-f3e4uo"),y(z,"aria-label","Github account"),y(z,"href","https://github.com/tanhauhau"),y(z,"class","svelte-f3e4uo"),y(W,"class","social svelte-f3e4uo"),y(o,"class","svelte-f3e4uo"),y(n,"class","svelte-f3e4uo")},m(e,t){p(e,n,t),l(n,a),l(a,o),l(o,s),l(s,r),l(r,c),l(o,i),l(o,h),l(h,v),l(v,$),l(o,j),l(o,A),l(A,O),l(O,T),l(o,D),l(o,P),l(P,C),l(C,L),l(o,S),l(o,x),l(x,N),l(N,I),l(o,M),l(o,H),l(H,_),l(_,R),l(o,B),l(o,W),l(W,F),l(F,G),l(G,q),l(W,Y),l(W,z),l(z,U),l(U,J)},p:e,i:e,o:e,d(e){e&&u(n)}}}class K extends V{constructor(e){super(),J(this,e,null,Q,r,{})}}function Z(t){let n,a,o,s,r,c,i,h,d,v,$,A,O,T,D,P,C,L,S,x;return{c(){n=f("div"),a=f("h1"),o=m("Subscribe to my newsletter"),s=g(),r=f("h2"),c=m("Get the latest blog posts and project updates delivered right to your inbox"),i=g(),h=f("form"),d=f("div"),v=f("input"),$=g(),A=f("input"),T=g(),D=f("input"),P=g(),C=f("p"),L=m("Powered by Buttondown."),this.h()},l(e){n=E(e,"DIV",{class:!0});var t=w(n);a=E(t,"H1",{});var l=w(a);o=b(l,"Subscribe to my newsletter"),l.forEach(u),s=k(t),r=E(t,"H2",{class:!0});var p=w(r);c=b(p,"Get the latest blog posts and project updates delivered right to your inbox"),p.forEach(u),i=k(t),h=E(t,"FORM",{action:!0,method:!0,target:!0,onsubmit:!0,class:!0});var f=w(h);d=E(f,"DIV",{class:!0});var m=w(d);v=E(m,"INPUT",{type:!0,name:!0,id:!0,"aria-label":!0,placeholder:!0,class:!0}),$=k(m),A=E(m,"INPUT",{type:!0,value:!0,disabled:!0,class:!0}),m.forEach(u),T=k(f),D=E(f,"INPUT",{type:!0,value:!0,name:!0,class:!0}),P=k(f),C=E(f,"P",{class:!0});var g=w(C);L=b(g,"Powered by Buttondown."),g.forEach(u),f.forEach(u),t.forEach(u),this.h()},h(){y(r,"class","svelte-1k1s1co"),y(v,"type","email"),y(v,"name","email"),y(v,"id","bd-email"),y(v,"aria-label","email address"),y(v,"placeholder","youremail@example.com"),y(v,"class","svelte-1k1s1co"),y(A,"type","submit"),A.value="Subscribe",A.disabled=O=!t[0],y(A,"class","svelte-1k1s1co"),y(d,"class","form-item svelte-1k1s1co"),y(D,"type","hidden"),D.value="1",y(D,"name","embed"),y(D,"class","svelte-1k1s1co"),y(C,"class","svelte-1k1s1co"),y(h,"action","https://buttondown.email/api/emails/embed-subscribe/lihautan"),y(h,"method","post"),y(h,"target","popupwindow"),y(h,"onsubmit","window.open('https://buttondown.email/lihautan', 'popupwindow')"),y(h,"class","embeddable-buttondown-form"),y(n,"class","form svelte-1k1s1co")},m(e,u){var f,m,g,y;p(e,n,u),l(n,a),l(a,o),l(n,s),l(n,r),l(r,c),l(n,i),l(n,h),l(h,d),l(d,v),j(v,t[0]),l(d,$),l(d,A),l(h,T),l(h,D),l(h,P),l(h,C),l(C,L),S||(f=v,m="input",g=t[1],f.addEventListener(m,g,y),x=()=>f.removeEventListener(m,g,y),S=!0)},p(e,[t]){1&t&&v.value!==e[0]&&j(v,e[0]),1&t&&O!==(O=!e[0])&&(A.disabled=O)},i:e,o:e,d(e){e&&u(n),S=!1,x()}}}function X(e,t,n){let a;return[a,function(){a=this.value,n(0,a)}]}class ee extends V{constructor(e){super(),J(this,e,X,Z,r,{})}}function te(e){return D(()=>(setTimeout(()=>{if(window.innerWidth>1080){const e=document.createElement("script");e.async=!0,e.type="text/javascript",e.src="//cdn.carbonads.com/carbon.js?serve=CE7ITK3E&placement=lihautancom",e.id="_carbonads_js",document.body.appendChild(e)}},5e3),()=>{try{const e=document.getElementById("carbonads");e.parentNode.removeChild(e)}catch(e){}})),[]}class ne extends V{constructor(e){super(),J(this,e,te,null,r,{})}}function ae(e,t,n){const a=e.slice();return a[6]=t[n],a}function oe(e,t,n){const a=e.slice();return a[6]=t[n],a}function se(e){let t,n;return{c(){t=f("meta"),this.h()},l(e){t=E(e,"META",{name:!0,content:!0}),this.h()},h(){y(t,"name","keywords"),y(t,"content",n=e[6])},m(e,n){p(e,t,n)},p(e,a){4&a&&n!==(n=e[6])&&y(t,"content",n)},d(e){e&&u(t)}}}function re(e){let t,n,a=e[6]+"";return{c(){t=f("span"),n=m(a),this.h()},l(e){t=E(e,"SPAN",{class:!0});var o=w(t);n=b(o,a),o.forEach(u),this.h()},h(){y(t,"class","svelte-9tqnza")},m(e,a){p(e,t,a),l(t,n)},p(e,t){4&t&&a!==(a=e[6]+"")&&$(n,a)},d(e){e&&u(t)}}}function ce(e){let t,n,a,o,s,r,d,j,O,T,D,P,C,L,S,x,N,I,M,H,_,R,B,U,J,V,Q,Z,X,te,ce,ie,le,pe,ue,he,fe=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"Article",author:e[3],copyrightHolder:e[3],copyrightYear:"2020",creator:e[3],publisher:e[3],description:e[1],headline:e[0],name:e[0],inLanguage:"en"})}<\/script>`,de=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",description:"Breadcrumbs list",name:"Breadcrumbs",itemListElement:[{"@type":"ListItem",item:{"@id":"https://lihautan.com",name:"Homepage"},position:1},{"@type":"ListItem",item:{"@id":"https%3A%2F%2Flihautan.com%2Fwho-accessed-my-property",name:e[0]},position:2}]})}<\/script>`;document.title=t=e[0]+" | Tan Li Hau";let me=e[2],ge=[];for(let t=0;t<me.length;t+=1)ge[t]=se(oe(e,me,t));B=new K({});let ve=e[2],ye=[];for(let t=0;t<ve.length;t+=1)ye[t]=re(ae(e,ve,t));const we=e[5].default,Ee=function(e,t,n,a){if(e){const o=c(e,t,n,a);return e[0](o)}}(we,e,e[4],null);return le=new ee({}),ue=new ne({}),{c(){n=f("meta"),a=f("meta"),o=f("meta"),s=f("meta"),r=f("meta"),d=f("meta"),j=f("meta"),O=f("meta"),T=f("meta"),D=f("meta"),P=f("meta");for(let e=0;e<ge.length;e+=1)ge[e].c();C=f("meta"),L=f("meta"),x=v(),I=v(),M=g(),H=f("a"),_=m("Skip to content"),R=g(),G(B.$$.fragment),U=g(),J=f("main"),V=f("h1"),Q=m(e[0]),Z=g();for(let e=0;e<ye.length;e+=1)ye[e].c();X=g(),te=f("article"),Ee&&Ee.c(),ce=g(),ie=f("footer"),G(le.$$.fragment),pe=g(),G(ue.$$.fragment),this.h()},l(t){const c=function(e,t=document.body){return Array.from(t.querySelectorAll(e))}('[data-svelte="svelte-n0q11s"]',document.head);n=E(c,"META",{name:!0,content:!0}),a=E(c,"META",{name:!0,content:!0}),o=E(c,"META",{name:!0,content:!0}),s=E(c,"META",{name:!0,content:!0}),r=E(c,"META",{name:!0,content:!0}),d=E(c,"META",{name:!0,content:!0}),j=E(c,"META",{name:!0,content:!0}),O=E(c,"META",{name:!0,content:!0}),T=E(c,"META",{name:!0,content:!0}),D=E(c,"META",{name:!0,content:!0}),P=E(c,"META",{name:!0,content:!0});for(let e=0;e<ge.length;e+=1)ge[e].l(c);C=E(c,"META",{itemprop:!0,content:!0}),L=E(c,"META",{itemprop:!0,content:!0}),x=v(),I=v(),c.forEach(u),M=k(t),H=E(t,"A",{href:!0,class:!0});var i=w(H);_=b(i,"Skip to content"),i.forEach(u),R=k(t),q(B.$$.fragment,t),U=k(t),J=E(t,"MAIN",{id:!0,class:!0});var l=w(J);V=E(l,"H1",{});var p=w(V);Q=b(p,e[0]),p.forEach(u),Z=k(l);for(let e=0;e<ye.length;e+=1)ye[e].l(l);X=k(l),te=E(l,"ARTICLE",{});var h=w(te);Ee&&Ee.l(h),h.forEach(u),l.forEach(u),ce=k(t),ie=E(t,"FOOTER",{class:!0});var f=w(ie);q(le.$$.fragment,f),pe=k(f),q(ue.$$.fragment,f),f.forEach(u),this.h()},h(){y(n,"name","description"),y(n,"content",e[1]),y(a,"name","image"),y(a,"content",null),y(o,"name","og:image"),y(o,"content",null),y(s,"name","og:title"),y(s,"content",e[0]),y(r,"name","og:description"),y(r,"content",e[1]),y(d,"name","og:type"),y(d,"content","website"),y(j,"name","twitter:card"),y(j,"content","summary_large_image"),y(O,"name","twitter:creator"),y(O,"content","@lihautan"),y(T,"name","twitter:title"),y(T,"content",e[0]),y(D,"name","twitter:description"),y(D,"content",e[1]),y(P,"name","twitter:image"),y(P,"content",null),y(C,"itemprop","url"),y(C,"content","https%3A%2F%2Flihautan.com%2Fwho-accessed-my-property"),y(L,"itemprop","image"),y(L,"content",null),S=new A(x),N=new A(I),y(H,"href","#content"),y(H,"class","skip svelte-9tqnza"),y(J,"id","content"),y(J,"class","blog svelte-9tqnza"),y(ie,"class","svelte-9tqnza")},m(e,t){l(document.head,n),l(document.head,a),l(document.head,o),l(document.head,s),l(document.head,r),l(document.head,d),l(document.head,j),l(document.head,O),l(document.head,T),l(document.head,D),l(document.head,P);for(let e=0;e<ge.length;e+=1)ge[e].m(document.head,null);l(document.head,C),l(document.head,L),S.m(fe,document.head),l(document.head,x),N.m(de,document.head),l(document.head,I),p(e,M,t),p(e,H,t),l(H,_),p(e,R,t),Y(B,e,t),p(e,U,t),p(e,J,t),l(J,V),l(V,Q),l(J,Z);for(let e=0;e<ye.length;e+=1)ye[e].m(J,null);l(J,X),l(J,te),Ee&&Ee.m(te,null),p(e,ce,t),p(e,ie,t),Y(le,ie,null),l(ie,pe),Y(ue,ie,null),he=!0},p(e,[a]){if((!he||1&a)&&t!==(t=e[0]+" | Tan Li Hau")&&(document.title=t),(!he||2&a)&&y(n,"content",e[1]),(!he||1&a)&&y(s,"content",e[0]),(!he||2&a)&&y(r,"content",e[1]),(!he||1&a)&&y(T,"content",e[0]),(!he||2&a)&&y(D,"content",e[1]),4&a){let t;for(me=e[2],t=0;t<me.length;t+=1){const n=oe(e,me,t);ge[t]?ge[t].p(n,a):(ge[t]=se(n),ge[t].c(),ge[t].m(C.parentNode,C))}for(;t<ge.length;t+=1)ge[t].d(1);ge.length=me.length}if((!he||3&a)&&fe!==(fe=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"Article",author:e[3],copyrightHolder:e[3],copyrightYear:"2020",creator:e[3],publisher:e[3],description:e[1],headline:e[0],name:e[0],inLanguage:"en"})}<\/script>`)&&S.p(fe),(!he||1&a)&&de!==(de=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",description:"Breadcrumbs list",name:"Breadcrumbs",itemListElement:[{"@type":"ListItem",item:{"@id":"https://lihautan.com",name:"Homepage"},position:1},{"@type":"ListItem",item:{"@id":"https%3A%2F%2Flihautan.com%2Fwho-accessed-my-property",name:e[0]},position:2}]})}<\/script>`)&&N.p(de),(!he||1&a)&&$(Q,e[0]),4&a){let t;for(ve=e[2],t=0;t<ve.length;t+=1){const n=ae(e,ve,t);ye[t]?ye[t].p(n,a):(ye[t]=re(n),ye[t].c(),ye[t].m(J,X))}for(;t<ye.length;t+=1)ye[t].d(1);ye.length=ve.length}Ee&&Ee.p&&16&a&&i(Ee,we,e,e[4],a,null,null)},i(e){he||(W(B.$$.fragment,e),W(Ee,e),W(le.$$.fragment,e),W(ue.$$.fragment,e),he=!0)},o(e){F(B.$$.fragment,e),F(Ee,e),F(le.$$.fragment,e),F(ue.$$.fragment,e),he=!1},d(e){u(n),u(a),u(o),u(s),u(r),u(d),u(j),u(O),u(T),u(D),u(P),h(ge,e),u(C),u(L),u(x),e&&S.d(),u(I),e&&N.d(),e&&u(M),e&&u(H),e&&u(R),z(B,e),e&&u(U),e&&u(J),h(ye,e),Ee&&Ee.d(e),e&&u(ce),e&&u(ie),z(le),z(ue)}}}function ie(e,t,n){let{title:a=""}=t,{description:o=""}=t,{tags:s=[]}=t;const r={"@type":"Person",name:"Tan Li Hau"};let{$$slots:c={},$$scope:i}=t;return e.$set=e=>{"title"in e&&n(0,a=e.title),"description"in e&&n(1,o=e.description),"tags"in e&&n(2,s=e.tags),"$$scope"in e&&n(4,i=e.$$scope)},[a,o,s,r,i,c]}class le extends V{constructor(e){super(),J(this,e,ie,ce,r,{title:0,description:1,tags:2})}}function pe(t){let n,a,o,s,r,c,i,h,d,v,$,j,A,O,T,D,P,C,L,S,x,N,I,M,H,_,R,B,W,F,G,q,Y,z,U,J,V,Q,K,Z,X,ee,te,ne,ae,oe,se,re,ce,ie,le,pe,ue,he,fe,de,me,ge,ve,ye,we,Ee,be,ke,$e,je,Ae,Oe,Te,De,Pe,Ce,Le,Se,xe,Ne,Ie,Me,He,_e,Re,Be,We,Fe,Ge,qe,Ye,ze,Ue,Je,Ve,Qe,Ke,Ze,Xe,et,tt,nt,at,ot,st,rt,ct,it,lt,pt,ut,ht,ft,dt,mt,gt,vt,yt,wt,Et,bt,kt,$t,jt,At,Ot,Tt,Dt,Pt,Ct,Lt,St,xt,Nt,It,Mt,Ht,_t,Rt,Bt,Wt,Ft,Gt,qt,Yt,zt,Ut,Jt,Vt,Qt,Kt,Zt,Xt,en,tn,nn,an,on,sn,rn,cn,ln,pn,un,hn,fn,dn,mn,gn,vn,yn,wn,En,bn,kn,$n,jn,An,On,Tn,Dn,Pn,Cn,Ln,Sn,xn,Nn;return{c(){n=f("p"),a=m("Say you defined an object "),o=f("code"),s=m("const obj = { awesome: true }"),r=m(" so that anywhere within your code, you can access the value of "),c=f("code"),i=m("obj.awesome"),h=m(" as well as modify its value via "),d=f("code"),v=m("obj.awesome = false"),$=m("."),j=g(),A=f("p"),O=f("strong"),T=m("Question"),D=m(": How do you know where and when "),P=f("code"),C=m("obj.awesome"),L=m(" is being accessed or modified?"),S=g(),x=f("hr"),N=g(),I=f("p"),M=f("strong"),H=m("So why is this important?"),_=m(" If you are using frontend framework that does "),R=f("a"),B=m("2-way binding"),W=m(", eg: "),F=f("a"),G=m("Angular"),q=m(", "),Y=f("a"),z=m("Vue"),U=m(", do you know how does the framework “watch” your "),J=f("code"),V=m("state"),Q=m(" object? How does the framework knows when to update your DOM when you set some property of the "),K=f("code"),Z=m("state"),X=m(" object?"),ee=g(),te=f("pre"),ne=g(),ae=f("hr"),oe=g(),se=f("p"),re=f("strong"),ce=m("Answer:"),ie=m(" You use "),le=f("a"),pe=f("code"),ue=m("Object.defineProperty()"),he=m("."),fe=g(),de=f("p"),me=f("code"),ge=m("Object.defineProperty(obj, prop, descriptor)"),ve=m(" allows us to define a property to an object with a descriptor for the property being defined."),ye=g(),we=f("p"),Ee=m("Well, nothing special about defining a property of an object, you can do it easily with "),be=f("code"),ke=m("obj[prop] = value"),$e=m(". What so special about this "),je=f("code"),Ae=m("Object.defineProperty()"),Oe=m(" is the "),Te=f("code"),De=m("descriptor"),Pe=m(" object that you pass in. Lets' take a look at what can be configured through the "),Ce=f("code"),Le=m("descriptor"),Se=m(":"),xe=g(),Ne=f("ul"),Ie=f("li"),Me=f("p"),He=f("code"),_e=m("enumerable"),Re=g(),Be=f("p"),We=f("code"),Fe=m("true"),Ge=m(" if and only if this property shows up during enumeration of the properties on the corresponding object."),qe=g(),Ye=f("p"),ze=f("strong"),Ue=m("Defaults to "),Je=f("code"),Ve=m("false"),Qe=m("."),Ke=g(),Ze=f("p"),Xe=m("If you have a property's "),et=f("code"),tt=m("enumerable"),nt=m(" set to "),at=f("code"),ot=m("false"),st=m(", meaning you will not see the property when you do "),rt=f("code"),ct=m("Object.keys(obj)"),it=m(" or "),lt=f("code"),pt=m("for (const key in obj) { ... }"),ut=g(),ht=f("li"),ft=f("p"),dt=f("code"),mt=m("writable"),gt=g(),vt=f("p"),yt=f("code"),wt=m("true"),Et=m(" if and only if the value associated with the property may be changed with an assignment operator."),bt=g(),kt=f("p"),$t=f("strong"),jt=m("Defaults to "),At=f("code"),Ot=m("false"),Tt=g(),Dt=f("p"),Pt=m("This allows us to create "),Ct=f("code"),Lt=m("read-only"),St=m(" property of an object."),xt=g(),Nt=f("li"),It=f("p"),Mt=f("code"),Ht=m("get"),_t=g(),Rt=f("p"),Bt=m("A function which serves as a getter for the property, or "),Wt=f("code"),Ft=m("undefined"),Gt=m(" if there is no getter. The return value will be used as the value of the property."),qt=g(),Yt=f("p"),zt=f("strong"),Ut=m("Defaults to "),Jt=f("code"),Vt=m("undefined"),Qt=g(),Kt=f("li"),Zt=f("p"),Xt=f("code"),en=m("set"),tn=g(),nn=f("p"),an=m("A function which serves as a setter for the property, or "),on=f("code"),sn=m("undefined"),rn=m(" if there is no setter. When the property is assigned to, this function is called with one argument (the value being assigned to the property)."),cn=g(),ln=f("p"),pn=f("strong"),un=m("Defaults to "),hn=f("code"),fn=m("undefined"),dn=g(),mn=f("p"),gn=m("So, there you have it. What you need is to define the getter and setter function of the property, and they will be called when the property is accessed or being assigned to a value."),vn=g(),yn=f("p"),wn=m("You can add a breakpoint via "),En=f("a"),bn=f("code"),kn=m("debugger;"),$n=m(" in your getter and setter function, to invoke the debugging feature of your development tools to look at the call stack."),jn=g(),An=f("p"),On=m("Another way of looking at the call stack without using a debugger is to "),Tn=f("strong"),Dn=m("throw an Error"),Pn=m(" in the getter and setter function."),Cn=g(),Ln=f("p"),Sn=m("Yes. You hear me right. Throwing an error will allow you to get the call stack when the error is thrown:"),xn=g(),Nn=f("pre"),this.h()},l(e){n=E(e,"P",{});var t=w(n);a=b(t,"Say you defined an object "),o=E(t,"CODE",{});var l=w(o);s=b(l,"const obj = { awesome: true }"),l.forEach(u),r=b(t," so that anywhere within your code, you can access the value of "),c=E(t,"CODE",{});var p=w(c);i=b(p,"obj.awesome"),p.forEach(u),h=b(t," as well as modify its value via "),d=E(t,"CODE",{});var f=w(d);v=b(f,"obj.awesome = false"),f.forEach(u),$=b(t,"."),t.forEach(u),j=k(e),A=E(e,"P",{});var m=w(A);O=E(m,"STRONG",{});var g=w(O);T=b(g,"Question"),g.forEach(u),D=b(m,": How do you know where and when "),P=E(m,"CODE",{});var y=w(P);C=b(y,"obj.awesome"),y.forEach(u),L=b(m," is being accessed or modified?"),m.forEach(u),S=k(e),x=E(e,"HR",{}),N=k(e),I=E(e,"P",{});var In=w(I);M=E(In,"STRONG",{});var Mn=w(M);H=b(Mn,"So why is this important?"),Mn.forEach(u),_=b(In," If you are using frontend framework that does "),R=E(In,"A",{href:!0,rel:!0});var Hn=w(R);B=b(Hn,"2-way binding"),Hn.forEach(u),W=b(In,", eg: "),F=E(In,"A",{href:!0,rel:!0});var _n=w(F);G=b(_n,"Angular"),_n.forEach(u),q=b(In,", "),Y=E(In,"A",{href:!0,rel:!0});var Rn=w(Y);z=b(Rn,"Vue"),Rn.forEach(u),U=b(In,", do you know how does the framework “watch” your "),J=E(In,"CODE",{});var Bn=w(J);V=b(Bn,"state"),Bn.forEach(u),Q=b(In," object? How does the framework knows when to update your DOM when you set some property of the "),K=E(In,"CODE",{});var Wn=w(K);Z=b(Wn,"state"),Wn.forEach(u),X=b(In," object?"),In.forEach(u),ee=k(e),te=E(e,"PRE",{class:!0}),w(te).forEach(u),ne=k(e),ae=E(e,"HR",{}),oe=k(e),se=E(e,"P",{});var Fn=w(se);re=E(Fn,"STRONG",{});var Gn=w(re);ce=b(Gn,"Answer:"),Gn.forEach(u),ie=b(Fn," You use "),le=E(Fn,"A",{href:!0,rel:!0});var qn=w(le);pe=E(qn,"CODE",{});var Yn=w(pe);ue=b(Yn,"Object.defineProperty()"),Yn.forEach(u),qn.forEach(u),he=b(Fn,"."),Fn.forEach(u),fe=k(e),de=E(e,"P",{});var zn=w(de);me=E(zn,"CODE",{});var Un=w(me);ge=b(Un,"Object.defineProperty(obj, prop, descriptor)"),Un.forEach(u),ve=b(zn," allows us to define a property to an object with a descriptor for the property being defined."),zn.forEach(u),ye=k(e),we=E(e,"P",{});var Jn=w(we);Ee=b(Jn,"Well, nothing special about defining a property of an object, you can do it easily with "),be=E(Jn,"CODE",{});var Vn=w(be);ke=b(Vn,"obj[prop] = value"),Vn.forEach(u),$e=b(Jn,". What so special about this "),je=E(Jn,"CODE",{});var Qn=w(je);Ae=b(Qn,"Object.defineProperty()"),Qn.forEach(u),Oe=b(Jn," is the "),Te=E(Jn,"CODE",{});var Kn=w(Te);De=b(Kn,"descriptor"),Kn.forEach(u),Pe=b(Jn," object that you pass in. Lets' take a look at what can be configured through the "),Ce=E(Jn,"CODE",{});var Zn=w(Ce);Le=b(Zn,"descriptor"),Zn.forEach(u),Se=b(Jn,":"),Jn.forEach(u),xe=k(e),Ne=E(e,"UL",{});var Xn=w(Ne);Ie=E(Xn,"LI",{});var ea=w(Ie);Me=E(ea,"P",{});var ta=w(Me);He=E(ta,"CODE",{});var na=w(He);_e=b(na,"enumerable"),na.forEach(u),ta.forEach(u),Re=k(ea),Be=E(ea,"P",{});var aa=w(Be);We=E(aa,"CODE",{});var oa=w(We);Fe=b(oa,"true"),oa.forEach(u),Ge=b(aa," if and only if this property shows up during enumeration of the properties on the corresponding object."),aa.forEach(u),qe=k(ea),Ye=E(ea,"P",{});var sa=w(Ye);ze=E(sa,"STRONG",{});var ra=w(ze);Ue=b(ra,"Defaults to "),Je=E(ra,"CODE",{});var ca=w(Je);Ve=b(ca,"false"),ca.forEach(u),ra.forEach(u),Qe=b(sa,"."),sa.forEach(u),Ke=k(ea),Ze=E(ea,"P",{});var ia=w(Ze);Xe=b(ia,"If you have a property's "),et=E(ia,"CODE",{});var la=w(et);tt=b(la,"enumerable"),la.forEach(u),nt=b(ia," set to "),at=E(ia,"CODE",{});var pa=w(at);ot=b(pa,"false"),pa.forEach(u),st=b(ia,", meaning you will not see the property when you do "),rt=E(ia,"CODE",{});var ua=w(rt);ct=b(ua,"Object.keys(obj)"),ua.forEach(u),it=b(ia," or "),lt=E(ia,"CODE",{});var ha=w(lt);pt=b(ha,"for (const key in obj) { ... }"),ha.forEach(u),ia.forEach(u),ea.forEach(u),ut=k(Xn),ht=E(Xn,"LI",{});var fa=w(ht);ft=E(fa,"P",{});var da=w(ft);dt=E(da,"CODE",{});var ma=w(dt);mt=b(ma,"writable"),ma.forEach(u),da.forEach(u),gt=k(fa),vt=E(fa,"P",{});var ga=w(vt);yt=E(ga,"CODE",{});var va=w(yt);wt=b(va,"true"),va.forEach(u),Et=b(ga," if and only if the value associated with the property may be changed with an assignment operator."),ga.forEach(u),bt=k(fa),kt=E(fa,"P",{});var ya=w(kt);$t=E(ya,"STRONG",{});var wa=w($t);jt=b(wa,"Defaults to "),At=E(wa,"CODE",{});var Ea=w(At);Ot=b(Ea,"false"),Ea.forEach(u),wa.forEach(u),ya.forEach(u),Tt=k(fa),Dt=E(fa,"P",{});var ba=w(Dt);Pt=b(ba,"This allows us to create "),Ct=E(ba,"CODE",{});var ka=w(Ct);Lt=b(ka,"read-only"),ka.forEach(u),St=b(ba," property of an object."),ba.forEach(u),fa.forEach(u),xt=k(Xn),Nt=E(Xn,"LI",{});var $a=w(Nt);It=E($a,"P",{});var ja=w(It);Mt=E(ja,"CODE",{});var Aa=w(Mt);Ht=b(Aa,"get"),Aa.forEach(u),ja.forEach(u),_t=k($a),Rt=E($a,"P",{});var Oa=w(Rt);Bt=b(Oa,"A function which serves as a getter for the property, or "),Wt=E(Oa,"CODE",{});var Ta=w(Wt);Ft=b(Ta,"undefined"),Ta.forEach(u),Gt=b(Oa," if there is no getter. The return value will be used as the value of the property."),Oa.forEach(u),qt=k($a),Yt=E($a,"P",{});var Da=w(Yt);zt=E(Da,"STRONG",{});var Pa=w(zt);Ut=b(Pa,"Defaults to "),Jt=E(Pa,"CODE",{});var Ca=w(Jt);Vt=b(Ca,"undefined"),Ca.forEach(u),Pa.forEach(u),Da.forEach(u),$a.forEach(u),Qt=k(Xn),Kt=E(Xn,"LI",{});var La=w(Kt);Zt=E(La,"P",{});var Sa=w(Zt);Xt=E(Sa,"CODE",{});var xa=w(Xt);en=b(xa,"set"),xa.forEach(u),Sa.forEach(u),tn=k(La),nn=E(La,"P",{});var Na=w(nn);an=b(Na,"A function which serves as a setter for the property, or "),on=E(Na,"CODE",{});var Ia=w(on);sn=b(Ia,"undefined"),Ia.forEach(u),rn=b(Na," if there is no setter. When the property is assigned to, this function is called with one argument (the value being assigned to the property)."),Na.forEach(u),cn=k(La),ln=E(La,"P",{});var Ma=w(ln);pn=E(Ma,"STRONG",{});var Ha=w(pn);un=b(Ha,"Defaults to "),hn=E(Ha,"CODE",{});var _a=w(hn);fn=b(_a,"undefined"),_a.forEach(u),Ha.forEach(u),Ma.forEach(u),La.forEach(u),Xn.forEach(u),dn=k(e),mn=E(e,"P",{});var Ra=w(mn);gn=b(Ra,"So, there you have it. What you need is to define the getter and setter function of the property, and they will be called when the property is accessed or being assigned to a value."),Ra.forEach(u),vn=k(e),yn=E(e,"P",{});var Ba=w(yn);wn=b(Ba,"You can add a breakpoint via "),En=E(Ba,"A",{href:!0,rel:!0});var Wa=w(En);bn=E(Wa,"CODE",{});var Fa=w(bn);kn=b(Fa,"debugger;"),Fa.forEach(u),Wa.forEach(u),$n=b(Ba," in your getter and setter function, to invoke the debugging feature of your development tools to look at the call stack."),Ba.forEach(u),jn=k(e),An=E(e,"P",{});var Ga=w(An);On=b(Ga,"Another way of looking at the call stack without using a debugger is to "),Tn=E(Ga,"STRONG",{});var qa=w(Tn);Dn=b(qa,"throw an Error"),qa.forEach(u),Pn=b(Ga," in the getter and setter function."),Ga.forEach(u),Cn=k(e),Ln=E(e,"P",{});var Ya=w(Ln);Sn=b(Ya,"Yes. You hear me right. Throwing an error will allow you to get the call stack when the error is thrown:"),Ya.forEach(u),xn=k(e),Nn=E(e,"PRE",{class:!0}),w(Nn).forEach(u),this.h()},h(){y(R,"href","https://stackoverflow.com/a/13504965"),y(R,"rel","nofollow"),y(F,"href","https://angular.io/guide/ajs-quick-reference#ng-model"),y(F,"rel","nofollow"),y(Y,"href","https://vuejs.org/v2/guide/forms.html"),y(Y,"rel","nofollow"),y(te,"class","language-js"),y(le,"href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"),y(le,"rel","nofollow"),y(En,"href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger"),y(En,"rel","nofollow"),y(Nn,"class","language-js")},m(e,t){p(e,n,t),l(n,a),l(n,o),l(o,s),l(n,r),l(n,c),l(c,i),l(n,h),l(n,d),l(d,v),l(n,$),p(e,j,t),p(e,A,t),l(A,O),l(O,T),l(A,D),l(A,P),l(P,C),l(A,L),p(e,S,t),p(e,x,t),p(e,N,t),p(e,I,t),l(I,M),l(M,H),l(I,_),l(I,R),l(R,B),l(I,W),l(I,F),l(F,G),l(I,q),l(I,Y),l(Y,z),l(I,U),l(I,J),l(J,V),l(I,Q),l(I,K),l(K,Z),l(I,X),p(e,ee,t),p(e,te,t),te.innerHTML='<code class="language-js"><span class="token comment">// setting a property in the &#96;$scope&#96; object triggers</span>\n<span class="token comment">// the framework to update the model and the DOM</span>\n$scope<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">\'Hello\'</span><span class="token punctuation">;</span></code>',p(e,ne,t),p(e,ae,t),p(e,oe,t),p(e,se,t),l(se,re),l(re,ce),l(se,ie),l(se,le),l(le,pe),l(pe,ue),l(se,he),p(e,fe,t),p(e,de,t),l(de,me),l(me,ge),l(de,ve),p(e,ye,t),p(e,we,t),l(we,Ee),l(we,be),l(be,ke),l(we,$e),l(we,je),l(je,Ae),l(we,Oe),l(we,Te),l(Te,De),l(we,Pe),l(we,Ce),l(Ce,Le),l(we,Se),p(e,xe,t),p(e,Ne,t),l(Ne,Ie),l(Ie,Me),l(Me,He),l(He,_e),l(Ie,Re),l(Ie,Be),l(Be,We),l(We,Fe),l(Be,Ge),l(Ie,qe),l(Ie,Ye),l(Ye,ze),l(ze,Ue),l(ze,Je),l(Je,Ve),l(Ye,Qe),l(Ie,Ke),l(Ie,Ze),l(Ze,Xe),l(Ze,et),l(et,tt),l(Ze,nt),l(Ze,at),l(at,ot),l(Ze,st),l(Ze,rt),l(rt,ct),l(Ze,it),l(Ze,lt),l(lt,pt),l(Ne,ut),l(Ne,ht),l(ht,ft),l(ft,dt),l(dt,mt),l(ht,gt),l(ht,vt),l(vt,yt),l(yt,wt),l(vt,Et),l(ht,bt),l(ht,kt),l(kt,$t),l($t,jt),l($t,At),l(At,Ot),l(ht,Tt),l(ht,Dt),l(Dt,Pt),l(Dt,Ct),l(Ct,Lt),l(Dt,St),l(Ne,xt),l(Ne,Nt),l(Nt,It),l(It,Mt),l(Mt,Ht),l(Nt,_t),l(Nt,Rt),l(Rt,Bt),l(Rt,Wt),l(Wt,Ft),l(Rt,Gt),l(Nt,qt),l(Nt,Yt),l(Yt,zt),l(zt,Ut),l(zt,Jt),l(Jt,Vt),l(Ne,Qt),l(Ne,Kt),l(Kt,Zt),l(Zt,Xt),l(Xt,en),l(Kt,tn),l(Kt,nn),l(nn,an),l(nn,on),l(on,sn),l(nn,rn),l(Kt,cn),l(Kt,ln),l(ln,pn),l(pn,un),l(pn,hn),l(hn,fn),p(e,dn,t),p(e,mn,t),l(mn,gn),p(e,vn,t),p(e,yn,t),l(yn,wn),l(yn,En),l(En,bn),l(bn,kn),l(yn,$n),p(e,jn,t),p(e,An,t),l(An,On),l(An,Tn),l(Tn,Dn),l(An,Pn),p(e,Cn,t),p(e,Ln,t),l(Ln,Sn),p(e,xn,t),p(e,Nn,t),Nn.innerHTML='<code class="language-js"><span class="token keyword">let</span> _value<span class="token punctuation">;</span>\nObject<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">\'awesome\'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>\n  <span class="token function-variable function">get</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>\n    <span class="token comment">// highlight-start</span>\n    <span class="token keyword">try</span> <span class="token punctuation">&#123;</span>\n      <span class="token comment">// intentionally throw an Error to get the call stack</span>\n      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">&#125;</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n      <span class="token comment">// stack is the stack trace, </span>\n      <span class="token comment">// containing error message and the stack</span>\n      <span class="token keyword">const</span> stack <span class="token operator">=</span> error<span class="token punctuation">.</span>stack<span class="token punctuation">;</span>\n      <span class="token comment">// print the callee stack</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\n        stack\n          <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'&#92;n\'</span><span class="token punctuation">)</span>\n          <span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\n          <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'&#92;n\'</span><span class="token punctuation">)</span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">&#125;</span>\n    <span class="token comment">// highlight-end</span>\n    <span class="token keyword">return</span> _value<span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>'},p:e,d(e){e&&u(n),e&&u(j),e&&u(A),e&&u(S),e&&u(x),e&&u(N),e&&u(I),e&&u(ee),e&&u(te),e&&u(ne),e&&u(ae),e&&u(oe),e&&u(se),e&&u(fe),e&&u(de),e&&u(ye),e&&u(we),e&&u(xe),e&&u(Ne),e&&u(dn),e&&u(mn),e&&u(vn),e&&u(yn),e&&u(jn),e&&u(An),e&&u(Cn),e&&u(Ln),e&&u(xn),e&&u(Nn)}}}function ue(e){let n,a;const o=[he];let s={$$slots:{default:[pe]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)s=t(s,o[e]);return n=new le({props:s}),{c(){G(n.$$.fragment)},l(e){q(n.$$.fragment,e)},m(e,t){Y(n,e,t),a=!0},p(e,[t]){const a=0&t?function(e,t){const n={},a={},o={$$scope:1};let s=e.length;for(;s--;){const r=e[s],c=t[s];if(c){for(const e in r)e in c||(a[e]=1);for(const e in c)o[e]||(n[e]=c[e],o[e]=1);e[s]=c}else for(const e in r)o[e]=1}for(const e in a)e in n||(n[e]=void 0);return n}(o,[(s=he,"object"==typeof s&&null!==s?s:{})]):{};var s;1&t&&(a.$$scope={dirty:t,ctx:e}),n.$set(a)},i(e){a||(W(n.$$.fragment,e),a=!0)},o(e){F(n.$$.fragment,e),a=!1},d(e){z(n,e)}}}const he={title:"Who accessed my property?",date:"2019-03-24T08:00:00Z",description:"How to know when object property get accessed or modified",slug:"who-accessed-my-property",type:"blog"};class fe extends V{constructor(e){super(),J(this,e,null,ue,r,{})}}setTimeout(()=>{new fe({target:document.querySelector("#app"),hydrate:!0});if(document.querySelector(".twitter-tweet")){const e=document.createElement("script");e.async=!0,e.src="https://platform.twitter.com/widgets.js",e.charset="utf-8",document.body.appendChild(e)}},3e3);
