import { html, LitElement } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement, property } from 'lit/decorators.js';

@customElement('contador-page')
export class SecondPage extends LitElement {
  pageController = new PageController(this);

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  @property() valor: number = 0;

  sumar(){
    this.valor += 1;
  }

  render() {
    return html`
    <slot></slot>
    <div class="p-3">
        <h3>Resultado: ${this.valor}</h3>
        <button @click="${this.sumar}" class="btn-general btn-terciario rounded-pill p-3">Agregar</button>
    </div>
        
    `;
  }
}