// Clases

class Movie {

    // Variables
    _codigo
    _nombre
    _categoria
    _descripcion
    _publicado

    // Constructor
    constructor(nombre, categoria, descripcion, publicado) {
        this._nombre = nombre;
        this._categoria = categoria;
        this._descripcion = descripcion;
        this._publicado = publicado;
    }

}

class Biblioteca {
    _peliculaArray

    // Constructor
    constructor(){
        this._peliculaArray = [];
    }

    agregarPelicula(pelicula){
        this._peliculaArray.push(pelicula);
    }
}

// const pelicula = new Movie()
// el agregar de la biblioteca tiene que ser una pelicula que tenga la clase movie

/*
    VARIABLES INICIALES
    1. Genero la biblioteca.
    2. Variables del Modal
    3. Botones del Modal
*/

const biblioteca = new Biblioteca()
 
let inputNombre = document.getElementById('nombre-input')
let inputCategoria = document.getElementById('categoria-input')
let inputDescripcion = document.getElementById('descripcion-input')
let inputPublicado = document.getElementById('publicado-input')
let inputNoPublicado = document.getElementById('nopublicado-input')

let btnAgregar = document.getElementById('btn-modal-agregar')
let btnLimpiar = document.getElementById('btn-modal-limpiar')

/*
    FUNCIONES [AQUÍ ESTÁN TODAS LAS FUNCIONES]
*/

// Guarda la biblioteca en el localstorage 
function guardarPeliculas (biblioteca) {
    // generamos peliculas serializadas para poder aplicarle el json stringify
    const peliculasSerializadas = JSON.stringify(biblioteca)
    // con esto luego lo podemos guardar en el local storage
    localStorage.setItem("pelis", peliculasSerializadas);
}

// Limpio los inputs del modal
function limpiarInputs(){
    inputNombre.value = ''
    inputCategoria.value = ''
    inputDescripcion.value = ''
}  

// borro el contenido de la tabla
function borrarContenidoTabla(){
    let cuerpoTabla = document.getElementById('table-body'); 
    cuerpoTabla.innerHTML = ''
}
  
