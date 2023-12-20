
document.addEventListener('DOMContentLoaded', function() {
    // Agregar evento al botón de cierre de sesión
    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', cerrarSesion);
});

function cerrarSesion() {
    localStorage.removeItem('usuario'); // Eliminar la información del usuario al cerrar sesión
    window.location.href = 'login.html'; // Redireccionar a la página de login
}

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
