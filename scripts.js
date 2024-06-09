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

document.getElementById('change-password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var currentPassword = document.getElementById('current-password').value;
    var newPassword = document.getElementById('new-password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if (currentPassword === '' || newPassword === '' || confirmPassword === '') {
        alert('Todos los campos son obligatorios.');
    } else if (newPassword !== confirmPassword) {
        alert('La nueva contraseña no coincide con la que has puesto.');
    } else {
        alert('Fin de la parte de la contraseña de la práctica');
    }
});
