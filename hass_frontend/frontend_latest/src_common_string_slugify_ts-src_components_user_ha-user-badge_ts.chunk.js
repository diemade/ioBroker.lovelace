"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || []).push([["src_common_string_slugify_ts-src_components_user_ha-user-badge_ts"],{

/***/ "./src/common/string/slugify.ts":
/*!**************************************!*\
  !*** ./src/common/string/slugify.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slugify\": () => (/* binding */ slugify)\n/* harmony export */ });\n// https://gist.github.com/hagemann/382adfc57adbd5af078dc93feef01fe1\nconst slugify = (value, delimiter = \"_\") => {\n  const a = \"àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;\";\n  const b = `aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz${delimiter}${delimiter}${delimiter}${delimiter}${delimiter}${delimiter}`;\n  const p = new RegExp(a.split(\"\").join(\"|\"), \"g\");\n  return value.toString().toLowerCase().replace(/\\s+/g, delimiter) // Replace spaces with delimiter\n  .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters\n  .replace(/&/g, `${delimiter}and${delimiter}`) // Replace & with 'and'\n  .replace(/[^\\w-]+/g, \"\") // Remove all non-word characters\n  .replace(/-/g, delimiter) // Replace - with delimiter\n  .replace(new RegExp(`(${delimiter})\\\\1+`, \"g\"), \"$1\") // Replace multiple delimiters with single delimiter\n  .replace(new RegExp(`^${delimiter}+`), \"\") // Trim delimiter from start of text\n  .replace(new RegExp(`${delimiter}+$`), \"\"); // Trim delimiter from end of text\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL3N0cmluZy9zbHVnaWZ5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1hc3Npc3RhbnQtZnJvbnRlbmQvLi9zcmMvY29tbW9uL3N0cmluZy9zbHVnaWZ5LnRzP2I5ZTgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vaGFnZW1hbm4vMzgyYWRmYzU3YWRiZDVhZjA3OGRjOTNmZWVmMDFmZTFcbmV4cG9ydCBjb25zdCBzbHVnaWZ5ID0gKHZhbHVlOiBzdHJpbmcsIGRlbGltaXRlciA9IFwiX1wiKSA9PiB7XG4gIGNvbnN0IGEgPVxuICAgIFwiw6DDocOkw6LDo8OlxIPDpsSFw6fEh8SNxJHEj8Oow6nEm8SXw6vDqsSZxJ/HteG4p8Osw63Dr8OuxK/FguG4v8e5xYTFiMOxw7LDs8O2w7TFk8O44bmVxZXFmcOfxZ/Fm8WhyJnFpcibw7nDusO8w7vHmMWvxbHFq8Wz4bqD4bqNw7/DvcW6xb7FvMK3L18sOjtcIjtcbiAgY29uc3QgYiA9IGBhYWFhYWFhYWFjY2NkZGVlZWVlZWVnZ2hpaWlpaWxtbm5ubm9vb29vb3BycnNzc3NzdHR1dXV1dXV1dXV3eHl5enp6JHtkZWxpbWl0ZXJ9JHtkZWxpbWl0ZXJ9JHtkZWxpbWl0ZXJ9JHtkZWxpbWl0ZXJ9JHtkZWxpbWl0ZXJ9JHtkZWxpbWl0ZXJ9YDtcbiAgY29uc3QgcCA9IG5ldyBSZWdFeHAoYS5zcGxpdChcIlwiKS5qb2luKFwifFwiKSwgXCJnXCIpO1xuXG4gIHJldHVybiB2YWx1ZVxuICAgIC50b1N0cmluZygpXG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAucmVwbGFjZSgvXFxzKy9nLCBkZWxpbWl0ZXIpIC8vIFJlcGxhY2Ugc3BhY2VzIHdpdGggZGVsaW1pdGVyXG4gICAgLnJlcGxhY2UocCwgKGMpID0+IGIuY2hhckF0KGEuaW5kZXhPZihjKSkpIC8vIFJlcGxhY2Ugc3BlY2lhbCBjaGFyYWN0ZXJzXG4gICAgLnJlcGxhY2UoLyYvZywgYCR7ZGVsaW1pdGVyfWFuZCR7ZGVsaW1pdGVyfWApIC8vIFJlcGxhY2UgJiB3aXRoICdhbmQnXG4gICAgLnJlcGxhY2UoL1teXFx3LV0rL2csIFwiXCIpIC8vIFJlbW92ZSBhbGwgbm9uLXdvcmQgY2hhcmFjdGVyc1xuICAgIC5yZXBsYWNlKC8tL2csIGRlbGltaXRlcikgLy8gUmVwbGFjZSAtIHdpdGggZGVsaW1pdGVyXG4gICAgLnJlcGxhY2UobmV3IFJlZ0V4cChgKCR7ZGVsaW1pdGVyfSlcXFxcMStgLCBcImdcIiksIFwiJDFcIikgLy8gUmVwbGFjZSBtdWx0aXBsZSBkZWxpbWl0ZXJzIHdpdGggc2luZ2xlIGRlbGltaXRlclxuICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoYF4ke2RlbGltaXRlcn0rYCksIFwiXCIpIC8vIFRyaW0gZGVsaW1pdGVyIGZyb20gc3RhcnQgb2YgdGV4dFxuICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoYCR7ZGVsaW1pdGVyfSskYCksIFwiXCIpOyAvLyBUcmltIGRlbGltaXRlciBmcm9tIGVuZCBvZiB0ZXh0XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/common/string/slugify.ts\n");

