
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        if (email === "" || senha === "") {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (email === "admin@example.com" && senha === "123456") {
            alert('Login bem-sucedido!');
            window.location.href = "sobrenos.html";
        }
        
        if (email === "rotulocerto@example.com" && senha === "1234567") {
            alert('Login bem-sucedido!');
            window.location.href = "sobrenos.html";
        }else {
            alert('Email ou senha incorretos.');
        }
    });
});

