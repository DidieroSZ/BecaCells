import { LitElement, html, css } from "lit-element";
export class InputComponent extends LitElement {

    createRenderRoot() {
        return this; // usa el DOM global
    }

    static properties = {
        valor: {types: String},
    };

    constructor(){
        super();
        this.valor = '';
    }
   
    render() {
        return html`
          <div class="mt-3">
            <label class="form-label">Modificar texto:</label>
            <input
              type="text"
              @input=${this._obterTexto}
              class="form-control"
              id="inputText"
              value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate quidem minus ut iure culpa asperiores molestiae illo temporibus rerum ducimus at, obcaecati, incidunt, sequi quo suscipit ratione officiis odio quasi."
            />
          </div>
        `;
    }

    _obterTexto(e){
        this.valor = e.target.value;
        this.dispatchEvent(
            new CustomEvent('obtener-valor', {
                bubbles: true,
                composed: true,
                detail: { texto: this.valor },
            })
        );
    }
}
customElements.define('input-container', InputComponent);