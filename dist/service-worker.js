if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,o)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const f=e=>r(e,t),n={module:{uri:t},exports:c,require:f};s[t]=Promise.all(i.map((e=>n[e]||f(e)))).then((e=>(o(...e),c)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.css",revision:"37ebf13d4e32999cce122030c79c2f88"},{url:"app.js",revision:"8c193aff638f82cea96680554d4788d8"},{url:"app.js.LICENSE.txt",revision:"60f6bf9e100e456690e9ab6c9a37bfc2"},{url:"popup.css",revision:"05f1e943805d37d32e5f41010faf7609"},{url:"popup.html",revision:"ea4f8ebdb4f3e8725235873524e4424a"},{url:"popup.js",revision:"a8540c9097d6cbc7fd264eb3baaa5319"},{url:"popup.js.LICENSE.txt",revision:"8878730a0213556ef52c3e896cdeb326"}],{})}));
