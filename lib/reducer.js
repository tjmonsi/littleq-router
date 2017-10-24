import { reducers, store } from '@littleq/state-manager';
import { combineReducers } from 'redux';

const ROUTER_ACTION = {
  PARAMS: 'ROUTER_UPDATE_PARAMS',
  ROUTE: 'ROUTER_UPDATE_ROUTE'
};

reducers.router = (router = {}, action) => {
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

store.replaceReducer(combineReducers(reducers));

export { ROUTER_ACTION };
