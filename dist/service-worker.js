if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,o)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const n=e=>r(e,t),f={module:{uri:t},exports:c,require:n};s[t]=Promise.all(i.map((e=>f[e]||n(e)))).then((e=>(o(...e),c)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.css",revision:"57f76d11a613cc72dccc63cb1b1e1abe"},{url:"app.js",revision:"39079f37734f6bab773231a8413a78bd"},{url:"app.js.LICENSE.txt",revision:"56229fae8d8bb51f2b348f3dd49e6af3"},{url:"popup.css",revision:"c376e1b8b655eae174771fc06568eb7d"},{url:"popup.html",revision:"ea4f8ebdb4f3e8725235873524e4424a"},{url:"popup.js",revision:"5a92a41f96a8c09c4d9605d891da0f5a"},{url:"popup.js.LICENSE.txt",revision:"60f6bf9e100e456690e9ab6c9a37bfc2"}],{})}));
