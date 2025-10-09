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
            <h3 class="m-0" style="color: ${this.oF.colorText} !important">${ this.resultado }</h3>
        </div>
        `;
    }
}
customElements.define('text-container', TextComponent);