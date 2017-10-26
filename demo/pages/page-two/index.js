import { Element } from '@polymer/polymer/polymer-element';
import { customElements } from 'global/window';
import './index.html';

class Page2 extends Element {
  static get is () { return 'page-two'; }
}

customElements.define(Page2.is, Page2);
