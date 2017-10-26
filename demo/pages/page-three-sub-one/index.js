import { Element } from '@polymer/polymer/polymer-element';
import { customElements } from 'global/window';
import './index.html';

class Page31 extends Element {
  static get is () { return 'page-three-sub-one'; }
}

customElements.define(Page31.is, Page31);
