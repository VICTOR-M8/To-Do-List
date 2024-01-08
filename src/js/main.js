// Obtener los botones
const loginButton = document.getElementById('loginButton');
const signupButton = document.getElementById('signupButton');

// Redirigir a las páginas respectivas al hacer clic
loginButton.addEventListener('click', () => {
    window.location.href = 'sign-up.html';  
});

signupButton.addEventListener('click', () => {
    window.location.href = 'login.html'; 
});
