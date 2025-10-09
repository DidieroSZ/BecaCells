import { LitElement, css } from "lit-element";

export default css`

:root{
    --pad1: 0.5rem;
    --pad2: 1rem;
    --pad3: 1.5rem;
    --Gris: #D0CFCF;
}


.input--general{
    padding: var(--pad1);
    border-radius: var(--pad1);
    border: none;
    background-color: var(--Gris);
}
.input--general:focus{
    border: none;
}

`;