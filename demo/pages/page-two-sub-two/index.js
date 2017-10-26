import { Element } from '@polymer/polymer/polymer-element';
import { customElements } from 'global/window';
import './index.html';

class Page22 extends Element {
  static get is () { return 'page-two-sub-two'; }
}

customElements.define(Page22.is, Page22);
