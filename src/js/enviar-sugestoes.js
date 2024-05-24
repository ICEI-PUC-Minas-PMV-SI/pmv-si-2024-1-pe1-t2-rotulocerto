let sugestoes;

fetch('../api/db.json')
    .then((res) => res.json())
    .then(({ sugestoes: sugestoesData }) => {
        sugestoes = sugestoesData;
        console.log('sugestoes', sugestoes);
    });

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('form-sugestoes');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var formData = new FormData(form);
        var sugestObj = {
            "id": Date.now()
        };

        formData.forEach((value, key) => {
            sugestObj[key] = value;
        });

        sugestoes.suggestionsList.push(sugestObj);

        var updatedSugestoesJSON = {
            ...sugestoes, 
            "suggestionsList": sugestoes.suggestionsList 
        };

        console.log('Sugestões atualizadas:', updatedSugestoesJSON);

        fetch('../api/db.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedSugestoesJSON)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao atualizar sugestões');
            }
            return response.json();
        })
        .then(data => {
            console.log('Resposta do servidor:', data);
        })
        .catch(error => {
            console.error('Erro:', error);
        });

        form.reset();
    });
});
