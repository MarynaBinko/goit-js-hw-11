import{S as l}from"./assets/vendor-d5aa4654.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u=new l(".gallery a",{overlayOpacity:8,captionData:"href",captionDelay:250,captionClass:"text-center"}),f=document.querySelector(".gallery"),c=document.querySelector(".form");c.addEventListener("submit",d);function d(n){n.preventDefault();const t=c.querySelector("input[type='text']").value;console.log(t),p().then(s=>{f.innerHTML=y(s),u.refresh()}).catch(s=>i(s)).finally(()=>c.reset())}const m="43197174-dcc5f5044572d8f441379a766";function p(n){const o=new URLSearchParams({key:m,q:"searchQuery",image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${o}`).then(t=>{if(!t.ok)throw new Error(i(g));return t.json()})}function y(n){return n.map(({webformatURL:o,largeImageURL:t,tags:s,likes:e,views:r,comments:a,downloads:L})=>{}).join("")}let h=document.getElementById("toastBox");const g='<i class="fa-solid fa-xmark"></i>Sorry, there are no images matching your search query. Please try again!';function i(n,o){let t=document.createElement("div");t.classList.add("toast"),t.classList.add(o),t.innerHTML=n,h.appendChild(t),setTimeout(()=>{t.remove()},6e3)}
//# sourceMappingURL=commonHelpers.js.map
