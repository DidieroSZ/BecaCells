//VARIABLES
const resultado = document.querySelector('#resultado');

const year = document.querySelector('#year');
const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

//EVENTOS
document.addEventListener('DOMContentLoaded', () => {
    mostrarAuto(autos);

    llenarYears();
});

marca.addEventListener('change', llenarObjeto);
year.addEventListener('change', llenarObjeto);
minimo.addEventListener('change', llenarObjeto);
maximo.addEventListener('change', llenarObjeto);
puertas.addEventListener('change', llenarObjeto);
transmision.addEventListener('change', llenarObjeto);
color.addEventListener('change', llenarObjeto);

//FUNCIONES

function llenarObjeto(e){
    let valor = e.target.value;
    let id = e.target.id;

    datosBusqueda[id] = valor;
    filtarAuto();
}

function mostrarAuto(arreglo){
     limpiarHtml();
    arreglo.forEach(auto => {
        const {marca, modelo, year, puertas, transmision, precio, color } = auto;
        const html = document.createElement('P');
        html.textContent = ` ${marca} ${modelo} ${year} ${puertas} ${transmision} ${precio} ${color}`
        
        resultado.appendChild(html);
    });
}

function limpiarHtml(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}
 
function llenarYears(){
    let presente = new Date().getFullYear();

    for (let i = 0; i < 25; i++) {
        const opcion = document.createElement('option');
        opcion.value = presente - i;
        opcion.textContent = presente - i;
        year.appendChild(opcion);
    } 
}

function filtarAuto(){
    const res = autos.filter(filtarMarca).filter(filtarYear);
    /* console.log(res); */
    mostrarAuto(res)
}

function filtarMarca(auto){
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca;
    }
    return auto
}
function filtarYear(auto){
    const { year } = datosBusqueda;
    if ( parseInt(year) ) {
        return auto.year === parseInt(year);
    }
    return auto
}