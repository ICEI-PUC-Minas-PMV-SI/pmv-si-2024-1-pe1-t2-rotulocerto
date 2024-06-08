const form = document.getElementById('formulario-login');
const emailInput = document.getElementById('usuario');
const passwordInput = document.getElementById('senha');

// Definindo o email e senha padrão

const emailPadrao = 'rotulocerto@gmail.com'
const senhaPadrao = 'senha22'

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isValid = true;

    if (emailInput.value !== emailPadrao || passwordInput.value !== senhaPadrao) {
        isValid = false;

        const mensagemErro = document.getElementById('mensagem-erro');
        mensagemErro.textContent = 'Email ou senha incorretos';
    }
    

    if (isValid) {
        console.log('Usuario logado com sucesso');
        window.location.href = 'sugestoes-enviadas.html';
    }
 });
