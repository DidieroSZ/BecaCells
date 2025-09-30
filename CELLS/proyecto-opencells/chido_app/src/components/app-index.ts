import { startApp } from '@open-cells/core';
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ElementController } from '@open-cells/element-controller';
import { routes } from '../router/routes.js';
/* import { styles } from './app-index.css.js'; */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./nav-component.js";

startApp({
  routes,
  mainNode: 'app-content',
});

@customElement('app-index')
export class AppIndex extends LitElement {
  elementController = new ElementController(this);

  static styles = css`

  
  `;

  render() {
    return html`
      <main role="main" tabindex="-1" class="p-3">
        <nav-page></nav-page>
        <slot></slot>
      </main>
    `;
  }
}
