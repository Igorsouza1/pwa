if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>i(e,o),u={module:{uri:o},exports:l,require:t};s[o]=Promise.all(n.map((e=>u[e]||t(e)))).then((e=>(r(...e),l)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"cavalo_pwa_v2"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.37eae703.css",revision:null},{url:"/img/c.bf095351.png",revision:null},{url:"/img/cavaloPantaneiroMedidas.5020bc1e.png",revision:null},{url:"/index.html",revision:"d4f2d10efd50c038bbeddf12b04d1cee"},{url:"/js/app.f42cd317.js",revision:null},{url:"/js/chunk-vendors.f3349100.js",revision:null},{url:"/manifest.json",revision:"83751e516bf4a8e5ab0eb58fe7b26042"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
