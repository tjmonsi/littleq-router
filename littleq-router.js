import { Element } from '@polymer/polymer/polymer-element';
import { Debouncer } from '@polymer/polymer/lib/utils/debounce';
import { timeOut } from '@polymer/polymer/lib/utils/async';
import { ReduxMixin } from '@littleq/state-manager';
import { customElements, alert } from 'global/window';
import { ROUTER_ACTION } from './lib/reducer';
import getAnimationEvent from './lib/get-animation-event';
import pathToRegexp from 'path-to-regexp';
import LocationMixin from '@littleq/location-mixin';
import QueryParamsMixin from '@littleq/query-params-mixin';

class LittleqRouter extends ReduxMixin(QueryParamsMixin(LocationMixin(Element))) {
  static get is () { return 'littleq-router'; }

  static get template () {
    return `
    <style>
      ::slotted(.animated) {
        animation-duration: 0.3s;
        animation-fill-mode: both;
      }

      ::slotted(*) > .animated {
        animation-duration: 1s;
        animation-fill-mode: both;
      }

      ::slotted(.fadeOut) {
        animation-name: fadeOut;
      }

      ::slotted(*) > .fadeOut {
        animation-name: fadeOut;
      }

      ::slotted(.fadeIn) {
        animation-name: fadeIn;
      }

      ::slotted(*) > .fadeIn {
        animation-name: fadeIn;
      }
    </style>
    <main role="main">
      <slot name="page"></slot>
    </main>
    `;
  }

  static get properties () {
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

  constructor () {
    super();
    this._setKeyframeStyles();
    this._getLazyLoader();
  }

  static get observers () {
    return [
      '_checkPathRouteIfExists(path, currentRoute)'
    ];
  }

  _setKeyframeStyles () {
    const style = document.createElement('style');
    style.id = 'littlq-router-animation-styles';
    style.innerHTML = `
      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }

        to {
          opacity: 1;
        }
      }
    `;
    if (!document.querySelector('#littlq-router-animation-styles')) document.head.appendChild(style);
  }

  _getLazyLoader () {
    const lazy = this.getAttribute('lazy-loader') || 'lazy-loader';
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
  _checkPathRouteIfExists (path, route) {
    this._debouncer = Debouncer.debounce(
      this._debouncer,
      timeOut.after(200),
      () => {
        const keys = [];
        const re = pathToRegexp(route || '', keys);
        const exec = re.exec(path);
        if (!exec) {
          this.dispatch({
            type: ROUTER_ACTION.ROUTE,
            route: 'not-found'
          });
        }
      }
    );
  }

  _removePageAfterTransition (oldPage, route, transition, fn) {
    if (this._timeOut) clearTimeout(this._timeOut);
    if (transition && fn) oldPage.removeEventListener(transition, fn);
    if (this.contains(oldPage)) this.removeChild(oldPage);
    this._checkMiddlewares(route);
  }

  _removePageListenerFallback (oldPage, route, transition) {
    this._timeOut = setTimeout(() => {
      this._removePageAfterTransition(oldPage, route, transition);
    }, 550);
    const fn = () => {
      this._removePageAfterTransition(oldPage, route, transition, fn);
    };
    oldPage.addEventListener(transition, fn);
  }

  _removePage (oldPage, route) {
    const animation = getAnimationEvent(oldPage);
    oldPage.classList.remove('fadeIn');
    !animation ? this._removePageAfterTransition(oldPage, route) : this._removePageListenerFallback(oldPage, route, animation);
    oldPage.classList.add('animated');
    oldPage.classList.add('fadeOut');
  }

  _getMiddlewares (parent, middlewares = []) {
    for (let i = 0; i < parent.children.length; i++) {
      let child = parent.children[i];
      this._addMiddleware(!customElements.get(child.tagName.toLowerCase()) ? this._lazyLoadMiddleware(child) : this._getMiddleware(child), middlewares);
    }
    return parent.tagName.toLowerCase() === 'littleq-router' || !parent.parentNode ? middlewares : this._getMiddlewares(parent.parentNode, middlewares);
  }

  _addMiddleware (middleware, middlewares) {
    if (middleware !== undefined) {
      middleware instanceof Promise ? middlewares.push(middleware) : middlewares.push(Promise.resolve(middleware));
    }
  }

  _getMiddleware (middleware) {
    if (typeof middleware.middleware === 'function' && middleware.tagName.toLowerCase() !== 'littleq-route') return middleware.middleware();
  }

  _lazyLoadMiddleware (middleware) {
    return this._lazyLoader.import(middleware.tagName.toLowerCase())
      .then(() => {
        return this._getMiddleware(middleware);
      })
      .catch(e => {
        console.error(e);
        alert(e.message);
        return false;
        // if (this.currentRoute !== 'not-found') {
        //   this.dispatch({
        //     type: ROUTER_ACTION.ROUTE,
        //     route: 'not-found'
        //   });
        // }
      });
  }

  _processMiddlewares (page, redirect, middlewares) {
    middlewares.reduce((middleware, prev) => (prev && middleware && typeof middleware === 'boolean')) ? this._loadPage(page) : this._loadRedirect(redirect);
  }

  _loadRedirect (redirect) {
    redirect ? this._loadPage(redirect) : this._loadDefaultRedirect();
  }

  _loadDefaultRedirect () {
    const redirect = this.defaultRedirect ? document.createElement(this.defaultRedirect) : null;
    redirect
      ? this._loadPage(redirect)
      : this.dispatch({
        type: ROUTER_ACTION.ROUTE,
        route: 'not-found'
      });
  }

  _checkMiddlewares (route) {
    if (this.querySelector('[slot="page"]')) this.removeChild(this.querySelector('[slot="page"]'));
    const middlewares = this._getMiddlewares(route);
    const page = document.createElement(route.page);
    const redirect = route.redirect ? document.createElement(route.redirect) : null;
    middlewares.length ? Promise.all(middlewares).then(this._processMiddlewares.bind(this, page, redirect)) : this._loadPage(page);
  }

  _loadPage (page) {
    !customElements.get(page.tagName.toLowerCase()) ? this._lazyLoadPage(page) : this._showPage(page);
  }

  _lazyLoadPage (page) {
    this._lazyLoader.import(page.tagName.toLowerCase())
      .then(() => {
        this._showPage(page);
      })
      .catch(e => {
        if (this.currentRoute !== 'not-found') {
          this.dispatch({
            type: ROUTER_ACTION.ROUTE,
            route: 'not-found'
          });
        }
      });
  }

  _showPage (page) {
    page.setAttribute('slot', 'page');
    page.classList.add('animated');
    page.classList.add('fadeIn');
    this.appendChild(page);
  }
}

!customElements.get(LittleqRouter.is)
  ? customElements.define(LittleqRouter.is, LittleqRouter)
  : console.warn(`${LittleqRouter.is} is already defined`);
