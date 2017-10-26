webpackJsonp([0,16],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReduxMixin = exports.store = exports.reducers = undefined;

var _redux = __webpack_require__(8);

var _polymerRedux = __webpack_require__(53);

var _polymerRedux2 = _interopRequireDefault(_polymerRedux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = {};
var initial = {};
var store = (0, _redux.createStore)(function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  var action = arguments[1];
  return state;
});
var ReduxMixin = (0, _polymerRedux2.default)(store);

exports.reducers = reducers;
exports.store = store;
exports.ReduxMixin = ReduxMixin;

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

var _createStore = __webpack_require__(16);

var _createStore2 = _interopRequireDefault(_createStore);

var _combineReducers = __webpack_require__(50);

var _combineReducers2 = _interopRequireDefault(_combineReducers);

var _bindActionCreators = __webpack_require__(51);

var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

var _applyMiddleware = __webpack_require__(52);

var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

var _compose = __webpack_require__(20);

var _compose2 = _interopRequireDefault(_compose);

var _warning = __webpack_require__(19);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  (0, _warning2.default)('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}

exports.createStore = _createStore2.default;
exports.combineReducers = _combineReducers2.default;
exports.bindActionCreators = _bindActionCreators2.default;
exports.applyMiddleware = _applyMiddleware2.default;
exports.compose = _compose2.default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polymerElement = __webpack_require__(2);

var _window = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MiddlewareAll = function (_Element) {
  _inherits(MiddlewareAll, _Element);

  function MiddlewareAll() {
    _classCallCheck(this, MiddlewareAll);

    return _possibleConstructorReturn(this, (MiddlewareAll.__proto__ || Object.getPrototypeOf(MiddlewareAll)).apply(this, arguments));
  }

  _createClass(MiddlewareAll, [{
    key: 'middleware',
    value: function middleware() {
      return true;
    }
  }], [{
    key: 'is',
    get: function get() {
      return 'middleware-all';
    }
  }]);

  return MiddlewareAll;
}(_polymerElement.Element);

_window.customElements.define(MiddlewareAll.is, MiddlewareAll);

/***/ }),
/* 12 */
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
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionTypes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = createStore;

var _isPlainObject = __webpack_require__(17);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _symbolObservable = __webpack_require__(46);

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = exports.ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!(0, _isPlainObject2.default)(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[_symbolObservable2.default] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[_symbolObservable2.default] = observable, _ref2;
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = __webpack_require__(38);

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _getPrototype = __webpack_require__(43);

var _getPrototype2 = _interopRequireDefault(_getPrototype);

var _isObjectLike = __webpack_require__(45);

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!(0, _isObjectLike2.default)(value) || (0, _baseGetTag2.default)(value) != objectTag) {
    return false;
  }
  var proto = (0, _getPrototype2.default)(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

exports.default = isPlainObject;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _root = __webpack_require__(39);

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var _Symbol = _root2.default.Symbol;

exports.default = _Symbol;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROUTER_ACTION = undefined;

var _stateManager = __webpack_require__(5);

var _redux = __webpack_require__(8);

var ROUTER_ACTION = {
  PARAMS: 'ROUTER_UPDATE_PARAMS',
  ROUTE: 'ROUTER_UPDATE_ROUTE'
};

_stateManager.reducers.router = function () {
  var router = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case ROUTER_ACTION.PARAMS:
      return Object.assign({}, router, {
        params: action.params
      });
    case ROUTER_ACTION.ROUTE:
      return Object.assign({}, router, {
        route: action.route
      });
    default:
      return router;
  }
};

_stateManager.store.replaceReducer((0, _redux.combineReducers)(_stateManager.reducers));

exports.ROUTER_ACTION = ROUTER_ACTION;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp;
module.exports.parse = parse;
module.exports.compile = compile;
module.exports.tokensToFunction = tokensToFunction;
module.exports.tokensToRegExp = tokensToRegExp;

/**
 * Default configs.
 */
var DEFAULT_DELIMITER = '/';
var DEFAULT_DELIMITERS = './';

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?"]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined]
'(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || DEFAULT_DELIMITER;
  var delimiters = options && options.delimiters || DEFAULT_DELIMITERS;
  var pathEscaped = false;
  var res;

  while ((res = PATH_REGEXP.exec(str)) !== null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      pathEscaped = true;
      continue;
    }

    var prev = '';
    var next = str[index];
    var name = res[2];
    var capture = res[3];
    var group = res[4];
    var modifier = res[5];

    if (!pathEscaped && path.length) {
      var k = path.length - 1;

      if (delimiters.indexOf(path[k]) > -1) {
        prev = path[k];
        path = path.slice(0, k);
      }
    }

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
      pathEscaped = false;
    }

    var partial = prev !== '' && next !== undefined && next !== prev;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = prev || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prev,
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      pattern: pattern ? escapeGroup(pattern) : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Push any remaining characters.
  if (path || index < str.length) {
    tokens.push(path + str.substr(index));
  }

  return tokens;
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options));
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (_typeof(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (data, options) {
    var path = '';
    var encode = options && options.encode || encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      var value = data ? data[token.name] : undefined;
      var segment;

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but got array');
        }

        if (value.length === 0) {
          if (token.optional) continue;

          throw new TypeError('Expected "' + token.name + '" to not be empty');
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        segment = encode(String(value));

        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
        }

        path += token.prefix + segment;
        continue;
      }

      if (token.optional) {
        // Prepend partial segment prefixes.
        if (token.partial) path += token.prefix;

        continue;
      }

      throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? 'an array' : 'a string'));
    }

    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {Array=}  keys
 * @return {!RegExp}
 */
