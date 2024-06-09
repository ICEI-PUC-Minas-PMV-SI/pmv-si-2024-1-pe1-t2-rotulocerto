let sugestoes = { suggestionsList: [] };


document.addEventListener('DOMContentLoaded', function() {
    var storedSugestoes = localStorage.getItem('sugestoes');
    if (storedSugestoes) {
        sugestoes = JSON.parse(storedSugestoes);
    }
    console.log('Sugestões carregadas:', sugestoes);

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

        localStorage.setItem('sugestoes', JSON.stringify(updatedSugestoesJSON));

        form.reset();
    });
});
