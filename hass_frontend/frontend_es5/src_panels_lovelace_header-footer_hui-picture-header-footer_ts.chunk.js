"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || []).push([["src_panels_lovelace_header-footer_hui-picture-header-footer_ts"],{

/***/ "./src/panels/lovelace/header-footer/hui-picture-header-footer.ts":
/*!************************************************************************!*\
  !*** ./src/panels/lovelace/header-footer/hui-picture-header-footer.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HuiPictureHeaderFooter\": function() { return /* binding */ HuiPictureHeaderFooter; }\n/* harmony export */ });\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var lit_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/class-map */ \"./node_modules/lit/directives/class-map.js\");\n/* harmony import */ var lit_directives_if_defined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit/directives/if-defined */ \"./node_modules/lit/directives/if-defined.js\");\n/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-card */ \"./src/components/ha-card.ts\");\n/* harmony import */ var _common_directives_action_handler_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/directives/action-handler-directive */ \"./src/panels/lovelace/common/directives/action-handler-directive.ts\");\n/* harmony import */ var _common_handle_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/handle-action */ \"./src/panels/lovelace/common/handle-action.ts\");\n/* harmony import */ var _common_has_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/has-action */ \"./src/panels/lovelace/common/has-action.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar _templateObject, _templateObject2, _templateObject3;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }\n\nfunction _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [[\"method\"], [\"field\"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === \"own\") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === \"static\" || placement === \"prototype\")) { var receiver = placement === \"static\" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === \"field\") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { \"static\": [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError(\"Duplicated element (\" + element.key + \")\"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError(\"Duplicated element (\" + elements[j].key + \")\"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === \"field\") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, \"finisher\", \"An element descriptor\"); this.disallowProperty(elementObject, \"extras\", \"An element descriptor\"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== \"method\" && kind !== \"field\") { throw new TypeError('An element descriptor\\'s .kind property must be either \"method\" or' + ' \"field\", but a decorator created an element descriptor with' + ' .kind \"' + kind + '\"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== \"static\" && placement !== \"prototype\" && placement !== \"own\") { throw new TypeError('An element descriptor\\'s .placement property must be one of \"static\",' + ' \"prototype\" or \"own\", but a decorator created an element descriptor' + ' with .placement \"' + placement + '\"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, \"elements\", \"An element descriptor\"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== \"field\") { this.disallowProperty(elementObject, \"initializer\", \"A method descriptor\"); } else { this.disallowProperty(descriptor, \"get\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"set\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"value\", \"The property descriptor of a field descriptor\"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, \"finisher\"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: \"class\", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== \"class\") { throw new TypeError('A class descriptor\\'s .kind property must be \"class\", but a decorator' + ' created a class descriptor with .kind \"' + kind + '\"'); } this.disallowProperty(obj, \"key\", \"A class descriptor\"); this.disallowProperty(obj, \"placement\", \"A class descriptor\"); this.disallowProperty(obj, \"descriptor\", \"A class descriptor\"); this.disallowProperty(obj, \"initializer\", \"A class descriptor\"); this.disallowProperty(obj, \"extras\", \"A class descriptor\"); var finisher = _optionalCallableProperty(obj, \"finisher\"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== \"function\") { throw new TypeError(\"Finishers must return a constructor.\"); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + \" can't have a .\" + name + \" property.\"); } } }; return api; }\n\nfunction _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === \"method\") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === \"get\") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"set\") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"field\") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === \"field\" ? \"field\" : \"method\", key: key, placement: def[\"static\"] ? \"static\" : def.kind === \"field\" ? \"own\" : \"prototype\", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === \"field\") element.initializer = def.value; return element; }\n\nfunction _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }\n\nfunction _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === \"method\" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === \"method\" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError(\"Duplicated methods (\" + element.key + \") can't be decorated.\"); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError(\"Decorators can't be placed on different accessors with for \" + \"the same property (\" + element.key + \").\"); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }\n\nfunction _hasDecorators(element) { return element.decorators && element.decorators.length; }\n\nfunction _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }\n\nfunction _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== \"function\") { throw new TypeError(\"Expected '\" + name + \"' to be a function\"); } return value; }\n\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\n\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\nvar HuiPictureHeaderFooter = _decorate([(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.customElement)(\"hui-picture-header-footer\")], function (_initialize, _LitElement) {\n  var HuiPictureHeaderFooter = /*#__PURE__*/function (_LitElement2) {\n    _inherits(HuiPictureHeaderFooter, _LitElement2);\n\n    var _super = _createSuper(HuiPictureHeaderFooter);\n\n    function HuiPictureHeaderFooter() {\n      var _this;\n\n      _classCallCheck(this, HuiPictureHeaderFooter);\n\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      _this = _super.call.apply(_super, [this].concat(args));\n\n      _initialize(_assertThisInitialized(_this));\n\n      return _this;\n    }\n\n    return HuiPictureHeaderFooter;\n  }(_LitElement);\n\n  return {\n    F: HuiPictureHeaderFooter,\n    d: [{\n      kind: \"method\",\n      \"static\": true,\n      key: \"getStubConfig\",\n      value: function getStubConfig() {\n        return {\n          image: \"https://www.home-assistant.io/images/lovelace/header-footer/balloons-header.png\",\n          tap_action: {\n            action: \"none\"\n          },\n          hold_action: {\n            action: \"none\"\n          }\n        };\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.property)({\n        attribute: false\n      })],\n      key: \"hass\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.property)()],\n      key: \"type\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.property)()],\n      key: \"_config\",\n      value: void 0\n    }, {\n      kind: \"method\",\n      key: \"getCardSize\",\n      value: function getCardSize() {\n        return 3;\n      }\n    }, {\n      kind: \"method\",\n      key: \"setConfig\",\n      value: function setConfig(config) {\n        if (!config || !config.image) {\n          throw new Error(\"Image required\");\n        }\n\n        this._config = config;\n      }\n    }, {\n      kind: \"method\",\n      key: \"shouldUpdate\",\n      value: function shouldUpdate(changedProps) {\n        if (changedProps.size === 1 && changedProps.has(\"hass\")) {\n          return !changedProps.get(\"hass\");\n        }\n\n        return true;\n      }\n    }, {\n      kind: \"method\",\n      key: \"render\",\n      value: function render() {\n        if (!this._config || !this.hass) {\n          return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\"])));\n        }\n\n        var clickable = Boolean(this._config.tap_action || this._config.hold_action);\n        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n      <img\\n        @action=\", \"\\n        .actionHandler=\", \"\\n        tabindex=\", \"\\n        class=\", \"\\n        src=\", \"\\n      />\\n    \"])), this._handleAction, (0,_common_directives_action_handler_directive__WEBPACK_IMPORTED_MODULE_5__.actionHandler)({\n          hasHold: (0,_common_has_action__WEBPACK_IMPORTED_MODULE_7__.hasAction)(this._config.hold_action),\n          hasDoubleClick: (0,_common_has_action__WEBPACK_IMPORTED_MODULE_7__.hasAction)(this._config.double_tap_action)\n        }), (0,lit_directives_if_defined__WEBPACK_IMPORTED_MODULE_3__.ifDefined)(clickable ? 0 : undefined), (0,lit_directives_class_map__WEBPACK_IMPORTED_MODULE_2__.classMap)({\n          clickable: clickable\n        }), this.hass.hassUrl(this._config.image));\n      }\n    }, {\n      kind: \"get\",\n      \"static\": true,\n      key: \"styles\",\n      value: function styles() {\n        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n      img.clickable {\\n        cursor: pointer;\\n      }\\n\\n      img {\\n        display: block;\\n        width: 100%;\\n      }\\n    \"])));\n      }\n    }, {\n      kind: \"method\",\n      key: \"_handleAction\",\n      value: function _handleAction(ev) {\n        (0,_common_handle_action__WEBPACK_IMPORTED_MODULE_6__.handleAction)(this, this.hass, this._config, ev.detail.action);\n      }\n    }]\n  };\n}, lit__WEBPACK_IMPORTED_MODULE_0__.LitElement);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2hlYWRlci1mb290ZXIvaHVpLXBpY3R1cmUtaGVhZGVyLWZvb3Rlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBS0E7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBWEE7QUFBQTtBQUFBO0FBYUE7QUFBQTtBQWJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0JBO0FBQ0E7QUFyQkE7QUFBQTtBQUFBO0FBQUE7QUF3QkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUE3QkE7QUFBQTtBQUFBO0FBQUE7QUFnQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFwQ0E7QUFBQTtBQUFBO0FBQUE7QUF1Q0E7QUFDQTtBQUNBOztBQUVBO0FBSUE7QUFJQTtBQUNBO0FBRkE7QUFNQTtBQURBO0FBTUE7QUE3REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdFQTtBQVVBO0FBMUVBO0FBQUE7QUFBQTtBQUFBO0FBNkVBO0FBQ0E7QUE5RUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1hc3Npc3RhbnQtZnJvbnRlbmQvLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2hlYWRlci1mb290ZXIvaHVpLXBpY3R1cmUtaGVhZGVyLWZvb3Rlci50cz9hYWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0R3JvdXAsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFByb3BlcnR5VmFsdWVzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdFwiO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHkgfSBmcm9tIFwibGl0L2RlY29yYXRvcnNcIjtcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSBcImxpdC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuaW1wb3J0IHsgaWZEZWZpbmVkIH0gZnJvbSBcImxpdC9kaXJlY3RpdmVzL2lmLWRlZmluZWRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IHsgQWN0aW9uSGFuZGxlckV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGFjdGlvbkhhbmRsZXIgfSBmcm9tIFwiLi4vY29tbW9uL2RpcmVjdGl2ZXMvYWN0aW9uLWhhbmRsZXItZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBoYW5kbGVBY3Rpb24gfSBmcm9tIFwiLi4vY29tbW9uL2hhbmRsZS1hY3Rpb25cIjtcbmltcG9ydCB7IGhhc0FjdGlvbiB9IGZyb20gXCIuLi9jb21tb24vaGFzLWFjdGlvblwiO1xuaW1wb3J0IHsgTG92ZWxhY2VIZWFkZXJGb290ZXIgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBpY3R1cmVIZWFkZXJGb290ZXJDb25maWcgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1waWN0dXJlLWhlYWRlci1mb290ZXJcIilcbmV4cG9ydCBjbGFzcyBIdWlQaWN0dXJlSGVhZGVyRm9vdGVyXG4gIGV4dGVuZHMgTGl0RWxlbWVudFxuICBpbXBsZW1lbnRzIExvdmVsYWNlSGVhZGVyRm9vdGVyXG57XG4gIHB1YmxpYyBzdGF0aWMgZ2V0U3R1YkNvbmZpZygpOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGltYWdlOlxuICAgICAgICBcImh0dHBzOi8vd3d3LmhvbWUtYXNzaXN0YW50LmlvL2ltYWdlcy9sb3ZlbGFjZS9oZWFkZXItZm9vdGVyL2JhbGxvb25zLWhlYWRlci5wbmdcIixcbiAgICAgIHRhcF9hY3Rpb246IHsgYWN0aW9uOiBcIm5vbmVcIiB9LFxuICAgICAgaG9sZF9hY3Rpb246IHsgYWN0aW9uOiBcIm5vbmVcIiB9LFxuICAgIH07XG4gIH1cblxuICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6IGZhbHNlIH0pIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgdHlwZSE6IFwiaGVhZGVyXCIgfCBcImZvb3RlclwiO1xuXG4gIEBwcm9wZXJ0eSgpIHByb3RlY3RlZCBfY29uZmlnPzogUGljdHVyZUhlYWRlckZvb3RlckNvbmZpZztcblxuICBwdWJsaWMgZ2V0Q2FyZFNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gMztcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBQaWN0dXJlSGVhZGVyRm9vdGVyQ29uZmlnKTogdm9pZCB7XG4gICAgaWYgKCFjb25maWcgfHwgIWNvbmZpZy5pbWFnZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW1hZ2UgcmVxdWlyZWRcIik7XG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNob3VsZFVwZGF0ZShjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogYm9vbGVhbiB7XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5zaXplID09PSAxICYmIGNoYW5nZWRQcm9wcy5oYXMoXCJoYXNzXCIpKSB7XG4gICAgICByZXR1cm4gIWNoYW5nZWRQcm9wcy5nZXQoXCJoYXNzXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5fY29uZmlnIHx8ICF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgY29uc3QgY2xpY2thYmxlID0gQm9vbGVhbihcbiAgICAgIHRoaXMuX2NvbmZpZy50YXBfYWN0aW9uIHx8IHRoaXMuX2NvbmZpZy5ob2xkX2FjdGlvblxuICAgICk7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxpbWdcbiAgICAgICAgQGFjdGlvbj0ke3RoaXMuX2hhbmRsZUFjdGlvbn1cbiAgICAgICAgLmFjdGlvbkhhbmRsZXI9JHthY3Rpb25IYW5kbGVyKHtcbiAgICAgICAgICBoYXNIb2xkOiBoYXNBY3Rpb24odGhpcy5fY29uZmlnIS5ob2xkX2FjdGlvbiksXG4gICAgICAgICAgaGFzRG91YmxlQ2xpY2s6IGhhc0FjdGlvbih0aGlzLl9jb25maWchLmRvdWJsZV90YXBfYWN0aW9uKSxcbiAgICAgICAgfSl9XG4gICAgICAgIHRhYmluZGV4PSR7aWZEZWZpbmVkKGNsaWNrYWJsZSA/IDAgOiB1bmRlZmluZWQpfVxuICAgICAgICBjbGFzcz0ke2NsYXNzTWFwKHtcbiAgICAgICAgICBjbGlja2FibGUsXG4gICAgICAgIH0pfVxuICAgICAgICBzcmM9JHt0aGlzLmhhc3MuaGFzc1VybCh0aGlzLl9jb25maWcuaW1hZ2UpfVxuICAgICAgLz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0R3JvdXAge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBpbWcuY2xpY2thYmxlIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUFjdGlvbihldjogQWN0aW9uSGFuZGxlckV2ZW50KSB7XG4gICAgaGFuZGxlQWN0aW9uKHRoaXMsIHRoaXMuaGFzcyEsIHRoaXMuX2NvbmZpZyEsIGV2LmRldGFpbC5hY3Rpb24hKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLXBpY3R1cmUtaGVhZGVyLWZvb3RlclwiOiBIdWlQaWN0dXJlSGVhZGVyRm9vdGVyO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/panels/lovelace/header-footer/hui-picture-header-footer.ts\n");

/***/ })

}]);