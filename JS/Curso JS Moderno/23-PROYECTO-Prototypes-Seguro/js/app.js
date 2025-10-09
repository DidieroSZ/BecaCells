/* ---- CONSTRUCORES ---- */
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function(marca, year, tipo){
    switch (tipo) {
        case '1':
            
            break;
        case '2':
            
            break;
    
        default:
            break;
    }
}


function UI(){}
/* ---- CONSTRUCORES ---- */


/* ---- FUNCIONES ---- */
UI.prototype.generarYear = () => {
    const anio = new Date().getFullYear();
    const selectYear = document.querySelector('#year');

    for (let i = 0; i < 20; i++) {
        let op = document.createElement('option');
        op.value = anio - i;
        op.innerText = anio - i;
        console.log(anio - i);
        selectYear.appendChild(op);
    }
}

UI.prototype.mostrarAlerta = function(alerta){
    const div = document.createElement('div');
    const formulario = document.querySelector('#cotizar-seguro');

     div.classList.add('mensaje', 'mt-10')
    if (alerta) {
        div.classList.add('correcto');
        div.textContent = 'Cotizando...';
        
    }
    else{
        div.textContent = 'Error, revisa los campos.';
        div.classList.add('error');
    }
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 2500);

}
/* ---- FUNCIONES ---- */


/* ---- INSTANCIAS ---- */
const ui = new UI();
/* ---- INSTANCIAS ---- */


/* ---- EVENTOS ---- */
document.addEventListener('DOMContentLoaded', () => {
    ui.generarYear();
    
});

eventosEscucha();
/* ---- EVENTOS ---- */
function eventosEscucha(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}



function cotizarSeguro(e){
    e.preventDefault;

    const marca = document.querySelector('#marca').value;
    const year = document.querySelector('#year').value;
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if (marca === '' || year === '' || tipo === '') {
        ui.mostrarAlerta(false);
        return
    }
    ui.mostrarAlerta(true);

    const seguro = new Seguro(marca, year, tipo);
    console.log(seguro);
    
}