import { Element } from '@polymer/polymer/polymer-element';
import { customElements } from 'global/window';

class Middleware1 extends Element {
  static get is () { return 'middleware-one'; }

  middleware () {
    return true;
  }
}
customElements.define(Middleware1.is, Middleware1);
