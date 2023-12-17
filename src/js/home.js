
function obtenerNombreUsuario() {
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario && usuario.nombre) {
        return usuario.nombre;
    } else {
        return "Usuario";
    }
}

function mostrarSaludo() {
    const nombreUsuario = obtenerNombreUsuario();
    const saludo = document.getElementById('saludo');
    saludo.textContent = `¡Hola, ${nombreUsuario}!`;
}

function mostrarFecha() {
    const fechaElemento = document.getElementById('fecha');
    const fechaActual = new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    fechaElemento.textContent = `Hoy es ${fechaActual}`;

}


function cerrarSesion() {
    localStorage.removeItem('usuario'); // Eliminar la información del usuario al cerrar sesión
    window.location.href = 'login.html'; // Redirigir a la página de inicio de sesión
}

document.addEventListener('DOMContentLoaded', function() {
    mostrarSaludo();
    mostrarFecha();

    // Agregar evento al botón de cierre de sesión
    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', cerrarSesion);
});
