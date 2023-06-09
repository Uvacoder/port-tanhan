import{S as v,i as y,s as x,C as r,w as T,x as $,y as F,z as R,A as u,q as b,o as w,B as k,r as I,Y as m,e as f,t as D,k as E,c as g,a as _,h as B,d as c,m as C,b as S,g as o,H as q,J as H}from"../../chunks/vendor-da4388d4.js";import{B as J}from"../../chunks/BlogLayout-14cfab6f.js";import{_ as L}from"../../chunks/twitter-card-image-a57df29d.js";import"../../chunks/stores-1fad7c36.js";import"../../chunks/ldjson-b0805387.js";/* empty css                                */function M(p){let s,t,l,e,n=`<pre class="prism language-"><code><span class="line">import * as React from &#39;react&#39;;</span>
<span class="line"></span>
<span class="line">export default function useDebounceFn&lt;T extends (...args: any) =&gt; void&gt;(fn: T, delay: number): T &#123;</span>
<span class="line">  const timeoutId = React.useRef&lt;NodeJS.Timeout&gt;();</span>
<span class="line">  const originalFn = React.useRef&lt;T&gt;();</span>
<span class="line"></span>
<span class="line">  React.useEffect(() =&gt; &#123;</span>
<span class="line">    originalFn.current = fn;</span>
<span class="line">    () =&gt; &#123;</span>
<span class="line">      originalFn.current = null;</span>
<span class="line">    &#125;;</span>
<span class="line">  &#125;, [fn]);</span>
<span class="line"></span>
<span class="line">  React.useEffect(() =&gt; &#123;</span>
<span class="line">    return () =&gt; &#123;</span>
<span class="line">      clearTimeout(timeoutId.current);</span>
<span class="line">    &#125;;</span>
<span class="line">  &#125;, []);</span>
<span class="line"></span>
<span class="line">  return React.useMemo&lt;T&gt;(</span>
<span class="line">    () =&gt; (...args: any) =&gt; &#123;</span>
<span class="line">      clearTimeout(timeoutId.current);</span>
<span class="line"></span>
<span class="line">      timeoutId.current = setTimeout(() =&gt; &#123;</span>
<span class="line">        if (originalFn.current) &#123;</span>
<span class="line">          originalFn.current(...args);</span>
<span class="line">        &#125;</span>
<span class="line">      &#125;, delay);</span>
<span class="line">    &#125;,</span>
<span class="line">    [delay]</span>
<span class="line">  );</span>
<span class="line">&#125;</span></code></pre>`;return{c(){s=f("p"),t=D("is this the right way of doing it? :thinking:"),l=E(),e=f("div"),this.h()},l(a){s=g(a,"P",{});var i=_(s);t=B(i,"is this the right way of doing it? :thinking:"),i.forEach(c),l=C(a),e=g(a,"DIV",{class:!0});var h=_(e);h.forEach(c),this.h()},h(){S(e,"class","code-section")},m(a,i){o(a,s,i),q(s,t),o(a,l,i),o(a,e,i),e.innerHTML=n},p:H,d(a){a&&c(s),a&&c(l),a&&c(e)}}}function j(p){let s,t;const l=[p[0],d];let e={$$slots:{default:[M]},$$scope:{ctx:p}};for(let n=0;n<l.length;n+=1)e=r(e,l[n]);return s=new J({props:e}),{c(){T(s.$$.fragment)},l(n){$(s.$$.fragment,n)},m(n,a){F(s,n,a),t=!0},p(n,[a]){const i=a&1?R(l,[a&1&&u(n[0]),a&0&&u(d)]):{};a&2&&(i.$$scope={dirty:a,ctx:n}),s.$set(i)},i(n){t||(b(s.$$.fragment,n),t=!0)},o(n){w(s.$$.fragment,n),t=!1},d(n){k(s,n)}}}const d={title:"useDebounceFn",tags:["react","hooks"],description:"is this the right way of doing it? :thinking:..."};function z(p,s,t){return I("blog",{image:L}),p.$$set=l=>{t(0,s=r(r({},s),m(l)))},s=m(s),[s]}class G extends v{constructor(s){super();y(this,s,z,j,x,{})}}export{G as default,d as metadata};
