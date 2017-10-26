webpackJsonp([1],{

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

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Debouncer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @typedef {{run: function(function(), number=):number, cancel: function(number)}} */
var AsyncModule = void 0; // eslint-disable-line no-unused-vars

/**
 * @summary Collapse multiple callbacks into one invocation after a timer.
 * @memberof Polymer
 */

var Debouncer = function () {
  function Debouncer() {
    _classCallCheck(this, Debouncer);

    this._asyncModule = null;
    this._callback = null;
    this._timer = null;
  }
  /**
   * Sets the scheduler; that is, a module with the Async interface,
   * a callback and optional arguments to be passed to the run function
   * from the async module.
   *
   * @param {!AsyncModule} asyncModule Object with Async interface.
   * @param {function()} callback Callback to run.
   */


  _createClass(Debouncer, [{
    key: 'setConfig',
    value: function setConfig(asyncModule, callback) {
      var _this = this;

      this._asyncModule = asyncModule;
      this._callback = callback;
      this._timer = this._asyncModule.run(function () {
        _this._timer = null;
        _this._callback();
      });
    }
    /**
     * Cancels an active debouncer and returns a reference to itself.
     */

  }, {
    key: 'cancel',
    value: function cancel() {
      if (this.isActive()) {
        this._asyncModule.cancel(this._timer);
        this._timer = null;
      }
    }
    /**
     * Flushes an active debouncer and returns a reference to itself.
     */

  }, {
    key: 'flush',
    value: function flush() {
      if (this.isActive()) {
        this.cancel();
        this._callback();
      }
    }
    /**
     * Returns true if the debouncer is active.
     *
     * @return {boolean} True if active.
     */

  }, {
    key: 'isActive',
    value: function isActive() {
      return this._timer != null;
    }
    /**
     * Creates a debouncer if no debouncer is passed as a parameter
     * or it cancels an active debouncer otherwise. The following
     * example shows how a debouncer can be called multiple times within a
     * microtask and "debounced" such that the provided callback function is
     * called once. Add this method to a custom element:
     *
     * _debounceWork() {
     *   this._debounceJob = Polymer.Debouncer.debounce(this._debounceJob,
     *       Polymer.Async.microTask, () => {
     *     this._doWork();
     *   });
     * }
     *
     * If the `_debounceWork` method is called multiple times within the same
     * microtask, the `_doWork` function will be called only once at the next
     * microtask checkpoint.
     *
     * Note: In testing it is often convenient to avoid asynchrony. To accomplish
     * this with a debouncer, you can use `Polymer.enqueueDebouncer` and
     * `Polymer.flush`. For example, extend the above example by adding
     * `Polymer.enqueueDebouncer(this._debounceJob)` at the end of the
     * `_debounceWork` method. Then in a test, call `Polymer.flush` to ensure
     * the debouncer has completed.
     *
     * @param {Debouncer?} debouncer Debouncer object.
     * @param {!AsyncModule} asyncModule Object with Async interface
     * @param {function()} callback Callback to run.
     * @return {!Debouncer} Returns a debouncer object.
     */

  }], [{
    key: 'debounce',
    value: function debounce(debouncer, asyncModule, callback) {
      if (debouncer instanceof Debouncer) {
        debouncer.cancel();
      } else {
        debouncer = new Debouncer();
      }
      debouncer.setConfig(asyncModule, callback);
      return debouncer;
    }
  }]);

  return Debouncer;
}();

exports.Debouncer = Debouncer;

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polymerElement = __webpack_require__(2);

var _gestureEventListeners = __webpack_require__(63);

var _window = __webpack_require__(0);

__webpack_require__(65);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_GestureEventListener) {
  _inherits(Login, _GestureEventListener);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  _createClass(Login, null, [{
    key: 'is',
    get: function get() {
      return 'login-page';
    }
  }]);

  return Login;
}((0, _gestureEventListeners.GestureEventListeners)(_polymerElement.Element));

_window.customElements.define(Login.is, Login);

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GestureEventListeners = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

__webpack_require__(3);

var _mixin = __webpack_require__(4);

var _gestures = __webpack_require__(64);

var gestures$0 = _interopRequireWildcard(_gestures);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @const {Polymer.Gestures}
 */
var gestures = gestures$0;

var GestureEventListeners = exports.GestureEventListeners = (0, _mixin.dedupingMixin)(function (superClass) {

  /**
   * @polymer
   * @mixinClass
   * @implements {Polymer_GestureEventListeners}
   */
  var GestureEventListeners = function (_superClass) {
    _inherits(GestureEventListeners, _superClass);

    function GestureEventListeners() {
      _classCallCheck(this, GestureEventListeners);

      return _possibleConstructorReturn(this, (GestureEventListeners.__proto__ || Object.getPrototypeOf(GestureEventListeners)).apply(this, arguments));
    }

    _createClass(GestureEventListeners, [{
      key: '_addEventListenerToNode',
      value: function _addEventListenerToNode(node, eventName, handler) {
        if (!gestures.addListener(node, eventName, handler)) {
          _get(GestureEventListeners.prototype.__proto__ || Object.getPrototypeOf(GestureEventListeners.prototype), '_addEventListenerToNode', this).call(this, node, eventName, handler);
        }
      }
    }, {
      key: '_removeEventListenerFromNode',
      value: function _removeEventListenerFromNode(node, eventName, handler) {
        if (!gestures.removeListener(node, eventName, handler)) {
          _get(GestureEventListeners.prototype.__proto__ || Object.getPrototypeOf(GestureEventListeners.prototype), '_removeEventListenerFromNode', this).call(this, node, eventName, handler);
        }
      }
    }]);

    return GestureEventListeners;
  }(superClass);

  return GestureEventListeners;
});

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.add = exports.findOriginalTarget = exports.prevent = exports._fire = exports.recognizers = exports.gestures = undefined;
exports.deepTargetFind = deepTargetFind;
exports._findOriginalTarget = _findOriginalTarget;
exports._handleNative = _handleNative;
exports._handleTouchAction = _handleTouchAction;
exports.addListener = addListener;
exports.removeListener = removeListener;
exports._add = _add;
exports._remove = _remove;
exports.register = register;
exports._findRecognizerByEvent = _findRecognizerByEvent;
exports.setTouchAction = setTouchAction;
exports.resetMouseCanceller = resetMouseCanceller;

__webpack_require__(3);

var _async = __webpack_require__(6);

var _debounce = __webpack_require__(12);

// detect native touch action support
var HAS_NATIVE_TA = typeof document.head.style.touchAction === 'string';
var GESTURE_KEY = '__polymerGestures';
var HANDLED_OBJ = '__polymerGesturesHandled';
var TOUCH_ACTION = '__polymerGesturesTouchAction';
// radius for tap and track
var TAP_DISTANCE = 25;
var TRACK_DISTANCE = 5;
// number of last N track positions to keep
var TRACK_LENGTH = 2;

// Disabling "mouse" handlers for 2500ms is enough
var MOUSE_TIMEOUT = 2500;
var MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'click'];
// an array of bitmask values for mapping MouseEvent.which to MouseEvent.buttons
var MOUSE_WHICH_TO_BUTTONS = [0, 1, 4, 2];
var MOUSE_HAS_BUTTONS = function () {
  try {
    return new MouseEvent('test', { buttons: 1 }).buttons === 1;
  } catch (e) {
    return false;
  }
}();

