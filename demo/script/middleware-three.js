webpackJsonp([13],{

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polymerElement = __webpack_require__(2);

var _window = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Middleware3 = function (_Element) {
  _inherits(Middleware3, _Element);

  function Middleware3() {
    _classCallCheck(this, Middleware3);

    return _possibleConstructorReturn(this, (Middleware3.__proto__ || Object.getPrototypeOf(Middleware3)).apply(this, arguments));
  }

  _createClass(Middleware3, [{
    key: 'middleware',
    value: function middleware() {
      return true;
    }
  }], [{
    key: 'is',
    get: function get() {
      return 'middleware-three';
    }
  }]);

  return Middleware3;
}(_polymerElement.Element);

_window.customElements.define(Middleware3.is, Middleware3);

/***/ })

},[86]);
//# sourceMappingURL=middleware-three.js.map