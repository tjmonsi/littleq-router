import { Element } from '@polymer/polymer/polymer-element';
import { customElements } from 'global/window';

class Middleware3 extends Element {
  static get is () { return 'middleware-three'; }

  middleware () {
    return true;
  }
}
customElements.define(Middleware3.is, Middleware3);