/* eslint no-empty: ["error", { "allowEmptyCatch": true }] */
// check for passive event listeners
var SUPPORTS_PASSIVE = false;
(function () {
  try {
    var opts = Object.defineProperty({}, 'passive', { get: function get() {
        SUPPORTS_PASSIVE = true;
      } });
    window.addEventListener('test', null, opts);
    window.removeEventListener('test', null, opts);
  } catch (e) {}
})();

// Check for touch-only devices
var IS_TOUCH_ONLY = navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);

var GestureRecognizer = function GestureRecognizer() {}; // eslint-disable-line no-unused-vars
GestureRecognizer.prototype.reset = function () {};
/** @type {function(MouseEvent) | undefined} */
GestureRecognizer.prototype.mousedown;
/** @type {(function(MouseEvent) | undefined)} */
GestureRecognizer.prototype.mousemove;
/** @type {(function(MouseEvent) | undefined)} */
GestureRecognizer.prototype.mouseup;
/** @type {(function(TouchEvent) | undefined)} */
GestureRecognizer.prototype.touchstart;
/** @type {(function(TouchEvent) | undefined)} */
GestureRecognizer.prototype.touchmove;
/** @type {(function(TouchEvent) | undefined)} */
GestureRecognizer.prototype.touchend;
/** @type {(function(MouseEvent) | undefined)} */
GestureRecognizer.prototype.click;

