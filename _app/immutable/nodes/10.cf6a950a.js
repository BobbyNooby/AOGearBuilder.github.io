import{s as Le,c as Q,d as qe,n as De,e as ke,o as et,i as tt}from"../chunks/scheduler.e72a4102.js";import{S as Ue,i as Ye,g as m,m as Y,s as F,h as _,j as v,n as H,f as h,c as B,k as p,l as N,a as G,y as c,z as xe,o as de,d as S,p as be,t as P,b as ve,A as He,E as We,H as we,I as lt,x as Ve,D as Zt,e as $e,r as Z,u as J,v as ee,w as te}from"../chunks/index.56a1817e.js";import{g as Jt}from"../chunks/audioStore.11ad84c3.js";import{a0 as Ge,_ as ne,a1 as rt,S as Ne,a2 as ze,a3 as el,a4 as tl,a5 as ll,a6 as rl,a7 as nl,a8 as sl,a9 as il,aa as al,ab as ol,ac as fl,ad as cl,ae as ul,af as hl,ag as pl,ah as dl,ai as nt,aj as st,ak as it,al as at,am as ot,an as ft,ao as ct,ap as ut,aq as ht,P as Re,Q as je,ar as ml,T as Lt,U as qt,V as Ut,W as Yt,X as Ht,Y as Wt,Z as Kt,$ as Pe}from"../chunks/BuildsOverrideButton.653a7c06.js";import{a as Ae}from"../chunks/index.599cf8f1.js";const _l=!0,xl=Object.freeze(Object.defineProperty({__proto__:null,prerender:_l},Symbol.toStringTag,{value:"Module"}));function pt(a,e,r){const n=a.slice();return n[5]=e[r],n}function dt(a){let e,r,n,o,t,u,i=ne(rt),s=[];for(let l=0;l<i.length;l+=1)s[l]=mt(pt(a,i,l));return{c(){e=m("div"),r=m("div"),n=m("div");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=_(l,"DIV",{class:!0});var f=v(e);r=_(f,"DIV",{class:!0});var d=v(r);n=_(d,"DIV",{class:!0});var b=v(n);for(let $=0;$<s.length;$+=1)s[$].l(b);b.forEach(h),d.forEach(h),f.forEach(h),this.h()},h(){p(n,"class","w-1/2"),p(r,"class","fixed inset-0 flex items-center justify-center"),p(e,"class","z-10 top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50 fixed overflow-y-auto")},m(l,f){G(l,e,f),c(e,r),c(r,n);for(let d=0;d<s.length;d+=1)s[d]&&s[d].m(n,null);u=!0},p(l,f){if(f&6){i=ne(rt);let d;for(d=0;d<i.length;d+=1){const b=pt(l,i,d);s[d]?s[d].p(b,f):(s[d]=mt(b),s[d].c(),s[d].m(n,null))}for(;d<s.length;d+=1)s[d].d(1);s.length=i.length}},i(l){u||(l&&qe(()=>{u&&(t&&t.end(1),o=He(e,Ae,{duration:100}),o.start())}),u=!0)},o(l){o&&o.invalidate(),l&&(t=We(e,Ae,{duration:100})),u=!1},d(l){l&&h(e),we(s,l),l&&t&&t.end()}}}function mt(a){let e,r,n,o=a[5].name+"",t,u,i,s;function l(){return a[4](a[5])}return{c(){e=m("div"),r=m("button"),n=m("p"),t=Y(o),u=F(),this.h()},l(f){e=_(f,"DIV",{class:!0});var d=v(e);r=_(d,"BUTTON",{class:!0});var b=v(r);n=_(b,"P",{style:!0});var $=v(n);t=H($,o),$.forEach(h),b.forEach(h),u=B(d),d.forEach(h),this.h()},h(){N(n,"font-family","Merriweather"),p(r,"class","w-full bg-black border border-white text-white font-bold text-lg py-2 px-4 rounded svelte-1n02f5v"),lt(r,"selected",a[5].name==a[1].name),p(e,"class","mb-4")},m(f,d){G(f,e,d),c(e,r),c(r,n),c(n,t),c(e,u),i||(s=xe(r,"click",l),i=!0)},p(f,d){a=f,d&2&&lt(r,"selected",a[5].name==a[1].name)},d(f){f&&h(e),i=!1,s()}}}function gl(a){let e,r,n=a[1].name+"",o,t,u,i,s=a[0]&&dt(a);return{c(){e=m("div"),r=m("button"),o=Y(n),t=F(),s&&s.c(),this.h()},l(l){e=_(l,"DIV",{});var f=v(e);r=_(f,"BUTTON",{class:!0,style:!0});var d=v(r);o=H(d,n),d.forEach(h),t=B(f),s&&s.l(f),f.forEach(h),this.h()},h(){p(r,"class","w-full bg-black border border-white text-white font-bold text-lg py-2 px-4 rounded"),N(r,"font-family","Merriweather")},m(l,f){G(l,e,f),c(e,r),c(r,o),c(e,t),s&&s.m(e,null),u||(i=xe(r,"click",a[3]),u=!0)},p(l,[f]){f&2&&n!==(n=l[1].name+"")&&de(o,n),l[0]?s?(s.p(l,f),f&1&&S(s,1)):(s=dt(l),s.c(),S(s,1),s.m(e,null)):s&&(be(),P(s,1,1,()=>{s=null}),ve())},i(l){S(s)},o(l){P(s)},d(l){l&&h(e),s&&s.d(),u=!1,i()}}}function bl(a,e,r){let n;Q(a,Ge,s=>r(1,n=s));let o=!1;function t(){r(0,o=!o)}return[o,n,t,()=>{t(),Ne()},s=>{Ge.set(s),ze(),Ne(),t()}]}class Qt extends Ue{constructor(e){super(),Ye(this,e,bl,gl,Le,{})}}function _t(a){let e,r,n,o,t,u,i,s,l;return{c(){e=m("div"),r=m("img"),o=F(),t=m("p"),u=m("span"),i=Y(a[0]),s=Y("%"),l=Y(`\r
				STABILITY`),this.h()},l(f){e=_(f,"DIV",{class:!0});var d=v(e);r=_(d,"IMG",{class:!0,src:!0,alt:!0}),o=B(d),t=_(d,"P",{style:!0});var b=v(t);u=_(b,"SPAN",{});var $=v(u);i=H($,a[0]),s=H($,"%"),$.forEach(h),l=H(b,`\r
				STABILITY`),b.forEach(h),d.forEach(h),this.h()},h(){p(r,"class","h-6"),ke(r.src,n="/assets/images/shipstat/stability.png")||p(r,"src",n),p(r,"alt","Stability"),p(t,"style","font-family: 'Open Sans', sans-serif; font-weight: 700; font-size: 20px; -webkit-text-fill-color: #6297C1; -webkit-text-stroke: 1px; -webkit-text-stroke-color : #124975; text-align: center;"),p(e,"class","flex $currentShips-center")},m(f,d){G(f,e,d),c(e,r),c(e,o),c(e,t),c(t,u),c(u,i),c(u,s),c(t,l)},p(f,d){d&1&&de(i,f[0])},d(f){f&&h(e)}}}function gt(a){let e,r,n,o,t,u,i,s,l,f=a[0]-100+"",d,b,$;return{c(){e=m("div"),r=m("img"),o=F(),t=m("p"),u=m("span"),i=Y("100%"),s=m("span"),l=Y("(+"),d=Y(f),b=Y("%)"),$=Y(`\r
				STABILITY`),this.h()},l(x){e=_(x,"DIV",{class:!0});var C=v(e);r=_(C,"IMG",{class:!0,src:!0,alt:!0}),o=B(C),t=_(C,"P",{style:!0});var L=v(t);u=_(L,"SPAN",{});var A=v(u);i=H(A,"100%"),s=_(A,"SPAN",{style:!0});var j=v(s);l=H(j,"(+"),d=H(j,f),b=H(j,"%)"),j.forEach(h),A.forEach(h),$=H(L,`\r
				STABILITY`),L.forEach(h),C.forEach(h),this.h()},h(){p(r,"class","h-6"),ke(r.src,n="/assets/images/shipstat/stability.png")||p(r,"src",n),p(r,"alt","Stability"),p(s,"style","font-family: 'Open Sans', sans-serif; font-weight: 700; font-size: 20px; -webkit-text-fill-color: #FF0000; -webkit-text-stroke: 1px; -webkit-text-stroke-color : #000000; text-align: center;"),p(t,"style","font-family: 'Open Sans', sans-serif; font-weight: 700; font-size: 20px; -webkit-text-fill-color: #6297C1; -webkit-text-stroke: 1px; -webkit-text-stroke-color : #124975; text-align: center;"),p(e,"class","flex $currentShips-center")},m(x,C){G(x,e,C),c(e,r),c(e,o),c(e,t),c(t,u),c(u,i),c(u,s),c(s,l),c(s,d),c(s,b),c(t,$)},p(x,C){C&1&&f!==(f=x[0]-100+"")&&de(d,f)},d(x){x&&h(e)}}}function vl(a){let e,r=`<img class="h-6" src="/assets/images/shipstat/durability.png" alt="Durability"/> <p style="font-family: &#39;Open Sans&#39;, sans-serif; font-weight: 700; font-size: 20px; -webkit-text-fill-color: #737373; -webkit-text-stroke: 1.5px; -webkit-text-stroke-color : #000000; text-align: center;"><span>100</span>
				DURABILITY</p>`;return{c(){e=m("div"),e.innerHTML=r,this.h()},l(n){e=_(n,"DIV",{class:!0,"data-svelte-h":!0}),Ve(e)!=="svelte-aub54z"&&(e.innerHTML=r),this.h()},h(){p(e,"class","flex $currentShips-center")},m(n,o){G(n,e,o)},p:De,d(n){n&&h(e)}}}function kl(a){let e,r,n,o,t,u,i,s;return{c(){e=m("div"),r=m("img"),o=F(),t=m("p"),u=m("span"),i=Y(a[1]),s=Y(`\r
				DURABILITY`),this.h()},l(l){e=_(l,"DIV",{class:!0});var f=v(e);r=_(f,"IMG",{class:!0,src:!0,alt:!0}),o=B(f),t=_(f,"P",{style:!0});var d=v(t);u=_(d,"SPAN",{});var b=v(u);i=H(b,a[1]),b.forEach(h),s=H(d,`\r
				DURABILITY`),d.forEach(h),f.forEach(h),this.h()},h(){p(r,"class","h-6"),ke(r.src,n="/assets/images/shipstat/durability.png")||p(r,"src",n),p(r,"alt","Durability"),p(t,"style","font-family: 'Open Sans', sans-serif; font-weight: 700; font-size: 20px; -webkit-text-fill-color: #737373; -webkit-text-stroke: 1.5px; -webkit-text-stroke-color : #000000; text-align: center;"),p(e,"class","flex $currentShips-center")},m(l,f){G(l,e,f),c(e,r),c(e,o),c(e,t),c(t,u),c(u,i),c(t,s)},p(l,f){f&2&&de(i,l[1])},d(l){l&&h(e)}}}function bt(a){let e,r,n,o,t,u,i,s;return{c(){e=m("div"),r=m("img"),o=F(),t=m("p"),u=m("span"),i=Y(a[2]),s=Y(`\r
				MAGIC STORAGE`),this.h()},l(l){e=_(l,"DIV",{class:!0});var f=v(e);r=_(f,"IMG",{class:!0,src:!0,alt:!0}),o=B(f),t=_(f,"P",{style:!0});var d=v(t);u=_(d,"SPAN",{});var b=v(u);i=H(b,a[2]),b.forEach(h),s=H(d,`\r
				MAGIC STORAGE`),d.forEach(h),f.forEach(h),this.h()},h(){p(r,"class","h-6"),ke(r.src,n="/assets/images/shipstat/magicstorage.png")||p(r,"src",n),p(r,"alt","Magic Storage"),p(t,"style","font-family: 'Open Sans', sans-serif; font-weight: 700; font-size: 20px; -webkit-text-fill-color: #BA70EB; -webkit-text-stroke: 1.5px; -webkit-text-stroke-color : #000000; text-align: center;"),p(e,"class","flex $currentShips-center")},m(l,f){G(l,e,f),c(e,r),c(e,o),c(e,t),c(t,u),c(u,i),c(t,s)},p(l,f){f&4&&de(i,l[2])},d(l){l&&h(e)}}}function vt(a){let e,r,n,o,t,u,i,s;return{c(){e=m("div"),r=m("img"),o=F(),t=m("p"),u=m("span"),i=Y(a[3]),s=Y(`\r
				TURNING`),this.h()},l(l){e=_(l,"DIV",{class:!0});var f=v(e);r=_(f,"IMG",{class:!0,src:!0,alt:!0}),o=B(f),t=_(f,"P",{style:!0});var d=v(t);u=_(d,"SPAN",{});var b=v(u);i=H(b,a[3]),b.forEach(h),s=H(d,`\r
				TURNING`),d.forEach(h),f.forEach(h),this.h()},h(){p(r,"class","h-6"),ke(r.src,n="/assets/images/shipstat/turning.png")||p(r,"src",n),p(r,"alt","Turning"),p(t,"style","font-family: 'Open Sans', sans-serif; font-weight: 700; font-size: 20px; -webkit-text-fill-color: #FFFFFF; -webkit-text-stroke: 1px; -webkit-text-stroke-color : #584A8C; text-align: center;"),p(e,"class","flex $currentShips-center")},m(l,f){G(l,e,f),c(e,r),c(e,o),c(e,t),c(t,u),c(u,i),c(t,s)},p(l,f){f&8&&de(i,l[3])},d(l){l&&h(e)}}}function kt(a){let e,r,n,o,t,u,i,s;return{c(){e=m("div"),r=m("img"),o=F(),t=m("p"),u=m("span"),i=Y(a[4]),s=Y(`\r
				SPEED`),this.h()},l(l){e=_(l,"DIV",{class:!0});var f=v(e);r=_(f,"IMG",{class:!0,src:!0,alt:!0}),o=B(f),t=_(f,"P",{style:!0});var d=v(t);u=_(d,"SPAN",{});var b=v(u);i=H(b,a[4]),b.forEach(h),s=H(d,`\r
				SPEED`),d.forEach(h),f.forEach(h),this.h()},h(){p(r,"class","h-6"),ke(r.src,n="/assets/images/shipstat/speed.png")||p(r,"src",n),p(r,"alt","Speed"),N(t,"font-family","'Open Sans', sans-serif"),N(t,"font-weight","700"),N(t,"font-size","20px"),N(t,"-webkit-text-fill-color","#FFFFFF"),N(t,"-webkit-text-stroke","1.5px"),N(t,"-webkit-text-stroke-color","#00ffff"),N(t,"text-align","center"),p(e,"class","flex $currentShips-center")},m(l,f){G(l,e,f),c(e,r),c(e,o),c(e,t),c(t,u),c(u,i),c(t,s)},p(l,f){f&16&&de(i,l[4])},d(l){l&&h(e)}}}function yt(a){let e,r,n,o,t,u,i,s,l;return{c(){e=m("div"),r=m("img"),o=F(),t=m("p"),u=m("span"),i=Y(a[5]),s=Y("%"),l=Y(`\r
				RESILIENCE`),this.h()},l(f){e=_(f,"DIV",{class:!0});var d=v(e);r=_(d,"IMG",{class:!0,src:!0,alt:!0}),o=B(d),t=_(d,"P",{style:!0});var b=v(t);u=_(b,"SPAN",{});var $=v(u);i=H($,a[5]),s=H($,"%"),$.forEach(h),l=H(b,`\r
				RESILIENCE`),b.forEach(h),d.forEach(h),this.h()},h(){p(r,"class","h-6"),ke(r.src,n="/assets/images/shipstat/resilience.png")||p(r,"src",n),p(r,"alt","Resilience"),N(t,"font-family","'Open Sans', sans-serif"),N(t,"font-weight","700"),N(t,"font-size","20px"),N(t,"-webkit-text-fill-color","#FFFFFF"),N(t,"-webkit-text-stroke","1.5px"),N(t,"-webkit-text-stroke-color","#AF2230"),N(t,"text-align","center"),p(e,"class","flex $currentShips-center")},m(f,d){G(f,e,d),c(e,r),c(e,o),c(e,t),c(t,u),c(u,i),c(u,s),c(t,l)},p(f,d){d&32&&de(i,f[5])},d(f){f&&h(e)}}}function $t(a){let e,r,n,o,t,u,i,s,l,f=a[5]-100+"",d,b,$;return{c(){e=m("div"),r=m("img"),o=F(),t=m("p"),u=m("span"),i=Y("100%"),s=m("span"),l=Y("(+"),d=Y(f),b=Y("%)"),$=Y(`\r
				RESILIENCE`),this.h()},l(x){e=_(x,"DIV",{class:!0});var C=v(e);r=_(C,"IMG",{class:!0,src:!0,alt:!0}),o=B(C),t=_(C,"P",{style:!0});var L=v(t);u=_(L,"SPAN",{});var A=v(u);i=H(A,"100%"),s=_(A,"SPAN",{style:!0});var j=v(s);l=H(j,"(+"),d=H(j,f),b=H(j,"%)"),j.forEach(h),A.forEach(h),$=H(L,`\r
				RESILIENCE`),L.forEach(h),C.forEach(h),this.h()},h(){p(r,"class","h-6"),ke(r.src,n="/assets/images/shipstat/resilience.png")||p(r,"src",n),p(r,"alt","Resilience"),p(s,"style","font-family: 'Open Sans', sans-serif; font-weight: 700; font-size: 20px; -webkit-text-fill-color: #FF0000; -webkit-text-stroke: 1px; -webkit-text-stroke-color : #000000; text-align: center;"),N(t,"font-family","'Open Sans', sans-serif"),N(t,"font-weight","700"),N(t,"font-size","20px"),N(t,"-webkit-text-fill-color","#FFFFFF"),N(t,"-webkit-text-stroke","1.5px"),N(t,"-webkit-text-stroke-color","#AF2230"),N(t,"text-align","center"),p(e,"class","flex $currentShips-center")},m(x,C){G(x,e,C),c(e,r),c(e,o),c(e,t),c(t,u),c(u,i),c(u,s),c(s,l),c(s,d),c(s,b),c(t,$)},p(x,C){C&32&&f!==(f=x[5]-100+"")&&de(d,f)},d(x){x&&h(e)}}}function wt(a){let e,r,n,o,t,u,i,s;return{c(){e=m("div"),r=m("img"),o=F(),t=m("p"),u=m("span"),i=Y(a[6]),s=Y(`\r
				RAM STRENGTH`),this.h()},l(l){e=_(l,"DIV",{class:!0});var f=v(e);r=_(f,"IMG",{class:!0,src:!0,alt:!0}),o=B(f),t=_(f,"P",{style:!0});var d=v(t);u=_(d,"SPAN",{});var b=v(u);i=H(b,a[6]),b.forEach(h),s=H(d,`\r
				RAM STRENGTH`),d.forEach(h),f.forEach(h),this.h()},h(){p(r,"class","h-6"),ke(r.src,n="/assets/images/shipstat/ramstrength.png")||p(r,"src",n),p(r,"alt","Ram Strength"),N(t,"font-family","'Open Sans', sans-serif"),N(t,"font-weight","700"),N(t,"font-size","20px"),N(t,"-webkit-text-fill-color","#FF8400"),N(t,"-webkit-text-stroke","1.5px"),N(t,"text-align","center"),p(e,"class","flex $currentShips-center")},m(l,f){G(l,e,f),c(e,r),c(e,o),c(e,t),c(t,u),c(u,i),c(t,s)},p(l,f){f&64&&de(i,l[6])},d(l){l&&h(e)}}}function Et(a){let e,r,n,o,t,u,i,s;return{c(){e=m("div"),r=m("img"),o=F(),t=m("p"),u=m("span"),i=Y(a[7]),s=Y(`\r
				RAM DEFENSE`),this.h()},l(l){e=_(l,"DIV",{class:!0});var f=v(e);r=_(f,"IMG",{class:!0,src:!0,alt:!0}),o=B(f),t=_(f,"P",{style:!0});var d=v(t);u=_(d,"SPAN",{});var b=v(u);i=H(b,a[7]),b.forEach(h),s=H(d,`\r
				RAM DEFENSE`),d.forEach(h),f.forEach(h),this.h()},h(){p(r,"class","h-6"),ke(r.src,n="/assets/images/shipstat/ramdefense.png")||p(r,"src",n),p(r,"alt","Ram Defense"),N(t,"font-family","'Open Sans', sans-serif"),N(t,"font-weight","700"),N(t,"font-size","20px"),N(t,"-webkit-text-fill-color","#FFFFFF"),N(t,"-webkit-text-stroke","1.5px"),N(t,"-webkit-text-stroke-color","#6B6BD7"),N(t,"text-align","center"),p(e,"class","flex $currentShips-center")},m(l,f){G(l,e,f),c(e,r),c(e,o),c(e,t),c(t,u),c(u,i),c(t,s)},p(l,f){f&128&&de(i,l[7])},d(l){l&&h(e)}}}function St(a){let e,r,n,o,t,u,i,s;return{c(){e=m("div"),r=m("img"),o=F(),t=m("p"),u=m("span"),i=Y(a[7]),s=Y(`\r
				RAM DEFENSE`),this.h()},l(l){e=_(l,"DIV",{class:!0});var f=v(e);r=_(f,"IMG",{class:!0,src:!0,alt:!0}),o=B(f),t=_(f,"P",{style:!0});var d=v(t);u=_(d,"SPAN",{style:!0});var b=v(u);i=H(b,a[7]),b.forEach(h),s=H(d,`\r
				RAM DEFENSE`),d.forEach(h),f.forEach(h),this.h()},h(){p(r,"class","h-6"),ke(r.src,n="/assets/images/shipstat/ramdefense.png")||p(r,"src",n),p(r,"alt","Ram Defense"),N(u,"-webkit-text-fill-color","#FF0000"),N(u,"-webkit-text-stroke-color","#000000"),N(t,"font-family","'Open Sans', sans-serif"),N(t,"font-weight","700"),N(t,"font-size","20px"),N(t,"-webkit-text-fill-color","#FFFFFF"),N(t,"-webkit-text-stroke","1.5px"),N(t,"-webkit-text-stroke-color","#6B6BD7"),N(t,"text-align","center"),p(e,"class","flex $currentShips-center")},m(l,f){G(l,e,f),c(e,r),c(e,o),c(e,t),c(t,u),c(u,i),c(t,s)},p(l,f){f&128&&de(i,l[7])},d(l){l&&h(e)}}}function yl(a){let e,r,n,o,t,u,i,s,l,f,d,b=a[0]>0&&a[0]<=100&&_t(a),$=a[0]>100&&gt(a);function x(I,M){return I[1]>=100?kl:vl}let C=x(a),L=C(a),A=a[2]!=0&&bt(a),j=a[3]!=0&&vt(a),D=a[4]!=0&&kt(a),R=a[5]>0&&a[5]<=100&&yt(a),T=a[5]>100&&$t(a),q=a[6]!=0&&wt(a),W=a[7]>0&&Et(a),U=a[7]<0&&St(a);return{c(){e=m("div"),b&&b.c(),r=F(),$&&$.c(),n=F(),L.c(),o=F(),A&&A.c(),t=F(),j&&j.c(),u=F(),D&&D.c(),i=F(),R&&R.c(),s=F(),T&&T.c(),l=F(),q&&q.c(),f=F(),W&&W.c(),d=F(),U&&U.c()},l(I){e=_(I,"DIV",{});var M=v(e);b&&b.l(M),r=B(M),$&&$.l(M),n=B(M),L.l(M),o=B(M),A&&A.l(M),t=B(M),j&&j.l(M),u=B(M),D&&D.l(M),i=B(M),R&&R.l(M),s=B(M),T&&T.l(M),l=B(M),q&&q.l(M),f=B(M),W&&W.l(M),d=B(M),U&&U.l(M),M.forEach(h)},m(I,M){G(I,e,M),b&&b.m(e,null),c(e,r),$&&$.m(e,null),c(e,n),L.m(e,null),c(e,o),A&&A.m(e,null),c(e,t),j&&j.m(e,null),c(e,u),D&&D.m(e,null),c(e,i),R&&R.m(e,null),c(e,s),T&&T.m(e,null),c(e,l),q&&q.m(e,null),c(e,f),W&&W.m(e,null),c(e,d),U&&U.m(e,null)},p(I,[M]){I[0]>0&&I[0]<=100?b?b.p(I,M):(b=_t(I),b.c(),b.m(e,r)):b&&(b.d(1),b=null),I[0]>100?$?$.p(I,M):($=gt(I),$.c(),$.m(e,n)):$&&($.d(1),$=null),C===(C=x(I))&&L?L.p(I,M):(L.d(1),L=C(I),L&&(L.c(),L.m(e,o))),I[2]!=0?A?A.p(I,M):(A=bt(I),A.c(),A.m(e,t)):A&&(A.d(1),A=null),I[3]!=0?j?j.p(I,M):(j=vt(I),j.c(),j.m(e,u)):j&&(j.d(1),j=null),I[4]!=0?D?D.p(I,M):(D=kt(I),D.c(),D.m(e,i)):D&&(D.d(1),D=null),I[5]>0&&I[5]<=100?R?R.p(I,M):(R=yt(I),R.c(),R.m(e,s)):R&&(R.d(1),R=null),I[5]>100?T?T.p(I,M):(T=$t(I),T.c(),T.m(e,l)):T&&(T.d(1),T=null),I[6]!=0?q?q.p(I,M):(q=wt(I),q.c(),q.m(e,f)):q&&(q.d(1),q=null),I[7]>0?W?W.p(I,M):(W=Et(I),W.c(),W.m(e,d)):W&&(W.d(1),W=null),I[7]<0?U?U.p(I,M):(U=St(I),U.c(),U.m(e,null)):U&&(U.d(1),U=null)},i:De,o:De,d(I){I&&h(e),b&&b.d(),$&&$.d(),L.d(),A&&A.d(),j&&j.d(),D&&D.d(),R&&R.d(),T&&T.d(),q&&q.d(),W&&W.d(),U&&U.d()}}}function $l(a,e,r){let n,o,t,u,i,s,l,f,d,b,$,x,C,L,A,j,D,R,T,q,W,U,I,M;return Q(a,el,y=>r(8,n=y)),Q(a,tl,y=>r(9,o=y)),Q(a,ll,y=>r(10,t=y)),Q(a,rl,y=>r(11,u=y)),Q(a,nl,y=>r(12,i=y)),Q(a,sl,y=>r(13,s=y)),Q(a,il,y=>r(14,l=y)),Q(a,al,y=>r(15,f=y)),Q(a,ol,y=>r(16,d=y)),Q(a,fl,y=>r(17,b=y)),Q(a,cl,y=>r(18,$=y)),Q(a,ul,y=>r(19,x=y)),Q(a,hl,y=>r(20,C=y)),Q(a,pl,y=>r(21,L=y)),Q(a,dl,y=>r(22,A=y)),Q(a,Ge,y=>r(23,j=y)),Q(a,nt,y=>r(0,D=y)),Q(a,st,y=>r(1,R=y)),Q(a,it,y=>r(2,T=y)),Q(a,at,y=>r(3,q=y)),Q(a,ot,y=>r(4,W=y)),Q(a,ft,y=>r(5,U=y)),Q(a,ct,y=>r(6,I=y)),Q(a,ut,y=>r(7,M=y)),a.$$.update=()=>{if(a.$$.dirty&16776960){const y={ship:{base:j},hull:{base:A,enchant:L},quartermasters:{quartermaster1:C,quartermaster2:x},weapons:{cannon:$,siegeWeapon:b},sails:{base:d,enchant:f},rams:{base:l,enchant:s},crew:{shipCrew1:i},deckhands:{deckhand1:u,deckhand2:t,deckhand3:o,deckhand4:n}};let X={durability:0,magicStorage:0,ramDefense:0,ramStrength:0,resilience:0,speed:0,stability:0,turning:0};const fe=["durability","magicStorage","ramDefense","ramDefense","ramStrength","resilience","speed","stability","turning"];for(const ie in y)for(const le in y[ie])if(le!="enchant"||le=="enchant"&&y[ie].base.name!="None")for(const re of fe)X[re]+=y[ie][le][re];st.set(X.durability),it.set(X.magicStorage),ut.set(X.ramDefense),ct.set(X.ramStrength),ft.set(X.resilience),ot.set(X.speed),nt.set(X.stability),at.set(X.turning)}},[D,R,T,q,W,U,I,M,n,o,t,u,i,s,l,f,d,b,$,x,C,L,A,j]}class Xt extends Ue{constructor(e){super(),Ye(this,e,$l,yl,Le,{})}}const{document:se}=Jt;function It(a,e,r){const n=a.slice();return n[7]=e[r],n}function Dt(a,e,r){const n=a.slice();return n[10]=e[r],n}function Tt(a,e,r){const n=a.slice();return n[7]=e[r],n}function At(a,e,r){const n=a.slice();return n[10]=e[r],n}function Mt(a,e,r){const n=a.slice();return n[7]=e[r],n}function Ft(a,e,r){const n=a.slice();return n[10]=e[r],n}function Bt(a,e,r){const n=a.slice();return n[7]=e[r],n}function Vt(a,e,r){const n=a.slice();return n[10]=e[r],n}function Ot(a){let e,r,n,o;const t=[El,wl],u=[];function i(s,l){return s[1]?1:0}return e=i(a),r=u[e]=t[e](a),{c(){r.c(),n=$e()},l(s){r.l(s),n=$e()},m(s,l){u[e].m(s,l),G(s,n,l),o=!0},p(s,l){let f=e;e=i(s),e===f?u[e].p(s,l):(be(),P(u[f],1,1,()=>{u[f]=null}),ve(),r=u[e],r?r.p(s,l):(r=u[e]=t[e](s),r.c()),S(r,1),r.m(n.parentNode,n))},i(s){o||(S(r),o=!0)},o(s){P(r),o=!1},d(s){s&&h(n),u[e].d(s)}}}function wl(a){let e,r="Ship Builder",n,o,t,u,i,s,l,f,d,b,$,x,C,L,A,j,D,R,T,q,W,U,I,M,y,X,fe,ie,le,re,Te="Clear",me,_e,oe,pe,ce,Ee,ge,ue,K,Oe;i=new Xt({}),d=new Lt({props:{type:"ship"}}),x=new qt({props:{type:"ship"}}),A=new Ut({props:{type:"ship"}}),R=new Yt({props:{type:"ship"}}),W=new Ht({props:{type:"ship"}}),M=new Wt({props:{type:"ship"}}),fe=new Kt({props:{type:"ship"}}),oe=new Qt({});let ae=ne(Object.keys(a[2])),O=[];for(let g=0;g<ae.length;g+=1)O[g]=xt(Tt(a,ae,g));const Ce=g=>P(O[g],1,1,()=>{O[g]=null});let k=ne(Object.keys(a[2])),E=[];for(let g=0;g<k.length;g+=1)E[g]=Ct(It(a,k,g));const V=g=>P(E[g],1,1,()=>{E[g]=null});return{c(){e=m("p"),e.textContent=r,t=F(),u=m("div"),Z(i.$$.fragment),s=F(),l=m("div"),f=m("div"),Z(d.$$.fragment),b=F(),$=m("div"),Z(x.$$.fragment),C=F(),L=m("div"),Z(A.$$.fragment),j=F(),D=m("div"),Z(R.$$.fragment),T=F(),q=m("div"),Z(W.$$.fragment),U=F(),I=m("div"),Z(M.$$.fragment),y=F(),X=m("div"),Z(fe.$$.fragment),ie=F(),le=m("div"),re=m("button"),re.textContent=Te,me=F(),_e=m("div"),Z(oe.$$.fragment),pe=F(),ce=m("div");for(let g=0;g<O.length;g+=1)O[g].c();Ee=F(),ge=m("div");for(let g=0;g<E.length;g+=1)E[g].c();this.h()},l(g){e=_(g,"P",{class:!0,style:!0,"data-svelte-h":!0}),Ve(e)!=="svelte-1a1mbfm"&&(e.textContent=r),t=B(g),u=_(g,"DIV",{class:!0});var z=v(u);J(i.$$.fragment,z),z.forEach(h),s=B(g),l=_(g,"DIV",{class:!0});var w=v(l);f=_(w,"DIV",{class:!0});var he=v(f);J(d.$$.fragment,he),he.forEach(h),b=B(w),$=_(w,"DIV",{class:!0});var Se=v($);J(x.$$.fragment,Se),Se.forEach(h),C=B(w),L=_(w,"DIV",{class:!0});var Me=v(L);J(A.$$.fragment,Me),Me.forEach(h),j=B(w),D=_(w,"DIV",{class:!0});var Fe=v(D);J(R.$$.fragment,Fe),Fe.forEach(h),T=B(w),q=_(w,"DIV",{class:!0});var Be=v(q);J(W.$$.fragment,Be),Be.forEach(h),U=B(w),I=_(w,"DIV",{class:!0});var ye=v(I);J(M.$$.fragment,ye),ye.forEach(h),y=B(w),X=_(w,"DIV",{class:!0});var Ke=v(X);J(fe.$$.fragment,Ke),Ke.forEach(h),ie=B(w),le=_(w,"DIV",{class:!0});var Qe=v(le);re=_(Qe,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),Ve(re)!=="svelte-1ygrsmf"&&(re.textContent=Te),Qe.forEach(h),w.forEach(h),me=B(g),_e=_(g,"DIV",{class:!0});var Xe=v(_e);J(oe.$$.fragment,Xe),Xe.forEach(h),pe=B(g),ce=_(g,"DIV",{});var Ze=v(ce);for(let Ie=0;Ie<O.length;Ie+=1)O[Ie].l(Ze);Ze.forEach(h),Ee=B(g),ge=_(g,"DIV",{class:!0});var Je=v(ge);for(let Ie=0;Ie<E.length;Ie+=1)E[Ie].l(Je);Je.forEach(h),this.h()},h(){p(e,"class","text-4xl font-medium text-gray-300 text-center mt-20 pb-10"),N(e,"font-family","Merriweather"),p(u,"class","w-80 ml-4 flex justify-center items-center rounded border-2 w-100 border-slate-300 bg-opacity-40 bg-black p-5"),p(f,"class","mb-4"),p($,"class","mb-4"),p(L,"class","mb-10"),p(D,"class","mb-4"),p(q,"class","mb-4"),p(I,"class","mb-10"),p(X,"class","mb-4"),p(re,"class","bg-black border border-white text-white font-bold text-lg py-2 px-4 w-44"),N(re,"font-family","Merriweather"),p(le,"class","mb-4"),p(l,"class","mt-4 flex flex-col items-center"),p(_e,"class","w-full mx-auto p-5"),p(ge,"class","pt-5 pb-10")},m(g,z){G(g,e,z),G(g,t,z),G(g,u,z),ee(i,u,null),G(g,s,z),G(g,l,z),c(l,f),ee(d,f,null),c(l,b),c(l,$),ee(x,$,null),c(l,C),c(l,L),ee(A,L,null),c(l,j),c(l,D),ee(R,D,null),c(l,T),c(l,q),ee(W,q,null),c(l,U),c(l,I),ee(M,I,null),c(l,y),c(l,X),ee(fe,X,null),c(l,ie),c(l,le),c(le,re),G(g,me,z),G(g,_e,z),ee(oe,_e,null),G(g,pe,z),G(g,ce,z);for(let w=0;w<O.length;w+=1)O[w]&&O[w].m(ce,null);G(g,Ee,z),G(g,ge,z);for(let w=0;w<E.length;w+=1)E[w]&&E[w].m(ge,null);ue=!0,K||(Oe=xe(re,"click",a[4]),K=!0)},p(g,z){if(z&4){ae=ne(Object.keys(g[2]));let w;for(w=0;w<ae.length;w+=1){const he=Tt(g,ae,w);O[w]?(O[w].p(he,z),S(O[w],1)):(O[w]=xt(he),O[w].c(),S(O[w],1),O[w].m(ce,null))}for(be(),w=ae.length;w<O.length;w+=1)Ce(w);ve()}if(z&4){k=ne(Object.keys(g[2]));let w;for(w=0;w<k.length;w+=1){const he=It(g,k,w);E[w]?(E[w].p(he,z),S(E[w],1)):(E[w]=Ct(he),E[w].c(),S(E[w],1),E[w].m(ge,null))}for(be(),w=k.length;w<E.length;w+=1)V(w);ve()}},i(g){if(!ue){g&&qe(()=>{ue&&(o&&o.end(1),n=He(e,Ae,{delay:250,duration:300}),n.start())}),S(i.$$.fragment,g),S(d.$$.fragment,g),S(x.$$.fragment,g),S(A.$$.fragment,g),S(R.$$.fragment,g),S(W.$$.fragment,g),S(M.$$.fragment,g),S(fe.$$.fragment,g),S(oe.$$.fragment,g);for(let z=0;z<ae.length;z+=1)S(O[z]);for(let z=0;z<k.length;z+=1)S(E[z]);ue=!0}},o(g){n&&n.invalidate(),g&&(o=We(e,Ae,{delay:250,duration:300})),P(i.$$.fragment,g),P(d.$$.fragment,g),P(x.$$.fragment,g),P(A.$$.fragment,g),P(R.$$.fragment,g),P(W.$$.fragment,g),P(M.$$.fragment,g),P(fe.$$.fragment,g),P(oe.$$.fragment,g),O=O.filter(Boolean);for(let z=0;z<O.length;z+=1)P(O[z]);E=E.filter(Boolean);for(let z=0;z<E.length;z+=1)P(E[z]);ue=!1},d(g){g&&(h(e),h(t),h(u),h(s),h(l),h(me),h(_e),h(pe),h(ce),h(Ee),h(ge)),g&&o&&o.end(),te(i),te(d),te(x),te(A),te(R),te(W),te(M),te(fe),te(oe),we(O,g),we(E,g),K=!1,Oe()}}}function El(a){let e,r="Ship Builder",n,o,t,u,i,s,l,f,d,b,$,x,C,L,A,j,D,R,T,q,W,U,I="Clear",M,y,X,fe,ie,le,re,Te,me,_e,oe,pe,ce,Ee,ge;s=new Lt({props:{type:"ship"}}),f=new qt({props:{type:"ship"}}),b=new Ut({props:{type:"ship"}}),C=new Yt({props:{type:"ship"}}),A=new Ht({props:{type:"ship"}}),D=new Wt({props:{type:"ship"}}),q=new Kt({props:{type:"ship"}}),X=new Qt({});let ue=ne(Object.keys(a[2])),K=[];for(let k=0;k<ue.length;k+=1)K[k]=jt(Bt(a,ue,k));const Oe=k=>P(K[k],1,1,()=>{K[k]=null});let ae=ne(Object.keys(a[2])),O=[];for(let k=0;k<ae.length;k+=1)O[k]=zt(Mt(a,ae,k));const Ce=k=>P(O[k],1,1,()=>{O[k]=null});return pe=new Xt({}),{c(){e=m("p"),e.textContent=r,t=F(),u=m("div"),i=m("div"),Z(s.$$.fragment),l=F(),Z(f.$$.fragment),d=F(),Z(b.$$.fragment),$=F(),x=m("div"),Z(C.$$.fragment),L=F(),Z(A.$$.fragment),j=F(),Z(D.$$.fragment),R=F(),T=m("div"),Z(q.$$.fragment),W=F(),U=m("button"),U.textContent=I,M=F(),y=m("div"),Z(X.$$.fragment),fe=F(),ie=m("div"),le=m("div"),re=m("div");for(let k=0;k<K.length;k+=1)K[k].c();Te=F(),me=m("div");for(let k=0;k<O.length;k+=1)O[k].c();_e=F(),oe=m("div"),Z(pe.$$.fragment),this.h()},l(k){e=_(k,"P",{class:!0,style:!0,"data-svelte-h":!0}),Ve(e)!=="svelte-8wlrwu"&&(e.textContent=r),t=B(k),u=_(k,"DIV",{});var E=v(u);i=_(E,"DIV",{class:!0});var V=v(i);J(s.$$.fragment,V),l=B(V),J(f.$$.fragment,V),d=B(V),J(b.$$.fragment,V),V.forEach(h),$=B(E),x=_(E,"DIV",{class:!0});var g=v(x);J(C.$$.fragment,g),L=B(g),J(A.$$.fragment,g),j=B(g),J(D.$$.fragment,g),g.forEach(h),R=B(E),T=_(E,"DIV",{class:!0});var z=v(T);J(q.$$.fragment,z),W=B(z),U=_(z,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),Ve(U)!=="svelte-1ygrsmf"&&(U.textContent=I),z.forEach(h),M=B(E),y=_(E,"DIV",{class:!0});var w=v(y);J(X.$$.fragment,w),w.forEach(h),fe=B(E),ie=_(E,"DIV",{class:!0});var he=v(ie);le=_(he,"DIV",{class:!0});var Se=v(le);re=_(Se,"DIV",{});var Me=v(re);for(let ye=0;ye<K.length;ye+=1)K[ye].l(Me);Me.forEach(h),Te=B(Se),me=_(Se,"DIV",{});var Fe=v(me);for(let ye=0;ye<O.length;ye+=1)O[ye].l(Fe);Fe.forEach(h),Se.forEach(h),_e=B(he),oe=_(he,"DIV",{class:!0});var Be=v(oe);J(pe.$$.fragment,Be),Be.forEach(h),he.forEach(h),E.forEach(h),this.h()},h(){p(e,"class","text-7xl font-medium text-gray-300 text-center pt-20 pb-5"),N(e,"font-family","Merriweather"),p(i,"class","flex items-center justify-center space-x-4 pb-5"),p(x,"class","flex items-center justify-center space-x-4 pb-5"),p(U,"class","bg-black border border-white text-white font-bold text-lg py-2 px-4 w-44"),N(U,"font-family","Merriweather"),p(T,"class","flex items-center justify-center space-x-4 pb-5"),p(y,"class","w-1/3 mx-auto p-5"),p(le,"class","grid grid-cols-2 gap-x-20"),p(oe,"class","w-80 ml-4 flex justify-center items-center rounded border-2 w-100 border-slate-300 bg-opacity-40 bg-black p-5"),p(ie,"class","flex pb-20")},m(k,E){G(k,e,E),G(k,t,E),G(k,u,E),c(u,i),ee(s,i,null),c(i,l),ee(f,i,null),c(i,d),ee(b,i,null),c(u,$),c(u,x),ee(C,x,null),c(x,L),ee(A,x,null),c(x,j),ee(D,x,null),c(u,R),c(u,T),ee(q,T,null),c(T,W),c(T,U),c(u,M),c(u,y),ee(X,y,null),c(u,fe),c(u,ie),c(ie,le),c(le,re);for(let V=0;V<K.length;V+=1)K[V]&&K[V].m(re,null);c(le,Te),c(le,me);for(let V=0;V<O.length;V+=1)O[V]&&O[V].m(me,null);c(ie,_e),c(ie,oe),ee(pe,oe,null),ce=!0,Ee||(ge=xe(U,"click",a[3]),Ee=!0)},p(k,E){if(E&4){ue=ne(Object.keys(k[2]));let V;for(V=0;V<ue.length;V+=1){const g=Bt(k,ue,V);K[V]?(K[V].p(g,E),S(K[V],1)):(K[V]=jt(g),K[V].c(),S(K[V],1),K[V].m(re,null))}for(be(),V=ue.length;V<K.length;V+=1)Oe(V);ve()}if(E&4){ae=ne(Object.keys(k[2]));let V;for(V=0;V<ae.length;V+=1){const g=Mt(k,ae,V);O[V]?(O[V].p(g,E),S(O[V],1)):(O[V]=zt(g),O[V].c(),S(O[V],1),O[V].m(me,null))}for(be(),V=ae.length;V<O.length;V+=1)Ce(V);ve()}},i(k){if(!ce){k&&qe(()=>{ce&&(o&&o.end(1),n=He(e,Ae,{delay:250,duration:300}),n.start())}),S(s.$$.fragment,k),S(f.$$.fragment,k),S(b.$$.fragment,k),S(C.$$.fragment,k),S(A.$$.fragment,k),S(D.$$.fragment,k),S(q.$$.fragment,k),S(X.$$.fragment,k);for(let E=0;E<ue.length;E+=1)S(K[E]);for(let E=0;E<ae.length;E+=1)S(O[E]);S(pe.$$.fragment,k),ce=!0}},o(k){n&&n.invalidate(),k&&(o=We(e,Ae,{delay:250,duration:300})),P(s.$$.fragment,k),P(f.$$.fragment,k),P(b.$$.fragment,k),P(C.$$.fragment,k),P(A.$$.fragment,k),P(D.$$.fragment,k),P(q.$$.fragment,k),P(X.$$.fragment,k),K=K.filter(Boolean);for(let E=0;E<K.length;E+=1)P(K[E]);O=O.filter(Boolean);for(let E=0;E<O.length;E+=1)P(O[E]);P(pe.$$.fragment,k),ce=!1},d(k){k&&(h(e),h(t),h(u)),k&&o&&o.end(),te(s),te(f),te(b),te(C),te(A),te(D),te(q),te(X),we(K,k),we(O,k),te(pe),Ee=!1,ge()}}}function Sl(a){let e,r,n,o=ne(Object.keys(a[2][a[7]])),t=[];for(let i=0;i<o.length;i+=1)t[i]=Nt(At(a,o,i));const u=i=>P(t[i],1,1,()=>{t[i]=null});return{c(){e=m("div");for(let i=0;i<t.length;i+=1)t[i].c();r=F(),this.h()},l(i){e=_(i,"DIV",{class:!0});var s=v(e);for(let l=0;l<t.length;l+=1)t[l].l(s);r=B(s),s.forEach(h),this.h()},h(){p(e,"class","flex space-x-4")},m(i,s){G(i,e,s);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,null);c(e,r),n=!0},p(i,s){if(s&4){o=ne(Object.keys(i[2][i[7]]));let l;for(l=0;l<o.length;l+=1){const f=At(i,o,l);t[l]?(t[l].p(f,s),S(t[l],1)):(t[l]=Nt(f),t[l].c(),S(t[l],1),t[l].m(e,r))}for(be(),l=o.length;l<t.length;l+=1)u(l);ve()}},i(i){if(!n){for(let s=0;s<o.length;s+=1)S(t[s]);n=!0}},o(i){t=t.filter(Boolean);for(let s=0;s<t.length;s+=1)P(t[s]);n=!1},d(i){i&&h(e),we(t,i)}}}function Nt(a){let e,r;return e=new Pe({props:{currentItem:a[2][a[7]][a[10]],currentItemType:a[10],category:a[2][a[7]],categoryName:a[7],currentGears:a[2],builderType:"ship"}}),{c(){Z(e.$$.fragment)},l(n){J(e.$$.fragment,n)},m(n,o){ee(e,n,o),r=!0},p:De,i(n){r||(S(e.$$.fragment,n),r=!0)},o(n){P(e.$$.fragment,n),r=!1},d(n){te(e,n)}}}function xt(a){let e,r,n=a[7]!="deckhands"&&Sl(a);return{c(){n&&n.c(),e=$e()},l(o){n&&n.l(o),e=$e()},m(o,t){n&&n.m(o,t),G(o,e,t),r=!0},p(o,t){o[7]!="deckhands"&&n.p(o,t)},i(o){r||(S(n),r=!0)},o(o){P(n),r=!1},d(o){o&&h(e),n&&n.d(o)}}}function Il(a){let e,r,n,o=ne(Object.keys(a[2][a[7]])),t=[];for(let i=0;i<o.length;i+=1)t[i]=Pt(Dt(a,o,i));const u=i=>P(t[i],1,1,()=>{t[i]=null});return{c(){e=m("div");for(let i=0;i<t.length;i+=1)t[i].c();r=F(),this.h()},l(i){e=_(i,"DIV",{class:!0});var s=v(e);for(let l=0;l<t.length;l+=1)t[l].l(s);r=B(s),s.forEach(h),this.h()},h(){p(e,"class","flex space-x-2")},m(i,s){G(i,e,s);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,null);c(e,r),n=!0},p(i,s){if(s&4){o=ne(Object.keys(i[2][i[7]]));let l;for(l=0;l<o.length;l+=1){const f=Dt(i,o,l);t[l]?(t[l].p(f,s),S(t[l],1)):(t[l]=Pt(f),t[l].c(),S(t[l],1),t[l].m(e,r))}for(be(),l=o.length;l<t.length;l+=1)u(l);ve()}},i(i){if(!n){for(let s=0;s<o.length;s+=1)S(t[s]);n=!0}},o(i){t=t.filter(Boolean);for(let s=0;s<t.length;s+=1)P(t[s]);n=!1},d(i){i&&h(e),we(t,i)}}}function Pt(a){let e,r;return e=new Pe({props:{currentItem:a[2][a[7]][a[10]],currentItemType:a[10],category:a[2][a[7]],categoryName:a[7],currentGears:a[2],builderType:"ship"}}),{c(){Z(e.$$.fragment)},l(n){J(e.$$.fragment,n)},m(n,o){ee(e,n,o),r=!0},p:De,i(n){r||(S(e.$$.fragment,n),r=!0)},o(n){P(e.$$.fragment,n),r=!1},d(n){te(e,n)}}}function Ct(a){let e,r,n=a[7]=="deckhands"&&Il(a);return{c(){n&&n.c(),e=$e()},l(o){n&&n.l(o),e=$e()},m(o,t){n&&n.m(o,t),G(o,e,t),r=!0},p(o,t){o[7]=="deckhands"&&n.p(o,t)},i(o){r||(S(n),r=!0)},o(o){P(n),r=!1},d(o){o&&h(e),n&&n.d(o)}}}function Dl(a){let e,r,n,o=ne(Object.keys(a[2][a[7]])),t=[];for(let i=0;i<o.length;i+=1)t[i]=Rt(Vt(a,o,i));const u=i=>P(t[i],1,1,()=>{t[i]=null});return{c(){e=m("div");for(let i=0;i<t.length;i+=1)t[i].c();r=F(),this.h()},l(i){e=_(i,"DIV",{class:!0});var s=v(e);for(let l=0;l<t.length;l+=1)t[l].l(s);r=B(s),s.forEach(h),this.h()},h(){p(e,"class","flex space-x-4")},m(i,s){G(i,e,s);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,null);c(e,r),n=!0},p(i,s){if(s&4){o=ne(Object.keys(i[2][i[7]]));let l;for(l=0;l<o.length;l+=1){const f=Vt(i,o,l);t[l]?(t[l].p(f,s),S(t[l],1)):(t[l]=Rt(f),t[l].c(),S(t[l],1),t[l].m(e,r))}for(be(),l=o.length;l<t.length;l+=1)u(l);ve()}},i(i){if(!n){for(let s=0;s<o.length;s+=1)S(t[s]);n=!0}},o(i){t=t.filter(Boolean);for(let s=0;s<t.length;s+=1)P(t[s]);n=!1},d(i){i&&h(e),we(t,i)}}}function Rt(a){let e,r;return e=new Pe({props:{currentItem:a[2][a[7]][a[10]],currentItemType:a[10],category:a[2][a[7]],categoryName:a[7],currentGears:a[2],builderType:"ship"}}),{c(){Z(e.$$.fragment)},l(n){J(e.$$.fragment,n)},m(n,o){ee(e,n,o),r=!0},p:De,i(n){r||(S(e.$$.fragment,n),r=!0)},o(n){P(e.$$.fragment,n),r=!1},d(n){te(e,n)}}}function jt(a){let e,r,n=a[7]!="deckhands"&&Dl(a);return{c(){n&&n.c(),e=$e()},l(o){n&&n.l(o),e=$e()},m(o,t){n&&n.m(o,t),G(o,e,t),r=!0},p(o,t){o[7]!="deckhands"&&n.p(o,t)},i(o){r||(S(n),r=!0)},o(o){P(n),r=!1},d(o){o&&h(e),n&&n.d(o)}}}function Tl(a){let e,r,n,o=ne(Object.keys(a[2][a[7]])),t=[];for(let i=0;i<o.length;i+=1)t[i]=Gt(Ft(a,o,i));const u=i=>P(t[i],1,1,()=>{t[i]=null});return{c(){e=m("div");for(let i=0;i<t.length;i+=1)t[i].c();r=F(),this.h()},l(i){e=_(i,"DIV",{class:!0});var s=v(e);for(let l=0;l<t.length;l+=1)t[l].l(s);r=B(s),s.forEach(h),this.h()},h(){p(e,"class","flex flex-col")},m(i,s){G(i,e,s);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,null);c(e,r),n=!0},p(i,s){if(s&4){o=ne(Object.keys(i[2][i[7]]));let l;for(l=0;l<o.length;l+=1){const f=Ft(i,o,l);t[l]?(t[l].p(f,s),S(t[l],1)):(t[l]=Gt(f),t[l].c(),S(t[l],1),t[l].m(e,r))}for(be(),l=o.length;l<t.length;l+=1)u(l);ve()}},i(i){if(!n){for(let s=0;s<o.length;s+=1)S(t[s]);n=!0}},o(i){t=t.filter(Boolean);for(let s=0;s<t.length;s+=1)P(t[s]);n=!1},d(i){i&&h(e),we(t,i)}}}function Gt(a){let e,r;return e=new Pe({props:{currentItem:a[2][a[7]][a[10]],currentItemType:a[10],category:a[2][a[7]],categoryName:a[7],currentGears:a[2],builderType:"ship"}}),{c(){Z(e.$$.fragment)},l(n){J(e.$$.fragment,n)},m(n,o){ee(e,n,o),r=!0},p:De,i(n){r||(S(e.$$.fragment,n),r=!0)},o(n){P(e.$$.fragment,n),r=!1},d(n){te(e,n)}}}function zt(a){let e,r,n=a[7]=="deckhands"&&Tl(a);return{c(){n&&n.c(),e=$e()},l(o){n&&n.l(o),e=$e()},m(o,t){n&&n.m(o,t),G(o,e,t),r=!0},p(o,t){o[7]=="deckhands"&&n.p(o,t)},i(o){r||(S(n),r=!0)},o(o){P(n),r=!1},d(o){o&&h(e),n&&n.d(o)}}}function Al(a){let e,r,n,o,t,u,i,s,l,f,d,b,$,x,C,L,A,j,D=a[0]&&Ot(a);return{c(){e=m("meta"),r=m("meta"),n=m("meta"),o=m("meta"),t=m("meta"),u=m("meta"),i=m("meta"),s=m("meta"),l=m("meta"),f=m("meta"),d=m("meta"),b=m("meta"),$=m("link"),x=m("link"),C=m("link"),L=F(),A=m("section"),D&&D.c(),this.h()},l(R){const T=Zt("svelte-xc07np",se.head);e=_(T,"META",{name:!0,content:!0}),r=_(T,"META",{name:!0,content:!0}),n=_(T,"META",{property:!0,content:!0}),o=_(T,"META",{property:!0,content:!0}),t=_(T,"META",{property:!0,content:!0}),u=_(T,"META",{property:!0,content:!0}),i=_(T,"META",{property:!0,content:!0}),s=_(T,"META",{property:!0,content:!0}),l=_(T,"META",{property:!0,content:!0}),f=_(T,"META",{property:!0,content:!0}),d=_(T,"META",{property:!0,content:!0}),b=_(T,"META",{property:!0,content:!0}),$=_(T,"LINK",{rel:!0,href:!0}),x=_(T,"LINK",{rel:!0,href:!0}),C=_(T,"LINK",{href:!0,rel:!0}),T.forEach(h),L=B(R),A=_(R,"SECTION",{class:!0});var q=v(A);D&&D.l(q),q.forEach(h),this.h()},h(){se.title="Arcane Odyssey Tools",p(e,"name","title"),p(e,"content","Ship Builder"),p(r,"name","description"),p(r,"content","Ship Builder for Arcane Odyssey by BobbyNooby"),p(n,"property","og:type"),p(n,"content","website"),p(o,"property","og:url"),p(o,"content","https://tools.arcaneodyssey.net/"),p(t,"property","og:title"),p(t,"content","Ship Builder"),p(u,"property","og:description"),p(u,"content","Ship Builder for Arcane Odyssey by BobbyNooby"),p(i,"property","og:image"),p(i,"content","assets/images/icon.png"),p(s,"property","twitter:card"),p(s,"content","summary_large_image"),p(l,"property","twitter:url"),p(l,"content","https://tools.arcaneodyssey.net/"),p(f,"property","twitter:title"),p(f,"content","Ship Builder"),p(d,"property","twitter:description"),p(d,"content","Ship Builder for Arcane Odyssey by BobbyNooby"),p(b,"property","twitter:image"),p(b,"content","assets/images/icon.png"),p($,"rel","preconnect"),p($,"href","https://fonts.googleapis.com"),p(x,"rel","preconnect"),p(x,"href","https://fonts.gstatic.com"),p(C,"href","https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Open+Sans:wght@700&display=swap"),p(C,"rel","stylesheet"),p(A,"class","svelte-7w87tm")},m(R,T){c(se.head,e),c(se.head,r),c(se.head,n),c(se.head,o),c(se.head,t),c(se.head,u),c(se.head,i),c(se.head,s),c(se.head,l),c(se.head,f),c(se.head,d),c(se.head,b),c(se.head,$),c(se.head,x),c(se.head,C),G(R,L,T),G(R,A,T),D&&D.m(A,null),j=!0},p(R,[T]){R[0]?D?(D.p(R,T),T&1&&S(D,1)):(D=Ot(R),D.c(),S(D,1),D.m(A,null)):D&&(be(),P(D,1,1,()=>{D=null}),ve())},i(R){j||(S(D),j=!0)},o(R){P(D),j=!1},d(R){R&&(h(L),h(A)),h(e),h(r),h(n),h(o),h(t),h(u),h(i),h(s),h(l),h(f),h(d),h(b),h($),h(x),h(C),D&&D.d()}}}function Ml(a,e,r){let n;Q(a,je,f=>r(1,n=f));function o(){ht(window.location.hash.substring(1)),history.replaceState({},document.title,window.location.href.split("#")[0]),Re()}let t=!1;et(()=>{r(0,t=!0),ht(localStorage.getItem("currentShipBuild")),o()});function u(){window.innerWidth<768?tt(je,n=!0,n):tt(je,n=!1,n)}et(()=>{typeof window<"u"&&(u(),window.addEventListener("resize",()=>{u()}))});let i=ml();return[t,n,i,()=>{ze(),Re(),Ne()},()=>{ze(),Re(),Ne()}]}class Pl extends Ue{constructor(e){super(),Ye(this,e,Ml,Al,Le,{})}}export{Pl as component,xl as universal};
