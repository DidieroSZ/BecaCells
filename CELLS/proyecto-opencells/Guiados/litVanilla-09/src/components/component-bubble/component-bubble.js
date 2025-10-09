import { LitElement, html } from "lit-element";
import bubbleStyles from "./component-bubble-styles.js";


export class BubbleComponent extends LitElement {
    
    static styles = [bubbleStyles];

    firstUpdated(){
        document.addEventListener('bubble-event', function(e){
            console.log('Event: ', e);
        } );
    }

    render(){
        return html`
               
            <div class="child" @click=${this._onClick} >
                Click me!
            </div>

        `;
    }

    _onClick(){
        this.dispatchEvent(
          new CustomEvent('bubble-event', {
            bubbles: true,
            composed: true,
            detail: { msg: "Hola" },
          })
        );
    }
}
customElements.define('bubble-child', BubbleComponent);