// touch will make synthetic mouse events
// `preventDefault` on touchend will cancel them,
// but this breaks `<input>` focus and link clicks
// disable mouse handlers for MOUSE_TIMEOUT ms after
// a touchend to ignore synthetic mouse events
var mouseCanceller = function mouseCanceller(mouseEvent) {
  // Check for sourceCapabilities, used to distinguish synthetic events
  // if mouseEvent did not come from a device that fires touch events,
  // it was made by a real mouse and should be counted
  // http://wicg.github.io/InputDeviceCapabilities/#dom-inputdevicecapabilities-firestouchevents
  var sc = mouseEvent.sourceCapabilities;
  if (sc && !sc.firesTouchEvents) {
    return;
  }
  // skip synthetic mouse events
  mouseEvent[HANDLED_OBJ] = { skip: true };
  // disable "ghost clicks"
  if (mouseEvent.type === 'click') {
    var path = mouseEvent.composedPath && mouseEvent.composedPath();
    if (path) {
      for (var i = 0; i < path.length; i++) {
        if (path[i] === POINTERSTATE.mouse.target) {
          return;
        }
      }
    }
    mouseEvent.preventDefault();
    mouseEvent.stopPropagation();
  }
};

/**
 * @param {boolean=} setup True to add, false to remove.
 */
function setupTeardownMouseCanceller(setup) {
  var events = IS_TOUCH_ONLY ? ['click'] : MOUSE_EVENTS;
  for (var i = 0, en; i < events.length; i++) {
    en = events[i];
    if (setup) {
      document.addEventListener(en, mouseCanceller, true);
    } else {
      document.removeEventListener(en, mouseCanceller, true);
    }
  }
}

function ignoreMouse(e) {
  if (!POINTERSTATE.mouse.mouseIgnoreJob) {
    setupTeardownMouseCanceller(true);
  }
  var unset = function unset() {
    setupTeardownMouseCanceller();
    POINTERSTATE.mouse.target = null;
    POINTERSTATE.mouse.mouseIgnoreJob = null;
  };
  POINTERSTATE.mouse.target = e.composedPath()[0];
  POINTERSTATE.mouse.mouseIgnoreJob = _debounce.Debouncer.debounce(POINTERSTATE.mouse.mouseIgnoreJob, _async.timeOut.after(MOUSE_TIMEOUT), unset);
}

/**
 * @param {MouseEvent} ev event to test for left mouse button down
 * @return {boolean} has left mouse button down
 */
function hasLeftMouseButton(ev) {
  var type = ev.type;
  // exit early if the event is not a mouse event
  if (MOUSE_EVENTS.indexOf(type) === -1) {
    return false;
  }
  // ev.button is not reliable for mousemove (0 is overloaded as both left button and no buttons)
  // instead we use ev.buttons (bitmask of buttons) or fall back to ev.which (deprecated, 0 for no buttons, 1 for left button)
  if (type === 'mousemove') {
    // allow undefined for testing events
    var buttons = ev.buttons === undefined ? 1 : ev.buttons;
    if (ev instanceof window.MouseEvent && !MOUSE_HAS_BUTTONS) {
      buttons = MOUSE_WHICH_TO_BUTTONS[ev.which] || 0;
    }
    // buttons is a bitmask, check that the left button bit is set (1)
    return Boolean(buttons & 1);
  } else {
    // allow undefined for testing events
    var button = ev.button === undefined ? 0 : ev.button;
    // ev.button is 0 in mousedown/mouseup/click for left button activation
    return button === 0;
  }
}

function isSyntheticClick(ev) {
  if (ev.type === 'click') {
    // ev.detail is 0 for HTMLElement.click in most browsers
    if (ev.detail === 0) {
      return true;
    }
    // in the worst case, check that the x/y position of the click is within
    // the bounding box of the target of the event
    // Thanks IE 10 >:(
    var t = _findOriginalTarget(ev);
    // make sure the target of the event is an element so we can use getBoundingClientRect,
    // if not, just assume it is a synthetic click
    if (!t.nodeType || /** @type {Element} */t.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }
    var bcr = /** @type {Element} */t.getBoundingClientRect();
    // use page x/y to account for scrolling
    var x = ev.pageX,
        y = ev.pageY;
    // ev is a synthetic click if the position is outside the bounding box of the target
    return !(x >= bcr.left && x <= bcr.right && y >= bcr.top && y <= bcr.bottom);
  }
  return false;
}

