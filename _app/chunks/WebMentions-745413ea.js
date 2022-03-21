import{v as O,S as P,i as Q,s as R,e as g,k as H,t as T,c as y,m as A,a as E,h as L,d as h,b as p,g as v,F as k,Q as q,j as I,l as F,T as J,O as N,U as K}from"./vendor-6bf294e3.js";const W=new Map;function ne(){O(()=>{const n=document.querySelectorAll(".copy[data-copy]");function e(r){if(navigator.clipboard&&typeof navigator.clipboard.writeText=="function"){const t=r.currentTarget;navigator.clipboard.writeText(t.getAttribute("data-copy")),X(t)}}return n.forEach(r=>{r.addEventListener("click",e)}),()=>{n.forEach(r=>{r.removeEventListener("click",e)})}})}function X(n){W.has(n)?clearTimeout(W.get(n)):n.dataset.original=n.innerHTML,n.innerHTML='<svg viewBox="64 64 896 896" focusable="false" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>';const e=setTimeout(()=>{n.innerHTML=n.dataset.original,delete n.dataset.original,W.delete(n)},2e3);W.set(n,e)}function C(n,e,r){const t=n.slice();return t[6]=e[r],t}function B(n){let e,r,t,l,i,a,u,o=n[0],f=[];for(let s=0;s<o.length;s+=1)f[s]=V(C(n,o,s));let _=n[1]&&z(n);return{c(){e=g("hr"),r=H(),t=g("h2"),l=T("WebMentions"),i=H(),a=g("ul");for(let s=0;s<f.length;s+=1)f[s].c();u=H(),_&&_.c(),this.h()},l(s){e=y(s,"HR",{class:!0}),r=A(s),t=y(s,"H2",{});var c=E(t);l=L(c,"WebMentions"),c.forEach(h),i=A(s),a=y(s,"UL",{class:!0});var m=E(a);for(let M=0;M<f.length;M+=1)f[M].l(m);u=A(m),_&&_.l(m),m.forEach(h),this.h()},h(){p(e,"class","svelte-9vytr4"),p(a,"class","svelte-9vytr4")},m(s,c){v(s,e,c),v(s,r,c),v(s,t,c),k(t,l),v(s,i,c),v(s,a,c);for(let m=0;m<f.length;m+=1)f[m].m(a,null);k(a,u),_&&_.m(a,null)},p(s,c){if(c&1){o=s[0];let m;for(m=0;m<o.length;m+=1){const M=C(s,o,m);f[m]?f[m].p(M,c):(f[m]=V(M),f[m].c(),f[m].m(a,u))}for(;m<f.length;m+=1)f[m].d(1);f.length=o.length}s[1]?_?_.p(s,c):(_=z(s),_.c(),_.m(a,null)):_&&(_.d(1),_=null)},d(s){s&&h(e),s&&h(r),s&&h(t),s&&h(i),s&&h(a),J(f,s),_&&_.d()}}}function D(n){let e,r,t=n[6].author.name+"",l,i,a=n[6].author.photo&&U(n);return{c(){e=g("a"),a&&a.c(),r=H(),l=T(t),this.h()},l(u){e=y(u,"A",{class:!0,href:!0,target:!0,rel:!0});var o=E(e);a&&a.l(o),r=A(o),l=L(o,t),o.forEach(h),this.h()},h(){p(e,"class","author svelte-9vytr4"),p(e,"href",i=n[6].author.url),p(e,"target","_blank"),p(e,"rel","noreferrer noopener")},m(u,o){v(u,e,o),a&&a.m(e,null),k(e,r),k(e,l)},p(u,o){u[6].author.photo?a?a.p(u,o):(a=U(u),a.c(),a.m(e,r)):a&&(a.d(1),a=null),o&1&&t!==(t=u[6].author.name+"")&&I(l,t),o&1&&i!==(i=u[6].author.url)&&p(e,"href",i)},d(u){u&&h(e),a&&a.d()}}}function U(n){let e,r,t;return{c(){e=g("img"),this.h()},l(l){e=y(l,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){p(e,"class","avatar svelte-9vytr4"),q(e.src,r=n[6].author.photo)||p(e,"src",r),p(e,"alt",t=n[6].author.name)},m(l,i){v(l,e,i)},p(l,i){i&1&&!q(e.src,r=l[6].author.photo)&&p(e,"src",r),i&1&&t!==(t=l[6].author.name)&&p(e,"alt",t)},d(l){l&&h(e)}}}function Y(n){let e="in ",r,t,l,i=n[6].url+"",a,u;return{c(){r=T(e),t=H(),l=g("a"),a=T(i),this.h()},l(o){r=L(o,e),t=A(o),l=y(o,"A",{href:!0,target:!0,rel:!0});var f=E(l);a=L(f,i),f.forEach(h),this.h()},h(){p(l,"href",u=n[6].url),p(l,"target","_blank"),p(l,"rel","noreferrer noopener")},m(o,f){v(o,r,f),v(o,t,f),v(o,l,f),k(l,a)},p(o,f){f&1&&i!==(i=o[6].url+"")&&I(a,i),f&1&&u!==(u=o[6].url)&&p(l,"href",u)},d(o){o&&h(r),o&&h(t),o&&h(l)}}}function Z(n){let e;function r(i,a){return i[6].content.html?x:$}let t=r(n),l=t(n);return{c(){l.c(),e=F()},l(i){l.l(i),e=F()},m(i,a){l.m(i,a),v(i,e,a)},p(i,a){t===(t=r(i))&&l?l.p(i,a):(l.d(1),l=t(i),l&&(l.c(),l.m(e.parentNode,e)))},d(i){l.d(i),i&&h(e)}}}function $(n){let e,r=n[6].content.text+"",t;return{c(){e=g("div"),t=T(r),this.h()},l(l){e=y(l,"DIV",{class:!0});var i=E(e);t=L(i,r),i.forEach(h),this.h()},h(){p(e,"class","content svelte-9vytr4")},m(l,i){v(l,e,i),k(e,t)},p(l,i){i&1&&r!==(r=l[6].content.text+"")&&I(t,r)},d(l){l&&h(e)}}}function x(n){let e,r=G(n[6].content.html)+"";return{c(){e=g("div"),this.h()},l(t){e=y(t,"DIV",{class:!0});var l=E(e);l.forEach(h),this.h()},h(){p(e,"class","content svelte-9vytr4")},m(t,l){v(t,e,l),e.innerHTML=r},p(t,l){l&1&&r!==(r=G(t[6].content.html)+"")&&(e.innerHTML=r)},d(t){t&&h(e)}}}function V(n){let e,r,t,l=n[6].author.name?" mentioned":"Mentioned",i,a,u,o,f,_=n[6]["wm-received"].slice(0,10)+"",s,c=n[6].author.name&&D(n);function m(d,b){return d[6].content?Z:Y}let M=m(n),w=M(n);return{c(){e=g("li"),c&&c.c(),r=H(),t=g("a"),i=T(l),u=H(),w.c(),o=H(),f=g("span"),s=T(_),this.h()},l(d){e=y(d,"LI",{class:!0});var b=E(e);c&&c.l(b),r=A(b),t=y(b,"A",{href:!0,target:!0,rel:!0});var S=E(t);i=L(S,l),S.forEach(h),u=A(b),w.l(b),o=A(b),f=y(b,"SPAN",{class:!0});var j=E(f);s=L(j,_),j.forEach(h),b.forEach(h),this.h()},h(){p(t,"href",a=n[6].url),p(t,"target","_blank"),p(t,"rel","noreferrer noopener"),p(f,"class","timestamp svelte-9vytr4"),p(e,"class","svelte-9vytr4")},m(d,b){v(d,e,b),c&&c.m(e,null),k(e,r),k(e,t),k(t,i),k(e,u),w.m(e,null),k(e,o),k(e,f),k(f,s)},p(d,b){d[6].author.name?c?c.p(d,b):(c=D(d),c.c(),c.m(e,r)):c&&(c.d(1),c=null),b&1&&l!==(l=d[6].author.name?" mentioned":"Mentioned")&&I(i,l),b&1&&a!==(a=d[6].url)&&p(t,"href",a),M===(M=m(d))&&w?w.p(d,b):(w.d(1),w=M(d),w&&(w.c(),w.m(e,o))),b&1&&_!==(_=d[6]["wm-received"].slice(0,10)+"")&&I(s,_)},d(d){d&&h(e),c&&c.d(),w.d()}}}function z(n){let e;function r(i,a){return i[2]?te:ee}let t=r(n),l=t(n);return{c(){l.c(),e=F()},l(i){l.l(i),e=F()},m(i,a){l.m(i,a),v(i,e,a)},p(i,a){t===(t=r(i))&&l?l.p(i,a):(l.d(1),l=t(i),l&&(l.c(),l.m(e.parentNode,e)))},d(i){l.d(i),i&&h(e)}}}function ee(n){let e,r,t,l;return{c(){e=g("li"),r=T("Fetch More"),this.h()},l(i){e=y(i,"LI",{class:!0});var a=E(e);r=L(a,"Fetch More"),a.forEach(h),this.h()},h(){p(e,"class","more svelte-9vytr4")},m(i,a){v(i,e,a),k(e,r),t||(l=K(e,"click",n[3]),t=!0)},p:N,d(i){i&&h(e),t=!1,l()}}}function te(n){let e;return{c(){e=T("Fetching...")},l(r){e=L(r,"Fetching...")},m(r,t){v(r,e,t)},p:N,d(r){r&&h(e)}}}function le(n){let e,r=n[0].length>0&&B(n);return{c(){r&&r.c(),e=F()},l(t){r&&r.l(t),e=F()},m(t,l){r&&r.m(t,l),v(t,e,l)},p(t,[l]){t[0].length>0?r?r.p(t,l):(r=B(t),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},i:N,o:N,d(t){r&&r.d(t),t&&h(e)}}}function G(n){return n.length>100?n.slice(0,100)+"...":n}function re(n,e,r){let{link:t}=e,l=0,i=[],a=!1,u=!1;O(()=>{o()});async function o(){if(u)return;r(2,u=!0);const f=await fetch(`https://webmention.io/api/mentions.jf2?page=${l}&per-page=20&wm-property=mention-of&target=${t}`),{children:_}=await f.json();r(1,a=_.length===20);const s=_.filter(c=>c.type==="entry"&&c["wm-property"]==="mention-of"&&!c["wm-private"]);r(0,i=i.concat(s)),l++,r(2,u=!1)}return n.$$set=f=>{"link"in f&&r(4,t=f.link)},[i,a,u,o,t]}class ae extends P{constructor(e){super();Q(this,e,re,le,R,{link:4})}}export{ae as W,ne as i};
