import { css, html, LitElement } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement, state } from 'lit/decorators.js';

customElement('contador-page')
export class ContadorPage extends LitElement {
    pageController = new PageController(this);

    protected createRenderRoot(): HTMLElement | DocumentFragment {
        return this;
    }
      //Puedo pasarle un atributo al Componente
/*  @property() greeting = "Hello"; */

  //Privada solo para el Componente
  @state()   
  private contador = 0;


  static styles = css` 
    .contenedor {
      display: block
    }
  `;

  handleClick(){
    this.contador++;
  }

  render(){
    return html`
    <h3>Contador Prueba</h3>
    <p>Contador: ${this.contador}</p>
    <br>
    <button @click=${this.handleClick} class="btn btn-primary">Contar</button>

    <br>
    `;
  }
}