function e(){}function t(e,t){for(const o in t)e[o]=t[o];return e}function o(e){return e()}function r(){return Object.create(null)}function a(e){e.forEach(o)}function n(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,o,r,a){return e[1]&&a?t(r.ctx.slice(),e[1](a(o))):r.ctx}function i(e,t,o,r,a,n,s){const i=function(e,t,o,r){if(e[2]&&r){const a=e[2](r(o));if(void 0===t.dirty)return a;if("object"==typeof a){const e=[],o=Math.max(t.dirty.length,a.length);for(let r=0;r<o;r+=1)e[r]=t.dirty[r]|a[r];return e}return t.dirty|a}return t.dirty}(t,r,a,n);if(i){const a=c(t,o,r,s);e.p(a,i)}}function l(e,t){e.appendChild(t)}function h(e,t,o){e.insertBefore(t,o||null)}function u(e){e.parentNode.removeChild(e)}function f(e,t){for(let o=0;o<e.length;o+=1)e[o]&&e[o].d(t)}function d(e){return document.createElement(e)}function p(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function m(e){return document.createTextNode(e)}function g(){return m(" ")}function v(){return m("")}function w(e,t,o){null==o?e.removeAttribute(t):e.getAttribute(t)!==o&&e.setAttribute(t,o)}function b(e){return Array.from(e.childNodes)}function y(e,t,o,r){for(let r=0;r<e.length;r+=1){const a=e[r];if(a.nodeName===t){let t=0;const n=[];for(;t<a.attributes.length;){const e=a.attributes[t++];o[e.name]||n.push(e.name)}for(let e=0;e<n.length;e++)a.removeAttribute(n[e]);return e.splice(r,1)[0]}}return r?p(t):d(t)}function E(e,t){for(let o=0;o<e.length;o+=1){const r=e[o];if(3===r.nodeType)return r.data=""+t,e.splice(o,1)[0]}return m(t)}function $(e){return E(e," ")}function k(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function A(e,t){e.value=null==t?"":t}class x{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,o=null){this.e||(this.e=d(t.nodeName),this.t=t,this.h(e)),this.i(o)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)h(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(u)}}let S;function T(e){S=e}function I(e){(function(){if(!S)throw new Error("Function called outside component initialization");return S})().$$.on_mount.push(e)}const C=[],P=[],L=[],O=[],F=Promise.resolve();let M=!1;function N(e){L.push(e)}let U=!1;const j=new Set;function R(){if(!U){U=!0;do{for(let e=0;e<C.length;e+=1){const t=C[e];T(t),H(t.$$)}for(C.length=0;P.length;)P.pop()();for(let e=0;e<L.length;e+=1){const t=L[e];j.has(t)||(j.add(t),t())}L.length=0}while(C.length);for(;O.length;)O.pop()();M=!1,U=!1,j.clear()}}function H(e){if(null!==e.fragment){e.update(),a(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}const _=new Set;function B(e,t){e&&e.i&&(_.delete(e),e.i(t))}function D(e,t,o,r){if(e&&e.o){if(_.has(e))return;_.add(e),(void 0).c.push(()=>{_.delete(e),r&&(o&&e.d(1),r())}),e.o(t)}}function z(e){e&&e.c()}function W(e,t){e&&e.l(t)}function G(e,t,r){const{fragment:s,on_mount:c,on_destroy:i,after_update:l}=e.$$;s&&s.m(t,r),N(()=>{const t=c.map(o).filter(n);i?i.push(...t):a(t),e.$$.on_mount=[]}),l.forEach(N)}function q(e,t){const o=e.$$;null!==o.fragment&&(a(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function J(e,t){-1===e.$$.dirty[0]&&(C.push(e),M||(M=!0,F.then(R)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Y(t,o,n,s,c,i,l=[-1]){const h=S;T(t);const f=o.props||{},d=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:r(),dirty:l};let p=!1;if(d.ctx=n?n(t,f,(e,o,...r)=>{const a=r.length?r[0]:o;return d.ctx&&c(d.ctx[e],d.ctx[e]=a)&&(d.bound[e]&&d.bound[e](a),p&&J(t,e)),o}):[],d.update(),p=!0,a(d.before_update),d.fragment=!!s&&s(d.ctx),o.target){if(o.hydrate){const e=b(o.target);d.fragment&&d.fragment.l(e),e.forEach(u)}else d.fragment&&d.fragment.c();o.intro&&B(t.$$.fragment),G(t,o.target,o.anchor),R()}T(h)}class V{$destroy(){q(this,1),this.$destroy=e}$on(e,t){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(t),()=>{const e=o.indexOf(t);-1!==e&&o.splice(e,1)}}$set(){}}function K(t){let o,r,a,n,s,c,i,f,v,k,A,x,S,T,I,C,P,L,O,F,M,N,U,j,R,H,_,B,D,z,W,G,q,J,Y;return{c(){o=d("header"),r=d("nav"),a=d("ul"),n=d("li"),s=d("a"),c=m("Tan Li Hau"),i=g(),f=d("li"),v=d("a"),k=m("About"),A=g(),x=d("li"),S=d("a"),T=m("Writings"),I=g(),C=d("li"),P=d("a"),L=m("Talks"),O=g(),F=d("li"),M=d("a"),N=m("Notes"),U=g(),j=d("li"),R=d("a"),H=m("Newsletter"),_=g(),B=d("li"),D=d("a"),z=p("svg"),W=p("path"),G=g(),q=d("a"),J=p("svg"),Y=p("path"),this.h()},l(e){o=y(e,"HEADER",{class:!0});var t=b(o);r=y(t,"NAV",{});var l=b(r);a=y(l,"UL",{class:!0});var h=b(a);n=y(h,"LI",{class:!0});var d=b(n);s=y(d,"A",{href:!0,class:!0});var p=b(s);c=E(p,"Tan Li Hau"),p.forEach(u),d.forEach(u),i=$(h),f=y(h,"LI",{class:!0});var m=b(f);v=y(m,"A",{href:!0,class:!0});var g=b(v);k=E(g,"About"),g.forEach(u),m.forEach(u),A=$(h),x=y(h,"LI",{class:!0});var w=b(x);S=y(w,"A",{href:!0,class:!0});var V=b(S);T=E(V,"Writings"),V.forEach(u),w.forEach(u),I=$(h),C=y(h,"LI",{class:!0});var K=b(C);P=y(K,"A",{href:!0,class:!0});var Z=b(P);L=E(Z,"Talks"),Z.forEach(u),K.forEach(u),O=$(h),F=y(h,"LI",{class:!0});var Q=b(F);M=y(Q,"A",{href:!0,class:!0});var X=b(M);N=E(X,"Notes"),X.forEach(u),Q.forEach(u),U=$(h),j=y(h,"LI",{class:!0});var ee=b(j);R=y(ee,"A",{href:!0,class:!0});var te=b(R);H=E(te,"Newsletter"),te.forEach(u),ee.forEach(u),_=$(h),B=y(h,"LI",{class:!0});var oe=b(B);D=y(oe,"A",{"aria-label":!0,href:!0,class:!0});var re=b(D);z=y(re,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var ae=b(z);W=y(ae,"path",{d:!0},1),b(W).forEach(u),ae.forEach(u),re.forEach(u),G=$(oe),q=y(oe,"A",{"aria-label":!0,href:!0,class:!0});var ne=b(q);J=y(ne,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var se=b(J);Y=y(se,"path",{d:!0},1),b(Y).forEach(u),se.forEach(u),ne.forEach(u),oe.forEach(u),h.forEach(u),l.forEach(u),t.forEach(u),this.h()},h(){w(s,"href","/"),w(s,"class","svelte-f3e4uo"),w(n,"class","svelte-f3e4uo"),w(v,"href","/about"),w(v,"class","svelte-f3e4uo"),w(f,"class","svelte-f3e4uo"),w(S,"href","/blogs"),w(S,"class","svelte-f3e4uo"),w(x,"class","svelte-f3e4uo"),w(P,"href","/talks"),w(P,"class","svelte-f3e4uo"),w(C,"class","svelte-f3e4uo"),w(M,"href","/notes"),w(M,"class","svelte-f3e4uo"),w(F,"class","svelte-f3e4uo"),w(R,"href","/newsletter"),w(R,"class","svelte-f3e4uo"),w(j,"class","svelte-f3e4uo"),w(W,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),w(z,"viewBox","0 0 24 24"),w(z,"width","1em"),w(z,"height","1em"),w(z,"class","svelte-f3e4uo"),w(D,"aria-label","Twitter account"),w(D,"href","https://twitter.com/lihautan"),w(D,"class","svelte-f3e4uo"),w(Y,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),w(J,"viewBox","0 0 24 24"),w(J,"width","1em"),w(J,"height","1em"),w(J,"class","svelte-f3e4uo"),w(q,"aria-label","Github account"),w(q,"href","https://github.com/tanhauhau"),w(q,"class","svelte-f3e4uo"),w(B,"class","social svelte-f3e4uo"),w(a,"class","svelte-f3e4uo"),w(o,"class","svelte-f3e4uo")},m(e,t){h(e,o,t),l(o,r),l(r,a),l(a,n),l(n,s),l(s,c),l(a,i),l(a,f),l(f,v),l(v,k),l(a,A),l(a,x),l(x,S),l(S,T),l(a,I),l(a,C),l(C,P),l(P,L),l(a,O),l(a,F),l(F,M),l(M,N),l(a,U),l(a,j),l(j,R),l(R,H),l(a,_),l(a,B),l(B,D),l(D,z),l(z,W),l(B,G),l(B,q),l(q,J),l(J,Y)},p:e,i:e,o:e,d(e){e&&u(o)}}}class Z extends V{constructor(e){super(),Y(this,e,null,K,s,{})}}function Q(t){let o,r,a,n,s,c,i,f,p,v,k,x,S,T,I,C,P,L,O,F;return{c(){o=d("div"),r=d("h1"),a=m("Subscribe to my newsletter"),n=g(),s=d("h2"),c=m("Get the latest blog posts and project updates delivered right to your inbox"),i=g(),f=d("form"),p=d("div"),v=d("input"),k=g(),x=d("input"),T=g(),I=d("input"),C=g(),P=d("p"),L=m("Powered by Buttondown."),this.h()},l(e){o=y(e,"DIV",{class:!0});var t=b(o);r=y(t,"H1",{});var l=b(r);a=E(l,"Subscribe to my newsletter"),l.forEach(u),n=$(t),s=y(t,"H2",{class:!0});var h=b(s);c=E(h,"Get the latest blog posts and project updates delivered right to your inbox"),h.forEach(u),i=$(t),f=y(t,"FORM",{action:!0,method:!0,target:!0,onsubmit:!0,class:!0});var d=b(f);p=y(d,"DIV",{class:!0});var m=b(p);v=y(m,"INPUT",{type:!0,name:!0,id:!0,"aria-label":!0,placeholder:!0,class:!0}),k=$(m),x=y(m,"INPUT",{type:!0,value:!0,disabled:!0,class:!0}),m.forEach(u),T=$(d),I=y(d,"INPUT",{type:!0,value:!0,name:!0,class:!0}),C=$(d),P=y(d,"P",{class:!0});var g=b(P);L=E(g,"Powered by Buttondown."),g.forEach(u),d.forEach(u),t.forEach(u),this.h()},h(){w(s,"class","svelte-1k1s1co"),w(v,"type","email"),w(v,"name","email"),w(v,"id","bd-email"),w(v,"aria-label","email address"),w(v,"placeholder","youremail@example.com"),w(v,"class","svelte-1k1s1co"),w(x,"type","submit"),x.value="Subscribe",x.disabled=S=!t[0],w(x,"class","svelte-1k1s1co"),w(p,"class","form-item svelte-1k1s1co"),w(I,"type","hidden"),I.value="1",w(I,"name","embed"),w(I,"class","svelte-1k1s1co"),w(P,"class","svelte-1k1s1co"),w(f,"action","https://buttondown.email/api/emails/embed-subscribe/lihautan"),w(f,"method","post"),w(f,"target","popupwindow"),w(f,"onsubmit","window.open('https://buttondown.email/lihautan', 'popupwindow')"),w(f,"class","embeddable-buttondown-form"),w(o,"class","form svelte-1k1s1co")},m(e,u){var d,m,g,w;h(e,o,u),l(o,r),l(r,a),l(o,n),l(o,s),l(s,c),l(o,i),l(o,f),l(f,p),l(p,v),A(v,t[0]),l(p,k),l(p,x),l(f,T),l(f,I),l(f,C),l(f,P),l(P,L),O||(d=v,m="input",g=t[1],d.addEventListener(m,g,w),F=()=>d.removeEventListener(m,g,w),O=!0)},p(e,[t]){1&t&&v.value!==e[0]&&A(v,e[0]),1&t&&S!==(S=!e[0])&&(x.disabled=S)},i:e,o:e,d(e){e&&u(o),O=!1,F()}}}function X(e,t,o){let r;return[r,function(){r=this.value,o(0,r)}]}class ee extends V{constructor(e){super(),Y(this,e,X,Q,s,{})}}function te(e){return I(()=>(setTimeout(()=>{if(window.innerWidth>1080){const e=document.createElement("script");e.async=!0,e.type="text/javascript",e.src="//cdn.carbonads.com/carbon.js?serve=CE7ITK3E&placement=lihautancom",e.id="_carbonads_js",document.body.appendChild(e)}},5e3),()=>{try{const e=document.getElementById("carbonads");e.parentNode.removeChild(e)}catch(e){}})),[]}class oe extends V{constructor(e){super(),Y(this,e,te,null,s,{})}}function re(e,t,o){const r=e.slice();return r[6]=t[o],r}function ae(e,t,o){const r=e.slice();return r[6]=t[o],r}function ne(e){let t,o;return{c(){t=d("meta"),this.h()},l(e){t=y(e,"META",{name:!0,content:!0}),this.h()},h(){w(t,"name","keywords"),w(t,"content",o=e[6])},m(e,o){h(e,t,o)},p(e,r){4&r&&o!==(o=e[6])&&w(t,"content",o)},d(e){e&&u(t)}}}function se(e){let t,o,r=e[6]+"";return{c(){t=d("span"),o=m(r),this.h()},l(e){t=y(e,"SPAN",{class:!0});var a=b(t);o=E(a,r),a.forEach(u),this.h()},h(){w(t,"class","svelte-9tqnza")},m(e,r){h(e,t,r),l(t,o)},p(e,t){4&t&&r!==(r=e[6]+"")&&k(o,r)},d(e){e&&u(t)}}}function ce(e){let t,o,r,a,n,s,p,A,S,T,I,C,P,L,O,F,M,N,U,j,R,H,_,J,Y,V,K,Q,X,te,ce,ie,le,he,ue,fe,de,pe,me,ge=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"Article",author:e[3],copyrightHolder:e[3],copyrightYear:"2020",creator:e[3],publisher:e[3],description:e[1],headline:e[0],name:e[0],inLanguage:"en"})}<\/script>`,ve=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",description:"Breadcrumbs list",name:"Breadcrumbs",itemListElement:[{"@type":"ListItem",item:{"@id":"https://lihautan.com",name:"Homepage"},position:1},{"@type":"ListItem",item:{"@id":"https%3A%2F%2Flihautan.com%2FDebugging%20web%20workers",name:e[0]},position:2}]})}<\/script>`;document.title=t=e[0]+" | Tan Li Hau";let we=e[2],be=[];for(let t=0;t<we.length;t+=1)be[t]=ne(ae(e,we,t));_=new Z({});let ye=e[2],Ee=[];for(let t=0;t<ye.length;t+=1)Ee[t]=se(re(e,ye,t));const $e=e[5].default,ke=function(e,t,o,r){if(e){const a=c(e,t,o,r);return e[0](a)}}($e,e,e[4],null);return le=new ee({}),ue=new oe({}),{c(){o=d("meta"),r=d("meta"),a=d("meta"),n=d("meta"),s=d("meta"),p=d("meta"),A=d("meta"),S=d("meta"),T=d("meta"),I=d("meta"),C=d("meta");for(let e=0;e<be.length;e+=1)be[e].c();P=d("meta"),L=d("meta"),F=v(),N=v(),U=g(),j=d("a"),R=m("Skip to content"),H=g(),z(_.$$.fragment),J=g(),Y=d("main"),V=d("h1"),K=m(e[0]),Q=g();for(let e=0;e<Ee.length;e+=1)Ee[e].c();X=g(),te=d("article"),ke&&ke.c(),ce=g(),ie=d("footer"),z(le.$$.fragment),he=g(),z(ue.$$.fragment),fe=g(),pe=v(),this.h()},l(t){const c=function(e,t=document.body){return Array.from(t.querySelectorAll(e))}('[data-svelte="svelte-n0q11s"]',document.head);o=y(c,"META",{name:!0,content:!0}),r=y(c,"META",{name:!0,content:!0}),a=y(c,"META",{name:!0,content:!0}),n=y(c,"META",{name:!0,content:!0}),s=y(c,"META",{name:!0,content:!0}),p=y(c,"META",{name:!0,content:!0}),A=y(c,"META",{name:!0,content:!0}),S=y(c,"META",{name:!0,content:!0}),T=y(c,"META",{name:!0,content:!0}),I=y(c,"META",{name:!0,content:!0}),C=y(c,"META",{name:!0,content:!0});for(let e=0;e<be.length;e+=1)be[e].l(c);P=y(c,"META",{itemprop:!0,content:!0}),L=y(c,"META",{itemprop:!0,content:!0}),F=v(),N=v(),c.forEach(u),U=$(t),j=y(t,"A",{href:!0,class:!0});var i=b(j);R=E(i,"Skip to content"),i.forEach(u),H=$(t),W(_.$$.fragment,t),J=$(t),Y=y(t,"MAIN",{id:!0,class:!0});var l=b(Y);V=y(l,"H1",{});var h=b(V);K=E(h,e[0]),h.forEach(u),Q=$(l);for(let e=0;e<Ee.length;e+=1)Ee[e].l(l);X=$(l),te=y(l,"ARTICLE",{});var f=b(te);ke&&ke.l(f),f.forEach(u),l.forEach(u),ce=$(t),ie=y(t,"FOOTER",{class:!0});var d=b(ie);W(le.$$.fragment,d),he=$(d),W(ue.$$.fragment,d),d.forEach(u),fe=$(t),pe=v(),this.h()},h(){w(o,"name","description"),w(o,"content",e[1]),w(r,"name","image"),w(r,"content",null),w(a,"name","og:image"),w(a,"content",null),w(n,"name","og:title"),w(n,"content",e[0]),w(s,"name","og:description"),w(s,"content",e[1]),w(p,"name","og:type"),w(p,"content","website"),w(A,"name","twitter:card"),w(A,"content","summary_large_image"),w(S,"name","twitter:creator"),w(S,"content","@lihautan"),w(T,"name","twitter:title"),w(T,"content",e[0]),w(I,"name","twitter:description"),w(I,"content",e[1]),w(C,"name","twitter:image"),w(C,"content",null),w(P,"itemprop","url"),w(P,"content","https%3A%2F%2Flihautan.com%2FDebugging%20web%20workers"),w(L,"itemprop","image"),w(L,"content",null),O=new x(F),M=new x(N),w(j,"href","#content"),w(j,"class","skip svelte-9tqnza"),w(Y,"id","content"),w(Y,"class","blog svelte-9tqnza"),w(ie,"class","svelte-9tqnza"),de=new x(pe)},m(e,t){l(document.head,o),l(document.head,r),l(document.head,a),l(document.head,n),l(document.head,s),l(document.head,p),l(document.head,A),l(document.head,S),l(document.head,T),l(document.head,I),l(document.head,C);for(let e=0;e<be.length;e+=1)be[e].m(document.head,null);l(document.head,P),l(document.head,L),O.m(ge,document.head),l(document.head,F),M.m(ve,document.head),l(document.head,N),h(e,U,t),h(e,j,t),l(j,R),h(e,H,t),G(_,e,t),h(e,J,t),h(e,Y,t),l(Y,V),l(V,K),l(Y,Q);for(let e=0;e<Ee.length;e+=1)Ee[e].m(Y,null);l(Y,X),l(Y,te),ke&&ke.m(te,null),h(e,ce,t),h(e,ie,t),G(le,ie,null),l(ie,he),G(ue,ie,null),h(e,fe,t),de.m('<script async defer src="https://platform.twitter.com/widgets.js" charset="utf-8"><\/script>',e,t),h(e,pe,t),me=!0},p(e,[r]){if((!me||1&r)&&t!==(t=e[0]+" | Tan Li Hau")&&(document.title=t),(!me||2&r)&&w(o,"content",e[1]),(!me||1&r)&&w(n,"content",e[0]),(!me||2&r)&&w(s,"content",e[1]),(!me||1&r)&&w(T,"content",e[0]),(!me||2&r)&&w(I,"content",e[1]),4&r){let t;for(we=e[2],t=0;t<we.length;t+=1){const o=ae(e,we,t);be[t]?be[t].p(o,r):(be[t]=ne(o),be[t].c(),be[t].m(P.parentNode,P))}for(;t<be.length;t+=1)be[t].d(1);be.length=we.length}if((!me||3&r)&&ge!==(ge=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"Article",author:e[3],copyrightHolder:e[3],copyrightYear:"2020",creator:e[3],publisher:e[3],description:e[1],headline:e[0],name:e[0],inLanguage:"en"})}<\/script>`)&&O.p(ge),(!me||1&r)&&ve!==(ve=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",description:"Breadcrumbs list",name:"Breadcrumbs",itemListElement:[{"@type":"ListItem",item:{"@id":"https://lihautan.com",name:"Homepage"},position:1},{"@type":"ListItem",item:{"@id":"https%3A%2F%2Flihautan.com%2FDebugging%20web%20workers",name:e[0]},position:2}]})}<\/script>`)&&M.p(ve),(!me||1&r)&&k(K,e[0]),4&r){let t;for(ye=e[2],t=0;t<ye.length;t+=1){const o=re(e,ye,t);Ee[t]?Ee[t].p(o,r):(Ee[t]=se(o),Ee[t].c(),Ee[t].m(Y,X))}for(;t<Ee.length;t+=1)Ee[t].d(1);Ee.length=ye.length}ke&&ke.p&&16&r&&i(ke,$e,e,e[4],r,null,null)},i(e){me||(B(_.$$.fragment,e),B(ke,e),B(le.$$.fragment,e),B(ue.$$.fragment,e),me=!0)},o(e){D(_.$$.fragment,e),D(ke,e),D(le.$$.fragment,e),D(ue.$$.fragment,e),me=!1},d(e){u(o),u(r),u(a),u(n),u(s),u(p),u(A),u(S),u(T),u(I),u(C),f(be,e),u(P),u(L),u(F),e&&O.d(),u(N),e&&M.d(),e&&u(U),e&&u(j),e&&u(H),q(_,e),e&&u(J),e&&u(Y),f(Ee,e),ke&&ke.d(e),e&&u(ce),e&&u(ie),q(le),q(ue),e&&u(fe),e&&u(pe),e&&de.d()}}}function ie(e,t,o){let{title:r=""}=t,{description:a=""}=t,{tags:n=[]}=t;const s={"@type":"Person",name:"Tan Li Hau"};let{$$slots:c={},$$scope:i}=t;return e.$set=e=>{"title"in e&&o(0,r=e.title),"description"in e&&o(1,a=e.description),"tags"in e&&o(2,n=e.tags),"$$scope"in e&&o(4,i=e.$$scope)},[r,a,n,s,i,c]}class le extends V{constructor(e){super(),Y(this,e,ie,ce,s,{title:0,description:1,tags:2})}}function he(t){let o,r,a,n,s,c,i,f,p,v,k,A,x,S,T,I,C,P,L,O,F,M,N,U,j,R,H,_,B,D,z,W,G,q,J,Y,V,K,Z,Q,X,ee,te,oe,re,ae,ne,se,ce,ie,le,he,ue,fe,de,pe,me,ge,ve,we,be,ye,Ee,$e,ke,Ae,xe,Se,Te,Ie,Ce,Pe,Le,Oe,Fe,Me,Ne,Ue,je,Re,He,_e,Be,De,ze,We,Ge,qe,Je,Ye,Ve,Ke,Ze,Qe,Xe,et,tt,ot,rt,at,nt,st,ct,it,lt,ht,ut,ft,dt,pt,mt,gt,vt,wt,bt;return{c(){o=d("section"),r=d("ul"),a=d("li"),n=d("a"),s=m("Chrome"),c=d("li"),i=d("a"),f=m("Firefox"),p=d("li"),v=d("a"),k=m("Safari"),A=g(),x=d("p"),S=d("a"),T=m("Web Workers API"),I=m(" allows you to start a separate worker thread and receives and execute tasks off the main thread."),C=g(),P=d("p"),L=m("Since worker runs in a separate worker thread, how would you debug, ie set breakpoint, console log, and inspect your worker script?"),O=g(),F=d("p"),M=m("Here's how you would do it for various major browsers:"),N=g(),U=d("section"),j=d("h2"),R=d("a"),H=m("Chrome"),_=g(),B=d("p"),D=m("If you are debugging service worker or worker, you can head down to the console. There's a dropdown menu, if you haven't noticed previously, that says \"JavaScript context\"."),z=g(),W=d("p"),G=d("picture"),q=d("source"),J=d("source"),Y=d("img"),V=g(),K=d("p"),Z=d("picture"),Q=d("source"),X=d("source"),ee=d("img"),te=g(),oe=d("p"),re=m("For worker context, you would see a cog logo beside the name."),ae=g(),ne=d("p"),se=m("After you choose the worker context, you can type "),ce=d("code"),ie=m("self"),le=m(" into the console, and you should see "),he=d("code"),ue=m("self"),fe=m(" is an instance of "),de=d("code"),pe=m("DedicatedWorkerGlobalScope"),me=m(" instead of "),ge=d("code"),ve=m("window"),we=m("."),be=g(),ye=d("p"),Ee=d("picture"),$e=d("source"),ke=d("source"),Ae=d("img"),xe=g(),Se=d("p"),Te=m("For shared worker, you would need to go to "),Ie=d("a"),Ce=m("chrome://inspect/#workers"),Pe=m('. Select "Shared workers" on the left panel.'),Le=g(),Oe=d("p"),Fe=d("picture"),Me=d("source"),Ne=d("source"),Ue=d("img"),je=g(),Re=d("p"),He=m("You would be able to see a list of shared workers if you have any running."),_e=g(),Be=d("p"),De=m('You can click "inspect", which will open a new console for you to debug.'),ze=g(),We=d("section"),Ge=d("h2"),qe=d("a"),Je=m("Firefox"),Ye=g(),Ve=d("p"),Ke=m("For Firefox, you could go to "),Ze=d("a"),Qe=m("about:debugging#workers"),Xe=m(". You will be able to see a list of service workers, and shared workers registered to the browser."),et=g(),tt=d("p"),ot=d("picture"),rt=d("source"),at=d("source"),nt=d("img"),st=g(),ct=d("section"),it=d("h2"),lt=d("a"),ht=m("Safari"),ut=g(),ft=d("p"),dt=m("For Safari, you could find the JavaScript context dropdown at the bottom right corner of your console."),pt=g(),mt=d("p"),gt=d("picture"),vt=d("source"),wt=d("source"),bt=d("img"),this.h()},l(e){o=y(e,"SECTION",{});var t=b(o);r=y(t,"UL",{class:!0,id:!0,role:!0,"aria-label":!0});var l=b(r);a=y(l,"LI",{});var h=b(a);n=y(h,"A",{href:!0});var d=b(n);s=E(d,"Chrome"),d.forEach(u),h.forEach(u),c=y(l,"LI",{});var m=b(c);i=y(m,"A",{href:!0});var g=b(i);f=E(g,"Firefox"),g.forEach(u),m.forEach(u),p=y(l,"LI",{});var w=b(p);v=y(w,"A",{href:!0});var yt=b(v);k=E(yt,"Safari"),yt.forEach(u),w.forEach(u),l.forEach(u),t.forEach(u),A=$(e),x=y(e,"P",{});var Et=b(x);S=y(Et,"A",{href:!0,rel:!0});var $t=b(S);T=E($t,"Web Workers API"),$t.forEach(u),I=E(Et," allows you to start a separate worker thread and receives and execute tasks off the main thread."),Et.forEach(u),C=$(e),P=y(e,"P",{});var kt=b(P);L=E(kt,"Since worker runs in a separate worker thread, how would you debug, ie set breakpoint, console log, and inspect your worker script?"),kt.forEach(u),O=$(e),F=y(e,"P",{});var At=b(F);M=E(At,"Here's how you would do it for various major browsers:"),At.forEach(u),N=$(e),U=y(e,"SECTION",{});var xt=b(U);j=y(xt,"H2",{});var St=b(j);R=y(St,"A",{href:!0,id:!0});var Tt=b(R);H=E(Tt,"Chrome"),Tt.forEach(u),St.forEach(u),_=$(xt),B=y(xt,"P",{});var It=b(B);D=E(It,"If you are debugging service worker or worker, you can head down to the console. There's a dropdown menu, if you haven't noticed previously, that says \"JavaScript context\"."),It.forEach(u),z=$(xt),W=y(xt,"P",{});var Ct=b(W);G=y(Ct,"PICTURE",{});var Pt=b(G);q=y(Pt,"SOURCE",{type:!0,srcset:!0}),J=y(Pt,"SOURCE",{type:!0,srcset:!0}),Y=y(Pt,"IMG",{title:!0,alt:!0,"data-src":!0,loading:!0}),Pt.forEach(u),Ct.forEach(u),V=$(xt),K=y(xt,"P",{});var Lt=b(K);Z=y(Lt,"PICTURE",{});var Ot=b(Z);Q=y(Ot,"SOURCE",{type:!0,srcset:!0}),X=y(Ot,"SOURCE",{type:!0,srcset:!0}),ee=y(Ot,"IMG",{title:!0,alt:!0,"data-src":!0,loading:!0}),Ot.forEach(u),Lt.forEach(u),te=$(xt),oe=y(xt,"P",{});var Ft=b(oe);re=E(Ft,"For worker context, you would see a cog logo beside the name."),Ft.forEach(u),ae=$(xt),ne=y(xt,"P",{});var Mt=b(ne);se=E(Mt,"After you choose the worker context, you can type "),ce=y(Mt,"CODE",{});var Nt=b(ce);ie=E(Nt,"self"),Nt.forEach(u),le=E(Mt," into the console, and you should see "),he=y(Mt,"CODE",{});var Ut=b(he);ue=E(Ut,"self"),Ut.forEach(u),fe=E(Mt," is an instance of "),de=y(Mt,"CODE",{});var jt=b(de);pe=E(jt,"DedicatedWorkerGlobalScope"),jt.forEach(u),me=E(Mt," instead of "),ge=y(Mt,"CODE",{});var Rt=b(ge);ve=E(Rt,"window"),Rt.forEach(u),we=E(Mt,"."),Mt.forEach(u),be=$(xt),ye=y(xt,"P",{});var Ht=b(ye);Ee=y(Ht,"PICTURE",{});var _t=b(Ee);$e=y(_t,"SOURCE",{type:!0,srcset:!0}),ke=y(_t,"SOURCE",{type:!0,srcset:!0}),Ae=y(_t,"IMG",{title:!0,alt:!0,"data-src":!0,loading:!0}),_t.forEach(u),Ht.forEach(u),xe=$(xt),Se=y(xt,"P",{});var Bt=b(Se);Te=E(Bt,"For shared worker, you would need to go to "),Ie=y(Bt,"A",{href:!0});var Dt=b(Ie);Ce=E(Dt,"chrome://inspect/#workers"),Dt.forEach(u),Pe=E(Bt,'. Select "Shared workers" on the left panel.'),Bt.forEach(u),Le=$(xt),Oe=y(xt,"P",{});var zt=b(Oe);Fe=y(zt,"PICTURE",{});var Wt=b(Fe);Me=y(Wt,"SOURCE",{type:!0,srcset:!0}),Ne=y(Wt,"SOURCE",{type:!0,srcset:!0}),Ue=y(Wt,"IMG",{title:!0,alt:!0,"data-src":!0,loading:!0}),Wt.forEach(u),zt.forEach(u),je=$(xt),Re=y(xt,"P",{});var Gt=b(Re);He=E(Gt,"You would be able to see a list of shared workers if you have any running."),Gt.forEach(u),_e=$(xt),Be=y(xt,"P",{});var qt=b(Be);De=E(qt,'You can click "inspect", which will open a new console for you to debug.'),qt.forEach(u),xt.forEach(u),ze=$(e),We=y(e,"SECTION",{});var Jt=b(We);Ge=y(Jt,"H2",{});var Yt=b(Ge);qe=y(Yt,"A",{href:!0,id:!0});var Vt=b(qe);Je=E(Vt,"Firefox"),Vt.forEach(u),Yt.forEach(u),Ye=$(Jt),Ve=y(Jt,"P",{});var Kt=b(Ve);Ke=E(Kt,"For Firefox, you could go to "),Ze=y(Kt,"A",{href:!0});var Zt=b(Ze);Qe=E(Zt,"about:debugging#workers"),Zt.forEach(u),Xe=E(Kt,". You will be able to see a list of service workers, and shared workers registered to the browser."),Kt.forEach(u),et=$(Jt),tt=y(Jt,"P",{});var Qt=b(tt);ot=y(Qt,"PICTURE",{});var Xt=b(ot);rt=y(Xt,"SOURCE",{type:!0,srcset:!0}),at=y(Xt,"SOURCE",{type:!0,srcset:!0}),nt=y(Xt,"IMG",{title:!0,alt:!0,"data-src":!0,loading:!0}),Xt.forEach(u),Qt.forEach(u),Jt.forEach(u),st=$(e),ct=y(e,"SECTION",{});var eo=b(ct);it=y(eo,"H2",{});var to=b(it);lt=y(to,"A",{href:!0,id:!0});var oo=b(lt);ht=E(oo,"Safari"),oo.forEach(u),to.forEach(u),ut=$(eo),ft=y(eo,"P",{});var ro=b(ft);dt=E(ro,"For Safari, you could find the JavaScript context dropdown at the bottom right corner of your console."),ro.forEach(u),pt=$(eo),mt=y(eo,"P",{});var ao=b(mt);gt=y(ao,"PICTURE",{});var no=b(gt);vt=y(no,"SOURCE",{type:!0,srcset:!0}),wt=y(no,"SOURCE",{type:!0,srcset:!0}),bt=y(no,"IMG",{title:!0,alt:!0,"data-src":!0,loading:!0}),no.forEach(u),ao.forEach(u),eo.forEach(u),this.h()},h(){w(n,"href","#chrome"),w(i,"href","#firefox"),w(v,"href","#safari"),w(r,"class","sitemap"),w(r,"id","sitemap"),w(r,"role","navigation"),w(r,"aria-label","Table of Contents"),w(S,"href","https://developer.mozilla.org/en-US/docs/Web/API/Worker"),w(S,"rel","nofollow"),w(R,"href","#chrome"),w(R,"id","chrome"),w(q,"type","image/webp"),w(q,"srcset","013a66d17b8bc1b0.webp"),w(J,"type","image/jpeg"),w(J,"srcset","013a66d17b8bc1b0.png"),w(Y,"title","null"),w(Y,"alt","chrome console"),w(Y,"data-src","013a66d17b8bc1b0.png"),w(Y,"loading","lazy"),w(Q,"type","image/webp"),w(Q,"srcset","4ace4c13f412987f.webp"),w(X,"type","image/jpeg"),w(X,"srcset","4ace4c13f412987f.png"),w(ee,"title","null"),w(ee,"alt","chrome console context"),w(ee,"data-src","4ace4c13f412987f.png"),w(ee,"loading","lazy"),w($e,"type","image/webp"),w($e,"srcset","73374f21676ced2d.webp"),w(ke,"type","image/jpeg"),w(ke,"srcset","73374f21676ced2d.png"),w(Ae,"title","null"),w(Ae,"alt","chrome worker context"),w(Ae,"data-src","73374f21676ced2d.png"),w(Ae,"loading","lazy"),w(Ie,"href","chrome://inspect/#workers"),w(Me,"type","image/webp"),w(Me,"srcset","1e9bb055aa2e0df8.webp"),w(Ne,"type","image/jpeg"),w(Ne,"srcset","1e9bb055aa2e0df8.png"),w(Ue,"title","null"),w(Ue,"alt","chrome shared worker"),w(Ue,"data-src","1e9bb055aa2e0df8.png"),w(Ue,"loading","lazy"),w(qe,"href","#firefox"),w(qe,"id","firefox"),w(Ze,"href","about:debugging#workers"),w(rt,"type","image/webp"),w(rt,"srcset","0dc13f8c069e8acf.webp"),w(at,"type","image/jpeg"),w(at,"srcset","0dc13f8c069e8acf.png"),w(nt,"title","null"),w(nt,"alt","firefox shared worker"),w(nt,"data-src","0dc13f8c069e8acf.png"),w(nt,"loading","lazy"),w(lt,"href","#safari"),w(lt,"id","safari"),w(vt,"type","image/webp"),w(vt,"srcset","5d1149492a736853.webp"),w(wt,"type","image/jpeg"),w(wt,"srcset","5d1149492a736853.png"),w(bt,"title","null"),w(bt,"alt","safari console context"),w(bt,"data-src","5d1149492a736853.png"),w(bt,"loading","lazy")},m(e,t){h(e,o,t),l(o,r),l(r,a),l(a,n),l(n,s),l(r,c),l(c,i),l(i,f),l(r,p),l(p,v),l(v,k),h(e,A,t),h(e,x,t),l(x,S),l(S,T),l(x,I),h(e,C,t),h(e,P,t),l(P,L),h(e,O,t),h(e,F,t),l(F,M),h(e,N,t),h(e,U,t),l(U,j),l(j,R),l(R,H),l(U,_),l(U,B),l(B,D),l(U,z),l(U,W),l(W,G),l(G,q),l(G,J),l(G,Y),l(U,V),l(U,K),l(K,Z),l(Z,Q),l(Z,X),l(Z,ee),l(U,te),l(U,oe),l(oe,re),l(U,ae),l(U,ne),l(ne,se),l(ne,ce),l(ce,ie),l(ne,le),l(ne,he),l(he,ue),l(ne,fe),l(ne,de),l(de,pe),l(ne,me),l(ne,ge),l(ge,ve),l(ne,we),l(U,be),l(U,ye),l(ye,Ee),l(Ee,$e),l(Ee,ke),l(Ee,Ae),l(U,xe),l(U,Se),l(Se,Te),l(Se,Ie),l(Ie,Ce),l(Se,Pe),l(U,Le),l(U,Oe),l(Oe,Fe),l(Fe,Me),l(Fe,Ne),l(Fe,Ue),l(U,je),l(U,Re),l(Re,He),l(U,_e),l(U,Be),l(Be,De),h(e,ze,t),h(e,We,t),l(We,Ge),l(Ge,qe),l(qe,Je),l(We,Ye),l(We,Ve),l(Ve,Ke),l(Ve,Ze),l(Ze,Qe),l(Ve,Xe),l(We,et),l(We,tt),l(tt,ot),l(ot,rt),l(ot,at),l(ot,nt),h(e,st,t),h(e,ct,t),l(ct,it),l(it,lt),l(lt,ht),l(ct,ut),l(ct,ft),l(ft,dt),l(ct,pt),l(ct,mt),l(mt,gt),l(gt,vt),l(gt,wt),l(gt,bt)},p:e,d(e){e&&u(o),e&&u(A),e&&u(x),e&&u(C),e&&u(P),e&&u(O),e&&u(F),e&&u(N),e&&u(U),e&&u(ze),e&&u(We),e&&u(st),e&&u(ct)}}}function ue(e){let o,r;const a=[fe];let n={$$slots:{default:[he]},$$scope:{ctx:e}};for(let e=0;e<a.length;e+=1)n=t(n,a[e]);return o=new le({props:n}),{c(){z(o.$$.fragment)},l(e){W(o.$$.fragment,e)},m(e,t){G(o,e,t),r=!0},p(e,[t]){const r=0&t?function(e,t){const o={},r={},a={$$scope:1};let n=e.length;for(;n--;){const s=e[n],c=t[n];if(c){for(const e in s)e in c||(r[e]=1);for(const e in c)a[e]||(o[e]=c[e],a[e]=1);e[n]=c}else for(const e in s)a[e]=1}for(const e in r)e in o||(o[e]=void 0);return o}(a,[(n=fe,"object"==typeof n&&null!==n?n:{})]):{};var n;1&t&&(r.$$scope={dirty:t,ctx:e}),o.$set(r)},i(e){r||(B(o.$$.fragment,e),r=!0)},o(e){D(o.$$.fragment,e),r=!1},d(e){q(o,e)}}}const fe={title:"Debugging Web Workers",date:"2019-05-22T08:00:00Z",description:"...for Chrome, Firefox and Safari",slug:"Debugging web workers",type:"blog"};class de extends V{constructor(e){super(),Y(this,e,null,ue,s,{})}}setTimeout(()=>{new de({target:document.querySelector("#app"),hydrate:!0})},3e3);
