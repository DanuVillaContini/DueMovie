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
        this._peliculaArray = []
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


// let biblioteca
// // Verificar si el Local Storage está disponible en el navegador
// if (typeof localStorage !== 'undefined') {
//     // Recuperar el contenido almacenado en el Local Storage
//     jsonStorage = localStorage.getItem('pelis');
//     biblioteca = JSON.parse(jsonStorage)

// }else {
//     biblioteca = new Biblioteca()
//     console.log('Se generó una biblioteca.');
// }

let biblioteca = new Biblioteca()

let inputNombre = document.getElementById('nombre-input')
let inputCategoria = document.getElementById('categoria-input')
let inputDescripcion = document.getElementById('descripcion-input')
let inputPublicado = document.getElementById('publicado-input')
let inputNoPublicado = document.getElementById('nopublicado-input')

let btnAgregar = document.getElementById('btn-modal-agregar')
let btnLimpiar = document.getElementById('btn-modal-limpiar')

// Botones de Modal para edición
let btnGuardar = document.getElementById('btn-guardar')
let btnVerificar = document.getElementById('btn-verificar')
// Variables Globales para edición
let valorArray
let nombre
let categoria 
let descripcion
let publicado
let publicadoChange


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
        e.preventDefault()
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
    btnEditar.setAttribute('data-bs-toggle', 'modal');
    btnEditar.setAttribute('data-bs-target', '#miModal');
    btnEditar.id = `editID${i+1}`
    btnEditar.addEventListener('click', (e) => {
        e.preventDefault();
        valorArray = e.target.closest('tr').firstChild.textContent
        // con este código obtengo el valor para el index del array
        checkboxes = document.querySelectorAll('.editable-field');

        // obtengo un array de los checkboxes
        checkboxes.forEach((item,index,checkboxes) => {
            // checkboxes[index].parentNode.querySelector('.checkboxEdicion').checked
            // todo ese chorizo selecciona el checkbox
            let checkboxEdicion = checkboxes[index].parentNode.querySelector('.checkboxEdicion')
            item.value = ''
            checkboxEdicion.addEventListener('change', (e) => {

                e.preventDefault()
                if (checkboxEdicion.checked) {
                    item.removeAttribute('disabled')
                } else {
                    item.value = ''
                    item.setAttribute('disabled','disabled')
                }
            })
        })
    })
    const iconoEditar = document.createElement('span');
    iconoEditar.classList.add('bi', 'bi-pencil-square', 'text-white');
    iconoEditar.setAttribute('aria-hidden', true);
    
    btnEditar.appendChild(iconoEditar);
    divBotones.appendChild(btnEditar);

    const btnFavorito = document.createElement('button');
    btnFavorito.classList.add('btn', 'favButton', 'shadow-button');
    btnFavorito.id = `favID${i+1}`
    let counter = 0
    btnFavorito.addEventListener('click', (e) => {
        e.preventDefault();
        let fila = e.target.closest('tr')
        let filasFav = document.querySelectorAll('tr.bg-success');

        if (filasFav.length >= 3) {
        // Deselecciona el último elemento 'tr' con la clase 'bg-success'
        filasFav[filasFav.length - 1].classList.remove('bg-success');
        }

        if(fila) {
            fila.classList.toggle('bg-success')
            console.log(fila)
        }
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
    console.log(typeof(biblioteca))
    biblioteca.agregarPelicula(pelicula)
    // me lo guarda en el localstorage
    guardarPeliculas(biblioteca)
    // limpio los inputs
    limpiarInputs()    
    borrarContenidoTabla();
    actualizarPeliculasPorLocalStorage()
}

function realizarCambio(nombre, categoria, descripcion, publicadoChange){
    let pelisJSON = localStorage.getItem('pelis');
    let pelisArray = JSON.parse(pelisJSON);
    
    // console.log(typeof(pelisJSON)) // string
    // console.log(typeof(pelisArray)) // objeto
    // // el de arriba es el objeto {_peliculaArray: Array(n)}
    // console.log(pelisArray._peliculaArray) // me da un array que adentro tiene un objeto [{…}]
    // console.log(pelisArray._peliculaArray[valorArray-1]) // me devuelve la posición necesaria
    // // entonces
    pelisArray._peliculaArray[valorArray-1]._nombre = nombre
    pelisArray._peliculaArray[valorArray-1]._categoria = categoria
    pelisArray._peliculaArray[valorArray-1]._descripcion = descripcion
    pelisArray._peliculaArray[valorArray-1]._publicado = publicado
    guardarPeliculas(pelisArray)
    borrarContenidoTabla()
    actualizarPeliculasPorLocalStorage()
}

// Eventos

// Evento que recibe los datos del form

btnAgregar.addEventListener('click', createMovie)

// Evento que limpia los botones

btnLimpiar.addEventListener('click', limpiarInputs)



// Este hace que cada vez que entre a la página carge lo que exista en el localStorage.
document.addEventListener('DOMContentLoaded', ()=>{
    actualizarPeliculasPorLocalStorage()
    btnGuardar.disabled = true
});

btnVerificar.addEventListener('click', (e) => {
    e.preventDefault();
    nombre = document.getElementById('txtNombre').value
    categoria = document.getElementById('txtCategoria').value
    descripcion = document.getElementById('txtDescripcion').value
    publicado = document.getElementById('txtPublicado').value

    if(nombre != '' && categoria != '' && descripcion != '' && publicado != '') {
        btnGuardar.disabled = false
        console.log('Se puede guardar los datos ahora.')
    }else{
        btnGuardar.disabled = true
        alert('Debes rellenar todos los campos.')
    }
})

btnGuardar.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('Se registró correctamente los datos; se cambiará el objeto ' + valorArray)
    // cambio
    if(publicado == 'true'){
        publicadoChange = true
    }else{
        publicadoChange = false
    }

    realizarCambio(nombre, categoria, descripcion, publicadoChange)

    // con esto ya se tiene que hacer el cambio también necesito el "valorArray"
})