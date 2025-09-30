import { html, LitElement, css } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement } from 'lit/decorators.js';


@customElement('nav-page')
export class NavComponent extends LitElement {
  pageController = new PageController(this);

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    // @ts-ignore
    return this;
  }

  static styles = css`
  `;

  render() {
    return html`
      <div class="container-links d-flex rounded-3 p-3 gap-3">
        <button @click="${() => this.pageController.navigate('home')}" class="btn-general btn-pincipal rounded-pill p-3">Home Page</button>
        <button @click="${() => this.pageController.navigate('contador')}" class="btn-general btn-secundario rounded-pill p-3">Contador</button>
        <button @click="${() => this.pageController.navigate('todo')}" class="btn-general btn-secundario rounded-pill p-3">TodoList</button>
      </div>
    `;
  }
}