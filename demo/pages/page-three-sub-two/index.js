import { Element } from '@polymer/polymer/polymer-element';
import { customElements } from 'global/window';
import './index.html';

class Page32 extends Element {
  static get is () { return 'page-three-sub-two'; }
}

customElements.define(Page32.is, Page32);
