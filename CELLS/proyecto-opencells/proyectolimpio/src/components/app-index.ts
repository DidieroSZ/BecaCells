import { startApp } from '@open-cells/core';
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ElementController } from '@open-cells/element-controller';
import { routes } from '../router/routes.js';
import { styles } from './app-index.css.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

startApp({
  routes,
  mainNode: 'app-content',
});

@customElement('app-index')
export class AppIndex extends LitElement {
  elementController = new ElementController(this);
  

  static styles = styles;

  
  render() {
    return html`
    
    <section role="main" tabindex="-1" class="">
      <h3>Todo List</h3>
      <slot></slot>
      <article></article>
      <aside>
        <input placeholder="Enter your name">
      </aside>
 
    </section>
    `;
  }
}
