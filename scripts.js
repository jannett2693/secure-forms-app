document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Todos los campos son obligatorios.');
    } else if (username === 'administrador' && password === 'p@$$w0rd') {
        alert('Fin de la parte del login de la práctica');
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});
