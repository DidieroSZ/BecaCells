import { LitElement, html, css } from "lit-element";
import estilosAdd from "./add-item-styles.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



export class AddItem extends LitElement {

    /* createRenderRoot() {
        return this;
    } */
    static get styles() {
        return [estilosAdd];
    }

    render(){
        return html`
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
        </div>
            <label for="todo-input">Agregar Item:</label>
            <input id="todo-input" class="input--general"></input>
           
            <smart-button class="glow-on-hover">Hover me, then click me!</smart-button>
        `;
    } 
}

customElements.define('add-item', AddItem);