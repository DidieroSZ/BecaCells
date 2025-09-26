import { html, LitElement, css } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement } from 'lit/decorators.js';

// @ts-ignore
@customElement('home-page')
export class HomePage extends LitElement {
  pageController = new PageController(this);

  //Evita que los estilos se inserten en Shodow DOM
  /* protected createRenderRoot(): HTMLElement | DocumentFragment {
    // @ts-ignore
    return this;
  } */
  static styles = css`
    .container--links{
      width: 100%;
      max-width: 500px;
      overflow: hidden;
      border-radius: 1rem;
      padding: 1rem;
      background-color: #e3e3e3;

      display: flex;
      justify-content: center;
      align-items: start;
      flex-flow: column nowrap;
      gap: 0.5rem;
    }
      .btn--directorio{
        padding: 0.5rem;
        border-radius: 5px;
        border: none; 
        background-color: #3C467B;
        color: white;
        font-weight: bold;
      }
  `;


  render() {
    return html`
      <div >Directorio del Curso</div>
      <div class="container--links">
        <button @click="${() => this.pageController.navigate('contador')}" class="btn--directorio">Contador</button>
        <button @click="${() => this.pageController.navigate('todo-list')}" class="btn--directorio">TODO List</button>
        <button @click="${() => this.pageController.navigate('second')}" class="btn--directorio">Contador</button>
      </div>
    `;
  }
}
