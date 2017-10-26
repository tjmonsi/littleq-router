import { Element } from '@polymer/polymer/polymer-element';
import { customElements } from 'global/window';
import './index.html';

class Page404 extends Element {
  static get is () { return 'page-404'; }
}

customElements.define(Page404.is, Page404);
