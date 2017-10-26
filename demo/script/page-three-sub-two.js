webpackJsonp([6],{

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-env browser */

var RegisterHtmlTemplate = function () {
  function RegisterHtmlTemplate() {
    _classCallCheck(this, RegisterHtmlTemplate);
  }

  _createClass(RegisterHtmlTemplate, null, [{
    key: 'register',

    /**
     * Create a `<template>` element to hold `<dom-module>` content.
     * This bit of code will execute in the context of the main document,
     * calling `importNode` on the `<template>`, which in turn triggers
     * the lifecycle of the `<dom-module>` and allows it to insert its
     * content into Polymer's global module map. When a Polymer element
     * boots up it will fetch its template from this module map.
     * https://github.com/Polymer/polymer/blob/master/lib/mixins/element-mixin.html#L501-L538
     * @param {string} val A `<dom-module>` as an HTML string
     */
    value: function register(val) {
      var content = void 0;
      var template = document.createElement('template');
      template.innerHTML = val;
      if (template.content) {
        content = template.content; // eslint-disable-line prefer-destructuring
      } else {
        content = document.createDocumentFragment();
        while (template.firstChild) {
          content.appendChild(template.firstChild);
        }
      }
      document.importNode(content, true);
    }
    /**
     * Content that will be injected into the main document. This is primarily
     * for things like `<iron-iconset>` and `<custom-style>` which do not have
     * templates but rely on HTML Imports ability to apply content to the main
     * document.
     * @param {string} val An HTML string
     */

  }, {
    key: 'toBody',
    value: function toBody(val) {
      var trimmedVal = val.trim();
      if (trimmedVal) {
        var div = document.createElement('div');
        div.innerHTML = trimmedVal;
        if (div.firstChild) {
          if (document.body) {
            document.body.insertBefore(div.firstChild, document.body.firstChild);
          } else {
            document.addEventListener('DOMContentLoaded', function () {
              document.body.insertBefore(div.firstChild, document.body.firstChild);
            });
          }
        }
      }
    }
  }]);

  return RegisterHtmlTemplate;
}();

module.exports = RegisterHtmlTemplate;

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polymerElement = __webpack_require__(2);

var _window = __webpack_require__(0);

__webpack_require__(81);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page32 = function (_Element) {
  _inherits(Page32, _Element);

  function Page32() {
    _classCallCheck(this, Page32);

    return _possibleConstructorReturn(this, (Page32.__proto__ || Object.getPrototypeOf(Page32)).apply(this, arguments));
  }

  _createClass(Page32, null, [{
    key: 'is',
    get: function get() {
      return 'page-three-sub-two';
    }
  }]);

  return Page32;
}(_polymerElement.Element);

_window.customElements.define(Page32.is, Page32);

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.register("<dom-module id=page-three-sub-two> <template> Page Three sub two; </template> </dom-module>");

/***/ })

},[80]);
//# sourceMappingURL=page-three-sub-two.js.map