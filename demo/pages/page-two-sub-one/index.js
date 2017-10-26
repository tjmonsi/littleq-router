import { Element } from '@polymer/polymer/polymer-element';
import { customElements } from 'global/window';
import './index.html';

class Page21 extends Element {
  static get is () { return 'page-two-sub-one'; }
}

customElements.define(Page21.is, Page21);
