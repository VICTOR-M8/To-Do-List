// Obtener el botón por su ID
const boton = document.getElementById('botonRedireccionar');

// Agregar un event listener para el clic en el botón
boton.addEventListener('click', function() {
    // Redireccionar a otra página
    window.location.href = 'http://127.0.0.1:5500/src/html/list.html'; // Reemplaza con la URL deseada
});
