import{s as x,n as u,f as S}from"../chunks/scheduler.f5f67b72.js";import{S as j,i as q,g as h,m as d,s as y,h as v,j as g,n as E,f as m,c as z,a as f,z as $,o as b}from"../chunks/index.6903506a.js";import{p as C}from"../chunks/stores.851b7b11.js";function H(p){var _;let a,t=p[0].status+"",r,o,n,i=((_=p[0].error)==null?void 0:_.message)+"",c;return{c(){a=h("h1"),r=d(t),o=y(),n=h("p"),c=d(i)},l(e){a=v(e,"H1",{});var s=g(a);r=E(s,t),s.forEach(m),o=z(e),n=v(e,"P",{});var l=g(n);c=E(l,i),l.forEach(m)},m(e,s){f(e,a,s),$(a,r),f(e,o,s),f(e,n,s),$(n,c)},p(e,[s]){var l;s&1&&t!==(t=e[0].status+"")&&b(r,t),s&1&&i!==(i=((l=e[0].error)==null?void 0:l.message)+"")&&b(c,i)},i:u,o:u,d(e){e&&(m(a),m(o),m(n))}}}function P(p,a,t){let r;return S(p,C,o=>t(0,r=o)),[r]}class B extends j{constructor(a){super(),q(this,a,P,H,x,{})}}export{B as component};