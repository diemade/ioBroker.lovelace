"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || []).push([["src_panels_lovelace_header-footer_hui-buttons-header-footer_ts"],{

/***/ "./src/panels/lovelace/header-footer/hui-buttons-header-footer.ts":
/*!************************************************************************!*\
  !*** ./src/panels/lovelace/header-footer/hui-buttons-header-footer.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HuiButtonsHeaderFooter\": () => (/* binding */ HuiButtonsHeaderFooter)\n/* harmony export */ });\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/directives/class-map */ \"./node_modules/lit/directives/class-map.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/entity/compute_domain */ \"./src/common/entity/compute_domain.ts\");\n/* harmony import */ var _common_process_config_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/process-config-entities */ \"./src/panels/lovelace/common/process-config-entities.ts\");\n/* harmony import */ var _components_hui_buttons_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/hui-buttons-base */ \"./src/panels/lovelace/components/hui-buttons-base.ts\");\nfunction _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }\n\nfunction _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [[\"method\"], [\"field\"]], initializeInstanceElements: function (O, elements) { [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === \"own\") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === \"static\" || placement === \"prototype\")) { var receiver = placement === \"static\" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === \"field\") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError(\"Duplicated element (\" + element.key + \")\"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError(\"Duplicated element (\" + elements[j].key + \")\"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === \"field\") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, \"finisher\", \"An element descriptor\"); this.disallowProperty(elementObject, \"extras\", \"An element descriptor\"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== \"method\" && kind !== \"field\") { throw new TypeError('An element descriptor\\'s .kind property must be either \"method\" or' + ' \"field\", but a decorator created an element descriptor with' + ' .kind \"' + kind + '\"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== \"static\" && placement !== \"prototype\" && placement !== \"own\") { throw new TypeError('An element descriptor\\'s .placement property must be one of \"static\",' + ' \"prototype\" or \"own\", but a decorator created an element descriptor' + ' with .placement \"' + placement + '\"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, \"elements\", \"An element descriptor\"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== \"field\") { this.disallowProperty(elementObject, \"initializer\", \"A method descriptor\"); } else { this.disallowProperty(descriptor, \"get\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"set\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"value\", \"The property descriptor of a field descriptor\"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, \"finisher\"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: \"class\", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== \"class\") { throw new TypeError('A class descriptor\\'s .kind property must be \"class\", but a decorator' + ' created a class descriptor with .kind \"' + kind + '\"'); } this.disallowProperty(obj, \"key\", \"A class descriptor\"); this.disallowProperty(obj, \"placement\", \"A class descriptor\"); this.disallowProperty(obj, \"descriptor\", \"A class descriptor\"); this.disallowProperty(obj, \"initializer\", \"A class descriptor\"); this.disallowProperty(obj, \"extras\", \"A class descriptor\"); var finisher = _optionalCallableProperty(obj, \"finisher\"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== \"function\") { throw new TypeError(\"Finishers must return a constructor.\"); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + \" can't have a .\" + name + \" property.\"); } } }; return api; }\n\nfunction _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === \"method\") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === \"get\") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"set\") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"field\") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === \"field\" ? \"field\" : \"method\", key: key, placement: def.static ? \"static\" : def.kind === \"field\" ? \"own\" : \"prototype\", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === \"field\") element.initializer = def.value; return element; }\n\nfunction _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }\n\nfunction _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === \"method\" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === \"method\" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError(\"Duplicated methods (\" + element.key + \") can't be decorated.\"); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError(\"Decorators can't be placed on different accessors with for \" + \"the same property (\" + element.key + \").\"); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }\n\nfunction _hasDecorators(element) { return element.decorators && element.decorators.length; }\n\nfunction _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }\n\nfunction _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== \"function\") { throw new TypeError(\"Expected '\" + name + \"' to be a function\"); } return value; }\n\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\n\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nlet HuiButtonsHeaderFooter = _decorate([(0,lit_decorators__WEBPACK_IMPORTED_MODULE_2__.customElement)(\"hui-buttons-header-footer\")], function (_initialize, _LitElement) {\n  class HuiButtonsHeaderFooter extends _LitElement {\n    constructor(...args) {\n      super(...args);\n\n      _initialize(this);\n    }\n\n  }\n\n  return {\n    F: HuiButtonsHeaderFooter,\n    d: [{\n      kind: \"method\",\n      static: true,\n      key: \"getStubConfig\",\n      value: function getStubConfig() {\n        return {\n          entities: []\n        };\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_2__.property)({\n        attribute: false\n      })],\n      key: \"hass\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_2__.property)()],\n      key: \"type\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_2__.state)()],\n      key: \"_configEntities\",\n      value: void 0\n    }, {\n      kind: \"method\",\n      key: \"getCardSize\",\n      value: function getCardSize() {\n        return 3;\n      }\n    }, {\n      kind: \"method\",\n      key: \"setConfig\",\n      value: function setConfig(config) {\n        this._configEntities = (0,_common_process_config_entities__WEBPACK_IMPORTED_MODULE_4__.processConfigEntities)(config.entities).map(entityConfig => {\n          const conf = {\n            tap_action: {\n              action: \"toggle\"\n            },\n            hold_action: {\n              action: \"more-info\"\n            },\n            ...entityConfig\n          };\n\n          if ((0,_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_3__.computeDomain)(entityConfig.entity) === \"scene\") {\n            conf.tap_action = {\n              action: \"call-service\",\n              service: \"scene.turn_on\",\n              target: {\n                entity_id: conf.entity\n              }\n            };\n          }\n\n          return conf;\n        });\n      }\n    }, {\n      kind: \"method\",\n      key: \"render\",\n      value: function render() {\n        return lit__WEBPACK_IMPORTED_MODULE_0__.html`\n      ${this.type === \"footer\" ? lit__WEBPACK_IMPORTED_MODULE_0__.html`<li class=\"divider footer\" role=\"separator\"></li>` : \"\"}\n      <hui-buttons-base\n        .hass=${this.hass}\n        .configEntities=${this._configEntities}\n        class=${(0,lit_directives_class_map__WEBPACK_IMPORTED_MODULE_1__.classMap)({\n          footer: this.type === \"footer\",\n          header: this.type === \"header\"\n        })}\n      ></hui-buttons-base>\n      ${this.type === \"header\" ? lit__WEBPACK_IMPORTED_MODULE_0__.html`<li class=\"divider header\" role=\"separator\"></li>` : \"\"}\n    `;\n      }\n    }, {\n      kind: \"field\",\n      static: true,\n      key: \"styles\",\n\n      value() {\n        return lit__WEBPACK_IMPORTED_MODULE_0__.css`\n    .divider {\n      height: 0;\n      margin: 16px 0;\n      list-style-type: none;\n      border: none;\n      border-bottom-width: 1px;\n      border-bottom-style: solid;\n      border-bottom-color: var(--divider-color);\n    }\n    .divider.header {\n      margin-top: 0;\n    }\n    hui-buttons-base.footer {\n      --padding-bottom: 16px;\n    }\n    hui-buttons-base.header {\n      --padding-top: 16px;\n    }\n  `;\n      }\n\n    }]\n  };\n}, lit__WEBPACK_IMPORTED_MODULE_0__.LitElement);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2hlYWRlci1mb290ZXIvaHVpLWJ1dHRvbnMtaGVhZGVyLWZvb3Rlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQURBO0FBSUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFlQTtBQUNBO0FBaEJBO0FBQUE7QUFBQTtBQUFBO0FBbUJBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUhBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFLQTs7QUFDQTtBQUNBO0FBRUE7QUFwQ0E7QUFBQTtBQUFBO0FBQUE7QUF1Q0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUF2REE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQTBEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVFQTs7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLWFzc2lzdGFudC1mcm9udGVuZC8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvaGVhZGVyLWZvb3Rlci9odWktYnV0dG9ucy1oZWFkZXItZm9vdGVyLnRzPzY4YjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzLCBodG1sLCBMaXRFbGVtZW50LCBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gXCJsaXRcIjtcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSBcImxpdC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIHN0YXRlIH0gZnJvbSBcImxpdC9kZWNvcmF0b3JzXCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9kb21haW5cIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IHByb2Nlc3NDb25maWdFbnRpdGllcyB9IGZyb20gXCIuLi9jb21tb24vcHJvY2Vzcy1jb25maWctZW50aXRpZXNcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaHVpLWJ1dHRvbnMtYmFzZVwiO1xuaW1wb3J0IHsgRW50aXR5Q29uZmlnIH0gZnJvbSBcIi4uL2VudGl0eS1yb3dzL3R5cGVzXCI7XG5pbXBvcnQgeyBMb3ZlbGFjZUhlYWRlckZvb3RlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgQnV0dG9uc0hlYWRlckZvb3RlckNvbmZpZyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLWJ1dHRvbnMtaGVhZGVyLWZvb3RlclwiKVxuZXhwb3J0IGNsYXNzIEh1aUJ1dHRvbnNIZWFkZXJGb290ZXJcbiAgZXh0ZW5kcyBMaXRFbGVtZW50XG4gIGltcGxlbWVudHMgTG92ZWxhY2VIZWFkZXJGb290ZXJcbntcbiAgcHVibGljIHN0YXRpYyBnZXRTdHViQ29uZmlnKCk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgICByZXR1cm4geyBlbnRpdGllczogW10gfTtcbiAgfVxuXG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogZmFsc2UgfSkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyB0eXBlITogXCJoZWFkZXJcIiB8IFwiZm9vdGVyXCI7XG5cbiAgQHN0YXRlKCkgcHJpdmF0ZSBfY29uZmlnRW50aXRpZXM/OiBFbnRpdHlDb25maWdbXTtcblxuICBwdWJsaWMgZ2V0Q2FyZFNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gMztcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBCdXR0b25zSGVhZGVyRm9vdGVyQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5fY29uZmlnRW50aXRpZXMgPSBwcm9jZXNzQ29uZmlnRW50aXRpZXMoY29uZmlnLmVudGl0aWVzKS5tYXAoXG4gICAgICAoZW50aXR5Q29uZmlnKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbmYgPSB7XG4gICAgICAgICAgdGFwX2FjdGlvbjogeyBhY3Rpb246IFwidG9nZ2xlXCIgfSxcbiAgICAgICAgICBob2xkX2FjdGlvbjogeyBhY3Rpb246IFwibW9yZS1pbmZvXCIgfSxcbiAgICAgICAgICAuLi5lbnRpdHlDb25maWcsXG4gICAgICAgIH07XG4gICAgICAgIGlmIChjb21wdXRlRG9tYWluKGVudGl0eUNvbmZpZy5lbnRpdHkpID09PSBcInNjZW5lXCIpIHtcbiAgICAgICAgICBjb25mLnRhcF9hY3Rpb24gPSB7XG4gICAgICAgICAgICBhY3Rpb246IFwiY2FsbC1zZXJ2aWNlXCIsXG4gICAgICAgICAgICBzZXJ2aWNlOiBcInNjZW5lLnR1cm5fb25cIixcbiAgICAgICAgICAgIHRhcmdldDogeyBlbnRpdHlfaWQ6IGNvbmYuZW50aXR5IH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uZjtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgJHt0aGlzLnR5cGUgPT09IFwiZm9vdGVyXCJcbiAgICAgICAgPyBodG1sYDxsaSBjbGFzcz1cImRpdmlkZXIgZm9vdGVyXCIgcm9sZT1cInNlcGFyYXRvclwiPjwvbGk+YFxuICAgICAgICA6IFwiXCJ9XG4gICAgICA8aHVpLWJ1dHRvbnMtYmFzZVxuICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgLmNvbmZpZ0VudGl0aWVzPSR7dGhpcy5fY29uZmlnRW50aXRpZXN9XG4gICAgICAgIGNsYXNzPSR7Y2xhc3NNYXAoe1xuICAgICAgICAgIGZvb3RlcjogdGhpcy50eXBlID09PSBcImZvb3RlclwiLFxuICAgICAgICAgIGhlYWRlcjogdGhpcy50eXBlID09PSBcImhlYWRlclwiLFxuICAgICAgICB9KX1cbiAgICAgID48L2h1aS1idXR0b25zLWJhc2U+XG4gICAgICAke3RoaXMudHlwZSA9PT0gXCJoZWFkZXJcIlxuICAgICAgICA/IGh0bWxgPGxpIGNsYXNzPVwiZGl2aWRlciBoZWFkZXJcIiByb2xlPVwic2VwYXJhdG9yXCI+PC9saT5gXG4gICAgICAgIDogXCJcIn1cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIHN0eWxlcyA9IGNzc2BcbiAgICAuZGl2aWRlciB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICBtYXJnaW46IDE2cHggMDtcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgfVxuICAgIC5kaXZpZGVyLmhlYWRlciB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbiAgICBodWktYnV0dG9ucy1iYXNlLmZvb3RlciB7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIH1cbiAgICBodWktYnV0dG9ucy1iYXNlLmhlYWRlciB7XG4gICAgICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAgIH1cbiAgYDtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1idXR0b25zLWhlYWRlci1mb290ZXJcIjogSHVpQnV0dG9uc0hlYWRlckZvb3RlcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/panels/lovelace/header-footer/hui-buttons-header-footer.ts\n");

/***/ })

}]);