/***/ }),

/***/ "./src/components/user/ha-user-badge.ts":
/*!**********************************************!*\
  !*** ./src/components/user/ha-user-badge.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var lit_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/class-map */ \"./node_modules/lit/directives/class-map.js\");\n/* harmony import */ var lit_directives_style_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit/directives/style-map */ \"./node_modules/lit/directives/style-map.js\");\n/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/entity/compute_state_domain */ \"./src/common/entity/compute_state_domain.ts\");\n/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/user */ \"./src/data/user.ts\");\nfunction _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }\n\nfunction _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [[\"method\"], [\"field\"]], initializeInstanceElements: function (O, elements) { [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === \"own\") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === \"static\" || placement === \"prototype\")) { var receiver = placement === \"static\" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === \"field\") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError(\"Duplicated element (\" + element.key + \")\"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError(\"Duplicated element (\" + elements[j].key + \")\"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === \"field\") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, \"finisher\", \"An element descriptor\"); this.disallowProperty(elementObject, \"extras\", \"An element descriptor\"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== \"method\" && kind !== \"field\") { throw new TypeError('An element descriptor\\'s .kind property must be either \"method\" or' + ' \"field\", but a decorator created an element descriptor with' + ' .kind \"' + kind + '\"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== \"static\" && placement !== \"prototype\" && placement !== \"own\") { throw new TypeError('An element descriptor\\'s .placement property must be one of \"static\",' + ' \"prototype\" or \"own\", but a decorator created an element descriptor' + ' with .placement \"' + placement + '\"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, \"elements\", \"An element descriptor\"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== \"field\") { this.disallowProperty(elementObject, \"initializer\", \"A method descriptor\"); } else { this.disallowProperty(descriptor, \"get\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"set\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"value\", \"The property descriptor of a field descriptor\"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, \"finisher\"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: \"class\", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== \"class\") { throw new TypeError('A class descriptor\\'s .kind property must be \"class\", but a decorator' + ' created a class descriptor with .kind \"' + kind + '\"'); } this.disallowProperty(obj, \"key\", \"A class descriptor\"); this.disallowProperty(obj, \"placement\", \"A class descriptor\"); this.disallowProperty(obj, \"descriptor\", \"A class descriptor\"); this.disallowProperty(obj, \"initializer\", \"A class descriptor\"); this.disallowProperty(obj, \"extras\", \"A class descriptor\"); var finisher = _optionalCallableProperty(obj, \"finisher\"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== \"function\") { throw new TypeError(\"Finishers must return a constructor.\"); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + \" can't have a .\" + name + \" property.\"); } } }; return api; }\n\nfunction _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === \"method\") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === \"get\") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"set\") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"field\") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === \"field\" ? \"field\" : \"method\", key: key, placement: def.static ? \"static\" : def.kind === \"field\" ? \"own\" : \"prototype\", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === \"field\") element.initializer = def.value; return element; }\n\nfunction _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }\n\nfunction _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === \"method\" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === \"method\" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError(\"Duplicated methods (\" + element.key + \") can't be decorated.\"); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError(\"Decorators can't be placed on different accessors with for \" + \"the same property (\" + element.key + \").\"); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }\n\nfunction _hasDecorators(element) { return element.decorators && element.decorators.length; }\n\nfunction _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }\n\nfunction _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== \"function\") { throw new TypeError(\"Expected '\" + name + \"' to be a function\"); } return value; }\n\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\n\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\nlet UserBadge = _decorate([(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.customElement)(\"ha-user-badge\")], function (_initialize, _LitElement) {\n  class UserBadge extends _LitElement {\n    constructor(...args) {\n      super(...args);\n\n      _initialize(this);\n    }\n\n  }\n\n  return {\n    F: UserBadge,\n    d: [{\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.property)({\n        attribute: false\n      })],\n      key: \"hass\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.property)({\n        attribute: false\n      })],\n      key: \"user\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.state)()],\n      key: \"_personPicture\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      key: \"_personEntityId\",\n      value: void 0\n    }, {\n      kind: \"method\",\n      key: \"willUpdate\",\n      value: function willUpdate(changedProps) {\n        _get(_getPrototypeOf(UserBadge.prototype), \"willUpdate\", this).call(this, changedProps);\n\n        if (changedProps.has(\"user\")) {\n          this._getPersonPicture();\n\n          return;\n        }\n\n        const oldHass = changedProps.get(\"hass\");\n\n        if (this._personEntityId && oldHass && this.hass.states[this._personEntityId] !== oldHass.states[this._personEntityId]) {\n          const entityState = this.hass.states[this._personEntityId];\n\n          if (entityState) {\n            this._personPicture = entityState.attributes.entity_picture;\n          } else {\n            this._getPersonPicture();\n          }\n        } else if (!this._personEntityId && oldHass) {\n          this._getPersonPicture();\n        }\n      }\n    }, {\n      kind: \"method\",\n      key: \"render\",\n      value: function render() {\n        if (!this.hass || !this.user) {\n          return lit__WEBPACK_IMPORTED_MODULE_0__.html``;\n        }\n\n        const picture = this._personPicture;\n\n        if (picture) {\n          return lit__WEBPACK_IMPORTED_MODULE_0__.html`<div\n        style=${(0,lit_directives_style_map__WEBPACK_IMPORTED_MODULE_3__.styleMap)({\n            backgroundImage: `url(${picture})`\n          })}\n        class=\"picture\"\n      ></div>`;\n        }\n\n        const initials = (0,_data_user__WEBPACK_IMPORTED_MODULE_5__.computeUserInitials)(this.user.name);\n        return lit__WEBPACK_IMPORTED_MODULE_0__.html`<div\n      class=\"initials ${(0,lit_directives_class_map__WEBPACK_IMPORTED_MODULE_2__.classMap)({\n          long: initials.length > 2\n        })}\"\n    >\n      ${initials}\n    </div>`;\n      }\n    }, {\n      kind: \"method\",\n      key: \"_getPersonPicture\",\n      value: function _getPersonPicture() {\n        this._personEntityId = undefined;\n        this._personPicture = undefined;\n\n        if (!this.hass || !this.user) {\n          return;\n        }\n\n        for (const entity of Object.values(this.hass.states)) {\n          if (entity.attributes.user_id === this.user.id && (0,_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__.computeStateDomain)(entity) === \"person\") {\n            this._personEntityId = entity.entity_id;\n            this._personPicture = entity.attributes.entity_picture;\n            break;\n          }\n        }\n      }\n    }, {\n      kind: \"get\",\n      static: true,\n      key: \"styles\",\n      value: function styles() {\n        return lit__WEBPACK_IMPORTED_MODULE_0__.css`\n      :host {\n        display: contents;\n      }\n      .picture {\n        width: 40px;\n        height: 40px;\n        background-size: cover;\n        border-radius: 50%;\n      }\n      .initials {\n        display: inline-block;\n        box-sizing: border-box;\n        width: 40px;\n        line-height: 40px;\n        border-radius: 50%;\n        text-align: center;\n        background-color: var(--light-primary-color);\n        text-decoration: none;\n        color: var(--text-light-primary-color, var(--primary-text-color));\n        overflow: hidden;\n      }\n      .initials.long {\n        font-size: 80%;\n      }\n    `;\n      }\n    }]\n  };\n}, lit__WEBPACK_IMPORTED_MODULE_0__.LitElement);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91c2VyL2hhLXVzZXItYmFkZ2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7OztBQUFBOzs7QUFDQTtBQUFBO0FBQUE7Ozs7O0FBRUE7QUFBQTtBQUFBOzs7OztBQUVBOzs7Ozs7Ozs7O0FBSUE7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFNQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBbEdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1hc3Npc3RhbnQtZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy91c2VyL2hhLXVzZXItYmFkZ2UudHM/MzUzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdEdyb3VwLFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXRcIjtcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBzdGF0ZSB9IGZyb20gXCJsaXQvZGVjb3JhdG9yc1wiO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tIFwibGl0L2RpcmVjdGl2ZXMvY2xhc3MtbWFwXCI7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gXCJsaXQvZGlyZWN0aXZlcy9zdHlsZS1tYXBcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgeyBjb21wdXRlVXNlckluaXRpYWxzLCBVc2VyIH0gZnJvbSBcIi4uLy4uL2RhdGEvdXNlclwiO1xuaW1wb3J0IHsgQ3VycmVudFVzZXIsIEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS11c2VyLWJhZGdlXCIpXG5jbGFzcyBVc2VyQmFkZ2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiBmYWxzZSB9KSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiBmYWxzZSB9KSBwdWJsaWMgdXNlcj86IFVzZXIgfCBDdXJyZW50VXNlcjtcblxuICBAc3RhdGUoKSBwcml2YXRlIF9wZXJzb25QaWN0dXJlPzogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3BlcnNvbkVudGl0eUlkPzogc3RyaW5nO1xuXG4gIHB1YmxpYyB3aWxsVXBkYXRlKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXM8dGhpcz4pIHtcbiAgICBzdXBlci53aWxsVXBkYXRlKGNoYW5nZWRQcm9wcyk7XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJ1c2VyXCIpKSB7XG4gICAgICB0aGlzLl9nZXRQZXJzb25QaWN0dXJlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9sZEhhc3MgPSBjaGFuZ2VkUHJvcHMuZ2V0KFwiaGFzc1wiKSBhcyBIb21lQXNzaXN0YW50IHwgdW5kZWZpbmVkO1xuICAgIGlmIChcbiAgICAgIHRoaXMuX3BlcnNvbkVudGl0eUlkICYmXG4gICAgICBvbGRIYXNzICYmXG4gICAgICB0aGlzLmhhc3Muc3RhdGVzW3RoaXMuX3BlcnNvbkVudGl0eUlkXSAhPT1cbiAgICAgICAgb2xkSGFzcy5zdGF0ZXNbdGhpcy5fcGVyc29uRW50aXR5SWRdXG4gICAgKSB7XG4gICAgICBjb25zdCBlbnRpdHlTdGF0ZSA9IHRoaXMuaGFzcy5zdGF0ZXNbdGhpcy5fcGVyc29uRW50aXR5SWRdO1xuICAgICAgaWYgKGVudGl0eVN0YXRlKSB7XG4gICAgICAgIHRoaXMuX3BlcnNvblBpY3R1cmUgPSBlbnRpdHlTdGF0ZS5hdHRyaWJ1dGVzLmVudGl0eV9waWN0dXJlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZ2V0UGVyc29uUGljdHVyZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXRoaXMuX3BlcnNvbkVudGl0eUlkICYmIG9sZEhhc3MpIHtcbiAgICAgIHRoaXMuX2dldFBlcnNvblBpY3R1cmUoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhdGhpcy51c2VyKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICBjb25zdCBwaWN0dXJlID0gdGhpcy5fcGVyc29uUGljdHVyZTtcblxuICAgIGlmIChwaWN0dXJlKSB7XG4gICAgICByZXR1cm4gaHRtbGA8ZGl2XG4gICAgICAgIHN0eWxlPSR7c3R5bGVNYXAoeyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtwaWN0dXJlfSlgIH0pfVxuICAgICAgICBjbGFzcz1cInBpY3R1cmVcIlxuICAgICAgPjwvZGl2PmA7XG4gICAgfVxuICAgIGNvbnN0IGluaXRpYWxzID0gY29tcHV0ZVVzZXJJbml0aWFscyh0aGlzLnVzZXIubmFtZSk7XG4gICAgcmV0dXJuIGh0bWxgPGRpdlxuICAgICAgY2xhc3M9XCJpbml0aWFscyAke2NsYXNzTWFwKHsgbG9uZzogaW5pdGlhbHMhLmxlbmd0aCA+IDIgfSl9XCJcbiAgICA+XG4gICAgICAke2luaXRpYWxzfVxuICAgIDwvZGl2PmA7XG4gIH1cblxuICBwcml2YXRlIF9nZXRQZXJzb25QaWN0dXJlKCkge1xuICAgIHRoaXMuX3BlcnNvbkVudGl0eUlkID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3BlcnNvblBpY3R1cmUgPSB1bmRlZmluZWQ7XG4gICAgaWYgKCF0aGlzLmhhc3MgfHwgIXRoaXMudXNlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGVudGl0eSBvZiBPYmplY3QudmFsdWVzKHRoaXMuaGFzcy5zdGF0ZXMpKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGVudGl0eS5hdHRyaWJ1dGVzLnVzZXJfaWQgPT09IHRoaXMudXNlci5pZCAmJlxuICAgICAgICBjb21wdXRlU3RhdGVEb21haW4oZW50aXR5KSA9PT0gXCJwZXJzb25cIlxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuX3BlcnNvbkVudGl0eUlkID0gZW50aXR5LmVudGl0eV9pZDtcbiAgICAgICAgdGhpcy5fcGVyc29uUGljdHVyZSA9IGVudGl0eS5hdHRyaWJ1dGVzLmVudGl0eV9waWN0dXJlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRHcm91cCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogY29udGVudHM7XG4gICAgICB9XG4gICAgICAucGljdHVyZSB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIH1cbiAgICAgIC5pbml0aWFscyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQtcHJpbWFyeS1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgICAuaW5pdGlhbHMubG9uZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogODAlO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXVzZXItYmFkZ2VcIjogVXNlckJhZGdlO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/user/ha-user-badge.ts\n");

