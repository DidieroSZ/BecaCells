import { startApp } from '@open-cells/core';
import { LitElement, html } from 'lit';
import { PageController } from '@open-cells/page-controller';
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
export class IndexPage extends LitElement {
  pageController = new PageController(this);
  elementController = new ElementController(this);
  
  static styles = styles;

  render(){
    return html`
    <slot></slot>
    `;
  }
}