parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wb1e":[function(require,module,exports) {
window.bp=window.bp||{},bp.clear=(e=>{const t=document.getElementById(e);if(!t)return;const i=t.querySelector("input:checked"),l=t.querySelectorAll("option");i&&(i.checked=""),l&&l.forEach(e=>{e.selected=!1})}),document.querySelectorAll(".visibility-toggle-link").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();const t=e.target,i=t.closest(".field-visibility-settings-toggle"),l=i.nextElementSibling;t.setAttribute("aria-expanded",!0),i.style.display="none",l.style.display="block"})}),document.querySelectorAll(".field-visibility-settings-close").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".field-visibility-settings"),i=t.previousElementSibling,l=t.querySelector("input:checked").nextElementSibling.innerHTML;t.style.display="none",i.querySelector(".visibility-toggle-link").setAttribute("aria-expanded",!1),i.querySelector(".current-visibility-level").innerHTML=l,i.style.display="block"})});
},{}]},{},["wb1e"], null)
//# sourceMappingURL=/bp-members/admin/js/admin.js.map