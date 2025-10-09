import { LitElement, html } from "lit-element";
import parenStyles from "./component-parent-styles.js";
import "../component-bubble/component-bubble.js";

export class MiParentComponent extends LitElement {

    static properties = {
        log: {type: String},
    };

    static get styles(){
        return [parenStyles];
    }
    /* static styles = [parenStyles]; */

    constructor(){
        super();
        this.log = '';
    }

    render(){
        return html`

            <div class="parent" @bubble-event=${this._onBubbleEvent} >
                <bubble-child></bubble-child>
                <div class="log "> ${ this.log }</div>
            </div>
        
        `;
    }

    _onBubbleEvent(e){
        /* console.log(e); */
        this.log = ` Bubble Parent recived: "${e.detail.msg}" `;
    }
}
customElements.define('parent-component', MiParentComponent);