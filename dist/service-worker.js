if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,o)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let f={};const t=e=>r(e,c),n={module:{uri:c},exports:f,require:t};s[c]=Promise.all(i.map((e=>n[e]||t(e)))).then((e=>(o(...e),f)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.css",revision:"5654a2f9b4c28a54f8c10ffd5a75010f"},{url:"app.js",revision:"2dcccfa3032b5d584b116f7c73bcbe9e"},{url:"app.js.LICENSE.txt",revision:"56229fae8d8bb51f2b348f3dd49e6af3"},{url:"popup.css",revision:"c376e1b8b655eae174771fc06568eb7d"},{url:"popup.html",revision:"ea4f8ebdb4f3e8725235873524e4424a"},{url:"popup.js",revision:"7c2b37ab677f919a24c9ca6707f55350"},{url:"popup.js.LICENSE.txt",revision:"60f6bf9e100e456690e9ab6c9a37bfc2"}],{})}));
