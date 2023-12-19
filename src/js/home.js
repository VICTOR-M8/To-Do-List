
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


const cards = document.querySelectorAll('.card');


const cardLinks = {
    'dia': 'dia.html',
    'importante': 'imp.html',
    'hogar': 'hogar.html',
    'educacion': 'edu.html'
};


function handleCardClick(event) {
    
    const cardClass = event.currentTarget.classList[1];
    

    const link = cardLinks[cardClass];
    

    if (link) {
        window.location.href = link;
    }
}

cards.forEach(card => {
    card.addEventListener('click', handleCardClick);
});
