var sexoSelecionado = '';
function setSexo(sexo) {
    sexoSelecionado = sexo;

    var botoesSexo = document.querySelectorAll('.homem, .mulher');
    botoesSexo.forEach(function(botao) {
        botao.classList.remove('selecionado');
    });

    if (sexo === 'Homem') {
        document.querySelector('.homem').classList.add('selecionado');
    } else if (sexo === 'Mulher') {
        document.querySelector('.mulher').classList.add('selecionado');
    }
}
function calcularIMC() {
    var idade = parseInt(document.getElementById('idade').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(idade) || isNaN(altura) || isNaN(peso) || idade <= 0 || altura <= 0 || peso <= 0 || sexoSelecionado === '') {
        document.getElementById('resultado').innerHTML = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    var alturaMetros = altura / 100;
    var imc = peso / (alturaMetros * alturaMetros);

    var categoria = '';

    if (sexoSelecionado === 'Homem') {
        if (imc < 20.7) {
            categoria = 'Abaixo do peso';
        } else if (imc >= 20.7 && imc < 26.4) {
            categoria = 'Peso normal';
        } else if (imc >= 26.4 && imc < 27.8) {
            categoria = 'Marginalmente acima do peso';
        } else if (imc >= 27.8 && imc < 31.1) {
            categoria = 'Acima do peso ideal';
        } else {
            categoria = 'Obeso';
        }
    } else if (sexoSelecionado === 'Mulher') {
        if (imc < 19.1) {
            categoria = 'Abaixo do peso';
        } else if (imc >= 19.1 && imc < 25.8) {
            categoria = 'Peso normal';
        } else if (imc >= 25.8 && imc < 27.3) {
            categoria = 'Marginalmente acima do peso';
        } else if (imc >= 27.3 && imc < 32.3) {
            categoria = 'Acima do peso ideal';
        } else {
            categoria = 'Obesa';
        }
    }
    var resultadoHTML = "Seu IMC é: " + imc.toFixed(2) + "<br>Categoria: " + categoria;
    var resultadoHTML = `
        <div class="IMCresultado">Seu IMC é: ${imc.toFixed(2)} Kg/m2</div>
        <div class="categoriaIMC">De acordo com a Organização Mundial da Saúde, seu IMC é considerado ${categoria} para a sua altura.</div>

`;
    document.getElementById('quadrado').innerHTML = `
    <img src="/docs/img/template/logoRC.png" alt="" class="logo">
    ${resultadoHTML}
        <div class="tabelaResultado">
            <div class="classificacao2">
                <h6 class="tabela-cima2resultado">nada</h6>
                <p>Magreza</p>
                <p>Normal</p>
                <p>Sobrepeso</p>
                <p>Obesidade</p>
            </div>
            <div class="IMC2">
                <h6 class="tabela-cimaresultado">IMC</h6>
                <p><18,5</p>
                <p>18,5 a 24,9</p>
                <p>25,1 a 29,9</p>
                <p>>30,0</p>
            </div>
            <div class="peso2">
                <h6 class="tabela-cima3resultado">Peso</h6>
                <p><54,3 Kg</p>
                <p>54,3 a 83,1 Kg</p>
                <p>83,1 a 98.4 Kg</p>
                <p>>98,4 Kg</p>
            </div>
        </div>
    `;
}