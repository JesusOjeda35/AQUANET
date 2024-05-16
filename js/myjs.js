document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const registerLink = document.getElementById('register-link');
    const loginLink = document.getElementById('login-link');
    const registerButton = document.getElementById('register-button');
    const loginButton = document.getElementById('login-button');

    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    });

    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    registerButton.addEventListener('click', (e) => {
        e.preventDefault();
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;

        if (username && password) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            alert('Registro exitoso. Ahora puede iniciar sesión.');
            registerForm.style.display = 'none';
            loginForm.style.display = 'block';
        } else {
            alert('Por favor complete todos los campos.');
        }
    });

    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            alert('Inicio de sesión exitoso.');
        } else {
            alert('Usuario o contraseña incorrectos.');
        }
    });
});