function e(){}function t(e){return e()}function a(){return Object.create(null)}function s(e){e.forEach(t)}function n(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function r(e,t){e.appendChild(t)}function l(e,t,a){e.insertBefore(t,a||null)}function c(e){e.parentNode.removeChild(e)}function i(e){return document.createElement(e)}function u(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function f(e){return document.createTextNode(e)}function h(){return f(" ")}function d(e,t,a){null==a?e.removeAttribute(t):e.getAttribute(t)!==a&&e.setAttribute(t,a)}function v(e){return Array.from(e.childNodes)}function m(e,t,a,s){for(let s=0;s<e.length;s+=1){const n=e[s];if(n.nodeName===t){let t=0;const o=[];for(;t<n.attributes.length;){const e=n.attributes[t++];a[e.name]||o.push(e.name)}for(let e=0;e<o.length;e++)n.removeAttribute(o[e]);return e.splice(s,1)[0]}}return s?u(t):i(t)}function p(e,t){for(let a=0;a<e.length;a+=1){const s=e[a];if(3===s.nodeType)return s.data=""+t,e.splice(a,1)[0]}return f(t)}function g(e){return p(e," ")}function b(e,t){e.value=null==t?"":t}let w;function E(e){w=e}const $=[],y=[],A=[],I=[],x=Promise.resolve();let k=!1;function L(e){A.push(e)}let N=!1;const _=new Set;function S(){if(!N){N=!0;do{for(let e=0;e<$.length;e+=1){const t=$[e];E(t),P(t.$$)}for($.length=0;y.length;)y.pop()();for(let e=0;e<A.length;e+=1){const t=A[e];_.has(t)||(_.add(t),t())}A.length=0}while($.length);for(;I.length;)I.pop()();k=!1,N=!1,_.clear()}}function P(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}const T=new Set;function H(e,t){e&&e.i&&(T.delete(e),e.i(t))}function B(e,t,a,s){if(e&&e.o){if(T.has(e))return;T.add(e),(void 0).c.push(()=>{T.delete(e),s&&(a&&e.d(1),s())}),e.o(t)}}function M(e){e&&e.c()}function V(e,t){e&&e.l(t)}function j(e,a,o){const{fragment:r,on_mount:l,on_destroy:c,after_update:i}=e.$$;r&&r.m(a,o),L(()=>{const a=l.map(t).filter(n);c?c.push(...a):s(a),e.$$.on_mount=[]}),i.forEach(L)}function D(e,t){const a=e.$$;null!==a.fragment&&(s(a.on_destroy),a.fragment&&a.fragment.d(t),a.on_destroy=a.fragment=null,a.ctx=[])}function R(e,t){-1===e.$$.dirty[0]&&($.push(e),k||(k=!0,x.then(S)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function U(t,n,o,r,l,i,u=[-1]){const f=w;E(t);const h=n.props||{},d=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:l,bound:a(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:a(),dirty:u};let m=!1;if(d.ctx=o?o(t,h,(e,a,...s)=>{const n=s.length?s[0]:a;return d.ctx&&l(d.ctx[e],d.ctx[e]=n)&&(d.bound[e]&&d.bound[e](n),m&&R(t,e)),a}):[],d.update(),m=!0,s(d.before_update),d.fragment=!!r&&r(d.ctx),n.target){if(n.hydrate){const e=v(n.target);d.fragment&&d.fragment.l(e),e.forEach(c)}else d.fragment&&d.fragment.c();n.intro&&H(t.$$.fragment),j(t,n.target,n.anchor),S()}E(f)}class W{$destroy(){D(this,1),this.$destroy=e}$on(e,t){const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(t),()=>{const e=a.indexOf(t);-1!==e&&a.splice(e,1)}}$set(){}}function z(t){let a,s,n,o,b,w,E,$,y,A,I,x,k,L,N,_,S,P,T,H,B,M,V,j,D,R,U,W,z,C,G,O,q,Y,F;return{c(){a=i("header"),s=i("nav"),n=i("ul"),o=i("li"),b=i("a"),w=f("Tan Li Hau"),E=h(),$=i("li"),y=i("a"),A=f("About"),I=h(),x=i("li"),k=i("a"),L=f("Writings"),N=h(),_=i("li"),S=i("a"),P=f("Talks"),T=h(),H=i("li"),B=i("a"),M=f("Notes"),V=h(),j=i("li"),D=i("a"),R=f("Newsletter"),U=h(),W=i("li"),z=i("a"),C=u("svg"),G=u("path"),O=h(),q=i("a"),Y=u("svg"),F=u("path"),this.h()},l(e){a=m(e,"HEADER",{class:!0});var t=v(a);s=m(t,"NAV",{});var r=v(s);n=m(r,"UL",{class:!0});var l=v(n);o=m(l,"LI",{class:!0});var i=v(o);b=m(i,"A",{href:!0,class:!0});var u=v(b);w=p(u,"Tan Li Hau"),u.forEach(c),i.forEach(c),E=g(l),$=m(l,"LI",{class:!0});var f=v($);y=m(f,"A",{href:!0,class:!0});var h=v(y);A=p(h,"About"),h.forEach(c),f.forEach(c),I=g(l),x=m(l,"LI",{class:!0});var d=v(x);k=m(d,"A",{href:!0,class:!0});var J=v(k);L=p(J,"Writings"),J.forEach(c),d.forEach(c),N=g(l),_=m(l,"LI",{class:!0});var K=v(_);S=m(K,"A",{href:!0,class:!0});var Q=v(S);P=p(Q,"Talks"),Q.forEach(c),K.forEach(c),T=g(l),H=m(l,"LI",{class:!0});var X=v(H);B=m(X,"A",{href:!0,class:!0});var Z=v(B);M=p(Z,"Notes"),Z.forEach(c),X.forEach(c),V=g(l),j=m(l,"LI",{class:!0});var ee=v(j);D=m(ee,"A",{href:!0,class:!0});var te=v(D);R=p(te,"Newsletter"),te.forEach(c),ee.forEach(c),U=g(l),W=m(l,"LI",{class:!0});var ae=v(W);z=m(ae,"A",{"aria-label":!0,href:!0,class:!0});var se=v(z);C=m(se,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var ne=v(C);G=m(ne,"path",{d:!0},1),v(G).forEach(c),ne.forEach(c),se.forEach(c),O=g(ae),q=m(ae,"A",{"aria-label":!0,href:!0,class:!0});var oe=v(q);Y=m(oe,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var re=v(Y);F=m(re,"path",{d:!0},1),v(F).forEach(c),re.forEach(c),oe.forEach(c),ae.forEach(c),l.forEach(c),r.forEach(c),t.forEach(c),this.h()},h(){d(b,"href","/"),d(b,"class","svelte-f3e4uo"),d(o,"class","svelte-f3e4uo"),d(y,"href","/about"),d(y,"class","svelte-f3e4uo"),d($,"class","svelte-f3e4uo"),d(k,"href","/blogs"),d(k,"class","svelte-f3e4uo"),d(x,"class","svelte-f3e4uo"),d(S,"href","/talks"),d(S,"class","svelte-f3e4uo"),d(_,"class","svelte-f3e4uo"),d(B,"href","/notes"),d(B,"class","svelte-f3e4uo"),d(H,"class","svelte-f3e4uo"),d(D,"href","/newsletter"),d(D,"class","svelte-f3e4uo"),d(j,"class","svelte-f3e4uo"),d(G,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),d(C,"viewBox","0 0 24 24"),d(C,"width","1em"),d(C,"height","1em"),d(C,"class","svelte-f3e4uo"),d(z,"aria-label","Twitter account"),d(z,"href","https://twitter.com/lihautan"),d(z,"class","svelte-f3e4uo"),d(F,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),d(Y,"viewBox","0 0 24 24"),d(Y,"width","1em"),d(Y,"height","1em"),d(Y,"class","svelte-f3e4uo"),d(q,"aria-label","Github account"),d(q,"href","https://github.com/tanhauhau"),d(q,"class","svelte-f3e4uo"),d(W,"class","social svelte-f3e4uo"),d(n,"class","svelte-f3e4uo"),d(a,"class","svelte-f3e4uo")},m(e,t){l(e,a,t),r(a,s),r(s,n),r(n,o),r(o,b),r(b,w),r(n,E),r(n,$),r($,y),r(y,A),r(n,I),r(n,x),r(x,k),r(k,L),r(n,N),r(n,_),r(_,S),r(S,P),r(n,T),r(n,H),r(H,B),r(B,M),r(n,V),r(n,j),r(j,D),r(D,R),r(n,U),r(n,W),r(W,z),r(z,C),r(C,G),r(W,O),r(W,q),r(q,Y),r(Y,F)},p:e,i:e,o:e,d(e){e&&c(a)}}}class C extends W{constructor(e){super(),U(this,e,null,z,o,{})}}function G(t){let a,s,n,o,u,w,E,$,y,A,I,x,k,L,N,_,S,P,T,H;return{c(){a=i("div"),s=i("h1"),n=f("Subscribe to my newsletter"),o=h(),u=i("h2"),w=f("Get the latest blog posts and project updates delivered right to your inbox"),E=h(),$=i("form"),y=i("div"),A=i("input"),I=h(),x=i("input"),L=h(),N=i("input"),_=h(),S=i("p"),P=f("Powered by Buttondown."),this.h()},l(e){a=m(e,"DIV",{class:!0});var t=v(a);s=m(t,"H1",{});var r=v(s);n=p(r,"Subscribe to my newsletter"),r.forEach(c),o=g(t),u=m(t,"H2",{class:!0});var l=v(u);w=p(l,"Get the latest blog posts and project updates delivered right to your inbox"),l.forEach(c),E=g(t),$=m(t,"FORM",{action:!0,method:!0,target:!0,onsubmit:!0,class:!0});var i=v($);y=m(i,"DIV",{class:!0});var f=v(y);A=m(f,"INPUT",{type:!0,name:!0,id:!0,"aria-label":!0,placeholder:!0,class:!0}),I=g(f),x=m(f,"INPUT",{type:!0,value:!0,disabled:!0,class:!0}),f.forEach(c),L=g(i),N=m(i,"INPUT",{type:!0,value:!0,name:!0,class:!0}),_=g(i),S=m(i,"P",{class:!0});var h=v(S);P=p(h,"Powered by Buttondown."),h.forEach(c),i.forEach(c),t.forEach(c),this.h()},h(){d(u,"class","svelte-1k1s1co"),d(A,"type","email"),d(A,"name","email"),d(A,"id","bd-email"),d(A,"aria-label","email address"),d(A,"placeholder","youremail@example.com"),d(A,"class","svelte-1k1s1co"),d(x,"type","submit"),x.value="Subscribe",x.disabled=k=!t[0],d(x,"class","svelte-1k1s1co"),d(y,"class","form-item svelte-1k1s1co"),d(N,"type","hidden"),N.value="1",d(N,"name","embed"),d(N,"class","svelte-1k1s1co"),d(S,"class","svelte-1k1s1co"),d($,"action","https://buttondown.email/api/emails/embed-subscribe/lihautan"),d($,"method","post"),d($,"target","popupwindow"),d($,"onsubmit","window.open('https://buttondown.email/lihautan', 'popupwindow')"),d($,"class","embeddable-buttondown-form"),d(a,"class","form svelte-1k1s1co")},m(e,c){var i,f,h,d;l(e,a,c),r(a,s),r(s,n),r(a,o),r(a,u),r(u,w),r(a,E),r(a,$),r($,y),r(y,A),b(A,t[0]),r(y,I),r(y,x),r($,L),r($,N),r($,_),r($,S),r(S,P),T||(i=A,f="input",h=t[1],i.addEventListener(f,h,d),H=()=>i.removeEventListener(f,h,d),T=!0)},p(e,[t]){1&t&&A.value!==e[0]&&b(A,e[0]),1&t&&k!==(k=!e[0])&&(x.disabled=k)},i:e,o:e,d(e){e&&c(a),T=!1,H()}}}function O(e,t,a){let s;return[s,function(){s=this.value,a(0,s)}]}class q extends W{constructor(e){super(),U(this,e,O,G,o,{})}}function Y(t){let a,s,n,o,u,b,w,E,$,y,A,I,x,k,L,N,_,S,P,T,R,U;return a=new C({}),R=new q({}),{c(){M(a.$$.fragment),s=h(),n=i("main"),o=i("h1"),u=f("Li Hau's Weekly Learning"),b=h(),w=i("p"),E=f("In this weekly newsletter I'm going to share with you what I've learned in this week in the world of web development, with my notes and thoughts."),$=h(),y=i("p"),A=f("I won't spam though, I promise."),I=h(),x=i("p"),k=f("You can also "),L=i("a"),N=f("subscribe via RSS"),_=f("!"),S=h(),P=i("div"),T=h(),M(R.$$.fragment),this.h()},l(e){V(a.$$.fragment,e),s=g(e),n=m(e,"MAIN",{class:!0});var t=v(n);o=m(t,"H1",{});var r=v(o);u=p(r,"Li Hau's Weekly Learning"),r.forEach(c),b=g(t),w=m(t,"P",{});var l=v(w);E=p(l,"In this weekly newsletter I'm going to share with you what I've learned in this week in the world of web development, with my notes and thoughts."),l.forEach(c),$=g(t),y=m(t,"P",{});var i=v(y);A=p(i,"I won't spam though, I promise."),i.forEach(c),I=g(t),x=m(t,"P",{});var f=v(x);k=p(f,"You can also "),L=m(f,"A",{href:!0});var h=v(L);N=p(h,"subscribe via RSS"),h.forEach(c),_=p(f,"!"),f.forEach(c),S=g(t),P=m(t,"DIV",{class:!0}),v(P).forEach(c),T=g(t),V(R.$$.fragment,t),t.forEach(c),this.h()},h(){d(L,"href","https://buttondown.email/lihautan/rss"),d(P,"class","svelte-gomz29"),d(n,"class","svelte-gomz29")},m(e,t){j(a,e,t),l(e,s,t),l(e,n,t),r(n,o),r(o,u),r(n,b),r(n,w),r(w,E),r(n,$),r(n,y),r(y,A),r(n,I),r(n,x),r(x,k),r(x,L),r(L,N),r(x,_),r(n,S),r(n,P),r(n,T),j(R,n,null),U=!0},p:e,i(e){U||(H(a.$$.fragment,e),H(R.$$.fragment,e),U=!0)},o(e){B(a.$$.fragment,e),B(R.$$.fragment,e),U=!1},d(e){D(a,e),e&&c(s),e&&c(n),D(R)}}}new class extends W{constructor(e){super(),U(this,e,null,Y,o,{})}}({target:document.querySelector("#app"),hydrate:!0});