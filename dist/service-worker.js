if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,o)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const n=e=>r(e,t),f={module:{uri:t},exports:c,require:n};s[t]=Promise.all(i.map((e=>f[e]||n(e)))).then((e=>(o(...e),c)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.css",revision:"57f76d11a613cc72dccc63cb1b1e1abe"},{url:"app.js",revision:"73c58727f52c821a8b30f03b7dda4bb0"},{url:"app.js.LICENSE.txt",revision:"56229fae8d8bb51f2b348f3dd49e6af3"},{url:"popup.css",revision:"bb7d0b3a9915f55c851f0cd242d16eb2"},{url:"popup.html",revision:"ea4f8ebdb4f3e8725235873524e4424a"},{url:"popup.js",revision:"8508be6afe24122af507435e0fb65a67"},{url:"popup.js.LICENSE.txt",revision:"ba985f6e05c0d5e39108dd3825b470e2"}],{})}));
