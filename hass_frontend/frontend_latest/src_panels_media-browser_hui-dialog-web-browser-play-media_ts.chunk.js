"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || []).push([["src_panels_media-browser_hui-dialog-web-browser-play-media_ts"],{

/***/ "./src/panels/media-browser/hui-dialog-web-browser-play-media.ts":
/*!***********************************************************************!*\
  !*** ./src/panels/media-browser/hui-dialog-web-browser-play-media.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HuiDialogWebBrowserPlayMedia\": () => (/* binding */ HuiDialogWebBrowserPlayMedia)\n/* harmony export */ });\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/dom/fire_event */ \"./src/common/dom/fire_event.ts\");\n/* harmony import */ var _components_ha_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ha-dialog */ \"./src/components/ha-dialog.ts\");\n/* harmony import */ var _components_ha_hls_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ha-hls-player */ \"./src/components/ha-hls-player.ts\");\n/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../resources/styles */ \"./src/resources/styles.ts\");\nfunction _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }\n\nfunction _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [[\"method\"], [\"field\"]], initializeInstanceElements: function (O, elements) { [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === \"own\") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === \"static\" || placement === \"prototype\")) { var receiver = placement === \"static\" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === \"field\") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError(\"Duplicated element (\" + element.key + \")\"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError(\"Duplicated element (\" + elements[j].key + \")\"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === \"field\") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, \"finisher\", \"An element descriptor\"); this.disallowProperty(elementObject, \"extras\", \"An element descriptor\"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== \"method\" && kind !== \"field\") { throw new TypeError('An element descriptor\\'s .kind property must be either \"method\" or' + ' \"field\", but a decorator created an element descriptor with' + ' .kind \"' + kind + '\"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== \"static\" && placement !== \"prototype\" && placement !== \"own\") { throw new TypeError('An element descriptor\\'s .placement property must be one of \"static\",' + ' \"prototype\" or \"own\", but a decorator created an element descriptor' + ' with .placement \"' + placement + '\"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, \"elements\", \"An element descriptor\"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== \"field\") { this.disallowProperty(elementObject, \"initializer\", \"A method descriptor\"); } else { this.disallowProperty(descriptor, \"get\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"set\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"value\", \"The property descriptor of a field descriptor\"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, \"finisher\"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: \"class\", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== \"class\") { throw new TypeError('A class descriptor\\'s .kind property must be \"class\", but a decorator' + ' created a class descriptor with .kind \"' + kind + '\"'); } this.disallowProperty(obj, \"key\", \"A class descriptor\"); this.disallowProperty(obj, \"placement\", \"A class descriptor\"); this.disallowProperty(obj, \"descriptor\", \"A class descriptor\"); this.disallowProperty(obj, \"initializer\", \"A class descriptor\"); this.disallowProperty(obj, \"extras\", \"A class descriptor\"); var finisher = _optionalCallableProperty(obj, \"finisher\"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== \"function\") { throw new TypeError(\"Finishers must return a constructor.\"); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + \" can't have a .\" + name + \" property.\"); } } }; return api; }\n\nfunction _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === \"method\") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === \"get\") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"set\") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"field\") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === \"field\" ? \"field\" : \"method\", key: key, placement: def.static ? \"static\" : def.kind === \"field\" ? \"own\" : \"prototype\", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === \"field\") element.initializer = def.value; return element; }\n\nfunction _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }\n\nfunction _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === \"method\" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === \"method\" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError(\"Duplicated methods (\" + element.key + \") can't be decorated.\"); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError(\"Decorators can't be placed on different accessors with for \" + \"the same property (\" + element.key + \").\"); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }\n\nfunction _hasDecorators(element) { return element.decorators && element.decorators.length; }\n\nfunction _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }\n\nfunction _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== \"function\") { throw new TypeError(\"Expected '\" + name + \"' to be a function\"); } return value; }\n\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\n\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nlet HuiDialogWebBrowserPlayMedia = _decorate([(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.customElement)(\"hui-dialog-web-browser-play-media\")], function (_initialize, _LitElement) {\n  class HuiDialogWebBrowserPlayMedia extends _LitElement {\n    constructor(...args) {\n      super(...args);\n\n      _initialize(this);\n    }\n\n  }\n\n  return {\n    F: HuiDialogWebBrowserPlayMedia,\n    d: [{\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.property)({\n        attribute: false\n      })],\n      key: \"hass\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.property)({\n        attribute: false\n      })],\n      key: \"_params\",\n      value: void 0\n    }, {\n      kind: \"method\",\n      key: \"showDialog\",\n      value: function showDialog(params) {\n        this._params = params;\n      }\n    }, {\n      kind: \"method\",\n      key: \"closeDialog\",\n      value: function closeDialog() {\n        this._params = undefined;\n        (0,_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__.fireEvent)(this, \"dialog-closed\", {\n          dialog: this.localName\n        });\n      }\n    }, {\n      kind: \"method\",\n      key: \"render\",\n      value: function render() {\n        if (!this._params || !this._params.sourceType || !this._params.sourceUrl) {\n          return lit__WEBPACK_IMPORTED_MODULE_0__.html``;\n        }\n\n        const mediaType = this._params.sourceType.split(\"/\", 1)[0];\n\n        return lit__WEBPACK_IMPORTED_MODULE_0__.html`\n      <ha-dialog\n        open\n        hideActions\n        .heading=${(0,_components_ha_dialog__WEBPACK_IMPORTED_MODULE_3__.createCloseHeading)(this.hass, this._params.title || this.hass.localize(\"ui.components.media-browser.media_player\"))}\n        @closed=${this.closeDialog}\n      >\n        ${mediaType === \"audio\" ? lit__WEBPACK_IMPORTED_MODULE_0__.html`\n              <audio controls autoplay>\n                <source\n                  src=${this._params.sourceUrl}\n                  type=${this._params.sourceType}\n                />\n                ${this.hass.localize(\"ui.components.media-browser.audio_not_supported\")}\n              </audio>\n            ` : mediaType === \"video\" ? lit__WEBPACK_IMPORTED_MODULE_0__.html`\n              <video controls autoplay playsinline>\n                <source\n                  src=${this._params.sourceUrl}\n                  type=${this._params.sourceType}\n                />\n                ${this.hass.localize(\"ui.components.media-browser.video_not_supported\")}\n              </video>\n            ` : this._params.sourceType === \"application/x-mpegURL\" ? lit__WEBPACK_IMPORTED_MODULE_0__.html`\n              <ha-hls-player\n                controls\n                autoplay\n                playsinline\n                .hass=${this.hass}\n                .url=${this._params.sourceUrl}\n              ></ha-hls-player>\n            ` : mediaType === \"image\" ? lit__WEBPACK_IMPORTED_MODULE_0__.html`<img src=${this._params.sourceUrl} />` : lit__WEBPACK_IMPORTED_MODULE_0__.html`${this.hass.localize(\"ui.components.media-browser.media_not_supported\")}`}\n      </ha-dialog>\n    `;\n      }\n    }, {\n      kind: \"get\",\n      static: true,\n      key: \"styles\",\n      value: function styles() {\n        return [_resources_styles__WEBPACK_IMPORTED_MODULE_5__.haStyleDialog, lit__WEBPACK_IMPORTED_MODULE_0__.css`\n        @media (min-width: 800px) {\n          ha-dialog {\n            --mdc-dialog-max-width: 800px;\n            --mdc-dialog-min-width: 400px;\n          }\n        }\n\n        video,\n        audio,\n        img {\n          outline: none;\n          width: 100%;\n        }\n      `];\n      }\n    }]\n  };\n}, lit__WEBPACK_IMPORTED_MODULE_0__.LitElement);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFuZWxzL21lZGlhLWJyb3dzZXIvaHVpLWRpYWxvZy13ZWItYnJvd3Nlci1wbGF5LW1lZGlhLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7QUFBQTtBQWdCQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQTFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNkVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBL0ZBO0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWUtYXNzaXN0YW50LWZyb250ZW5kLy4vc3JjL3BhbmVscy9tZWRpYS1icm93c2VyL2h1aS1kaWFsb2ctd2ViLWJyb3dzZXItcGxheS1tZWRpYS50cz84YmFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgQ1NTUmVzdWx0R3JvdXAsIGh0bWwsIExpdEVsZW1lbnQsIFRlbXBsYXRlUmVzdWx0IH0gZnJvbSBcImxpdFwiO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHkgfSBmcm9tIFwibGl0L2RlY29yYXRvcnNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNyZWF0ZUNsb3NlSGVhZGluZyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hhLWRpYWxvZ1wiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1obHMtcGxheWVyXCI7XG5pbXBvcnQgeyBoYVN0eWxlRGlhbG9nIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB0eXBlIHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgV2ViQnJvd3NlclBsYXlNZWRpYURpYWxvZ1BhcmFtcyB9IGZyb20gXCIuL3Nob3ctbWVkaWEtcGxheWVyLWRpYWxvZ1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1kaWFsb2ctd2ViLWJyb3dzZXItcGxheS1tZWRpYVwiKVxuZXhwb3J0IGNsYXNzIEh1aURpYWxvZ1dlYkJyb3dzZXJQbGF5TWVkaWEgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiBmYWxzZSB9KSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiBmYWxzZSB9KVxuICBwcml2YXRlIF9wYXJhbXM/OiBXZWJCcm93c2VyUGxheU1lZGlhRGlhbG9nUGFyYW1zO1xuXG4gIHB1YmxpYyBzaG93RGlhbG9nKHBhcmFtczogV2ViQnJvd3NlclBsYXlNZWRpYURpYWxvZ1BhcmFtcyk6IHZvaWQge1xuICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtcztcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZURpYWxvZygpIHtcbiAgICB0aGlzLl9wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiZGlhbG9nLWNsb3NlZFwiLCB7IGRpYWxvZzogdGhpcy5sb2NhbE5hbWUgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuX3BhcmFtcyB8fCAhdGhpcy5fcGFyYW1zLnNvdXJjZVR5cGUgfHwgIXRoaXMuX3BhcmFtcy5zb3VyY2VVcmwpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgY29uc3QgbWVkaWFUeXBlID0gdGhpcy5fcGFyYW1zLnNvdXJjZVR5cGUuc3BsaXQoXCIvXCIsIDEpWzBdO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtZGlhbG9nXG4gICAgICAgIG9wZW5cbiAgICAgICAgaGlkZUFjdGlvbnNcbiAgICAgICAgLmhlYWRpbmc9JHtjcmVhdGVDbG9zZUhlYWRpbmcoXG4gICAgICAgICAgdGhpcy5oYXNzLFxuICAgICAgICAgIHRoaXMuX3BhcmFtcy50aXRsZSB8fFxuICAgICAgICAgICAgdGhpcy5oYXNzLmxvY2FsaXplKFwidWkuY29tcG9uZW50cy5tZWRpYS1icm93c2VyLm1lZGlhX3BsYXllclwiKVxuICAgICAgICApfVxuICAgICAgICBAY2xvc2VkPSR7dGhpcy5jbG9zZURpYWxvZ31cbiAgICAgID5cbiAgICAgICAgJHttZWRpYVR5cGUgPT09IFwiYXVkaW9cIlxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGF1ZGlvIGNvbnRyb2xzIGF1dG9wbGF5PlxuICAgICAgICAgICAgICAgIDxzb3VyY2VcbiAgICAgICAgICAgICAgICAgIHNyYz0ke3RoaXMuX3BhcmFtcy5zb3VyY2VVcmx9XG4gICAgICAgICAgICAgICAgICB0eXBlPSR7dGhpcy5fcGFyYW1zLnNvdXJjZVR5cGV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkuY29tcG9uZW50cy5tZWRpYS1icm93c2VyLmF1ZGlvX25vdF9zdXBwb3J0ZWRcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvYXVkaW8+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBtZWRpYVR5cGUgPT09IFwidmlkZW9cIlxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPHZpZGVvIGNvbnRyb2xzIGF1dG9wbGF5IHBsYXlzaW5saW5lPlxuICAgICAgICAgICAgICAgIDxzb3VyY2VcbiAgICAgICAgICAgICAgICAgIHNyYz0ke3RoaXMuX3BhcmFtcy5zb3VyY2VVcmx9XG4gICAgICAgICAgICAgICAgICB0eXBlPSR7dGhpcy5fcGFyYW1zLnNvdXJjZVR5cGV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkuY29tcG9uZW50cy5tZWRpYS1icm93c2VyLnZpZGVvX25vdF9zdXBwb3J0ZWRcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiB0aGlzLl9wYXJhbXMuc291cmNlVHlwZSA9PT0gXCJhcHBsaWNhdGlvbi94LW1wZWdVUkxcIlxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGhhLWhscy1wbGF5ZXJcbiAgICAgICAgICAgICAgICBjb250cm9sc1xuICAgICAgICAgICAgICAgIGF1dG9wbGF5XG4gICAgICAgICAgICAgICAgcGxheXNpbmxpbmVcbiAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgICAudXJsPSR7dGhpcy5fcGFyYW1zLnNvdXJjZVVybH1cbiAgICAgICAgICAgICAgPjwvaGEtaGxzLXBsYXllcj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IG1lZGlhVHlwZSA9PT0gXCJpbWFnZVwiXG4gICAgICAgICAgPyBodG1sYDxpbWcgc3JjPSR7dGhpcy5fcGFyYW1zLnNvdXJjZVVybH0gLz5gXG4gICAgICAgICAgOiBodG1sYCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLmNvbXBvbmVudHMubWVkaWEtYnJvd3Nlci5tZWRpYV9ub3Rfc3VwcG9ydGVkXCJcbiAgICAgICAgICAgICl9YH1cbiAgICAgIDwvaGEtZGlhbG9nPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRHcm91cCB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGVEaWFsb2csXG4gICAgICBjc3NgXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xuICAgICAgICAgIGhhLWRpYWxvZyB7XG4gICAgICAgICAgICAtLW1kYy1kaWFsb2ctbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICAgIC0tbWRjLWRpYWxvZy1taW4td2lkdGg6IDQwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZpZGVvLFxuICAgICAgICBhdWRpbyxcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1kaWFsb2ctd2ViLWJyb3dzZXItcGxheS1tZWRpYVwiOiBIdWlEaWFsb2dXZWJCcm93c2VyUGxheU1lZGlhO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/panels/media-browser/hui-dialog-web-browser-play-media.ts\n");

/***/ })

}]);