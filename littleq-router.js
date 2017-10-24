import { Element } from '@polymer/polymer/polymer-element';
import { Debouncer } from '@polymer/polymer/lib/utils/debounce';
import { timeOut } from '@polymer/polymer/lib/utils/async';
import { ReduxMixin } from '@littleq/state-manager';
import { customElements } from 'global/window';
import { ROUTER_ACTION } from './lib/reducer';
import getTrainsitionEvent from './lib/get-transition-event';
import pathToRegexp from 'path-to-regexp';
import LocationMixin from '@littleq/location-mixin';
import QueryParamsMixin from '@littleq/query-params-mixin';

class LittleqRouter extends ReduxMixin(QueryParamsMixin(LocationMixin(Element))) {
  static get is () { return 'littleq-router'; }

  static get template () {
    return `
    <style>
      ::slotted(.animated) {
        animation-duration: 0.2s;
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
    if (!document.querySelector('#littlq-router-animation-styles')) {
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
      const head = document.getElementsByTagName('head')[0];
      head.append(style);
    }
  }

  static get observers () {
    return [
      '_checkPathRouteIfExists(path, currentRoute)'
    ];
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
    if (this._timeOut) {
      clearTimeout(this._timeOut);
    }

    if (transition && fn) {
      oldPage.removeEventListener(transition, fn);
    }

    if (this.contains(oldPage)) {
      this.removeChild(oldPage);
    }

    this._showPage(route);
  }

  _removePageListenerFallback (oldPage, route, transition) {
    this._timeOut = setTimeout(() => {
      this._removePageAfterTransition(oldPage, route, transition);
    }, 250);
    const fn = () => {
      this._removePageAfterTransition(oldPage, route, transition, fn);
    };
    oldPage.addEventListener(transition, fn);
  }

  _removePage (oldPage, route) {
    const transition = getTrainsitionEvent(oldPage);
    oldPage.classList.remove('fadeIn');
    !transition ? this._removePageAfterTransition(oldPage, route) : this._removePageListenerFallback(oldPage, route, transition);
    oldPage.classList.add('animated');
    oldPage.classList.add('fadeOut');
  }

  _showPage (route) {
    if (!this.querySelector('[slot="page"]')) {
      const page = document.createElement(route.page);
      page.setAttribute('slot', 'page');
      page.classList.add('animated');
      page.classList.add('fadeIn');
      this.append(page);
    }
  }
}

if (!customElements.get(LittleqRouter.is)) {
  customElements.define(LittleqRouter.is, LittleqRouter);
} else {
  console.warn(`${LittleqRouter.is} is already defined`);
}