var POINTERSTATE = {
  mouse: {
    target: null,
    mouseIgnoreJob: null
  },
  touch: {
    x: 0,
    y: 0,
    id: -1,
    scrollDecided: false
  }
};

function firstTouchAction(ev) {
  var ta = 'auto';
  var path = ev.composedPath && ev.composedPath();
  if (path) {
    for (var i = 0, n; i < path.length; i++) {
      n = path[i];
      if (n[TOUCH_ACTION]) {
        ta = n[TOUCH_ACTION];
        break;
      }
    }
  }
  return ta;
}

function trackDocument(stateObj, movefn, upfn) {
  stateObj.movefn = movefn;
  stateObj.upfn = upfn;
  document.addEventListener('mousemove', movefn);
  document.addEventListener('mouseup', upfn);
}

function untrackDocument(stateObj) {
  document.removeEventListener('mousemove', stateObj.movefn);
  document.removeEventListener('mouseup', stateObj.upfn);
  stateObj.movefn = null;
  stateObj.upfn = null;
}

// use a document-wide touchend listener to start the ghost-click prevention mechanism
// Use passive event listeners, if supported, to not affect scrolling performance
document.addEventListener('touchend', ignoreMouse, SUPPORTS_PASSIVE ? { passive: true } : false);

var gestures = exports.gestures = {};
var recognizers = exports.recognizers = [];

function deepTargetFind(x, y) {
  var node = document.elementFromPoint(x, y);
  var next = node;
  // this code path is only taken when native ShadowDOM is used
  // if there is a shadowroot, it may have a node at x/y
  // if there is not a shadowroot, exit the loop
  while (next && next.shadowRoot && !window.ShadyDOM) {
    // if there is a node at x/y in the shadowroot, look deeper
    var oldNext = next;
    next = next.shadowRoot.elementFromPoint(x, y);
    // on Safari, elementFromPoint may return the shadowRoot host
    if (oldNext === next) {
      break;
    }
    if (next) {
      node = next;
    }
  }
  return node;
}

function _findOriginalTarget(ev) {
  // shadowdom
  if (ev.composedPath) {
    return (/** @type {EventTarget} */ev.composedPath()[0]
    );
  }
  // shadydom
  return ev.target;
}

function _handleNative(ev) {
  var handled = void 0;
  var type = ev.type;
  var node = ev.currentTarget;
  var gobj = node[GESTURE_KEY];
  if (!gobj) {
    return;
  }
  var gs = gobj[type];
  if (!gs) {
    return;
  }
  if (!ev[HANDLED_OBJ]) {
    ev[HANDLED_OBJ] = {};
    if (type.slice(0, 5) === 'touch') {
      ev = /** @type {TouchEvent} */ev; // eslint-disable-line no-self-assign
      var t = ev.changedTouches[0];
      if (type === 'touchstart') {
        // only handle the first finger
        if (ev.touches.length === 1) {
          POINTERSTATE.touch.id = t.identifier;
        }
      }
      if (POINTERSTATE.touch.id !== t.identifier) {
        return;
      }
      if (!HAS_NATIVE_TA) {
        if (type === 'touchstart' || type === 'touchmove') {
          _handleTouchAction(ev);
        }
      }
    }
  }
  handled = ev[HANDLED_OBJ];
  // used to ignore synthetic mouse events
  if (handled.skip) {
    return;
  }
  // reset recognizer state
  for (var i = 0, r; i < recognizers.length; i++) {
    r = recognizers[i];
    if (gs[r.name] && !handled[r.name]) {
      if (r.flow && r.flow.start.indexOf(ev.type) > -1 && r.reset) {
        r.reset();
      }
    }
  }
  // enforce gesture recognizer order
  for (var _i = 0, _r; _i < recognizers.length; _i++) {
    _r = recognizers[_i];
    if (gs[_r.name] && !handled[_r.name]) {
      handled[_r.name] = true;
      _r[type](ev);
    }
  }
}

