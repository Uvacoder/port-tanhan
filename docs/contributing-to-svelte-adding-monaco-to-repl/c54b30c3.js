function n(){}function t(n,t){for(const a in t)n[a]=t[a];return n}function a(n){return n()}function s(){return Object.create(null)}function e(n){n.forEach(a)}function o(n){return"function"==typeof n}function c(n,t){return n!=n?t==t:n!==t||n&&"object"==typeof n||"function"==typeof n}function p(n,a,s,e){return n[1]&&e?t(s.ctx.slice(),n[1](e(a))):s.ctx}function r(n,t,a,s,e,o,c){const r=function(n,t,a,s){if(n[2]&&s){const e=n[2](s(a));if(void 0===t.dirty)return e;if("object"==typeof e){const n=[],a=Math.max(t.dirty.length,e.length);for(let s=0;s<a;s+=1)n[s]=t.dirty[s]|e[s];return n}return t.dirty|e}return t.dirty}(t,s,e,o);if(r){const e=p(t,a,s,c);n.p(e,r)}}function l(n,t){n.appendChild(t)}function i(n,t,a){n.insertBefore(t,a||null)}function u(n){n.parentNode.removeChild(n)}function h(n,t){for(let a=0;a<n.length;a+=1)n[a]&&n[a].d(t)}function d(n){return document.createElement(n)}function m(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function f(n){return document.createTextNode(n)}function k(){return f(" ")}function g(){return f("")}function v(n,t,a){null==a?n.removeAttribute(t):n.getAttribute(t)!==a&&n.setAttribute(t,a)}function b(n){return Array.from(n.childNodes)}function E(n,t,a,s){for(let s=0;s<n.length;s+=1){const e=n[s];if(e.nodeName===t){let t=0;const o=[];for(;t<e.attributes.length;){const n=e.attributes[t++];a[n.name]||o.push(n.name)}for(let n=0;n<o.length;n++)e.removeAttribute(o[n]);return n.splice(s,1)[0]}}return s?m(t):d(t)}function y(n,t){for(let a=0;a<n.length;a+=1){const s=n[a];if(3===s.nodeType)return s.data=""+t,n.splice(a,1)[0]}return f(t)}function w(n){return y(n," ")}function $(n,t){t=""+t,n.wholeText!==t&&(n.data=t)}function x(n,t){n.value=null==t?"":t}class A{constructor(n=null){this.a=n,this.e=this.n=null}m(n,t,a=null){this.e||(this.e=d(t.nodeName),this.t=t,this.h(n)),this.i(a)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let t=0;t<this.n.length;t+=1)i(this.t,this.n[t],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(u)}}let L;function T(n){L=n}function I(n){(function(){if(!L)throw new Error("Function called outside component initialization");return L})().$$.on_mount.push(n)}const M=[],N=[],S=[],j=[],P=Promise.resolve();let H=!1;function _(n){S.push(n)}let B=!1;const C=new Set;function U(){if(!B){B=!0;do{for(let n=0;n<M.length;n+=1){const t=M[n];T(t),F(t.$$)}for(M.length=0;N.length;)N.pop()();for(let n=0;n<S.length;n+=1){const t=S[n];C.has(t)||(C.add(t),t())}S.length=0}while(M.length);for(;j.length;)j.pop()();H=!1,B=!1,C.clear()}}function F(n){if(null!==n.fragment){n.update(),e(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(_)}}const O=new Set;function q(n,t){n&&n.i&&(O.delete(n),n.i(t))}function V(n,t,a,s){if(n&&n.o){if(O.has(n))return;O.add(n),(void 0).c.push(()=>{O.delete(n),s&&(a&&n.d(1),s())}),n.o(t)}}function R(n){n&&n.c()}function z(n,t){n&&n.l(t)}function J(n,t,s){const{fragment:c,on_mount:p,on_destroy:r,after_update:l}=n.$$;c&&c.m(t,s),_(()=>{const t=p.map(a).filter(o);r?r.push(...t):e(t),n.$$.on_mount=[]}),l.forEach(_)}function D(n,t){const a=n.$$;null!==a.fragment&&(e(a.on_destroy),a.fragment&&a.fragment.d(t),a.on_destroy=a.fragment=null,a.ctx=[])}function G(n,t){-1===n.$$.dirty[0]&&(M.push(n),H||(H=!0,P.then(U)),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function W(t,a,o,c,p,r,l=[-1]){const i=L;T(t);const h=a.props||{},d=t.$$={fragment:null,ctx:null,props:r,update:n,not_equal:p,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:s(),dirty:l};let m=!1;if(d.ctx=o?o(t,h,(n,a,...s)=>{const e=s.length?s[0]:a;return d.ctx&&p(d.ctx[n],d.ctx[n]=e)&&(d.bound[n]&&d.bound[n](e),m&&G(t,n)),a}):[],d.update(),m=!0,e(d.before_update),d.fragment=!!c&&c(d.ctx),a.target){if(a.hydrate){const n=b(a.target);d.fragment&&d.fragment.l(n),n.forEach(u)}else d.fragment&&d.fragment.c();a.intro&&q(t.$$.fragment),J(t,a.target,a.anchor),U()}T(i)}class Y{$destroy(){D(this,1),this.$destroy=n}$on(n,t){const a=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return a.push(t),()=>{const n=a.indexOf(t);-1!==n&&a.splice(n,1)}}$set(){}}function K(t){let a,s,e,o,c,p,r,h,g,$,x,A,L,T,I,M,N,S,j,P,H,_,B,C,U,F,O,q,V,R,z,J,D,G,W;return{c(){a=d("header"),s=d("nav"),e=d("ul"),o=d("li"),c=d("a"),p=f("Tan Li Hau"),r=k(),h=d("li"),g=d("a"),$=f("About"),x=k(),A=d("li"),L=d("a"),T=f("Writings"),I=k(),M=d("li"),N=d("a"),S=f("Talks"),j=k(),P=d("li"),H=d("a"),_=f("Notes"),B=k(),C=d("li"),U=d("a"),F=f("Newsletter"),O=k(),q=d("li"),V=d("a"),R=m("svg"),z=m("path"),J=k(),D=d("a"),G=m("svg"),W=m("path"),this.h()},l(n){a=E(n,"HEADER",{class:!0});var t=b(a);s=E(t,"NAV",{});var l=b(s);e=E(l,"UL",{class:!0});var i=b(e);o=E(i,"LI",{class:!0});var d=b(o);c=E(d,"A",{href:!0,class:!0});var m=b(c);p=y(m,"Tan Li Hau"),m.forEach(u),d.forEach(u),r=w(i),h=E(i,"LI",{class:!0});var f=b(h);g=E(f,"A",{href:!0,class:!0});var k=b(g);$=y(k,"About"),k.forEach(u),f.forEach(u),x=w(i),A=E(i,"LI",{class:!0});var v=b(A);L=E(v,"A",{href:!0,class:!0});var Y=b(L);T=y(Y,"Writings"),Y.forEach(u),v.forEach(u),I=w(i),M=E(i,"LI",{class:!0});var K=b(M);N=E(K,"A",{href:!0,class:!0});var Z=b(N);S=y(Z,"Talks"),Z.forEach(u),K.forEach(u),j=w(i),P=E(i,"LI",{class:!0});var Q=b(P);H=E(Q,"A",{href:!0,class:!0});var X=b(H);_=y(X,"Notes"),X.forEach(u),Q.forEach(u),B=w(i),C=E(i,"LI",{class:!0});var nn=b(C);U=E(nn,"A",{href:!0,class:!0});var tn=b(U);F=y(tn,"Newsletter"),tn.forEach(u),nn.forEach(u),O=w(i),q=E(i,"LI",{class:!0});var an=b(q);V=E(an,"A",{"aria-label":!0,href:!0,class:!0});var sn=b(V);R=E(sn,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var en=b(R);z=E(en,"path",{d:!0},1),b(z).forEach(u),en.forEach(u),sn.forEach(u),J=w(an),D=E(an,"A",{"aria-label":!0,href:!0,class:!0});var on=b(D);G=E(on,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var cn=b(G);W=E(cn,"path",{d:!0},1),b(W).forEach(u),cn.forEach(u),on.forEach(u),an.forEach(u),i.forEach(u),l.forEach(u),t.forEach(u),this.h()},h(){v(c,"href","/"),v(c,"class","svelte-f3e4uo"),v(o,"class","svelte-f3e4uo"),v(g,"href","/about"),v(g,"class","svelte-f3e4uo"),v(h,"class","svelte-f3e4uo"),v(L,"href","/blogs"),v(L,"class","svelte-f3e4uo"),v(A,"class","svelte-f3e4uo"),v(N,"href","/talks"),v(N,"class","svelte-f3e4uo"),v(M,"class","svelte-f3e4uo"),v(H,"href","/notes"),v(H,"class","svelte-f3e4uo"),v(P,"class","svelte-f3e4uo"),v(U,"href","/newsletter"),v(U,"class","svelte-f3e4uo"),v(C,"class","svelte-f3e4uo"),v(z,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),v(R,"viewBox","0 0 24 24"),v(R,"width","1em"),v(R,"height","1em"),v(R,"class","svelte-f3e4uo"),v(V,"aria-label","Twitter account"),v(V,"href","https://twitter.com/lihautan"),v(V,"class","svelte-f3e4uo"),v(W,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),v(G,"viewBox","0 0 24 24"),v(G,"width","1em"),v(G,"height","1em"),v(G,"class","svelte-f3e4uo"),v(D,"aria-label","Github account"),v(D,"href","https://github.com/tanhauhau"),v(D,"class","svelte-f3e4uo"),v(q,"class","social svelte-f3e4uo"),v(e,"class","svelte-f3e4uo"),v(a,"class","svelte-f3e4uo")},m(n,t){i(n,a,t),l(a,s),l(s,e),l(e,o),l(o,c),l(c,p),l(e,r),l(e,h),l(h,g),l(g,$),l(e,x),l(e,A),l(A,L),l(L,T),l(e,I),l(e,M),l(M,N),l(N,S),l(e,j),l(e,P),l(P,H),l(H,_),l(e,B),l(e,C),l(C,U),l(U,F),l(e,O),l(e,q),l(q,V),l(V,R),l(R,z),l(q,J),l(q,D),l(D,G),l(G,W)},p:n,i:n,o:n,d(n){n&&u(a)}}}class Z extends Y{constructor(n){super(),W(this,n,null,K,c,{})}}function Q(t){let a,s,e,o,c,p,r,h,m,g,$,A,L,T,I,M,N,S,j,P;return{c(){a=d("div"),s=d("h1"),e=f("Subscribe to my newsletter"),o=k(),c=d("h2"),p=f("Get the latest blog posts and project updates delivered right to your inbox"),r=k(),h=d("form"),m=d("div"),g=d("input"),$=k(),A=d("input"),T=k(),I=d("input"),M=k(),N=d("p"),S=f("Powered by Buttondown."),this.h()},l(n){a=E(n,"DIV",{class:!0});var t=b(a);s=E(t,"H1",{});var l=b(s);e=y(l,"Subscribe to my newsletter"),l.forEach(u),o=w(t),c=E(t,"H2",{class:!0});var i=b(c);p=y(i,"Get the latest blog posts and project updates delivered right to your inbox"),i.forEach(u),r=w(t),h=E(t,"FORM",{action:!0,method:!0,target:!0,onsubmit:!0,class:!0});var d=b(h);m=E(d,"DIV",{class:!0});var f=b(m);g=E(f,"INPUT",{type:!0,name:!0,id:!0,"aria-label":!0,placeholder:!0,class:!0}),$=w(f),A=E(f,"INPUT",{type:!0,value:!0,disabled:!0,class:!0}),f.forEach(u),T=w(d),I=E(d,"INPUT",{type:!0,value:!0,name:!0,class:!0}),M=w(d),N=E(d,"P",{class:!0});var k=b(N);S=y(k,"Powered by Buttondown."),k.forEach(u),d.forEach(u),t.forEach(u),this.h()},h(){v(c,"class","svelte-1k1s1co"),v(g,"type","email"),v(g,"name","email"),v(g,"id","bd-email"),v(g,"aria-label","email address"),v(g,"placeholder","youremail@example.com"),v(g,"class","svelte-1k1s1co"),v(A,"type","submit"),A.value="Subscribe",A.disabled=L=!t[0],v(A,"class","svelte-1k1s1co"),v(m,"class","form-item svelte-1k1s1co"),v(I,"type","hidden"),I.value="1",v(I,"name","embed"),v(I,"class","svelte-1k1s1co"),v(N,"class","svelte-1k1s1co"),v(h,"action","https://buttondown.email/api/emails/embed-subscribe/lihautan"),v(h,"method","post"),v(h,"target","popupwindow"),v(h,"onsubmit","window.open('https://buttondown.email/lihautan', 'popupwindow')"),v(h,"class","embeddable-buttondown-form"),v(a,"class","form svelte-1k1s1co")},m(n,u){var d,f,k,v;i(n,a,u),l(a,s),l(s,e),l(a,o),l(a,c),l(c,p),l(a,r),l(a,h),l(h,m),l(m,g),x(g,t[0]),l(m,$),l(m,A),l(h,T),l(h,I),l(h,M),l(h,N),l(N,S),j||(d=g,f="input",k=t[1],d.addEventListener(f,k,v),P=()=>d.removeEventListener(f,k,v),j=!0)},p(n,[t]){1&t&&g.value!==n[0]&&x(g,n[0]),1&t&&L!==(L=!n[0])&&(A.disabled=L)},i:n,o:n,d(n){n&&u(a),j=!1,P()}}}function X(n,t,a){let s;return[s,function(){s=this.value,a(0,s)}]}class nn extends Y{constructor(n){super(),W(this,n,X,Q,c,{})}}function tn(n){return I(()=>(setTimeout(()=>{if(window.innerWidth>1080){const n=document.createElement("script");n.async=!0,n.type="text/javascript",n.src="//cdn.carbonads.com/carbon.js?serve=CE7ITK3E&placement=lihautancom",n.id="_carbonads_js",document.body.appendChild(n)}},5e3),()=>{try{const n=document.getElementById("carbonads");n.parentNode.removeChild(n)}catch(n){}})),[]}class an extends Y{constructor(n){super(),W(this,n,tn,null,c,{})}}function sn(n,t,a){const s=n.slice();return s[6]=t[a],s}function en(n,t,a){const s=n.slice();return s[6]=t[a],s}function on(n){let t,a;return{c(){t=d("meta"),this.h()},l(n){t=E(n,"META",{name:!0,content:!0}),this.h()},h(){v(t,"name","keywords"),v(t,"content",a=n[6])},m(n,a){i(n,t,a)},p(n,s){4&s&&a!==(a=n[6])&&v(t,"content",a)},d(n){n&&u(t)}}}function cn(n){let t,a,s=n[6]+"";return{c(){t=d("span"),a=f(s),this.h()},l(n){t=E(n,"SPAN",{class:!0});var e=b(t);a=y(e,s),e.forEach(u),this.h()},h(){v(t,"class","svelte-9tqnza")},m(n,s){i(n,t,s),l(t,a)},p(n,t){4&t&&s!==(s=n[6]+"")&&$(a,s)},d(n){n&&u(t)}}}function pn(n){let t,a,s,e,o,c,m,x,L,T,I,M,N,S,j,P,H,_,B,C,U,F,O,G,W,Y,K,Q,X,tn,pn,rn,ln,un,hn,dn,mn,fn,kn,gn=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"Article",author:n[3],copyrightHolder:n[3],copyrightYear:"2020",creator:n[3],publisher:n[3],description:n[1],headline:n[0],name:n[0],inLanguage:"en"})}<\/script>`,vn=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",description:"Breadcrumbs list",name:"Breadcrumbs",itemListElement:[{"@type":"ListItem",item:{"@id":"https://lihautan.com",name:"Homepage"},position:1},{"@type":"ListItem",item:{"@id":"https%3A%2F%2Flihautan.com%2Fcontributing-to-svelte-adding-monaco-to-repl",name:n[0]},position:2}]})}<\/script>`;document.title=t=n[0]+" | Tan Li Hau";let bn=n[2],En=[];for(let t=0;t<bn.length;t+=1)En[t]=on(en(n,bn,t));O=new Z({});let yn=n[2],wn=[];for(let t=0;t<yn.length;t+=1)wn[t]=cn(sn(n,yn,t));const $n=n[5].default,xn=function(n,t,a,s){if(n){const e=p(n,t,a,s);return n[0](e)}}($n,n,n[4],null);return ln=new nn({}),hn=new an({}),{c(){a=d("meta"),s=d("meta"),e=d("meta"),o=d("meta"),c=d("meta"),m=d("meta"),x=d("meta"),L=d("meta"),T=d("meta"),I=d("meta"),M=d("meta");for(let n=0;n<En.length;n+=1)En[n].c();N=d("meta"),S=d("meta"),P=g(),_=g(),B=k(),C=d("a"),U=f("Skip to content"),F=k(),R(O.$$.fragment),G=k(),W=d("main"),Y=d("h1"),K=f(n[0]),Q=k();for(let n=0;n<wn.length;n+=1)wn[n].c();X=k(),tn=d("article"),xn&&xn.c(),pn=k(),rn=d("footer"),R(ln.$$.fragment),un=k(),R(hn.$$.fragment),dn=k(),fn=g(),this.h()},l(t){const p=function(n,t=document.body){return Array.from(t.querySelectorAll(n))}('[data-svelte="svelte-n0q11s"]',document.head);a=E(p,"META",{name:!0,content:!0}),s=E(p,"META",{name:!0,content:!0}),e=E(p,"META",{name:!0,content:!0}),o=E(p,"META",{name:!0,content:!0}),c=E(p,"META",{name:!0,content:!0}),m=E(p,"META",{name:!0,content:!0}),x=E(p,"META",{name:!0,content:!0}),L=E(p,"META",{name:!0,content:!0}),T=E(p,"META",{name:!0,content:!0}),I=E(p,"META",{name:!0,content:!0}),M=E(p,"META",{name:!0,content:!0});for(let n=0;n<En.length;n+=1)En[n].l(p);N=E(p,"META",{itemprop:!0,content:!0}),S=E(p,"META",{itemprop:!0,content:!0}),P=g(),_=g(),p.forEach(u),B=w(t),C=E(t,"A",{href:!0,class:!0});var r=b(C);U=y(r,"Skip to content"),r.forEach(u),F=w(t),z(O.$$.fragment,t),G=w(t),W=E(t,"MAIN",{id:!0,class:!0});var l=b(W);Y=E(l,"H1",{});var i=b(Y);K=y(i,n[0]),i.forEach(u),Q=w(l);for(let n=0;n<wn.length;n+=1)wn[n].l(l);X=w(l),tn=E(l,"ARTICLE",{});var h=b(tn);xn&&xn.l(h),h.forEach(u),l.forEach(u),pn=w(t),rn=E(t,"FOOTER",{class:!0});var d=b(rn);z(ln.$$.fragment,d),un=w(d),z(hn.$$.fragment,d),d.forEach(u),dn=w(t),fn=g(),this.h()},h(){v(a,"name","description"),v(a,"content",n[1]),v(s,"name","image"),v(s,"content",null),v(e,"name","og:image"),v(e,"content",null),v(o,"name","og:title"),v(o,"content",n[0]),v(c,"name","og:description"),v(c,"content",n[1]),v(m,"name","og:type"),v(m,"content","website"),v(x,"name","twitter:card"),v(x,"content","summary_large_image"),v(L,"name","twitter:creator"),v(L,"content","@lihautan"),v(T,"name","twitter:title"),v(T,"content",n[0]),v(I,"name","twitter:description"),v(I,"content",n[1]),v(M,"name","twitter:image"),v(M,"content",null),v(N,"itemprop","url"),v(N,"content","https%3A%2F%2Flihautan.com%2Fcontributing-to-svelte-adding-monaco-to-repl"),v(S,"itemprop","image"),v(S,"content",null),j=new A(P),H=new A(_),v(C,"href","#content"),v(C,"class","skip svelte-9tqnza"),v(W,"id","content"),v(W,"class","blog svelte-9tqnza"),v(rn,"class","svelte-9tqnza"),mn=new A(fn)},m(n,t){l(document.head,a),l(document.head,s),l(document.head,e),l(document.head,o),l(document.head,c),l(document.head,m),l(document.head,x),l(document.head,L),l(document.head,T),l(document.head,I),l(document.head,M);for(let n=0;n<En.length;n+=1)En[n].m(document.head,null);l(document.head,N),l(document.head,S),j.m(gn,document.head),l(document.head,P),H.m(vn,document.head),l(document.head,_),i(n,B,t),i(n,C,t),l(C,U),i(n,F,t),J(O,n,t),i(n,G,t),i(n,W,t),l(W,Y),l(Y,K),l(W,Q);for(let n=0;n<wn.length;n+=1)wn[n].m(W,null);l(W,X),l(W,tn),xn&&xn.m(tn,null),i(n,pn,t),i(n,rn,t),J(ln,rn,null),l(rn,un),J(hn,rn,null),i(n,dn,t),mn.m('<script async defer src="https://platform.twitter.com/widgets.js" charset="utf-8"><\/script>',n,t),i(n,fn,t),kn=!0},p(n,[s]){if((!kn||1&s)&&t!==(t=n[0]+" | Tan Li Hau")&&(document.title=t),(!kn||2&s)&&v(a,"content",n[1]),(!kn||1&s)&&v(o,"content",n[0]),(!kn||2&s)&&v(c,"content",n[1]),(!kn||1&s)&&v(T,"content",n[0]),(!kn||2&s)&&v(I,"content",n[1]),4&s){let t;for(bn=n[2],t=0;t<bn.length;t+=1){const a=en(n,bn,t);En[t]?En[t].p(a,s):(En[t]=on(a),En[t].c(),En[t].m(N.parentNode,N))}for(;t<En.length;t+=1)En[t].d(1);En.length=bn.length}if((!kn||3&s)&&gn!==(gn=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"Article",author:n[3],copyrightHolder:n[3],copyrightYear:"2020",creator:n[3],publisher:n[3],description:n[1],headline:n[0],name:n[0],inLanguage:"en"})}<\/script>`)&&j.p(gn),(!kn||1&s)&&vn!==(vn=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",description:"Breadcrumbs list",name:"Breadcrumbs",itemListElement:[{"@type":"ListItem",item:{"@id":"https://lihautan.com",name:"Homepage"},position:1},{"@type":"ListItem",item:{"@id":"https%3A%2F%2Flihautan.com%2Fcontributing-to-svelte-adding-monaco-to-repl",name:n[0]},position:2}]})}<\/script>`)&&H.p(vn),(!kn||1&s)&&$(K,n[0]),4&s){let t;for(yn=n[2],t=0;t<yn.length;t+=1){const a=sn(n,yn,t);wn[t]?wn[t].p(a,s):(wn[t]=cn(a),wn[t].c(),wn[t].m(W,X))}for(;t<wn.length;t+=1)wn[t].d(1);wn.length=yn.length}xn&&xn.p&&16&s&&r(xn,$n,n,n[4],s,null,null)},i(n){kn||(q(O.$$.fragment,n),q(xn,n),q(ln.$$.fragment,n),q(hn.$$.fragment,n),kn=!0)},o(n){V(O.$$.fragment,n),V(xn,n),V(ln.$$.fragment,n),V(hn.$$.fragment,n),kn=!1},d(n){u(a),u(s),u(e),u(o),u(c),u(m),u(x),u(L),u(T),u(I),u(M),h(En,n),u(N),u(S),u(P),n&&j.d(),u(_),n&&H.d(),n&&u(B),n&&u(C),n&&u(F),D(O,n),n&&u(G),n&&u(W),h(wn,n),xn&&xn.d(n),n&&u(pn),n&&u(rn),D(ln),D(hn),n&&u(dn),n&&u(fn),n&&mn.d()}}}function rn(n,t,a){let{title:s=""}=t,{description:e=""}=t,{tags:o=[]}=t;const c={"@type":"Person",name:"Tan Li Hau"};let{$$slots:p={},$$scope:r}=t;return n.$set=n=>{"title"in n&&a(0,s=n.title),"description"in n&&a(1,e=n.description),"tags"in n&&a(2,o=n.tags),"$$scope"in n&&a(4,r=n.$$scope)},[s,e,o,c,r,p]}class ln extends Y{constructor(n){super(),W(this,n,rn,pn,c,{title:0,description:1,tags:2})}}function un(t){let a,s,e,o,c,p,r,h,m,g,$,x,A,L,T,I,M,N,S,j,P,H,_,B,C,U,F,O,q,V,R,z,J,D,G,W,Y,K,Z,Q,X,nn,tn,an,sn,en,on,cn,pn,rn,ln,un,hn,dn,mn,fn,kn,gn,vn,bn,En,yn,wn,$n,xn,An,Ln,Tn,In,Mn,Nn,Sn,jn,Pn,Hn,_n,Bn,Cn,Un,Fn,On,qn,Vn,Rn,zn,Jn,Dn,Gn,Wn,Yn,Kn,Zn,Qn,Xn,nt,tt,at,st,et,ot,ct,pt,rt,lt,it,ut,ht,dt,mt,ft,kt,gt,vt,bt,Et;return{c(){a=d("section"),s=d("ul"),e=d("li"),o=d("a"),c=f("monaco samples:"),p=d("ul"),r=d("li"),h=d("a"),m=f("syntax highlighting"),g=k(),$=d("section"),x=d("h1"),A=d("a"),L=f("monaco samples:"),T=k(),I=d("p"),M=d("a"),N=f("https://github.com/microsoft/monaco-editor-samples/blob/master/browser-amd-monarch/index.html"),S=k(),j=d("p"),P=f("tab + history undo buffer"),H=k(),_=d("ul"),B=d("li"),C=f("link to issues that was fixed previously"),U=k(),F=d("p"),O=f("get inspiration from the playground"),q=k(),V=d("ul"),R=d("li"),z=f("it has 3 tabs\n"),J=d("a"),D=f("https://microsoft.github.io/monaco-editor/playground.html"),G=k(),W=d("pre"),Y=k(),K=d("pre"),Z=k(),Q=d("pre"),X=k(),nn=d("ul"),tn=d("li"),an=f("how to add svlete language server into it"),sn=k(),en=d("li"),on=f("markdown"),cn=k(),pn=d("p"),rn=f("** store as global variable"),ln=k(),un=d("ul"),hn=d("li"),dn=d("p"),mn=f("window.xxx"),fn=k(),kn=d("li"),gn=d("p"),vn=f('right-click, "store as global variable"\nquickly test out apis, without having to wait for reload'),bn=k(),En=d("li"),yn=d("p"),wn=f("allow switching tabs\ncreate new model on new tab / init\nstore the state when switching tabs\nrestore state upon selecting tabs"),$n=k(),xn=d("li"),An=d("p"),Ln=f("listen to changes"),Tn=k(),In=d("pre"),Mn=k(),Nn=d("section"),Sn=d("h2"),jn=d("a"),Pn=f("syntax highlighting"),Hn=k(),_n=d("p"),Bn=f("this is rough man"),Cn=k(),Un=d("ul"),Fn=d("li"),On=d("p"),qn=d("a"),Vn=f("https://gearset.com/blog/writing-an-open-source-apex-syntax-highlighter-for-monaco-editor"),Rn=k(),zn=d("ul"),Jn=d("li"),Dn=f("vs code vs monaco"),Gn=k(),Wn=d("li"),Yn=f("text mate grammars, language servers, monarch grammars"),Kn=k(),Zn=d("li"),Qn=f("native library"),Xn=k(),nt=d("li"),tt=d("p"),at=d("a"),st=f("https://github.com/microsoft/monaco-editor/issues/171"),et=k(),ot=d("li"),ct=d("p"),pt=f("implement a monaco language, shouldn't be hard? 🤷‍♂️"),rt=k(),lt=d("p"),it=f("playground "),ut=d("a"),ht=f("https://microsoft.github.io/monaco-editor/monarch.html"),dt=k(),mt=d("ul"),ft=d("li"),kt=f("proxy based language server"),gt=d("ul"),vt=d("li"),bt=d("a"),Et=f("https://medium.com/dscddu/language-server-protocol-adding-support-for-multiple-language-servers-to-monaco-editor-a3c35e42a98d"),this.h()},l(n){a=E(n,"SECTION",{});var t=b(a);s=E(t,"UL",{class:!0,id:!0,role:!0,"aria-label":!0}),b(s).forEach(u),e=E(t,"LI",{});var l=b(e);o=E(l,"A",{href:!0});var i=b(o);c=y(i,"monaco samples:"),i.forEach(u),l.forEach(u),p=E(t,"UL",{});var d=b(p);r=E(d,"LI",{});var f=b(r);h=E(f,"A",{href:!0});var k=b(h);m=y(k,"syntax highlighting"),k.forEach(u),f.forEach(u),d.forEach(u),t.forEach(u),g=w(n),$=E(n,"SECTION",{});var v=b($);x=E(v,"H1",{});var yt=b(x);A=E(yt,"A",{href:!0,id:!0});var wt=b(A);L=y(wt,"monaco samples:"),wt.forEach(u),yt.forEach(u),T=w(v),I=E(v,"P",{});var $t=b(I);M=E($t,"A",{href:!0,rel:!0});var xt=b(M);N=y(xt,"https://github.com/microsoft/monaco-editor-samples/blob/master/browser-amd-monarch/index.html"),xt.forEach(u),$t.forEach(u),S=w(v),j=E(v,"P",{});var At=b(j);P=y(At,"tab + history undo buffer"),At.forEach(u),H=w(v),_=E(v,"UL",{});var Lt=b(_);B=E(Lt,"LI",{});var Tt=b(B);C=y(Tt,"link to issues that was fixed previously"),Tt.forEach(u),Lt.forEach(u),U=w(v),F=E(v,"P",{});var It=b(F);O=y(It,"get inspiration from the playground"),It.forEach(u),q=w(v),V=E(v,"UL",{});var Mt=b(V);R=E(Mt,"LI",{});var Nt=b(R);z=y(Nt,"it has 3 tabs\n"),J=E(Nt,"A",{href:!0,rel:!0});var St=b(J);D=y(St,"https://microsoft.github.io/monaco-editor/playground.html"),St.forEach(u),Nt.forEach(u),Mt.forEach(u),G=w(v),W=E(v,"PRE",{class:!0}),b(W).forEach(u),Y=w(v),K=E(v,"PRE",{class:!0}),b(K).forEach(u),Z=w(v),Q=E(v,"PRE",{class:!0}),b(Q).forEach(u),X=w(v),nn=E(v,"UL",{});var jt=b(nn);tn=E(jt,"LI",{});var Pt=b(tn);an=y(Pt,"how to add svlete language server into it"),Pt.forEach(u),sn=w(jt),en=E(jt,"LI",{});var Ht=b(en);on=y(Ht,"markdown"),Ht.forEach(u),jt.forEach(u),cn=w(v),pn=E(v,"P",{});var _t=b(pn);rn=y(_t,"** store as global variable"),_t.forEach(u),ln=w(v),un=E(v,"UL",{});var Bt=b(un);hn=E(Bt,"LI",{});var Ct=b(hn);dn=E(Ct,"P",{});var Ut=b(dn);mn=y(Ut,"window.xxx"),Ut.forEach(u),Ct.forEach(u),fn=w(Bt),kn=E(Bt,"LI",{});var Ft=b(kn);gn=E(Ft,"P",{});var Ot=b(gn);vn=y(Ot,'right-click, "store as global variable"\nquickly test out apis, without having to wait for reload'),Ot.forEach(u),Ft.forEach(u),bn=w(Bt),En=E(Bt,"LI",{});var qt=b(En);yn=E(qt,"P",{});var Vt=b(yn);wn=y(Vt,"allow switching tabs\ncreate new model on new tab / init\nstore the state when switching tabs\nrestore state upon selecting tabs"),Vt.forEach(u),qt.forEach(u),$n=w(Bt),xn=E(Bt,"LI",{});var Rt=b(xn);An=E(Rt,"P",{});var zt=b(An);Ln=y(zt,"listen to changes"),zt.forEach(u),Rt.forEach(u),Bt.forEach(u),Tn=w(v),In=E(v,"PRE",{class:!0}),b(In).forEach(u),v.forEach(u),Mn=w(n),Nn=E(n,"SECTION",{});var Jt=b(Nn);Sn=E(Jt,"H2",{});var Dt=b(Sn);jn=E(Dt,"A",{href:!0,id:!0});var Gt=b(jn);Pn=y(Gt,"syntax highlighting"),Gt.forEach(u),Dt.forEach(u),Hn=w(Jt),_n=E(Jt,"P",{});var Wt=b(_n);Bn=y(Wt,"this is rough man"),Wt.forEach(u),Cn=w(Jt),Un=E(Jt,"UL",{});var Yt=b(Un);Fn=E(Yt,"LI",{});var Kt=b(Fn);On=E(Kt,"P",{});var Zt=b(On);qn=E(Zt,"A",{href:!0,rel:!0});var Qt=b(qn);Vn=y(Qt,"https://gearset.com/blog/writing-an-open-source-apex-syntax-highlighter-for-monaco-editor"),Qt.forEach(u),Zt.forEach(u),Rn=w(Kt),zn=E(Kt,"UL",{});var Xt=b(zn);Jn=E(Xt,"LI",{});var na=b(Jn);Dn=y(na,"vs code vs monaco"),na.forEach(u),Gn=w(Xt),Wn=E(Xt,"LI",{});var ta=b(Wn);Yn=y(ta,"text mate grammars, language servers, monarch grammars"),ta.forEach(u),Kn=w(Xt),Zn=E(Xt,"LI",{});var aa=b(Zn);Qn=y(aa,"native library"),aa.forEach(u),Xt.forEach(u),Kt.forEach(u),Xn=w(Yt),nt=E(Yt,"LI",{});var sa=b(nt);tt=E(sa,"P",{});var ea=b(tt);at=E(ea,"A",{href:!0,rel:!0});var oa=b(at);st=y(oa,"https://github.com/microsoft/monaco-editor/issues/171"),oa.forEach(u),ea.forEach(u),sa.forEach(u),et=w(Yt),ot=E(Yt,"LI",{});var ca=b(ot);ct=E(ca,"P",{});var pa=b(ct);pt=y(pa,"implement a monaco language, shouldn't be hard? 🤷‍♂️"),pa.forEach(u),ca.forEach(u),Yt.forEach(u),rt=w(Jt),lt=E(Jt,"P",{});var ra=b(lt);it=y(ra,"playground "),ut=E(ra,"A",{href:!0,rel:!0});var la=b(ut);ht=y(la,"https://microsoft.github.io/monaco-editor/monarch.html"),la.forEach(u),ra.forEach(u),dt=w(Jt),mt=E(Jt,"UL",{});var ia=b(mt);ft=E(ia,"LI",{});var ua=b(ft);kt=y(ua,"proxy based language server"),gt=E(ua,"UL",{});var ha=b(gt);vt=E(ha,"LI",{});var da=b(vt);bt=E(da,"A",{href:!0,rel:!0});var ma=b(bt);Et=y(ma,"https://medium.com/dscddu/language-server-protocol-adding-support-for-multiple-language-servers-to-monaco-editor-a3c35e42a98d"),ma.forEach(u),da.forEach(u),ha.forEach(u),ua.forEach(u),ia.forEach(u),Jt.forEach(u),this.h()},h(){v(s,"class","sitemap"),v(s,"id","sitemap"),v(s,"role","navigation"),v(s,"aria-label","Table of Contents"),v(o,"href","#monaco-samples"),v(h,"href","#syntax-highlighting"),v(A,"href","#monaco-samples"),v(A,"id","monaco-samples"),v(M,"href","https://github.com/microsoft/monaco-editor-samples/blob/master/browser-amd-monarch/index.html"),v(M,"rel","nofollow"),v(J,"href","https://microsoft.github.io/monaco-editor/playground.html"),v(J,"rel","nofollow"),v(W,"class","language-js"),v(K,"class","language-js"),v(Q,"class","language-js"),v(In,"class","language-js"),v(jn,"href","#syntax-highlighting"),v(jn,"id","syntax-highlighting"),v(qn,"href","https://gearset.com/blog/writing-an-open-source-apex-syntax-highlighter-for-monaco-editor"),v(qn,"rel","nofollow"),v(at,"href","https://github.com/microsoft/monaco-editor/issues/171"),v(at,"rel","nofollow"),v(ut,"href","https://microsoft.github.io/monaco-editor/monarch.html"),v(ut,"rel","nofollow"),v(bt,"href","https://medium.com/dscddu/language-server-protocol-adding-support-for-multiple-language-servers-to-monaco-editor-a3c35e42a98d"),v(bt,"rel","nofollow")},m(n,t){i(n,a,t),l(a,s),l(a,e),l(e,o),l(o,c),l(a,p),l(p,r),l(r,h),l(h,m),i(n,g,t),i(n,$,t),l($,x),l(x,A),l(A,L),l($,T),l($,I),l(I,M),l(M,N),l($,S),l($,j),l(j,P),l($,H),l($,_),l(_,B),l(B,C),l($,U),l($,F),l(F,O),l($,q),l($,V),l(V,R),l(R,z),l(R,J),l(J,D),l($,G),l($,W),W.innerHTML='<code class="language-js"><span class="token keyword">function</span> <span class="token function">changeTab</span><span class="token punctuation">(</span><span class="token parameter">selectedTabNode<span class="token punctuation">,</span> desiredModelId</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> tabArea<span class="token punctuation">.</span>childNodes<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    <span class="token keyword">var</span> child <span class="token operator">=</span> tabArea<span class="token punctuation">.</span>childNodes<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex">/tab/</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span>className<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n      child<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">\'tab\'</span><span class="token punctuation">;</span>\n    <span class="token punctuation">&#125;</span>\n  <span class="token punctuation">&#125;</span>\n  selectedTabNode<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">\'tab active\'</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">var</span> currentState <span class="token operator">=</span> editor<span class="token punctuation">.</span><span class="token function">saveViewState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">var</span> currentModel <span class="token operator">=</span> editor<span class="token punctuation">.</span><span class="token function">getModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>currentModel <span class="token operator">===</span> data<span class="token punctuation">.</span>js<span class="token punctuation">.</span>model<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    data<span class="token punctuation">.</span>js<span class="token punctuation">.</span>state <span class="token operator">=</span> currentState<span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>currentModel <span class="token operator">===</span> data<span class="token punctuation">.</span>css<span class="token punctuation">.</span>model<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    data<span class="token punctuation">.</span>css<span class="token punctuation">.</span>state <span class="token operator">=</span> currentState<span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>currentModel <span class="token operator">===</span> data<span class="token punctuation">.</span>html<span class="token punctuation">.</span>model<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    data<span class="token punctuation">.</span>html<span class="token punctuation">.</span>state <span class="token operator">=</span> currentState<span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span>\n\n  editor<span class="token punctuation">.</span><span class="token function">setModel</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>desiredModelId<span class="token punctuation">]</span><span class="token punctuation">.</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  editor<span class="token punctuation">.</span><span class="token function">restoreViewState</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>desiredModelId<span class="token punctuation">]</span><span class="token punctuation">.</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  editor<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span></code>',l($,Y),l($,K),K.innerHTML='<code class="language-js"><span class="token function">loadSample</span><span class="token punctuation">(</span>sampleId<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> sample</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'Sample not found! \'</span> <span class="token operator">+</span> err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span><span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>myToken <span class="token operator">!==</span> currentToken<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    <span class="token keyword">return</span><span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span>\n  data<span class="token punctuation">.</span>js<span class="token punctuation">.</span>model<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span>sample<span class="token punctuation">.</span>js<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  data<span class="token punctuation">.</span>html<span class="token punctuation">.</span>model<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span>sample<span class="token punctuation">.</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  data<span class="token punctuation">.</span>css<span class="token punctuation">.</span>model<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span>sample<span class="token punctuation">.</span>css<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  editor<span class="token punctuation">.</span><span class="token function">setScrollTop</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>',l($,Z),l($,Q),Q.innerHTML='<code class="language-js">\n\t\tdata<span class="token punctuation">.</span>js<span class="token punctuation">.</span>model <span class="token operator">=</span> monaco<span class="token punctuation">.</span>editor<span class="token punctuation">.</span><span class="token function">createModel</span><span class="token punctuation">(</span><span class="token string">\'console.log("hi")\'</span><span class="token punctuation">,</span> <span class="token string">\'javascript\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\tdata<span class="token punctuation">.</span>css<span class="token punctuation">.</span>model <span class="token operator">=</span> monaco<span class="token punctuation">.</span>editor<span class="token punctuation">.</span><span class="token function">createModel</span><span class="token punctuation">(</span><span class="token string">\'css\'</span><span class="token punctuation">,</span> <span class="token string">\'css\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\tdata<span class="token punctuation">.</span>html<span class="token punctuation">.</span>model <span class="token operator">=</span> monaco<span class="token punctuation">.</span>editor<span class="token punctuation">.</span><span class="token function">createModel</span><span class="token punctuation">(</span><span class="token string">\'html\'</span><span class="token punctuation">,</span> <span class="token string">\'html\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t\teditor <span class="token operator">=</span> monaco<span class="token punctuation">.</span>editor<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>editorContainer<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>\n\t\t\tmodel<span class="token punctuation">:</span> data<span class="token punctuation">.</span>js<span class="token punctuation">.</span>model<span class="token punctuation">,</span>\n\t\t\tminimap<span class="token punctuation">:</span> <span class="token punctuation">&#123;</span>\n\t\t\t\tenabled<span class="token punctuation">:</span> <span class="token boolean">false</span>\n\t\t\t<span class="token punctuation">&#125;</span>\n\t\t<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>',l($,X),l($,nn),l(nn,tn),l(tn,an),l(nn,sn),l(nn,en),l(en,on),l($,cn),l($,pn),l(pn,rn),l($,ln),l($,un),l(un,hn),l(hn,dn),l(dn,mn),l(un,fn),l(un,kn),l(kn,gn),l(gn,vn),l(un,bn),l(un,En),l(En,yn),l(yn,wn),l(un,$n),l(un,xn),l(xn,An),l(An,Ln),l($,Tn),l($,In),In.innerHTML='<code class="language-js">editor<span class="token punctuation">.</span>onDidChangeModelContent</code>',i(n,Mn,t),i(n,Nn,t),l(Nn,Sn),l(Sn,jn),l(jn,Pn),l(Nn,Hn),l(Nn,_n),l(_n,Bn),l(Nn,Cn),l(Nn,Un),l(Un,Fn),l(Fn,On),l(On,qn),l(qn,Vn),l(Fn,Rn),l(Fn,zn),l(zn,Jn),l(Jn,Dn),l(zn,Gn),l(zn,Wn),l(Wn,Yn),l(zn,Kn),l(zn,Zn),l(Zn,Qn),l(Un,Xn),l(Un,nt),l(nt,tt),l(tt,at),l(at,st),l(Un,et),l(Un,ot),l(ot,ct),l(ct,pt),l(Nn,rt),l(Nn,lt),l(lt,it),l(lt,ut),l(ut,ht),l(Nn,dt),l(Nn,mt),l(mt,ft),l(ft,kt),l(ft,gt),l(gt,vt),l(vt,bt),l(bt,Et)},p:n,d(n){n&&u(a),n&&u(g),n&&u($),n&&u(Mn),n&&u(Nn)}}}function hn(n){let a,s;const e=[dn];let o={$$slots:{default:[un]},$$scope:{ctx:n}};for(let n=0;n<e.length;n+=1)o=t(o,e[n]);return a=new ln({props:o}),{c(){R(a.$$.fragment)},l(n){z(a.$$.fragment,n)},m(n,t){J(a,n,t),s=!0},p(n,[t]){const s=0&t?function(n,t){const a={},s={},e={$$scope:1};let o=n.length;for(;o--;){const c=n[o],p=t[o];if(p){for(const n in c)n in p||(s[n]=1);for(const n in p)e[n]||(a[n]=p[n],e[n]=1);n[o]=p}else for(const n in c)e[n]=1}for(const n in s)n in a||(a[n]=void 0);return a}(e,[(o=dn,"object"==typeof o&&null!==o?o:{})]):{};var o;1&t&&(s.$$scope={dirty:t,ctx:n}),a.$set(s)},i(n){s||(q(a.$$.fragment,n),s=!0)},o(n){V(a.$$.fragment,n),s=!1},d(n){D(a,n)}}}const dn={title:"adding monaco to the svelte repl",date:"2020-03-22T08:00:00Z",tags:["Svelte","JavaScript"],wip:!0,slug:"contributing-to-svelte-adding-monaco-to-repl",type:"blog"};class mn extends Y{constructor(n){super(),W(this,n,null,hn,c,{})}}setTimeout(()=>{new mn({target:document.querySelector("#app"),hydrate:!0})},3e3);
