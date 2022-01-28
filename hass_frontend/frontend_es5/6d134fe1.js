"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[738],{23682:function(t,n,e){function r(t,n){if(n.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+n.length+" present")}e.d(n,{Z:function(){return r}})},90394:function(t,n,e){function r(t){if(null===t||!0===t||!1===t)return NaN;var n=Number(t);return isNaN(n)?n:n<0?Math.ceil(n):Math.floor(n)}e.d(n,{Z:function(){return r}})},59699:function(t,n,e){e.d(n,{Z:function(){return i}});var r=e(90394),o=e(39244),u=e(23682),a=36e5;function i(t,n){(0,u.Z)(2,arguments);var e=(0,r.Z)(n);return(0,o.Z)(t,e*a)}},39244:function(t,n,e){e.d(n,{Z:function(){return a}});var r=e(90394),o=e(34327),u=e(23682);function a(t,n){(0,u.Z)(2,arguments);var e=(0,o.Z)(t).getTime(),a=(0,r.Z)(n);return new Date(e+a)}},4535:function(t,n,e){e.d(n,{Z:function(){return f}});var r=e(34327);function o(t){var n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),t.getTime()-n.getTime()}var u=e(59429),a=e(23682),i=864e5;function c(t,n){(0,a.Z)(2,arguments);var e=(0,u.Z)(t),r=(0,u.Z)(n),c=e.getTime()-o(e),s=r.getTime()-o(r);return Math.round((c-s)/i)}function s(t,n){var e=t.getFullYear()-n.getFullYear()||t.getMonth()-n.getMonth()||t.getDate()-n.getDate()||t.getHours()-n.getHours()||t.getMinutes()-n.getMinutes()||t.getSeconds()-n.getSeconds()||t.getMilliseconds()-n.getMilliseconds();return e<0?-1:e>0?1:e}function f(t,n){(0,a.Z)(2,arguments);var e=(0,r.Z)(t),o=(0,r.Z)(n),u=s(e,o),i=Math.abs(c(e,o));e.setDate(e.getDate()-u*i);var f=Number(s(e,o)===-u),l=u*(i-f);return 0===l?0:l}},93752:function(t,n,e){e.d(n,{Z:function(){return u}});var r=e(34327),o=e(23682);function u(t){(0,o.Z)(1,arguments);var n=(0,r.Z)(t);return n.setHours(23,59,59,999),n}},70390:function(t,n,e){e.d(n,{Z:function(){return o}});var r=e(93752);function o(){return(0,r.Z)(Date.now())}},47538:function(t,n,e){function r(){var t=new Date,n=t.getFullYear(),e=t.getMonth(),r=t.getDate(),o=new Date(0);return o.setFullYear(n,e,r-1),o.setHours(23,59,59,999),o}e.d(n,{Z:function(){return r}})},59429:function(t,n,e){e.d(n,{Z:function(){return u}});var r=e(34327),o=e(23682);function u(t){(0,o.Z)(1,arguments);var n=(0,r.Z)(t);return n.setHours(0,0,0,0),n}},27088:function(t,n,e){e.d(n,{Z:function(){return o}});var r=e(59429);function o(){return(0,r.Z)(Date.now())}},83008:function(t,n,e){function r(){var t=new Date,n=t.getFullYear(),e=t.getMonth(),r=t.getDate(),o=new Date(0);return o.setFullYear(n,e,r-1),o.setHours(0,0,0,0),o}e.d(n,{Z:function(){return r}})},34327:function(t,n,e){e.d(n,{Z:function(){return u}});var r=e(23682);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function u(t){(0,r.Z)(1,arguments);var n=Object.prototype.toString.call(t);return t instanceof Date||"object"===o(t)&&"[object Date]"===n?new Date(t.getTime()):"number"==typeof t||"[object Number]"===n?new Date(t):("string"!=typeof t&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}},7323:function(t,n,e){e.d(n,{p:function(){return r}});var r=function(t,n){return t&&t.config.components.includes(n)}},57066:function(t,n,e){e.d(n,{Lo:function(){return a},IO:function(){return i},qv:function(){return c},sG:function(){return l}});var r=e(97330),o=e(85415),u=e(38346),a=function(t,n){return t.callWS(Object.assign({type:"config/area_registry/create"},n))},i=function(t,n,e){return t.callWS(Object.assign({type:"config/area_registry/update",area_id:n},e))},c=function(t,n){return t.callWS({type:"config/area_registry/delete",area_id:n})},s=function(t){return t.sendMessagePromise({type:"config/area_registry/list"}).then((function(t){return t.sort((function(t,n){return(0,o.$)(t.name,n.name)}))}))},f=function(t,n){return t.subscribeEvents((0,u.D)((function(){return s(t).then((function(t){return n.setState(t,!0)}))}),500,!0),"area_registry_updated")},l=function(t,n){return(0,r.B)("_areaRegistry",s,f,t,n)}},57292:function(t,n,e){e.d(n,{jL:function(){return c},t1:function(){return s},_Y:function(){return f},q4:function(){return g}});var r=e(97330),o=e(91741),u=e(38346);function a(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return a=t.done,t},e:function(t){c=!0,u=t},f:function(){try{a||null==e.return||e.return()}finally{if(c)throw u}}}}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var c=function(t,n,e){return t.name_by_user||t.name||e&&function(t,n){var e,r=a(n||[]);try{for(r.s();!(e=r.n()).done;){var u=e.value,i="string"==typeof u?u:u.entity_id,c=t.states[i];if(c)return(0,o.C)(c)}}catch(s){r.e(s)}finally{r.f()}}(n,e)||n.localize("ui.panel.config.devices.unnamed_device")},s=function(t,n,e){return t.callWS(Object.assign({type:"config/device_registry/update",device_id:n},e))},f=function(t){return t.sendMessagePromise({type:"config/device_registry/list"})},l=function(t,n){return t.subscribeEvents((0,u.D)((function(){return f(t).then((function(t){return n.setState(t,!0)}))}),500,!0),"device_registry_updated")},g=function(t,n){return(0,r.B)("_dr",f,l,t,n)}},76478:function(t,n,e){e.r(n),e.d(n,{OriginalStatesStrategy:function(){return m}});var r=e(28101),o=e(7323),u=e(11950),a=e(57066),i=e(57292),c=e(55424),s=e(74186),f=e(38926);function l(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,u=[],a=!0,i=!1;try{for(e=e.call(t);!(a=(r=e.next()).done)&&(u.push(r.value),!n||u.length!==n);a=!0);}catch(c){i=!0,o=c}finally{try{a||null==e.return||e.return()}finally{if(i)throw o}}return u}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return g(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return g(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function y(t,n,e,r,o,u,a){try{var i=t[u](a),c=i.value}catch(s){return void e(s)}i.done?n(c):Promise.resolve(c).then(r,o)}function d(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var u=t.apply(n,e);function a(t){y(u,r,o,a,i,"next",t)}function i(t){y(u,r,o,a,i,"throw",t)}a(void 0)}))}}function p(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var v=!1,m=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,e,g,y,m;return n=t,e=null,g=[{key:"generateView",value:(m=d(regeneratorRuntime.mark((function t(n){var e,g,y,d,p,m,b,h,w,Z;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((e=n.hass).config.state!==r.UE){t.next=3;break}return t.abrupt("return",{cards:[{type:"starting"}]});case 3:if(!e.config.safe_mode){t.next=5;break}return t.abrupt("return",{cards:[{type:"safe-mode"}]});case 5:return v||(v=!0,(0,a.sG)(e.connection,(function(){})),(0,i.q4)(e.connection,(function(){})),(0,s.LM)(e.connection,(function(){}))),(0,o.p)(e,"energy")&&(g=(0,c.ZC)(e)),t.next=9,Promise.all([(0,u.l)(e.connection,a.sG),(0,u.l)(e.connection,i.q4),(0,u.l)(e.connection,s.LM),e.loadBackendTranslation("title")]);case 9:if(y=t.sent,d=l(y,4),p=d[0],m=d[1],b=d[2],h=d[3],!g){t.next=24;break}return t.prev=16,t.next=19,g;case 19:w=t.sent,t.next=24;break;case 22:t.prev=22,t.t0=t.catch(16);case 24:return Z=(0,f.AP)(p,m,b,e.states,h,w),e.config.components.includes("geo_location")&&Z&&Z.cards&&Z.cards.push({type:"map",geo_location_sources:["all"]}),0===Z.cards.length&&Z.cards.push({type:"empty-state"}),t.abrupt("return",Z);case 28:case"end":return t.stop()}}),t,null,[[16,22]])}))),function(t){return m.apply(this,arguments)})},{key:"generateDashboard",value:(y=d(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{title:n.hass.config.location_name,views:[{strategy:{type:"original-states"}}]});case 1:case"end":return t.stop()}}),t)}))),function(t){return y.apply(this,arguments)})}],e&&p(n.prototype,e),g&&p(n,g),t}()}}]);