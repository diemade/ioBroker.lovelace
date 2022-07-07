"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || []).push([["src_components_search-input_ts"],{

/***/ "./src/components/search-input.ts":
/*!****************************************!*\
  !*** ./src/components/search-input.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var _ha_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-icon-button */ \"./src/components/ha-icon-button.ts\");\n/* harmony import */ var _ha_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-svg-icon */ \"./src/components/ha-svg-icon.ts\");\n/* harmony import */ var _ha_textfield__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-textfield */ \"./src/components/ha-textfield.ts\");\n/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/dom/fire_event */ \"./src/common/dom/fire_event.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar _templateObject, _templateObject2, _templateObject3;\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }\n\nfunction _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [[\"method\"], [\"field\"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === \"own\") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === \"static\" || placement === \"prototype\")) { var receiver = placement === \"static\" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === \"field\") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { \"static\": [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError(\"Duplicated element (\" + element.key + \")\"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError(\"Duplicated element (\" + elements[j].key + \")\"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === \"field\") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, \"finisher\", \"An element descriptor\"); this.disallowProperty(elementObject, \"extras\", \"An element descriptor\"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== \"method\" && kind !== \"field\") { throw new TypeError('An element descriptor\\'s .kind property must be either \"method\" or' + ' \"field\", but a decorator created an element descriptor with' + ' .kind \"' + kind + '\"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== \"static\" && placement !== \"prototype\" && placement !== \"own\") { throw new TypeError('An element descriptor\\'s .placement property must be one of \"static\",' + ' \"prototype\" or \"own\", but a decorator created an element descriptor' + ' with .placement \"' + placement + '\"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, \"elements\", \"An element descriptor\"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== \"field\") { this.disallowProperty(elementObject, \"initializer\", \"A method descriptor\"); } else { this.disallowProperty(descriptor, \"get\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"set\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"value\", \"The property descriptor of a field descriptor\"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, \"finisher\"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: \"class\", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== \"class\") { throw new TypeError('A class descriptor\\'s .kind property must be \"class\", but a decorator' + ' created a class descriptor with .kind \"' + kind + '\"'); } this.disallowProperty(obj, \"key\", \"A class descriptor\"); this.disallowProperty(obj, \"placement\", \"A class descriptor\"); this.disallowProperty(obj, \"descriptor\", \"A class descriptor\"); this.disallowProperty(obj, \"initializer\", \"A class descriptor\"); this.disallowProperty(obj, \"extras\", \"A class descriptor\"); var finisher = _optionalCallableProperty(obj, \"finisher\"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== \"function\") { throw new TypeError(\"Finishers must return a constructor.\"); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + \" can't have a .\" + name + \" property.\"); } } }; return api; }\n\nfunction _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === \"method\") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === \"get\") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"set\") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"field\") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === \"field\" ? \"field\" : \"method\", key: key, placement: def[\"static\"] ? \"static\" : def.kind === \"field\" ? \"own\" : \"prototype\", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === \"field\") element.initializer = def.value; return element; }\n\nfunction _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }\n\nfunction _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === \"method\" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === \"method\" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError(\"Duplicated methods (\" + element.key + \") can't be decorated.\"); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError(\"Decorators can't be placed on different accessors with for \" + \"the same property (\" + element.key + \").\"); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }\n\nfunction _hasDecorators(element) { return element.decorators && element.decorators.length; }\n\nfunction _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }\n\nfunction _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== \"function\") { throw new TypeError(\"Expected '\" + name + \"' to be a function\"); } return value; }\n\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\n\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar mdiClose = \"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\";\nvar mdiMagnify = \"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z\";\n\n\n\n\n\n\n\nvar SearchInput = _decorate([(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.customElement)(\"search-input\")], function (_initialize, _LitElement) {\n  var SearchInput = /*#__PURE__*/function (_LitElement2) {\n    _inherits(SearchInput, _LitElement2);\n\n    var _super = _createSuper(SearchInput);\n\n    function SearchInput() {\n      var _this;\n\n      _classCallCheck(this, SearchInput);\n\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      _this = _super.call.apply(_super, [this].concat(args));\n\n      _initialize(_assertThisInitialized(_this));\n\n      return _this;\n    }\n\n    return SearchInput;\n  }(_LitElement);\n\n  return {\n    F: SearchInput,\n    d: [{\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.property)({\n        attribute: false\n      })],\n      key: \"hass\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.property)()],\n      key: \"filter\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.property)({\n        type: Boolean\n      })],\n      key: \"suffix\",\n      value: function value() {\n        return false;\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.property)({\n        type: Boolean\n      })],\n      key: \"autofocus\",\n      value: function value() {\n        return false;\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.property)({\n        type: String\n      })],\n      key: \"label\",\n      value: void 0\n    }, {\n      kind: \"method\",\n      key: \"focus\",\n      value: function focus() {\n        var _this$_input;\n\n        (_this$_input = this._input) === null || _this$_input === void 0 ? void 0 : _this$_input.focus();\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.query)(\"ha-textfield\", true)],\n      key: \"_input\",\n      value: void 0\n    }, {\n      kind: \"method\",\n      key: \"render\",\n      value: function render() {\n        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n      <ha-textfield\\n        .autofocus=\", \"\\n        .label=\", \"\\n        .value=\", \"\\n        icon\\n        .iconTrailing=\", \"\\n        @input=\", \"\\n      >\\n        <slot name=\\\"prefix\\\" slot=\\\"leadingIcon\\\">\\n          <ha-svg-icon\\n            tabindex=\\\"-1\\\"\\n            class=\\\"prefix\\\"\\n            .path=\", \"\\n          ></ha-svg-icon>\\n        </slot>\\n        <div class=\\\"trailing\\\" slot=\\\"trailingIcon\\\">\\n          \", \"\\n          <slot name=\\\"suffix\\\"></slot>\\n        </div>\\n      </ha-textfield>\\n    \"])), this.autofocus, this.label || \"Search\", this.filter || \"\", this.filter || this.suffix, this._filterInputChanged, mdiMagnify, this.filter && (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n            <ha-icon-button\\n              @click=\", \"\\n              .label=\", \"\\n              .path=\", \"\\n              class=\\\"clear-button\\\"\\n            ></ha-icon-button>\\n          \"])), this._clearSearch, this.hass.localize(\"ui.common.clear\"), mdiClose));\n      }\n    }, {\n      kind: \"method\",\n      key: \"_filterChanged\",\n      value: function () {\n        var _filterChanged2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(value) {\n          return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  (0,_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__.fireEvent)(this, \"value-changed\", {\n                    value: String(value)\n                  });\n\n                case 1:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee, this);\n        }));\n\n        function _filterChanged(_x) {\n          return _filterChanged2.apply(this, arguments);\n        }\n\n        return _filterChanged;\n      }()\n    }, {\n      kind: \"method\",\n      key: \"_filterInputChanged\",\n      value: function () {\n        var _filterInputChanged2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {\n          return regeneratorRuntime.wrap(function _callee2$(_context2) {\n            while (1) {\n              switch (_context2.prev = _context2.next) {\n                case 0:\n                  this._filterChanged(e.target.value);\n\n                case 1:\n                case \"end\":\n                  return _context2.stop();\n              }\n            }\n          }, _callee2, this);\n        }));\n\n        function _filterInputChanged(_x2) {\n          return _filterInputChanged2.apply(this, arguments);\n        }\n\n        return _filterInputChanged;\n      }()\n    }, {\n      kind: \"method\",\n      key: \"_clearSearch\",\n      value: function () {\n        var _clearSearch2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n          return regeneratorRuntime.wrap(function _callee3$(_context3) {\n            while (1) {\n              switch (_context3.prev = _context3.next) {\n                case 0:\n                  this._filterChanged(\"\");\n\n                case 1:\n                case \"end\":\n                  return _context3.stop();\n              }\n            }\n          }, _callee3, this);\n        }));\n\n        function _clearSearch() {\n          return _clearSearch2.apply(this, arguments);\n        }\n\n        return _clearSearch;\n      }()\n    }, {\n      kind: \"get\",\n      \"static\": true,\n      key: \"styles\",\n      value: function styles() {\n        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n      :host {\\n        display: inline-flex;\\n      }\\n      ha-svg-icon,\\n      ha-icon-button {\\n        color: var(--primary-text-color);\\n      }\\n      ha-svg-icon {\\n        outline: none;\\n      }\\n      .clear-button {\\n        --mdc-icon-size: 20px;\\n      }\\n      ha-textfield {\\n        display: inherit;\\n      }\\n      .trailing {\\n        display: flex;\\n        align-items: center;\\n      }\\n    \"])));\n      }\n    }]\n  };\n}, lit__WEBPACK_IMPORTED_MODULE_0__.LitElement);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtaW5wdXQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFHQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUNBO0FBQUE7QUFBQTs7Ozs7QUFFQTs7Ozs7QUFFQTtBQUFBO0FBQUE7OztBQUNBOzs7O0FBRUE7QUFBQTtBQUFBOzs7QUFDQTs7OztBQUVBO0FBQUE7QUFBQTs7Ozs7O0FBR0E7QUFBQTs7QUFDQTtBQUNBOzs7QUFFQTs7Ozs7O0FBRUE7QUFDQTtBQThCQTs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTtBQXNCQTs7O0FBeEZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1hc3Npc3RhbnQtZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtaW5wdXQudHM/YjNiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZGlDbG9zZSwgbWRpTWFnbmlmeSB9IGZyb20gXCJAbWRpL2pzXCI7XG5pbXBvcnQgeyBjc3MsIENTU1Jlc3VsdEdyb3VwLCBodG1sLCBMaXRFbGVtZW50LCBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gXCJsaXRcIjtcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBxdWVyeSB9IGZyb20gXCJsaXQvZGVjb3JhdG9yc1wiO1xuaW1wb3J0IFwiLi9oYS1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi9oYS1zdmctaWNvblwiO1xuaW1wb3J0IFwiLi9oYS10ZXh0ZmllbGRcIjtcbmltcG9ydCB0eXBlIHsgSGFUZXh0RmllbGQgfSBmcm9tIFwiLi9oYS10ZXh0ZmllbGRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJzZWFyY2gtaW5wdXRcIilcbmNsYXNzIFNlYXJjaElucHV0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogZmFsc2UgfSkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBmaWx0ZXI/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICBwdWJsaWMgc3VmZml4ID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICBwdWJsaWMgYXV0b2ZvY3VzID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHB1YmxpYyBsYWJlbD86IHN0cmluZztcblxuICBwdWJsaWMgZm9jdXMoKSB7XG4gICAgdGhpcy5faW5wdXQ/LmZvY3VzKCk7XG4gIH1cblxuICBAcXVlcnkoXCJoYS10ZXh0ZmllbGRcIiwgdHJ1ZSkgcHJpdmF0ZSBfaW5wdXQhOiBIYVRleHRGaWVsZDtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS10ZXh0ZmllbGRcbiAgICAgICAgLmF1dG9mb2N1cz0ke3RoaXMuYXV0b2ZvY3VzfVxuICAgICAgICAubGFiZWw9JHt0aGlzLmxhYmVsIHx8IFwiU2VhcmNoXCJ9XG4gICAgICAgIC52YWx1ZT0ke3RoaXMuZmlsdGVyIHx8IFwiXCJ9XG4gICAgICAgIGljb25cbiAgICAgICAgLmljb25UcmFpbGluZz0ke3RoaXMuZmlsdGVyIHx8IHRoaXMuc3VmZml4fVxuICAgICAgICBAaW5wdXQ9JHt0aGlzLl9maWx0ZXJJbnB1dENoYW5nZWR9XG4gICAgICA+XG4gICAgICAgIDxzbG90IG5hbWU9XCJwcmVmaXhcIiBzbG90PVwibGVhZGluZ0ljb25cIj5cbiAgICAgICAgICA8aGEtc3ZnLWljb25cbiAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgICAgY2xhc3M9XCJwcmVmaXhcIlxuICAgICAgICAgICAgLnBhdGg9JHttZGlNYWduaWZ5fVxuICAgICAgICAgID48L2hhLXN2Zy1pY29uPlxuICAgICAgICA8L3Nsb3Q+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0cmFpbGluZ1wiIHNsb3Q9XCJ0cmFpbGluZ0ljb25cIj5cbiAgICAgICAgICAke3RoaXMuZmlsdGVyICYmXG4gICAgICAgICAgaHRtbGBcbiAgICAgICAgICAgIDxoYS1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9jbGVhclNlYXJjaH1cbiAgICAgICAgICAgICAgLmxhYmVsPSR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkuY29tbW9uLmNsZWFyXCIpfVxuICAgICAgICAgICAgICAucGF0aD0ke21kaUNsb3NlfVxuICAgICAgICAgICAgICBjbGFzcz1cImNsZWFyLWJ1dHRvblwiXG4gICAgICAgICAgICA+PC9oYS1pY29uLWJ1dHRvbj5cbiAgICAgICAgICBgfVxuICAgICAgICAgIDxzbG90IG5hbWU9XCJzdWZmaXhcIj48L3Nsb3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS10ZXh0ZmllbGQ+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZpbHRlckNoYW5nZWQodmFsdWU6IHN0cmluZykge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcInZhbHVlLWNoYW5nZWRcIiwgeyB2YWx1ZTogU3RyaW5nKHZhbHVlKSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZpbHRlcklucHV0Q2hhbmdlZChlKSB7XG4gICAgdGhpcy5fZmlsdGVyQ2hhbmdlZChlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9jbGVhclNlYXJjaCgpIHtcbiAgICB0aGlzLl9maWx0ZXJDaGFuZ2VkKFwiXCIpO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0R3JvdXAge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgfVxuICAgICAgaGEtc3ZnLWljb24sXG4gICAgICBoYS1pY29uLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuICAgICAgaGEtc3ZnLWljb24ge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuICAgICAgLmNsZWFyLWJ1dHRvbiB7XG4gICAgICAgIC0tbWRjLWljb24tc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgICAgIGhhLXRleHRmaWVsZCB7XG4gICAgICAgIGRpc3BsYXk6IGluaGVyaXQ7XG4gICAgICB9XG4gICAgICAudHJhaWxpbmcge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInNlYXJjaC1pbnB1dFwiOiBTZWFyY2hJbnB1dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/search-input.ts\n");

/***/ })

}]);