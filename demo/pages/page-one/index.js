import { Element } from '@polymer/polymer/polymer-element';
import { customElements } from 'global/window';
import './index.html';

class Page1 extends Element {
  static get is () { return 'page-one'; }
}

customElements.define(Page1.is, Page1);
