import{S as xe,i as we,s as Ce,C as ne,w as De,x as $e,y as Le,z as Oe,A as ye,q as Pe,o as be,B as Ie,r as Se,Y as ke,e as a,t as n,k as q,c as r,a as i,h as c,d as s,m as T,b as u,g as v,H as e,J as qe}from"../../chunks/vendor-da4388d4.js";import{B as Te}from"../../chunks/BlogLayout-86707f1c.js";import{_ as Be}from"../../chunks/twitter-card-image-a57df29d.js";import"../../chunks/stores-1fad7c36.js";import"../../chunks/ldjson-b0805387.js";/* empty css                                */function He(w){let o,_,d,y,l,f,H='<pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">ffmpeg -i </span><span style="color: var(--shiki-token-keyword)">~</span><span style="color: var(--shiki-color-text)">/Desktop/darkmode.mov -filter_complex </span><span style="color: var(--shiki-token-string-expression)">&quot;[0:v] fps=40, setpts=0.5*PTS&quot;</span><span style="color: var(--shiki-color-text)"> -f gif </span><span style="color: var(--shiki-token-keyword)">~</span><span style="color: var(--shiki-color-text)">/Desktop/darkmode-2.gif</span></span></code></pre>',A,m,C,Y,F,D,G,K,M,$,N,U,h,L,O,Q,R,W,k,P,X,Z,E,b,I,ee,te,se,g,S,oe,le,x,ae;return{c(){o=a("p"),_=n("movie to gif via "),d=a("code"),y=n("ffmpeg"),l=q(),f=a("div"),A=q(),m=a("p"),C=a("code"),Y=n("-i"),F=n(` specify input file
`),D=a("code"),G=n("-f"),K=n(` specify format
lastly sepcify output file`),M=q(),$=a("p"),N=n("extras:"),U=q(),h=a("ul"),L=a("li"),O=a("code"),Q=n("-ss"),R=n(" for seeking"),W=q(),k=a("li"),P=a("code"),X=n("-filter_complex"),Z=n(" to do filtering"),E=a("ul"),b=a("li"),I=a("code"),ee=n("fps=40"),te=n(" control frame per second, more or less detail"),se=q(),g=a("li"),S=a("code"),oe=n("setpts=0.5*PTS"),le=n(" speed up the video "),x=a("a"),ae=n("reference"),this.h()},l(t){o=r(t,"P",{});var p=i(o);_=c(p,"movie to gif via "),d=r(p,"CODE",{class:!0});var ce=i(d);y=c(ce,"ffmpeg"),ce.forEach(s),p.forEach(s),l=T(t),f=r(t,"DIV",{class:!0});var ge=i(f);ge.forEach(s),A=T(t),m=r(t,"P",{});var B=i(m);C=r(B,"CODE",{class:!0});var fe=i(C);Y=c(fe,"-i"),fe.forEach(s),F=c(B,` specify input file
`),D=r(B,"CODE",{class:!0});var pe=i(D);G=c(pe,"-f"),pe.forEach(s),K=c(B,` specify format
lastly sepcify output file`),B.forEach(s),M=T(t),$=r(t,"P",{});var de=i($);N=c(de,"extras:"),de.forEach(s),U=T(t),h=r(t,"UL",{});var j=i(h);L=r(j,"LI",{});var re=i(L);O=r(re,"CODE",{class:!0});var _e=i(O);Q=c(_e,"-ss"),_e.forEach(s),R=c(re," for seeking"),re.forEach(s),W=T(j),k=r(j,"LI",{});var z=i(k);P=r(z,"CODE",{class:!0});var ue=i(P);X=c(ue,"-filter_complex"),ue.forEach(s),Z=c(z," to do filtering"),E=r(z,"UL",{});var J=i(E);b=r(J,"LI",{});var ie=i(b);I=r(ie,"CODE",{class:!0});var me=i(I);ee=c(me,"fps=40"),me.forEach(s),te=c(ie," control frame per second, more or less detail"),ie.forEach(s),se=T(J),g=r(J,"LI",{});var V=i(g);S=r(V,"CODE",{class:!0});var ve=i(S);oe=c(ve,"setpts=0.5*PTS"),ve.forEach(s),le=c(V," speed up the video "),x=r(V,"A",{href:!0,rel:!0});var he=i(x);ae=c(he,"reference"),he.forEach(s),V.forEach(s),J.forEach(s),z.forEach(s),j.forEach(s),this.h()},h(){u(d,"class","inline"),u(f,"class","code-section"),u(C,"class","inline"),u(D,"class","inline"),u(O,"class","inline"),u(P,"class","inline"),u(I,"class","inline"),u(S,"class","inline"),u(x,"href","https://trac.ffmpeg.org/wiki/How%20to%20speed%20up%20/%20slow%20down%20a%20video"),u(x,"rel","nofollow")},m(t,p){v(t,o,p),e(o,_),e(o,d),e(d,y),v(t,l,p),v(t,f,p),f.innerHTML=H,v(t,A,p),v(t,m,p),e(m,C),e(C,Y),e(m,F),e(m,D),e(D,G),e(m,K),v(t,M,p),v(t,$,p),e($,N),v(t,U,p),v(t,h,p),e(h,L),e(L,O),e(O,Q),e(L,R),e(h,W),e(h,k),e(k,P),e(P,X),e(k,Z),e(k,E),e(E,b),e(b,I),e(I,ee),e(b,te),e(E,se),e(E,g),e(g,S),e(S,oe),e(g,le),e(g,x),e(x,ae)},p:qe,d(t){t&&s(o),t&&s(l),t&&s(f),t&&s(A),t&&s(m),t&&s(M),t&&s($),t&&s(U),t&&s(h)}}}function Ae(w){let o,_;const d=[w[0],Ee];let y={$$slots:{default:[He]},$$scope:{ctx:w}};for(let l=0;l<d.length;l+=1)y=ne(y,d[l]);return o=new Te({props:y}),{c(){De(o.$$.fragment)},l(l){$e(o.$$.fragment,l)},m(l,f){Le(o,l,f),_=!0},p(l,[f]){const H=f&1?Oe(d,[f&1&&ye(l[0]),f&0&&ye(Ee)]):{};f&2&&(H.$$scope={dirty:f,ctx:l}),o.$set(H)},i(l){_||(Pe(o.$$.fragment,l),_=!0)},o(l){be(o.$$.fragment,l),_=!1},d(l){Ie(o,l)}}}const Ee={title:"Converting movie to gif",tags:["ffmpeg"],description:"movie to gif via `ffmpeg``-i` specify input file\n`-f` specify format\nlastly sepcify output fileextras:`-ss` for seeking`-filter_complex` to do filtering`fps=40` control frame per second, more or less detail..."};function Me(w,o,_){return Se("blog",{image:Be}),w.$$set=d=>{_(0,o=ne(ne({},o),ke(d)))},o=ke(o),[o]}class Fe extends xe{constructor(o){super();we(this,o,Me,Ae,Ce,{})}}export{Fe as default,Ee as metadata};