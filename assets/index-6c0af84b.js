(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();function l(t){document.querySelector("body").style.backgroundColor=t}function d(t){let o=t;o.indexOf("#")===0&&(o=t.substring(1));const r=parseInt(o,16),s=r>>16,e=r>>8&255,n=r&255;return[s,e,n]}function u(t){const o=(t[0]*299+t[1]*587+t[2]*114)/1e3,r=document.querySelector("body");o<125?(r.classList.add("dark"),r.classList.remove("light")):(r.classList.add("light"),r.classList.remove("dark"))}function a(){const t="0123456789ABCDEF";let o="#";for(let r=0;r<6;r+=1)o+=t.charAt(Math.floor(Math.random()*15)+0);return o}function i(){const t=a();document.querySelector(".header").textContent=t,l(t);const o=d(t);document.querySelector("title").textContent=t,u(o)}document.addEventListener("mousedown",i);i();
