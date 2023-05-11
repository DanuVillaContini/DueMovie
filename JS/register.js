class NewUser {
    email;
    pass;
    firstName;
    lastName;

    constructor(nameEmail, pass, firstName, lastName) {
        this.email = nameEmail
        this.pass = pass
        this.firstName = firstName
        this.lastName = lastName
    }
}

//------------------- VARIABLES DE ADMINISTRADOR : ROLES -----------------
// let adminDani = new NewUser('daniAdmin@gmail.com', 'dani123', 'Daniela', 'Villa');
// let adminFrancisco = new NewUser('franAdmin@gmail.com', 'fran123', 'Francisco', 'Perez');
// let adminGi = new NewUser('giAdmin@gmail.com', 'gi123', 'Gi', 'Delgado');
// let adminTania = new NewUser('taniaAdmin@gmail.com', 'tania123', 'Tania', 'Santucho');
// let adminFlor = new NewUser('florAdmin@gmail.com', 'flor123', 'Flor', 'Jorrat');


//-------------------VARIABLES DE LOS MODALS------------------------------
let modalMensajeExito = document.getElementById("modal-msg");
let buttonCancelar = document.getElementsByClassName("close")[0];
let modalMsgAdvertencia = document.getElementById("modal-msg-advertencia")

//Funcion que abre el modal cuando se registra exitosamente
function mostrarModal() {
    modalMensajeExito.style.display = "block";
}
//Funcion button cancelar
function cerrarModal() {
    modalMensajeExito.style.display = "none";
}

//Funcion modal con mensaje de advertencia antes de click btt registrarse
function msjAdvertencia() {
    modalMsgAdvertencia.style.display = "block";
}
//Funcion button cancelar
function cerrarModalAdv() {
    modalMsgAdvertencia.style.display = "none";
}


//---------- FUNCION REGISTRAR NUEVO USUARIO -----------------------------------
function guardarRegistro() {
    //-----------VARIABLES-----------
    let emailInput = document.getElementById('email-input').value;
    let passInput = document.getElementById('password-input').value;
    let firstNameInput = document.getElementById('firstName-input').value;
    let lastNameInput = document.getElementById('lastName-input').value;

    // Validar campos requeridos
    if (!emailInput || !passInput || !firstNameInput || !lastNameInput) {
        //Funcion modal de advertencia que no lleno todos los campos necesarios para poder registrarse
        msjAdvertencia()
        return;
    }

    //-----------CREO NUEVO OBJETO USER-----------
    let userNew = new NewUser(emailInput, passInput, firstNameInput, lastNameInput);

    //-----------GUARDAR OBJETO USER EN EL LOCAL STORAGE-----------
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push(userNew);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    //-----------BORRAR LOS VALORES DE LOS INPUTS-----------
    document.getElementById('email-input').value = '';
    document.getElementById('password-input').value = '';
    document.getElementById('firstName-input').value = '';
    document.getElementById('lastName-input').value = '';

    //----------MENSAJE MODAL DE REGISTRO EXITOSO Y PROXIMOS PASOS-----------
    mostrarModal()

}

//--------------------------------------------------------