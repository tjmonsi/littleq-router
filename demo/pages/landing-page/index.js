import { Element } from '@polymer/polymer/polymer-element';
import { customElements } from 'global/window';
import './index.html';

class Landing extends Element {
  static get is () { return 'landing-page'; }
}

customElements.define(Landing.is, Landing);