/***/ }),

/***/ "./src/data/user.ts":
/*!**************************!*\
  !*** ./src/data/user.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SYSTEM_GROUP_ID_ADMIN\": () => (/* binding */ SYSTEM_GROUP_ID_ADMIN),\n/* harmony export */   \"SYSTEM_GROUP_ID_USER\": () => (/* binding */ SYSTEM_GROUP_ID_USER),\n/* harmony export */   \"SYSTEM_GROUP_ID_READ_ONLY\": () => (/* binding */ SYSTEM_GROUP_ID_READ_ONLY),\n/* harmony export */   \"GROUPS\": () => (/* binding */ GROUPS),\n/* harmony export */   \"fetchUsers\": () => (/* binding */ fetchUsers),\n/* harmony export */   \"createUser\": () => (/* binding */ createUser),\n/* harmony export */   \"updateUser\": () => (/* binding */ updateUser),\n/* harmony export */   \"deleteUser\": () => (/* binding */ deleteUser),\n/* harmony export */   \"computeUserInitials\": () => (/* binding */ computeUserInitials),\n/* harmony export */   \"computeUserBadges\": () => (/* binding */ computeUserBadges)\n/* harmony export */ });\nconst mdiCrownCircleOutline = \"M12 2C6.47 2 2 6.5 2 12C2 17.5 6.5 22 12 22S22 17.5 22 12 17.5 2 12 2M12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4S20 7.58 20 12C20 16.42 16.42 20 12 20M8 14L7 8L10 10L12 7L14 10L17 8L16 14H8M8.56 16C8.22 16 8 15.78 8 15.44V15H16V15.44C16 15.78 15.78 16 15.44 16H8.56Z\";\nconst mdiAlphaSCircleOutline = \"M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z\";\nconst mdiHomeCircleOutline = \"M12 20C7.6 20 4 16.4 4 12S7.6 4 12 4 20 7.6 20 12 16.4 20 12 20M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M11 14H13V17H16V12H18L12 7L6 12H8V17H11V14\";\nconst mdiCancel = \"M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z\";\nconst SYSTEM_GROUP_ID_ADMIN = \"system-admin\";\nconst SYSTEM_GROUP_ID_USER = \"system-users\";\nconst SYSTEM_GROUP_ID_READ_ONLY = \"system-read-only\";\nconst GROUPS = [SYSTEM_GROUP_ID_USER, SYSTEM_GROUP_ID_ADMIN];\nconst fetchUsers = async hass => hass.callWS({\n  type: \"config/auth/list\"\n});\nconst createUser = async (hass, name, group_ids, local_only) => hass.callWS({\n  type: \"config/auth/create\",\n  name,\n  group_ids,\n  local_only\n});\nconst updateUser = async (hass, userId, params) => hass.callWS({ ...params,\n  type: \"config/auth/update\",\n  user_id: userId\n});\nconst deleteUser = async (hass, userId) => hass.callWS({\n  type: \"config/auth/delete\",\n  user_id: userId\n});\nconst computeUserInitials = name => {\n  if (!name) {\n    return \"?\";\n  }\n\n  return name.trim() // Split by space and take first 3 words\n  .split(\" \").slice(0, 3) // Of each word, take first letter\n  .map(s => s.substring(0, 1)).join(\"\");\n};\nconst OWNER_ICON = mdiCrownCircleOutline;\nconst SYSTEM_ICON = mdiAlphaSCircleOutline;\nconst LOCAL_ICON = mdiHomeCircleOutline;\nconst DISABLED_ICON = mdiCancel;\nconst computeUserBadges = (hass, user, includeSystem) => {\n  const labels = [];\n\n  const translate = key => hass.localize(`ui.panel.config.users.${key}`);\n\n  if (user.is_owner) {\n    labels.push([OWNER_ICON, translate(\"is_owner\")]);\n  }\n\n  if (includeSystem && user.system_generated) {\n    labels.push([SYSTEM_ICON, translate(\"is_system\")]);\n  }\n\n  if (user.local_only) {\n    labels.push([LOCAL_ICON, translate(\"is_local\")]);\n  }\n\n  if (!user.is_active) {\n    labels.push([DISABLED_ICON, translate(\"is_not_active\")]);\n  }\n\n  return labels;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YS91c2VyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFxQkE7QUFFQTtBQURBO0FBSUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFPQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQVNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1hc3Npc3RhbnQtZnJvbnRlbmQvLi9zcmMvZGF0YS91c2VyLnRzPzgyNGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgbWRpQ3Jvd25DaXJjbGVPdXRsaW5lLFxuICBtZGlBbHBoYVNDaXJjbGVPdXRsaW5lLFxuICBtZGlIb21lQ2lyY2xlT3V0bGluZSxcbiAgbWRpQ2FuY2VsLFxufSBmcm9tIFwiQG1kaS9qc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgQ3JlZGVudGlhbCB9IGZyb20gXCIuL2F1dGhcIjtcblxuZXhwb3J0IGNvbnN0IFNZU1RFTV9HUk9VUF9JRF9BRE1JTiA9IFwic3lzdGVtLWFkbWluXCI7XG5leHBvcnQgY29uc3QgU1lTVEVNX0dST1VQX0lEX1VTRVIgPSBcInN5c3RlbS11c2Vyc1wiO1xuZXhwb3J0IGNvbnN0IFNZU1RFTV9HUk9VUF9JRF9SRUFEX09OTFkgPSBcInN5c3RlbS1yZWFkLW9ubHlcIjtcblxuZXhwb3J0IGNvbnN0IEdST1VQUyA9IFtTWVNURU1fR1JPVVBfSURfVVNFUiwgU1lTVEVNX0dST1VQX0lEX0FETUlOXTtcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcbiAgaWQ6IHN0cmluZztcbiAgdXNlcm5hbWU6IHN0cmluZyB8IG51bGw7XG4gIG5hbWU6IHN0cmluZztcbiAgaXNfb3duZXI6IGJvb2xlYW47XG4gIGlzX2FjdGl2ZTogYm9vbGVhbjtcbiAgbG9jYWxfb25seTogYm9vbGVhbjtcbiAgc3lzdGVtX2dlbmVyYXRlZDogYm9vbGVhbjtcbiAgZ3JvdXBfaWRzOiBzdHJpbmdbXTtcbiAgY3JlZGVudGlhbHM6IENyZWRlbnRpYWxbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVVc2VyUGFyYW1zIHtcbiAgbmFtZT86IFVzZXJbXCJuYW1lXCJdO1xuICBpc19hY3RpdmU/OiBVc2VyW1wiaXNfYWN0aXZlXCJdO1xuICBncm91cF9pZHM/OiBVc2VyW1wiZ3JvdXBfaWRzXCJdO1xuICBsb2NhbF9vbmx5PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoVXNlcnMgPSBhc3luYyAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsV1M8VXNlcltdPih7XG4gICAgdHlwZTogXCJjb25maWcvYXV0aC9saXN0XCIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlciA9IGFzeW5jIChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgbmFtZTogc3RyaW5nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcbiAgZ3JvdXBfaWRzPzogVXNlcltcImdyb3VwX2lkc1wiXSxcbiAgbG9jYWxfb25seT86IGJvb2xlYW5cbikgPT5cbiAgaGFzcy5jYWxsV1M8eyB1c2VyOiBVc2VyIH0+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9hdXRoL2NyZWF0ZVwiLFxuICAgIG5hbWUsXG4gICAgZ3JvdXBfaWRzLFxuICAgIGxvY2FsX29ubHksXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlciA9IGFzeW5jIChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgdXNlcklkOiBzdHJpbmcsXG4gIHBhcmFtczogVXBkYXRlVXNlclBhcmFtc1xuKSA9PlxuICBoYXNzLmNhbGxXUzx7IHVzZXI6IFVzZXIgfT4oe1xuICAgIC4uLnBhcmFtcyxcbiAgICB0eXBlOiBcImNvbmZpZy9hdXRoL3VwZGF0ZVwiLFxuICAgIHVzZXJfaWQ6IHVzZXJJZCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKGhhc3M6IEhvbWVBc3Npc3RhbnQsIHVzZXJJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUzx2b2lkPih7XG4gICAgdHlwZTogXCJjb25maWcvYXV0aC9kZWxldGVcIixcbiAgICB1c2VyX2lkOiB1c2VySWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZVVzZXJJbml0aWFscyA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgaWYgKCFuYW1lKSB7XG4gICAgcmV0dXJuIFwiP1wiO1xuICB9XG4gIHJldHVybiAoXG4gICAgbmFtZVxuICAgICAgLnRyaW0oKVxuICAgICAgLy8gU3BsaXQgYnkgc3BhY2UgYW5kIHRha2UgZmlyc3QgMyB3b3Jkc1xuICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgLnNsaWNlKDAsIDMpXG4gICAgICAvLyBPZiBlYWNoIHdvcmQsIHRha2UgZmlyc3QgbGV0dGVyXG4gICAgICAubWFwKChzKSA9PiBzLnN1YnN0cmluZygwLCAxKSlcbiAgICAgIC5qb2luKFwiXCIpXG4gICk7XG59O1xuXG5jb25zdCBPV05FUl9JQ09OID0gbWRpQ3Jvd25DaXJjbGVPdXRsaW5lO1xuY29uc3QgU1lTVEVNX0lDT04gPSBtZGlBbHBoYVNDaXJjbGVPdXRsaW5lO1xuY29uc3QgTE9DQUxfSUNPTiA9IG1kaUhvbWVDaXJjbGVPdXRsaW5lO1xuY29uc3QgRElTQUJMRURfSUNPTiA9IG1kaUNhbmNlbDtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVVc2VyQmFkZ2VzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICB1c2VyOiBVc2VyLFxuICBpbmNsdWRlU3lzdGVtOiBib29sZWFuXG4pID0+IHtcbiAgY29uc3QgbGFiZWxzOiBbc3RyaW5nLCBzdHJpbmddW10gPSBbXTtcbiAgY29uc3QgdHJhbnNsYXRlID0gKGtleSkgPT4gaGFzcy5sb2NhbGl6ZShgdWkucGFuZWwuY29uZmlnLnVzZXJzLiR7a2V5fWApO1xuXG4gIGlmICh1c2VyLmlzX293bmVyKSB7XG4gICAgbGFiZWxzLnB1c2goW09XTkVSX0lDT04sIHRyYW5zbGF0ZShcImlzX293bmVyXCIpXSk7XG4gIH1cbiAgaWYgKGluY2x1ZGVTeXN0ZW0gJiYgdXNlci5zeXN0ZW1fZ2VuZXJhdGVkKSB7XG4gICAgbGFiZWxzLnB1c2goW1NZU1RFTV9JQ09OLCB0cmFuc2xhdGUoXCJpc19zeXN0ZW1cIildKTtcbiAgfVxuICBpZiAodXNlci5sb2NhbF9vbmx5KSB7XG4gICAgbGFiZWxzLnB1c2goW0xPQ0FMX0lDT04sIHRyYW5zbGF0ZShcImlzX2xvY2FsXCIpXSk7XG4gIH1cbiAgaWYgKCF1c2VyLmlzX2FjdGl2ZSkge1xuICAgIGxhYmVscy5wdXNoKFtESVNBQkxFRF9JQ09OLCB0cmFuc2xhdGUoXCJpc19ub3RfYWN0aXZlXCIpXSk7XG4gIH1cblxuICByZXR1cm4gbGFiZWxzO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/data/user.ts\n");

/***/ })

}]);