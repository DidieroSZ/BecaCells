import { LitElement, html, css } from "lit-element";
import { createIcons, icons } from 'lucide';

export class NavComponent extends LitElement {

    createRenderRoot() {
        return this;
    }

    firstUpdated() {
        createIcons({ icons, attrs: { width: 24, height: 24 } });
    }

    static properties = {
        btnClass: {type: String },
        borderClass: {type: String },

        colorText: {type: String },
        alignText: {type: String },
        boldText: {type: Boolean },
        fontText: {type: String },
    };

    constructor(){
        super();
        this.btnClass = 'btn btn-outline-secondary';
        this.borderClass = 'border border-secondary';

        this.colorText = '';
        this.alignText = '';
        this.boldText = '';
        this.fontText = '';
    }
    
    render() {
        return html`
            <nav class="nav--container p-3 border rounded-3 d-flex gap-3 mt-3">
                <div class="input-group w-25">
                    <input @blur=${this._onClick_Color} class="form-control form-control-color w-25 ${this.borderClass}" type="color" >
                </div>
                
                <div class="btn-group" role="group" id="">
                    <button type="button" class="${this.btnClass}"> <i data-lucide="a-arrow-up"></i> </button>
                    <button type="button" class="${this.btnClass}"> <i data-lucide="a-arrow-down"></i> </button>
                </div>

                <div class="btn-group" role="group" id="">
                    <button type="button" class="${this.btnClass}"> <i data-lucide="text-align-start"></i> </button>
                    <button type="button" class="${this.btnClass}"> <i data-lucide="text-align-center"></i> </button>
                    <button type="button" class="${this.btnClass}"> <i data-lucide="text-align-end"></i> </button>
                </div>

                <div class="btn-group" role="group" id="">
                    <button type="button" class="${this.btnClass}"> <i data-lucide="bold"></i> </button>
                </div>

                <div class="input-group w-25" role="group" id="">
                    <select class="form-select ${this.borderClass}">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </nav>
        `;
    } 

    _onClick_Color(e){
        this.colorText = e.target.value;
        this._customParametros();
    }

    _customParametros(){
        this.dispatchEvent(
            new CustomEvent('custom-values', {
                bubbles: true,
                composed: true,
                detail: { 
                    colorText: this.colorText,
                    alignText: this.alignText,
                    boldText: this.boldText,
                    fontText: this.fontText,
                },
            })
        );
    }
}
customElements.define('nav-container', NavComponent);