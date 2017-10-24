import { Element } from '@polymer/polymer/polymer-element';
import { ReduxMixin } from '@littleq/state-manager';
import LocationMixin from '@littleq/location-mixin';
import QueryParamsMixin from '@littleq/query-params-mixin';
import pathToRegexp from 'path-to-regexp';
import { customElements } from 'global/window';
import { ROUTER_ACTION } from './lib/reducer';
import getRoutes from './lib/get-routes';

class LittleqRoute extends ReduxMixin(QueryParamsMixin(LocationMixin(Element))) {
  static get is () { return 'littleq-route'; }

  static get properties () {
    return {
      page: {
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

  _processPage () {
    let router = this;
    do {
      router = router.parentNode;
    } while (router.tagName.toLowerCase() !== 'littleq-router');
    const page = router.querySelector('[slot="page"]');
    page ? router._removePage(page, this) : router._showPage(this);
  }

  _checkRoute (route) {
    if (route === getRoutes(this)) this._processPage();
  }

  _routeMatches (route, exec, keys) {
    const params = {};
    keys.forEach((key, index) => {
      const { name } = key;
      params[name] = exec[index + 1] || null;
    });

    this.dispatch({
      type: ROUTER_ACTION.PARAMS,
      params
    });

    this.dispatch({
      type: ROUTER_ACTION.ROUTE,
      route
    });
  }

  _checkIfRouteMatches (path) {
    const route = getRoutes(this);
    const keys = [];
    const re = pathToRegexp(route, keys);
    const exec = re.exec(path);
    if (exec) this._routeMatches(route, exec, keys);
  }

  _pathChanged (path) {
    path = path.replace(/index\.html$/, '');
    if (this.route) this._checkIfRouteMatches(path);
  }
}

if (!customElements.get(LittleqRoute.is)) {
  customElements.define(LittleqRoute.is, LittleqRoute);
} else {
  console.warn(`${LittleqRoute.is} is already defined`);
}
