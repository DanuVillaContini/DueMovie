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