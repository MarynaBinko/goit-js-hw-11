var l=(s,r)=>()=>(r||s((r={exports:{}}).exports,r),r.exports);import"./assets/vendor-60237e46.js";var d=l((p,n)=>{(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const u=require("path");n.exports={entry:"./src/index.js",output:{filename:"bundle.js",path:u.resolve(__dirname,"dist")},module:{rules:[{test:/\.css$/,use:["style-loader","css-loader"]}]}}});export default d();
//# sourceMappingURL=commonHelpers.js.map
