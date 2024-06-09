document.addEventListener('DOMContentLoaded', function() {

    var storedSugestoes = localStorage.getItem('sugestoes');
    var sugestoes = storedSugestoes ? JSON.parse(storedSugestoes) : [];

    console.log('Sugestões carregadas:', sugestoes);

    var form = document.getElementById('form-sugestoes');

    if (form) { 
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            var formData = new FormData(form);
            var sugestObj = {
                "id": Date.now()
            };

            formData.forEach((value, key) => {
                sugestObj[key] = value;
            });

            sugestoes.push(sugestObj);

            console.log('Sugestões atualizadas:', sugestoes);

            localStorage.setItem('sugestoes', JSON.stringify(sugestoes));

            alert('Sugestão enviada com sucesso!');

            form.reset();
        });
    }
});