function regexpToRegexp(path, keys) {
  if (!keys) return path;

  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        pattern: null
      });
    }
  }

  return path;
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function arrayToRegexp(path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  return new RegExp('(?:' + parts.join('|') + ')', flags(options));
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}  tokens
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function tokensToRegExp(tokens, keys, options) {
  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER);
  var delimiters = options.delimiters || DEFAULT_DELIMITERS;
  var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|');
  var route = '';
  var isEndDelimited = false;

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
      isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1;
    } else {
      var prefix = escapeString(token.prefix);
      var capture = token.repeat ? '(?:' + token.pattern + ')(?:' + prefix + '(?:' + token.pattern + '))*' : token.pattern;

      if (keys) keys.push(token);

      if (token.optional) {
        if (token.partial) {
          route += prefix + '(' + capture + ')?';
        } else {
          route += '(?:' + prefix + '(' + capture + '))?';
        }
      } else {
        route += prefix + '(' + capture + ')';
      }
    }
  }

  if (end) {
    if (!strict) route += '(?:' + delimiter + ')?';

    route += endsWith === '$' ? '$' : '(?=' + endsWith + ')';
  } else {
    if (!strict) route += '(?:' + delimiter + '(?=' + endsWith + '))?';
    if (!isEndDelimited) route += '(?=' + delimiter + '|' + endsWith + ')';
  }

  return new RegExp('^' + route, flags(options));
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {Array=}                keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys);
  }

  if (Array.isArray(path)) {
    return arrayToRegexp( /** @type {!Array} */path, keys, options);
  }

  return stringToRegexp( /** @type {string} */path, keys, options);
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stateManager = __webpack_require__(5);

var _reducer = __webpack_require__(55);

var _resolveUrl = __webpack_require__(56);

var _resolveUrl2 = _interopRequireDefault(_resolveUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (superClass) {
  return function (_ReduxMixin) {
    _inherits(_class, _ReduxMixin);

    _createClass(_class, null, [{
      key: 'properties',
      get: function get() {
        return {
          // location-mixin
          path: {
            type: String,
            observer: '_pathChanged',
            statePath: 'location.path'
          },

          query: {
            type: String,
            observer: '_queryChanged',
            statePath: 'location.query'
          },

          urlSpaceRegex: {
            type: String
          },

          hash: {
            type: String,
            statePath: 'location.hash'
          },

          dwellTime: {
            type: Number
          },

          _urlSpaceRegExp: {
            type: String,
            computed: '_makeRegExp(urlSpaceRegex)'
          },

          _lastChangedAt: {
            type: String
          },

          _initialized: {
            type: Boolean
          }
        };
      }
    }]);

    function _class() {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

      _this._boundHashChanged = _this._hashChanged.bind(_this);
      _this._boundUrlChanged = _this._urlChanged.bind(_this);
      _this._boundGlobalOnClick = _this._globalOnClick.bind(_this);
      return _this;
    }

    _createClass(_class, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'disconnectedCallback', this)) {
          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'connectedCallback', this).call(this);
        }
        window.addEventListener('hashchange', this._boundHashChanged);
        window.addEventListener('location-changed', this._boundUrlChanged);
        window.addEventListener('popstate', this._boundUrlChanged);
        document.body.addEventListener('click', this._boundGlobalOnClick, true);
        this._lastChangedAt = window.performance.now() - (this.dwellTime - 200);
        this._initialized = true;

        // set initialize values
        // this.path = window.decodeURIComponent(window.location.pathname);
        // this.query = window.location.search.slice(1);
        // this.hash = window.decodeURIComponent(window.location.hash.slice(1));
        this.dwellTime = 2000;
        this._initialized = false;
        this._urlChanged();
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        if (_get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'disconnectedCallback', this)) {
          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'disconnectedCallback', this).call(this);
        }
        window.removeEventListener('hashchange', this._boundHashChanged);
        window.removeEventListener('location-changed', this._boundUrlChanged);
        window.removeEventListener('popstate', this._boundUrlChanged);
        document.body.removeEventListener('click', this._boundGlobalOnClick);
        this._initialized = false;
      }
    }, {
      key: '_pathChanged',
      value: function _pathChanged(path) {}
    }, {
      key: '_queryChanged',
      value: function _queryChanged(query) {}
    }, {
      key: '_hashChanged',
      value: function _hashChanged() {
        this.dispatch({
          type: _reducer.LOCATION_ACTION.HASH,
          path: window.decodeURIComponent(window.location.hash.substring(1))
        });
        // this.hash = window.decodeURIComponent(window.location.hash.substring(1));
      }
    }, {
      key: '_urlChanged',
      value: function _urlChanged() {
        // We want to extract all info out of the updated URL before we
        // try to write anything back into it.
        //
        // i.e. without _dontUpdateUrl we'd overwrite the new path with the old
        // one when we set this.hash. Likewise for query.
        this._dontUpdateUrl = true;
        this._hashChanged();

        this.dispatch({
          type: _reducer.LOCATION_ACTION.PATH,
          path: window.decodeURIComponent(window.location.pathname)
        });

        this.dispatch({
          type: _reducer.LOCATION_ACTION.QUERY,
          query: window.location.search.substring(1)
        });

        // this.path =
        // this.query =
        this._dontUpdateUrl = false;
        this._updateUrl();
      }
    }, {
      key: '_getUrl',
      value: function _getUrl() {
        var partiallyEncodedPath = window.encodeURI(this.path).replace(/\#/g, '%23').replace(/\?/g, '%3F'); // eslint-disable-line no-useless-escape
        var partiallyEncodedQuery = '';
        if (this.query) {
          partiallyEncodedQuery = '?' + this.query.replace(/\#/g, '%23'); // eslint-disable-line no-useless-escape
        }
        var partiallyEncodedHash = '';
        if (this.hash) {
          partiallyEncodedHash = '#' + window.encodeURI(this.hash);
        }
        return partiallyEncodedPath + partiallyEncodedQuery + partiallyEncodedHash;
      }
    }, {
      key: '_updateUrl',
      value: function _updateUrl() {
        if (this._dontUpdateUrl || !this._initialized) {
          return;
        }

        if (this.path === window.decodeURIComponent(window.location.pathname) && this.query === window.location.search.substring(1) && this.hash === window.decodeURIComponent(window.location.hash.substring(1))) {
          // Nothing to do, the current URL is a representation of our properties.
          return;
        }
        var newUrl = this._getUrl();
        // Need to use a full URL in case the containing page has a base URI.
        var fullNewUrl = (0, _resolveUrl2.default)(newUrl, window.location.protocol + '//' + window.location.host).href;
        var now = window.performance.now();
        var shouldReplace = this._lastChangedAt + this.dwellTime > now;
        this._lastChangedAt = now;
        if (shouldReplace) {
          window.history.replaceState({}, '', fullNewUrl);
        } else {
          window.history.pushState({}, '', fullNewUrl);
        }
        window.dispatchEvent(new window.CustomEvent('location-changed'));
      }

      /**
       * A necessary evil so that links work as expected. Does its best to
       * bail out early if possible.
       *
       * @param {MouseEvent} event .
       */

    }, {
      key: '_globalOnClick',
      value: function _globalOnClick(event) {
        // If another event handler has stopped this event then there's nothing
        // for us to do. This can happen e.g. when there are multiple
        // iron-location elements in a page.
        if (event.defaultPrevented) {
          return;
        }
        var href = this._getSameOriginLinkHref(event);
        if (!href) {
          return;
        }
        event.preventDefault();
        // If the navigation is to the current page we shouldn't add a history
        // entry or fire a change event.
        if (href === window.location.href) {
          return;
        }

        window.history.pushState({}, '', href);
        window.dispatchEvent(new window.CustomEvent('location-changed'));
      }

      /**
       * Returns the absolute URL of the link (if any) that this click event
       * is clicking on, if we can and should override the resulting full
       * page navigation. Returns null otherwise.
       *
       * @param {MouseEvent} event .
       * @return {string?} .
       */

    }, {
      key: '_getSameOriginLinkHref',
      value: function _getSameOriginLinkHref(event) {
        // We only care about left-clicks.
        if (event.button !== 0) {
          return null;
        }
        // We don't want modified clicks, where the intent is to open the page
        // in a new tab.
        if (event.metaKey || event.ctrlKey) {
          return null;
        }
        var eventPath = event.composedPath();
        var anchor = null;
        for (var i = 0; i < eventPath.length; i++) {
          var element = eventPath[i];
          if (element.tagName === 'A' && element.href) {
            anchor = element;
            break;
          }
        }
        // If there's no link there's nothing to do.
        if (!anchor) {
          return null;
        }
        // Target blank is a new tab, don't intercept.
        if (anchor.target === '_blank') {
          // capture link click
          if (anchor.href && window.ga) {
            window.ga('send', 'event', 'Link', 'Click', anchor.href, 1);
          }
          return null;
        }
        // If the link is for an existing parent frame, don't intercept.
        if ((anchor.target === '_top' || anchor.target === '_parent') && window.top !== window) {
          return null;
        }
        var href = anchor.href;
        // It only makes sense for us to intercept same-origin navigations.
        // pushState/replaceState don't work with cross-origin links.
        var url;
        if (document.baseURI != null) {
          url = (0, _resolveUrl2.default)(href, /** @type {string} */document.baseURI);
        } else {
          url = (0, _resolveUrl2.default)(href);
        }
        var origin;
        // IE Polyfill
        if (window.location.origin) {
          origin = window.location.origin;
        } else {
          origin = window.location.protocol + '//' + window.location.host;
        }
        var urlOrigin;
        if (url.origin) {
          urlOrigin = url.origin;
        } else {
          urlOrigin = url.protocol + '//' + url.host;
        }
        if (urlOrigin !== origin) {
          return null;
        }
        var normalizedHref = url.pathname + url.search + url.hash;
        // pathname should start with '/', but may not if `new URL` is not supported
        if (normalizedHref[0] !== '/') {
          normalizedHref = '/' + normalizedHref;
        }
        // If we've been configured not to handle this url... don't handle it!
        if (this._urlSpaceRegExp && !this._urlSpaceRegExp.test(normalizedHref)) {
          return null;
        }
        // Need to use a full URL in case the containing page has a base URI.
        var fullNormalizedHref = (0, _resolveUrl2.default)(normalizedHref, window.location.href).href;
        return fullNormalizedHref;
      }
    }, {
      key: '_makeRegExp',
      value: function _makeRegExp(urlSpaceRegex) {
        return RegExp(urlSpaceRegex);
      }
    }]);

    return _class;
  }((0, _stateManager.ReduxMixin)(superClass));
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _stateManager = __webpack_require__(5);

