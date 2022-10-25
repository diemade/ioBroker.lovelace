/*! For license information please see fb2cfe3a.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[43717,86603],{63207:(e,t,n)=>{n(65660),n(15112);var i=n(9672),r=n(87156),s=n(50856),a=n(48175);(0,i.k)({_template:s.d`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:a.XY.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(e){var t=(e||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(e){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&(0,r.vz)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,(0,r.vz)(this.root).appendChild(this._img))}})},15112:(e,t,n)=>{n.d(t,{P:()=>r});n(48175);var i=n(9672);class r{constructor(e){r[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return r.types[e]&&r.types[e][t]}set value(e){var t=this.type,n=this.key;t&&n&&(t=r.types[t]=r.types[t]||{},null==e?delete t[n]:t[n]=e)}get list(){if(this.type){var e=r.types[this.type];return e?Object.keys(e).map((function(e){return s[this.type][e]}),this):[]}}byKey(e){return this.key=e,this.value}}r[" "]=function(){},r.types={};var s=r.types;(0,i.k)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,n){var i=new r({type:e,key:t});return void 0!==n&&n!==i.value?i.value=n:this.value!==i.value&&(this.value=i.value),i},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new r({type:this.type,key:e}).value}})},21560:(e,t,n)=>{n.d(t,{ZH:()=>l,MT:()=>s,U2:()=>c,RV:()=>r,t8:()=>u});const i=function(){if(!(!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent))||!indexedDB.databases)return Promise.resolve();let e;return new Promise((t=>{const n=()=>indexedDB.databases().finally(t);e=setInterval(n,100),n()})).finally((()=>clearInterval(e)))};function r(e){return new Promise(((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)}))}function s(e,t){const n=i().then((()=>{const n=indexedDB.open(e);return n.onupgradeneeded=()=>n.result.createObjectStore(t),r(n)}));return(e,i)=>n.then((n=>i(n.transaction(t,e).objectStore(t))))}let a;function o(){return a||(a=s("keyval-store","keyval")),a}function c(e,t=o()){return t("readonly",(t=>r(t.get(e))))}function u(e,t,n=o()){return n("readwrite",(n=>(n.put(t,e),r(n.transaction))))}function l(e=o()){return e("readwrite",(e=>(e.clear(),r(e.transaction))))}},93217:(e,t,n)=>{n.d(t,{Ud:()=>h});const i=Symbol("Comlink.proxy"),r=Symbol("Comlink.endpoint"),s=Symbol("Comlink.releaseProxy"),a=Symbol("Comlink.thrown"),o=e=>"object"==typeof e&&null!==e||"function"==typeof e,c=new Map([["proxy",{canHandle:e=>o(e)&&e[i],serialize(e){const{port1:t,port2:n}=new MessageChannel;return u(e,t),[n,[n]]},deserialize:e=>(e.start(),h(e))}],["throw",{canHandle:e=>o(e)&&a in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function u(e,t=self){t.addEventListener("message",(function n(r){if(!r||!r.data)return;const{id:s,type:o,path:c}=Object.assign({path:[]},r.data),h=(r.data.argumentList||[]).map(v);let p;try{const t=c.slice(0,-1).reduce(((e,t)=>e[t]),e),n=c.reduce(((e,t)=>e[t]),e);switch(o){case"GET":p=n;break;case"SET":t[c.slice(-1)[0]]=v(r.data.value),p=!0;break;case"APPLY":p=n.apply(t,h);break;case"CONSTRUCT":p=function(e){return Object.assign(e,{[i]:!0})}(new n(...h));break;case"ENDPOINT":{const{port1:t,port2:n}=new MessageChannel;u(e,n),p=function(e,t){return m.set(e,t),e}(t,[t])}break;case"RELEASE":p=void 0;break;default:return}}catch(e){p={value:e,[a]:0}}Promise.resolve(p).catch((e=>({value:e,[a]:0}))).then((e=>{const[i,r]=g(e);t.postMessage(Object.assign(Object.assign({},i),{id:s}),r),"RELEASE"===o&&(t.removeEventListener("message",n),l(t))}))})),t.start&&t.start()}function l(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function h(e,t){return d(e,[],t)}function p(e){if(e)throw new Error("Proxy has been released and is not useable")}function d(e,t=[],n=function(){}){let i=!1;const a=new Proxy(n,{get(n,r){if(p(i),r===s)return()=>f(e,{type:"RELEASE",path:t.map((e=>e.toString()))}).then((()=>{l(e),i=!0}));if("then"===r){if(0===t.length)return{then:()=>a};const n=f(e,{type:"GET",path:t.map((e=>e.toString()))}).then(v);return n.then.bind(n)}return d(e,[...t,r])},set(n,r,s){p(i);const[a,o]=g(s);return f(e,{type:"SET",path:[...t,r].map((e=>e.toString())),value:a},o).then(v)},apply(n,s,a){p(i);const o=t[t.length-1];if(o===r)return f(e,{type:"ENDPOINT"}).then(v);if("bind"===o)return d(e,t.slice(0,-1));const[c,u]=y(a);return f(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:c},u).then(v)},construct(n,r){p(i);const[s,a]=y(r);return f(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:s},a).then(v)}});return a}function y(e){const t=e.map(g);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const m=new WeakMap;function g(e){for(const[t,n]of c)if(n.canHandle(e)){const[i,r]=n.serialize(e);return[{type:"HANDLER",name:t,value:i},r]}return[{type:"RAW",value:e},m.get(e)||[]]}function v(e){switch(e.type){case"HANDLER":return c.get(e.name).deserialize(e.value);case"RAW":return e.value}}function f(e,t,n){return new Promise((i=>{const r=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===r&&(e.removeEventListener("message",t),i(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:r},t),n)}))}},57835:(e,t,n)=>{n.d(t,{Xe:()=>i.Xe,pX:()=>i.pX,XM:()=>i.XM});var i=n(38941)}}]);
//# sourceMappingURL=fb2cfe3a.js.map