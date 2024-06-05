const form = document.getElementById('formulario-login');
const emailInput = document.getElementById('usuario');
const passwordInput = document.getElementById('senha');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isValid = true;

    if (emailInput.value === '') {
        isValid = false;
    }

    if (passwordInput.value === '') {
        isValid = false;
    }

    if (isValid) {
        console.log('Usuario logado com sucesso');
        window.location.href = 'index.html';
    }
});