function _handleTouchAction(ev) {
  var t = ev.changedTouches[0];
  var type = ev.type;
  if (type === 'touchstart') {
    POINTERSTATE.touch.x = t.clientX;
    POINTERSTATE.touch.y = t.clientY;
    POINTERSTATE.touch.scrollDecided = false;
  } else if (type === 'touchmove') {
    if (POINTERSTATE.touch.scrollDecided) {
      return;
    }
    POINTERSTATE.touch.scrollDecided = true;
    var ta = firstTouchAction(ev);
    var _prevent = false;
    var dx = Math.abs(POINTERSTATE.touch.x - t.clientX);
    var dy = Math.abs(POINTERSTATE.touch.y - t.clientY);
    if (!ev.cancelable) {
      // scrolling is happening
    } else if (ta === 'none') {
      _prevent = true;
    } else if (ta === 'pan-x') {
      _prevent = dy > dx;
    } else if (ta === 'pan-y') {
      _prevent = dx > dy;
    }
    if (_prevent) {
      ev.preventDefault();
    } else {
      _prevent('track');
    }
  }
}

function addListener(node, evType, handler) {
  if (gestures[evType]) {
    _add(node, evType, handler);
    return true;
  }
  return false;
}

function removeListener(node, evType, handler) {
  if (gestures[evType]) {
    _remove(node, evType, handler);
    return true;
  }
  return false;
}

function _add(node, evType, handler) {
  var recognizer = gestures[evType];
  var deps = recognizer.deps;
  var name = recognizer.name;
  var gobj = node[GESTURE_KEY];
  if (!gobj) {
    node[GESTURE_KEY] = gobj = {};
  }
  for (var i = 0, dep, gd; i < deps.length; i++) {
    dep = deps[i];
    // don't add mouse handlers on iOS because they cause gray selection overlays
    if (IS_TOUCH_ONLY && MOUSE_EVENTS.indexOf(dep) > -1 && dep !== 'click') {
      continue;
    }
    gd = gobj[dep];
    if (!gd) {
      gobj[dep] = gd = { _count: 0 };
    }
    if (gd._count === 0) {
      node.addEventListener(dep, _handleNative);
    }
    gd[name] = (gd[name] || 0) + 1;
    gd._count = (gd._count || 0) + 1;
  }
  node.addEventListener(evType, handler);
  if (recognizer.touchAction) {
    setTouchAction(node, recognizer.touchAction);
  }
}

function _remove(node, evType, handler) {
  var recognizer = gestures[evType];
  var deps = recognizer.deps;
  var name = recognizer.name;
  var gobj = node[GESTURE_KEY];
  if (gobj) {
    for (var i = 0, dep, gd; i < deps.length; i++) {
      dep = deps[i];
      gd = gobj[dep];
      if (gd && gd[name]) {
        gd[name] = (gd[name] || 1) - 1;
        gd._count = (gd._count || 1) - 1;
        if (gd._count === 0) {
          node.removeEventListener(dep, _handleNative);
        }
      }
    }
  }
  node.removeEventListener(evType, handler);
}

function register(recog) {
  recognizers.push(recog);
  for (var i = 0; i < recog.emits.length; i++) {
    gestures[recog.emits[i]] = recog;
  }
}

function _findRecognizerByEvent(evName) {
  for (var i = 0, r; i < recognizers.length; i++) {
    r = recognizers[i];
    for (var j = 0, n; j < r.emits.length; j++) {
      n = r.emits[j];
      if (n === evName) {
        return r;
      }
    }
  }
  return null;
}

function setTouchAction(node, value) {
  if (HAS_NATIVE_TA) {
    node.style.touchAction = value;
  }
  node[TOUCH_ACTION] = value;
}

function _fire2(target, type, detail) {
  var ev = new Event(type, { bubbles: true, cancelable: true, composed: true });
  ev.detail = detail;
  target.dispatchEvent(ev);
  // forward `preventDefault` in a clean way
  if (ev.defaultPrevented) {
    var preventer = detail.preventer || detail.sourceEvent;
    if (preventer && preventer.preventDefault) {
      preventer.preventDefault();
    }
  }
}

exports._fire = _fire2;
function _prevent2(evName) {
  var recognizer = _findRecognizerByEvent(evName);
  if (recognizer.info) {
    recognizer.info.prevent = true;
  }
}

exports.prevent = _prevent2;
function resetMouseCanceller() {
  if (POINTERSTATE.mouse.mouseIgnoreJob) {
    POINTERSTATE.mouse.mouseIgnoreJob.flush();
  }
}

/* eslint-disable valid-jsdoc */

