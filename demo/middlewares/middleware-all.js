import { Element } from '@polymer/polymer/polymer-element';
import { customElements } from 'global/window';

class MiddlewareAll extends Element {
  static get is () { return 'middleware-all'; }

  middleware () {
    return true;
  }
}
customElements.define(MiddlewareAll.is, MiddlewareAll);
