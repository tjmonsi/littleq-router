import { Element } from '@polymer/polymer/polymer-element';
import { customElements } from 'global/window';

class Middleware2 extends Element {
  static get is () { return 'middleware-two'; }

  middleware () {
    return false;
  }
}
customElements.define(Middleware2.is, Middleware2);