// Visualizo las pelis del local storage
function actualizarPeliculasPorLocalStorage() {


    let tablaPelicula = document.getElementById('tablaPeliculas');
    // Paso numero 0 elimino el table body actual:
    // borrarContenidoTabla();

    // Paso número 1: Obtengo el objeto
    let bibliotecaSeralizada = localStorage.getItem('pelis')
    let bibliotecaParseada = JSON.parse(bibliotecaSeralizada)

    // 1.1 Obtengo array por cada propiedad del objeto bibliotecaParseada
    const peliculaArray = bibliotecaParseada._peliculaArray;

    // con peliculaArray obtengo el array propio, entonces mapeo los arrays para
    // así poder conseguir los arrays propios de cada uno y luego iterarlos

    let nombresPeliculas = peliculaArray.map(pelicula => pelicula._nombre);
    let categoria = peliculaArray.map(pelicula => pelicula._categoria);
    let descripcion = peliculaArray.map(pelicula => pelicula._descripcion);
    let publicado = peliculaArray.map(pelicula => pelicula._publicado);
    
    // obtengo la cantidad de elementos [COMO SON ARRAYS PARALELOS, ENTONCES 
    //      TODOS TIENEN LA MISMA CANTIDAD DE ELEMENTOS ]

    // ITINERO PARA LA CREACIÓN DE LA TABLA...

    for(let i = 0; i < nombresPeliculas.length; i++){

    // Paso número 2  Obtengo la tabla

    let cuerpoTabla = document.getElementById('table-body'); 

    // Paso 3: Genero las filas que iran dentro de la tabla

    let tablaFila = document.createElement('tr')

    filaDate = document.createElement('td')
    filaDate.innerText = i+1
    filaDate.classList.add('text-center')
    tablaFila.appendChild(filaDate) // [fila] <- [celda]

    filaDate = document.createElement('td')
    filaDate.innerText = nombresPeliculas[i]
    filaDate.classList.add('text-center')
    tablaFila.appendChild(filaDate) // [fila] <- [celda]

    filaDate = document.createElement('td')
    filaDate.innerText = categoria[i]
    filaDate.classList.add('text-center')
    tablaFila.appendChild(filaDate) // [fila] <- [celda]

    filaDate = document.createElement('td')
    filaDate.innerText = descripcion[i]
    filaDate.classList.add('text-center')
    tablaFila.appendChild(filaDate) // [fila] <- [celda]

    filaDate = document.createElement('td')
    if(publicado[i] == true){
        filaDate.classList.add('bi', 'bi-check', 'text-center', 'text-success', 'display-5')
        filaDate.classList.add('text-center')
        tablaFila.appendChild(filaDate) // [fila] <- [celda]
    }else{
        filaDate.classList.add('bi', 'bi-x', 'text-center', 'text-danger', 'display-5')
        filaDate.classList.add('text-center')
        tablaFila.appendChild(filaDate) // [fila] <- [celda]
    }

    filaDate = document.createElement('td') // creo una celda [especial]

    // ESTO LO HIZO CHATGPT, PERO ES ALGO ESTÁTICO ASÍ QUE NO HAY DRAMA
    const divBotones = document.createElement('div');
    divBotones.classList.add('text-center');

    const btnEliminar = document.createElement('button');
    btnEliminar.classList.add('btn', 'deleteButton', 'shadow-button');
    btnEliminar.id = `deleteID${i+1}`

    btnEliminar.addEventListener('click', (e) => {
        console.log(`Se eliminó la fila ${i+1}`);
        biblioteca._peliculaArray.splice(i,1)
        guardarPeliculas(biblioteca)
        borrarContenidoTabla()
        actualizarPeliculasPorLocalStorage()
        // AMIGO NO TENGO NI IDEA COMO FUNCIONA PERO DEJENLO ASÍ PORFAVOR
    });

    const iconoEliminar = document.createElement('span');
    iconoEliminar.classList.add('bi', 'bi-trash', 'text-white');
    iconoEliminar.setAttribute('aria-hidden', true);
    btnEliminar.appendChild(iconoEliminar);
    divBotones.appendChild(btnEliminar);

    const btnEditar = document.createElement('button');
    btnEditar.classList.add('btn', 'editButton', 'shadow-button');
    btnEditar.id = `editID${i+1}`
    const iconoEditar = document.createElement('span');
    iconoEditar.classList.add('bi', 'bi-pencil-square', 'text-white');
    iconoEditar.setAttribute('aria-hidden', true);
    
    btnEditar.appendChild(iconoEditar);
    divBotones.appendChild(btnEditar);

    const btnFavorito = document.createElement('button');
    btnFavorito.classList.add('btn', 'favButton', 'shadow-button');
    btnFavorito.id = `favID${i+1}`
    btnFavorito.addEventListener('click', () => {
        alert('No puedes cambiar la pelicula de Messi, es la única favorita...')
        console.log("El problema consiste en que la lógica que implica es muy difícil, por eso esto queda en el backlog")
    })
    // la logica es muy difícil...
    const iconoFavorito = document.createElement('span');
    iconoFavorito.classList.add('bi', 'bi-star', 'text-white');
    iconoFavorito.setAttribute('aria-hidden', true);
    btnFavorito.appendChild(iconoFavorito);
    divBotones.appendChild(btnFavorito);

    filaDate.classList.add('text-center')
    filaDate.appendChild(divBotones); // [botones] <- [celda]
    
    tablaFila.appendChild(filaDate) // [fila] <- [celda]

    cuerpoTabla.appendChild(tablaFila); // [cuerpo] <- [fila]
    tablaPelicula.appendChild(cuerpoTabla); // [tabla] <- [cuerpo]
    } // fin for generacion total

} // fin funcion

// creo una pelicula
function createMovie (event){
    event.preventDefault()

    // obtenemos los valores
    const nombre = inputNombre.value;
    const categoria = inputCategoria.value;
    const descripcion = inputDescripcion.value;
    let pelicula;

    // Creo el objeto pelicula
    if(inputPublicado.checked == true){
        pelicula = new Movie(nombre, categoria, descripcion, true)
        // aca envia que está seleccionado
    }else{
        pelicula = new Movie(nombre, categoria, descripcion, false)
        // aca envia que no está seleccionada
    }

    // agregamos la pelicula a la biblioteca
    biblioteca.agregarPelicula(pelicula)
    // me lo guarda en el localstorage
    guardarPeliculas(biblioteca)
    // limpio los inputs
    limpiarInputs()    
    borrarContenidoTabla();
    actualizarPeliculasPorLocalStorage()
}

// Evento que recibe los datos del form

btnAgregar.addEventListener('click', createMovie)

// Evento que limpia los botones

btnLimpiar.addEventListener('click', limpiarInputs)

// Este hace que cada vez que entre a la página carge lo que exista en el localStorage.
document.addEventListener('DOMContentLoaded', actualizarPeliculasPorLocalStorage);