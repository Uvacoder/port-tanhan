function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function o(){return Object.create(null)}function r(e){e.forEach(n)}function a(e){return"function"==typeof e}function c(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(e,n,o,r){return e[1]&&r?t(o.ctx.slice(),e[1](r(n))):o.ctx}function l(e,t,n,o,r,a,c){const l=function(e,t,n,o){if(e[2]&&o){const r=e[2](o(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let o=0;o<n;o+=1)e[o]=t.dirty[o]|r[o];return e}return t.dirty|r}return t.dirty}(t,o,r,a);if(l){const r=s(t,n,o,c);e.p(r,l)}}function i(e,t){e.appendChild(t)}function f(e,t,n){e.insertBefore(t,n||null)}function h(e){e.parentNode.removeChild(e)}function u(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function d(e){return document.createElement(e)}function m(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function g(e){return document.createTextNode(e)}function p(){return g(" ")}function v(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function w(e){return Array.from(e.childNodes)}function E(e,t,n,o){for(let o=0;o<e.length;o+=1){const r=e[o];if(r.nodeName===t){let t=0;const a=[];for(;t<r.attributes.length;){const e=r.attributes[t++];n[e.name]||a.push(e.name)}for(let e=0;e<a.length;e++)r.removeAttribute(a[e]);return e.splice(o,1)[0]}}return o?m(t):d(t)}function y(e,t){for(let n=0;n<e.length;n+=1){const o=e[n];if(3===o.nodeType)return o.data=""+t,e.splice(n,1)[0]}return g(t)}function $(e){return y(e," ")}function A(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let L;function b(e){L=e}const I=[],x=[],M=[],S=[],k=Promise.resolve();let N=!1;function D(e){M.push(e)}let T=!1;const W=new Set;function _(){if(!T){T=!0;do{for(let e=0;e<I.length;e+=1){const t=I[e];b(t),R(t.$$)}for(I.length=0;x.length;)x.pop()();for(let e=0;e<M.length;e+=1){const t=M[e];W.has(t)||(W.add(t),t())}M.length=0}while(I.length);for(;S.length;)S.pop()();N=!1,T=!1,W.clear()}}function R(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(D)}}const j=new Set;function q(e,t){e&&e.i&&(j.delete(e),e.i(t))}function C(e,t,n,o){if(e&&e.o){if(j.has(e))return;j.add(e),(void 0).c.push(()=>{j.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}function U(e){e&&e.c()}function O(e,t){e&&e.l(t)}function P(e,t,o){const{fragment:c,on_mount:s,on_destroy:l,after_update:i}=e.$$;c&&c.m(t,o),D(()=>{const t=s.map(n).filter(a);l?l.push(...t):r(t),e.$$.on_mount=[]}),i.forEach(D)}function H(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function F(e,t){-1===e.$$.dirty[0]&&(I.push(e),N||(N=!0,k.then(_)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function z(t,n,a,c,s,l,i=[-1]){const f=L;b(t);const u=n.props||{},d=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:s,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:i};let m=!1;if(d.ctx=a?a(t,u,(e,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&s(d.ctx[e],d.ctx[e]=r)&&(d.bound[e]&&d.bound[e](r),m&&F(t,e)),n}):[],d.update(),m=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const e=w(n.target);d.fragment&&d.fragment.l(e),e.forEach(h)}else d.fragment&&d.fragment.c();n.intro&&q(t.$$.fragment),P(t,n.target,n.anchor),_()}b(f)}class B{$destroy(){H(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function G(t){let n,o,r,a,c,s,l,u,A,L,b,I,x,M,S,k,N,D,T,W,_,R,j,q,C,U,O,P,H,F,z,B,G,V,K;return{c(){n=d("header"),o=d("nav"),r=d("ul"),a=d("li"),c=d("a"),s=g("Tan Li Hau"),l=p(),u=d("li"),A=d("a"),L=g("About"),b=p(),I=d("li"),x=d("a"),M=g("Writings"),S=p(),k=d("li"),N=d("a"),D=g("Talks"),T=p(),W=d("li"),_=d("a"),R=g("Notes"),j=p(),q=d("li"),C=d("a"),U=g("Newsletter"),O=p(),P=d("li"),H=d("a"),F=m("svg"),z=m("path"),B=p(),G=d("a"),V=m("svg"),K=m("path"),this.h()},l(e){n=E(e,"HEADER",{class:!0});var t=w(n);o=E(t,"NAV",{});var i=w(o);r=E(i,"UL",{class:!0});var f=w(r);a=E(f,"LI",{class:!0});var d=w(a);c=E(d,"A",{href:!0,class:!0});var m=w(c);s=y(m,"Tan Li Hau"),m.forEach(h),d.forEach(h),l=$(f),u=E(f,"LI",{class:!0});var g=w(u);A=E(g,"A",{href:!0,class:!0});var p=w(A);L=y(p,"About"),p.forEach(h),g.forEach(h),b=$(f),I=E(f,"LI",{class:!0});var v=w(I);x=E(v,"A",{href:!0,class:!0});var J=w(x);M=y(J,"Writings"),J.forEach(h),v.forEach(h),S=$(f),k=E(f,"LI",{class:!0});var Q=w(k);N=E(Q,"A",{href:!0,class:!0});var X=w(N);D=y(X,"Talks"),X.forEach(h),Q.forEach(h),T=$(f),W=E(f,"LI",{class:!0});var Y=w(W);_=E(Y,"A",{href:!0,class:!0});var Z=w(_);R=y(Z,"Notes"),Z.forEach(h),Y.forEach(h),j=$(f),q=E(f,"LI",{class:!0});var ee=w(q);C=E(ee,"A",{href:!0,class:!0});var te=w(C);U=y(te,"Newsletter"),te.forEach(h),ee.forEach(h),O=$(f),P=E(f,"LI",{class:!0});var ne=w(P);H=E(ne,"A",{"aria-label":!0,href:!0,class:!0});var oe=w(H);F=E(oe,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var re=w(F);z=E(re,"path",{d:!0},1),w(z).forEach(h),re.forEach(h),oe.forEach(h),B=$(ne),G=E(ne,"A",{"aria-label":!0,href:!0,class:!0});var ae=w(G);V=E(ae,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var ce=w(V);K=E(ce,"path",{d:!0},1),w(K).forEach(h),ce.forEach(h),ae.forEach(h),ne.forEach(h),f.forEach(h),i.forEach(h),t.forEach(h),this.h()},h(){v(c,"href","/"),v(c,"class","svelte-f3e4uo"),v(a,"class","svelte-f3e4uo"),v(A,"href","/about"),v(A,"class","svelte-f3e4uo"),v(u,"class","svelte-f3e4uo"),v(x,"href","/blogs"),v(x,"class","svelte-f3e4uo"),v(I,"class","svelte-f3e4uo"),v(N,"href","/talks"),v(N,"class","svelte-f3e4uo"),v(k,"class","svelte-f3e4uo"),v(_,"href","/notes"),v(_,"class","svelte-f3e4uo"),v(W,"class","svelte-f3e4uo"),v(C,"href","/newsletter"),v(C,"class","svelte-f3e4uo"),v(q,"class","svelte-f3e4uo"),v(z,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),v(F,"viewBox","0 0 24 24"),v(F,"width","1em"),v(F,"height","1em"),v(F,"class","svelte-f3e4uo"),v(H,"aria-label","Twitter account"),v(H,"href","https://twitter.com/lihautan"),v(H,"class","svelte-f3e4uo"),v(K,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),v(V,"viewBox","0 0 24 24"),v(V,"width","1em"),v(V,"height","1em"),v(V,"class","svelte-f3e4uo"),v(G,"aria-label","Github account"),v(G,"href","https://github.com/tanhauhau"),v(G,"class","svelte-f3e4uo"),v(P,"class","social svelte-f3e4uo"),v(r,"class","svelte-f3e4uo"),v(n,"class","svelte-f3e4uo")},m(e,t){f(e,n,t),i(n,o),i(o,r),i(r,a),i(a,c),i(c,s),i(r,l),i(r,u),i(u,A),i(A,L),i(r,b),i(r,I),i(I,x),i(x,M),i(r,S),i(r,k),i(k,N),i(N,D),i(r,T),i(r,W),i(W,_),i(_,R),i(r,j),i(r,q),i(q,C),i(C,U),i(r,O),i(r,P),i(P,H),i(H,F),i(F,z),i(P,B),i(P,G),i(G,V),i(V,K)},p:e,i:e,o:e,d(e){e&&h(n)}}}class V extends B{constructor(e){super(),z(this,e,null,G,c,{})}}function K(e,t,n){const o=e.slice();return o[6]=t[n],o}function J(e,t,n){const o=e.slice();return o[6]=t[n],o}function Q(e){let t,n;return{c(){t=d("meta"),this.h()},l(e){t=E(e,"META",{name:!0,content:!0}),this.h()},h(){v(t,"name","keywords"),v(t,"content",n=e[6])},m(e,n){f(e,t,n)},p(e,o){4&o&&n!==(n=e[6])&&v(t,"content",n)},d(e){e&&h(t)}}}function X(e){let t,n,o=e[6]+"";return{c(){t=d("span"),n=g(o),this.h()},l(e){t=E(e,"SPAN",{class:!0});var r=w(t);n=y(r,o),r.forEach(h),this.h()},h(){v(t,"class","svelte-10cnqwo")},m(e,o){f(e,t,o),i(t,n)},p(e,t){4&t&&o!==(o=e[6]+"")&&A(n,o)},d(e){e&&h(t)}}}function Y(e){let t,n,o,r,a,c,m,L,b,I,x,M,S,k,N,D,T,W;document.title=t="Note: "+e[1]+" | Tan Li Hau";let _=e[2],R=[];for(let t=0;t<_.length;t+=1)R[t]=Q(J(e,_,t));I=new V({});let j=e[2],F=[];for(let t=0;t<j.length;t+=1)F[t]=X(K(e,j,t));const z=e[4].default,B=function(e,t,n,o){if(e){const r=s(e,t,n,o);return e[0](r)}}(z,e,e[3],null);return{c(){n=d("link"),o=d("meta"),r=d("meta");for(let e=0;e<R.length;e+=1)R[e].c();a=d("meta"),c=p(),m=d("a"),L=g("Skip to content"),b=p(),U(I.$$.fragment),x=p(),M=d("main"),S=d("h1"),k=g(e[1]),N=p();for(let e=0;e<F.length;e+=1)F[e].c();D=p(),T=d("article"),B&&B.c(),this.h()},l(t){const s=function(e,t=document.body){return Array.from(t.querySelectorAll(e))}('[data-svelte="svelte-ywf7m8"]',document.head);n=E(s,"LINK",{href:!0,rel:!0}),o=E(s,"META",{name:!0,content:!0}),r=E(s,"META",{name:!0,content:!0});for(let e=0;e<R.length;e+=1)R[e].l(s);a=E(s,"META",{itemprop:!0,content:!0}),s.forEach(h),c=$(t),m=E(t,"A",{href:!0,class:!0});var l=w(m);L=y(l,"Skip to content"),l.forEach(h),b=$(t),O(I.$$.fragment,t),x=$(t),M=E(t,"MAIN",{id:!0,class:!0});var i=w(M);S=E(i,"H1",{});var f=w(S);k=y(f,e[1]),f.forEach(h),N=$(i);for(let e=0;e<F.length;e+=1)F[e].l(i);D=$(i),T=E(i,"ARTICLE",{});var u=w(T);B&&B.l(u),u.forEach(h),i.forEach(h),this.h()},h(){v(n,"href","https://lihautan.com/notes/2019-10-14 - DRM Digital rights management/assets/blog-base-967d71e9.css"),v(n,"rel","stylesheet"),v(o,"name","og:title"),v(o,"content",e[0]),v(r,"name","og:type"),v(r,"content","website"),v(a,"itemprop","url"),v(a,"content","https%3A%2F%2Flihautan.com%2Fnotes%2F2019-10-14%20-%20DRM%20Digital%20rights%20management"),v(m,"href","#content"),v(m,"class","skip svelte-10cnqwo"),v(M,"id","content"),v(M,"class","blog svelte-10cnqwo")},m(e,t){i(document.head,n),i(document.head,o),i(document.head,r);for(let e=0;e<R.length;e+=1)R[e].m(document.head,null);i(document.head,a),f(e,c,t),f(e,m,t),i(m,L),f(e,b,t),P(I,e,t),f(e,x,t),f(e,M,t),i(M,S),i(S,k),i(M,N);for(let e=0;e<F.length;e+=1)F[e].m(M,null);i(M,D),i(M,T),B&&B.m(T,null),W=!0},p(e,[n]){if((!W||2&n)&&t!==(t="Note: "+e[1]+" | Tan Li Hau")&&(document.title=t),(!W||1&n)&&v(o,"content",e[0]),4&n){let t;for(_=e[2],t=0;t<_.length;t+=1){const o=J(e,_,t);R[t]?R[t].p(o,n):(R[t]=Q(o),R[t].c(),R[t].m(a.parentNode,a))}for(;t<R.length;t+=1)R[t].d(1);R.length=_.length}if((!W||2&n)&&A(k,e[1]),4&n){let t;for(j=e[2],t=0;t<j.length;t+=1){const o=K(e,j,t);F[t]?F[t].p(o,n):(F[t]=X(o),F[t].c(),F[t].m(M,D))}for(;t<F.length;t+=1)F[t].d(1);F.length=j.length}B&&B.p&&8&n&&l(B,z,e,e[3],n,null,null)},i(e){W||(q(I.$$.fragment,e),q(B,e),W=!0)},o(e){C(I.$$.fragment,e),C(B,e),W=!1},d(e){h(n),h(o),h(r),u(R,e),h(a),e&&h(c),e&&h(m),e&&h(b),H(I,e),e&&h(x),e&&h(M),u(F,e),B&&B.d(e)}}}function Z(e,t,n){let{name:o}=t,{title:r}=t,{tags:a=[]}=t,{$$slots:c={},$$scope:s}=t;return e.$set=e=>{"name"in e&&n(0,o=e.name),"title"in e&&n(1,r=e.title),"tags"in e&&n(2,a=e.tags),"$$scope"in e&&n(3,s=e.$$scope)},[o,r,a,s,c]}class ee extends B{constructor(e){super(),z(this,e,Z,Y,c,{name:0,title:1,tags:2})}}function te(e){let t,n,o,r,a,c,s,l,u,m,A,L,b,I,x,M,S,k,N,D,T,W,_,R,j,q,C,U,O,P,H,F,z,B,G,V,K,J,Q,X,Y,Z,ee,te,ne,oe,re,ae,ce,se,le,ie,fe,he;return{c(){t=d("ul"),n=d("li"),o=d("p"),r=g("Hardware Level"),a=p(),c=d("ul"),s=d("li"),l=g("DRM cryptography for certified players"),u=p(),m=d("li"),A=d("p"),L=g("Software Level"),b=p(),I=d("ul"),x=d("li"),M=g("prevent screen capturing:"),S=d("ul"),k=d("li"),N=g("Android "),D=d("ul"),T=d("li"),W=d("a"),_=g("android.media.projection"),R=p(),j=d("li"),q=d("a"),C=d("code"),U=g("getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE)"),O=p(),P=d("li"),H=g("iOS"),F=d("ul"),z=d("li"),B=d("a"),G=g("https://stackoverflow.com/questions/13484516/ios-detection-of-screenshot"),V=p(),K=d("li"),J=g("Windows"),Q=d("ul"),X=d("li"),Y=d("a"),Z=g("SetWindowDisplayAffinity"),ee=g(" Windows API with a "),te=d("code"),ne=g("WDA_MONITOR"),oe=g(" affinity."),re=p(),ae=d("p"),ce=g("Reference:"),se=p(),le=d("ul"),ie=d("li"),fe=d("a"),he=g("https://www.quora.com/What-technology-does-Netflix-and-other-streaming-services-use-to-prevent-someone-from-screen-capturing-a-movie-or-even-taking-a-screen-shot-I-am-a-Computer-Science-major-and-its-annoying-me-that-I-cant-figure-out-how-it-works"),this.h()},l(e){t=E(e,"UL",{});var i=w(t);n=E(i,"LI",{});var f=w(n);o=E(f,"P",{});var d=w(o);r=y(d,"Hardware Level"),d.forEach(h),a=$(f),c=E(f,"UL",{});var g=w(c);s=E(g,"LI",{});var p=w(s);l=y(p,"DRM cryptography for certified players"),p.forEach(h),g.forEach(h),f.forEach(h),u=$(i),m=E(i,"LI",{});var v=w(m);A=E(v,"P",{});var ue=w(A);L=y(ue,"Software Level"),ue.forEach(h),b=$(v),I=E(v,"UL",{});var de=w(I);x=E(de,"LI",{});var me=w(x);M=y(me,"prevent screen capturing:"),S=E(me,"UL",{});var ge=w(S);k=E(ge,"LI",{});var pe=w(k);N=y(pe,"Android "),D=E(pe,"UL",{});var ve=w(D);T=E(ve,"LI",{});var we=w(T);W=E(we,"A",{href:!0,rel:!0});var Ee=w(W);_=y(Ee,"android.media.projection"),Ee.forEach(h),we.forEach(h),R=$(ve),j=E(ve,"LI",{});var ye=w(j);q=E(ye,"A",{href:!0,rel:!0});var $e=w(q);C=E($e,"CODE",{});var Ae=w(C);U=y(Ae,"getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE)"),Ae.forEach(h),$e.forEach(h),ye.forEach(h),ve.forEach(h),pe.forEach(h),O=$(ge),P=E(ge,"LI",{});var Le=w(P);H=y(Le,"iOS"),F=E(Le,"UL",{});var be=w(F);z=E(be,"LI",{});var Ie=w(z);B=E(Ie,"A",{href:!0,rel:!0});var xe=w(B);G=y(xe,"https://stackoverflow.com/questions/13484516/ios-detection-of-screenshot"),xe.forEach(h),Ie.forEach(h),be.forEach(h),Le.forEach(h),V=$(ge),K=E(ge,"LI",{});var Me=w(K);J=y(Me,"Windows"),Q=E(Me,"UL",{});var Se=w(Q);X=E(Se,"LI",{});var ke=w(X);Y=E(ke,"A",{href:!0,rel:!0});var Ne=w(Y);Z=y(Ne,"SetWindowDisplayAffinity"),Ne.forEach(h),ee=y(ke," Windows API with a "),te=E(ke,"CODE",{});var De=w(te);ne=y(De,"WDA_MONITOR"),De.forEach(h),oe=y(ke," affinity."),ke.forEach(h),Se.forEach(h),Me.forEach(h),ge.forEach(h),me.forEach(h),de.forEach(h),v.forEach(h),i.forEach(h),re=$(e),ae=E(e,"P",{});var Te=w(ae);ce=y(Te,"Reference:"),Te.forEach(h),se=$(e),le=E(e,"UL",{});var We=w(le);ie=E(We,"LI",{});var _e=w(ie);fe=E(_e,"A",{href:!0,rel:!0});var Re=w(fe);he=y(Re,"https://www.quora.com/What-technology-does-Netflix-and-other-streaming-services-use-to-prevent-someone-from-screen-capturing-a-movie-or-even-taking-a-screen-shot-I-am-a-Computer-Science-major-and-its-annoying-me-that-I-cant-figure-out-how-it-works"),Re.forEach(h),_e.forEach(h),We.forEach(h),this.h()},h(){v(W,"href","https://developer.android.com/reference/android/media/projection/package-summary"),v(W,"rel","nofollow"),v(q,"href","https://developer.android.com/reference/android/view/WindowManager.LayoutParams.html"),v(q,"rel","nofollow"),v(B,"href","https://stackoverflow.com/questions/13484516/ios-detection-of-screenshot"),v(B,"rel","nofollow"),v(Y,"href","https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setwindowdisplayaffinity"),v(Y,"rel","nofollow"),v(fe,"href","https://www.quora.com/What-technology-does-Netflix-and-other-streaming-services-use-to-prevent-someone-from-screen-capturing-a-movie-or-even-taking-a-screen-shot-I-am-a-Computer-Science-major-and-its-annoying-me-that-I-cant-figure-out-how-it-works"),v(fe,"rel","nofollow")},m(e,h){f(e,t,h),i(t,n),i(n,o),i(o,r),i(n,a),i(n,c),i(c,s),i(s,l),i(t,u),i(t,m),i(m,A),i(A,L),i(m,b),i(m,I),i(I,x),i(x,M),i(x,S),i(S,k),i(k,N),i(k,D),i(D,T),i(T,W),i(W,_),i(D,R),i(D,j),i(j,q),i(q,C),i(C,U),i(S,O),i(S,P),i(P,H),i(P,F),i(F,z),i(z,B),i(B,G),i(S,V),i(S,K),i(K,J),i(K,Q),i(Q,X),i(X,Y),i(Y,Z),i(X,ee),i(X,te),i(te,ne),i(X,oe),f(e,re,h),f(e,ae,h),i(ae,ce),f(e,se,h),f(e,le,h),i(le,ie),i(ie,fe),i(fe,he)},d(e){e&&h(t),e&&h(re),e&&h(ae),e&&h(se),e&&h(le)}}}function ne(e){let n,o;const r=[oe];let a={$$slots:{default:[te]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)a=t(a,r[e]);return n=new ee({props:a}),{c(){U(n.$$.fragment)},l(e){O(n.$$.fragment,e)},m(e,t){P(n,e,t),o=!0},p(e,[t]){const o=0&t?function(e,t){const n={},o={},r={$$scope:1};let a=e.length;for(;a--;){const c=e[a],s=t[a];if(s){for(const e in c)e in s||(o[e]=1);for(const e in s)r[e]||(n[e]=s[e],r[e]=1);e[a]=s}else for(const e in c)r[e]=1}for(const e in o)e in n||(n[e]=void 0);return n}(r,[(a=oe,"object"==typeof a&&null!==a?a:{})]):{};var a;1&t&&(o.$$scope={dirty:t,ctx:e}),n.$set(o)},i(e){o||(q(n.$$.fragment,e),o=!0)},o(e){C(n.$$.fragment,e),o=!1},d(e){H(n,e)}}}const oe={slug:"notes/2019-10-14 - DRM Digital rights management",type:"notes",date:"2019-10-14",name:"DRM Digital rights management",title:"2019-10-14 - DRM Digital rights management",layout:"note"};class re extends B{constructor(e){super(),z(this,e,null,ne,c,{})}}setTimeout(()=>{new re({target:document.querySelector("#app"),hydrate:!0});if(document.querySelector(".twitter-tweet")){const e=document.createElement("script");e.async=!0,e.src="https://platform.twitter.com/widgets.js",e.charset="utf-8",document.body.appendChild(e)}if("loading"in HTMLImageElement.prototype){document.querySelectorAll('img[loading="lazy"]').forEach(e=>{e.src=e.dataset.src})}else{const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js",document.body.appendChild(e)}},3e3);
