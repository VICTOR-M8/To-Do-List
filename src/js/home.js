
const FECHA = new Date()
fecha.innerHTML = FECHA.toLocaleDateString('es-es', { weekday: 'long', month: 'short', day: 'numeric' })



document.addEventListener('DOMContentLoaded', function() {

    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', cerrarSesion);
});

function cerrarSesion() {
    localStorage.removeItem('usuario'); 
    window.location.href = 'login.html'; 
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
