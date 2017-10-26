import { Element } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import { customElements } from 'global/window';
import './index.html';

class Login extends GestureEventListeners(Element) {
  static get is () { return 'login-page'; }
}

customElements.define(Login.is, Login);
