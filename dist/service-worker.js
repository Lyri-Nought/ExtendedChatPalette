if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,o)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const d=e=>r(e,c),n={module:{uri:c},exports:t,require:d};s[c]=Promise.all(i.map((e=>n[e]||d(e)))).then((e=>(o(...e),t)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.css",revision:"57f76d11a613cc72dccc63cb1b1e1abe"},{url:"app.js",revision:"b1c3ce35d4e842c561b610b1dbb67270"},{url:"app.js.LICENSE.txt",revision:"56229fae8d8bb51f2b348f3dd49e6af3"},{url:"popup.css",revision:"bb7d0b3a9915f55c851f0cd242d16eb2"},{url:"popup.html",revision:"ea4f8ebdb4f3e8725235873524e4424a"},{url:"popup.js",revision:"bd8189ef8edb46ec5f1a2007fbcc8390"},{url:"popup.js.LICENSE.txt",revision:"ba985f6e05c0d5e39108dd3825b470e2"}],{})}));