register({
  name: 'downup',
  deps: ['mousedown', 'touchstart', 'touchend'],
  flow: {
    start: ['mousedown', 'touchstart'],
    end: ['mouseup', 'touchend']
  },
  emits: ['down', 'up'],

  info: {
    movefn: null,
    upfn: null
  },

  /** @this {GestureRecognizer} */
  reset: function reset() {
    untrackDocument(this.info);
  },

  /**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   */
  mousedown: function mousedown(e) {
    if (!hasLeftMouseButton(e)) {
      return;
    }
    var t = _findOriginalTarget(e);
    var self = this;
    var movefn = function movefn(e) {
      if (!hasLeftMouseButton(e)) {
        self._fire('up', t, e);
        untrackDocument(self.info);
      }
    };
    var upfn = function upfn(e) {
      if (hasLeftMouseButton(e)) {
        self._fire('up', t, e);
      }
      untrackDocument(self.info);
    };
    trackDocument(this.info, movefn, upfn);
    this._fire('down', t, e);
  },
  /**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   */
  touchstart: function touchstart(e) {
    this._fire('down', _findOriginalTarget(e), e.changedTouches[0], e);
  },
  /**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   */
  touchend: function touchend(e) {
    this._fire('up', _findOriginalTarget(e), e.changedTouches[0], e);
  },
  /**
   * @param {string} type
   * @param {EventTarget} target
   * @param {Event} event
   * @param {Function} preventer
   */
  _fire: function _fire(type, target, event, preventer) {
    _fire2(target, type, {
      x: event.clientX,
      y: event.clientY,
      sourceEvent: event,
      preventer: preventer,
      prevent: function prevent(e) {
        return _prevent2(e);
      }
    });
  }
});

register({
  name: 'track',
  touchAction: 'none',
  deps: ['mousedown', 'touchstart', 'touchmove', 'touchend'],
  flow: {
    start: ['mousedown', 'touchstart'],
    end: ['mouseup', 'touchend']
  },
  emits: ['track'],

  info: {
    x: 0,
    y: 0,
    state: 'start',
    started: false,
    moves: [],
    /** @this {GestureRecognizer} */
    addMove: function addMove(move) {
      if (this.moves.length > TRACK_LENGTH) {
        this.moves.shift();
      }
      this.moves.push(move);
    },
    movefn: null,
    upfn: null,
    prevent: false
  },

  /** @this {GestureRecognizer} */
  reset: function reset() {
    this.info.state = 'start';
    this.info.started = false;
    this.info.moves = [];
    this.info.x = 0;
    this.info.y = 0;
    this.info.prevent = false;
    untrackDocument(this.info);
  },

  /**
   * @this {GestureRecognizer}
   * @param {number} x
   * @param {number} y
   * @return {boolean}
   */
  hasMovedEnough: function hasMovedEnough(x, y) {
    if (this.info.prevent) {
      return false;
    }
    if (this.info.started) {
      return true;
    }
    var dx = Math.abs(this.info.x - x);
    var dy = Math.abs(this.info.y - y);
    return dx >= TRACK_DISTANCE || dy >= TRACK_DISTANCE;
  },
  /**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   */
  mousedown: function mousedown(e) {
    if (!hasLeftMouseButton(e)) {
      return;
    }
    var t = _findOriginalTarget(e);
    var self = this;
    var movefn = function movefn(e) {
      var x = e.clientX,
          y = e.clientY;
      if (self.hasMovedEnough(x, y)) {
        // first move is 'start', subsequent moves are 'move', mouseup is 'end'
        self.info.state = self.info.started ? e.type === 'mouseup' ? 'end' : 'track' : 'start';
        if (self.info.state === 'start') {
          // if and only if tracking, always prevent tap
          _prevent2('tap');
        }
        self.info.addMove({ x: x, y: y });
        if (!hasLeftMouseButton(e)) {
          // always _fire "end"
          self.info.state = 'end';
          untrackDocument(self.info);
        }
        self._fire(t, e);
        self.info.started = true;
      }
    };
    var upfn = function upfn(e) {
      if (self.info.started) {
        movefn(e);
      }

      // remove the temporary listeners
      untrackDocument(self.info);
    };
    // add temporary document listeners as mouse retargets
    trackDocument(this.info, movefn, upfn);
    this.info.x = e.clientX;
    this.info.y = e.clientY;
  },
  /**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   */
  touchstart: function touchstart(e) {
    var ct = e.changedTouches[0];
    this.info.x = ct.clientX;
    this.info.y = ct.clientY;
  },
  /**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   */
  touchmove: function touchmove(e) {
    var t = _findOriginalTarget(e);
    var ct = e.changedTouches[0];
    var x = ct.clientX,
        y = ct.clientY;
    if (this.hasMovedEnough(x, y)) {
      if (this.info.state === 'start') {
        // if and only if tracking, always prevent tap
        _prevent2('tap');
      }
      this.info.addMove({ x: x, y: y });
      this._fire(t, ct);
      this.info.state = 'track';
      this.info.started = true;
    }
  },
  /**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   */
  touchend: function touchend(e) {
    var t = _findOriginalTarget(e);
    var ct = e.changedTouches[0];
    // only trackend if track was started and not aborted
    if (this.info.started) {
      // reset started state on up
      this.info.state = 'end';
      this.info.addMove({ x: ct.clientX, y: ct.clientY });
      this._fire(t, ct, e);
    }
  },

  /**
   * @this {GestureRecognizer}
   * @param {EventTarget} target
   * @param {Touch} touch
   */
  _fire: function _fire(target, touch) {
    var secondlast = this.info.moves[this.info.moves.length - 2];
    var lastmove = this.info.moves[this.info.moves.length - 1];
    var dx = lastmove.x - this.info.x;
    var dy = lastmove.y - this.info.y;
    var ddx = void 0,
        ddy = 0;
    if (secondlast) {
      ddx = lastmove.x - secondlast.x;
      ddy = lastmove.y - secondlast.y;
    }
    _fire2(target, 'track', {
      state: this.info.state,
      x: touch.clientX,
      y: touch.clientY,
      dx: dx,
      dy: dy,
      ddx: ddx,
      ddy: ddy,
      sourceEvent: touch,
      hover: function hover() {
        return deepTargetFind(touch.clientX, touch.clientY);
      }
    });
  }

});