var _reducer = __webpack_require__(57);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (superClass) {
  return function (_ReduxMixin) {
    _inherits(_class, _ReduxMixin);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'connectedCallback', this)) {
          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'connectedCallback', this).call(this);
        }

        // initialize values
        this.paramsObject = {};
        this._dontReact = false;
      }
    }, {
      key: '_queryChanged',
      value: function _queryChanged(query) {
        this.paramsString = query;
      }
    }, {
      key: '_paramsStringChanged',
      value: function _paramsStringChanged() {
        this._dontReact = true;
        this.dispatch({
          type: _reducer.QUERYPARAMS_ACTION.UPDATE,
          params: this._decodeParams(this.paramsString)
        });

        // this.paramsObject =
        this._dontReact = false;
      }
    }, {
      key: 'paramsObjectChanged',
      value: function paramsObjectChanged() {
        if (this._dontReact) {
          return;
        }
        this.paramsString = this._encodeParams(this.paramsObject).replace(/%3F/g, '?').replace(/%2F/g, '/').replace(/'/g, '%27');
      }
    }, {
      key: '_encodeParams',
      value: function _encodeParams(params) {
        var encodedParams = [];
        for (var key in params) {
          var value = params[key];
          if (value === '') {
            encodedParams.push(encodeURIComponent(key));
          } else if (value) {
            encodedParams.push(encodeURIComponent(key) + '=' + encodeURIComponent(value.toString()));
          }
        }
        return encodedParams.join('&');
      }
    }, {
      key: '_decodeParams',
      value: function _decodeParams(paramString) {
        var params = {};
        // Work around a bug in decodeURIComponent where + is not
        // converted to spaces:
        paramString = (paramString || '').replace(/\+/g, '%20');
        var paramList = paramString.split('&');
        for (var i = 0; i < paramList.length; i++) {
          var param = paramList[i].split('=');
          if (param[0]) {
            params[decodeURIComponent(param[0])] = decodeURIComponent(param[1] || '');
          }
        }
        return params;
      }
    }], [{
      key: 'properties',
      get: function get() {
        return {
          // query params 'paramsString', 'paramsObject', '_dontReact'
          paramsString: {
            type: String,
            observer: '_paramsStringChanged'
          },

          paramsObject: {
            type: Object,
            statePath: 'query.params'
          },

          _dontReact: {
            type: Boolean
          }
        };
      }
    }]);

    return _class;
  }((0, _stateManager.ReduxMixin)(superClass));
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(32);

