import { LitElement, html, css } from "lit-element";

export class TextComponent extends LitElement {

    createRenderRoot() {
        return this; // usa el DOM global
    }

    static properties = {
        resultado: { type: String },
        
        oF: {type: Object },
    };

    constructor(){
        super();
        this.resultado = '';

        this.oF = {};
    }

    render() {
        return html`
          <div class="mt-3 p-3 rounded-3 border border-secundary">
            <p
                class="m-0 ${this.oF.fontText} ${this.oF.alignText} ${this.oF.boldText ? 'fw-bold' : ''}"
                style="color: ${this.oF.colorText}; font-size: ${this.oF.sizeText}px;">
                 ${this.resultado}
            </p>
          </div>
        `;
    }
}
customElements.define('text-container', TextComponent);