import { Element } from '@polymer/polymer/polymer-element';
import { customElements } from 'global/window';
import './index.html';

class Page3 extends Element {
  static get is () { return 'page-three'; }
}

customElements.define(Page3.is, Page3);
