function n(){}function t(n,t){for(const e in t)n[e]=t[e];return n}function e(n){return n()}function a(){return Object.create(null)}function s(n){n.forEach(e)}function o(n){return"function"==typeof n}function c(n,t){return n!=n?t==t:n!==t||n&&"object"==typeof n||"function"==typeof n}function r(n,e,a,s){return n[1]&&s?t(a.ctx.slice(),n[1](s(e))):a.ctx}function l(n,t,e,a,s,o,c){const l=function(n,t,e,a){if(n[2]&&a){const s=n[2](a(e));if(void 0===t.dirty)return s;if("object"==typeof s){const n=[],e=Math.max(t.dirty.length,s.length);for(let a=0;a<e;a+=1)n[a]=t.dirty[a]|s[a];return n}return t.dirty|s}return t.dirty}(t,a,s,o);if(l){const s=r(t,e,a,c);n.p(s,l)}}function i(n,t){n.appendChild(t)}function p(n,t,e){n.insertBefore(t,e||null)}function u(n){n.parentNode.removeChild(n)}function h(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}function d(n){return document.createElement(n)}function m(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function f(n){return document.createTextNode(n)}function g(){return f(" ")}function k(){return f("")}function v(n,t,e){null==e?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function E(n){return Array.from(n.childNodes)}function y(n,t,e,a){for(let a=0;a<n.length;a+=1){const s=n[a];if(s.nodeName===t){let t=0;const o=[];for(;t<s.attributes.length;){const n=s.attributes[t++];e[n.name]||o.push(n.name)}for(let n=0;n<o.length;n++)s.removeAttribute(o[n]);return n.splice(a,1)[0]}}return a?m(t):d(t)}function w(n,t){for(let e=0;e<n.length;e+=1){const a=n[e];if(3===a.nodeType)return a.data=""+t,n.splice(e,1)[0]}return f(t)}function b(n){return w(n," ")}function $(n,t){t=""+t,n.wholeText!==t&&(n.data=t)}function A(n,t){n.value=null==t?"":t}class T{constructor(n=null){this.a=n,this.e=this.n=null}m(n,t,e=null){this.e||(this.e=d(t.nodeName),this.t=t,this.h(n)),this.i(e)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let t=0;t<this.n.length;t+=1)p(this.t,this.n[t],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(u)}}let x;function L(n){x=n}function _(n){(function(){if(!x)throw new Error("Function called outside component initialization");return x})().$$.on_mount.push(n)}const I=[],S=[],O=[],j=[],N=Promise.resolve();let P=!1;function M(n){O.push(n)}let B=!1;const H=new Set;function C(){if(!B){B=!0;do{for(let n=0;n<I.length;n+=1){const t=I[n];L(t),R(t.$$)}for(I.length=0;S.length;)S.pop()();for(let n=0;n<O.length;n+=1){const t=O[n];H.has(t)||(H.add(t),t())}O.length=0}while(I.length);for(;j.length;)j.pop()();P=!1,B=!1,H.clear()}}function R(n){if(null!==n.fragment){n.update(),s(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(M)}}const q=new Set;function F(n,t){n&&n.i&&(q.delete(n),n.i(t))}function W(n,t,e,a){if(n&&n.o){if(q.has(n))return;q.add(n),(void 0).c.push(()=>{q.delete(n),a&&(e&&n.d(1),a())}),n.o(t)}}function D(n){n&&n.c()}function z(n,t){n&&n.l(t)}function U(n,t,a){const{fragment:c,on_mount:r,on_destroy:l,after_update:i}=n.$$;c&&c.m(t,a),M(()=>{const t=r.map(e).filter(o);l?l.push(...t):s(t),n.$$.on_mount=[]}),i.forEach(M)}function G(n,t){const e=n.$$;null!==e.fragment&&(s(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function J(n,t){-1===n.$$.dirty[0]&&(I.push(n),P||(P=!0,N.then(C)),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function V(t,e,o,c,r,l,i=[-1]){const p=x;L(t);const h=e.props||{},d=t.$$={fragment:null,ctx:null,props:l,update:n,not_equal:r,bound:a(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:a(),dirty:i};let m=!1;if(d.ctx=o?o(t,h,(n,e,...a)=>{const s=a.length?a[0]:e;return d.ctx&&r(d.ctx[n],d.ctx[n]=s)&&(d.bound[n]&&d.bound[n](s),m&&J(t,n)),e}):[],d.update(),m=!0,s(d.before_update),d.fragment=!!c&&c(d.ctx),e.target){if(e.hydrate){const n=E(e.target);d.fragment&&d.fragment.l(n),n.forEach(u)}else d.fragment&&d.fragment.c();e.intro&&F(t.$$.fragment),U(t,e.target,e.anchor),C()}L(p)}class Y{$destroy(){G(this,1),this.$destroy=n}$on(n,t){const e=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return e.push(t),()=>{const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}$set(){}}function K(t){let e,a,s,o,c,r,l,h,k,$,A,T,x,L,_,I,S,O,j,N,P,M,B,H,C,R,q,F,W,D,z,U,G,J,V;return{c(){e=d("header"),a=d("nav"),s=d("ul"),o=d("li"),c=d("a"),r=f("Tan Li Hau"),l=g(),h=d("li"),k=d("a"),$=f("About"),A=g(),T=d("li"),x=d("a"),L=f("Writings"),_=g(),I=d("li"),S=d("a"),O=f("Talks"),j=g(),N=d("li"),P=d("a"),M=f("Notes"),B=g(),H=d("li"),C=d("a"),R=f("Newsletter"),q=g(),F=d("li"),W=d("a"),D=m("svg"),z=m("path"),U=g(),G=d("a"),J=m("svg"),V=m("path"),this.h()},l(n){e=y(n,"HEADER",{class:!0});var t=E(e);a=y(t,"NAV",{});var i=E(a);s=y(i,"UL",{class:!0});var p=E(s);o=y(p,"LI",{class:!0});var d=E(o);c=y(d,"A",{href:!0,class:!0});var m=E(c);r=w(m,"Tan Li Hau"),m.forEach(u),d.forEach(u),l=b(p),h=y(p,"LI",{class:!0});var f=E(h);k=y(f,"A",{href:!0,class:!0});var g=E(k);$=w(g,"About"),g.forEach(u),f.forEach(u),A=b(p),T=y(p,"LI",{class:!0});var v=E(T);x=y(v,"A",{href:!0,class:!0});var Y=E(x);L=w(Y,"Writings"),Y.forEach(u),v.forEach(u),_=b(p),I=y(p,"LI",{class:!0});var K=E(I);S=y(K,"A",{href:!0,class:!0});var Q=E(S);O=w(Q,"Talks"),Q.forEach(u),K.forEach(u),j=b(p),N=y(p,"LI",{class:!0});var X=E(N);P=y(X,"A",{href:!0,class:!0});var Z=E(P);M=w(Z,"Notes"),Z.forEach(u),X.forEach(u),B=b(p),H=y(p,"LI",{class:!0});var nn=E(H);C=y(nn,"A",{href:!0,class:!0});var tn=E(C);R=w(tn,"Newsletter"),tn.forEach(u),nn.forEach(u),q=b(p),F=y(p,"LI",{class:!0});var en=E(F);W=y(en,"A",{"aria-label":!0,href:!0,class:!0});var an=E(W);D=y(an,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var sn=E(D);z=y(sn,"path",{d:!0},1),E(z).forEach(u),sn.forEach(u),an.forEach(u),U=b(en),G=y(en,"A",{"aria-label":!0,href:!0,class:!0});var on=E(G);J=y(on,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var cn=E(J);V=y(cn,"path",{d:!0},1),E(V).forEach(u),cn.forEach(u),on.forEach(u),en.forEach(u),p.forEach(u),i.forEach(u),t.forEach(u),this.h()},h(){v(c,"href","/"),v(c,"class","svelte-f3e4uo"),v(o,"class","svelte-f3e4uo"),v(k,"href","/about"),v(k,"class","svelte-f3e4uo"),v(h,"class","svelte-f3e4uo"),v(x,"href","/blogs"),v(x,"class","svelte-f3e4uo"),v(T,"class","svelte-f3e4uo"),v(S,"href","/talks"),v(S,"class","svelte-f3e4uo"),v(I,"class","svelte-f3e4uo"),v(P,"href","/notes"),v(P,"class","svelte-f3e4uo"),v(N,"class","svelte-f3e4uo"),v(C,"href","/newsletter"),v(C,"class","svelte-f3e4uo"),v(H,"class","svelte-f3e4uo"),v(z,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),v(D,"viewBox","0 0 24 24"),v(D,"width","1em"),v(D,"height","1em"),v(D,"class","svelte-f3e4uo"),v(W,"aria-label","Twitter account"),v(W,"href","https://twitter.com/lihautan"),v(W,"class","svelte-f3e4uo"),v(V,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),v(J,"viewBox","0 0 24 24"),v(J,"width","1em"),v(J,"height","1em"),v(J,"class","svelte-f3e4uo"),v(G,"aria-label","Github account"),v(G,"href","https://github.com/tanhauhau"),v(G,"class","svelte-f3e4uo"),v(F,"class","social svelte-f3e4uo"),v(s,"class","svelte-f3e4uo"),v(e,"class","svelte-f3e4uo")},m(n,t){p(n,e,t),i(e,a),i(a,s),i(s,o),i(o,c),i(c,r),i(s,l),i(s,h),i(h,k),i(k,$),i(s,A),i(s,T),i(T,x),i(x,L),i(s,_),i(s,I),i(I,S),i(S,O),i(s,j),i(s,N),i(N,P),i(P,M),i(s,B),i(s,H),i(H,C),i(C,R),i(s,q),i(s,F),i(F,W),i(W,D),i(D,z),i(F,U),i(F,G),i(G,J),i(J,V)},p:n,i:n,o:n,d(n){n&&u(e)}}}class Q extends Y{constructor(n){super(),V(this,n,null,K,c,{})}}function X(t){let e,a,s,o,c,r,l,h,m,k,$,T,x,L,_,I,S,O,j,N;return{c(){e=d("div"),a=d("h1"),s=f("Subscribe to my newsletter"),o=g(),c=d("h2"),r=f("Get the latest blog posts and project updates delivered right to your inbox"),l=g(),h=d("form"),m=d("div"),k=d("input"),$=g(),T=d("input"),L=g(),_=d("input"),I=g(),S=d("p"),O=f("Powered by Buttondown."),this.h()},l(n){e=y(n,"DIV",{class:!0});var t=E(e);a=y(t,"H1",{});var i=E(a);s=w(i,"Subscribe to my newsletter"),i.forEach(u),o=b(t),c=y(t,"H2",{class:!0});var p=E(c);r=w(p,"Get the latest blog posts and project updates delivered right to your inbox"),p.forEach(u),l=b(t),h=y(t,"FORM",{action:!0,method:!0,target:!0,onsubmit:!0,class:!0});var d=E(h);m=y(d,"DIV",{class:!0});var f=E(m);k=y(f,"INPUT",{type:!0,name:!0,id:!0,"aria-label":!0,placeholder:!0,class:!0}),$=b(f),T=y(f,"INPUT",{type:!0,value:!0,disabled:!0,class:!0}),f.forEach(u),L=b(d),_=y(d,"INPUT",{type:!0,value:!0,name:!0,class:!0}),I=b(d),S=y(d,"P",{class:!0});var g=E(S);O=w(g,"Powered by Buttondown."),g.forEach(u),d.forEach(u),t.forEach(u),this.h()},h(){v(c,"class","svelte-1k1s1co"),v(k,"type","email"),v(k,"name","email"),v(k,"id","bd-email"),v(k,"aria-label","email address"),v(k,"placeholder","youremail@example.com"),v(k,"class","svelte-1k1s1co"),v(T,"type","submit"),T.value="Subscribe",T.disabled=x=!t[0],v(T,"class","svelte-1k1s1co"),v(m,"class","form-item svelte-1k1s1co"),v(_,"type","hidden"),_.value="1",v(_,"name","embed"),v(_,"class","svelte-1k1s1co"),v(S,"class","svelte-1k1s1co"),v(h,"action","https://buttondown.email/api/emails/embed-subscribe/lihautan"),v(h,"method","post"),v(h,"target","popupwindow"),v(h,"onsubmit","window.open('https://buttondown.email/lihautan', 'popupwindow')"),v(h,"class","embeddable-buttondown-form"),v(e,"class","form svelte-1k1s1co")},m(n,u){var d,f,g,v;p(n,e,u),i(e,a),i(a,s),i(e,o),i(e,c),i(c,r),i(e,l),i(e,h),i(h,m),i(m,k),A(k,t[0]),i(m,$),i(m,T),i(h,L),i(h,_),i(h,I),i(h,S),i(S,O),j||(d=k,f="input",g=t[1],d.addEventListener(f,g,v),N=()=>d.removeEventListener(f,g,v),j=!0)},p(n,[t]){1&t&&k.value!==n[0]&&A(k,n[0]),1&t&&x!==(x=!n[0])&&(T.disabled=x)},i:n,o:n,d(n){n&&u(e),j=!1,N()}}}function Z(n,t,e){let a;return[a,function(){a=this.value,e(0,a)}]}class nn extends Y{constructor(n){super(),V(this,n,Z,X,c,{})}}function tn(n){return _(()=>(setTimeout(()=>{if(window.innerWidth>1080){const n=document.createElement("script");n.async=!0,n.type="text/javascript",n.src="//cdn.carbonads.com/carbon.js?serve=CE7ITK3E&placement=lihautancom",n.id="_carbonads_js",document.body.appendChild(n)}},5e3),()=>{try{const n=document.getElementById("carbonads");n.parentNode.removeChild(n)}catch(n){}})),[]}class en extends Y{constructor(n){super(),V(this,n,tn,null,c,{})}}function an(n,t,e){const a=n.slice();return a[6]=t[e],a}function sn(n,t,e){const a=n.slice();return a[6]=t[e],a}function on(n){let t,e;return{c(){t=d("meta"),this.h()},l(n){t=y(n,"META",{name:!0,content:!0}),this.h()},h(){v(t,"name","keywords"),v(t,"content",e=n[6])},m(n,e){p(n,t,e)},p(n,a){4&a&&e!==(e=n[6])&&v(t,"content",e)},d(n){n&&u(t)}}}function cn(n){let t,e,a=n[6]+"";return{c(){t=d("span"),e=f(a),this.h()},l(n){t=y(n,"SPAN",{class:!0});var s=E(t);e=w(s,a),s.forEach(u),this.h()},h(){v(t,"class","svelte-9tqnza")},m(n,a){p(n,t,a),i(t,e)},p(n,t){4&t&&a!==(a=n[6]+"")&&$(e,a)},d(n){n&&u(t)}}}function rn(n){let t,e,a,s,o,c,m,A,x,L,_,I,S,O,j,N,P,M,B,H,C,R,q,J,V,Y,K,X,Z,tn,rn,ln,pn,un,hn,dn,mn=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"Article",author:n[3],copyrightHolder:n[3],copyrightYear:"2020",creator:n[3],publisher:n[3],description:n[1],headline:n[0],name:n[0],inLanguage:"en"})}<\/script>`,fn=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",description:"Breadcrumbs list",name:"Breadcrumbs",itemListElement:[{"@type":"ListItem",item:{"@id":"https://lihautan.com",name:"Homepage"},position:1},{"@type":"ListItem",item:{"@id":"https%3A%2F%2Flihautan.com%2Fimplementing-feature-in-svelte",name:n[0]},position:2}]})}<\/script>`;document.title=t=n[0]+" | Tan Li Hau";let gn=n[2],kn=[];for(let t=0;t<gn.length;t+=1)kn[t]=on(sn(n,gn,t));q=new Q({});let vn=n[2],En=[];for(let t=0;t<vn.length;t+=1)En[t]=cn(an(n,vn,t));const yn=n[5].default,wn=function(n,t,e,a){if(n){const s=r(n,t,e,a);return n[0](s)}}(yn,n,n[4],null);return pn=new nn({}),hn=new en({}),{c(){e=d("meta"),a=d("meta"),s=d("meta"),o=d("meta"),c=d("meta"),m=d("meta"),A=d("meta"),x=d("meta"),L=d("meta"),_=d("meta"),I=d("meta");for(let n=0;n<kn.length;n+=1)kn[n].c();S=d("meta"),O=d("meta"),N=k(),M=k(),B=g(),H=d("a"),C=f("Skip to content"),R=g(),D(q.$$.fragment),J=g(),V=d("main"),Y=d("h1"),K=f(n[0]),X=g();for(let n=0;n<En.length;n+=1)En[n].c();Z=g(),tn=d("article"),wn&&wn.c(),rn=g(),ln=d("footer"),D(pn.$$.fragment),un=g(),D(hn.$$.fragment),this.h()},l(t){const r=function(n,t=document.body){return Array.from(t.querySelectorAll(n))}('[data-svelte="svelte-n0q11s"]',document.head);e=y(r,"META",{name:!0,content:!0}),a=y(r,"META",{name:!0,content:!0}),s=y(r,"META",{name:!0,content:!0}),o=y(r,"META",{name:!0,content:!0}),c=y(r,"META",{name:!0,content:!0}),m=y(r,"META",{name:!0,content:!0}),A=y(r,"META",{name:!0,content:!0}),x=y(r,"META",{name:!0,content:!0}),L=y(r,"META",{name:!0,content:!0}),_=y(r,"META",{name:!0,content:!0}),I=y(r,"META",{name:!0,content:!0});for(let n=0;n<kn.length;n+=1)kn[n].l(r);S=y(r,"META",{itemprop:!0,content:!0}),O=y(r,"META",{itemprop:!0,content:!0}),N=k(),M=k(),r.forEach(u),B=b(t),H=y(t,"A",{href:!0,class:!0});var l=E(H);C=w(l,"Skip to content"),l.forEach(u),R=b(t),z(q.$$.fragment,t),J=b(t),V=y(t,"MAIN",{id:!0,class:!0});var i=E(V);Y=y(i,"H1",{});var p=E(Y);K=w(p,n[0]),p.forEach(u),X=b(i);for(let n=0;n<En.length;n+=1)En[n].l(i);Z=b(i),tn=y(i,"ARTICLE",{});var h=E(tn);wn&&wn.l(h),h.forEach(u),i.forEach(u),rn=b(t),ln=y(t,"FOOTER",{class:!0});var d=E(ln);z(pn.$$.fragment,d),un=b(d),z(hn.$$.fragment,d),d.forEach(u),this.h()},h(){v(e,"name","description"),v(e,"content",n[1]),v(a,"name","image"),v(a,"content",null),v(s,"name","og:image"),v(s,"content",null),v(o,"name","og:title"),v(o,"content",n[0]),v(c,"name","og:description"),v(c,"content",n[1]),v(m,"name","og:type"),v(m,"content","website"),v(A,"name","twitter:card"),v(A,"content","summary_large_image"),v(x,"name","twitter:creator"),v(x,"content","@lihautan"),v(L,"name","twitter:title"),v(L,"content",n[0]),v(_,"name","twitter:description"),v(_,"content",n[1]),v(I,"name","twitter:image"),v(I,"content",null),v(S,"itemprop","url"),v(S,"content","https%3A%2F%2Flihautan.com%2Fimplementing-feature-in-svelte"),v(O,"itemprop","image"),v(O,"content",null),j=new T(N),P=new T(M),v(H,"href","#content"),v(H,"class","skip svelte-9tqnza"),v(V,"id","content"),v(V,"class","blog svelte-9tqnza"),v(ln,"class","svelte-9tqnza")},m(n,t){i(document.head,e),i(document.head,a),i(document.head,s),i(document.head,o),i(document.head,c),i(document.head,m),i(document.head,A),i(document.head,x),i(document.head,L),i(document.head,_),i(document.head,I);for(let n=0;n<kn.length;n+=1)kn[n].m(document.head,null);i(document.head,S),i(document.head,O),j.m(mn,document.head),i(document.head,N),P.m(fn,document.head),i(document.head,M),p(n,B,t),p(n,H,t),i(H,C),p(n,R,t),U(q,n,t),p(n,J,t),p(n,V,t),i(V,Y),i(Y,K),i(V,X);for(let n=0;n<En.length;n+=1)En[n].m(V,null);i(V,Z),i(V,tn),wn&&wn.m(tn,null),p(n,rn,t),p(n,ln,t),U(pn,ln,null),i(ln,un),U(hn,ln,null),dn=!0},p(n,[a]){if((!dn||1&a)&&t!==(t=n[0]+" | Tan Li Hau")&&(document.title=t),(!dn||2&a)&&v(e,"content",n[1]),(!dn||1&a)&&v(o,"content",n[0]),(!dn||2&a)&&v(c,"content",n[1]),(!dn||1&a)&&v(L,"content",n[0]),(!dn||2&a)&&v(_,"content",n[1]),4&a){let t;for(gn=n[2],t=0;t<gn.length;t+=1){const e=sn(n,gn,t);kn[t]?kn[t].p(e,a):(kn[t]=on(e),kn[t].c(),kn[t].m(S.parentNode,S))}for(;t<kn.length;t+=1)kn[t].d(1);kn.length=gn.length}if((!dn||3&a)&&mn!==(mn=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"Article",author:n[3],copyrightHolder:n[3],copyrightYear:"2020",creator:n[3],publisher:n[3],description:n[1],headline:n[0],name:n[0],inLanguage:"en"})}<\/script>`)&&j.p(mn),(!dn||1&a)&&fn!==(fn=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",description:"Breadcrumbs list",name:"Breadcrumbs",itemListElement:[{"@type":"ListItem",item:{"@id":"https://lihautan.com",name:"Homepage"},position:1},{"@type":"ListItem",item:{"@id":"https%3A%2F%2Flihautan.com%2Fimplementing-feature-in-svelte",name:n[0]},position:2}]})}<\/script>`)&&P.p(fn),(!dn||1&a)&&$(K,n[0]),4&a){let t;for(vn=n[2],t=0;t<vn.length;t+=1){const e=an(n,vn,t);En[t]?En[t].p(e,a):(En[t]=cn(e),En[t].c(),En[t].m(V,Z))}for(;t<En.length;t+=1)En[t].d(1);En.length=vn.length}wn&&wn.p&&16&a&&l(wn,yn,n,n[4],a,null,null)},i(n){dn||(F(q.$$.fragment,n),F(wn,n),F(pn.$$.fragment,n),F(hn.$$.fragment,n),dn=!0)},o(n){W(q.$$.fragment,n),W(wn,n),W(pn.$$.fragment,n),W(hn.$$.fragment,n),dn=!1},d(n){u(e),u(a),u(s),u(o),u(c),u(m),u(A),u(x),u(L),u(_),u(I),h(kn,n),u(S),u(O),u(N),n&&j.d(),u(M),n&&P.d(),n&&u(B),n&&u(H),n&&u(R),G(q,n),n&&u(J),n&&u(V),h(En,n),wn&&wn.d(n),n&&u(rn),n&&u(ln),G(pn),G(hn)}}}function ln(n,t,e){let{title:a=""}=t,{description:s=""}=t,{tags:o=[]}=t;const c={"@type":"Person",name:"Tan Li Hau"};let{$$slots:r={},$$scope:l}=t;return n.$set=n=>{"title"in n&&e(0,a=n.title),"description"in n&&e(1,s=n.description),"tags"in n&&e(2,o=n.tags),"$$scope"in n&&e(4,l=n.$$scope)},[a,s,o,c,l,r]}class pn extends Y{constructor(n){super(),V(this,n,ln,rn,c,{title:0,description:1,tags:2})}}function un(t){let e,a,s,o,c,r,l,h,m,k,$,A,T,x,L,_,I,S,O,j,N,P,M,B,H,C,R,q,F,W,D,z,U,G,J,V,Y,K,Q,X,Z,nn,tn,en,an,sn,on,cn,rn,ln,pn,un,hn,dn,mn,fn,gn,kn,vn,En,yn,wn,bn,$n,An,Tn,xn,Ln,_n,In,Sn,On,jn,Nn,Pn,Mn,Bn,Hn,Cn,Rn,qn,Fn,Wn,Dn,zn,Un,Gn,Jn,Vn,Yn,Kn,Qn,Xn,Zn,nt,tt,et,at,st,ot,ct,rt,lt,it,pt;return{c(){e=d("section"),a=d("ul"),s=d("li"),o=d("a"),c=f("Overview"),r=d("li"),l=d("a"),h=f("Start implementation"),m=g(),k=d("p"),$=f("Anyone who"),A=g(),T=d("ul"),x=d("li"),L=f("wants to get started in contributing to the Svelte source code"),_=g(),I=d("section"),S=d("h2"),O=d("a"),j=f("Overview"),N=g(),P=d("p"),M=f("Today we are going to dive in and implmeent "),B=d("code"),H=f("{#range}"),C=f(" logic block in Svelte."),R=g(),q=d("p"),F=f("We are going to look at how"),W=g(),D=d("p"),z=f("if you are unfamiliar with the Svelte compiler, I recommend you to read "),U=d("a"),G=f('"The Svelte Compiler Handbook"'),J=f(", which talks about the Svelte compiler at a high level."),V=g(),Y=d("p"),K=f("Armed with the overview of the compilation pipeline, let's dive into the detail, by implementing a new logic block, "),Q=d("code"),X=f("{#range}"),Z=f("."),nn=g(),tn=d("p"),en=f("A quick idea of how "),an=d("code"),sn=f("{#range}"),on=f(" behaves:"),cn=g(),rn=d("p"),ln=d("strong"),pn=f("1. The syntax:"),un=g(),hn=d("pre"),dn=g(),mn=d("pre"),fn=g(),gn=d("p"),kn=d("strong"),vn=f("2. The behavior:"),En=g(),yn=d("p"),wn=f("The "),bn=d("code"),$n=f("{#range}"),An=f(" behaves like "),Tn=d("a"),xn=f("Ruby range"),Ln=f(":"),_n=g(),In=d("ul"),Sn=d("li"),On=d("code"),jn=f("{#range}"),Nn=f(" loops from the start to end inclusively"),Pn=g(),Mn=d("li"),Bn=f("allow descending range too: "),Hn=d("code"),Cn=f("{#range 5..1 as n}"),Rn=g(),qn=d("li"),Fn=f("allow ranging through characters: "),Wn=d("code"),Dn=f("{#range 'a'..'z' as n}"),zn=g(),Un=d("section"),Gn=d("h2"),Jn=d("a"),Vn=f("Start implementation"),Yn=g(),Kn=d("p"),Qn=f("With an "),Xn=d("a"),Zn=f("https://github.com/sveltejs/svelte/issues/2968"),nt=g(),tt=d("pre"),et=g(),at=d("pre"),st=g(),ot=d("p"),ct=f("TODO: don't add the dependencies yet\nNOTE: copy code from EachBlock, since they lookalike"),rt=g(),lt=d("pre"),it=g(),pt=d("pre"),this.h()},l(n){e=y(n,"SECTION",{});var t=E(e);a=y(t,"UL",{class:!0,id:!0,role:!0,"aria-label":!0});var i=E(a);s=y(i,"LI",{});var p=E(s);o=y(p,"A",{href:!0});var d=E(o);c=w(d,"Overview"),d.forEach(u),p.forEach(u),r=y(i,"LI",{});var f=E(r);l=y(f,"A",{href:!0});var g=E(l);h=w(g,"Start implementation"),g.forEach(u),f.forEach(u),i.forEach(u),t.forEach(u),m=b(n),k=y(n,"P",{});var v=E(k);$=w(v,"Anyone who"),v.forEach(u),A=b(n),T=y(n,"UL",{});var ut=E(T);x=y(ut,"LI",{});var ht=E(x);L=w(ht,"wants to get started in contributing to the Svelte source code"),ht.forEach(u),ut.forEach(u),_=b(n),I=y(n,"SECTION",{});var dt=E(I);S=y(dt,"H2",{});var mt=E(S);O=y(mt,"A",{href:!0,id:!0});var ft=E(O);j=w(ft,"Overview"),ft.forEach(u),mt.forEach(u),N=b(dt),P=y(dt,"P",{});var gt=E(P);M=w(gt,"Today we are going to dive in and implmeent "),B=y(gt,"CODE",{});var kt=E(B);H=w(kt,"{#range}"),kt.forEach(u),C=w(gt," logic block in Svelte."),gt.forEach(u),R=b(dt),q=y(dt,"P",{});var vt=E(q);F=w(vt,"We are going to look at how"),vt.forEach(u),W=b(dt),D=y(dt,"P",{});var Et=E(D);z=w(Et,"if you are unfamiliar with the Svelte compiler, I recommend you to read "),U=y(Et,"A",{href:!0});var yt=E(U);G=w(yt,'"The Svelte Compiler Handbook"'),yt.forEach(u),J=w(Et,", which talks about the Svelte compiler at a high level."),Et.forEach(u),V=b(dt),Y=y(dt,"P",{});var wt=E(Y);K=w(wt,"Armed with the overview of the compilation pipeline, let's dive into the detail, by implementing a new logic block, "),Q=y(wt,"CODE",{});var bt=E(Q);X=w(bt,"{#range}"),bt.forEach(u),Z=w(wt,"."),wt.forEach(u),nn=b(dt),tn=y(dt,"P",{});var $t=E(tn);en=w($t,"A quick idea of how "),an=y($t,"CODE",{});var At=E(an);sn=w(At,"{#range}"),At.forEach(u),on=w($t," behaves:"),$t.forEach(u),cn=b(dt),rn=y(dt,"P",{});var Tt=E(rn);ln=y(Tt,"STRONG",{});var xt=E(ln);pn=w(xt,"1. The syntax:"),xt.forEach(u),Tt.forEach(u),un=b(dt),hn=y(dt,"PRE",{class:!0}),E(hn).forEach(u),dn=b(dt),mn=y(dt,"PRE",{class:!0}),E(mn).forEach(u),fn=b(dt),gn=y(dt,"P",{});var Lt=E(gn);kn=y(Lt,"STRONG",{});var _t=E(kn);vn=w(_t,"2. The behavior:"),_t.forEach(u),Lt.forEach(u),En=b(dt),yn=y(dt,"P",{});var It=E(yn);wn=w(It,"The "),bn=y(It,"CODE",{});var St=E(bn);$n=w(St,"{#range}"),St.forEach(u),An=w(It," behaves like "),Tn=y(It,"A",{href:!0,rel:!0});var Ot=E(Tn);xn=w(Ot,"Ruby range"),Ot.forEach(u),Ln=w(It,":"),It.forEach(u),_n=b(dt),In=y(dt,"UL",{});var jt=E(In);Sn=y(jt,"LI",{});var Nt=E(Sn);On=y(Nt,"CODE",{});var Pt=E(On);jn=w(Pt,"{#range}"),Pt.forEach(u),Nn=w(Nt," loops from the start to end inclusively"),Nt.forEach(u),Pn=b(jt),Mn=y(jt,"LI",{});var Mt=E(Mn);Bn=w(Mt,"allow descending range too: "),Hn=y(Mt,"CODE",{});var Bt=E(Hn);Cn=w(Bt,"{#range 5..1 as n}"),Bt.forEach(u),Mt.forEach(u),Rn=b(jt),qn=y(jt,"LI",{});var Ht=E(qn);Fn=w(Ht,"allow ranging through characters: "),Wn=y(Ht,"CODE",{});var Ct=E(Wn);Dn=w(Ct,"{#range 'a'..'z' as n}"),Ct.forEach(u),Ht.forEach(u),jt.forEach(u),dt.forEach(u),zn=b(n),Un=y(n,"SECTION",{});var Rt=E(Un);Gn=y(Rt,"H2",{});var qt=E(Gn);Jn=y(qt,"A",{href:!0,id:!0});var Ft=E(Jn);Vn=w(Ft,"Start implementation"),Ft.forEach(u),qt.forEach(u),Yn=b(Rt),Kn=y(Rt,"P",{});var Wt=E(Kn);Qn=w(Wt,"With an "),Xn=y(Wt,"A",{href:!0,rel:!0});var Dt=E(Xn);Zn=w(Dt,"https://github.com/sveltejs/svelte/issues/2968"),Dt.forEach(u),Wt.forEach(u),nt=b(Rt),tt=y(Rt,"PRE",{class:!0}),E(tt).forEach(u),et=b(Rt),at=y(Rt,"PRE",{class:!0}),E(at).forEach(u),st=b(Rt),ot=y(Rt,"P",{});var zt=E(ot);ct=w(zt,"TODO: don't add the dependencies yet\nNOTE: copy code from EachBlock, since they lookalike"),zt.forEach(u),rt=b(Rt),lt=y(Rt,"PRE",{class:!0}),E(lt).forEach(u),it=b(Rt),pt=y(Rt,"PRE",{class:!0}),E(pt).forEach(u),Rt.forEach(u),this.h()},h(){v(o,"href","#overview"),v(l,"href","#start-implementation"),v(a,"class","sitemap"),v(a,"id","sitemap"),v(a,"role","navigation"),v(a,"aria-label","Table of Contents"),v(O,"href","#overview"),v(O,"id","overview"),v(U,"href","/the-svelte-compiler-handbook"),v(hn,"class","language-svelte"),v(mn,"class","language-svelte"),v(Tn,"href","https://www.rubyguides.com/2016/06/ruby-ranges-how-do-they-work/"),v(Tn,"rel","nofollow"),v(Jn,"href","#start-implementation"),v(Jn,"id","start-implementation"),v(Xn,"href","https://github.com/sveltejs/svelte/issues/2968"),v(Xn,"rel","nofollow"),v(tt,"class","language-null"),v(at,"class","language-null"),v(lt,"class","language-null"),v(pt,"class","language-js")},m(n,t){p(n,e,t),i(e,a),i(a,s),i(s,o),i(o,c),i(a,r),i(r,l),i(l,h),p(n,m,t),p(n,k,t),i(k,$),p(n,A,t),p(n,T,t),i(T,x),i(x,L),p(n,_,t),p(n,I,t),i(I,S),i(S,O),i(O,j),i(I,N),i(I,P),i(P,M),i(P,B),i(B,H),i(P,C),i(I,R),i(I,q),i(q,F),i(I,W),i(I,D),i(D,z),i(D,U),i(U,G),i(D,J),i(I,V),i(I,Y),i(Y,K),i(Y,Q),i(Q,X),i(Y,Z),i(I,nn),i(I,tn),i(tn,en),i(tn,an),i(an,sn),i(tn,on),i(I,cn),i(I,rn),i(rn,ln),i(ln,pn),i(I,un),i(I,hn),hn.innerHTML='<code class="language-svelte">&lt;!-- loop &#96;n&#96; through 1, 2, 3, 4, 5 --&gt;\n&#123;#range 1..5 as n&#125;\n  &#123;n&#125;\n&#123;/range&#125;</code>',i(I,dn),i(I,mn),mn.innerHTML='<code class="language-svelte">&lt;script&gt;\n  let start = 1;\n  let end = 5;\n&lt;/script&gt;\n\n&lt;!-- loop &#96;n&#96; through 1, 2, 3, 4, 5 --&gt;\n&#123;#range start..end as n&#125;\n  &#123;n&#125;\n&#123;/range&#125;\n\n&lt;input bind:value=&#123;start&#125; type=&quot;number&quot; /&gt;\n&lt;input bind:value=&#123;end&#125; type=&quot;number&quot; /&gt;</code>',i(I,fn),i(I,gn),i(gn,kn),i(kn,vn),i(I,En),i(I,yn),i(yn,wn),i(yn,bn),i(bn,$n),i(yn,An),i(yn,Tn),i(Tn,xn),i(yn,Ln),i(I,_n),i(I,In),i(In,Sn),i(Sn,On),i(On,jn),i(Sn,Nn),i(In,Pn),i(In,Mn),i(Mn,Bn),i(Mn,Hn),i(Hn,Cn),i(In,Rn),i(In,qn),i(qn,Fn),i(qn,Wn),i(Wn,Dn),p(n,zn,t),p(n,Un,t),i(Un,Gn),i(Gn,Jn),i(Jn,Vn),i(Un,Yn),i(Un,Kn),i(Kn,Qn),i(Kn,Xn),i(Xn,Zn),i(Un,nt),i(Un,tt),tt.innerHTML='\n<code class="language-">ParseError: Expected if, each or await\n  at error (compiler.js:6208:16)\n  at Parser.error (compiler.js:6336:3)\n  at mustache (compiler.js:5911:11)\n  at new Parser (compiler.js:6288:12)</code>',i(Un,et),i(Un,at),at.innerHTML='\n<code class="language-">Error: Not implemented: RangeBlock\n  at get_constructor (compiler.js:17451:18)\n  at children.map.child (compiler.js:17460:23)\n  at Array.map (&lt;anonymous&gt;)\n  at map_children (compiler.js:17459:18)\n  at new Element$1 (compiler.js:16523:19)</code>',i(Un,st),i(Un,ot),i(ot,ct),i(Un,rt),i(Un,lt),lt.innerHTML='\n<code class="language-">Error: TODO implement RangeBlock\n  at new FragmentWrapper (compiler.js:12846:11)\n  at new ElementWrapper (compiler.js:10261:19)\n  at new FragmentWrapper (compiler.js:12888:21)\n  at new Renderer (compiler.js:12983:19)\n  at dom (compiler.js:13199:19)</code>',i(Un,it),i(Un,pt),pt.innerHTML='<code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">RangeBlockWrapper</span> <span class="token keyword">extends</span> <span class="token class-name">Wrapper</span> <span class="token punctuation">&#123;</span>\n\tblock<span class="token punctuation">:</span> Block<span class="token punctuation">;</span>\n\tnode<span class="token punctuation">:</span> RangeBlock<span class="token punctuation">;</span>\n\tfragment<span class="token punctuation">:</span> FragmentWrapper<span class="token punctuation">;</span>\n\n\tindex_name<span class="token punctuation">:</span> Identifier<span class="token punctuation">;</span>\n\n\t<span class="token function">constructor</span><span class="token punctuation">(</span>\n\t\t<span class="token parameter">renderer<span class="token punctuation">:</span> Renderer<span class="token punctuation">,</span>\n\t\tblock<span class="token punctuation">:</span> Block<span class="token punctuation">,</span>\n\t\tparent<span class="token punctuation">:</span> Wrapper<span class="token punctuation">,</span>\n\t\tnode<span class="token punctuation">:</span> RangeBlock<span class="token punctuation">,</span>\n\t\tstrip_whitespace<span class="token punctuation">:</span> boolean<span class="token punctuation">,</span>\n\t\tnext_sibling<span class="token punctuation">:</span> Wrapper</span>\n\t<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n\t\t<span class="token keyword">super</span><span class="token punctuation">(</span>renderer<span class="token punctuation">,</span> block<span class="token punctuation">,</span> parent<span class="token punctuation">,</span> node<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">cannot_use_innerhtml</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">not_static_content</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t\t<span class="token comment">// const &#123; dependencies &#125; = node.expression;</span>\n\t\t<span class="token comment">// block.add_dependencies(dependencies);</span>\n\n\t\trenderer<span class="token punctuation">.</span><span class="token function">add_to_context</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>node<span class="token punctuation">.</span>index<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t\t<span class="token keyword">this</span><span class="token punctuation">.</span>block <span class="token operator">=</span> block<span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n\t\t\tcomment<span class="token punctuation">:</span> <span class="token function">create_debugging_comment</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>node<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>renderer<span class="token punctuation">.</span>component<span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t\t\tname<span class="token punctuation">:</span> renderer<span class="token punctuation">.</span>component<span class="token punctuation">.</span><span class="token function">get_unique_name</span><span class="token punctuation">(</span><span class="token string">"create_range_block"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t\t\ttype<span class="token punctuation">:</span> <span class="token string">"range"</span><span class="token punctuation">,</span>\n\t\t<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t\t<span class="token keyword">this</span><span class="token punctuation">.</span>index_name <span class="token operator">=</span> <span class="token punctuation">&#123;</span> type<span class="token punctuation">:</span> <span class="token string">"Identifier"</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>node<span class="token punctuation">.</span>index <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>\n\n\t\trenderer<span class="token punctuation">.</span>blocks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>block<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t\t<span class="token keyword">this</span><span class="token punctuation">.</span>fragment <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FragmentWrapper</span><span class="token punctuation">(</span>\n\t\t\trenderer<span class="token punctuation">,</span>\n\t\t\t<span class="token keyword">this</span><span class="token punctuation">.</span>block<span class="token punctuation">,</span>\n\t\t\tnode<span class="token punctuation">.</span>children<span class="token punctuation">,</span>\n\t\t\t<span class="token keyword">this</span><span class="token punctuation">,</span>\n\t\t\tstrip_whitespace<span class="token punctuation">,</span>\n\t\t\tnext_sibling\n\t\t<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">&#125;</span>\n\n\t<span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">block<span class="token punctuation">:</span> Block<span class="token punctuation">,</span> parent_node<span class="token punctuation">:</span> Identifier<span class="token punctuation">,</span> parent_nodes<span class="token punctuation">:</span> Identifier</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>fragment<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>block<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> x<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">#nodes</span><span class="token template-punctuation string">&#96;</span></span> <span class="token keyword">as</span> Identifier<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">&#125;</span>\n<span class="token punctuation">&#125;</span></code>'},p:n,d(n){n&&u(e),n&&u(m),n&&u(k),n&&u(A),n&&u(T),n&&u(_),n&&u(I),n&&u(zn),n&&u(Un)}}}function hn(n){let e,a;const s=[dn];let o={$$slots:{default:[un]},$$scope:{ctx:n}};for(let n=0;n<s.length;n+=1)o=t(o,s[n]);return e=new pn({props:o}),{c(){D(e.$$.fragment)},l(n){z(e.$$.fragment,n)},m(n,t){U(e,n,t),a=!0},p(n,[t]){const a=0&t?function(n,t){const e={},a={},s={$$scope:1};let o=n.length;for(;o--;){const c=n[o],r=t[o];if(r){for(const n in c)n in r||(a[n]=1);for(const n in r)s[n]||(e[n]=r[n],s[n]=1);n[o]=r}else for(const n in c)s[n]=1}for(const n in a)n in e||(e[n]=void 0);return e}(s,[(o=dn,"object"==typeof o&&null!==o?o:{})]):{};var o;1&t&&(a.$$scope={dirty:t,ctx:n}),e.$set(a)},i(n){a||(F(e.$$.fragment,n),a=!0)},o(n){W(e.$$.fragment,n),a=!1},d(n){G(e,n)}}}const dn={title:"Implementing {#range} in Svelte",wip:!0,slug:"implementing-feature-in-svelte",type:"blog"};class mn extends Y{constructor(n){super(),V(this,n,null,hn,c,{})}}setTimeout(()=>{new mn({target:document.querySelector("#app"),hydrate:!0});if(document.querySelector(".twitter-tweet")){const n=document.createElement("script");n.async=!0,n.src="https://platform.twitter.com/widgets.js",n.charset="utf-8",document.body.appendChild(n)}},3e3);
