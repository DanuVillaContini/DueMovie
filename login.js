/* Página o modal de Login
El diseño de esta página es opcional.
El formulario de login debe solicitar un nombre de usuario o email y contraseña. Estos campos deben estar correctamente validados.  
Incorporar un link para recuperar la contraseña en caso de no recordarla, al presionar este link mostrar los pasos a seguir para poder recuperar la contraseña.
Si me logueo como el usuario administrador, me debe redirigir a la web de administración, si el usuario y contraseña ingresados no existe, debo informar con un modal o alert. */


document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores de los campos de entrada
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
  
    // Validar los campos de entrada
    if (username.trim() === '') {
      alert('Por favor ingresa tu nombre de usuario o correo electrónico.');
      return false;
    }
  
    if (password.trim() === '') {
      alert('Por favor ingresa tu contraseña.');
      return false;
    }
  
    // Simular un inicio de sesión exitoso
    if (username === 'admin' && password === 'admin') {
      window.location.href = 'admin.html';
    } else {
      alert('Usuario y/o contraseña incorrectos.');
    }
  });  