__webpack_require__(11);

__webpack_require__(36);

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(33);

__webpack_require__(35);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _window = __webpack_require__(0);

var _importHref = __webpack_require__(34);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LazyLoad = function (_HTMLElement) {
  _inherits(LazyLoad, _HTMLElement);

  function LazyLoad() {
    _classCallCheck(this, LazyLoad);

    return _possibleConstructorReturn(this, (LazyLoad.__proto__ || Object.getPrototypeOf(LazyLoad)).apply(this, arguments));
  }

  _createClass(LazyLoad, [{
    key: 'import',
    value: function _import() {
      var href = this.getAttribute('href');
      return href && typeof href === 'string' && href.trim() ? this.importHref(href) : Promise.reject(new Error('There\'s no href attribute present in this tag'));
    }
  }, {
    key: 'importHref',
    value: function importHref(href) {
      var type = this.getAttribute('type');
      return type === 'html' ? this.importHtml(href) : this.importJs(href);
    }
  }, {
    key: 'importHtml',
    value: function importHtml(href) {
      var promise = new Promise(function (resolve, reject) {
        (0, _importHref.importHref)(href, resolve, reject);
      });
      return promise;
    }
  }, {
    key: 'importJs',
    value: function importJs(href) {
      var promise = new Promise(function (resolve, reject) {
        var script = /** @type {HTMLLinkElement} */document.createElement('script');
        script.src = href;
        var cleanup = function cleanup() {
          script.removeEventListener('load', loadListener);
          script.removeEventListener('error', errorListener);
        };
        var loadListener = function loadListener(event) {
          cleanup();
          resolve(event);
        };
        var errorListener = function errorListener(event) {
          cleanup();
          reject(event);
        };
        script.addEventListener('load', loadListener);
        script.addEventListener('error', errorListener);
        if (script.parentNode === null) document.head.appendChild(script);
      });
      return promise;
    }
  }], [{
    key: 'is',
    get: function get() {
      return 'lazy-load';
    }
  }]);

  return LazyLoad;
}(_window.HTMLElement);

!_window.customElements.get(LazyLoad.is) ? _window.customElements.define(LazyLoad.is, LazyLoad) : console.warn(LazyLoad.is + ' is already defined');

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.importHref = undefined;

__webpack_require__(3);

// run a callback when HTMLImports are ready or immediately if
// this api is not available.
function whenImportsReady(cb) {
  if (window.HTMLImports) {
    HTMLImports.whenReady(cb);
  } else {
    cb();
  }
}

