parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"EF2S":[function(require,module,exports) {
module.exports=[{price:100,id:1,color:"black",category:"hue",type:"primary",code:{rgba:[255,255,255,1],hex:"#000"}},{price:200,id:2,color:"white",type:"primary",category:"primary",code:{rgba:[0,0,0,1],hex:"#FFF"}},{price:120,id:3,color:"red",category:"hue",type:"primary",code:{rgba:[255,0,0,1],hex:"#FF0"}},{price:140,id:4,color:"blue",category:"hue",type:"primary",code:{rgba:[0,0,255,1],hex:"#00F"}},{price:80,id:5,color:"yellow",category:"hue",type:"primary",code:{rgba:[255,255,0,1],hex:"#FF0"}},{price:500,id:6,color:"green",category:"hue",type:"secondary",code:{rgba:[0,255,0,1],hex:"#0F0"}},{price:1e3,id:7,color:"black",category:"hue",type:"secondary",code:{rgba:[0,0,0,1],hex:"#000"}}];
},{}],"p7kT":[function(require,module,exports) {
"use strict";var t=e(require("../items.json"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return i(t)||c(t)||o(t)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}function c(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function i(t){if(Array.isArray(t))return u(t)}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var a=document.querySelector(".store-items"),l=document.querySelector(".cart-items"),m=document.querySelector(".cart-btn"),y=document.querySelector("#store-item-template"),d=document.querySelector("#cart-item-template"),s=r(t.default);function f(){s.forEach(function(t){var e=p(t);a.appendChild(e)})}function p(t){var e=y.content.cloneNode(!0).querySelector(".store-item"),r=e.querySelector(".item-display"),n=e.querySelector(".item-type"),o=e.querySelector(".item-name"),c=e.querySelector(".item-price");return r.style.backgroundColor=t.color,n.innerText=t.type,o.innerText=t.color,c.innerText="$ ".concat(t.price),e.id=t.id,e}document.addEventListener("click",function(t){t.target.matches(".add-to-cart")}),f();var q=[];function S(){0!=q.length?document.querySelector(".cart-btn").setAttribute("show",""):document.querySelector(".cart-btn").removeAttribute("show"),q.forEach(function(t){var e=b(t);l.appendChild(e)})}function b(t){if(0==t.quantity)return null;var e=d.content.cloneNode(!0).querySelector(".cart-item"),r=e.querySelector(".cart-item-display"),n=e.querySelector(".cart-item-name"),o=e.querySelector(".cart-item-quantity"),c=e.querySelector(".cart-item-total-price");return r.style.backgroundColor=t.item.color,n.innerText=t.item.color,o.innerText="x".concat(t.quantity),c.innerText="$ ".concat(t.item.price*t.quantity),e.id=t.id,e}S(),document.addEventListener("click",function(t){t.target.matches(".cart-btn>img")&&l.toggleAttribute("show")});
},{"../items.json":"EF2S"}]},{},["p7kT"], null)
//# sourceMappingURL=/script.cc2be6ad.js.map