if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,o)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const d=e=>r(e,t),f={module:{uri:t},exports:n,require:d};s[t]=Promise.all(i.map((e=>f[e]||d(e)))).then((e=>(o(...e),n)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.css",revision:"20669595ae0f9c95210ea6b40e153405"},{url:"app.js",revision:"065e56164e97af723f1792ba6fd93a98"},{url:"app.js.LICENSE.txt",revision:"56229fae8d8bb51f2b348f3dd49e6af3"},{url:"popup.css",revision:"bb7d0b3a9915f55c851f0cd242d16eb2"},{url:"popup.html",revision:"ea4f8ebdb4f3e8725235873524e4424a"},{url:"popup.js",revision:"c76dc273784093e98f7d6782a6a8471d"},{url:"popup.js.LICENSE.txt",revision:"ba985f6e05c0d5e39108dd3825b470e2"}],{})}));
