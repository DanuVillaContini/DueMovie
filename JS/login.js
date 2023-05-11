// ---- VARIABLES PARA OBTENER LO INGRESADO EN LOS INPUT LOGIN -----
const loginForm = document.querySelector('#login-form');
const submitButton = document.querySelector('#submit-button');


//----------MODAL ALERT---------------
// Función que muestra el modal con el mensaje recibido como parámetro
function mostrarModal(mensaje) {
    // Obtener el modal y el elemento de texto del modal
    let modal = document.getElementById("modal-msg");
    let modalMensaje = document.getElementById("modal-msg-text");

    // Asignar el mensaje al elemento de texto del modal
    modalMensaje.textContent = mensaje;

    // Mostrar el modal
    modal.style.display = "block";
}
//Funcion button cancelar
let buttonCancelar = document.getElementsByClassName("close")[0];

function cerrarModal() {
    let modal = document.getElementById("modal-msg");
    modal.style.display = "none";
}


// ------------- FUNCION VALIDAR DATOS ---------------
function login(event) {
    // Prevenir que se envíe el formulario
    event.preventDefault();

    // Obtener los valores de email y password
    const email = document.querySelector('#email').value;
    const pass = document.querySelector('#password').value;

    // Obtener los datos guardados en el local storage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Buscar al usuario correspondiente
    const user = usuarios.find(user => user.email === email && user.pass === pass);

    //---- VALIDADO LOS DATO = REDIRIGIR A PAGE ADMIN (si no, modal alert)------
    if (user) {
        window.location.href = 'admin.html';
    } else {
        mostrarModal('Email o password incorrectos.')
        
    }
}

// ------------- EVENTO --------------------
loginForm.addEventListener('submit', login);

