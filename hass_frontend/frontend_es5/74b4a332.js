"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[99897],{38014:function(e,t,r){r.d(t,{uR:function(){return a},Py:function(){return s},dL:function(){return c},_Y:function(){return u},h_:function(){return l},Cj:function(){return f},hN:function(){return d},Kj:function(){return h},q6:function(){return p},Nw:function(){return m},Z0:function(){return _},j2:function(){return g},Kd:function(){return b},dO:function(){return w},Hs:function(){return k}});var n=r(91741);function i(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){c=!0,a=e},f:function(){try{s||null==r.return||r.return()}finally{if(c)throw a}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var a=function(e,t){return e.callWS({type:"recorder/list_statistic_ids",statistic_type:t})},s=function(e,t){return e.callWS({type:"recorder/get_statistics_metadata",statistic_ids:t})},c=function(e,t,r,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"hour",o=arguments.length>5?arguments[5]:void 0;return e.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),end_time:null==r?void 0:r.toISOString(),statistic_ids:n,period:i,units:o})},u=function(e,t,r,n){return e.callWS({type:"recorder/statistic_during_period",statistic_id:t,units:n,fixed_period:r.fixed_period?{start_time:r.fixed_period.start instanceof Date?r.fixed_period.start.toISOString():r.fixed_period.start,end_time:r.fixed_period.end instanceof Date?r.fixed_period.end.toISOString():r.fixed_period.end}:void 0,calendar:r.calendar,rolling_window:r.rolling_window})},l=function(e){return e.callWS({type:"recorder/validate_statistics"})},f=function(e,t,r){return e.callWS({type:"recorder/update_statistics_metadata",statistic_id:t,unit_of_measurement:r})},d=function(e,t){return e.callWS({type:"recorder/clear_statistics",statistic_ids:t})},h=function(e){if(!e||e.length<2)return null;var t=e[e.length-1].sum;if(null===t)return null;var r=e[0].sum;return null===r?t:t-r},p=function(e,t){var r,n=null,o=i(t);try{for(o.s();!(r=o.n()).done;){var a=r.value;if(a in e){var s=h(e[a]);null!==s&&(null===n?n=s:n+=s)}}}catch(c){o.e(c)}finally{o.f()}return n},m=function(e,t){return e.some((function(e){return null!==e[t]}))},v=["mean","min","max"],y=["sum"],_=function(e,t){return!(!v.includes(t)||!e.has_mean)||!(!y.includes(t)||!e.has_sum)},g=function(e,t,r,n,i){return e.callWS({type:"recorder/adjust_sum_statistics",statistic_id:t,start_time:r,adjustment:n,adjustment_unit_of_measurement:i})},b=function(e,t,r){var i=e.states[t];return i?(0,n.C)(i):(null==r?void 0:r.name)||t},w=function(e,t,r){var n,i;t&&(n=null===(i=e.states[t])||void 0===i?void 0:i.attributes.unit_of_measurement);return void 0===n?null==r?void 0:r.statistics_unit_of_measurement:n},k=function(e){return e.includes(":")}},99897:function(e,t,r){r.r(t),r.d(t,{HuiStatisticCard:function(){return W}});var n,i,o,a,s=r(37500),c=r(33310),u=r(62877),l=r(47181),f=r(84627),d=r(18457),h=(r(9381),r(22098),r(87037),r(38014)),p=r(50467),m=r(15688),v=r(53658),y=r(89026);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function g(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function b(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(u){return void r(u)}s.done?t(c):Promise.resolve(c).then(n,i)}function w(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){b(o,n,i,a,s,"next",e)}function s(e){b(o,n,i,a,s,"throw",e)}a(void 0)}))}}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=F(e);if(t){var i=F(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return S(this,r)}}function S(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return P(e)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(){O=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!A(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var u=c.extras;if(u){for(var l=0;l<u.length;l++)this.addElementPlacement(u[l],t);r.push.apply(r,u)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?z(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=T(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:R(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=R(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function j(e){var t,r=T(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function C(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function A(e){return e.decorators&&e.decorators.length}function D(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function R(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function T(e){var t=function(e,t){if("object"!==_(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===_(t)?t:String(t)}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function I(e,t,r){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=F(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r):i.value}},I(e,t,r||e)}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}var W=function(e,t,r,n){var i=O();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),r),s=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(D(o.descriptor)||D(i.descriptor)){if(A(o)||A(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(A(o)){if(A(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}C(o,i)}else t.push(o)}return t}(a.d.map(j)),e);return i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,c.Mo)("hui-statistic-card")],(function(e,t){var _,b,S,O,j=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(n,t);var r=x(n);function n(){var t;k(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=r.call.apply(r,[this].concat(o)),e(P(t)),t}return n}(t);return{F:j,d:[{kind:"method",static:!0,key:"getConfigElement",value:(O=w(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(29563),r.e(98985),r.e(79071),r.e(24103),r.e(88278),r.e(6294),r.e(41985),r.e(78874),r.e(45507),r.e(30456),r.e(3555),r.e(86630),r.e(77576),r.e(81545),r.e(12545),r.e(26272),r.e(13701),r.e(25727),r.e(11493)]).then(r.bind(r,5083));case 2:return e.abrupt("return",document.createElement("hui-statistic-card-editor"));case 3:case"end":return e.stop()}}),e)}))),function(){return O.apply(this,arguments)})},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,r){return{entity:(0,m.j)(e,1,t,r,["sensor"],(function(e){return"state_class"in e.attributes}))[0]||"",period:{calendar:{period:"month",offset:0}}}}},{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"_value",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"_metadata",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"_error",value:void 0},{kind:"field",key:"_interval",value:void 0},{kind:"field",key:"_footerElement",value:void 0},{kind:"method",key:"disconnectedCallback",value:function(){I(F(j.prototype),"disconnectedCallback",this).call(this),clearInterval(this._interval)}},{kind:"method",key:"setConfig",value:function(e){if(!e.entity)throw new Error("Entity must be specified");if(!e.stat_type)throw new Error("Statistic type must be specified");if(!e.period)throw new Error("Period must be specified");if(e.entity&&!(0,h.Hs)(e.entity)&&!(0,f.T)(e.entity))throw new Error("Invalid entity");this._config=e,this._error=void 0,this._fetchStatistic(),this._fetchMetadata(),this._config.footer?this._footerElement=(0,y.t)(this._config.footer):this._footerElement&&(this._footerElement=void 0)}},{kind:"method",key:"getCardSize",value:(S=w(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=2,!this._footerElement){e.next=12;break}if(r=(0,p.N)(this._footerElement),e.t0=t,!(r instanceof Promise)){e.next=10;break}return e.next=7,r;case 7:e.t1=e.sent,e.next=11;break;case 10:e.t1=r;case 11:t=e.t0+=e.t1;case 12:return e.abrupt("return",t);case 13:case"end":return e.stop()}}),e,this)}))),function(){return S.apply(this,arguments)})},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return(0,s.dy)(n||(n=g([""])));if(this._error)return(0,s.dy)(i||(i=g([' <ha-alert alert-type="error">',"</ha-alert> "])),this._error);var e=this.hass.states[this._config.entity],t=this._config.name||(0,h.Kd)(this.hass,this._config.entity,this._metadata);return(0,s.dy)(o||(o=g(["\n      <ha-card @click=",' tabindex="0">\n        <div class="header">\n          <div class="name" .title=',">",'</div>\n          <div class="icon">\n            <ha-state-icon\n              .icon=',"\n              .state=",'\n            ></ha-state-icon>\n          </div>\n        </div>\n        <div class="info">\n          <span class="value"\n            >','</span\n          >\n          <span class="measurement"\n            >',"</span\n          >\n        </div>\n        ","\n      </ha-card>\n    "])),this._handleClick,t,t,this._config.icon,e,void 0===this._value?"":null===this._value?"?":(0,d.uf)(this._value,this.hass.locale),this._config.unit||(0,h.dO)(this.hass,this._config.entity,this._metadata),this._footerElement)}},{kind:"method",key:"shouldUpdate",value:function(e){return this._footerElement&&(this._footerElement.hass=this.hass),!!(e.has("_value")||e.has("_metadata")||e.has("_error"))||(!this._config||(0,v.G)(this,e))}},{kind:"method",key:"firstUpdated",value:function(){this._fetchStatistic(),this._fetchMetadata()}},{kind:"method",key:"updated",value:function(e){if(I(F(j.prototype),"updated",this).call(this,e),this._config&&this.hass){var t=e.get("hass"),r=e.get("_config");t&&r&&t.themes===this.hass.themes&&r.theme===this._config.theme||(0,u.R)(this,this.hass.themes,this._config.theme)}}},{kind:"method",key:"_fetchStatistic",value:(b=w(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.hass&&this._config){e.next=2;break}return e.abrupt("return");case 2:return clearInterval(this._interval),this._interval=window.setInterval((function(){return r._fetchStatistic()}),3e5),e.prev=4,e.next=7,(0,h._Y)(this.hass,this._config.entity,this._config.period);case 7:t=e.sent,this._value=t[this._config.stat_type],this._error=void 0,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),this._error=e.t0.message;case 15:case"end":return e.stop()}}),e,this,[[4,12]])}))),function(){return b.apply(this,arguments)})},{kind:"method",key:"_fetchMetadata",value:(_=w(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.hass&&this._config){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,(0,h.Py)(this.hass,[this._config.entity]);case 5:if(e.t1=t=e.sent,e.t0=null===e.t1,e.t0){e.next=9;break}e.t0=void 0===t;case 9:if(!e.t0){e.next=13;break}e.t2=void 0,e.next=14;break;case 13:e.t2=t[0];case 14:this._metadata=e.t2,e.next=20;break;case 17:e.prev=17,e.t3=e.catch(2),this._error=e.t3.message;case 20:case"end":return e.stop()}}),e,this,[[2,17]])}))),function(){return _.apply(this,arguments)})},{kind:"method",key:"_handleClick",value:function(){(0,l.B)(this,"hass-more-info",{entityId:this._config.entity})}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,s.iv)(a||(a=g(["\n        ha-card {\n          height: 100%;\n          display: flex;\n          flex-direction: column;\n          justify-content: space-between;\n          cursor: pointer;\n          outline: none;\n        }\n\n        .header {\n          display: flex;\n          padding: 8px 16px 0;\n          justify-content: space-between;\n        }\n\n        .name {\n          color: var(--secondary-text-color);\n          line-height: 40px;\n          font-weight: 500;\n          font-size: 16px;\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n        }\n\n        .icon {\n          color: var(--state-icon-color, #44739e);\n          line-height: 40px;\n        }\n\n        .info {\n          padding: 0px 16px 16px;\n          margin-top: -4px;\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          line-height: 28px;\n        }\n\n        .value {\n          font-size: 28px;\n          margin-right: 4px;\n        }\n\n        .measurement {\n          font-size: 18px;\n          color: var(--secondary-text-color);\n        }\n      "])))]}}]}}),s.oi)}}]);