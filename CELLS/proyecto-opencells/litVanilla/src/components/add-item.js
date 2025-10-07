import { LitElement, html, css } from "lit-element";
/* import genStyles from "../css/general.css" assert { type: "css" }; */


export class AddItem extends LitElement {

    createRenderRoot() {
        return this;
    }

   /*  static styles = [genStyles]; */
    /* static styles = css`
        :root {
            --pad1: 0.5rem;
            --pad2: 1rem;
            --pad3: 1.5rem;
        }

        .input--general{
            padding: var(--pad2);
        }
    `; */


    render(){
        return html`
        <!-- 
            <label for="todo-input">Agregar Item:</label>
            <input id="todo-input" type="text" class="input--general" value="" required>
        -->
            <!--<smart-input data-source="[South America, North America, Asia, Africa, Europe]"></smart-input> -->
            <label for="todo-input">Agregar Item:</label>
            <smart-input id="todo-input"></smart-input>
            <smart-multi-input drop-down-button-position="right" placeholder="Please Select" ></smart-multi-input>

             <smart-button class="glow-on-hover">Hover me, then click me!</smart-button>
        `;
    } 
}

customElements.define('add-item', AddItem);