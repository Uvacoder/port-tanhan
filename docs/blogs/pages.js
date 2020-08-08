function e(){}function t(e){return e()}function a(){return Object.create(null)}function o(e){e.forEach(t)}function r(e){return"function"==typeof e}function n(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(e,t){e.appendChild(t)}function i(e,t,a){e.insertBefore(t,a||null)}function l(e){e.parentNode.removeChild(e)}function c(e){return document.createElement(e)}function d(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function u(e){return document.createTextNode(e)}function g(){return u(" ")}function p(e,t,a){null==a?e.removeAttribute(t):e.getAttribute(t)!==a&&e.setAttribute(t,a)}function h(e){return Array.from(e.childNodes)}function f(e,t,a,o){for(let o=0;o<e.length;o+=1){const r=e[o];if(r.nodeName===t){let t=0;const n=[];for(;t<r.attributes.length;){const e=r.attributes[t++];a[e.name]||n.push(e.name)}for(let e=0;e<n.length;e++)r.removeAttribute(n[e]);return e.splice(o,1)[0]}}return o?d(t):c(t)}function m(e,t){for(let a=0;a<e.length;a+=1){const o=e[a];if(3===o.nodeType)return o.data=""+t,e.splice(a,1)[0]}return u(t)}function b(e){return m(e," ")}function y(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let v;function w(e){v=e}const S=[],T=[],k=[],x=[],Z=Promise.resolve();let E=!1;function I(e){k.push(e)}let A=!1;const $=new Set;function J(){if(!A){A=!0;do{for(let e=0;e<S.length;e+=1){const t=S[e];w(t),j(t.$$)}for(S.length=0;T.length;)T.pop()();for(let e=0;e<k.length;e+=1){const t=k[e];$.has(t)||($.add(t),t())}k.length=0}while(S.length);for(;x.length;)x.pop()();E=!1,A=!1,$.clear()}}function j(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(I)}}const C=new Set;function H(e,t){e&&e.i&&(C.delete(e),e.i(t))}function L(e,t){e.d(1),t.delete(e.key)}function N(e,a,n){const{fragment:s,on_mount:i,on_destroy:l,after_update:c}=e.$$;s&&s.m(a,n),I(()=>{const a=i.map(t).filter(r);l?l.push(...a):o(a),e.$$.on_mount=[]}),c.forEach(I)}function P(e,t){const a=e.$$;null!==a.fragment&&(o(a.on_destroy),a.fragment&&a.fragment.d(t),a.on_destroy=a.fragment=null,a.ctx=[])}function W(e,t){-1===e.$$.dirty[0]&&(S.push(e),E||(E=!0,Z.then(J)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function _(t,r,n,s,i,c,d=[-1]){const u=v;w(t);const g=r.props||{},p=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:a(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:a(),dirty:d};let f=!1;if(p.ctx=n?n(t,g,(e,a,...o)=>{const r=o.length?o[0]:a;return p.ctx&&i(p.ctx[e],p.ctx[e]=r)&&(p.bound[e]&&p.bound[e](r),f&&W(t,e)),a}):[],p.update(),f=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),r.target){if(r.hydrate){const e=h(r.target);p.fragment&&p.fragment.l(e),e.forEach(l)}else p.fragment&&p.fragment.c();r.intro&&H(t.$$.fragment),N(t,r.target,r.anchor),J()}w(u)}class B{$destroy(){P(this,1),this.$destroy=e}$on(e,t){const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(t),()=>{const e=a.indexOf(t);-1!==e&&a.splice(e,1)}}$set(){}}function R(t){let a,o,r,n,y,v,w,S,T,k,x,Z,E,I,A,$,J,j,C,H,L,N,P,W,_,B,R,M,q,U,D,O,F,z,G;return{c(){a=c("header"),o=c("nav"),r=c("ul"),n=c("li"),y=c("a"),v=u("Tan Li Hau"),w=g(),S=c("li"),T=c("a"),k=u("About"),x=g(),Z=c("li"),E=c("a"),I=u("Writings"),A=g(),$=c("li"),J=c("a"),j=u("Talks"),C=g(),H=c("li"),L=c("a"),N=u("Notes"),P=g(),W=c("li"),_=c("a"),B=u("Newsletter"),R=g(),M=c("li"),q=c("a"),U=d("svg"),D=d("path"),O=g(),F=c("a"),z=d("svg"),G=d("path"),this.h()},l(e){a=f(e,"HEADER",{class:!0});var t=h(a);o=f(t,"NAV",{});var s=h(o);r=f(s,"UL",{class:!0});var i=h(r);n=f(i,"LI",{class:!0});var c=h(n);y=f(c,"A",{href:!0,class:!0});var d=h(y);v=m(d,"Tan Li Hau"),d.forEach(l),c.forEach(l),w=b(i),S=f(i,"LI",{class:!0});var u=h(S);T=f(u,"A",{href:!0,class:!0});var g=h(T);k=m(g,"About"),g.forEach(l),u.forEach(l),x=b(i),Z=f(i,"LI",{class:!0});var p=h(Z);E=f(p,"A",{href:!0,class:!0});var V=h(E);I=m(V,"Writings"),V.forEach(l),p.forEach(l),A=b(i),$=f(i,"LI",{class:!0});var K=h($);J=f(K,"A",{href:!0,class:!0});var Q=h(J);j=m(Q,"Talks"),Q.forEach(l),K.forEach(l),C=b(i),H=f(i,"LI",{class:!0});var X=h(H);L=f(X,"A",{href:!0,class:!0});var Y=h(L);N=m(Y,"Notes"),Y.forEach(l),X.forEach(l),P=b(i),W=f(i,"LI",{class:!0});var ee=h(W);_=f(ee,"A",{href:!0,class:!0});var te=h(_);B=m(te,"Newsletter"),te.forEach(l),ee.forEach(l),R=b(i),M=f(i,"LI",{class:!0});var ae=h(M);q=f(ae,"A",{"aria-label":!0,href:!0,class:!0});var oe=h(q);U=f(oe,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var re=h(U);D=f(re,"path",{d:!0},1),h(D).forEach(l),re.forEach(l),oe.forEach(l),O=b(ae),F=f(ae,"A",{"aria-label":!0,href:!0,class:!0});var ne=h(F);z=f(ne,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var se=h(z);G=f(se,"path",{d:!0},1),h(G).forEach(l),se.forEach(l),ne.forEach(l),ae.forEach(l),i.forEach(l),s.forEach(l),t.forEach(l),this.h()},h(){p(y,"href","/"),p(y,"class","svelte-f3e4uo"),p(n,"class","svelte-f3e4uo"),p(T,"href","/about"),p(T,"class","svelte-f3e4uo"),p(S,"class","svelte-f3e4uo"),p(E,"href","/blogs"),p(E,"class","svelte-f3e4uo"),p(Z,"class","svelte-f3e4uo"),p(J,"href","/talks"),p(J,"class","svelte-f3e4uo"),p($,"class","svelte-f3e4uo"),p(L,"href","/notes"),p(L,"class","svelte-f3e4uo"),p(H,"class","svelte-f3e4uo"),p(_,"href","/newsletter"),p(_,"class","svelte-f3e4uo"),p(W,"class","svelte-f3e4uo"),p(D,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),p(U,"viewBox","0 0 24 24"),p(U,"width","1em"),p(U,"height","1em"),p(U,"class","svelte-f3e4uo"),p(q,"aria-label","Twitter account"),p(q,"href","https://twitter.com/lihautan"),p(q,"class","svelte-f3e4uo"),p(G,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),p(z,"viewBox","0 0 24 24"),p(z,"width","1em"),p(z,"height","1em"),p(z,"class","svelte-f3e4uo"),p(F,"aria-label","Github account"),p(F,"href","https://github.com/tanhauhau"),p(F,"class","svelte-f3e4uo"),p(M,"class","social svelte-f3e4uo"),p(r,"class","svelte-f3e4uo"),p(a,"class","svelte-f3e4uo")},m(e,t){i(e,a,t),s(a,o),s(o,r),s(r,n),s(n,y),s(y,v),s(r,w),s(r,S),s(S,T),s(T,k),s(r,x),s(r,Z),s(Z,E),s(E,I),s(r,A),s(r,$),s($,J),s(J,j),s(r,C),s(r,H),s(H,L),s(L,N),s(r,P),s(r,W),s(W,_),s(_,B),s(r,R),s(r,M),s(M,q),s(q,U),s(U,D),s(M,O),s(M,F),s(F,z),s(z,G)},p:e,i:e,o:e,d(e){e&&l(a)}}}class M extends B{constructor(e){super(),_(this,e,null,R,n,{})}}function q(e,t,a){const o=e.slice();return o[7]=t[a],o}function U(e,t,a){const o=e.slice();return o[1]=(void 0!==t[a].metadata?t[a].metadata:{}).title,o[2]=void 0!==(void 0!==t[a].metadata?t[a].metadata:{}).description?(void 0!==t[a].metadata?t[a].metadata:{}).description:"",o[3]=(void 0!==t[a].metadata?t[a].metadata:{}).tags,o[4]=t[a].slug,o}function D(e){let t,a=e[3],o=[];for(let t=0;t<a.length;t+=1)o[t]=O(q(e,a,t));return{c(){t=c("p");for(let e=0;e<o.length;e+=1)o[e].c()},l(e){t=f(e,"P",{});var a=h(t);for(let e=0;e<o.length;e+=1)o[e].l(a);a.forEach(l)},m(e,a){i(e,t,a);for(let e=0;e<o.length;e+=1)o[e].m(t,null)},p(e,r){if(1&r){let n;for(a=e[3],n=0;n<a.length;n+=1){const s=q(e,a,n);o[n]?o[n].p(s,r):(o[n]=O(s),o[n].c(),o[n].m(t,null))}for(;n<o.length;n+=1)o[n].d(1);o.length=a.length}},d(e){e&&l(t),function(e,t){for(let a=0;a<e.length;a+=1)e[a]&&e[a].d(t)}(o,e)}}}function O(e){let t,a,o=e[7]+"";return{c(){t=c("span"),a=u(o),this.h()},l(e){t=f(e,"SPAN",{class:!0});var r=h(t);a=m(r,o),r.forEach(l),this.h()},h(){p(t,"class","svelte-17rdosq")},m(e,o){i(e,t,o),s(t,a)},p(e,t){1&t&&o!==(o=e[7]+"")&&y(a,o)},d(e){e&&l(t)}}}function F(e,t){let a,o,r,n,d,v,w,S,T,k,x=t[1]+"",Z=t[2]+"",E=t[3]&&D(t);return{key:e,first:null,c(){a=c("li"),o=c("a"),r=c("p"),n=u(x),d=g(),v=c("p"),w=u(Z),S=g(),E&&E.c(),k=g(),this.h()},l(e){a=f(e,"LI",{class:!0});var t=h(a);o=f(t,"A",{href:!0,class:!0});var s=h(o);r=f(s,"P",{class:!0});var i=h(r);n=m(i,x),i.forEach(l),d=b(s),v=f(s,"P",{});var c=h(v);w=m(c,Z),c.forEach(l),S=b(s),E&&E.l(s),s.forEach(l),k=b(t),t.forEach(l),this.h()},h(){p(r,"class","title svelte-17rdosq"),p(o,"href",T="/"+t[4]),p(o,"class","svelte-17rdosq"),p(a,"class","svelte-17rdosq"),this.first=a},m(e,t){i(e,a,t),s(a,o),s(o,r),s(r,n),s(o,d),s(o,v),s(v,w),s(o,S),E&&E.m(o,null),s(a,k)},p(e,t){1&t&&x!==(x=e[1]+"")&&y(n,x),1&t&&Z!==(Z=e[2]+"")&&y(w,Z),e[3]?E?E.p(e,t):(E=D(e),E.c(),E.m(o,null)):E&&(E.d(1),E=null),1&t&&T!==(T="/"+e[4])&&p(o,"href",T)},d(e){e&&l(a),E&&E.d()}}}function z(e){let t,a,o,r,n,d,y,v,w=[],S=new Map;t=new M({});let T=e[0];const k=e=>e[4];for(let t=0;t<T.length;t+=1){let a=U(e,T,t),o=k(a);S.set(o,w[t]=F(o,a))}return{c(){var e;(e=t.$$.fragment)&&e.c(),a=g(),o=c("main"),r=c("h1"),n=u("Li Hau's Blog"),d=g(),y=c("ul");for(let e=0;e<w.length;e+=1)w[e].c();this.h()},l(e){var s,i;s=t.$$.fragment,i=e,s&&s.l(i),a=b(e),o=f(e,"MAIN",{class:!0});var c=h(o);r=f(c,"H1",{});var u=h(r);n=m(u,"Li Hau's Blog"),u.forEach(l),d=b(c),y=f(c,"UL",{class:!0});var g=h(y);for(let e=0;e<w.length;e+=1)w[e].l(g);g.forEach(l),c.forEach(l),this.h()},h(){p(y,"class","svelte-17rdosq"),p(o,"class","blogs svelte-17rdosq")},m(e,l){N(t,e,l),i(e,a,l),i(e,o,l),s(o,r),s(r,n),s(o,d),s(o,y);for(let e=0;e<w.length;e+=1)w[e].m(y,null);v=!0},p(e,[t]){if(1&t){const a=e[0];w=function(e,t,a,o,r,n,s,i,l,c,d,u){let g=e.length,p=n.length,h=g;const f={};for(;h--;)f[e[h].key]=h;const m=[],b=new Map,y=new Map;for(h=p;h--;){const e=u(r,n,h),i=a(e);let l=s.get(i);l?o&&l.p(e,t):(l=c(i,e),l.c()),b.set(i,m[h]=l),i in f&&y.set(i,Math.abs(h-f[i]))}const v=new Set,w=new Set;function S(e){H(e,1),e.m(i,d),s.set(e.key,e),d=e.first,p--}for(;g&&p;){const t=m[p-1],a=e[g-1],o=t.key,r=a.key;t===a?(d=t.first,g--,p--):b.has(r)?!s.has(o)||v.has(o)?S(t):w.has(r)?g--:y.get(o)>y.get(r)?(w.add(o),S(t)):(v.add(r),g--):(l(a,s),g--)}for(;g--;){const t=e[g];b.has(t.key)||l(t,s)}for(;p;)S(m[p-1]);return m}(w,t,k,1,e,a,S,y,L,F,null,U)}},i(e){v||(H(t.$$.fragment,e),v=!0)},o(e){!function(e,t,a,o){if(e&&e.o){if(C.has(e))return;C.add(e),(void 0).c.push(()=>{C.delete(e),o&&(a&&e.d(1),o())}),e.o(t)}}(t.$$.fragment,e),v=!1},d(e){P(t,e),e&&l(a),e&&l(o);for(let e=0;e<w.length;e+=1)w[e].d()}}}function G(e,t,a){let{data:o=[]}=t;return e.$set=e=>{"data"in e&&a(0,o=e.data)},[o]}new class extends B{constructor(e){super(),_(this,e,G,z,n,{data:0})}}({target:document.querySelector("#app"),hydrate:!0,props:{data:[{metadata:{title:"Reduce minified code size by property mangling",date:"2020-08-08T08:00:00Z",tags:["JavaScript","Terser"],slug:"reduce-minified-code-size-by-property-mangling",type:"blog"},slug:"reduce-minified-code-size-by-property-mangling"},{metadata:{title:"Contributing to Svelte - Fixing issue #5012",date:"2020-06-25T08:00:00Z",tags:["Svelte","JavaScript","Open Source"],series:"Contributing to Svelte",description:"Svelte issue #5012 - Slot containing only {@html value} renders in wrong place on update",slug:"contributing-to-svelte-fixing-issue-5012",type:"blog"},slug:"contributing-to-svelte-fixing-issue-5012"},{metadata:{title:"Retry asynchronous function using the callback pattern, promise chain and async await",date:"2020-06-21T08:00:00Z",tags:["JavaScript","Asynchronous","Problem Solving"],description:"How to retry asynchronous function using the callback pattern, promise chain and async await. Mental model for asynchronous JavaScript.",slug:"retry-async-function-with-callback-promise",type:"blog"},slug:"retry-async-function-with-callback-promise"},{metadata:{title:"Contributing to Svelte - Fixing issue #4392",date:"2020-05-23T08:00:00Z",tags:["Svelte","JavaScript","Open Source"],series:"Contributing to Svelte",description:"I am going to tell you an anecdote on how I investigated and fixed a bug in Svelte. I documented down my train of thoughts as detailed as possible. I hope this gives anyone who is reading, a glimpse on how to work on the Svelte source code.",slug:"contributing-to-svelte-fixing-issue-4392",type:"blog"},slug:"contributing-to-svelte-fixing-issue-4392"},{metadata:{title:"Compile Svelte in your head (Part 3)",date:"2020-05-07T08:00:00Z",tags:["Svelte","JavaScript"],series:"Compile Svelte in your head",slug:"compile-svelte-in-your-head-part-3",type:"blog"},slug:"compile-svelte-in-your-head-part-3"},{metadata:{title:"The Svelte Compiler Handbook",date:"2020-04-05T08:00:00Z",tags:["Svelte","JavaScript","compiler"],description:"The Svelte compilation process can be broken down into 4-steps, 1) parsing source code into AST, 2) tracking references and dependencies, 3) creating code blocks and fragments, and 4) generate code.",slug:"the-svelte-compiler-handbook",type:"blog"},slug:"the-svelte-compiler-handbook"},{metadata:{title:"Compile Svelte in your head (Part 2)",date:"2020-03-22T08:00:00Z",tags:["Svelte","JavaScript"],series:"Compile Svelte in your head",slug:"compile-svelte-in-your-head-part-2",type:"blog"},slug:"compile-svelte-in-your-head-part-2"},{metadata:{title:"Compile Svelte in your head (Part 1)",date:"2020-03-04T08:00:00Z",tags:["Svelte","JavaScript"],series:"Compile Svelte in your head",slug:"compile-svelte-in-your-head-part-1",type:"blog"},slug:"compile-svelte-in-your-head-part-1"},{metadata:{title:"Hydrating text content from Server-Side Rendering",date:"2020-02-28T08:00:00Z",slug:"hydrating-text-content",type:"blog"},slug:"hydrating-text-content"},{metadata:{title:"Webpack Additional Compilation Pass",date:"2020-02-20T08:00:00Z",lastUpdated:"2020-02-27T08:00:00Z",slug:"webpack-additional-compilation-pass",type:"blog"},slug:"webpack-additional-compilation-pass"},{metadata:{title:"Webpack's TemplatePlugin",date:"2020-01-21T08:00:00Z",slug:"webpack-plugin-main-template",type:"blog"},slug:"webpack-plugin-main-template"},{metadata:{title:"Debugging Story: Build failed, error from Terser",date:"2020-01-08T08:00:00Z",tags:["debugging"],description:"It all started with an error message during the build: 'ERROR in bundle.xxx.js from Terser'.",slug:"debugging-build-failed-error-from-terser",type:"blog"},slug:"debugging-build-failed-error-from-terser"},{metadata:{title:"Reactivity in Web Frameworks (Part 1)",date:"2020-01-05T08:00:00Z",lastUpdated:"2020-01-08T08:00:00Z",description:"Reactivity is the ability of a web framework to update your view whenever the application state has changed. How do web frameworks achieve reactivity?",slug:"reactivity-in-web-frameworks-the-when",type:"blog"},slug:"reactivity-in-web-frameworks-the-when"},{metadata:{title:"Super Silly Hackathon 2019",date:"2019-12-14T08:00:00Z",lastUpdated:"2019-12-15T15:19:00Z",description:"A quick walkthrough on how I created my pet in the browser for the Super Silly Hackathon 2019.",tags:["JavaScript","blog","hackathon"],series:"Hackathon Projects",slug:"super-silly-hackathon-2019",type:"blog"},slug:"super-silly-hackathon-2019"},{metadata:{title:"JSON Parser with JavaScript",date:"2019-12-12T08:00:00Z",description:"Step-by-step guide on implementing a JSON parser",tags:["JavaScript","AST"],series:"AST",slug:"json-parser-with-javascript",type:"blog"},slug:"json-parser-with-javascript"},{metadata:{title:"Pause and resume a JavaScript function",date:"2019-12-09T08:00:00Z",description:"A thought experiment on how you can pause and resume the execution of a JavaScript function",tags:["JavaScript","React"],slug:"pause-and-resume-a-javascript-function",type:"blog"},slug:"pause-and-resume-a-javascript-function"},{metadata:{title:"I wrote a 12-line Rollup plugin",date:"2019-11-30T08:00:00Z",description:"Why would I install a package with so many files and dependencies, just to do a something simple that can be done in 12 lines of code?",tags:["JavaScript","rollup","plugin"],slug:"12-line-rollup-plugin",type:"blog"},slug:"12-line-rollup-plugin"},{metadata:{title:"Manipulating AST with JavaScript",date:"2019-11-22T08:00:00Z",description:"Manipulating AST is not that hard anyway",tags:["JavaScript","ast","transform","depth-first-search","dfs"],series:"AST",slug:"manipulating-ast-with-javascript",type:"blog"},slug:"manipulating-ast-with-javascript"},{metadata:{title:"I wrote my module bundler II",date:"2019-10-16T08:00:00Z",tags:["JavaScript","module bundler","dev tool","webpack"],description:"We've built a simple bundler to bundle javascript code. Let's add CSS, HTML and serve it in the browser!",series:"Write a module bundler",slug:"i-wrote-my-module-bundler-ii-for-the-web",type:"blog"},slug:"i-wrote-my-module-bundler-ii-for-the-web"},{metadata:{title:"Babel macros",date:"2019-10-08T08:00:00Z",series:"Intermediate Babel",tags:["JavaScript","babel","ast","transform"],description:"Custom JavaScript syntax is hard to maintain, custom babel transform plugin is no better. That's why we need Babel macros.",slug:"babel-macros",type:"blog"},slug:"babel-macros"},{metadata:{title:"Creating custom JavaScript syntax with Babel",date:"2019-09-25T08:00:00Z",description:"Forking babel parser and creating your custom JavaScript syntax isn't as hard as you think.",tags:["JavaScript","babel","ast","transform"],series:"Intermediate Babel",slug:"creating-custom-javascript-syntax-with-babel",type:"blog"},slug:"creating-custom-javascript-syntax-with-babel"},{metadata:{title:"I wrote my module bundler",date:"2019-09-18T08:00:00Z",tags:["JavaScript","module bundler","dev tool","webpack"],description:"In my previous article, I explained how module bundler works. In this article, I am going to show you how I wrote my module bundler...",series:"Write a module bundler",slug:"i-wrote-my-module-bundler",type:"blog"},slug:"i-wrote-my-module-bundler"},{metadata:{title:"Solving Nonogram with Code",date:"2019-09-14T08:00:00Z",description:'...said me to my colleague, "If I could come up with a program to solve this, I would stop playing it"',tags:["JavaScript","nonogram","algorithm"],slug:"solving-nonogram-with-code",type:"blog"},slug:"solving-nonogram-with-code"},{metadata:{title:"Step-by-step guide for writing a custom babel transformation",date:"2019-09-12T08:00:00Z",tags:["JavaScript","babel","ast","transform"],description:"Writing your first babel plugin",series:"Intermediate Babel",slug:"step-by-step-guide-for-writing-a-babel-transformation",type:"blog"},slug:"step-by-step-guide-for-writing-a-babel-transformation"},{metadata:{title:"Git commits went missing after a rebase",date:"2019-09-04T08:00:00Z",description:"What happened when you do a rebase",tags:["JavaScript","git","rebase","scm"],slug:"commit-went-missing-after-rebase",type:"blog"},slug:"commit-went-missing-after-rebase"},{metadata:{title:"What is module bundler and how does it work?",date:"2019-08-30T08:00:00Z",lastUpdated:"2019-08-30T15:05:00Z",description:"understand how module bundler works",tags:["JavaScript","module bundler","dev tool","webpack"],series:"Write a module bundler",slug:"what-is-module-bundler-and-how-does-it-work",type:"blog"},slug:"what-is-module-bundler-and-how-does-it-work"},{metadata:{title:"Learn in Public",date:"2019-06-21T08:00:00Z",description:"Starting my notes",slug:"learn-in-public",type:"blog"},slug:"learn-in-public"},{metadata:{title:"How to get started in contributing to open source",date:"2019-06-05T08:00:00Z",slug:"how-to-get-started-in-contributing-to-open-source",type:"blog"},slug:"how-to-get-started-in-contributing-to-open-source"},{metadata:{title:"Debugging Web Workers",date:"2019-05-22T08:00:00Z",description:"...for Chrome, Firefox and Safari",slug:"Debugging web workers",type:"blog"},slug:"Debugging web workers"},{metadata:{title:"Parsing error when calling generic function with type arguments",date:"2019-04-23T08:00:00Z",lastUpdated:"2019-04-27T08:00:00Z",description:"😱",slug:"parsing-error-flow-type-parameter-instantiation",type:"blog"},slug:"parsing-error-flow-type-parameter-instantiation"},{metadata:{title:"Errors encountered upgrading Flow v0.85",date:"2019-04-22T08:00:00Z",description:"and how we solved them",slug:"errors-encountered-upgrading-flow-0.85",type:"blog"},slug:"errors-encountered-upgrading-flow-0.85"},{metadata:{title:"Who accessed my property?",date:"2019-03-24T08:00:00Z",description:"How to know when object property get accessed or modified",slug:"who-accessed-my-property",type:"blog"},slug:"who-accessed-my-property"},{metadata:{title:"Understand the frontend tools",date:"2019-03-16T08:00:00Z",description:"About the tools frontend developer used in 2019",slug:"understand-the-frontend-tools",type:"blog"},slug:"understand-the-frontend-tools"},{metadata:{title:"Codemod with babel",date:"2019-03-13T08:00:00Z",lastUpdated:"2019-09-13T08:00:00Z",description:"A template which I used",slug:"codemod-with-babel",type:"blog"},slug:"codemod-with-babel"},{metadata:{title:"My eslint doesn’t work with for flow 0.85’s explicit type argument syntax",date:"2019-01-17T08:00:00Z",description:"and how I figured out why.",slug:"eslint-for-flow-explicit-type-argument-syntax",type:"blog"},slug:"eslint-for-flow-explicit-type-argument-syntax"},{metadata:{title:"The `ascii_only` option in uglify-js",date:"2018-10-27T08:00:00Z",description:"that get my emoji showing in my chrome extension",slug:"uglify-ascii-only",type:"blog"},slug:"uglify-ascii-only"},{metadata:{title:"Dead-code elimination",date:"2018-10-24T08:00:00Z",description:"How to hint uglify-js that your function is pure",slug:"dead-code-elimination",type:"blog"},slug:"dead-code-elimination"},{metadata:{title:"Took me hours to realise why docker build ignores my .dockerignore",date:"2017-11-26T08:00:00Z",description:"...and this is what I've learned",slug:"why-docker-ignores-my-file",type:"blog"},slug:"why-docker-ignores-my-file"},{metadata:{title:"Dynamically load reducers for code splitting in a React Redux application",date:"2017-11-16T08:00:00Z",description:"How to inject reducer asynchronously",slug:"dynamically-load-async-reducer-for-code-splitting-in-react",type:"blog"},slug:"dynamically-load-async-reducer-for-code-splitting-in-react"},{metadata:{title:"Random stuff that I’ve learned from a browser’s developer console",date:"2016-04-20T08:00:00Z",description:"I opened up my browser’s developer console for no reason, and I found this",slug:"random-stuff-i-learned-from-browser-console",type:"blog"},slug:"random-stuff-i-learned-from-browser-console"},{metadata:{title:"5 Steps to build NodeJS using Travis CI",date:"2016-04-13T08:00:00Z",description:"Setting up Travis CI for your NodeJS Github repo!",slug:"5-steps-to-build-nodejs-using-travis-ci",type:"blog"},slug:"5-steps-to-build-nodejs-using-travis-ci"}]}});