var importHref = exports.importHref = function importHref(href, onload, onerror, optAsync) {
  var link = /** @type {HTMLLinkElement} */
  document.head.querySelector('link[href="' + href + '"][import-href]');
  if (!link) {
    link = /** @type {HTMLLinkElement} */document.createElement('link');
    link.rel = 'import';
    link.href = href;
    link.setAttribute('import-href', '');
  }
  // always ensure link has `async` attribute if user specified one,
  // even if it was previously not async. This is considered less confusing.
  if (optAsync) {
    link.setAttribute('async', '');
  }
  // NOTE: the link may now be in 3 states: (1) pending insertion,
  // (2) inflight, (3) already laoded. In each case, we need to add
  // event listeners to process callbacks.
  var cleanup = function cleanup() {
    link.removeEventListener('load', loadListener);
    link.removeEventListener('error', errorListener);
  };
  var loadListener = function loadListener(event) {
    cleanup();
    // In case of a successful load, cache the load event on the link so
    // that it can be used to short-circuit this method in the future when
    // it is called with the same href param.
    link.__dynamicImportLoaded = true;
    if (onload) {
      whenImportsReady(function () {
        onload(event);
      });
    }
  };
  var errorListener = function errorListener(event) {
    cleanup();
    // In case of an error, remove the link from the document so that it
    // will be automatically created again the next time `importHref` is
    // called.
    if (link.parentNode) {
      link.parentNode.removeChild(link);
    }
    if (onerror) {
      whenImportsReady(function () {
        onerror(event);
      });
    }
  };
  link.addEventListener('load', loadListener);
  link.addEventListener('error', errorListener);
  if (link.parentNode == null) {
    document.head.appendChild(link);
    // if the link already loaded, dispatch a fake load event
    // so that listeners are called and get a proper event argument.
  } else if (link.__dynamicImportLoaded) {
    link.dispatchEvent(new Event('load'));
  }
  return link;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _window = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LazyLoader = function (_HTMLElement) {
  _inherits(LazyLoader, _HTMLElement);

  function LazyLoader() {
    _classCallCheck(this, LazyLoader);

    return _possibleConstructorReturn(this, (LazyLoader.__proto__ || Object.getPrototypeOf(LazyLoader)).apply(this, arguments));
  }

  _createClass(LazyLoader, [{
    key: 'import',
    value: function _import(name) {
      var el = this.querySelector('[module="' + name + '"]');
      return el && el.tagName.toLowerCase() === 'lazy-load' && typeof el.import === 'function' ? el.import() : Promise.reject(new Error('No element to be lazy loaded'));
    }
  }], [{
    key: 'is',
    get: function get() {
      return 'lazy-loader';
    }
  }]);

  return LazyLoader;
}(_window.HTMLElement);

!_window.customElements.get(LazyLoader.is) ? _window.customElements.define(LazyLoader.is, LazyLoader) : console.warn(LazyLoader.is + ' is already defined');

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(37);

__webpack_require__(58);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polymerElement = __webpack_require__(2);

var _debounce = __webpack_require__(12);

var _async = __webpack_require__(6);

var _stateManager = __webpack_require__(5);

var _window = __webpack_require__(0);

var _reducer = __webpack_require__(21);

var _getAnimationEvent = __webpack_require__(54);

var _getAnimationEvent2 = _interopRequireDefault(_getAnimationEvent);

var _pathToRegexp = __webpack_require__(22);

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

var _locationMixin = __webpack_require__(23);

var _locationMixin2 = _interopRequireDefault(_locationMixin);

var _queryParamsMixin = __webpack_require__(24);

var _queryParamsMixin2 = _interopRequireDefault(_queryParamsMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LittleqRouter = function (_ReduxMixin) {
  _inherits(LittleqRouter, _ReduxMixin);

  _createClass(LittleqRouter, null, [{
    key: 'is',
    get: function get() {
      return 'littleq-router';
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n    <style>\n      ::slotted(.animated) {\n        animation-duration: 0.3s;\n        animation-fill-mode: both;\n      }\n\n      ::slotted(*) > .animated {\n        animation-duration: 1s;\n        animation-fill-mode: both;\n      }\n\n      ::slotted(.fadeOut) {\n        animation-name: fadeOut;\n      }\n\n      ::slotted(*) > .fadeOut {\n        animation-name: fadeOut;\n      }\n\n      ::slotted(.fadeIn) {\n        animation-name: fadeIn;\n      }\n\n      ::slotted(*) > .fadeIn {\n        animation-name: fadeIn;\n      }\n    </style>\n    <main role="main">\n      <slot name="page"></slot>\n    </main>\n    ';
    }
  }, {
    key: 'properties',
    get: function get() {
      return {
        defaultRedirect: {
          type: String
        },

        params: {
          type: Object,
          statePath: 'router.params'
        },

        currentRoute: {
          type: String,
          statePath: 'router.route'
        }
      };
    }
  }]);

  function LittleqRouter() {
    _classCallCheck(this, LittleqRouter);

    var _this = _possibleConstructorReturn(this, (LittleqRouter.__proto__ || Object.getPrototypeOf(LittleqRouter)).call(this));

    _this._setKeyframeStyles();
    _this._getLazyLoader();
    return _this;
  }

  _createClass(LittleqRouter, [{
    key: '_setKeyframeStyles',
    value: function _setKeyframeStyles() {
      var style = document.createElement('style');
      style.id = 'littlq-router-animation-styles';
      style.innerHTML = '\n      @keyframes fadeOut {\n        from {\n          opacity: 1;\n        }\n\n        to {\n          opacity: 0;\n        }\n      }\n\n      @keyframes fadeIn {\n        from {\n          opacity: 0;\n        }\n\n        to {\n          opacity: 1;\n        }\n      }\n    ';
      if (!document.querySelector('#littlq-router-animation-styles')) document.head.appendChild(style);
    }
  }, {
    key: '_getLazyLoader',
    value: function _getLazyLoader() {
      var lazy = this.getAttribute('lazy-loader') || 'lazy-loader';
      this._lazyLoader = document.querySelector(lazy);
      if (!this._lazyLoader) console.warn('will not be able to lazy load components without the lazy-loader tag. Install lazy-loader tag');
    }

    /**
     * Check path and route if it matches. Because the matching happens in the routes
     * themselves, it will wait for 200 milliseconds before showing the default, which
     * is the not-found route.
     *
     * @param {any} path
     * @param {any} route
     * @memberof LittleqRouter
     */

  }, {
    key: '_checkPathRouteIfExists',
    value: function _checkPathRouteIfExists(path, route) {
      var _this2 = this;

      this._debouncer = _debounce.Debouncer.debounce(this._debouncer, _async.timeOut.after(200), function () {
        var keys = [];
        var re = (0, _pathToRegexp2.default)(route || '', keys);
        var exec = re.exec(path);
        if (!exec) {
          _this2.dispatch({
            type: _reducer.ROUTER_ACTION.ROUTE,
            route: 'not-found'
          });
        }
      });
    }
  }, {
    key: '_removePageAfterTransition',
    value: function _removePageAfterTransition(oldPage, route, transition, fn) {
      if (this._timeOut) {
        clearTimeout(this._timeOut);
      }

      if (transition && fn) {
        oldPage.removeEventListener(transition, fn);
      }

      if (this.contains(oldPage)) {
        this.removeChild(oldPage);
      }

      this._checkMiddlewares(route);
    }
  }, {
    key: '_removePageListenerFallback',
    value: function _removePageListenerFallback(oldPage, route, transition) {
      var _this3 = this;

      this._timeOut = setTimeout(function () {
        _this3._removePageAfterTransition(oldPage, route, transition);
      }, 550);
      var fn = function fn() {
        _this3._removePageAfterTransition(oldPage, route, transition, fn);
      };
      oldPage.addEventListener(transition, fn);
    }
  }, {
    key: '_removePage',
    value: function _removePage(oldPage, route) {
      var animation = (0, _getAnimationEvent2.default)(oldPage);
      oldPage.classList.remove('fadeIn');
      !animation ? this._removePageAfterTransition(oldPage, route) : this._removePageListenerFallback(oldPage, route, animation);
      oldPage.classList.add('animated');
      oldPage.classList.add('fadeOut');
    }
  }, {
    key: '_getMiddlewares',
    value: function _getMiddlewares(parent) {
      var middlewares = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      for (var i = 0; i < parent.children.length; i++) {
        var child = parent.children[i];
        this._addMiddleware(!_window.customElements.get(child.tagName.toLowerCase()) ? this._lazyLoadMiddleware(child) : this._getMiddleware(child), middlewares);
      }
      return parent.tagName.toLowerCase() === 'littleq-router' || !parent.parentNode ? middlewares : this._getMiddlewares(parent.parentNode, middlewares);
    }
  }, {
    key: '_addMiddleware',
    value: function _addMiddleware(middleware, middlewares) {
      if (middleware !== undefined) {
        middleware instanceof Promise ? middlewares.push(middleware) : middlewares.push(Promise.resolve(middleware));
      }
    }
  }, {
    key: '_getMiddleware',
    value: function _getMiddleware(middleware) {
      if (typeof middleware.middleware === 'function' && middleware.tagName.toLowerCase() !== 'littleq-route') return middleware.middleware();
    }
  }, {
    key: '_lazyLoadMiddleware',
    value: function _lazyLoadMiddleware(middleware) {
      var _this4 = this;

      return this._lazyLoader.import(middleware.tagName.toLowerCase()).then(function () {
        return _this4._getMiddleware(middleware);
      }).catch(function (e) {
        if (_this4.currentRoute !== 'not-found') {
          _this4.dispatch({
            type: _reducer.ROUTER_ACTION.ROUTE,
            route: 'not-found'
          });
        }
      });
    }
  }, {
    key: '_processMiddlewares',
    value: function _processMiddlewares(page, redirect, middlewares) {
      middlewares.reduce(function (middleware, prev) {
        return prev && middleware && typeof middleware === 'boolean';
      }) ? this._loadPage(page) : this._loadRedirect(redirect);
    }
  }, {
    key: '_loadRedirect',
    value: function _loadRedirect(redirect) {
      redirect ? this._loadPage(redirect) : this._loadDefaultRedirect();
    }
  }, {
    key: '_loadDefaultRedirect',
    value: function _loadDefaultRedirect() {
      var redirect = this.defaultRedirect ? document.createElement(this.defaultRedirect) : null;
      redirect ? this._loadPage(redirect) : this.dispatch({
        type: _reducer.ROUTER_ACTION.ROUTE,
        route: 'not-found'
      });
    }
  }, {
    key: '_checkMiddlewares',
    value: function _checkMiddlewares(route) {
      if (this.querySelector('[slot="page"]')) this.removeChild(this.querySelector('[slot="page"]'));
      var middlewares = this._getMiddlewares(route);
      var page = document.createElement(route.page);
      var redirect = route.redirect ? document.createElement(route.redirect) : null;
      middlewares.length ? Promise.all(middlewares).then(this._processMiddlewares.bind(this, page, redirect)) : this._loadPage(page);
    }
  }, {
    key: '_loadPage',
    value: function _loadPage(page) {
      !_window.customElements.get(page.tagName.toLowerCase()) ? this._lazyLoadPage(page) : this._showPage(page);
    }
  }, {
    key: '_lazyLoadPage',
    value: function _lazyLoadPage(page) {
      var _this5 = this;

      this._lazyLoader.import(page.tagName.toLowerCase()).then(function () {
        _this5._showPage(page);
      }).catch(function (e) {
        if (_this5.currentRoute !== 'not-found') {
          _this5.dispatch({
            type: _reducer.ROUTER_ACTION.ROUTE,
            route: 'not-found'
          });
        }
      });
    }
  }, {
    key: '_showPage',
    value: function _showPage(page) {
      page.setAttribute('slot', 'page');
      page.classList.add('animated');
      page.classList.add('fadeIn');
      this.appendChild(page);
    }
  }], [{
    key: 'observers',
    get: function get() {
      return ['_checkPathRouteIfExists(path, currentRoute)'];
    }
  }]);

  return LittleqRouter;
}((0, _stateManager.ReduxMixin)((0, _queryParamsMixin2.default)((0, _locationMixin2.default)(_polymerElement.Element))));

!_window.customElements.get(LittleqRouter.is) ? _window.customElements.define(LittleqRouter.is, LittleqRouter) : console.warn(LittleqRouter.is + ' is already defined');

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(18);

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _getRawTag = __webpack_require__(41);

var _getRawTag2 = _interopRequireDefault(_getRawTag);

var _objectToString = __webpack_require__(42);

var _objectToString2 = _interopRequireDefault(_objectToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol3.default ? _Symbol3.default.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? (0, _getRawTag2.default)(value) : (0, _objectToString2.default)(value);
}

exports.default = baseGetTag;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _freeGlobal = __webpack_require__(40);

var _freeGlobal2 = _interopRequireDefault(_freeGlobal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal2.default || freeSelf || Function('return this')();

exports.default = root;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

exports.default = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(18);

var _Symbol3 = _interopRequireDefault(_Symbol2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol3.default ? _Symbol3.default.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

exports.default = getRawTag;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

exports.default = objectToString;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _overArg = __webpack_require__(44);

var _overArg2 = _interopRequireDefault(_overArg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var getPrototype = (0, _overArg2.default)(Object.getPrototypeOf, Object);

exports.default = getPrototype;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

exports.default = overArg;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

exports.default = isObjectLike;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(47);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(49);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var root; /* global window */

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10), __webpack_require__(48)(module)))

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = combineReducers;

var _createStore = __webpack_require__(16);

var _isPlainObject = __webpack_require__(17);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _warning = __webpack_require__(19);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!(0, _isPlainObject2.default)(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        (0, _warning2.default)('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (process.env.NODE_ENV !== 'production') {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        (0, _warning2.default)(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyMiddleware;

var _compose = __webpack_require__(20);

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = _compose2.default.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = PolymerRedux;

var _path = __webpack_require__(14);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Polymer Redux
 *
 * Creates a Class mixin for decorating Elements with a given Redux store.
 *
 * @polymerMixin
 *
 * @param {Object} store Redux store.
 * @return {Function} Class mixin.
 */
function PolymerRedux(store) {
  if (!store) {
    throw new TypeError('PolymerRedux: expecting a redux store.');
  } else if (!['getState', 'dispatch', 'subscribe'].every(function (k) {
    return typeof store[k] === 'function';
  })) {
    throw new TypeError('PolymerRedux: invalid store object.');
  }

  var subscribers = new Map();

  /**
   * Binds element's properties to state changes from the Redux store.
   *
   * @example
   *     const update = bind(el, props) // set bindings
   *     update(state) // manual update
   *
   * @private
   * @param {HTMLElement} element
   * @param {Object} properties
   * @return {Function} Update function.
   */
  var bind = function bind(element, properties) {
    var bindings = Object.keys(properties).filter(function (name) {
      var property = properties[name];
      if (Object.prototype.hasOwnProperty.call(property, 'statePath')) {
        if (!property.readOnly && property.notify) {
          console.warn('PolymerRedux: <' + element.constructor.is + '>.' + name + ' has "notify" enabled, two-way bindings goes against Redux\'s paradigm');
        }
        return true;
      }
      return false;
    });

    /**
     * Updates an element's properties with the given state.
     *
     * @private
     * @param {Object} state
     */
    var update = function update(state) {
      var propertiesChanged = false;
      bindings.forEach(function (name) {
        // Perhaps .reduce() to a boolean?
        var statePath = properties[name].statePath;

        var value = typeof statePath === 'function' ? statePath.call(element, state) : (0, _path.get)(state, statePath);

        var changed = element._setPendingPropertyOrPath(name, value, true);
        propertiesChanged = propertiesChanged || changed;
      });
      if (propertiesChanged) {
        element._invalidateProperties();
      }
    };

    // Redux listener
    var unsubscribe = store.subscribe(function () {
      var detail = store.getState();
      update(detail);

      element.dispatchEvent(new window.CustomEvent('state-changed', { detail: detail }));
    });

    subscribers.set(element, unsubscribe);

    return update(store.getState());
  };

  /**
   * Unbinds an element from state changes in the Redux store.
   *
   * @private
   * @param {HTMLElement} element
   */
  var unbind = function unbind(element) {
    var off = subscribers.get(element);
    if (typeof off === 'function') {
      off();
    }
  };

  /**
   * Merges a property's object value using the defaults way.
   *
   * @private
   * @param {Object} what Initial prototype
   * @param {String} which Property to collect.
   * @return {Object} the collected values
   */
  var collect = function collect(what, which) {
    var res = {};
    while (what) {
      res = Object.assign({}, what[which], res); // Respect prototype priority
      what = Object.getPrototypeOf(what);
    }
    return res;
  };

  /**
   * ReduxMixin
   *
   * @example
   *     const ReduxMixin = PolymerRedux(store)
   *     class Foo extends ReduxMixin(Polymer.Element) { }
   *
   * @polymerMixinClass
   *
   * @param {Polymer.Element} parent The polymer parent element.
   * @return {Function} PolymerRedux mixed class.
   */
  return function (parent) {
    return function (_parent) {
      _inherits(ReduxMixin, _parent);

      function ReduxMixin() {
        _classCallCheck(this, ReduxMixin);

        // Collect the action creators first as property changes trigger
        // dispatches from observers, see #65, #66, #67
        var _this = _possibleConstructorReturn(this, (ReduxMixin.__proto__ || Object.getPrototypeOf(ReduxMixin)).call(this));

        var actions = collect(_this.constructor, 'actions');
        Object.defineProperty(_this, '_reduxActions', {
          configurable: true,
          value: actions
        });
        return _this;
      }

      _createClass(ReduxMixin, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
          _get(ReduxMixin.prototype.__proto__ || Object.getPrototypeOf(ReduxMixin.prototype), 'connectedCallback', this).call(this);
          var properties = collect(this.constructor, 'properties');
          bind(this, properties);
        }
      }, {
        key: 'disconnectedCallback',
        value: function disconnectedCallback() {
          _get(ReduxMixin.prototype.__proto__ || Object.getPrototypeOf(ReduxMixin.prototype), 'disconnectedCallback', this).call(this);
          unbind(this);
        }

        /**
         * Dispatches an action to the Redux store.
         *
         * @example
         *     element.dispatch({ type: 'ACTION' })
         *
         * @example
         *     element.dispatch('actionCreator', 'foo', 'bar')
         *
         * @example
         *     element.dispatch((dispatch) => {
         *         dispatch({ type: 'MIDDLEWARE'})
         *     })
         *
         * @param  {...*} args
         * @return {Object} The action.
         */

      }, {
        key: 'dispatch',
        value: function dispatch() {
          var _this2 = this;

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var actions = this._reduxActions;

          // Action creator
          var action = args[0];

          if (typeof action === 'string') {
            if (typeof actions[action] !== 'function') {
              throw new TypeError('PolymerRedux: <' + this.constructor.is + '> invalid action creator "' + action + '"');
            }
            action = actions[action].apply(actions, _toConsumableArray(args.slice(1)));
          }

          // Proxy async dispatch
          if (typeof action === 'function') {
            var originalAction = action;
            action = function action() {
              for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              // Replace redux dispatch
              args.splice(0, 1, function () {
                return _this2.dispatch.apply(_this2, arguments);
              });
              return originalAction.apply(undefined, args);
            };

            // Copy props from the original action to the proxy.
            // see https://github.com/tur-nr/polymer-redux/issues/98
            Object.keys(originalAction).forEach(function (prop) {
              action[prop] = originalAction[prop];
            });
          }

          return store.dispatch(action);
        }

        /**
         * Gets the current state in the Redux store.
         *
         * @return {*}
         */

      }, {
        key: 'getState',
        value: function getState() {
          return store.getState();
        }
      }]);

      return ReduxMixin;
    }(parent);
  };
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/* From Modernizr */
exports.default = function (el) {
  var animations = {
    'animation': 'animationend',
    'OAnimation': 'oAnimationEnd',
    'MozAnimation': 'animationend',
    'WebkitAnimation': 'webkitAnimationEnd'
  };

  for (var t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCATION_ACTION = undefined;

var _stateManager = __webpack_require__(5);

var _redux = __webpack_require__(8);

var LOCATION_ACTION = {
  PATH: 'LOCATION_UPDATE_PATH',
  QUERY: 'LOCATION_UPDATE_QUERY',
  HASH: 'LOCATION_UPDATE_HASH'
};

_stateManager.reducers.location = function () {
  var location = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case LOCATION_ACTION.PATH:
      return Object.assign({}, location, {
        path: action.path
      });
    case LOCATION_ACTION.QUERY:
      return Object.assign({}, location, {
        query: action.query
      });
    case LOCATION_ACTION.HASH:
      return Object.assign({}, location, {
        hash: action.query
      });
    default:
      return location;
  }
};

_stateManager.store.replaceReducer((0, _redux.combineReducers)(_stateManager.reducers));

exports.LOCATION_ACTION = LOCATION_ACTION;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _window = __webpack_require__(0);

var workingURL;
var urlDoc, urlBase, anchor;

/**
 * @param {string} path
 * @param {string=} base
 * @return {!URL|!HTMLAnchorElement}
 */

exports.default = function (path, base) {
  if (workingURL === undefined) {
    workingURL = false;
    try {
      var u = new _window.URL('b', 'http://a');
      u.pathname = 'c%20d';
      workingURL = u.href === 'http://a/c%20d';
      workingURL = workingURL && new _window.URL('http://www.google.com/?foo bar').href === 'http://www.google.com/?foo%20bar';
    } catch (e) {}
  }
  if (workingURL) {
    return new _window.URL(path, base);
  }
  if (!urlDoc) {
    urlDoc = document.implementation.createHTMLDocument('url');
    urlBase = urlDoc.createElement('base');
    urlDoc.head.appendChild(urlBase);
    anchor = /** @type {HTMLAnchorElement} */urlDoc.createElement('a');
  }
  urlBase.href = base;
  anchor.href = path.replace(/ /g, '%20');
  return anchor;
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QUERYPARAMS_ACTION = undefined;

var _stateManager = __webpack_require__(5);

var _redux = __webpack_require__(8);

var QUERYPARAMS_ACTION = {
  UPDATE: 'QUERYPARAMS_UPDATE'
};

_stateManager.reducers.query = function () {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case QUERYPARAMS_ACTION.UPDATE:
      return Object.assign({}, query, {
        params: action.params
      });
    default:
      return query;
  }
};

_stateManager.store.replaceReducer((0, _redux.combineReducers)(_stateManager.reducers));

exports.QUERYPARAMS_ACTION = QUERYPARAMS_ACTION;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polymerElement = __webpack_require__(2);

var _stateManager = __webpack_require__(5);

var _locationMixin = __webpack_require__(23);

var _locationMixin2 = _interopRequireDefault(_locationMixin);

var _queryParamsMixin = __webpack_require__(24);

var _queryParamsMixin2 = _interopRequireDefault(_queryParamsMixin);

var _pathToRegexp = __webpack_require__(22);

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

var _window = __webpack_require__(0);

var _reducer = __webpack_require__(21);

var _getRoutes = __webpack_require__(59);

var _getRoutes2 = _interopRequireDefault(_getRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LittleqRoute = function (_ReduxMixin) {
  _inherits(LittleqRoute, _ReduxMixin);

  function LittleqRoute() {
    _classCallCheck(this, LittleqRoute);

    return _possibleConstructorReturn(this, (LittleqRoute.__proto__ || Object.getPrototypeOf(LittleqRoute)).apply(this, arguments));
  }

  _createClass(LittleqRoute, [{
    key: '_processPage',
    value: function _processPage() {
      var router = this;
      do {
        router = router.parentNode;
      } while (router.tagName.toLowerCase() !== 'littleq-router');
      var page = router.querySelector('[slot="page"]');
      page ? router._removePage(page, this) : router._checkMiddlewares(this);
    }
  }, {
    key: '_checkRoute',
    value: function _checkRoute(route) {
      if (route === (0, _getRoutes2.default)(this)) this._processPage();
    }
  }, {
    key: '_routeMatches',
    value: function _routeMatches(route, exec, keys) {
      var params = {};
      keys.forEach(function (key, index) {
        var name = key.name;

        params[name] = exec[index + 1] || null;
      });

      this.dispatch({
        type: _reducer.ROUTER_ACTION.PARAMS,
        params: params
      });

      this.dispatch({
        type: _reducer.ROUTER_ACTION.ROUTE,
        route: route
      });
    }
  }, {
    key: '_checkIfRouteMatches',
    value: function _checkIfRouteMatches(path) {
      var route = (0, _getRoutes2.default)(this);
      var keys = [];
      var re = (0, _pathToRegexp2.default)(route, keys);
      var exec = re.exec(path);
      if (exec) this._routeMatches(route, exec, keys);
    }
  }, {
    key: '_pathChanged',
    value: function _pathChanged(path) {
      path = path.replace(/index\.html$/, '');
      if (this.route) this._checkIfRouteMatches(path);
    }
  }], [{
    key: 'is',
    get: function get() {
      return 'littleq-route';
    }
  }, {
    key: 'properties',
    get: function get() {
      return {
        page: {
          type: String
        },

        redirect: {
          type: String
        },

        route: {
          type: String,
          value: 'not-found'
        },

        params: {
          type: Object,
          statePath: 'router.params'
        },

        currentRoute: {
          type: String,
          observer: '_checkRoute',
          statePath: 'router.route'
        }
      };
    }
  }]);

  return LittleqRoute;
}((0, _stateManager.ReduxMixin)((0, _queryParamsMixin2.default)((0, _locationMixin2.default)(_polymerElement.Element))));

!_window.customElements.get(LittleqRoute.is) ? _window.customElements.define(LittleqRoute.is, LittleqRoute) : console.warn(LittleqRoute.is + ' is already defined');

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getRoutes = function getRoutes(el) {
  var route = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  route = el.route + route;
  return el.parentNode && el.parentNode.tagName.toLowerCase() === 'littleq-route' ? getRoutes(el.parentNode, route) : route;
};

exports.default = getRoutes;

/***/ })
],[25]);
//# sourceMappingURL=main.js.map