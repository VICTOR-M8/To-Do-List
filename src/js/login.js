const loginForm = document.querySelector('#loginForm');
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;
            const Users = JSON.parse(localStorage.getItem('users')) || [];
            const validUser = Users.find(user => user.email === email && user.password === password);
            if (!validUser) {
                alert('Usuario y/o contraseña incorrectos');
            } else {
                alert(`¡Bienvenido ${validUser.name}!`);

                localStorage.setItem('usuario', JSON.stringify(validUser));
                
                window.location.href = 'home.html';

            }
        });