/*! For license information please see 0b11d2cb.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[22460],{95165:(e,t,r)=>{r.d(t,{U:()=>i,j:()=>n});var i={ROOT:"mdc-form-field"},n={LABEL_SELECTOR:".mdc-form-field > label"}},15892:(e,t,r)=>{r.d(t,{C:()=>a});var i=r(87480),n=r(72774),o=r(95165);const a=function(e){function t(r){var n=e.call(this,(0,i.__assign)((0,i.__assign)({},t.defaultAdapter),r))||this;return n.click=function(){n.handleClick()},n}return(0,i.__extends)(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return o.U},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return o.j},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},t.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},t.prototype.handleClick=function(){var e=this;this.adapter.activateInputRipple(),requestAnimationFrame((function(){e.adapter.deactivateInputRipple()}))},t}(n.K)},54930:(e,t,r)=>{r.d(t,{D:()=>m});var i=r(87480),n=r(26767),o=r(38103),a=r(37500),s=r(5701),c=r(228),l=r(48399),d=r(47501);class p extends a.oi{constructor(){super(...arguments),this.indeterminate=!1,this.progress=0,this.density=0,this.closed=!1}open(){this.closed=!1}close(){this.closed=!0}render(){const e={"mdc-circular-progress--closed":this.closed,"mdc-circular-progress--indeterminate":this.indeterminate},t=48+4*this.density,r={width:`${t}px`,height:`${t}px`};return a.dy`
      <div
        class="mdc-circular-progress ${(0,c.$)(e)}"
        style="${(0,d.V)(r)}"
        role="progressbar"
        aria-label="${(0,l.o)(this.ariaLabel)}"
        aria-valuemin="0"
        aria-valuemax="1"
        aria-valuenow="${(0,l.o)(this.indeterminate?void 0:this.progress)}">
        ${this.renderDeterminateContainer()}
        ${this.renderIndeterminateContainer()}
      </div>`}renderDeterminateContainer(){const e=48+4*this.density,t=e/2,r=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,i=6.2831852*r,n=(1-this.progress)*i,o=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return a.dy`
      <div class="mdc-circular-progress__determinate-container">
        <svg class="mdc-circular-progress__determinate-circle-graphic"
             viewBox="0 0 ${e} ${e}">
          <circle class="mdc-circular-progress__determinate-track"
                  cx="${t}" cy="${t}" r="${r}"
                  stroke-width="${o}"></circle>
          <circle class="mdc-circular-progress__determinate-circle"
                  cx="${t}" cy="${t}" r="${r}"
                  stroke-dasharray="${6.2831852*r}"
                  stroke-dashoffset="${n}"
                  stroke-width="${o}"></circle>
        </svg>
      </div>`}renderIndeterminateContainer(){return a.dy`
      <div class="mdc-circular-progress__indeterminate-container">
        <div class="mdc-circular-progress__spinner-layer">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
      </div>`}renderIndeterminateSpinnerLayer(){const e=48+4*this.density,t=e/2,r=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,i=6.2831852*r,n=.5*i,o=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return a.dy`
        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${e} ${e}">
            <circle cx="${t}" cy="${t}" r="${r}"
                    stroke-dasharray="${i}"
                    stroke-dashoffset="${n}"
                    stroke-width="${o}"></circle>
          </svg>
        </div>
        <div class="mdc-circular-progress__gap-patch">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${e} ${e}">
            <circle cx="${t}" cy="${t}" r="${r}"
                    stroke-dasharray="${i}"
                    stroke-dashoffset="${n}"
                    stroke-width="${.8*o}"></circle>
          </svg>
        </div>
        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${e} ${e}">
            <circle cx="${t}" cy="${t}" r="${r}"
                    stroke-dasharray="${i}"
                    stroke-dashoffset="${n}"
                    stroke-width="${o}"></circle>
          </svg>
        </div>`}update(e){super.update(e),e.has("progress")&&(this.progress>1&&(this.progress=1),this.progress<0&&(this.progress=0))}}(0,i.__decorate)([(0,s.C)({type:Boolean,reflect:!0})],p.prototype,"indeterminate",void 0),(0,i.__decorate)([(0,s.C)({type:Number,reflect:!0})],p.prototype,"progress",void 0),(0,i.__decorate)([(0,s.C)({type:Number,reflect:!0})],p.prototype,"density",void 0),(0,i.__decorate)([(0,s.C)({type:Boolean,reflect:!0})],p.prototype,"closed",void 0),(0,i.__decorate)([o.L,(0,s.C)({type:String,attribute:"aria-label"})],p.prototype,"ariaLabel",void 0);const u=a.iv`.mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}.mdc-circular-progress__determinate-track{stroke:transparent}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:transparent}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}:host{display:inline-flex}.mdc-circular-progress__determinate-track{stroke:transparent;stroke:var(--mdc-circular-progress-track-color, transparent)}`;let m=class extends p{};m.styles=[u],m=(0,i.__decorate)([(0,n.M)("mwc-circular-progress")],m)},93751:(e,t,r)=>{r.d(t,{a:()=>m});var i=r(87480),n=r(15892),o=r(78220),a=r(18601),s=r(14114),c=r(37500),l=r(5701),d=r(67352),p=r(32930),u=r(228);class m extends o.H{constructor(){super(...arguments),this.alignEnd=!1,this.spaceBetween=!1,this.nowrap=!1,this.label="",this.mdcFoundationClass=n.C}createAdapter(){return{registerInteractionHandler:(e,t)=>{this.labelEl.addEventListener(e,t)},deregisterInteractionHandler:(e,t)=>{this.labelEl.removeEventListener(e,t)},activateInputRipple:async()=>{const e=this.input;if(e instanceof a.Wg){const t=await e.ripple;t&&t.startPress()}},deactivateInputRipple:async()=>{const e=this.input;if(e instanceof a.Wg){const t=await e.ripple;t&&t.endPress()}}}}get input(){var e,t;return null!==(t=null===(e=this.slottedInputs)||void 0===e?void 0:e[0])&&void 0!==t?t:null}render(){const e={"mdc-form-field--align-end":this.alignEnd,"mdc-form-field--space-between":this.spaceBetween,"mdc-form-field--nowrap":this.nowrap};return c.dy`
      <div class="mdc-form-field ${(0,u.$)(e)}">
        <slot></slot>
        <label class="mdc-label"
               @click="${this._labelClick}">${this.label}</label>
      </div>`}click(){this._labelClick()}_labelClick(){const e=this.input;e&&(e.focus(),e.click())}}(0,i.__decorate)([(0,l.C)({type:Boolean})],m.prototype,"alignEnd",void 0),(0,i.__decorate)([(0,l.C)({type:Boolean})],m.prototype,"spaceBetween",void 0),(0,i.__decorate)([(0,l.C)({type:Boolean})],m.prototype,"nowrap",void 0),(0,i.__decorate)([(0,l.C)({type:String}),(0,s.P)((async function(e){var t;null===(t=this.input)||void 0===t||t.setAttribute("aria-label",e)}))],m.prototype,"label",void 0),(0,i.__decorate)([(0,d.I)(".mdc-form-field")],m.prototype,"mdcRoot",void 0),(0,i.__decorate)([(0,p.v)("",!0,"*")],m.prototype,"slottedInputs",void 0),(0,i.__decorate)([(0,d.I)("label")],m.prototype,"labelEl",void 0)},92038:(e,t,r)=>{r.d(t,{W:()=>i});const i=r(37500).iv`.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch[dir=rtl]){margin-left:10px}`},1819:(e,t,r)=>{r.d(t,{Y:()=>s});var i=r(87480),n=r(26767),o=r(93751),a=r(92038);let s=class extends o.a{};s.styles=[a.W],s=(0,i.__decorate)([(0,n.M)("mwc-formfield")],s)},99257:(e,t,r)=>{r(94604);var i=r(15112),n=r(9672),o=r(87156);(0,n.k)({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new i.P({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(e){return this.name+":"+e}),this)},applyIcon:function(e,t){this.removeIcon(e);var r=this._cloneIcon(t,this.rtlMirroring&&this._targetIsRTL(e));if(r){var i=(0,o.vz)(e.root||e);return i.insertBefore(r,i.childNodes[0]),e._svgIcon=r}return null},removeIcon:function(e){e._svgIcon&&((0,o.vz)(e.root||e).removeChild(e._svgIcon),e._svgIcon=null)},_targetIsRTL:function(e){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var t=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===t.getAttribute("dir")}else e&&e.nodeType!==Node.ELEMENT_NODE&&(e=e.host),this.__targetIsRTL=e&&"rtl"===window.getComputedStyle(e).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var e=Object.create(null);return(0,o.vz)(this).querySelectorAll("[id]").forEach((function(t){e[t.id]=t})),e},_cloneIcon:function(e,t){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[e],this.size,t)},_prepareSvgClone:function(e,t,r){if(e){var i=e.cloneNode(!0),n=document.createElementNS("http://www.w3.org/2000/svg","svg"),o=i.getAttribute("viewBox")||"0 0 "+t+" "+t,a="pointer-events: none; display: block; width: 100%; height: 100%;";return r&&i.hasAttribute("mirror-in-rtl")&&(a+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),n.setAttribute("viewBox",o),n.setAttribute("preserveAspectRatio","xMidYMid meet"),n.setAttribute("focusable","false"),n.style.cssText=a,n.appendChild(i).removeAttribute("id"),n}return null}})},67810:(e,t,r)=>{r.d(t,{o:()=>n});r(94604);var i=r(87156);const n={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(e,t){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),t)if("document"===e)this.scrollTarget=this._doc;else if("string"==typeof e){var r=this.domHost;this.scrollTarget=r&&r.$?r.$[e]:(0,i.vz)(this.ownerDocument).querySelector("#"+e)}else this._isValidScrollTarget()&&(this._oldScrollTarget=e,this._toggleScrollListener(this._shouldHaveListener,e))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(e){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=e)},set _scrollLeft(e){this.scrollTarget===this._doc?window.scrollTo(e,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e)},scroll:function(e,t){var r;"object"==typeof e?(r=e.left,t=e.top):r=e,r=r||0,t=t||0,this.scrollTarget===this._doc?window.scrollTo(r,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=r,this.scrollTarget.scrollTop=t)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(e,t){var r=t===this._doc?window:t;e?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),r.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(r.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(e){this._shouldHaveListener=e,this._toggleScrollListener(e,this.scrollTarget)}}},84938:(e,t,r)=>{r.d(t,{o:()=>o});r(94604),r(60748);var i=r(51644),n=r(87156);const o={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(e){i.$._downHandler.call(this,e),this.pressed&&this.ensureRipple(e)},ensureRipple:function(e){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var t=this._rippleContainer||this.root;if(t&&(0,n.vz)(t).appendChild(this._ripple),e){var r=(0,n.vz)(this._rippleContainer||this),i=(0,n.vz)(e).rootTarget;r.deepContains(i)&&this._ripple.uiDownAction(e)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){return document.createElement("paper-ripple")},_noinkChanged:function(e){this.hasRipple()&&(this._ripple.noink=e)}}},8878:(e,t,r)=>{r(94604),r(8621),r(63207),r(30879),r(78814),r(60748),r(1656),r(57548),r(73962);var i=r(51644),n=r(26110),o=r(21006),a=r(98235),s=r(18890),c=r(9672),l=r(87156),d=r(81668),p=r(50856),u=r(62276);const m=(0,s.x)(HTMLElement);(0,c.k)({_template:p.d`
    <style include="paper-dropdown-menu-shared-styles"></style>

    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" dynamic-align="[[dynamicAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" expand-sizing-target-for-scrollbars="[[expandSizingTargetForScrollbars]]">
      <!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> -->
      <div class="dropdown-trigger" slot="dropdown-trigger">
        <paper-ripple></paper-ripple>
        <!-- paper-input has type="text" for a11y, do not remove -->
        <paper-input id="input" type="text" invalid="[[invalid]]" readonly disabled="[[disabled]]" value="[[value]]" placeholder="[[placeholder]]" error-message="[[errorMessage]]" always-float-label="[[alwaysFloatLabel]]" no-label-float="[[noLabelFloat]]" label="[[label]]" input-role="button" input-aria-haspopup="listbox" autocomplete="off">
          <!-- support hybrid mode: user might be using paper-input 1.x which distributes via <content> -->
          <iron-icon icon="paper-dropdown-menu:arrow-drop-down" suffix slot="suffix"></iron-icon>
        </paper-input>
      </div>
      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>
    </paper-menu-button>
`,is:"paper-dropdown-menu",behaviors:[i.P,n.a,o.V,a.x],properties:{selectedItemLabel:{type:String,notify:!0,readOnly:!0},selectedItem:{type:Object,notify:!0,readOnly:!0},value:{type:String,notify:!0},label:{type:String},placeholder:{type:String},errorMessage:{type:String},opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},allowOutsideScroll:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},alwaysFloatLabel:{type:Boolean,value:!1},noAnimations:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"right"},verticalAlign:{type:String,value:"top"},verticalOffset:Number,dynamicAlign:{type:Boolean},restoreFocusOnClose:{type:Boolean,value:!0},expandSizingTargetForScrollbars:{type:Boolean,value:!1}},listeners:{tap:"_onTap"},keyBindings:{"up down":"open",esc:"close"},observers:["_selectedItemChanged(selectedItem)"],_attachDom(e){const t=(0,u.r)(this);return t.attachShadow({mode:"open",delegatesFocus:!0,shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),m.prototype._attachDom.call(this,e)},focus(){this.$.input._focusableElement.focus()},attached:function(){var e=this.contentElement;e&&e.selectedItem&&this._setSelectedItem(e.selectedItem)},get contentElement(){for(var e=(0,l.vz)(this.$.content).getDistributedNodes(),t=0,r=e.length;t<r;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},open:function(){this.$.menuButton.open()},close:function(){this.$.menuButton.close()},_onIronSelect:function(e){this._setSelectedItem(e.detail.item)},_onIronDeselect:function(e){this._setSelectedItem(null)},_onTap:function(e){d.nJ(e)===this&&this.open()},_selectedItemChanged:function(e){var t="";t=e?e.label||e.getAttribute("label")||e.textContent.trim():"",this.value=t,this._setSelectedItemLabel(t)},_computeMenuVerticalOffset:function(e,t){return t||(e?-4:8)},_getValidity:function(e){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function(){var e=this.opened?"true":"false",t=this.contentElement;t&&t.setAttribute("aria-expanded",e)}})},33760:(e,t,r)=>{r.d(t,{U:()=>o});r(94604);var i=r(51644),n=r(26110);const o=[i.P,n.a,{hostAttributes:{role:"option",tabindex:"0"}}]},97968:(e,t,r)=>{r(65660),r(15495),r(1656),r(47686);const i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(i.content)},53973:(e,t,r)=>{r(94604),r(65660),r(97968);var i=r(9672),n=r(50856),o=r(33760);(0,i.k)({_template:n.d`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[o.U]})},14516:(e,t,r)=>{r.d(t,{Z:()=>o});var i=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function n(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(n=e[r],o=t[r],!(n===o||i(n)&&i(o)))return!1;var n,o;return!0}const o=function(e,t){var r;void 0===t&&(t=n);var i,o=[],a=!1;return function(){for(var n=[],s=0;s<arguments.length;s++)n[s]=arguments[s];return a&&r===this&&t(n,o)||(i=e.apply(this,n),a=!0,r=this,o=n),i}}},93217:(e,t,r)=>{r.d(t,{Ud:()=>p});const i=Symbol("Comlink.proxy"),n=Symbol("Comlink.endpoint"),o=Symbol("Comlink.releaseProxy"),a=Symbol("Comlink.thrown"),s=e=>"object"==typeof e&&null!==e||"function"==typeof e,c=new Map([["proxy",{canHandle:e=>s(e)&&e[i],serialize(e){const{port1:t,port2:r}=new MessageChannel;return l(e,t),[r,[r]]},deserialize:e=>(e.start(),p(e))}],["throw",{canHandle:e=>s(e)&&a in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function l(e,t=self){t.addEventListener("message",(function r(n){if(!n||!n.data)return;const{id:o,type:s,path:c}=Object.assign({path:[]},n.data),p=(n.data.argumentList||[]).map(y);let u;try{const t=c.slice(0,-1).reduce(((e,t)=>e[t]),e),r=c.reduce(((e,t)=>e[t]),e);switch(s){case"GET":u=r;break;case"SET":t[c.slice(-1)[0]]=y(n.data.value),u=!0;break;case"APPLY":u=r.apply(t,p);break;case"CONSTRUCT":u=function(e){return Object.assign(e,{[i]:!0})}(new r(...p));break;case"ENDPOINT":{const{port1:t,port2:r}=new MessageChannel;l(e,r),u=function(e,t){return g.set(e,t),e}(t,[t])}break;case"RELEASE":u=void 0;break;default:return}}catch(e){u={value:e,[a]:0}}Promise.resolve(u).catch((e=>({value:e,[a]:0}))).then((e=>{const[i,n]=f(e);t.postMessage(Object.assign(Object.assign({},i),{id:o}),n),"RELEASE"===s&&(t.removeEventListener("message",r),d(t))}))})),t.start&&t.start()}function d(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function p(e,t){return m(e,[],t)}function u(e){if(e)throw new Error("Proxy has been released and is not useable")}function m(e,t=[],r=function(){}){let i=!1;const a=new Proxy(r,{get(r,n){if(u(i),n===o)return()=>_(e,{type:"RELEASE",path:t.map((e=>e.toString()))}).then((()=>{d(e),i=!0}));if("then"===n){if(0===t.length)return{then:()=>a};const r=_(e,{type:"GET",path:t.map((e=>e.toString()))}).then(y);return r.then.bind(r)}return m(e,[...t,n])},set(r,n,o){u(i);const[a,s]=f(o);return _(e,{type:"SET",path:[...t,n].map((e=>e.toString())),value:a},s).then(y)},apply(r,o,a){u(i);const s=t[t.length-1];if(s===n)return _(e,{type:"ENDPOINT"}).then(y);if("bind"===s)return m(e,t.slice(0,-1));const[c,l]=h(a);return _(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:c},l).then(y)},construct(r,n){u(i);const[o,a]=h(n);return _(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:o},a).then(y)}});return a}function h(e){const t=e.map(f);return[t.map((e=>e[0])),(r=t.map((e=>e[1])),Array.prototype.concat.apply([],r))];var r}const g=new WeakMap;function f(e){for(const[t,r]of c)if(r.canHandle(e)){const[i,n]=r.serialize(e);return[{type:"HANDLER",name:t,value:i},n]}return[{type:"RAW",value:e},g.get(e)||[]]}function y(e){switch(e.type){case"HANDLER":return c.get(e.name).deserialize(e.value);case"RAW":return e.value}}function _(e,t,r){return new Promise((i=>{const n=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(r){r.data&&r.data.id&&r.data.id===n&&(e.removeEventListener("message",t),i(r.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:n},t),r)}))}},81563:(e,t,r)=>{r.d(t,{E_:()=>g,i9:()=>m,_Y:()=>l,pt:()=>o,OR:()=>s,hN:()=>a,ws:()=>h,fk:()=>d,hl:()=>u});var i=r(15304);const{H:n}=i.Al,o=e=>null===e||"object"!=typeof e&&"function"!=typeof e,a=(e,t)=>{var r,i;return void 0===t?void 0!==(null===(r=e)||void 0===r?void 0:r._$litType$):(null===(i=e)||void 0===i?void 0:i._$litType$)===t},s=e=>void 0===e.strings,c=()=>document.createComment(""),l=(e,t,r)=>{var i;const o=e._$AA.parentNode,a=void 0===t?e._$AB:t._$AA;if(void 0===r){const t=o.insertBefore(c(),a),i=o.insertBefore(c(),a);r=new n(t,i,e,e.options)}else{const t=r._$AB.nextSibling,n=r._$AM,s=n!==e;if(s){let t;null===(i=r._$AQ)||void 0===i||i.call(r,e),r._$AM=e,void 0!==r._$AP&&(t=e._$AU)!==n._$AU&&r._$AP(t)}if(t!==a||s){let e=r._$AA;for(;e!==t;){const t=e.nextSibling;o.insertBefore(e,a),e=t}}}return r},d=(e,t,r=e)=>(e._$AI(t,r),e),p={},u=(e,t=p)=>e._$AH=t,m=e=>e._$AH,h=e=>{var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);let r=e._$AA;const i=e._$AB.nextSibling;for(;r!==i;){const e=r.nextSibling;r.remove(),r=e}},g=e=>{e._$AR()}},57835:(e,t,r)=>{r.d(t,{Xe:()=>i.Xe,pX:()=>i.pX,XM:()=>i.XM});var i=r(38941)}}]);
//# sourceMappingURL=0b11d2cb.js.map