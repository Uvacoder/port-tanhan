import{S as U,i as Y,s as Z,e as v,t as j,k as L,c as m,a as g,h as w,d as _,m as P,b as y,g as A,F as f,j as H,T as z,Y as B,O as M,Z as D}from"../../chunks/vendor-6bf294e3.js";function q(i,e,s){const t=i.slice();return t[1]=e[s].title,t[2]=e[s].description!==void 0?e[s].description:"",t[3]=e[s].tags,t[4]=e[s].url,t}function C(i,e,s){const t=i.slice();return t[7]=e[s],t}function F(i){let e,s=i[3],t=[];for(let l=0;l<s.length;l+=1)t[l]=O(C(i,s,l));return{c(){e=v("p");for(let l=0;l<t.length;l+=1)t[l].c()},l(l){e=m(l,"P",{});var n=g(e);for(let a=0;a<t.length;a+=1)t[a].l(n);n.forEach(_)},m(l,n){A(l,e,n);for(let a=0;a<t.length;a+=1)t[a].m(e,null)},p(l,n){if(n&1){s=l[3];let a;for(a=0;a<s.length;a+=1){const p=C(l,s,a);t[a]?t[a].p(p,n):(t[a]=O(p),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=s.length}},d(l){l&&_(e),z(t,l)}}}function O(i){let e,s=i[7]+"",t;return{c(){e=v("span"),t=j(s),this.h()},l(l){e=m(l,"SPAN",{class:!0});var n=g(e);t=w(n,s),n.forEach(_),this.h()},h(){y(e,"class","svelte-1deckyy")},m(l,n){A(l,e,n),f(e,t)},p(l,n){n&1&&s!==(s=l[7]+"")&&H(t,s)},d(l){l&&_(e)}}}function T(i,e){let s,t,l,n=e[1]+"",a,p,u,k=e[2]+"",o,c,h,b,r=e[3]&&F(e);return{key:i,first:null,c(){s=v("li"),t=v("a"),l=v("p"),a=j(n),p=L(),u=v("p"),o=j(k),c=L(),r&&r.c(),b=L(),this.h()},l(E){s=m(E,"LI",{class:!0});var d=g(s);t=m(d,"A",{href:!0,class:!0});var N=g(t);l=m(N,"P",{class:!0});var S=g(l);a=w(S,n),S.forEach(_),p=P(N),u=m(N,"P",{});var I=g(u);o=w(I,k),I.forEach(_),c=P(N),r&&r.l(N),N.forEach(_),b=P(d),d.forEach(_),this.h()},h(){y(l,"class","title svelte-1deckyy"),y(t,"href",h=e[4]),y(t,"class","svelte-1deckyy"),y(s,"class","svelte-1deckyy"),this.first=s},m(E,d){A(E,s,d),f(s,t),f(t,l),f(l,a),f(t,p),f(t,u),f(u,o),f(t,c),r&&r.m(t,null),f(s,b)},p(E,d){e=E,d&1&&n!==(n=e[1]+"")&&H(a,n),d&1&&k!==(k=e[2]+"")&&H(o,k),e[3]?r?r.p(e,d):(r=F(e),r.c(),r.m(t,null)):r&&(r.d(1),r=null),d&1&&h!==(h=e[4])&&y(t,"href",h)},d(E){E&&_(s),r&&r.d()}}}function G(i){let e,s,t,l,n,a=[],p=new Map,u=i[0];const k=o=>o[4];for(let o=0;o<u.length;o+=1){let c=q(i,u,o),h=k(c);p.set(h,a[o]=T(h,c))}return{c(){e=v("main"),s=v("h1"),t=j("Li Hau's Notes"),l=L(),n=v("ul");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){e=m(o,"MAIN",{class:!0});var c=g(e);s=m(c,"H1",{});var h=g(s);t=w(h,"Li Hau's Notes"),h.forEach(_),l=P(c),n=m(c,"UL",{class:!0});var b=g(n);for(let r=0;r<a.length;r+=1)a[r].l(b);b.forEach(_),c.forEach(_),this.h()},h(){y(n,"class","svelte-1deckyy"),y(e,"class","notes svelte-1deckyy")},m(o,c){A(o,e,c),f(e,s),f(s,t),f(e,l),f(e,n);for(let h=0;h<a.length;h+=1)a[h].m(n,null)},p(o,[c]){c&1&&(u=o[0],a=B(a,c,k,1,o,u,p,n,D,T,null,q))},i:M,o:M,d(o){o&&_(e);for(let c=0;c<a.length;c+=1)a[c].d()}}}async function Q({fetch:i}){return{props:{notes:await(await i("/api/notes.json")).json()}}}function J(i,e,s){let{notes:t=[]}=e;return i.$$set=l=>{"notes"in l&&s(0,t=l.notes)},[t]}class R extends U{constructor(e){super();Y(this,e,J,G,Z,{notes:0})}}export{R as default,Q as load};
