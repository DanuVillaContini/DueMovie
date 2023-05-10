/* Página o modal de Login
El diseño de esta página es opcional.
El formulario de login debe solicitar un nombre de usuario o email y contraseña. Estos campos deben estar correctamente validados.  
Incorporar un link para recuperar la contraseña en caso de no recordarla, al presionar este link mostrar los pasos a seguir para poder recuperar la contraseña.
Si me logueo como el usuario administrador, me debe redirigir a la web de administración, si el usuario y contraseña ingresados no existe, debo informar con un modal o alert. */


// document.getElementById('login-form').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     // Obtener los valores de los campos de entrada
//     let username = document.getElementById('username').value;
//     let password = document.getElementById('password').value;
  
//     // Validar los campos de entrada
//     if (username.trim() === '') {
//       alert('Por favor ingresa tu nombre de usuario o correo electrónico.');
//       return false;
//     }
  
//     if (password.trim() === '') {
//       alert('Por favor ingresa tu contraseña.');
//       return false;
//     }
  
//     // Simular un inicio de sesión exitoso
//     if (username === 'admin' && password === 'admin') {
//       window.location.href = 'admin.html';
//     } else {
//       alert('Usuario y/o contraseña incorrectos.');
//     }
//   });  

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
        window.location.href = 'welcome.html';
    } else {
        mostrarModal('Email o password incorrectos.')
        
    }
}

// ------------- EVENTO --------------------
loginForm.addEventListener('submit', login);

