!function(t){var e={};function n(o){if(e[o])return e[o].exports;var c=e[o]={i:o,l:!1,exports:{}};return t[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)n.d(o,c,function(e){return t[e]}.bind(null,c));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(t,e,n){const o=document.documentElement;function c(r){t.contains(r.target)||(t.removeAttribute("data-outside"),e.forEach(t=>{o.removeEventListener(t,c)}),n())}t.hasAttribute("data-outside")||(e.forEach(t=>{setTimeout(()=>{o.addEventListener(t,c)})}),t.setAttribute("data-outside",""))}n.r(e);const c=document.querySelector('[data-menu="button"]'),r=document.querySelector('[data-menu="list"]'),a=["click","touchstart"];if(c){function i(t){r.classList.add("active"),c.classList.add("active"),o(r,a,()=>{r.classList.remove("active"),c.classList.remove("active")})}a.forEach(t=>c.addEventListener(t,i))}!function(t){const e=t.innerHTML.split("");t.innerHTML="",e.forEach((e,n)=>{setTimeout(()=>{t.innerHTML+=e},80*n)})}(document.querySelector("h1")),function(){const t=document.querySelectorAll("[data-anime]");function e(){const e=window.pageYOffset+2*window.innerHeight/3;t.forEach((function(t){e>t.offsetTop?t.classList.add("animated"):t.classList.remove("animated")}))}e(),window.addEventListener("scroll",(function(){e()}))}(),function(){function t(t){t.preventDefault();!function(t){!function(t,e,n){const o=window.scrollX||window.pageXOffset,c=window.scrollY||window.pageYOffset,r=t-o,a=e-c,i=(new Date).getTime();n=void 0!==n?n:1200;const s=(t,e,n,o)=>(t/=o/2)<1?n/2*t*t*t*t+e:-n/2*((t-=2)*t*t*t-2)+e,u=setInterval(()=>{const t=(new Date).getTime()-i,e=s(t,o,r,n),d=s(t,c,a,n);t>=n&&clearInterval(u),window.scroll(e,d)},1e3/60)}(0,t)}(function(t){const e=t.getAttribute("href");return document.querySelector(e).offsetTop}(t.target)-80)}document.querySelectorAll('.menu a[href^="#"]').forEach(e=>{e.addEventListener("click",t)})}(),function(){const t=document.querySelector('[data-modal="abrir"]'),e=document.querySelector('[data-modal="fechar"]'),n=document.querySelector('[data-modal="container"]');if(t&&e&&n){function o(t){t.preventDefault(),n.classList.toggle("ativo")}t.addEventListener("click",o),e.addEventListener("click",o),n.addEventListener("click",(function(t){t.target===this&&o(t)}))}}(),function(){function t(t){t.preventDefault(),this.classList.add("active"),o(this,["touchstart","click"],()=>{this.classList.remove("active")})}document.querySelectorAll("[data-dropdown]").forEach(e=>{["touchstart","click"].forEach(n=>{e.addEventListener(n,t)})})}(),function(){const t=document.querySelector('[data-menu="button"]'),e=document.querySelector('[data-menu="list"]'),n=["click","touchstart"];function c(c){e.classList.add("active"),t.classList.add("active"),o(e,n,()=>{e.classList.remove("active"),t.classList.remove("active")})}n.forEach(e=>{t.addEventListener("click",c)})}(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),n=t.dataset.horario.split(",").map(Number),o=new Date,c=o.getDay(),r=o.getHours(),a=-1!==e.indexOf(c),i=r>=n[0]&&r<n[1];a&&i&&t.classList.add("aberto")}()}]);