import{S as F,i as J,s as V,e as k,t as W,k as K,F as N,c as C,a as I,h as w,d as l,m as M,G as P,f as E,b as i,g as f,H,aq as T,I as q,j as z,J as D,N as A}from"../../../../chunks/vendor-9710682b.js";function B(o){let u,s,p,n,r,y,a,d,_,b,v,h,m,c,S,G;return{c(){u=k("div"),s=k("h1"),p=W(o[0]),n=K(),r=k("input"),y=K(),a=k("input"),d=K(),_=k("input"),b=K(),v=N("svg"),h=N("filter"),m=N("feMorphology"),c=N("feComposite"),this.h()},l(e){u=C(e,"DIV",{class:!0,style:!0});var t=I(u);s=C(t,"H1",{style:!0,class:!0});var g=I(s);p=w(g,o[0]),g.forEach(l),t.forEach(l),n=M(e),r=C(e,"INPUT",{}),y=M(e),a=C(e,"INPUT",{type:!0}),d=M(e),_=C(e,"INPUT",{type:!0}),b=M(e),v=P(e,"svg",{height:!0,class:!0});var j=I(v);h=P(j,"filter",{id:!0});var U=I(h);m=P(U,"feMorphology",{result:!0,operator:!0,radius:!0}),I(m).forEach(l),c=P(U,"feComposite",{operator:!0,in:!0,in2:!0}),I(c).forEach(l),U.forEach(l),j.forEach(l),this.h()},h(){E(s,"filter","url(#outline)"),E(s,"color",o[1]),i(s,"class","svelte-1foi548"),i(u,"class","canvas svelte-1foi548"),E(u,"background",o[2]),i(a,"type","color"),i(_,"type","color"),i(m,"result","THICK"),i(m,"operator","dilate"),i(m,"radius","4"),i(c,"operator","out"),i(c,"in","THICK"),i(c,"in2","SourceGraphic"),i(h,"id","outline"),i(v,"height","0"),i(v,"class","svelte-1foi548")},m(e,t){f(e,u,t),H(u,s),H(s,p),f(e,n,t),f(e,r,t),T(r,o[0]),f(e,y,t),f(e,a,t),T(a,o[1]),f(e,d,t),f(e,_,t),T(_,o[2]),f(e,b,t),f(e,v,t),H(v,h),H(h,m),H(h,c),S||(G=[q(r,"input",o[3]),q(a,"input",o[4]),q(_,"input",o[5])],S=!0)},p(e,[t]){t&1&&z(p,e[0]),t&2&&E(s,"color",e[1]),t&4&&E(u,"background",e[2]),t&1&&r.value!==e[0]&&T(r,e[0]),t&2&&T(a,e[1]),t&4&&T(_,e[2])},i:D,o:D,d(e){e&&l(u),e&&l(n),e&&l(r),e&&l(y),e&&l(a),e&&l(d),e&&l(_),e&&l(b),e&&l(v),S=!1,A(G)}}}function L(o,u,s){let p="Hello World",n="#ff0000",r="#ffff00";function y(){p=this.value,s(0,p)}function a(){n=this.value,s(1,n)}function d(){r=this.value,s(2,r)}return[p,n,r,y,a,d]}class Q extends F{constructor(u){super();J(this,u,L,B,V,{})}}export{Q as default};
