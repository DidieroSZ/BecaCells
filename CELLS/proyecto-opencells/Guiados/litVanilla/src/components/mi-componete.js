import { LitElement, html } from "lit-element";

export class miComponente extends LitElement {
    render(){
        return html`
        <p> Hola desde LitElement </p>
        `;
    }
}

customElements.define('mi-componente', miComponente);