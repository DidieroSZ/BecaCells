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
    btnClass: { type: String },
    borderClass: { type: String },

    colorText: { type: String },
    alignText: { type: String },
    boldText: { type: Boolean },
    fontText: { type: String },
    sizeText: { type: Number },
  };

  constructor() {
    super();
    this.btnClass = "btn btn-outline-secondary";
    this.borderClass = "border border-secondary";

    this.colorText = "";
    this.alignText = "";
    this.boldText = false;
    this.fontText = '';
    this.sizeText = 16;
  }

  render() {
    return html`
      <nav class="nav--container p-3 border rounded-3 d-flex flex-row justify-content-between mt-3">
        <div class="input-group w-25">
          <input
            @blur=${this._onClick_Color}
            class="form-control form-control-color w-25 ${this.borderClass}"
            type="color"
          />
        </div>

        <div class="btn-group" role="group" id="">
          <button
            @click=${this._onClick_Size}
            type="button"
            class="${this.btnClass}"
            id="font-up"
          >
            <i data-lucide="a-arrow-up"></i>
          </button>
          <button
            @click=${this._onClick_Size}
            type="button"
            class="${this.btnClass}"
            id="font-down"
          >
            <i data-lucide="a-arrow-down"></i>
          </button>
        </div>

        <div class="btn-group" role="group" id="">
          <button type="button" @click=${this._onClick_Align} class="${this.btnClass}" id="text-start" ><i data-lucide="text-align-start"></i></button>
          <button type="button" @click=${this._onClick_Align} class="${this.btnClass}" id="text-center" ><i data-lucide="text-align-center"></i></button>
          <button type="button" @click=${this._onClick_Align} class="${this.btnClass}" id="text-end" ><i data-lucide="text-align-end"></i></button>
        </div>

        <div class="btn-group" role="group" id="">
            <input type="checkbox" @click=${this._onClick_Bold} class="btn-check" id="btn-check-2-outlined" autocomplete="off">
            <label class="${this.btnClass}" for="btn-check-2-outlined"><i data-lucide="bold"></i></label>
        </div>

        <div class="input-group w-25" role="group" id="">
          <select @change=${this._onClick_Font} class="form-select ${this.borderClass}">
            <option selected>Default Font</option>
            <option value="bbh-sans-bartle-regular">BBH Sans Bartle</option>
            <option value="bitcount-prop-single-ink">Bitcount Prop Single</option>
            <option value="barrio-regular">Barrio</option>
            <option value="creepster-regular">Creepster</option>
            <option value="nosifer-regular">Nosifer</option>
            <option value="fascinate-regular">Fascinate</option>
            <option value="unifrakturmaguntia-regular">UnifrakturMaguntia</option>
          </select>
        </div>
      </nav>
    `;
  }

  _onClick_Color(e) {
    this.colorText = e.target.value;
    this._customParametros();
  }

  _onClick_Size(e) {
    const btn = e.target.closest("button");
    const id = btn.id;

    if (!btn) {
      return;
    }

    if (id === "font-up") {
      this.sizeText += 5;
    }
    if (id === "font-down" && this.sizeText > 5) {
      this.sizeText -= 5;
    }

    this._customParametros();
  }

  _onClick_Align(e){
    const btn = e.target.closest("button");
    const id = btn.id;

    if (!btn) {
      return;
    }

    this.alignText = id;
    this._customParametros();
  }

  _onClick_Font(e){
    this.fontText = e.target.value;
    this._customParametros();
  }

  _onClick_Bold(e){
    const inp = e.target.closest("input");
    if (inp.checked) {
        this.boldText = true;
    }
    else{
        this.boldText = false;
    }
    this._customParametros();
  }

  _customParametros() {
    this.dispatchEvent(
      new CustomEvent("custom-values", {
        bubbles: true,
        composed: true,
        detail: {
          colorText: this.colorText,
          alignText: this.alignText,
          boldText: this.boldText,
          fontText: this.fontText,
          sizeText: this.sizeText
        },
      })
    );
  }
}
customElements.define('nav-container', NavComponent);