function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function o(){return Object.create(null)}function r(e){e.forEach(n)}function a(e){return"function"==typeof e}function c(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(e,n,o,r){return e[1]&&r?t(o.ctx.slice(),e[1](r(n))):o.ctx}function l(e,t,n,o,r,a,c){const l=function(e,t,n,o){if(e[2]&&o){const r=e[2](o(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let o=0;o<n;o+=1)e[o]=t.dirty[o]|r[o];return e}return t.dirty|r}return t.dirty}(t,o,r,a);if(l){const r=s(t,n,o,c);e.p(r,l)}}function i(e,t){e.appendChild(t)}function f(e,t,n){e.insertBefore(t,n||null)}function h(e){e.parentNode.removeChild(e)}function u(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function d(e){return document.createElement(e)}function m(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function p(e){return document.createTextNode(e)}function g(){return p(" ")}function v(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function w(e){return Array.from(e.childNodes)}function E(e,t,n,o){for(let o=0;o<e.length;o+=1){const r=e[o];if(r.nodeName===t){let t=0;const a=[];for(;t<r.attributes.length;){const e=r.attributes[t++];n[e.name]||a.push(e.name)}for(let e=0;e<a.length;e++)r.removeAttribute(a[e]);return e.splice(o,1)[0]}}return o?m(t):d(t)}function y(e,t){for(let n=0;n<e.length;n+=1){const o=e[n];if(3===o.nodeType)return o.data=""+t,e.splice(n,1)[0]}return p(t)}function $(e){return y(e," ")}function A(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let L;function b(e){L=e}const I=[],x=[],S=[],k=[],M=Promise.resolve();let N=!1;function T(e){S.push(e)}let W=!1;const _=new Set;function D(){if(!W){W=!0;do{for(let e=0;e<I.length;e+=1){const t=I[e];b(t),j(t.$$)}for(I.length=0;x.length;)x.pop()();for(let e=0;e<S.length;e+=1){const t=S[e];_.has(t)||(_.add(t),t())}S.length=0}while(I.length);for(;k.length;)k.pop()();N=!1,W=!1,_.clear()}}function j(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(T)}}const q=new Set;function R(e,t){e&&e.i&&(q.delete(e),e.i(t))}function C(e,t,n,o){if(e&&e.o){if(q.has(e))return;q.add(e),(void 0).c.push(()=>{q.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}function U(e){e&&e.c()}function O(e,t){e&&e.l(t)}function P(e,t,o){const{fragment:c,on_mount:s,on_destroy:l,after_update:i}=e.$$;c&&c.m(t,o),T(()=>{const t=s.map(n).filter(a);l?l.push(...t):r(t),e.$$.on_mount=[]}),i.forEach(T)}function H(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function F(e,t){-1===e.$$.dirty[0]&&(I.push(e),N||(N=!0,M.then(D)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function z(t,n,a,c,s,l,i=[-1]){const f=L;b(t);const u=n.props||{},d=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:s,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:i};let m=!1;if(d.ctx=a?a(t,u,(e,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&s(d.ctx[e],d.ctx[e]=r)&&(d.bound[e]&&d.bound[e](r),m&&F(t,e)),n}):[],d.update(),m=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const e=w(n.target);d.fragment&&d.fragment.l(e),e.forEach(h)}else d.fragment&&d.fragment.c();n.intro&&R(t.$$.fragment),P(t,n.target,n.anchor),D()}b(f)}class B{$destroy(){H(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function G(t){let n,o,r,a,c,s,l,u,A,L,b,I,x,S,k,M,N,T,W,_,D,j,q,R,C,U,O,P,H,F,z,B,G,V,K;return{c(){n=d("header"),o=d("nav"),r=d("ul"),a=d("li"),c=d("a"),s=p("Tan Li Hau"),l=g(),u=d("li"),A=d("a"),L=p("About"),b=g(),I=d("li"),x=d("a"),S=p("Writings"),k=g(),M=d("li"),N=d("a"),T=p("Talks"),W=g(),_=d("li"),D=d("a"),j=p("Notes"),q=g(),R=d("li"),C=d("a"),U=p("Newsletter"),O=g(),P=d("li"),H=d("a"),F=m("svg"),z=m("path"),B=g(),G=d("a"),V=m("svg"),K=m("path"),this.h()},l(e){n=E(e,"HEADER",{class:!0});var t=w(n);o=E(t,"NAV",{});var i=w(o);r=E(i,"UL",{class:!0});var f=w(r);a=E(f,"LI",{class:!0});var d=w(a);c=E(d,"A",{href:!0,class:!0});var m=w(c);s=y(m,"Tan Li Hau"),m.forEach(h),d.forEach(h),l=$(f),u=E(f,"LI",{class:!0});var p=w(u);A=E(p,"A",{href:!0,class:!0});var g=w(A);L=y(g,"About"),g.forEach(h),p.forEach(h),b=$(f),I=E(f,"LI",{class:!0});var v=w(I);x=E(v,"A",{href:!0,class:!0});var J=w(x);S=y(J,"Writings"),J.forEach(h),v.forEach(h),k=$(f),M=E(f,"LI",{class:!0});var Q=w(M);N=E(Q,"A",{href:!0,class:!0});var X=w(N);T=y(X,"Talks"),X.forEach(h),Q.forEach(h),W=$(f),_=E(f,"LI",{class:!0});var Y=w(_);D=E(Y,"A",{href:!0,class:!0});var Z=w(D);j=y(Z,"Notes"),Z.forEach(h),Y.forEach(h),q=$(f),R=E(f,"LI",{class:!0});var ee=w(R);C=E(ee,"A",{href:!0,class:!0});var te=w(C);U=y(te,"Newsletter"),te.forEach(h),ee.forEach(h),O=$(f),P=E(f,"LI",{class:!0});var ne=w(P);H=E(ne,"A",{"aria-label":!0,href:!0,class:!0});var oe=w(H);F=E(oe,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var re=w(F);z=E(re,"path",{d:!0},1),w(z).forEach(h),re.forEach(h),oe.forEach(h),B=$(ne),G=E(ne,"A",{"aria-label":!0,href:!0,class:!0});var ae=w(G);V=E(ae,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var ce=w(V);K=E(ce,"path",{d:!0},1),w(K).forEach(h),ce.forEach(h),ae.forEach(h),ne.forEach(h),f.forEach(h),i.forEach(h),t.forEach(h),this.h()},h(){v(c,"href","/"),v(c,"class","svelte-f3e4uo"),v(a,"class","svelte-f3e4uo"),v(A,"href","/about"),v(A,"class","svelte-f3e4uo"),v(u,"class","svelte-f3e4uo"),v(x,"href","/blogs"),v(x,"class","svelte-f3e4uo"),v(I,"class","svelte-f3e4uo"),v(N,"href","/talks"),v(N,"class","svelte-f3e4uo"),v(M,"class","svelte-f3e4uo"),v(D,"href","/notes"),v(D,"class","svelte-f3e4uo"),v(_,"class","svelte-f3e4uo"),v(C,"href","/newsletter"),v(C,"class","svelte-f3e4uo"),v(R,"class","svelte-f3e4uo"),v(z,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),v(F,"viewBox","0 0 24 24"),v(F,"width","1em"),v(F,"height","1em"),v(F,"class","svelte-f3e4uo"),v(H,"aria-label","Twitter account"),v(H,"href","https://twitter.com/lihautan"),v(H,"class","svelte-f3e4uo"),v(K,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),v(V,"viewBox","0 0 24 24"),v(V,"width","1em"),v(V,"height","1em"),v(V,"class","svelte-f3e4uo"),v(G,"aria-label","Github account"),v(G,"href","https://github.com/tanhauhau"),v(G,"class","svelte-f3e4uo"),v(P,"class","social svelte-f3e4uo"),v(r,"class","svelte-f3e4uo"),v(n,"class","svelte-f3e4uo")},m(e,t){f(e,n,t),i(n,o),i(o,r),i(r,a),i(a,c),i(c,s),i(r,l),i(r,u),i(u,A),i(A,L),i(r,b),i(r,I),i(I,x),i(x,S),i(r,k),i(r,M),i(M,N),i(N,T),i(r,W),i(r,_),i(_,D),i(D,j),i(r,q),i(r,R),i(R,C),i(C,U),i(r,O),i(r,P),i(P,H),i(H,F),i(F,z),i(P,B),i(P,G),i(G,V),i(V,K)},p:e,i:e,o:e,d(e){e&&h(n)}}}class V extends B{constructor(e){super(),z(this,e,null,G,c,{})}}function K(e,t,n){const o=e.slice();return o[6]=t[n],o}function J(e,t,n){const o=e.slice();return o[6]=t[n],o}function Q(e){let t,n;return{c(){t=d("meta"),this.h()},l(e){t=E(e,"META",{name:!0,content:!0}),this.h()},h(){v(t,"name","keywords"),v(t,"content",n=e[6])},m(e,n){f(e,t,n)},p(e,o){4&o&&n!==(n=e[6])&&v(t,"content",n)},d(e){e&&h(t)}}}function X(e){let t,n,o=e[6]+"";return{c(){t=d("span"),n=p(o),this.h()},l(e){t=E(e,"SPAN",{class:!0});var r=w(t);n=y(r,o),r.forEach(h),this.h()},h(){v(t,"class","svelte-10cnqwo")},m(e,o){f(e,t,o),i(t,n)},p(e,t){4&t&&o!==(o=e[6]+"")&&A(n,o)},d(e){e&&h(t)}}}function Y(e){let t,n,o,r,a,c,m,L,b,I,x,S,k,M,N,T,W,_,D,j;document.title=t="Note: "+e[1]+" "+e[0]+" | Tan Li Hau";let q=e[2],F=[];for(let t=0;t<q.length;t+=1)F[t]=Q(J(e,q,t));I=new V({});let z=e[2],B=[];for(let t=0;t<z.length;t+=1)B[t]=X(K(e,z,t));const G=e[4].default,Y=function(e,t,n,o){if(e){const r=s(e,t,n,o);return e[0](r)}}(G,e,e[3],null);return{c(){n=d("link"),o=d("meta"),r=d("meta");for(let e=0;e<F.length;e+=1)F[e].c();a=d("meta"),c=g(),m=d("a"),L=p("Skip to content"),b=g(),U(I.$$.fragment),x=g(),S=d("main"),k=d("h1"),M=p(e[1]),N=p(" - "),T=p(e[0]),W=g();for(let e=0;e<B.length;e+=1)B[e].c();_=g(),D=d("article"),Y&&Y.c(),this.h()},l(t){const s=function(e,t=document.body){return Array.from(t.querySelectorAll(e))}('[data-svelte="svelte-jez2i1"]',document.head);n=E(s,"LINK",{href:!0,rel:!0}),o=E(s,"META",{name:!0,content:!0}),r=E(s,"META",{name:!0,content:!0});for(let e=0;e<F.length;e+=1)F[e].l(s);a=E(s,"META",{itemprop:!0,content:!0}),s.forEach(h),c=$(t),m=E(t,"A",{href:!0,class:!0});var l=w(m);L=y(l,"Skip to content"),l.forEach(h),b=$(t),O(I.$$.fragment,t),x=$(t),S=E(t,"MAIN",{id:!0,class:!0});var i=w(S);k=E(i,"H1",{});var f=w(k);M=y(f,e[1]),N=y(f," - "),T=y(f,e[0]),f.forEach(h),W=$(i);for(let e=0;e<B.length;e+=1)B[e].l(i);_=$(i),D=E(i,"ARTICLE",{});var u=w(D);Y&&Y.l(u),u.forEach(h),i.forEach(h),this.h()},h(){v(n,"href","https://lihautan.com/notes/2019-10-14 - DRM Digital rights management/assets/blog-base-967d71e9.css"),v(n,"rel","stylesheet"),v(o,"name","og:title"),v(o,"content",e[0]),v(r,"name","og:type"),v(r,"content","website"),v(a,"itemprop","url"),v(a,"content","https%3A%2F%2Flihautan.com%2Fnotes%2F2019-10-14%20-%20DRM%20Digital%20rights%20management"),v(m,"href","#content"),v(m,"class","skip svelte-10cnqwo"),v(S,"id","content"),v(S,"class","blog svelte-10cnqwo")},m(e,t){i(document.head,n),i(document.head,o),i(document.head,r);for(let e=0;e<F.length;e+=1)F[e].m(document.head,null);i(document.head,a),f(e,c,t),f(e,m,t),i(m,L),f(e,b,t),P(I,e,t),f(e,x,t),f(e,S,t),i(S,k),i(k,M),i(k,N),i(k,T),i(S,W);for(let e=0;e<B.length;e+=1)B[e].m(S,null);i(S,_),i(S,D),Y&&Y.m(D,null),j=!0},p(e,[n]){if((!j||3&n)&&t!==(t="Note: "+e[1]+" "+e[0]+" | Tan Li Hau")&&(document.title=t),(!j||1&n)&&v(o,"content",e[0]),4&n){let t;for(q=e[2],t=0;t<q.length;t+=1){const o=J(e,q,t);F[t]?F[t].p(o,n):(F[t]=Q(o),F[t].c(),F[t].m(a.parentNode,a))}for(;t<F.length;t+=1)F[t].d(1);F.length=q.length}if((!j||2&n)&&A(M,e[1]),(!j||1&n)&&A(T,e[0]),4&n){let t;for(z=e[2],t=0;t<z.length;t+=1){const o=K(e,z,t);B[t]?B[t].p(o,n):(B[t]=X(o),B[t].c(),B[t].m(S,_))}for(;t<B.length;t+=1)B[t].d(1);B.length=z.length}Y&&Y.p&&8&n&&l(Y,G,e,e[3],n,null,null)},i(e){j||(R(I.$$.fragment,e),R(Y,e),j=!0)},o(e){C(I.$$.fragment,e),C(Y,e),j=!1},d(e){h(n),h(o),h(r),u(F,e),h(a),e&&h(c),e&&h(m),e&&h(b),H(I,e),e&&h(x),e&&h(S),u(B,e),Y&&Y.d(e)}}}function Z(e,t,n){let{name:o}=t,{date:r}=t,{tags:a=[]}=t,{$$slots:c={},$$scope:s}=t;return e.$set=e=>{"name"in e&&n(0,o=e.name),"date"in e&&n(1,r=e.date),"tags"in e&&n(2,a=e.tags),"$$scope"in e&&n(3,s=e.$$scope)},[o,r,a,s,c]}class ee extends B{constructor(e){super(),z(this,e,Z,Y,c,{name:0,date:1,tags:2})}}function te(e){let t,n,o,r,a,c,s,l,u,m,A,L,b,I,x,S,k,M,N,T,W,_,D,j,q,R,C,U,O,P,H,F,z,B,G,V,K,J,Q,X,Y,Z,ee,te,ne,oe,re,ae,ce,se,le,ie,fe,he;return{c(){t=d("ul"),n=d("li"),o=d("p"),r=p("Hardware Level"),a=g(),c=d("ul"),s=d("li"),l=p("DRM cryptography for certified players"),u=g(),m=d("li"),A=d("p"),L=p("Software Level"),b=g(),I=d("ul"),x=d("li"),S=p("prevent screen capturing:"),k=d("ul"),M=d("li"),N=p("Android "),T=d("ul"),W=d("li"),_=d("a"),D=p("android.media.projection"),j=g(),q=d("li"),R=d("a"),C=d("code"),U=p("getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE)"),O=g(),P=d("li"),H=p("iOS"),F=d("ul"),z=d("li"),B=d("a"),G=p("https://stackoverflow.com/questions/13484516/ios-detection-of-screenshot"),V=g(),K=d("li"),J=p("Windows"),Q=d("ul"),X=d("li"),Y=d("a"),Z=p("SetWindowDisplayAffinity"),ee=p(" Windows API with a "),te=d("code"),ne=p("WDA_MONITOR"),oe=p(" affinity."),re=g(),ae=d("p"),ce=p("Reference:"),se=g(),le=d("ul"),ie=d("li"),fe=d("a"),he=p("https://www.quora.com/What-technology-does-Netflix-and-other-streaming-services-use-to-prevent-someone-from-screen-capturing-a-movie-or-even-taking-a-screen-shot-I-am-a-Computer-Science-major-and-its-annoying-me-that-I-cant-figure-out-how-it-works"),this.h()},l(e){t=E(e,"UL",{});var i=w(t);n=E(i,"LI",{});var f=w(n);o=E(f,"P",{});var d=w(o);r=y(d,"Hardware Level"),d.forEach(h),a=$(f),c=E(f,"UL",{});var p=w(c);s=E(p,"LI",{});var g=w(s);l=y(g,"DRM cryptography for certified players"),g.forEach(h),p.forEach(h),f.forEach(h),u=$(i),m=E(i,"LI",{});var v=w(m);A=E(v,"P",{});var ue=w(A);L=y(ue,"Software Level"),ue.forEach(h),b=$(v),I=E(v,"UL",{});var de=w(I);x=E(de,"LI",{});var me=w(x);S=y(me,"prevent screen capturing:"),k=E(me,"UL",{});var pe=w(k);M=E(pe,"LI",{});var ge=w(M);N=y(ge,"Android "),T=E(ge,"UL",{});var ve=w(T);W=E(ve,"LI",{});var we=w(W);_=E(we,"A",{href:!0,rel:!0});var Ee=w(_);D=y(Ee,"android.media.projection"),Ee.forEach(h),we.forEach(h),j=$(ve),q=E(ve,"LI",{});var ye=w(q);R=E(ye,"A",{href:!0,rel:!0});var $e=w(R);C=E($e,"CODE",{});var Ae=w(C);U=y(Ae,"getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE)"),Ae.forEach(h),$e.forEach(h),ye.forEach(h),ve.forEach(h),ge.forEach(h),O=$(pe),P=E(pe,"LI",{});var Le=w(P);H=y(Le,"iOS"),F=E(Le,"UL",{});var be=w(F);z=E(be,"LI",{});var Ie=w(z);B=E(Ie,"A",{href:!0,rel:!0});var xe=w(B);G=y(xe,"https://stackoverflow.com/questions/13484516/ios-detection-of-screenshot"),xe.forEach(h),Ie.forEach(h),be.forEach(h),Le.forEach(h),V=$(pe),K=E(pe,"LI",{});var Se=w(K);J=y(Se,"Windows"),Q=E(Se,"UL",{});var ke=w(Q);X=E(ke,"LI",{});var Me=w(X);Y=E(Me,"A",{href:!0,rel:!0});var Ne=w(Y);Z=y(Ne,"SetWindowDisplayAffinity"),Ne.forEach(h),ee=y(Me," Windows API with a "),te=E(Me,"CODE",{});var Te=w(te);ne=y(Te,"WDA_MONITOR"),Te.forEach(h),oe=y(Me," affinity."),Me.forEach(h),ke.forEach(h),Se.forEach(h),pe.forEach(h),me.forEach(h),de.forEach(h),v.forEach(h),i.forEach(h),re=$(e),ae=E(e,"P",{});var We=w(ae);ce=y(We,"Reference:"),We.forEach(h),se=$(e),le=E(e,"UL",{});var _e=w(le);ie=E(_e,"LI",{});var De=w(ie);fe=E(De,"A",{href:!0,rel:!0});var je=w(fe);he=y(je,"https://www.quora.com/What-technology-does-Netflix-and-other-streaming-services-use-to-prevent-someone-from-screen-capturing-a-movie-or-even-taking-a-screen-shot-I-am-a-Computer-Science-major-and-its-annoying-me-that-I-cant-figure-out-how-it-works"),je.forEach(h),De.forEach(h),_e.forEach(h),this.h()},h(){v(_,"href","https://developer.android.com/reference/android/media/projection/package-summary"),v(_,"rel","nofollow"),v(R,"href","https://developer.android.com/reference/android/view/WindowManager.LayoutParams.html"),v(R,"rel","nofollow"),v(B,"href","https://stackoverflow.com/questions/13484516/ios-detection-of-screenshot"),v(B,"rel","nofollow"),v(Y,"href","https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setwindowdisplayaffinity"),v(Y,"rel","nofollow"),v(fe,"href","https://www.quora.com/What-technology-does-Netflix-and-other-streaming-services-use-to-prevent-someone-from-screen-capturing-a-movie-or-even-taking-a-screen-shot-I-am-a-Computer-Science-major-and-its-annoying-me-that-I-cant-figure-out-how-it-works"),v(fe,"rel","nofollow")},m(e,h){f(e,t,h),i(t,n),i(n,o),i(o,r),i(n,a),i(n,c),i(c,s),i(s,l),i(t,u),i(t,m),i(m,A),i(A,L),i(m,b),i(m,I),i(I,x),i(x,S),i(x,k),i(k,M),i(M,N),i(M,T),i(T,W),i(W,_),i(_,D),i(T,j),i(T,q),i(q,R),i(R,C),i(C,U),i(k,O),i(k,P),i(P,H),i(P,F),i(F,z),i(z,B),i(B,G),i(k,V),i(k,K),i(K,J),i(K,Q),i(Q,X),i(X,Y),i(Y,Z),i(X,ee),i(X,te),i(te,ne),i(X,oe),f(e,re,h),f(e,ae,h),i(ae,ce),f(e,se,h),f(e,le,h),i(le,ie),i(ie,fe),i(fe,he)},d(e){e&&h(t),e&&h(re),e&&h(ae),e&&h(se),e&&h(le)}}}function ne(e){let n,o;const r=[oe];let a={$$slots:{default:[te]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)a=t(a,r[e]);return n=new ee({props:a}),{c(){U(n.$$.fragment)},l(e){O(n.$$.fragment,e)},m(e,t){P(n,e,t),o=!0},p(e,[t]){const o=0&t?function(e,t){const n={},o={},r={$$scope:1};let a=e.length;for(;a--;){const c=e[a],s=t[a];if(s){for(const e in c)e in s||(o[e]=1);for(const e in s)r[e]||(n[e]=s[e],r[e]=1);e[a]=s}else for(const e in c)r[e]=1}for(const e in o)e in n||(n[e]=void 0);return n}(r,[(a=oe,"object"==typeof a&&null!==a?a:{})]):{};var a;1&t&&(o.$$scope={dirty:t,ctx:e}),n.$set(o)},i(e){o||(R(n.$$.fragment,e),o=!0)},o(e){C(n.$$.fragment,e),o=!1},d(e){H(n,e)}}}const oe={slug:"notes/2019-10-14 - DRM Digital rights management",type:"notes",date:"2019-10-14",name:"DRM Digital rights management",layout:"note"};class re extends B{constructor(e){super(),z(this,e,null,ne,c,{})}}setTimeout(()=>{new re({target:document.querySelector("#app"),hydrate:!0});if(document.querySelector(".twitter-tweet")){const e=document.createElement("script");e.async=!0,e.src="https://platform.twitter.com/widgets.js",e.charset="utf-8",document.body.appendChild(e)}if("loading"in HTMLImageElement.prototype){document.querySelectorAll('img[loading="lazy"]').forEach(e=>{e.src=e.dataset.src})}else{const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js",document.body.appendChild(e)}},3e3);
