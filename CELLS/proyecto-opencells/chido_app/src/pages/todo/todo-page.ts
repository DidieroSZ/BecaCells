import { html, LitElement } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement, property } from 'lit/decorators.js';

@customElement('todo-page')
export class TodoPage extends LitElement {
  pageController = new PageController(this);

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  @property()  nombre:string = 'Nombre';

  handleNombre(event:Event){
    const input = event.target as HTMLInputElement;

    this.nombre = input.value;
  }


  render() {
    return html`
    <h4>Nombre: ${this.nombre}</h4>
      <input @input=${this.handleNombre} placeholder="Enter your name">
    `;
  }
}