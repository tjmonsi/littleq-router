import { Element } from '@polymer/polymer/polymer-element';
import { customElements } from 'global/window';
import './index.html';

class Page4 extends Element {
  static get is () { return 'page-four'; }
}

customElements.define(Page4.is, Page4);
