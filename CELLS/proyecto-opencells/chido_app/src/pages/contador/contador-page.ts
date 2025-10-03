import { css, html, LitElement } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement, property } from 'lit/decorators.js';

@customElement('contador-page')
export class SecondPage extends LitElement {
  pageController = new PageController(this);

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  static styles = css`
  `;

  @property() valor: number = 10;
  @property() incremento: string = '1';

  valores(e:Event){
    const val = e.target as HTMLInputElement;
    this.incremento = val.value
  }
  sumar(){
    this.valor += parseInt(this.incremento);
  }
  restar(){
    this.valor -= parseInt(this.incremento);
  }

  render() {
    return html`
    <slot></slot>
    <div class="contador--container p-3 rounded-3">
        <h3>Resultado: ${this.valor}</h3>
        <br>
        <label for="rangeNumber" class="form-label">Ingremento: ${this.incremento}</label>
        <input type="range" @input=${this.valores} class="form-range" id="rangeNumber" min="1" max="15" step="1" value="1">
        <br>    
        <button @click="${this.sumar}" class="btn-general btn-terciario rounded-pill px-3 py-2">Sumar</button>
        <button @click="${this.restar}" class="btn-general btn-terciario rounded-pill px-3 py-2">Restar</button>
    </div>
        
    `;
  }
}