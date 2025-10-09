import { LitElement, html, css } from "lit";
import stylesBtn from "./mi-btn-styles.js";

export class MiBtn extends LitElement{
    
    static get properties(){
        return { class:{ type: String } };
    }

    constructor(){
        super();
        this.class = 'btnDefault';
    }

    static get styles(){
        return [stylesBtn];
    }
    
    
    render(){
        return html`
        
        <button class=" ${ this.class } " >Hola BTN</button>
        `;
    }
}

customElements.define('mi-btn', MiBtn);