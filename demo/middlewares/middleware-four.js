import { Element } from '@polymer/polymer/polymer-element';
import { customElements } from 'global/window';

class Middleware4 extends Element {
  static get is () { return 'middleware-four'; }

  middleware () {
    return true;
  }
}
customElements.define(Middleware4.is, Middleware4);
