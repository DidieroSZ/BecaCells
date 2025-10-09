import { html, LitElement } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement } from 'lit/decorators.js';


customElement('contador-page')
export class TodoPage extends LitElement {

    protected createRenderRoot(): HTMLElement | DocumentFragment {
        return this;
    }

    render() {
        return html`
        <h4>TODO PAGE</h4>
        `;
    }
}