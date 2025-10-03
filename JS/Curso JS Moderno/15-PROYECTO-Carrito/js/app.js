const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');

const vaciarCarrito = document.querySelector('#vaciar-carrito');

 
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEvents();
function cargarEvents(){
    listaCursos.addEventListener('click', agregarCurso);


    carrito.addEventListener('click', eliminarCurso);

    vaciarCarrito.addEventListener('click', vaciar);

}

/* FUNCIONES */
function vaciar(){
    contenedorCarrito.innerHTML = '';
}

function agregarCurso(e){
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        console.log(e.target.parentElement.parentElement);
        const cursoSelect = e.target.parentElement.parentElement
        leerDatosCurso(cursoSelect);
    }   

}

function eliminarCurso(e){
    e.preventDefault();
    if (e.target.classList.contains('borrar-curso')) {
        let cursoID = e.target.getAttribute('data-id');

        articulosCarrito = articulosCarrito.filter(c => c.id !== cursoID);
        carritoPopUp();
    }   

}

function leerDatosCurso(curso){
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }

    /* articulosCarrito.push(infoCurso); */
    const duplicado = articulosCarrito.some( curso => curso.id === infoCurso.id );
    if (duplicado) {
        const cursos = articulosCarrito.map( c => {
            c.id
            if (c.id === infoCurso.id) {
                c.cantidad++;
                return c;
            }
            else{
                return c;
            }
        });
       articulosCarrito = [...cursos];
    }
    else{
        articulosCarrito = [...articulosCarrito, infoCurso];
    }
    carritoPopUp();
}


function carritoPopUp(){
    contenedorCarrito.innerHTML = '';
    articulosCarrito.forEach(c => {
        const {imagen, titulo, precio, cantidad, id} = c;
        if (id === 2) {
            
        }

        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td> <img src="${imagen}" title="${titulo}" alt="${titulo}" width="100"> </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td> <a href="#" class="borrar-curso" data-id="${id}"> X </a></td>
        `;

        /* contenedorCarrito.innerHTML += fila; */
        contenedorCarrito.appendChild(fila);
    });
}
/* END FUNCIONES */