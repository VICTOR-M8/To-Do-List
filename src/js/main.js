
const loginButton = document.getElementById('loginButton');
const signupButton = document.getElementById('signupButton');


loginButton.addEventListener('click', () => {
    window.location.href = '/src/html/login.html';
});

signupButton.addEventListener('click', () => {
    window.location.href = '/src/html/sign-up.html'; 
});