register({
  name: 'tap',
  deps: ['mousedown', 'click', 'touchstart', 'touchend'],
  flow: {
    start: ['mousedown', 'touchstart'],
    end: ['click', 'touchend']
  },
  emits: ['tap'],
  info: {
    x: NaN,
    y: NaN,
    prevent: false
  },
  /** @this {GestureRecognizer} */
  reset: function reset() {
    this.info.x = NaN;
    this.info.y = NaN;
    this.info.prevent = false;
  },
  /** @this {GestureRecognizer} */
  save: function save(e) {
    this.info.x = e.clientX;
    this.info.y = e.clientY;
  },
  /**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   */
  mousedown: function mousedown(e) {
    if (hasLeftMouseButton(e)) {
      this.save(e);
    }
  },
  /**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   */
  click: function click(e) {
    if (hasLeftMouseButton(e)) {
      this.forward(e);
    }
  },
  /**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   */
  touchstart: function touchstart(e) {
    this.save(e.changedTouches[0], e);
  },
  /**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   */
  touchend: function touchend(e) {
    this.forward(e.changedTouches[0], e);
  },
  /**
   * @this {GestureRecognizer}
   * @param {Event | Touch} e
   * @param {Event=} preventer
   */
  forward: function forward(e, preventer) {
    var dx = Math.abs(e.clientX - this.info.x);
    var dy = Math.abs(e.clientY - this.info.y);
    // find original target from `preventer` for TouchEvents, or `e` for MouseEvents
    var t = _findOriginalTarget(preventer || e);
    // dx,dy can be NaN if `click` has been simulated and there was no `down` for `start`
    if (isNaN(dx) || isNaN(dy) || dx <= TAP_DISTANCE && dy <= TAP_DISTANCE || isSyntheticClick(e)) {
      // prevent taps from being generated if an event has canceled them
      if (!this.info.prevent) {
        _fire2(t, 'tap', {
          x: e.clientX,
          y: e.clientY,
          sourceEvent: e,
          preventer: preventer
        });
      }
    }
  }
});

var findOriginalTarget = exports.findOriginalTarget = _findOriginalTarget;
var add = exports.add = addListener;
var remove = exports.remove = removeListener;

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.register("<dom-module id=login-page> <template> <button type=button on-tap=login>Login</button> </template> </dom-module>");

/***/ })

},[62]);
//# sourceMappingURL=login-page.js.map