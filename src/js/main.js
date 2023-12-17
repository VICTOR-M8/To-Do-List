// Obtener los botones
const loginButton = document.getElementById('loginButton');
const signupButton = document.getElementById('signupButton');

// Redirigir a las páginas respectivas al hacer clic
loginButton.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5500/src/html/login.html'; // Reemplaza 'ruta_para_login.html' con la ruta correcta de tu página de inicio de sesión
});

signupButton.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5500/src/html/sign-up.html'; // Reemplaza 'ruta_para_registro.html' con la ruta correcta de tu página de registro
});
