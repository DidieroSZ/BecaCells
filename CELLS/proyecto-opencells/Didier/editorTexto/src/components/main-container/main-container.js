import { LitElement, html, css } from "lit-element";
/* import mainStyles from "./main-container-styles.js"; */
import { createIcons, icons } from 'lucide';
import "../nav-component/nav-component.js";
import "../input-component/input-component.js";
import "../textarea-component/textarea-component.js";

export class MainContainer extends LitElement {

    createRenderRoot() {
        return this; // usa el DOM global
    }

    firstUpdated() {
        createIcons({ icons, attrs: { width: 24, height: 24 } });
    }

    /* static styles = [ mainStyles ]; */

    static properties = {
        texto: { type: String },

        objetoFormato: {type: Object },
    };

    constructor(){
        super();
        this.texto = '';

        this.objetoFormato = {};
    }
   
    render() {
        return html`
            <div class="container mt-3">
                <input-container @obtener-valor=${this._actualizarTexto}></input-container>

                <nav-container @custom-values=${this._formatoTexto}></nav-container>

                <text-container .resultado=${this.texto} .oF=${this.objetoFormato}></text-container>               
            </div>
        `;
    }

     _actualizarTexto(e){
        this.texto = e.detail.texto;
        /* console.log('Actualizando: ',this.texto); */
    }

    _formatoTexto(e){
        this.objetoFormato = e.detail;
        console.log(this.objetoFormato);
    }
}
customElements.define('main-container', MainContainer);