(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(81),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\na {\n  text-decoration: none;\n  color: #e9c46a;\n}\n\n.btn {\n  display: grid;\n  place-content: center;\n  color: black;\n  border: none;\n  background-color: #e9c46a;\n  border-radius: 50%;\n  padding: 0.5rem;\n  font-size: 0.85rem;\n  box-shadow: 0 0.15rem 0.15rem #0003;\n  cursor: pointer;\n}\n\n.btn:hover {\n  transform: translateY(-0.1rem);\n  box-shadow: 0 0.25rem 0.25rem #0003;\n  background-color: #f4a261;\n}\n\n.size-6 {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n\n.size-8 {\n  width: 2rem;\n  height: 2rem;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n  min-height: 100vh;\n  max-height: 100vh;\n  background-color: #264653;\n  color: #ccc;\n}\n\nheader {\n  padding: 1rem;\n  text-align: center;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  flex-grow: 1;\n  max-width: 768px;\n  margin: 1rem auto;\n  padding: 1rem;\n}\n\n.refresh-wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n.leaderboard {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  list-style: none;\n  padding: 0;\n  flex-grow: 1;\n}\n\n.leaderboard li {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.5rem 1rem;\n  background-color: #0003;\n  border-radius: 1rem;\n}\n\n.leaderboard li:hover {\n  background-color: #0004;\n}\n\n.form-wrapper {\n  border: 2px solid #0007;\n  background-color: #2a9d8f;\n  padding: 1rem;\n  border-radius: 1rem;\n  text-align: center;\n  box-shadow: 0 0.5rem 1rem #0003;\n  order: -1;\n}\n\n.form-title {\n  margin-bottom: 1rem;\n}\n\n.form-wrapper form {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.form-wrapper form input {\n  border: 2px solid #0003;\n  background-color: #fff9;\n  border-radius: 0.5rem;\n  padding: 0.75rem;\n  width: 100%;\n  font-size: 1.25rem;\n}\n\n.form-wrapper form input::placeholder {\n  color: #264653;\n}\n\nfooter {\n  padding: 1rem;\n  background-color: #0003;\n  text-align: center;\n  font-size: 0.9rem;\n}\n\n@media (min-width: 768px) {\n  main {\n    display: grid;\n    grid-template-columns: 3fr 2fr;\n    align-items: flex-start;\n  }\n\n  .form-wrapper {\n    order: 0;\n  }\n}\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=t.base?s[0]+t.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=r(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,t);t.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=r(a[i]);e[c].references--}for(var s=t(n,o),d=0;d<a.length;d++){var l=r(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{const n=document.getElementById("leaderboard-wrapper"),e=document.getElementById("leaderboard-form"),t=document.getElementById("refresh-btn");async function o(){n.innerHTML="<li><p>loading...</p></li>";const e=(await async function(n){return(await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/DimCxZfu4FFAkICfsuHx/scores/")).json()}()).result.sort(((n,e)=>e.score-n.score));n.innerHTML="",e.forEach((e=>{!function({user:e,score:r}){const t=document.createElement("li"),o=document.createElement("p");o.innerText=e;const a=document.createElement("span");a.innerText=r,t.appendChild(o),t.appendChild(a),n.appendChild(t)}(e)}))}e.addEventListener("submit",(n=>{n.preventDefault(),async function(n,e){const r=await async function(n,e,r){return fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/DimCxZfu4FFAkICfsuHx/scores/",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({user:e,score:r})})}(0,n,e);201===r.status&&o()}(n.target.name.value,n.target.score.value),n.target.name.value="",n.target.score.value=""})),t.addEventListener("click",(async n=>{n.preventDefault(),o()}));var a=r(379),i=r.n(a),c=r(795),s=r.n(c),d=r(569),l=r.n(d),u=r(565),p=r.n(u),f=r(216),m=r.n(f),g=r(589),h=r.n(g),v=r(426),b={};b.styleTagTransform=h(),b.setAttributes=p(),b.insert=l().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=m(),i()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals})()})();